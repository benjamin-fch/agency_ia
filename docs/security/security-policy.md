# Politique de sécurité opérationnelle — Agency IA

## Principes fondamentaux

1. **Principe du moindre privilège** : chaque intégration n'a accès qu'à ce dont elle a strictement besoin
2. **Secrets externalisés** : aucune clé, token ou mot de passe dans le code source versionné
3. **Validation humaine** : aucun contenu n'est livré à un client sans relecture humaine
4. **Isolation** : les outils expérimentaux (Playwright) fonctionnent en isolation
5. **Traçabilité** : chaque livrable est versionné, chaque action automatisée est loguée

---

## Gestion des secrets

### Règles absolues
- `.env` dans `.gitignore` — jamais committé
- Variables d'environnement n8n utilisées pour toutes les clés API
- Jamais de secret dans les noms de variables Notion, les noms de fichiers, les logs
- Jamais de secret dans les prompts envoyés à Claude API

### Stockage
| Secret | Stockage | Accès |
|---|---|---|
| ANTHROPIC_API_KEY | Variables env n8n + .env local | Opérateur uniquement |
| NOTION_API_KEY | Variables env n8n | Opérateur uniquement |
| GOOGLE credentials | Variables env n8n | Opérateur uniquement |
| SMTP credentials | Variables env n8n | Opérateur uniquement |
| N8N_WEBHOOK_SECRET | Variables env n8n + .env site | Opérateur uniquement |

### Rotation
- Rotation tous les 6 mois (calendrier dans Notion, base "Ops")
- Rotation immédiate en cas de suspicion de compromission
- Après rotation : tester tous les workflows n8n avant de reprendre la production

---

## Sécurité des webhooks

Les webhooks n8n reçoivent des données de formulaires externes. Pour chaque webhook :

1. **Secret de validation** : chaque webhook vérifie le header `X-Webhook-Secret`
2. **Validation des champs** : n8n vérifie que les champs obligatoires sont présents et de type attendu
3. **Rate limiting** : configurer un rate limit de 10 req/min par IP sur le reverse proxy
4. **Logs** : activer les logs n8n pour chaque exécution (conservation 30 jours)

Configuration webhook côté formulaire site :
```javascript
fetch(WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Webhook-Secret': WEBHOOK_SECRET  // depuis variable env côté site
  },
  body: JSON.stringify(formData)
})
```

---

## Sécurité des données client

- Les données client (brief, audit, contenu) ne sont jamais envoyées à des APIs tierces non listées
- Les données client dans Notion sont accessibles uniquement via l'intégration dédiée
- Les livrables Google Docs sont partagés en lecture seule avec le client (lien, pas d'invitation)
- Pas de stockage de données client dans des outils expérimentaux

---

## Checklist sécurité mensuelle

- [ ] Vérifier qu'aucun `.env` ou clé n'est apparu dans git history (`git log --all -p | grep -i "sk-ant\|secret\|password"`)
- [ ] Vérifier les logs n8n pour des executions anormales
- [ ] Vérifier les accès actifs dans Notion (intégrations)
- [ ] Vérifier les tokens Google actifs
- [ ] Vérifier le certificat SSL n8n (expiration)
- [ ] Tester le backup des workflows n8n

---

## Réponse à incident

### Si une clé API est compromise
1. Révoquer immédiatement la clé dans le dashboard du fournisseur
2. Générer une nouvelle clé
3. Mettre à jour dans n8n (variables d'environnement)
4. Mettre à jour le `.env` local
5. Tester les workflows
6. Logger l'incident dans Notion (base "Ops > Incidents")

### Si n8n est indisponible
1. Vérifier le VPS (accès SSH, statut Docker)
2. Si VPS down → contacter hébergeur, ETA < 4h généralement
3. Basculer sur process manuel : utiliser les prompts directement via claude.ai
4. Mettre à jour le client si délai livraison impacté

### Si Notion est indisponible
1. Vérifier status.notion.so
2. Les données restent dans Notion (pas de perte)
3. Gérer les tâches urgentes via email
4. Reprendre normalement à la restoration

---

## Protections GitHub (à activer dans l'interface GitHub)

### 1. Secret Scanning + Push Protection
**Rôle :** Détecte les secrets connus (clés API, tokens) poussés accidentellement. Bloque le push si un pattern de secret est détecté avant qu'il soit public.

**Activation :**
Settings → Security → Secret scanning → "Enable" + "Push protection: Enable"

**Couverture :** Anthropic API keys, GitHub tokens, SendGrid keys, Google OAuth tokens, et 200+ patterns supplémentaires.

**Limite :** Ne couvre pas les secrets inventés/custom (ex : votre `N8N_WEBHOOK_SECRET` personnel). Pour ceux-ci, la règle `.gitignore` reste la seule protection.

### 2. CodeQL — Analyse statique JS
**Rôle :** Analyse le code JavaScript de `/site/assets/js/` à chaque push et PR sur main, plus chaque lundi. Détecte XSS, injections, appels dangereux.

**Configuration :** `.github/workflows/codeql.yml` (déjà présent dans le repo).

**Activation automatique** au premier push sur GitHub avec ce fichier.

**Couverture :** Code JS côté front uniquement. Ne couvre pas les workflows n8n (JSON, pas du code exécuté sur GitHub).

**Limite :** Ce repo a peu de JS dynamique — la surface d'attaque est faible. La valeur principale est préventive (si le JS s'étoffe).

### 3. Dependabot — Mises à jour GitHub Actions
**Rôle :** Met à jour automatiquement les versions des GitHub Actions utilisées dans les workflows, pour éviter d'utiliser des versions obsolètes ou compromises.

**Configuration :** `.github/dependabot.yml` (déjà présent). Vérifications mensuelles.

**Note :** Ce repo n'a pas de `package.json`. Si des dépendances npm sont ajoutées, ajouter un bloc `npm` dans `dependabot.yml`.

### 4. Branch Protection (configuration manuelle recommandée)
**Activation :** Settings → Branches → Add rule → `main`

**Règles recommandées :**
- Require pull request before merging
- Require status checks (CodeQL) before merging
- Restrict deletions

### Actions manuelles requises après le premier push sur GitHub
1. Activer Secret Scanning + Push Protection (Settings → Security)
2. Vérifier que le workflow CodeQL s'est déclenché (Actions tab)
3. Configurer Branch Protection sur `main`
4. Vérifier que Dependabot est actif (Security tab → Dependabot)
