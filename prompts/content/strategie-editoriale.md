# Prompt — Stratégie éditoriale

## Usage
Définir le positionnement éditorial d'un client et générer un plan de contenu mensuel.

---

## Prompt IA — Stratégie éditoriale initiale (onboarding)

```
Tu es stratège en contenu B2B.

Conçois la stratégie éditoriale pour {{ENTREPRISE}} (secteur : {{SECTEUR}}).

BRIEF CLIENT :
- Offre principale : {{OFFRE}}
- Cible principale : {{CIBLE}} (poste, secteur, taille entreprise, problème)
- Ton souhaité : {{TON}}
- Canaux actifs : {{CANAUX}} (LinkedIn, blog, email, autre)
- Fréquence souhaitée : {{FREQUENCE}}
- Objectif business du contenu : {{OBJECTIF_BUSINESS}} (notoriété, leads, nurturing, fidélisation)
- Sujets tabous ou contraintes : {{CONTRAINTES}}
- Concurrents directs (comment ils communiquent) : {{CONCURRENTS}}
- Exemples de contenus ou marques admirés : {{INSPIRATIONS}}

LIVRABLES ATTENDUS :

1. POSITIONNEMENT ÉDITORIAL
   - Territoire thématique : les 3-4 sujets sur lesquels l'entreprise doit être connue
   - Angle différenciateur : ce qu'elle apportera que les autres ne font pas
   - Ton défini en 3 adjectifs + 3 contre-exemples (ce que le ton N'est pas)
   - "Voix" : formelle / semi-formelle / directe / experte / narrative ?

2. PERSONAS LECTEURS
   - Persona 1 (cible principale) : poste, problème, ce qu'il lit, ce qui le convainc
   - Persona 2 (cible secondaire si pertinent)

3. PILIERS DE CONTENU (3-4 piliers)
   Pour chaque pilier :
   - Nom du pilier
   - Sujet central
   - Pourquoi c'est pertinent pour la cible
   - 5 exemples de sujets/angles concrets

4. RÈGLES ÉDITORIALES
   - Ce qu'on dit vs ce qu'on ne dit pas
   - Mots à utiliser / à éviter
   - Format privilégié par canal
   - Fréquence recommandée par canal

FORMAT : Document structuré, prêt à être partagé avec le client pour validation.
```

---

## Prompt IA — Plan mensuel (production récurrente)

```
À partir de la stratégie éditoriale ci-dessous, génère le plan de contenu pour le mois de {{MOIS}}.

STRATÉGIE ÉDITORIALE (résumé) :
{{RESUME_STRATEGIE}}

CONTEXTE DU MOIS :
- Événements ou actualités secteur : {{EVENEMENTS}}
- Actualités client (lancement, recrutement, etc.) : {{ACTUALITES_CLIENT}}
- Objectif prioritaire ce mois : {{OBJECTIF_MOIS}}

LIVRABLES DU MOIS (rappel offre) :
- 8 posts LinkedIn
- 2 articles
- 2 emails

PLAN DEMANDÉ :

Pour les posts LinkedIn : 10 angles proposés (on en gardera 8)
Pour chaque angle :
- Titre / accroche de départ
- Pilier éditorial
- Format recommandé (observation, cas concret, prise de position, pédagogique)
- Longueur recommandée

Pour les articles : 3 sujets proposés (on en gardera 2)
Pour chaque sujet :
- Titre H1 provisoire
- Angle différenciateur
- Intention de recherche
- Estimation de difficulté SEO (faible / moyen / fort)

Pour les emails : 2 sujets proposés
Pour chaque email :
- Objectif
- Segment cible
- CTA

FORMAT : Liste claire, facile à faire valider par le client en 5 minutes.
```
