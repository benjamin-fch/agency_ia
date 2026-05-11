# Prompt — Proposition commerciale

## Usage
Générer le corps narratif d'une proposition commerciale personnalisée.

---

## Prompt IA — Proposition Content Engine

```
Tu es consultant senior en marketing de contenu B2B.

Rédige la partie narrative d'une proposition commerciale pour l'offre "Content Engine".
Le document sera mis en forme dans Google Docs. Tu fournis uniquement le texte structuré.

INFORMATIONS CLIENT :
- Entreprise : {{ENTREPRISE}}
- Secteur : {{SECTEUR}}
- Interlocuteur : {{NOM}}, {{POSTE}}
- Problème principal exprimé : {{PROBLEME_PRINCIPAL}}
- Tentatives précédentes : {{TENTATIVES_PRECEDENTES}}
- Objectif exprimé : {{OBJECTIF}}
- Budget évoqué : {{BUDGET}}
- Timeline souhaitée : {{TIMELINE}}

ÉLÉMENTS D'AUDIT (homepage, LinkedIn, etc.) :
{{ELEMENTS_AUDIT}}

STRUCTURE À PRODUIRE :

1. Résumé de la situation (3-4 lignes)
   → Montrer qu'on a compris leur problème spécifique, pas un problème générique

2. Ce que nous proposons (description de l'offre adaptée à leur contexte)
   → Pas une liste de features, mais une description de ce que ça change pour eux

3. Livrables concrets du premier mois
   → Liste précise avec dates cibles

4. Ce qui est inclus / exclu (tableau clair)

5. Investissement
   → Setup : [montant]
   → Mensuel : [montant]
   → Engagement minimum : [durée]

6. Prochaines étapes (3 étapes simples)
   → Signature → Acompte → Onboarding J+3

RÈGLES :
- Ton : professionnel, direct, sans jargon IA
- Pas de "nous sommes ravis de" ou "c'est un plaisir de"
- Pas de bullet points à 6 items génériques
- Chaque élément de la proposition doit faire écho à quelque chose dit pendant le call
- < 600 mots pour la partie narrative (hors tableaux)
```

---

## Prompt IA — Proposition Website Conversion Upgrade

```
Tu es consultant senior en conversion web B2B.

Rédige la partie narrative d'une proposition commerciale pour l'offre "Website Conversion Upgrade".

INFORMATIONS CLIENT :
- Entreprise : {{ENTREPRISE}}
- Site actuel : {{URL_SITE}}
- Secteur : {{SECTEUR}}
- Interlocuteur : {{NOM}}, {{POSTE}}
- Problème principal (trafic, leads, clarté offre, etc.) : {{PROBLEME_PRINCIPAL}}
- Pages à traiter : {{PAGES_CIBLES}} (max 3)
- Budget : {{BUDGET}}

ÉLÉMENTS D'AUDIT RAPIDE :
{{ELEMENTS_AUDIT}}

STRUCTURE À PRODUIRE :

1. Diagnostic en 3 points
   → Ce qui fonctionne sur le site actuel
   → Ce qui bloque les conversions
   → La priorité n°1

2. Ce que nous allons faire (scope exact)
   → Pages concernées
   → Ce qui change sur chaque page
   → Ce qui ne change pas (périmètre)

3. Livrables avec dates

4. Inclus / Exclu

5. Investissement

6. Prochaines étapes

RÈGLES :
- Précis sur les pages et les changements — pas de vague "amélioration de la clarté"
- Chaque recommandation est directement liée à un problème observé
- < 500 mots narratifs
```

---

## Structure finale du document Google Docs

```
[Logo agence]

PROPOSITION COMMERCIALE
[Nom Client] — [Offre] — [Date]
Confidentiel

────────────────────────────────

[Texte narratif généré par le prompt ci-dessus]

────────────────────────────────

TABLEAU INCLUS / EXCLUS

INVESTISSEMENT ET MODALITÉS

PROCHAINES ÉTAPES

────────────────────────────────

[Signature + contact direct]
Cette proposition est valable 15 jours.
```
