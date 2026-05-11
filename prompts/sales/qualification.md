# Prompt — Qualification prospect

## Usage
À utiliser pendant ou après un call de qualification pour structurer l'analyse et scorer le lead.

---

## Script de qualification (pour le call)

### Contexte à établir en premier (2 min)
"Avant de vous parler de ce qu'on fait, j'aimerais comprendre votre situation.
Est-ce qu'on peut commencer par ça ?"

### Questions diagnostiques (8 min)

**Sur le business :**
- "Quel est votre cœur de métier et pour quel type de client ?"
- "Comment vos clients vous trouvent-ils aujourd'hui ?"
- "Quelle est votre principale source de nouveaux clients ?"

**Sur le problème :**
- "Qu'est-ce qui vous a amené à regarder ce sujet aujourd'hui ?"
- "Si on ne fait rien dans les 6 prochains mois sur votre marketing / votre site, que se passe-t-il ?"
- "Avez-vous déjà essayé de résoudre ça ? Qu'est-ce qui s'est passé ?"

**Sur les ressources et la décision :**
- "Avez-vous quelqu'un en interne qui gère le marketing ?"
- "Vous prenez ce type de décision seul ou y a-t-il d'autres personnes impliquées ?"
- "Vous avez une idée du budget que vous pouvez allouer à ça ?"

---

## Prompt IA — Scoring post-call

Renseigner les variables puis soumettre à Claude pour obtenir un score et une recommandation.

```
Tu es un consultant en développement commercial pour une agence IA B2B.

À partir des informations suivantes issues d'un call de qualification, donne-moi :
1. Un score de qualification sur 10
2. Les 3 points forts du prospect (ce qui justifie de continuer)
3. Les 3 risques ou signaux faibles (ce qui pourrait bloquer)
4. La recommandation : proposer l'Offre 1 (Content Engine), l'Offre 2 (Website Upgrade), les deux, ou ne pas continuer
5. Le message de suivi optimal (ton, angle, urgence)

INFORMATIONS RECUEILLIES :
- Secteur d'activité : {{SECTEUR}}
- Taille entreprise : {{TAILLE}} personnes, CA estimé {{CA}}
- Source de clients actuelle : {{SOURCE_CLIENTS}}
- Problème principal exprimé : {{PROBLEME}}
- Tentatives précédentes : {{TENTATIVES_PRECEDENTES}}
- Ressources marketing internes : {{RESSOURCES_INTERNES}}
- Décideur(s) : {{DECIDEUR}}
- Budget évoqué : {{BUDGET}}
- Délai / urgence : {{DELAI}}
- Impression générale : {{IMPRESSION_GENERALE}}

CRITÈRES D'ÉVALUATION :
- ICP : PME services B2B, 5-50 salariés, site peu efficace, pas de marketeur dédié
- Budget cible : 1 200-3 000 €/mois ou 2 500-4 000 € one-shot
- Engagement minimum : 3 mois retainer ou one-shot avec upsell possible
- Disqualificateurs : B2C, budget < 800 €, besoin refonte totale, secteur très réglementé sans marge de manœuvre

Sois direct et factuellement basé sur les informations fournies.
Ne sur-qualifie pas pour ne pas perdre du temps.
```

---

## Score de qualification — grille rapide

| Score | Signification | Action |
|---|---|---|
| 8-10 | Prospect chaud, fort alignement ICP | Priorité 1, proposition dans 48h |
| 6-7 | Prospect tiède, quelques réserves | Proposition avec conditions claires |
| 4-5 | Prospect froid, trop de signaux faibles | Email de nurturing, relance dans 1 mois |
| < 4 | Hors ICP | Disqualifier poliment |
