# Prompt — Audit homepage

## Usage
Analyser la homepage d'un site client pour identifier les blocages de conversion.

---

## Prompt IA — Audit homepage complet

```
Tu es expert en conversion web B2B. Tu vas auditer la homepage du site suivant.

INFORMATIONS :
- Entreprise : {{ENTREPRISE}}
- Secteur : {{SECTEUR}}
- Cible principale : {{CIBLE}} (ex: directeurs RH de PMEs)
- Objectif de la page : {{OBJECTIF}} (ex: générer des demandes de devis)
- URL : {{URL}}

CONTENU DE LA PAGE (copier-coller le texte visible de la homepage) :
{{CONTENU_HOMEPAGE}}

MÉTRIQUES CONNUES (si disponibles) :
- Taux de rebond : {{TAUX_REBOND}}
- Conversion homepage → contact : {{TAUX_CONVERSION}}
- Score PageSpeed mobile : {{PAGESPEED_MOBILE}}

ANALYSE DEMANDÉE :

1. ABOVE THE FOLD (< 5 secondes de lecture)
   - Clarté de la proposition : en 5 secondes, comprend-on ce que fait l'entreprise, pour qui, et pourquoi les contacter ?
   - Note /10 avec justification
   - Ce qui est flou ou absent

2. STRUCTURE NARRATIVE
   - La page suit-elle un fil logique (problème → solution → preuve → action) ?
   - Les sections existantes : ce qu'elles font bien / ce qui bloque

3. CTA (Call to Action)
   - Nombre de CTA identifiés
   - Clarté du CTA principal
   - Positionnement (visible sans scroll ?)
   - Formulation (actionnable ou vague ?)

4. CRÉDIBILITÉ ET PREUVE
   - Présence de témoignages, cas clients, chiffres, logos
   - Ce qui manque pour rassurer un prospect froid

5. MOBILE
   - Note /10 basée sur les observations
   - Problèmes identifiés

6. TOP 3 QUICK WINS
   - Actions concrètes, réalisables en < 1 semaine, à fort impact
   - Pour chacun : problème → action → résultat attendu

7. RECOMMANDATIONS PRIORITAIRES
   - Priorité 1 (impact fort / effort faible)
   - Priorité 2 (impact fort / effort moyen)
   - Priorité 3 (pour plus tard)

FORMAT : Rapport structuré, pas de bullet points génériques. Chaque observation est accompagnée d'un exemple précis du texte analysé.
```

---

## Questions de collecte manuelle (à compléter avant le prompt)

Avant de lancer l'analyse IA, collecter manuellement :
- [ ] Screenshot above the fold sur desktop
- [ ] Screenshot above the fold sur mobile
- [ ] Copier-coller intégral du texte de la homepage
- [ ] Score PageSpeed Insights mobile (tools.google.com/pagespeed/insights)
- [ ] Taux de rebond dans Google Analytics (si accès)
- [ ] Nombre et libellé des CTA présents
