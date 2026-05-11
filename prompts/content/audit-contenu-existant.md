# Prompt — Audit contenu existant

## Usage
Analyser le contenu existant d'un client (LinkedIn, blog, emails) pour identifier les forces, lacunes et opportunités.

---

## Prompt IA — Audit contenu LinkedIn

```
Tu es expert en contenu B2B LinkedIn.

Analyse le contenu LinkedIn suivant pour {{NOM_CLIENT}}, {{POSTE}} chez {{ENTREPRISE}}.

DONNÉES À ANALYSER :
- Période analysée : {{PERIODE}} (ex: 3 derniers mois)
- Nombre de posts publiés : {{NB_POSTS}}
- Posts avec meilleur engagement (copier-coller les 3-5 meilleurs) :
{{MEILLEURS_POSTS}}
- Posts avec faible engagement (copier-coller 2-3 exemples) :
{{POSTS_FAIBLES}}
- Posts récents (5 derniers) :
{{POSTS_RECENTS}}

ANALYSE DEMANDÉE :

1. RÉGULARITÉ ET CADENCE
   - Fréquence observée vs recommandée
   - Cohérence de la régularité

2. POSITIONNEMENT
   - Territoire thématique actuel
   - Est-ce que les posts construisent une image claire d'expert sur un sujet ?
   - Ce qui est absent et qui manque pour positionner clairement l'auteur

3. FORMATS ET STRUCTURES
   - Formats utilisés (liste, storytelling, opinion, chiffres, cas concret)
   - Ce qui performe vs ce qui ne performe pas
   - Patterns d'accroches : fonctionnent-elles ? Pourquoi ?

4. TON ET VOIX
   - Ton dominant actuel
   - Cohérence sur la durée
   - Ce qui semble "forcé" vs authentique

5. ENGAGEMENT
   - Tendances observées (sujets qui cartonnent)
   - Hypothèses sur pourquoi

6. RECOMMANDATIONS PRIORITAIRES
   - 3 changements à appliquer immédiatement
   - 2 formats à tester ce mois-ci
   - 1 sujet à creuser pour devenir référence

FORMAT : Rapport synthétique, 1-2 pages. Exemples concrets tirés des posts analysés.
```

---

## Prompt IA — Audit blog / articles

```
Analyse le blog de {{ENTREPRISE}}.

DONNÉES :
- URL du blog : {{URL_BLOG}}
- Nombre d'articles publiés : {{NB_ARTICLES}}
- Date du dernier article : {{DATE_DERNIER_ARTICLE}}
- Fréquence de publication : {{FREQUENCE}}
- 3 articles avec le plus de trafic (si connu) : {{ARTICLES_TOP}}
- Extraits ou titres de 5 articles récents : {{ARTICLES_RECENTS}}

ANALYSE :

1. VOLUME ET RÉGULARITÉ
2. QUALITÉ DES TITRES (attirent-ils des clics ?)
3. ANGLES ET SUJETS COUVERTS VS LACUNES
4. SEO ON-PAGE (titres, meta, structure H)
5. PROFONDEUR DU CONTENU (superficiel vs substantiel)
6. APPEL À L'ACTION (présent ? efficace ?)
7. RECOMMANDATIONS (3 priorités)

FORMAT : Synthèse actionnable en 1 page.
```
