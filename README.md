# Agency IA — Système opérationnel complet

Micro-agence IA B2B. Deux offres packagées. Validation humaine obligatoire. Exploitable par une seule personne.

## Offres

| Offre | Description | Prix de départ |
|---|---|---|
| **Content Engine** | Stratégie éditoriale + production de contenu semi-automatisée (LinkedIn, articles, emails) | 1 200 €/mois |
| **Website Conversion Upgrade** | Audit + recommandations + réécriture conversion-first du site | 2 500 € one-shot + 600 €/mois optionnel |

## Stack

- **Production** : Claude API (Anthropic)
- **Orchestration** : n8n auto-hébergé
- **Pipeline client** : Notion
- **Livrables** : Google Docs / Drive
- **Repo / version** : GitHub
- **Site agence** : HTML statique (GitHub Pages / Netlify)
- **QA front** : Playwright (optionnel, isolation requise)

## Structure du repo

```
/docs/architecture    → modèle business + archi technique + décisions
/docs/sop             → procédures opérationnelles standards
/docs/security        → politique sécurité + audit connecteurs
/docs/qa              → checklists qualité + standards
/docs/launch          → checklists MVP 7j, 30j, roadmap 90j
/prompts/content      → prompts production contenu
/prompts/website      → prompts audit et réécriture site
/prompts/sales        → prompts vente, qualification, relance
/workflows/n8n        → specs et JSON de workflows n8n
/templates/audit      → templates d'audit client
/templates/proposal   → templates de proposition commerciale
/templates/content    → templates de brief et livrable contenu
/site                 → site de l'agence (HTML statique)
/config               → configuration connecteurs et secrets
/scripts              → scripts d'installation et setup
/client-workspaces    → template dossier client
```

## Démarrage rapide

1. Copier `.env.example` → `.env` et renseigner les clés
2. Lire `docs/architecture/business-model.md`
3. Suivre `docs/launch/checklist-7-jours.md`
4. Déployer le site : `cd site && npx serve .` ou déposer sur Netlify
5. Configurer n8n : voir `config/n8n-config.md`
6. Importer les workflows : voir `workflows/n8n/README.md`

## Principes non négociables

- Validation humaine avant toute livraison client
- Aucun secret hardcodé dans le code
- Aucun connecteur expérimental en production
- Simplicité > sophistication
- Lisibilité > performance

## Licence

Usage privé. Ne pas distribuer sans accord.
