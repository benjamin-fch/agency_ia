# Prompt — Rédaction article de fond

## Usage
Générer un article de blog B2B entre 800 et 1200 mots, utile, indexable, non générique.

---

## Prompt IA — Article de fond

```
Tu es rédacteur spécialisé en contenu B2B long format.

Rédige un article pour {{ENTREPRISE}} (secteur : {{SECTEUR}}).

PARAMÈTRES :
- Sujet / titre provisoire : {{SUJET}}
- Mot-clé principal (SEO) : {{MOT_CLE_PRINCIPAL}}
- Intention de recherche : {{INTENTION}} (informationnelle / commerciale / navigationnelle)
- Cible lecteur : {{CIBLE}} (poste, problème, niveau d'expertise)
- Longueur : {{LONGUEUR}} mots (800 minimum, 1200 maximum pour ce brief)
- Ton : {{TON}}
- Ce que le lecteur doit savoir ou pouvoir faire après lecture : {{OBJECTIF_APPRENTISSAGE}}
- Exemples ou données spécifiques à inclure : {{EXEMPLES_DONNEES}}
- Ce qu'il ne faut pas dire / angle à éviter : {{A_EVITER}}

STRUCTURE SOUHAITÉE :

1. Introduction (100-150 mots)
   - Commencer par un constat, une statistique, ou une situation concrète — pas "Dans cet article, nous allons voir..."
   - Poser le problème du lecteur
   - Annoncer ce qu'il va apprendre (sans être pompeux)

2. Corps (500-800 mots)
   - 3 à 4 sections avec H2 clairs
   - Chaque section : un point précis, développé avec exemples ou données
   - Transitions naturelles entre sections
   - Pas de liste à 5 items sans explication substantielle

3. Conclusion (100-150 mots)
   - Résumé en 2-3 lignes
   - Prochaine étape concrète pour le lecteur
   - CTA naturel (pas forcé) vers l'offre ou une ressource

SEO :
- H1 = titre final (inclure le mot-clé principal)
- H2 = sous-sujets naturels de la requête
- Meta description (155 caractères max) : à inclure en fin de document

RÈGLES STRICTES :
- Pas de liste de "5 conseils" génériques sans contexte spécifique au secteur
- Chaque affirmation est soit sourcée, soit présentée clairement comme une opinion ou observation
- Le ton est celui d'un expert qui partage, pas d'un vendeur qui pitch
- Pas de conclusion "N'hésitez pas à nous contacter pour en savoir plus"
- La valeur est dans l'article, le CTA est un bonus discret

FORMAT DE RÉPONSE :
---
TITRE H1 : [titre]
META DESCRIPTION : [texte]
---
[Article complet avec H2 marqués]
---
```

---

## Prompt IA — Plan d'article (avant rédaction)

```
Génère le plan détaillé d'un article sur : {{SUJET}}

Cible : {{CIBLE}}
Mot-clé principal : {{MOT_CLE}}
Angle différenciateur (ce que les autres articles ne traitent pas) : {{ANGLE_DIFFERENTIEL}}

Format du plan :
- H1 proposé
- Introduction : ce qu'on va couvrir et pourquoi c'est utile
- H2 (3-4 sections) avec pour chacun :
  - Angle de la section
  - 2-3 points clés à couvrir
  - Exemple ou donnée à chercher/inclure
- Conclusion : prochaine étape suggérée
- Meta description proposée

Évaluer aussi : cet article peut-il être cité dans une réponse d'IA générative ? Pourquoi ?
```
