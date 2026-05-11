# SOP Incidents et fallbacks manuels — Agency IA

## Objectif
Avoir un plan B clair pour chaque dépendance critique, afin de ne jamais bloquer un client.

---

## Matrice des incidents

| Composant | Impact si down | Fallback | Délai recovery |
|---|---|---|---|
| n8n (VPS) | Automations arrêtées | Process manuels (voir ci-dessous) | < 4h (contacter hébergeur) |
| Claude API | Génération bloquée | claude.ai manuel avec prompts du repo | Immédiat |
| Notion | CRM inaccessible | Google Sheets backup, email | < 2h (généralement) |
| Google Drive | Livrables inaccessibles | Envoyer en pièce jointe email | Immédiat |
| SMTP / Email | Notifications bloquées | Email personnel / communication téléphonique | Immédiat |
| GitHub | Repo inaccessible | Copie locale du repo | N/A (local toujours disponible) |
| Site statique | Site inaccessible | Déployer sur GitHub Pages en 5 min | < 10 min |

---

## Fallback 1 : n8n indisponible

**Symptôme** : Workflows ne se déclenchent plus, webhooks ne répondent plus.

**Procédure :**
1. Se connecter au VPS : `ssh user@[IP_VPS]`
2. Vérifier Docker : `docker ps` — les containers n8n sont-ils actifs ?
3. Si container arrêté : `docker-compose up -d`
4. Si VPS inaccessible : contacter le support hébergeur, ETA 1-4h
5. En attendant : utiliser les **process manuels**

**Process manuels en cas d'indisponibilité n8n :**
- Lead entrant → Créer la fiche manuellement dans Notion
- Production contenu → Utiliser les prompts directement sur claude.ai
- Envoi livrables → Email manuel depuis client mail
- Notifications → Email direct
- Logging → Notes dans Notion

---

## Fallback 2 : Claude API indisponible

**Symptôme** : Erreurs API dans n8n, timeouts.

**Procédure :**
1. Vérifier status.anthropic.com
2. Si incident en cours : attendre la résolution (généralement < 2h)
3. En attendant : utiliser claude.ai directement avec les prompts du repo

**Comment utiliser les prompts manuellement :**
1. Ouvrir claude.ai
2. Ouvrir le fichier de prompt approprié (ex: `prompts/content/linkedin.md`)
3. Copier le prompt
4. Remplir les variables manuellement
5. Soumettre et récupérer l'output
6. Passer la QA habituelle

---

## Fallback 3 : Notion indisponible

**Symptôme** : Notion ne charge pas, API 503.

**Procédure :**
1. Vérifier status.notion.so
2. Les données restent dans Notion (pas de perte) — juste inaccessibles temporairement
3. En attendant : gérer depuis la mémoire / notes locales
4. Si urgence client : contacter directement par email ou téléphone

---

## Fallback 4 : Client qui demande quelque chose hors périmètre

**Symptôme** : Demande de travail non prévu dans le contrat (refonte graphique, dev, traduction, etc.)

**Procédure :**
1. Ne jamais absorber silencieusement
2. Email dans les 24h : "Cette demande sort du périmètre de notre accord actuel. Voici les options : [option 1 : devis] [option 2 : hors périmètre avec explication]"
3. Mettre à jour Notion : note dans le dossier client
4. Si pattern récurrent → réviser le brief ou le contrat au prochain renouvellement

---

## Incidents de qualité

**Symptôme** : Client insatisfait d'un livrable livré.

**Procédure :**
1. Lire attentivement le retour client sans se défendre
2. Identifier si : erreur de production (QA pas passée) ou désalignement de brief (besoin mal cadré)
3. **Si erreur de production** : rectifier gratuitement dans les 24h ouvrées, s'excuser brièvement
4. **Si désalignement** : proposer un call de 20 min pour recadrer, puis réviser
5. Logger dans Notion : Projets > [Client] > Incidents qualité (pour amélioration continue)
6. Si erreur systémique : mettre à jour le processus ou le prompt qui a causé l'erreur

---

## Suivi des incidents

Chaque incident est loggé dans Notion (base "Ops > Incidents") avec :
- Date
- Composant affecté
- Description
- Impact client (oui/non)
- Action prise
- Temps de résolution
- Amélioration à apporter

Revue mensuelle des incidents pour identifier les patterns.
