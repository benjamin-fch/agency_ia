# SOP Vente — Agency IA

## Objectif
Qualifier un prospect et le convertir en client en < 7 jours.

## Déclencheur
Lead entrant (formulaire site, LinkedIn, référence) ou prospection sortante.

---

## Étape 1 — Premier contact (J0)

**Délai cible** : Réponse dans les 4h ouvrées.

**Action si lead entrant (formulaire site) :**
1. n8n crée automatiquement la fiche Prospect dans Notion
2. Recevoir la notification email
3. Lire le brief initial
4. Vérifier la disqualification rapide (B2C ? Budget < 1k ? Besoin refonte totale ?)
5. Si disqualifié → email de réorientation poli (template ci-dessous)
6. Si qualifiable → passer à l'étape 2

**Template email disqualification :**
> Objet : Re : Votre demande
>
> Bonjour [Prénom],
>
> Merci pour votre demande. Après lecture, notre accompagnement actuel n'est pas le bon fit pour votre situation : [raison courte et honnête — ex : "nous travaillons actuellement sur des périmètres B2B services, pas e-commerce"].
>
> Je vous oriente vers [alternative si pertinente / rien si non].
>
> Bonne continuation,
> [Signature]

**Action si prospection sortante (LinkedIn) :**
1. Envoyer message de connexion (prompt `prompts/sales/outreach-email.md` → version LinkedIn)
2. Attendre acceptation avant tout message
3. Premier message : 2-3 lignes, observation spécifique sur leur business, pas de pitch
4. Si réponse positive → proposer call

---

## Étape 2 — Call de qualification (J1-J2)

**Durée** : 20 minutes maximum.

**Objectif** : Comprendre le problème réel, valider l'ICP, poser les bases de la proposition.

**Avant le call :**
- [ ] Lire le site du prospect (< 10 min)
- [ ] Regarder leur LinkedIn d'entreprise
- [ ] Identifier 2-3 angles de valeur spécifiques à leur situation
- [ ] Avoir le script de qualification ouvert (`prompts/sales/qualification.md`)

**Structure du call :**
1. (2 min) Contexte : "Pourquoi vous avez pris ce call aujourd'hui ?"
2. (8 min) Diagnostic : questions du script qualification
3. (5 min) Alignement : reformulation du problème + test de l'offre
4. (3 min) Prochaine étape : audit ou proposition directe ?
5. (2 min) Logistique : deadline, décideur final, budget approx.

**Post-call (dans les 2h) :**
- [ ] Mettre à jour la fiche Prospect Notion (statut, notes, score)
- [ ] Envoyer un email de récap en 5 lignes avec la prochaine étape

---

## Étape 3 — Audit découverte (J2-J3)

**Durée** : 1-2h de travail.

**Pour chaque prospect qualifié, réaliser :**
- [ ] Audit homepage rapide (prompt `prompts/website/audit-homepage.md`)
- [ ] Audit contenu LinkedIn existant (prompt `prompts/website/audit-offre.md`)
- [ ] Identifier 3 quick wins concrets
- [ ] Identifier le problème principal qui justifie l'offre

**Output** : Document audit sommaire (1 page max, format template `templates/audit/audit-site-web.md` simplifié)

---

## Étape 4 — Proposition commerciale (J3-J4)

**Action :**
1. Remplir le template de proposition (selon offre : Content Engine ou Website Upgrade)
2. Personnaliser avec les éléments de l'audit
3. Indiquer 3 livrables concrets avec dates
4. Inclure le pricing clair
5. Relire avant envoi (checklist anti-générique IA dans `docs/qa/anti-generique-ia.md`)
6. Envoyer par email + partager Google Doc en lecture seule

**Email d'envoi :**
- Objet : "Proposition [Nom Client] — [Offre] — [Date]"
- Corps : 3 lignes max, lien vers le doc, "disponible pour en parler le [date] ou [date]"

---

## Étape 5 — Suivi et closing (J4-J7)

**J+2 après envoi proposition :**
- Si pas de réponse → relance courte (template `prompts/sales/relance.md`)

**J+5 :**
- Si toujours pas de réponse → appel téléphonique court (2 min)

**J+7 :**
- Si pas de réponse → archive le prospect, noter la raison dans Notion

**Si accord :**
1. Envoyer le contrat (modèle à créer ou via HelloSign/Docusign)
2. Facturer l'acompte 50% (via lien de paiement Stripe ou virement)
3. Paiement reçu → déclencher l'onboarding (SOP Onboarding)

---

## Statuts Prospect dans Notion

| Statut | Définition |
|---|---|
| Nouveau | Lead entré, pas encore contacté |
| Contacté | Premier contact effectué |
| Qualifié | Call de qualification fait, ICP validé |
| Proposition envoyée | Doc envoyé, en attente retour |
| Négociation | Discussion active sur les termes |
| Converti | Contrat signé, acompte reçu |
| Perdu | Décision négative ou injoignable |
| Disqualifié | Hors ICP |

---

## Métriques à suivre

- Taux de conversion lead → call : cible > 30%
- Taux de conversion call → proposition : cible > 60%
- Taux de conversion proposition → client : cible > 25%
- Délai moyen call → closing : cible < 10 jours
