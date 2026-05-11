# Prompt — Emails de relance

## Usage
Générer des emails de relance pour les prospects silencieux ou les clients sans retour.

---

## Prompt IA — Relance prospect (post-proposition)

```
Rédige un email de relance pour un prospect qui n'a pas répondu à une proposition commerciale.

CONTEXTE :
- Nom du prospect : {{NOM}}
- Offre proposée : {{OFFRE}}
- Date d'envoi de la proposition : {{DATE_ENVOI}}
- Délai depuis l'envoi : {{DELAI}} jours
- Dernier contact : {{DERNIER_CONTACT}}
- Contexte spécifique connu (problème, urgence, actualité) : {{CONTEXTE_SPECIFIQUE}}

RÈGLES :
- < 100 mots
- Pas de culpabilisation
- Pas d'"j'espère que vous avez bien reçu"
- Donner une raison valable de relancer (nouvelle info, question, deadline)
- Ton : direct, bienveillant
- Une seule question en clôture
- Proposer une alternative au document (call de 15 min ?)

FORMAT :
Objet : [texte]
Corps : [texte]
```

---

## Prompt IA — Relance client (retours en attente)

```
Rédige un email de relance pour un client qui n'a pas envoyé ses retours sur un livrable.

CONTEXTE :
- Nom du client : {{NOM}}
- Livrable en attente de retour : {{LIVRABLE}}
- Date d'envoi : {{DATE_ENVOI}}
- Délai de retour prévu : {{DELAI_PREVU}}
- Délai écoulé depuis l'envoi : {{DELAI_ECOULE}} jours
- Conséquence du retard (ex: décale la production du mois suivant) : {{CONSEQUENCE}}

RÈGLES :
- < 80 mots
- Rappeler la conséquence pratique du retard sans être agressif
- Proposer une alternative (call rapide plutôt que commentaires écrits ?)
- Ton : factuel, efficace

FORMAT :
Objet : [texte]
Corps : [texte]
```

---

## Templates rapides (sans IA)

### Relance J+2 post-proposition
**Objet :** Re: Proposition [NomClient]
**Corps :**
Bonjour [Prénom],
Je voulais juste m'assurer que vous aviez bien reçu la proposition.
Avez-vous eu l'occasion d'y jeter un œil ?
Je suis disponible pour en parler rapidement si vous avez des questions.
[Signature]

---

### Relance J+5 post-proposition
**Objet :** [NomClient] — Question sur la proposition
**Corps :**
Bonjour [Prénom],
Je reviens vers vous sur la proposition du [date].
Si elle ne correspond plus à vos priorités actuelles, pas de souci — dites-le moi et j'archive de mon côté.
Si vous avez des questions ou des points à ajuster, je suis disponible pour un call de 15 min cette semaine.
[Signature]

---

### Relance retours livrable
**Objet :** [NomClient] — Retours [Livrable] attendus
**Corps :**
Bonjour [Prénom],
Je n'ai pas encore reçu vos retours sur [livrable envoyé le date].
Pour ne pas retarder la production de [mois prochain / prochaine phase], j'aurais besoin de vos commentaires avant le [date].
Un call de 20 min est aussi possible si vous préférez.
[Signature]
