# SOP QA — Agency IA

## Objectif
Garantir que chaque livrable atteint le standard de qualité avant d'être envoyé au client.

## Règle fondamentale
La QA n'est pas optionnelle. Chaque livrable passe par la checklist complète. Si un item est rouge, le livrable ne part pas.

---

## Checklist qualité universelle

### Fond
- [ ] Le contenu répond à l'objectif défini dans le brief
- [ ] Les informations factuelles sont vérifiées (chiffres, dates, noms)
- [ ] Le ton correspond au style validé avec le client
- [ ] Pas de généralisation vide ("Les entreprises ont besoin de...", "Dans un monde en mutation...")
- [ ] Chaque affirmation peut être substantiée par un exemple concret
- [ ] La valeur pour le lecteur est explicite (pas implicite)

### Forme
- [ ] Pas de faute d'orthographe (vérifier avec un correcteur : LanguageTool ou Antidote)
- [ ] Pas de faute de grammaire
- [ ] Pas de ponctuation incohérente
- [ ] Les titres suivent une hiérarchie logique (H1 > H2 > H3)
- [ ] Les paragraphes sont courts (max 4-5 lignes pour contenu web/LinkedIn)
- [ ] Pas de répétition de mots à moins de 3 lignes d'intervalle

### Cohérence
- [ ] Le ton est homogène sur tout le document
- [ ] Le nom du client et les noms propres sont corrects et cohérents
- [ ] Les chiffres et dates sont cohérents entre eux
- [ ] Pas de placeholder non remplacé ([NOM], [DATE], [INSÉRER ICI])

### Conversion (pour pages web et contenus commerciaux)
- [ ] La headline principale répond à la question : "Pourquoi me lire ?"
- [ ] Le CTA principal est clair, unique, et actionnable
- [ ] Les bénéfices sont formulés du point de vue du client (pas "nous faisons X" mais "vous obtenez X")
- [ ] La preuve sociale ou les données de crédibilité sont présentes

---

## Checklist anti-générique IA

Voir `docs/qa/anti-generique-ia.md` pour la liste complète.

Signaux d'alarme immédiats à corriger :
- "Dans un monde où..." → supprimer
- "Il est essentiel de..." → reformuler avec un exemple concret
- "Une approche holistique..." → supprimer ou remplacer
- Trois adjectifs en série sans contenu ("innovant, agile, performant") → supprimer
- Listes à 5 points de conseils génériques sans contexte spécifique → réduire ou spécifier
- Conclusion qui "invite à passer à l'action" sans dire quoi faire → rendre explicite

---

## Checklist SEO (pour articles de blog)

- [ ] H1 unique, inclut le mot-clé principal, < 60 caractères
- [ ] Meta-description rédigée (155 caractères), inclut le mot-clé
- [ ] Le mot-clé principal apparaît dans le premier paragraphe
- [ ] Les H2 couvrent les aspects attendus de la requête
- [ ] Pas de keyword stuffing
- [ ] Images nommées avec le mot-clé (si images présentes)
- [ ] Liens internes présents (si site avec d'autres contenus)

---

## Standard rédaction B2B

| Critère | Standard |
|---|---|
| Niveau de langue | Professionnel, accessible (pas de jargon inutile) |
| Longueur LinkedIn | 150-300 mots |
| Longueur article | 800-1200 mots |
| Longueur email | 150-250 mots |
| Longueur page web | 300-600 mots par section |
| Ton | Direct, factuel, orienté bénéfice |
| Voix | Active (pas passive), deuxième personne (vous) |

---

## Processus de révision post-QA

Si la QA identifie des problèmes :
1. Noter les problèmes dans un commentaire sur le Google Doc
2. Corriger directement si correction < 10 min
3. Si correction majeure (>10 min) → relancer le prompt avec les corrections spécifiées
4. Passer la QA à nouveau sur la section modifiée
5. Ne jamais livrer un document avec des commentaires de révision internes visibles par le client
