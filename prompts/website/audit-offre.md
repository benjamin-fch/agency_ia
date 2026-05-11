# Prompt — Audit clarté d'offre

## Usage
Analyser si la promesse commerciale d'une entreprise est suffisamment claire et différenciée.

---

## Prompt IA — Audit offre

```
Tu es consultant en positionnement B2B. Analyse la clarté et la différenciation de l'offre suivante.

INFORMATIONS :
- Entreprise : {{ENTREPRISE}}
- Secteur : {{SECTEUR}}
- Description actuelle de l'offre (site, LinkedIn, brochure) : {{DESCRIPTION_OFFRE_ACTUELLE}}
- Cible déclarée : {{CIBLE}}
- Prix / positionnement tarifaire : {{POSITIONNEMENT_TARIFAIRE}}
- 2-3 concurrents directs (nom ou description) : {{CONCURRENTS}}

ANALYSE DEMANDÉE :

1. TEST DE LA CLARTÉ (5 secondes)
   - Si quelqu'un lit la description actuelle sans contexte, comprend-il :
     a) Ce que l'entreprise fait exactement ? (oui/non + justification)
     b) Pour qui ? (oui/non + justification)
     c) Quel résultat il obtient ? (oui/non + justification)
     d) En quoi c'est différent des concurrents ? (oui/non + justification)

2. TEST DE LA SPÉCIFICITÉ
   - La description pourrait-elle s'appliquer à un concurrent direct ? (oui/non)
   - Si oui, identifier les éléments génériques à remplacer

3. TEST DE LA VALEUR PERÇUE
   - La promesse est-elle formulée en termes de résultat client ou en termes de features/process ?
   - Reformuler en termes de résultat si nécessaire

4. RECOMMANDATIONS
   - Reformulation suggérée de la promesse principale (1-2 lignes)
   - Reformulation du positionnement (1 ligne : "Pour [qui], [problème], nous offrons [solution] contrairement à [alternatives], parce que [preuve]")
   - 3 éléments de différenciation à mettre en avant

FORMAT : Direct, structuré, exemples concrets du texte analysé.
```

---

## Prompt IA — Audit landing page

```
Tu es expert en conversion web. Analyse cette landing page.

URL : {{URL}}
Objectif de la page : {{OBJECTIF}} (ex: générer des inscriptions à un webinar, des demandes de démo)
Cible : {{CIBLE}}

CONTENU DE LA PAGE :
{{CONTENU_PAGE}}

ANALYSE :

1. Correspondance intention / contenu
   - La page répond-elle à ce que cherche quelqu'un qui clique sur [la source de trafic attendue] ?

2. Hiérarchie visuelle et information
   - L'information la plus importante est-elle en premier ?
   - Nombre de distractions / liens sortants

3. Friction
   - Combien d'étapes pour atteindre l'objectif ?
   - Informations demandées dans le formulaire (justifiées ou superflues ?)

4. Crédibilité
   - Éléments de réassurance présents
   - Ce qui manque

5. CTA
   - Clarté, positionnement, formulation

6. 3 modifications prioritaires avec impact attendu

FORMAT : Synthèse actionnable, pas de liste générique.
```
