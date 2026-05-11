# Architecture technique — Agency IA

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────┐
│                  COUCHE ACQUISITION                  │
│   Site HTML statique  ←→  Formulaires  ←→  LinkedIn │
└─────────────────────┬───────────────────────────────┘
                      │ webhooks
┌─────────────────────▼───────────────────────────────┐
│               COUCHE ORCHESTRATION                   │
│                  n8n auto-hébergé                    │
│   Lead intake → Qualification → Onboarding           │
│   Audit → Production → Validation → Livraison        │
└──────────┬──────────────────────────┬───────────────┘
           │                          │
┌──────────▼──────────┐   ┌──────────▼───────────────┐
│   COUCHE DONNÉES    │   │   COUCHE PRODUCTION       │
│                     │   │                           │
│   Notion            │   │   Claude API              │
│   - Prospects       │   │   - Génération contenu    │
│   - Clients         │   │   - Audit IA              │
│   - Projets         │   │   - Recommandations       │
│   - Tasks           │   │                           │
└──────────┬──────────┘   └──────────┬───────────────┘
           │                          │
┌──────────▼──────────────────────────▼───────────────┐
│               COUCHE LIVRAISON                       │
│   Google Drive / Docs — livrables finaux             │
│   Email SMTP — communications client                 │
│   GitHub — versionning des assets                    │
└─────────────────────────────────────────────────────┘
```

---

## Composants

### 1. Site agence (HTML statique)
- **Technologie** : HTML5 + CSS3 + JS vanilla
- **Hébergement** : Netlify (gratuit) ou GitHub Pages
- **Pourquoi pas Next.js** : Zéro infra, déploiement instantané, maintenable par une personne sans node expertise, aucune dépendance runtime
- **Formulaires** : Envoi vers webhook n8n via fetch POST
- **Risque** : Faible — HTML statique ne peut pas être compromis côté serveur
- **Fallback** : Si Netlify tombe, redéployer sur GitHub Pages en 5 min

### 2. n8n (orchestration)
- **Version** : n8n Community Edition, auto-hébergé sur VPS (ex: Hetzner CX22, ~4€/mois)
- **Pourquoi pas n8n Cloud** : Éviter lock-in tarifaire, garder contrôle complet des données
- **Déploiement recommandé** : Docker Compose sur VPS
- **Sécurité** : HTTPS obligatoire (Let's Encrypt), webhook secret, accès admin par IP ou VPN
- **Backup** : Export JSON des workflows hebdomadaire → repo GitHub (branche `workflows-backup`)
- **Risque** : Moyen — si le VPS tombe, les automations s'arrêtent. Impact : délai sur intake, pas de perte de données (Notion reste opérationnel)
- **Fallback** : Todos manuels dans Notion si n8n indisponible > 2h

### 3. Notion (pipeline client)
- **Usage** : CRM léger + suivi projets + knowledge base client
- **Structure des bases** :
  - `Prospects` : statut, source, score, date contact
  - `Clients` : contrat, offre, date début, NPS
  - `Projets` : lié à client, phase, deadline, livrables
  - `Tasks` : lié à projet, assigné à, statut
- **Accès** : API Notion via token d'intégration (read/write)
- **Risque** : Faible — Notion est très stable, API bien documentée
- **Fallback** : Export CSV Notion vers Google Sheets si API indisponible

### 4. Claude API
- **Modèle recommandé** : claude-sonnet-4-6 (rapport qualité/coût/vitesse optimal)
- **Modèle pour drafts longs** : claude-opus-4-7 si besoin de profondeur
- **Usage** : Appelé uniquement depuis n8n (pas d'appel direct front-end)
- **Sécurité** : Clé API uniquement dans variables d'environnement n8n, jamais dans le code
- **Coût estimé** : < 30 €/mois pour 5 clients actifs (estimation prudente)
- **Risque** : Faible — API Anthropic stable, fallback GPT-4o si Anthropic indisponible
- **Fallback** : Prompts prêts à utiliser manuellement via claude.ai si API down

### 5. Google Drive / Docs
- **Usage** : Livrables finaux uniquement (pas de stockage intermédiaire)
- **Accès** : OAuth2 via compte Google dédié à l'agence
- **Structure** :
  ```
  Drive Agence/
  ├── Livrables/
  │   ├── [NomClient]/
  │   │   ├── Audit-[date].gdoc
  │   │   ├── Proposition-[date].gdoc
  │   │   └── Contenu-[mois].gdoc
  ```
- **Partage** : Lien en lecture seule pour client, modification réservée à l'agence
- **Risque** : Faible
- **Fallback** : Export PDF manuel si Drive inaccessible

### 6. Email SMTP
- **Service recommandé** : SendGrid (100 emails/jour gratuits), ou Brevo
- **Usage** : Notifications client, envoi de livrables, relances
- **Risque** : Faible
- **Fallback** : Gmail manuel si SMTP down

---

## Flux de données

### Lead entrant
```
Formulaire site → Webhook n8n → Créer fiche Prospect Notion → Email auto-réponse → Task "Qualifier lead" dans Notion
```

### Onboarding client
```
Contrat signé → n8n webhook → Créer fiche Client → Créer espace projet Notion → Envoyer brief → Task "Call onboarding"
```

### Production contenu
```
Brief validé dans Notion → n8n déclenché → Claude API génère draft → Draft stocké dans Notion → Notification email → Relecture humaine → Validation → Export Google Docs → Livraison client
```

---

## Politique de secrets

- **Règle absolue** : Aucun secret dans le code, les fichiers de config versionnés, ou les logs
- **Stockage** : Variables d'environnement n8n (chiffrées) + `.env` local (gitignore absolu)
- **Rotation** : Rotation des clés API tous les 6 mois ou immédiatement après incident
- **Accès** : Clés accessibles uniquement à l'opérateur principal
- **Audit** : Revue des accès accordés à chaque intégration trimestriellement

---

## Décisions architecturales

| Décision | Choix retenu | Alternative rejetée | Raison |
|---|---|---|---|
| Hébergement site | Netlify statique | Vercel + Next.js | Zéro dépendance, maintenabilité maximale |
| Orchestration | n8n auto-hébergé | Make/Zapier | Pas de lock-in, open source, données on-premise |
| CRM | Notion | Airtable / HubSpot | MCP officiel, interface client-friendly, pricing stable |
| Génération IA | Claude API | OpenAI GPT | Qualité rédaction française supérieure, politique usage compatible |
| Livrables | Google Docs | Word/Notion pages | Universel, partageable sans compte, commentaires natifs |
| Communication | SMTP dédié | Slack | Simplicité, universalité, pas de dépendance app tierce |
