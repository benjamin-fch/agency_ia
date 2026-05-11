# Checklist MVP — 7 jours pour être opérationnel

## Objectif
Avoir un système vendable et fonctionnel en une semaine. Pas parfait — opérationnel.

---

## Jour 1 — Setup technique de base

- [ ] Créer le compte Netlify et déployer le site (`/site/`) sur un sous-domaine temporaire
- [ ] Vérifier que les 5 pages s'affichent correctement (index, offres, process, cas-usage, contact)
- [ ] Vérifier l'affichage mobile sur les 5 pages
- [ ] Créer le compte Anthropic et récupérer la clé API
- [ ] Créer le compte Notion et dupliquer la structure de bases (Prospects, Clients, Projets)
- [ ] Créer le compte SendGrid (ou Brevo) et configurer le domaine d'envoi
- [ ] Copier `.env.example` → `.env` et renseigner les clés disponibles

---

## Jour 2 — n8n et workflows

- [ ] Déployer n8n sur VPS (ou utiliser n8n.cloud pour le MVP — OK pour tester)
  - Option rapide n8n.cloud : gratuit jusqu'à 5 workflows actifs
  - Option robuste : Hetzner CX22 + Docker Compose (voir `config/n8n-config.md`)
- [ ] Configurer les credentials dans n8n (Anthropic, Notion, SMTP)
- [ ] Importer et tester le workflow `01-lead-intake.json`
- [ ] Configurer le webhook et le tester avec un envoi de formulaire de test
- [ ] Vérifier que la fiche Prospect apparaît dans Notion et que les emails arrivent

---

## Jour 3 — Personnalisation du site

- [ ] Remplacer "Agency IA" par le nom réel de l'agence dans tous les fichiers HTML
- [ ] Remplacer `hello@votreagence.com` par le vrai email
- [ ] Remplacer les URLs et numéros de téléphone
- [ ] Configurer le formulaire de contact : ajouter `data-webhook-url` dans le form HTML
- [ ] Connecter le domaine personnalisé sur Netlify (si disponible)
- [ ] Tester le formulaire de contact en conditions réelles

---

## Jour 4 — Contenu et personnalisation business

- [ ] Remplir les cas d'usage `cas-usage.html` avec de vraies situations (même fictives mais réalistes)
- [ ] Personnaliser les tarifs si différents des défauts
- [ ] Rédiger la bio de l'agence (3-4 lignes) pour les propositions commerciales
- [ ] Créer l'email de signature professionnelle
- [ ] Préparer 3-5 exemples d'audit rapide pour avoir quelque chose à montrer lors des premiers calls

---

## Jour 5 — Préparation commerciale

- [ ] Lire et adapter le script de qualification (`prompts/sales/qualification.md`)
- [ ] Préparer 3 "observations types" pour 3 secteurs cibles (recrutement, IT, conseil)
- [ ] Personnaliser les templates de proposition
- [ ] Identifier 20 prospects LinkedIn potentiels dans votre réseau existant
- [ ] Rédiger le premier message de connexion LinkedIn (adapter `prompts/sales/outreach-email.md`)

---

## Jour 6 — Test bout-en-bout

- [ ] Simuler un lead complet : remplir le formulaire → vérifier Notion → vérifier email → vérifier notification interne
- [ ] Tester un prompt de contenu manuellement (linkedin.md ou article.md) avec Claude API ou claude.ai
- [ ] Vérifier que le site s'affiche correctement sur iOS Safari et Android Chrome
- [ ] Vérifier PageSpeed Insights du site (cible : > 85 sur mobile)

---

## Jour 7 — Premiers contacts

- [ ] Envoyer les 10 premiers messages LinkedIn (personnes dans le réseau, pas cold outreach)
- [ ] Signaler à 3-5 personnes de confiance que l'agence est lancée et demander des retours sur le site
- [ ] Définir l'objectif de la semaine 2 : nombre de calls de qualification à viser

---

## Définition du MVP 7 jours validé

✅ Le site est en ligne et accessible
✅ Le formulaire de contact fonctionne et crée une fiche dans Notion
✅ Au moins 1 workflow n8n opérationnel
✅ Les templates de proposition sont prêts
✅ Les premiers messages de prospection sont envoyés
✅ Vous pouvez répondre à la question "comment ça marche ?" en 2 minutes

Si ces 6 cases sont cochées : vous êtes opérationnel. Le reste vient ensuite.
