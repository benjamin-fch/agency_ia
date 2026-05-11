# SOP Production de contenu — Agency IA

## Objectif
Produire le contenu mensuel d'un client en < 4h de travail, avec validation avant livraison.

## Périmètre (offre Content Engine standard)
- 8 posts LinkedIn/mois
- 2 articles de fond/mois
- 2 emails nurturing/mois

---

## Étape 1 — Brief mensuel (30 min, en début de mois)

**Déclencheur** : Début de mois ou J-3 avant la période de production.

**Actions :**
- [ ] Ouvrir le brief client dans Notion (Projets > [Client] > Brief)
- [ ] Vérifier les actualités client (newsletter, LinkedIn, site) depuis le dernier mois
- [ ] Identifier les événements à venir (salon, webinar, lancement produit)
- [ ] Remplir la section "Contexte du mois" dans le brief mensuel
- [ ] Valider avec le client si nécessaire (email rapide : "Avez-vous des événements ou sujets prioritaires ce mois-ci ?")

---

## Étape 2 — Génération de la stratégie éditoriale mensuelle (20 min)

1. Ouvrir `prompts/content/strategie-editoriale.md`
2. Renseigner les variables : secteur, cible, ton, sujets tabous, événements du mois
3. Lancer dans Claude (via n8n workflow `05-production-contenu` ou manuellement)
4. Récupérer 10-12 angles proposés
5. **Sélectionner manuellement** les 8 angles LinkedIn + 2 sujets d'articles les plus pertinents
6. Enregistrer dans Notion (Projets > [Client] > Contenu > Plan mensuel)

---

## Étape 3 — Production des posts LinkedIn (1h)

Pour chaque post (traiter par batch de 4) :
1. Ouvrir `prompts/content/linkedin.md`
2. Renseigner : angle, ton client, exemple/insight spécifique du secteur
3. Générer le draft
4. **Relecture humaine obligatoire** :
   - [ ] Le post commence-t-il par une accroche qui donne envie de lire ?
   - [ ] Y a-t-il un insight non-évident ou une perspective originale ?
   - [ ] Le ton correspond-il au style du client ?
   - [ ] N'est-il pas visiblement écrit par une IA ? (vérifier `docs/qa/anti-generique-ia.md`)
   - [ ] Le CTA final est-il naturel ?
5. Ajuster si nécessaire (1-3 modifications max par post)
6. Enregistrer dans Notion : Projets > [Client] > Contenu > Posts LinkedIn > [mois]

---

## Étape 4 — Production des articles (1h30)

Pour chaque article :
1. Ouvrir `prompts/content/article.md`
2. Renseigner : sujet, angle, public cible, longueur souhaitée (800-1200 mots), exemples secteur
3. Générer le draft (en 2 passes si nécessaire : structure puis rédaction)
4. **Relecture humaine approfondie** :
   - [ ] L'intro accroche-t-elle sans survente ?
   - [ ] Chaque section apporte-t-elle une valeur distincte ?
   - [ ] Y a-t-il des exemples concrets, des chiffres, des cas réels ?
   - [ ] La conclusion inclut-elle un appel à l'action discret mais clair ?
   - [ ] Appliquer checklist SEO (`docs/qa/standard-seo.md`) si article destiné au blog
5. Finaliser et enregistrer dans Notion

---

## Étape 5 — Production des emails (30 min)

Pour chaque email :
1. Utiliser le prompt de la section **Email** dans `prompts/content/linkedin.md` ou adapter le prompt `prompts/content/article.md` au format email nurturing
2. Renseigner : objectif email, segment, action souhaitée
3. Générer
4. Relecture : objet, preview, premier paragraphe, CTA, désinscription présente
5. Enregistrer dans Notion

---

## Étape 6 — Validation interne (15 min)

Avant tout envoi au client :
- [ ] Passer la checklist qualité (`docs/qa/checklist-qualite.md`)
- [ ] Passer la checklist anti-générique IA
- [ ] Vérifier la cohérence de ton sur l'ensemble du mois
- [ ] S'assurer qu'aucun contenu ne contient d'information factuelle non vérifiée

---

## Étape 7 — Envoi au client pour validation (J+1 après production)

1. Créer le Google Doc mensuel : "Contenu [NomClient] — [Mois AAAA]"
2. Structurer : section LinkedIn, section Articles, section Emails
3. Partager avec le client en mode commentaire (pas d'édition directe)
4. Email d'accompagnement (2-3 lignes) : "Voici le contenu du mois. Vos retours sont attendus avant le [date]. Après cette date, je procède à la mise en forme finale."
5. Mettre à jour Notion : statut "En attente validation client"

---

## Étape 8 — Intégration des retours (< 1h)

- Délai de retour client : 5 jours ouvrés
- Si pas de retour → relance email simple
- Modifications : maximum 1 round de révisions (inclus dans le forfait)
- Modifications majeures (changement de sujet complet) → hors forfait, devis

---

## Étape 9 — Livraison finale

- [ ] Intégrer les retours dans le Google Doc
- [ ] Marquer le doc comme "Version finale — [date]"
- [ ] Mettre à jour Notion : statut "Livré"
- [ ] Email de livraison avec récap du mois et rappel du prochain
- [ ] Logger dans Notion : Projets > [Client] > Historique livraisons

---

## Durée totale cible : 3h30 à 4h par client par mois

Si la production dépasse 5h, soit le brief n'est pas assez précis, soit le scope a dérivé.
