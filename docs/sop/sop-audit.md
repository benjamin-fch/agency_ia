# SOP Audit client — Agency IA

## Objectif
Produire un audit structuré, utile et vendable en < 3h de travail.

## Types d'audit
1. **Audit site web** : homepage, pages offres, CTA, UX, SEO on-page
2. **Audit contenu** : LinkedIn, articles, ton, positionnement, régularité
3. **Audit offre** : clarté de la promesse, positionnement, différenciation

---

## Étape 1 — Préparation (15 min)

- [ ] Lire le brief client (Notion > Projets > [Client] > Brief)
- [ ] Ouvrir le site du client dans un onglet incognito
- [ ] Ouvrir leur page LinkedIn (entreprise + dirigeant si disponible)
- [ ] Préparer le template d'audit (`templates/audit/audit-site-web.md` ou `templates/audit/audit-contenu.md`)
- [ ] Ouvrir le prompt correspondant dans `/prompts/website/` ou `/prompts/content/`

---

## Étape 2 — Collecte manuelle (30 min)

**Pour l'audit site :**
- [ ] Capture d'écran homepage above the fold
- [ ] Capture page offres principale
- [ ] Relever : headline principale, sous-titre, CTA principal, nombre de CTA en homepage
- [ ] Tester le formulaire de contact (fonctionne ? délai de réponse ?)
- [ ] Tester sur mobile (Chrome DevTools)
- [ ] Vérifier vitesse PageSpeed Insights (noter le score)
- [ ] Relever les 3 premières pages indexées sur Google (site:[domaine])

**Pour l'audit contenu :**
- [ ] Compter le nombre de posts LinkedIn sur 30 jours
- [ ] Identifier le ton dominant (expert, personnel, commercial, éducatif)
- [ ] Relever les 3 posts avec le meilleur engagement
- [ ] Identifier les sujets récurrents et les sujets absents
- [ ] Chercher les articles de blog (date du dernier, fréquence)

---

## Étape 3 — Analyse IA assistée (30 min)

1. Copier le contenu pertinent (homepage text, 5 derniers posts LinkedIn, etc.)
2. Lancer le prompt d'audit approprié (voir `/prompts/website/` ou `/prompts/content/`)
3. Coller dans Claude (via API n8n ou manuellement via claude.ai)
4. Récupérer l'output
5. **Relire et valider** : supprimer tout ce qui est générique, approximatif, ou incorrect

**Règle** : L'IA génère un premier draft d'analyse. L'opérateur valide, corrige, et ajoute les observations terrain que l'IA ne peut pas faire (impression générale, cohérence visuelle, ressenti utilisateur).

---

## Étape 4 — Rédaction du rapport (45 min)

**Structure du rapport d'audit :**
```
1. Résumé exécutif (5 lignes max)
   - Ce qui fonctionne
   - Ce qui bloque
   - La priorité n°1

2. Analyse détaillée par section
   - Chaque section : observation + impact + recommandation

3. Plan d'action priorisé
   - Priorité 1 : impact fort, effort faible (Quick Wins)
   - Priorité 2 : impact fort, effort moyen
   - Priorité 3 : impact moyen, effort variable

4. Prochaines étapes (selon offre proposée)
```

**Critères de qualité :**
- [ ] Chaque observation est étayée par un exemple concret (phrase du site, screenshot, etc.)
- [ ] Chaque recommandation est actionnable (pas de "améliorer la clarté" mais "remplacer le titre par X")
- [ ] Le rapport fait entre 2 et 5 pages (pas moins, pas plus)
- [ ] Pas de jargon technique non expliqué
- [ ] Ton : direct, professionnel, sans condescendance

---

## Étape 5 — Relecture et export (15 min)

- [ ] Appliquer checklist QA (`docs/qa/checklist-qualite.md`)
- [ ] Appliquer checklist anti-générique IA (`docs/qa/anti-generique-ia.md`)
- [ ] Créer le Google Doc dans le dossier client Drive
- [ ] Mettre à jour le statut dans Notion (Projets > Phase : Audit livré)
- [ ] Envoyer par email avec lien Google Doc

---

## Durée totale cible : 2h à 3h maximum

Si l'audit dépasse 3h, il y a un problème de scope. Revenir au template et simplifier.
