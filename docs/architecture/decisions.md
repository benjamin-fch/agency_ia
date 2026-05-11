# Journal de décisions architecturales (ADR)

Format : Contexte → Décision → Conséquences → Statut

---

## ADR-001 : Site statique plutôt que framework JS

**Contexte** : Le site de l'agence doit être déployable rapidement, maintenu par une seule personne, sans infrastructure complexe.

**Décision** : HTML/CSS/JS vanilla déployé sur Netlify ou GitHub Pages.

**Conséquences** :
- Déploiement en < 5 minutes
- Zéro dépendance runtime, zéro surface d'attaque serveur-side
- Moins flexible pour fonctionnalités dynamiques (auth, espace client) mais hors scope MVP
- Formulaires envoyés via fetch vers webhook n8n (solution robuste)

**Statut** : Validé

---

## ADR-002 : n8n auto-hébergé plutôt que service cloud

**Contexte** : Les workflows d'orchestration manipulent des données client sensibles (emails, noms, contexte business).

**Décision** : n8n Community Edition sur VPS dédié (Hetzner CX22 ou équivalent).

**Conséquences** :
- Données client restent sur infrastructure contrôlée
- Coût inférieur à n8n cloud pour le volume attendu
- Responsabilité de la maintenance (backups, updates) — gérable avec cron hebdomadaire
- Si VPS tombe : fallback manuel, impact limité (Notion reste accessible)

**Risque si rejeté** : Lock-in tarifaire à partir de 5+ clients, exposition des données à une tierce partie.

**Statut** : Validé

---

## ADR-003 : Claude Sonnet comme modèle par défaut

**Contexte** : La génération de contenu représente le cœur de la proposition de valeur. Le coût doit rester maîtrisé.

**Décision** : `claude-sonnet-4-6` pour 95% des usages (drafts, audits, recommandations). `claude-opus-4-7` réservé aux propositions commerciales ou contenus stratégiques.

**Conséquences** :
- Coût estimé < 30 €/mois pour 5 clients actifs
- Qualité de rédaction française très élevée
- Latence acceptable (5-15 secondes par génération)

**Fallback** : Si Anthropic API indisponible, utilisation manuelle via claude.ai avec les prompts du repo.

**Statut** : Validé

---

## ADR-004 : Notion pour le pipeline client

**Contexte** : Besoin d'un CRM léger, accessible depuis mobile, partageable avec des collaborateurs potentiels, sans expertise technique requise.

**Décision** : Notion avec MCP officiel pour intégration n8n.

**Conséquences** :
- Interface non-technique pour gestion quotidienne
- API stable et documentée
- MCP officiel maintenu par Notion
- Si Notion change son pricing : migration vers Airtable ou Linear (1-2 jours de travail)

**Alternative rejetée** : Airtable (pricing moins prévisible), HubSpot (overkill, coût élevé).

**Statut** : Validé

---

## ADR-005 : Pas de Slack, fallback email

**Contexte** : Slack nécessite une intégration OAuth complexe, un workspace maintenu, une app Slack approuvée pour certains usages.

**Décision** : Toutes les notifications et communications internes passent par email SMTP (SendGrid) ou webhooks.

**Conséquences** :
- Simplicité de setup (SMTP standard)
- Universal inbox, pas de dépendance app tierce
- Légèrement moins "temps réel" que Slack mais suffisant pour une micro-agence

**Condition de révision** : Si l'équipe dépasse 2 personnes, réévaluer Slack ou Discord.

**Statut** : Validé

---

## ADR-006 : Playwright uniquement pour QA en isolation

**Contexte** : Playwright MCP peut être utilisé pour crawler des sites client, capturer des screenshots, valider le rendu.

**Décision** : Playwright autorisé uniquement pour la phase QA, dans un environnement isolé (Docker), sur des URLs client explicitement approuvées.

**Conséquences** :
- Risque de sécurité maîtrisé (pas d'exécution de code tiers dans le process principal)
- Usage restreint : validation visuelle de livrables, pas de scraping automatique
- Ne jamais utiliser Playwright pour accéder à des sites tiers sans autorisation explicite

**Statut** : Validé avec restrictions
