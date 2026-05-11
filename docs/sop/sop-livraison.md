# SOP Livraison — Agency IA

## Objectif
Standardiser chaque livraison pour garantir une expérience client cohérente, professionnelle et traçable.

## Règles non négociables
- Aucun livrable n'est envoyé sans validation humaine
- Le livrable final est toujours dans Google Docs (pas Notion, pas email en corps)
- Le statut dans Notion est mis à jour à chaque étape

---

## Checklist de livraison universelle

Avant tout envoi :
- [ ] Relecture complète du livrable (pas de coquille, pas de placeholder [NOM_CLIENT] oublié)
- [ ] Appliquer la checklist QA (`docs/qa/checklist-qualite.md`)
- [ ] Appliquer la checklist anti-générique IA (`docs/qa/anti-generique-ia.md`)
- [ ] Google Doc nommé selon la convention : `[NomClient] — [Type] — [Date YYYY-MM]`
- [ ] Google Doc partagé en mode "Lecture seule + commentaires" pour le client
- [ ] Notion mis à jour : statut "Livré", date de livraison renseignée

---

## Email type de livraison

**Objet** : `[NomClient] — [Contenu du mois / Audit / Proposition] — Livraison [Date]`

**Corps :**
```
Bonjour [Prénom],

Je vous envoie [le contenu du mois / votre audit / la réécriture des pages].

Lien : [URL Google Doc]

En résumé :
- [Point 1 livré]
- [Point 2 livré]
- [Point 3 livré]

Pour les retours ou modifications : [délai attendu].

À bientôt,
[Signature]
```

---

## Suivi post-livraison

**J+3 après livraison :**
- Vérifier si le client a ouvert le Google Doc (visible via "Partage" si compte Google)
- Si pas d'accusé de réception → relance courte

**J+10 après livraison (contenu mensuel) :**
- Email de suivi : "Avez-vous pu utiliser le contenu ce mois-ci ? Des retours ?"
- Mettre à jour Notion avec le feedback reçu

**J+30 (pour les clients retainer) :**
- Envoyer le rapport mensuel de performance (si applicable)
- Proposer un appel de revue si mois atypique

---

## Gestion des révisions

**Inclus dans le forfait :**
- 1 round de révisions sur chaque livrable (corrections, ajustements de ton, modifications de contenu dans le cadre du brief)

**Non inclus (facturable séparément) :**
- Changement de sujet complet après production
- Ajout de contenus non prévus dans le brief
- 2e round de révisions ou plus

**Procédure de révision :**
1. Client envoie ses retours (commentaires Google Doc ou email)
2. Intégrer les retours dans les 48h ouvrées
3. Envoyer la version révisée avec email : "Version révisée intégrant vos retours du [date]"
4. Logger dans Notion : Projets > [Client] > Historique révisions

---

## Archivage

Chaque livraison est archivée :
- Google Drive : `Livrables/[NomClient]/[Année]/`
- Notion : Projets > [Client] > Livraisons (liste avec dates, liens, statuts)
- Garder les livrables au moins 12 mois après fin de contrat
