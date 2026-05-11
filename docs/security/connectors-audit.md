# Audit des connecteurs — Agency IA

Dernière mise à jour : 2026-05-11

## Légende
- Confiance **Élevée** : source officielle, maintenu activement, bien documenté, usage en production validé
- Confiance **Moyenne** : crédible mais avec réserves (dépendance communautaire, moins documenté)
- Confiance **Faible** : expérimental, peu maintenu, source douteuse → non intégré

---

## Connecteurs retenus

### Claude API (Anthropic)
| Propriété | Valeur |
|---|---|
| Source | api.anthropic.com — officiel |
| Confiance | **Élevée** |
| Maintenance | Active (releases régulières) |
| Documentation | docs.anthropic.com — complète |
| Licence | API commerciale — conditions claires |
| Usage dans le système | Génération de contenu, audit IA, recommandations |
| Permissions requises | Clé API avec scope générique |
| Risque principal | Indisponibilité API (rare), changement tarifaire |
| Fallback | Utilisation manuelle via claude.ai |
| Isolation | Appelé uniquement depuis n8n, jamais exposé au client |

---

### n8n (Community Edition)
| Propriété | Valeur |
|---|---|
| Source | github.com/n8n-io/n8n — officiel, open source |
| Confiance | **Élevée** |
| Maintenance | Active (releases hebdomadaires) |
| Documentation | docs.n8n.io — très complète |
| Licence | Sustainable Use License (auto-hébergement libre) |
| Usage dans le système | Orchestration de tous les workflows |
| Permissions requises | Admin sur instance propre |
| Risque principal | Maintenance VPS requise, mises à jour à gérer |
| Fallback | Process manuels documentés dans les SOPs |
| Isolation | Environnement propre, accès restreint |

---

### Notion MCP (officiel)
| Propriété | Valeur |
|---|---|
| Source | MCP officiel maintenu par Notion Inc. |
| Confiance | **Élevée** |
| Maintenance | Active |
| Documentation | developers.notion.com |
| Licence | Notion API Terms of Service |
| Usage dans le système | CRM, suivi projets, pipeline |
| Permissions requises | Token d'intégration Notion avec accès lecture/écriture sur les bases dédiées |
| Risque principal | Changement API (versionné, préavis généralement donné) |
| Fallback | Export CSV + Google Sheets |
| Isolation | Token dédié à l'intégration, pas d'accès workspace global |

---

### Google Drive / Docs (via n8n)
| Propriété | Valeur |
|---|---|
| Source | Google APIs — officiel |
| Confiance | **Élevée** |
| Maintenance | Active |
| Documentation | developers.google.com — complète |
| Licence | Google API Services Terms |
| Usage dans le système | Livrables finaux uniquement |
| Permissions requises | OAuth2 scope `drive.file` (accès uniquement aux fichiers créés par l'app) |
| Risque principal | Revocation OAuth si inactif > 6 mois |
| Fallback | Export manuel depuis n8n, envoi par email |
| Isolation | Compte Google dédié à l'agence, pas le compte personnel |

---

### GitHub
| Propriété | Valeur |
|---|---|
| Source | github.com — officiel |
| Confiance | **Élevée** |
| Maintenance | Active |
| Documentation | docs.github.com |
| Licence | GitHub Terms of Service |
| Usage dans le système | Versionning du repo, backup workflows n8n |
| Permissions requises | Token PAT avec scope `repo` (privé) |
| Risque principal | Token expiré si non renouvelé |
| Fallback | Git local uniquement |
| Isolation | Token dédié, ne pas utiliser le token global |

---

### SendGrid / Brevo (SMTP)
| Propriété | Valeur |
|---|---|
| Source | SendGrid (Twilio) ou Brevo — services établis |
| Confiance | **Élevée** |
| Maintenance | Active |
| Usage dans le système | Notifications client, envoi livrables, relances |
| Permissions requises | Clé API SMTP |
| Risque principal | Compte suspendu si spam (respecter bonnes pratiques) |
| Fallback | Gmail manuel |
| Isolation | Compte dédié à l'agence |

---

### Playwright MCP (QA uniquement)
| Propriété | Valeur |
|---|---|
| Source | microsoft/playwright — officiel Microsoft |
| Confiance | **Moyenne** (fiable mais usage MCP moins établi) |
| Maintenance | Active |
| Documentation | playwright.dev — très complète |
| Licence | Apache 2.0 |
| Usage dans le système | QA uniquement : screenshots, validation rendu, test parcours |
| Permissions requises | Accès à des URLs explicitement approuvées |
| Risque principal | Exécution dans un contexte trop large |
| Fallback | Screenshots manuels |
| Isolation | **OBLIGATOIRE** : exécution Docker, URLs approuvées uniquement, jamais en production continue |

---

## Connecteurs rejetés

### Slack
- **Raison** : Complexité setup OAuth, maintenance token, app approval, overkill pour solo
- **Alternative** : Email SMTP + webhooks

### Make (Integromat) / Zapier
- **Raison** : Lock-in cloud, pricing par opération, données client sur infrastructure tierce
- **Alternative** : n8n auto-hébergé

### Tout MCP tiers non officiel
- **Raison** : Source non vérifiable, maintenance incertaine, politique sécurité absente
- **Règle** : Ne jamais intégrer un MCP sans vérifier : source officielle, activité GitHub < 3 mois, licence claire, documentation présente, usage crédible en production

### MCPs expérimentaux (navigateur, scraping, social media tiers)
- **Raison** : Surfaces d'attaque larges, comportement imprévisible, risque de fuite de données client
- **Alternative** : Playwright en isolation pour les besoins de capture

---

## Revue périodique

Cet audit doit être relu et mis à jour tous les 3 mois ou à chaque ajout de connecteur.
Prochaine revue : 2026-08-11
