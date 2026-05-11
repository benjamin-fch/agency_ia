# Workflows n8n — Agency IA

## Vue d'ensemble

Les workflows sont organisés en 7 fichiers JSON importables dans n8n.
Chaque workflow couvre une phase clé du process agence.

## Prérequis

Avant d'importer les workflows :
1. n8n installé et accessible (voir `config/n8n-config.md`)
2. Credentials configurés dans n8n :
   - `anthropic-api` : clé API Anthropic
   - `notion-api` : token d'intégration Notion
   - `google-oauth2` : OAuth2 Google Drive
   - `smtp` : credentials SMTP SendGrid ou Brevo
3. Variables d'environnement n8n renseignées (voir `.env.example`)

## Import des workflows

1. Ouvrir n8n → Menu gauche → "Workflows"
2. Cliquer "Import from file"
3. Sélectionner le fichier JSON
4. Configurer les credentials (certains nodes auront une icône d'alerte)
5. Activer le workflow

## Workflows disponibles

| Fichier | Déclencheur | Statut | Fonction |
|---|---|---|---|
| `01-lead-intake.json` | Webhook POST `/lead-intake` | ✅ Prêt | Création fiche Prospect Notion + email auto-réponse |
| `03-onboarding.json` | Webhook POST `/onboarding` | ✅ Prêt | Création fiche Client + espace Projet Notion + email bienvenue |
| `05-production-contenu.json` | Schedule cron `0 8 1 * *` | ✅ Prêt | Génération plan mensuel via Claude API → validation humaine obligatoire |

**Workflows à construire si besoin (non inclus dans le MVP) :**
- `02-qualification.json` — Scoring et relance automatique des prospects froids
- `04-audit.json` — Déclenchement et structuration d'un audit IA assisté
- `06-livraison.json` — Export Google Docs et email de livraison
- `07-reporting.json` — Rapport de performance mensuel automatisé

## Conventions

- Les nodes "humain requis" sont commentés avec `[VALIDATION HUMAINE]`
- Les variables sensibles passent par les credentials n8n, jamais en dur
- Chaque workflow a un node "Error Trigger" pour catcher les erreurs

## Sécurité des webhooks

Chaque webhook entrant vérifie le header `X-Webhook-Secret` avant de traiter la requête.
Configurer le secret dans les variables n8n : `N8N_WEBHOOK_SECRET`.

## Backup

Exporter les workflows régulièrement :
n8n → Settings → Export all workflows → sauvegarder dans `workflows/n8n/backup/`
Fréquence recommandée : hebdomadaire.
