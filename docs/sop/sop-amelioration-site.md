# SOP Amélioration site — Agency IA (Offre Website Conversion Upgrade)

## Objectif
Livrer une réécriture conversion-first de 3 pages en < 15 jours ouvrés.

## Timeline standard
| Phase | Durée | Output |
|---|---|---|
| Audit initial | J1-J3 | Rapport d'audit |
| Validation client | J4-J6 | Rapport validé + priorités confirmées |
| Production | J7-J11 | Drafts rédigés |
| Révisions | J12-J13 | Version finale |
| Livraison | J14 | Google Docs finalisés |

---

## Phase 1 — Audit complet (J1-J3)

Suivre la SOP Audit (`docs/sop/sop-audit.md`) avec le scope suivant :
- Homepage
- Page offre principale
- Page de contact / conversion

**Livrables de phase :**
- Rapport d'audit Google Doc (5 pages max)
- 3 priorités quick wins
- Plan d'action priorisé

**Envoi au client :**
- Email + lien Google Doc
- "Vos retours attendus sous 48h pour aligner les priorités avant la production"

---

## Phase 2 — Call de validation (J4-J5)

**Durée** : 30 minutes

**Objectif** : Valigner sur les priorités, récupérer les informations que l'IA ne peut pas générer.

**À collecter pendant le call :**
- [ ] Les 2-3 clients idéaux (profil, problème, résultat obtenu)
- [ ] Les objections les plus fréquentes des prospects
- [ ] Le différenciateur principal (ce que les concurrents ne font pas ou mal)
- [ ] Le ton souhaité (exemples de marques qu'ils admirent)
- [ ] Ce qu'ils détestent dans leur site actuel
- [ ] Ce qui, selon eux, "ne marche pas"

**Post-call :**
- Mise à jour du brief client dans Notion avec ces éléments
- Confirmation de la liste des 3 pages à réécrire

---

## Phase 3 — Production (J7-J11)

### Homepage

1. Remplir `prompts/website/rewrite-homepage.md` avec les éléments du brief
2. Générer le draft section par section :
   - Hero (headline, sous-titre, CTA principal)
   - Problème (identification du pain point)
   - Solution (ce que vous faites, pas comment)
   - Preuve (chiffres, cas clients, témoignages)
   - Offres (résumé en 3 lignes max chacune)
   - CTA final
3. Relecture humaine de chaque section
4. Vérifier : est-ce que quelqu'un qui ne connaît pas le client comprend en 5 secondes ce que l'entreprise fait et pour qui ?

### Pages offres

1. Utiliser `prompts/website/audit-offre.md` pour analyser l'existant
2. Restructurer selon le format : Problème → Solution → Bénéfices → Preuves → CTA
3. Générer les textes avec `prompts/website/rewrite-homepage.md` (adapter le contexte)
4. Relecture : chaque page doit avoir un seul CTA principal

### Page contact / conversion

1. Simplifier : formulaire court (3 champs max), headline claire, rassurance (délai de réponse, confidentialité)
2. Générer les textes d'accompagnement
3. Recommandations techniques à transmettre au développeur client si nécessaire

---

## Phase 4 — Livraison et export (J14)

**Structure du Google Doc de livraison :**
```
[NomClient] — Website Conversion Upgrade — Textes finaux — [Date]

----
HOMEPAGE
  Section Hero
    Titre : [texte]
    Sous-titre : [texte]
    CTA : [texte + destination]
  Section Problème
    ...
  [etc.]

----
PAGE OFFRE [Nom]
  ...

----
PAGE CONTACT
  ...

----
RECOMMANDATIONS TECHNIQUES
  (liste des changements non textuels à implémenter)
```

**Checklist de livraison :**
- [ ] Chaque page a un seul CTA principal identifié
- [ ] Aucun texte générique type "Nous vous accompagnons dans vos défis"
- [ ] Tous les éléments de preuve (chiffres, témoignages) sont vrais et fournis par le client
- [ ] Les titres H1 incluent le mot-clé principal de la page
- [ ] Le document est nommé correctement et partagé en mode lecture seule

**Email de livraison :**
- Lien vers le Google Doc
- Résumé en 5 lignes : ce qui a changé et pourquoi
- Rappel : l'intégration dans le CMS n'est pas incluse (sauf accord spécifique)
- Proposition de suivi mensuel si non encore souscrit

---

## Gestion des dépassements de scope

Si le client demande une 4e page ou des modifications structurelles non prévues :
- Ne pas absorber silencieusement
- Envoyer un email : "Cette demande sort du périmètre initial. Je peux l'inclure pour X€ supplémentaires ou la réserver pour un prochain sprint."
- Mettre à jour Notion avec la demande et la réponse donnée
