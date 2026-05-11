# Configuration n8n — Agency IA

## Option A : n8n auto-hébergé (recommandé)

### Infrastructure minimale
- **VPS** : Hetzner CX22 (2 vCPU, 4 Go RAM, 40 Go SSD) — environ 4 €/mois
- **OS** : Ubuntu 22.04 LTS
- **Domaine** : n8n.votredomaine.com

### Installation Docker Compose

```bash
# Sur le VPS, en SSH
mkdir -p /opt/n8n && cd /opt/n8n

# Créer le fichier docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  n8n:
    image: n8nio/n8n:latest
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=${N8N_BASIC_AUTH_USER}
      - N8N_BASIC_AUTH_PASSWORD=${N8N_BASIC_AUTH_PASSWORD}
      - N8N_HOST=${N8N_HOST}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://${N8N_HOST}/
      - GENERIC_TIMEZONE=Europe/Paris
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - NODE_ENV=production
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
EOF

# Créer le .env n8n
cat > .env << 'EOF'
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=[CHANGER_CE_MOT_DE_PASSE]
N8N_HOST=n8n.votredomaine.com
N8N_ENCRYPTION_KEY=[GÉNÉRER_UNE_CLÉ_32_CHARS]
EOF

# Lancer
docker-compose up -d
```

### Configuration HTTPS (Nginx + Certbot)

```nginx
# /etc/nginx/sites-available/n8n
server {
    server_name n8n.votredomaine.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

```bash
# Activer HTTPS
certbot --nginx -d n8n.votredomaine.com
```

---

## Option B : n8n Cloud (pour tester rapidement)

1. Créer un compte sur app.n8n.cloud
2. Plan Free : 5 workflows actifs, 2 500 exécutions/mois — suffisant pour tester
3. Configurer les credentials directement dans l'interface

**Limitations :** Données sur infrastructure n8n, pas chez vous. Passer en auto-hébergé avant 3 clients actifs.

---

## Configuration des credentials dans n8n

### Anthropic API
1. n8n → Settings → Credentials → New → "Anthropic"
2. Renseigner : API Key = valeur de `ANTHROPIC_API_KEY`
3. Nommer : `anthropic-api`

### Notion
1. n8n → Settings → Credentials → New → "Notion API"
2. Renseigner : Internal Integration Token = valeur de `NOTION_API_KEY`
3. Nommer : `notion-api`

### Google OAuth2
1. Créer un projet Google Cloud Console
2. Activer l'API Google Drive et Google Docs
3. Créer des credentials OAuth2 (type : Web application)
4. Ajouter URI de redirection : `https://n8n.votredomaine.com/rest/oauth2-credential/callback`
5. Dans n8n → New Credential → Google OAuth2 → renseigner Client ID et Secret
6. Nommer : `google-oauth2`

### SMTP (SendGrid)
1. n8n → Settings → Credentials → New → "SMTP"
2. Host : `smtp.sendgrid.net`, Port : `587`
3. User : `apikey`, Password : votre clé API SendGrid
4. Nommer : `smtp`

---

## Variables d'environnement à configurer dans n8n

Dans n8n → Settings → Environment Variables :

| Clé | Valeur |
|---|---|
| NOTION_DATABASE_PROSPECTS | ID de la base Notion |
| NOTION_DATABASE_CLIENTS | ID de la base Notion |
| NOTION_DATABASE_PROJETS | ID de la base Notion |
| N8N_WEBHOOK_SECRET | Secret à générer (ex: `openssl rand -hex 32`) |
| GOOGLE_DRIVE_FOLDER_LIVRABLES | ID du dossier Drive |

---

## Backup des workflows

```bash
# Script de backup hebdomadaire (à ajouter en cron)
# crontab -e → 0 2 * * 0 /opt/n8n/backup.sh

#!/bin/bash
DATE=$(date +%Y-%m-%d)
docker exec n8n n8n export:workflow --all --output=/tmp/backup-$DATE.json
cp /tmp/backup-$DATE.json /opt/n8n/backups/
# Optionnel : pousser vers GitHub
```
