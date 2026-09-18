// Practice content for track 19, Écrire en français québécois.
// Five timed drills and one take-home simulation. Prompts in French; the app chrome stays English.

export const FR_DRILLS = [
  {
    id: 'fr-adapter-objet', trackRef: 19, minutes: 5, title: 'Adapter un objet de courriel',
    prompt: `Objet anglais d'une marque de literie vendue en ligne au Québec :\n\n"Unlock 30% off your best sleep ever. Limited time only!"\n\nÉcrivez trois objets de courriel en français de moins de 50 caractères chacun. Un des trois doit contenir une date. Un des trois doit tutoyer. Aucun ne doit contenir « débloquez », « exclusif », « incroyable » ou un point d'exclamation.`,
    constraints: ['Moins de 50 caractères par objet, espaces comprises', 'Le chiffre 30 % reste, avec l’espace avant le symbole', 'Un objet avec date, un objet au tutoiement, un objet au vouvoiement'],
    scoreOn: [
      'Les trois objets tiennent-ils sous 50 caractères ?',
      'Le mot « rabais » ou un équivalent québécois apparaît-il au moins une fois ?',
      'Le tutoiement et le vouvoiement sont-ils chacun tenus dans leur objet sans se mélanger ?',
      'Aucun des trois n’est-il une traduction mot à mot de l’anglais ?'
    ],
    goodLooksLike: 'Trois lignes comme « 30 % de rabais sur ton prochain sommeil » (tutoiement, 38 caractères), « Jusqu’au 30 septembre : 30 % de rabais » (date), « Dormez mieux, à 30 % de moins » (vouvoiement). Rien ne « débloque ».'
  },
  {
    id: 'fr-point-median', trackRef: 19, minutes: 5, title: 'Situer une offre d’emploi',
    prompt: `Offre d'emploi rédigée à Paris pour un poste à Montréal :\n\n"Nous recherchons un chargé de clientèle passionné pour rejoindre notre équipe dynamique. Vous serez en charge du suivi des comptes clients et de la prospection par mail. Entretien d'embauche en visio dans un premier temps. CDI, 45 000 € brut annuel."\n\nRéécrivez-la pour un lecteur montréalais. Lexique, écriture inclusive au point médian, ponctuation, monnaie, statut d'emploi. Comptez vos changements.`,
    constraints: ['Même longueur à 20 % près', 'Au moins huit changements, listés sous le texte', 'Le salaire reste un chiffre, converti ou indiqué en dollars canadiens avec [à confirmer]'],
    scoreOn: [
      'Courriel, entrevue et mandat (ou compte) ont-ils remplacé mail, entretien et suivi des comptes ?',
      'Le point médian est-il appliqué à chaque nom de personne (chargé·e, conseiller·ère) ?',
      'Le statut CDI et l’euro ont-ils été remplacés par un équivalent québécois (poste permanent, dollars) ?',
      'Les mots « passionné » et « dynamique » ont-ils disparu ou reçu un complément concret ?'
    ],
    goodLooksLike: 'Un texte qui commence par « Nous cherchons un·e conseiller·ère aux comptes clients pour se joindre à une équipe de [n] personnes à Montréal », avec « entrevue en visioconférence », « poste permanent », « [xx] 000 $ CA [à confirmer] », et une liste de dix changements.'
  },
  {
    id: 'fr-tells-cloture', trackRef: 19, minutes: 5, title: 'Remplacer la clôture-bilan',
    prompt: `Dernier paragraphe d'un article de fond sur une jeune entreprise québécoise de logistique du dernier kilomètre, écrit avec un outil :\n\n"En conclusion, dans un paysage logistique en constante évolution, Colivert représente bien plus qu'une simple solution de livraison ; c'est un véritable changement de paradigme. Grâce à son approche innovante et à son engagement envers la durabilité, l'entreprise est appelée à jouer un rôle de plus en plus important dans l'écosystème du commerce électronique au Québec."\n\nFaits disponibles dans l'article : 38 vélos-cargos, 4 arrondissements de Montréal, 11 000 livraisons en août 2026, un partenariat avec la SAQ annoncé en juin, un refus de permis à Laval en mai.\n\nRéécrivez la clôture en une à trois phrases, avec au moins un des faits, sans aucun mot de la liste : paysage, évolution, paradigme, innovant, écosystème, engagement, important.`,
    constraints: ['Entre 25 et 60 mots', 'La dernière phrase doit pouvoir être citée seule', 'Le refus de permis doit apparaître ou être visiblement écarté par un choix que vous nommez'],
    scoreOn: [
      'La clôture contient-elle un chiffre ou un nom propre tiré de la liste ?',
      'La dernière phrase se cite-t-elle seule, sans le reste ?',
      'Le risque (Laval) est-il là, ou son absence est-elle un choix déclaré ?',
      'Aucun des sept mots interdits n’est-il passé ?'
    ],
    goodLooksLike: '« Onze mille livraisons en août avec 38 vélos-cargos, quatre arrondissements et la SAQ depuis juin. Laval a dit non en mai. C’est le prochain chiffre à surveiller. » Une fin qui donne au lecteur quelque chose à vérifier dans six mois.'
  },
  {
    id: 'fr-communique-titre', trackRef: 19, minutes: 5, title: 'Le titre de nomination que le Grenier publie tel quel',
    prompt: `Faits : Cossette (agence, Montréal) nomme Julie Lavoie au poste de vice-présidente, stratégie, à compter du 6 octobre 2026. Elle vient de Lg2 où elle a piloté les mandats Desjardins et Hydro-Québec pendant six ans. L'équipe stratégie de Cossette compte 14 personnes.\n\nÉcrivez : le titre du communiqué, la première phrase, et la phrase de parcours. Puis écrivez la citation de la présidente en une phrase, avec le verbe « faire rayonner » ou « bonifier ».`,
    constraints: ['Titre sans adjectif', 'Première phrase : qui, quoi, depuis quand, où', 'Deux mandats nommés dans la phrase de parcours', 'Une seule exclamation permise, dans la citation seulement'],
    scoreOn: [
      'Le titre a-t-il un verbe d’annonce (nomme, accueille), le nom, le poste exact et la ville ?',
      'La première phrase contient-elle la date du 6 octobre ?',
      'Desjardins et Hydro-Québec sont-ils nommés ?',
      'La citation dit-elle ce que la personne apporte, avec un verbe du milieu, sans « visionnaire » ni « nouvelle ère » ?'
    ],
    goodLooksLike: '« Cossette nomme Julie Lavoie vice-présidente, stratégie, à Montréal. » Puis : « Julie Lavoie se joint à Cossette à titre de vice-présidente, stratégie, dès le 6 octobre. Auparavant chez Lg2 pendant six ans, elle a piloté les mandats Desjardins et Hydro-Québec. » La citation tient en une phrase et nomme l’équipe de 14.'
  },
  {
    id: 'fr-note-revision', trackRef: 19, minutes: 5, title: 'La note de révision en quatre lignes',
    prompt: `Vous avez révisé une chronique de 600 mots pour une collègue. Vous avez : gardé « lettre de présentation » (elle écrit pour le milieu) ; corrigé « les équipes passe » en « passent » à la ligne 22 ; coupé la clôture « Pour résumer, l'IA est un levier incontournable... » et remis à sa place sa propre phrase de la ligne 40 (« Ce qui coûte des entrevues, c'est l'uniformité ») ; laissé un crochet [le nombre de lettres reçues en 2025] au paragraphe 2.\n\nÉcrivez la note de révision que vous lui remettez. Quatre étiquettes : Gardé, Corrigé, Coupé, À fournir. Sous 100 mots.`,
    constraints: ['Chaque étiquette suivie du pourquoi ou du numéro de ligne', 'Aucun adjectif d’appréciation (percutant, fluide, professionnel)', 'La collègue doit pouvoir refuser chaque décision'],
    scoreOn: [
      'Le choix usage-contre-Office est-il expliqué en une ligne, avec le terme de l’Office nommé ?',
      'La correction cite-t-elle la ligne ?',
      'La coupe dit-elle par quoi elle a été remplacée ?',
      'La note évite-t-elle tout jugement global sur le texte ?'
    ],
    goodLooksLike: '« Gardé : lettre de présentation, usage du milieu (l’Office dit lettre d’accompagnement ; à toi de voir si ça va à un ministère). Corrigé : ligne 22, passe → passent. Coupé : la clôture « Pour résumer... », remplacée par ta phrase de la ligne 40. À fournir : le nombre de lettres reçues en 2025, paragraphe 2. » Quarante-huit mots.'
  }
];

export const FR_SIMS = [
  {
    id: 'sim-fr-grenier',
    role: 'Rédacteur·rice-réviseur·e bilingue (contrat, trois jours par semaine)',
    title: 'Trois textes pour Brindille : communiqué, chronique, courriel',
    company: "Brindille (fictive), agence de communication de 26 personnes à Québec, fondée en 2014, clientèle OBNL et PME de la Capitale-Nationale, environ 3,1 M$ de revenus en 2025, deux associées fondatrices.",
    minutes: 60,
    scenario: `Merci d'avoir accepté l'exercice. Le poste, c'est de tenir la plume de l'agence en français : ce qu'on envoie au Grenier, ce qu'on publie sur notre site, ce qu'on écrit pour nos clients quand ils n'ont personne. Cet exercice, c'est trois pièces qu'on aurait à produire une semaine normale.\n\nContexte. On vient d'embaucher Nadia Bouchard comme directrice, service-conseil, à compter du 13 octobre 2026. Elle arrive de Tam-Tam\\TBWA à Montréal où elle a mené les mandats Fondation CHU de Québec et Beneva pendant cinq ans. Elle remplace Marc, qui part à la retraite après onze ans. Avec elle, l'équipe service-conseil passe à sept personnes. Geneviève, une des associées, dit d'elle : « elle sait dire non à un client, et le client la remercie ».\n\nDeuxième chose. Le Grenier nous a offert une chronique dans sa rubrique Ressources humaines, 600 mots, sur le sujet de notre choix. On aimerait parler de ce qu'on a vu cette année : 140 candidatures reçues pour deux postes, dont, selon Geneviève, « au moins la moitié écrites par le même robot ». On a gardé des chiffres : 140 lettres, 61 avec la même phrase d'ouverture sur notre « approche humaine et créative » (c'est le titre de notre page À propos), 9 avec un chiffre dedans, 4 qui répondaient à la question qu'on posait dans l'affichage (« quel mandat auriez-vous refusé, et pourquoi »). On a reçu les 4 en entrevue. On en a embauché 2.\n\nTroisième chose. Un client, la Coopérative funéraire des Deux Rives, veut un courriel à ses 4 200 membres pour annoncer que la préarrangement en ligne est maintenant possible, en français d'abord, avec un rabais de 150 $ jusqu'au 30 novembre. Ils vouvoient. Ils ne veulent ni humour ni « paix d'esprit ». Le courriel doit être court.\n\nCe qu'on attend :\n1. Le communiqué de nomination de Nadia, prêt pour le Grenier, 180 à 220 mots. Sa grammaire habituelle. Une citation de Geneviève, une de Nadia (à écrire, on validera avec elle ; mettez [à valider]).\n2. La chronique, 550 à 650 mots, avec nos chiffres. Prise de position. Pas de résumé à la fin. Signée Brindille.\n3. Le courriel de la Coopérative : objet de moins de 50 caractères, corps de 90 à 130 mots, vouvoiement, le rabais, la date, un seul bouton.\n\nContraintes qui ne bougent pas : point médian dans tout ce qui nomme des personnes ; courriel, entrevue, mandat ; espace avant les deux-points et le point d'interrogation ; aucun chiffre inventé (crochets si vous en manquez) ; pour le courriel, pas d'anglicisme du tout.\n\nOn lit d'abord vos crochets et votre note de révision, puis les textes.`,
    deliverable: "Un seul document, trois textes et une note. (1) Le communiqué de nomination, 180 à 220 mots, titre inclus. (2) La chronique, 550 à 650 mots, titre inclus, signée Brindille. (3) Le courriel de la Coopérative : objet, corps de 90 à 130 mots, texte du bouton. (4) La note de révision : ce que vous avez gardé, ce que vous avez choisi entre l'usage et l'Office avec le terme de l'Office nommé, ce que vous avez laissé entre crochets, et pourquoi. On lit la note en premier.",
    materials: [
      { label: "Faits sur la nomination", kind: "brief", content: "Nadia Bouchard, directrice, service-conseil, à compter du 13 octobre 2026. Vient de Tam-Tam\\TBWA (Montréal), cinq ans, mandats Fondation CHU de Québec et Beneva. Remplace Marc (retraite, onze ans chez Brindille). Équipe service-conseil : sept personnes avec elle. Geneviève (associée fondatrice) : « elle sait dire non à un client, et le client la remercie ». Citation de Nadia : à écrire, marquer [à valider]." },
      { label: "Chiffres du recrutement 2026, pour la chronique", kind: "data", content: "Deux postes affichés. 140 candidatures reçues. 61 lettres ouvrant sur notre « approche humaine et créative » (titre de notre page À propos). 9 lettres avec au moins un chiffre. 4 lettres répondant à la question de l'affichage (« quel mandat auriez-vous refusé, et pourquoi »). 4 personnes reçues en entrevue, les mêmes. 2 embauches. Geneviève : « au moins la moitié écrites par le même robot ». Aucun autre chiffre disponible ; crochets si vous en voulez d'autres." },
      { label: "Brief du client, Coopérative funéraire des Deux Rives", kind: "brief", content: "4 200 membres. Annonce : le préarrangement funéraire en ligne est maintenant offert, en français d'abord. Rabais de 150 $ jusqu'au 30 novembre 2026. Vouvoiement. Ni humour ni « paix d'esprit ». Court. Un seul bouton. Aucun anglicisme." },
      { label: "Gabarit maison du communiqué (extrait)", kind: "copy", content: "Titre : [Agence] nomme [Prénom Nom] [poste], à [ville]\nPhrase 1 : [Nom] se joint à [Agence] à titre de [poste], à [ville], dès le [date].\nParcours : Auparavant au sein de [org], il·elle a piloté les mandats [X] et [Y] pendant [n] ans.\nCitation dirigeant·e : une phrase sur l'apport, une sur l'équipe.\nCitation de la personne : un verbe du milieu (faire rayonner, bonifier).\nChute : effectif ou prochain mandat." }
    ],
    rubric: [
      { criterion: "Communiqué : grammaire maison tenue (verbe d'annonce, date, deux mandats, effectif, point médian, une exclamation au plus, [à valider] sur la citation de Nadia)", weight: 25, meets: "Le Grenier pourrait le publier sans le réécrire. Chaque fait du brief est là, aucun n'est inventé." },
      { criterion: "Chronique : constat chiffré, bascule nommée, position, chute d'une ligne, zéro « De plus », zéro résumé, un anglicisme au plus entre guillemets", weight: 30, meets: "Les cinq chiffres (140, 61, 9, 4, 2) portent l'argument ; la position dit ce qui coûte l'entrevue ; la dernière phrase se cite seule." },
      { criterion: "Courriel : objet sous 50 caractères avec 150 $ et la date, vouvoiement tenu, aucun anglicisme, aucun « paix d'esprit », un bouton, 90 à 130 mots", weight: 20, meets: "Un membre de 70 ans comprend en une lecture ce qui est nouveau, combien, jusqu'à quand, et où cliquer." },
      { criterion: "Note de révision : chaque choix usage-contre-Office nommé avec le terme de l'Office, chaque crochet listé, aucun adjectif d'appréciation", weight: 15, meets: "Geneviève peut refuser chaque décision ligne par ligne." },
      { criterion: "Finition égale sur les trois pièces", weight: 10, meets: "Aucune pièce n'est visiblement plus léchée qu'une autre ; le test de la recruteuse (l'écart avec le reste du dossier) passe." }
    ],
    trackRefs: [19, 6, 18]
  }
];
