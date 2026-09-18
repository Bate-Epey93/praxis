// Track 19 · Écrire en français québécois : rédaction professionnelle et marketing
// Built from five Grenier aux nouvelles pieces (2024 to 2026), the OQLF's Banque de dépannage
// linguistique and Grand dictionnaire terminologique, and the Charte de la langue française
// as amended in 2022. Legal points are summarised, dated, and flagged to verify.
export default [{
  id: 19, phase: 'Français québécois', color: '--cy', roles: ['co', 'cs', 'comms'],
  title: 'Écrire en français québécois',
  sub: 'Registre, chronique, communiqué, copy marketing',
  time: 'Study 3h · Artifact 5h',
  prereq: 'Tracks 3, 5, 6 (framing, voice, copy craft). Reading French at B2 or better.',
  feeds: 'Feeds tracks 9, 18, 17',
  sources: 'Grenier aux nouvelles (chroniques 2026, actualité 2024) · OQLF BDL et GDT · Charte de la langue française (Loi 96, 2022) · Reinhart et al. PNAS 2025 pour les tells structurels',
  sections: [

    /* ── 1 ─────────────────────────────── */
    {
      id: 't19-registre', title: 'Le registre professionnel québécois',
      blocks: [
        { t: 'p', v: "Le français professionnel du Québec n'est pas le français de France avec un accent. C'est une norme à part, avec son organisme (l'Office québécois de la langue française), son dictionnaire terminologique (le GDT), sa banque de dépannage (la BDL) et ses habitudes de milieu qui, parfois, contredisent l'Office. Écrire pour un lecteur québécois, c'est tenir les deux : la norme et l'usage." },
        { t: 'plain', v: "Un texte « corrigé » vers le français de France se remarque en une ligne. Il dit « e-mail » là où tout le monde dit courriel, « entretien d'embauche » là où le milieu dit entrevue, « cookie » là où l'Office a imposé témoin. Le lecteur ne pense pas « faute » ; il pense « pas d'ici »." },
        { t: 'h', v: 'Le lexique qui situe un texte' },
        { t: 'table', head: ['Québec (OQLF, en usage)', 'France ou anglicisme', 'Contexte'],
          rows: [
            ['courriel', 'e-mail, mail', 'toujours'],
            ['entrevue', "entretien (d'embauche)", 'RH ; « entretien » survit dans les reportages'],
            ['témoin', 'cookie', 'web, vie privée'],
            ['mandat', 'compte, contrat, engagement', 'agences : « décrocher un mandat »'],
            ['nomination', 'embauche, promotion', "une nomination est une personne nommée à un poste, pas un candidat à un prix"],
            ['relève', 'jeunes talents, next gen', 'RH, agences'],
            ['faire rayonner', 'promouvoir, donner de la visibilité', 'com et philanthropie'],
            ['se joindre à l’équipe', 'rejoindre l’équipe', 'communiqués de nomination'],
            ['agir à titre de', 'en tant que', 'communiqués'],
            ['au sein de', 'chez, dans', 'communiqués'],
            ['bonifier', 'améliorer, enrichir', 'offres, programmes'],
            ['à l’affût', 'à la recherche de', 'offres d’emploi'],
            ['carburer à', 'être motivé par', 'offres d’emploi, ton relâché'],
            ['main-d’œuvre, pénurie de', 'talents, guerre des', 'RH, économie'],
            ['taux de roulement', 'turnover', 'RH'],
            ['service-conseil', 'consulting', 'agences']
          ]},
        { t: 'h', v: 'Norme contre usage : quand le milieu contredit l’Office' },
        { t: 'p', v: "Le GDT classe « lettre de présentation » comme forme fautive et renvoie à « lettre d'accompagnement ». Le Grenier, ses recruteurs et l'ensemble du milieu disent « lettre de présentation », y compris dans le titre de la chronique du 1er septembre 2026. Même chose pour « appliquer » (l'Office dit postuler) que l'on trouve dans une chronique de février 2026, et pour « candidater », emprunt à la France, cité dans un reportage de 2024." },
        { t: 'key', v: "Règle de décision. Texte destiné au milieu (chronique, communiqué, page carrière, infolettre) : l'usage gagne, on ne corrige pas. Texte destiné à un ministère, une université, un organisme subventionnaire : l'Office gagne. Dans les deux cas, on sait lequel des deux on a choisi et on peut le dire. Corriger en silence vers l'un ou l'autre est la seule vraie faute." },
        { t: 'h', v: 'La rédaction inclusive au point médian' },
        { t: 'p', v: "Candidat·es, expert·es, conseiller·ères, recruteur·ses, dirigeant·es, employé·es, tou·tes, il·elles. C'est la forme institutionnelle du milieu com-marketing québécois, et elle est contraire aux recommandations de l'Académie française. Elle se lit, se prononce (« candidates et candidats »), et se combine avec la doublet complet quand la phrase le permet : « ils et elles y participent ». Un texte qui l'omet dans une offre d'emploi ou un communiqué de nomination se remarque autant qu'un anglicisme." },
        { t: 'ge', label: 'Offre d’emploi, phrase d’accroche',
          good: '« Nous cherchons un·e conseiller·ère en recrutement à l’affût des talents de la relève, pour se joindre à une équipe de quatre personnes au sein de notre bureau de Québec. »',
          bad: '« Nous recherchons un consultant en recrutement passionné pour rejoindre notre équipe dynamique et contribuer à notre croissance. »',
          why: "La première phrase est située : point médian, lexique du milieu, effectif de l'équipe, ville. La seconde pourrait être publiée par n'importe quelle entreprise de n'importe quel pays francophone, et « passionné », « dynamique », « contribuer à notre croissance » sont le vocabulaire d'annonce que le lecteur saute." },
        { t: 'h', v: 'La ponctuation qui n’est pas une erreur' },
        { t: 'list', v: [
          "Espace insécable avant le deux-points, le point-virgule, le point d'interrogation et le point d'exclamation. Les chroniques du Grenier de 2026 le respectent ; un reportage de 2024 l'omet. Les deux existent dans la même maison : ne pas uniformiser sans demander.",
          "Guillemets français « » avec espace insécable à l'intérieur. La variante «» sans espace existe aussi (Grenier 2024).",
          "Pourcentage avec espace : « 70 % ». Nombres sans séparateur de milliers sous dix mille : « 2000 personnes ».",
          "Sigles sans points : IA, PME, RH, ROI, CRM, B2B, OBNL.",
          "Titres en phrase, minuscule après le premier mot, ponctuation finale possible : « Former ou recruter des expert·es IA? Le dilemme des PME québécoises »."
        ]},
        { t: 'warn', lbl: 'Ce qu’un outil anglais casse', v: "Toute expression régulière à frontière de mot (\\b) se brise sur le point médian : « candidat·es » devient deux mots. Toute règle d'espacement anglaise signale « Résultat ? » comme une erreur. Si vous passez un texte français dans un correcteur ou un linter conçu pour l'anglais, ses résultats sur ces deux points sont faux." },
        { t: 'drill', v: [
          "Prenez une offre d'emploi française (de France) de 150 mots. Réécrivez-la pour Montréal : lexique, point médian, ponctuation. Comptez les changements. Il devrait y en avoir au moins huit.",
          "Trouvez dans un texte de votre organisation trois termes où l'usage et l'Office divergent. Décidez pour chacun, par écrit, lequel vous suivez et pourquoi.",
          "Lisez à voix haute une phrase au point médian. Si vous ne pouvez pas la dire, réécrivez-la en doublet complet."
        ]}
      ]
    },

    /* ── 2 ─────────────────────────────── */
    {
      id: 't19-chronique', title: 'La chronique : prendre position en 600 mots',
      blocks: [
        { t: 'p', v: "La chronique est le format d'opinion du milieu. Le Grenier en publie une par jour, signée par un·e pro ou par la maison (« Grenier aux talents »). Elle fait 500 à 900 mots, prend position, et son lecteur est un pair qui saura si vous bluffez. Cinq chroniques de 2026 donnent le gabarit." },
        { t: 'h', v: 'La structure en cinq temps' },
        { t: 'steps', v: [
          { n: 1, name: 'Le constat, en une phrase', body: "« Les recruteurs en communication-marketing lisent des centaines, voire des milliers de lettres de présentation par année. » Un fait, un état des lieux, un chiffre si vous l'avez. Jamais un cadre (« Dans un monde... »)." },
          { n: 2, name: 'Le battement', body: "Un paragraphe d'une ligne qui installe la tension : « Ça a pris un an. » « Et cette question change tout. » Un ou deux par texte, pas plus." },
          { n: 3, name: 'La preuve, un chiffre ou une anecdote par argument', body: "70 % des entreprises, 66 % des chercheurs d'emploi, 40 refus. Dollarama, 2000 personnes, quatre recruteurs. Quand un argument n'a ni chiffre ni nom, le lecteur le saute. La chronique « former ou recruter » de mai 2026 n'a aucun chiffre ; c'est sa faiblesse, pas un modèle." },
          { n: 4, name: 'La bascule nommée', body: "« La réponse courte serait de dire les deux. La réponse honnête est un peu plus nuancée. » « Reste à nommer la vraie nuance. » Le texte annonce son tournant, puis tourne. C'est là que la position arrive." },
          { n: 5, name: 'La chute, une ligne', body: "« Tout ce qu'il y a de plus humain, finalement. » « Gardez aussi deux ou trois de vos tournures imparfaites, ce sont vos empreintes. » Pas de résumé, pas de « en conclusion ». La dernière phrase est celle qu'on cite." }
        ]},
        { t: 'ge', label: 'Ouverture de chronique',
          good: '« Dans les PME québécoises, l’intelligence artificielle n’est plus une curiosité. C’est une pression, une attente. Parfois même une source d’anxiété. »',
          bad: '« Dans un paysage d’affaires en constante évolution, l’intelligence artificielle s’impose comme un levier incontournable de transformation pour les organisations de toutes tailles. »',
          why: "La première situe (PME, Québec), nomme un état (pression, attente, anxiété) et monte en trois temps courts. La seconde est le paragraphe d'ouverture qu'un modèle produit pour n'importe quel sujet ; « paysage », « constante évolution », « levier incontournable », « transformation » sont ses quatre mots préférés en français." },
        { t: 'h', v: 'Les dispositifs maison' },
        { t: 'list', v: [
          "**L'ouverture en gras.** Cinq paragraphes commençant par un syntagme nominal en gras et un point : « L'ouverture flatteuse qui ne prouve rien. » Ce n'est pas la « liste à étiquettes » d'un robot ; c'est un dispositif de la maison, et il se reconnaît parce que chaque étiquette est suivie de trois phrases avec un exemple.",
          "**La liste de trois questions pour dirigeants.** « Quel indicateur précis voulons-nous améliorer ? Combien nous coûte la situation actuelle ? À quel moment l'investissement devra-t-il s'autofinancer ? » Elle sert à donner au lecteur quelque chose à dire en réunion. Ne pas confondre avec trois questions rhétoriques en ouverture, qui ne servent à rien.",
          "**La citation de soi en encadré**, signée avec le titre : « - Pascal Girard, Chef Solutions IA ». Admis dans une chronique invitée ; à éviter dans une chronique maison.",
          "**L'anglicisme choisi**, souvent entre guillemets : « wow », « quick win », « AI-ready », « faire de l'IA », « Ah, c'mon! ». Un ou deux par texte, jamais dans la phrase qui parle de rigueur. C'est un marqueur de ton, pas une paresse ; la différence, c'est que l'auteur écrit courriel et entrevue partout ailleurs."
        ]},
        { t: 'case', title: 'La chronique du 1er septembre 2026', v: "« La lettre de présentation parfaite ne convainc plus personne », signée Grenier aux talents. 420 mots. Un constat chiffré (des centaines, des milliers de lettres, deux ans), quatre tells de lettre générée en ouvertures grasses, une bascule (« Reste à nommer la vraie nuance »), une position (personne ne reproche l'outil, l'uniformité coûte les entrevues), une méthode en quatre phrases, une chute (« ce sont vos empreintes »). C'est le gabarit complet en une page, et il tient sans un seul adjectif de plus." },
        { t: 'warn', v: "Le paragraphe d'une ligne est un instrument, pas un style. Trois de suite (« Ça a pris un an. / Pas parce que l'IA ne fonctionnait pas. / Mais parce qu'entre l'outil et le résultat, il y a un humain. ») passent dans une chronique à la première personne sur une épreuve vécue. Dans une chronique sur le ROI, c'est du théâtre. Comptez-les avant de publier." },
        { t: 'drill', v: [
          "Écrivez le constat d'ouverture d'une chronique sur un sujet de votre milieu. Une phrase. Elle doit contenir un chiffre ou un lieu.",
          "Prenez une chronique du Grenier et marquez la bascule. Réécrivez-la en une phrase différente qui annonce le même tournant.",
          "Écrivez la chute d'une chronique que vous n'avez pas encore écrite. Si elle ressemble à un résumé, recommencez."
        ]}
      ]
    },

    /* ── 3 ─────────────────────────────── */
    {
      id: 't19-actualite', title: 'L’actualité et le communiqué : le registre dérivé',
      blocks: [
        { t: 'p', v: "L'actualité du Grenier (nominations, nouveaux mandats, campagnes, prix) est le registre le plus lu du milieu et le plus dérivé : la majorité des textes partent d'un communiqué d'agence. Le rédacteur en garde la structure et en atténue le ton. Savoir écrire ce registre, c'est savoir écrire le communiqué qui le nourrit." },
        { t: 'h', v: 'La structure du reportage (actualité signée)' },
        { t: 'list', v: [
          "**Chapeau qui liste puis nomme.** « Robots recruteurs, usage de deepfakes lors d'entretiens virtuels, tricherie à des tests d'embauche : l'intelligence artificielle... soulève bien des inquiétudes. Pourtant, [nom, titre, organisation] et [nom, titre, organisation] nous montrent que... » Trois éléments, un pivot, deux sources nommées avec leur titre exact.",
          "**Un cas québécois chiffré dans la première section.** Dollarama, plateforme AppyHere, plus de 2000 personnes, quatre recruteur·ses, source citée (Tru Montréal).",
          "**Une citation directe par section**, avec un verbe d'attribution qui varie : explique, prévient, souligne, admet, estime, conclut, ajoute. Jamais « dit » six fois.",
          "**Intertitres à l'infinitif** : Optimiser le processus, Automatiser le tri, Ouvrir les horizons, Ramener l'humain.",
          "**Une chute d'une ligne**, sans bilan : « Tout ce qu'il y a de plus humain, finalement. »"
        ]},
        { t: 'h', v: 'Le communiqué de nomination et de mandat' },
        { t: 'p', v: "C'est le texte que les agences envoient le plus souvent et que le Grenier reprend presque tel quel. Sa grammaire est fixe et le lecteur la connaît ; l'écart avec elle se voit." },
        { t: 'table', head: ['Élément', 'Forme attendue', 'Exemple'],
          rows: [
            ['Titre', "Verbe d'annonce, nom, poste, organisation", "« [Agence] accueille [Prénom Nom] à titre de directrice de la création »"],
            ['Première phrase', "Qui, quoi, depuis quand, où", "« [Nom] se joint à [Agence] à titre de directeur·rice du service-conseil, à Montréal, dès le 15 septembre. »"],
            ['Parcours', "Postes précédents, mandats connus, clients nommés", "« Auparavant au sein de [Agence B], il·elle a piloté les mandats [Client] et [Client]. »"],
            ['Citation du dirigeant', "Une phrase sur ce que la personne apporte, une sur l'équipe", "l'exclamation est tolérée ici (« l'agence tout indiquée pour répondre à ce mandat! »)"],
            ['Citation de la personne', "Ce qu'elle veut faire, en verbe", "« faire rayonner », « bonifier l'offre »"],
            ['Chute', "Effectif, prochain mandat, ou rien", "« L'équipe compte maintenant 32 personnes. »"]
          ]},
        { t: 'ge', label: 'Titre de communiqué de nomination',
          good: '« Sid Lee nomme Marie-Ève Tremblay vice-présidente, service-conseil, à Montréal »',
          bad: '« Une nouvelle ère commence : Sid Lee accueille une leader visionnaire pour propulser son équipe vers de nouveaux sommets »',
          why: "Le premier est le titre que le Grenier publiera sans le réécrire : verbe d'annonce, nom, poste exact, ville. Le second sera réécrit en salle, et « nouvelle ère », « visionnaire », « propulser », « nouveaux sommets » sont exactement le vocabulaire que la personne nommée devra porter en entrevue quand on lui demandera ce qu'elle a fait depuis." },
        { t: 'key', v: "Les triades et les superlatifs (« percutants, originaux et efficaces », « hors pair ») sont le registre du communiqué québécois depuis avant les modèles. Dans une actualité, ce ne sont pas des signes d'IA ; ce sont des signes d'agence. Le test n'est pas « y a-t-il une triade » mais « le troisième terme apporte-t-il quelque chose que les deux premiers ne disent pas »." },
        { t: 'drill', v: [
          "Écrivez le communiqué de nomination d'une personne réelle de votre réseau (avec sa permission ou sans le publier) : 180 mots, la grammaire du tableau, deux mandats nommés, un chiffre.",
          "Prenez une actualité du Grenier et reconstituez le communiqué d'origine : qu'est-ce que le rédacteur a coupé, atténué, déplacé ?",
          "Réécrivez un chapeau de reportage en supprimant la liste d'ouverture. Puis remettez-la. Lequel des deux le lecteur lit jusqu'au bout ?"
        ]}
      ]
    },

    /* ── 4 ─────────────────────────────── */
    {
      id: 't19-marketing', title: 'Le copy marketing en français : adapter, pas traduire',
      blocks: [
        { t: 'p', v: "La plupart du copy marketing en français au Québec naît en anglais. Le travail n'est pas de le traduire, c'est de l'écrire à nouveau pour un lecteur qui a un autre calendrier, une autre loi, un autre rapport à la marque et une autre idée de ce qui est drôle. Une traduction fidèle d'un bon copy anglais est presque toujours un mauvais copy français." },
        { t: 'h', v: 'Le cadre légal, en résumé (à vérifier avant chaque campagne)' },
        { t: 'p', v: "La Charte de la langue française, modifiée par la Loi 96 (juin 2022), encadre l'affichage public, la publicité commerciale, l'emballage, les sites transactionnels et les communications aux client·es et aux employé·es. Depuis juin 2025, sur l'affichage public visible de l'extérieur, le français doit être nettement prédominant, y compris autour d'une marque de commerce en anglais. Le site web et le service client d'une entreprise établie au Québec doivent être offerts en français d'une qualité équivalente à toute autre langue. Les régimes changent et les seuils (taille de l'entreprise, francisation) aussi : vérifiez la position en vigueur sur le site de l'Office avant de vous y fier, y compris pour ce résumé." },
        { t: 'warn', lbl: 'Le piège du « aussi en français »', v: "Un site où la version française est une traduction automatique non relue est conforme sur le papier et perdant dans les faits : le lecteur québécois le remarque en une page et achète ailleurs. « Qualité équivalente » se juge à la lecture, pas à l'existence du bouton FR." },
        { t: 'h', v: 'Adapter : les cinq décisions' },
        { t: 'steps', v: [
          { n: 1, name: 'Tutoiement ou vouvoiement', body: "Le « tu » est plus courant au Québec qu'en France pour une marque de consommation qui parle à des adultes, mais il se décide par marque, pas par campagne. Une marque qui vouvoie sur son site et tutoie dans ses courriels n'a pas de voix. Les chroniques professionnelles disent « vous » au lecteur et « on » pour le milieu." },
          { n: 2, name: "L'anglicisme : choisi ou paresseux", body: "« Le wow », « un quick win », « un lead » passent dans une chronique d'agence parce que le milieu les dit. « Optimisez votre workflow avec notre solution de pointe » ne passe nulle part. Le test : l'anglicisme est-il entre guillemets, ou au moins conscient ? Et le reste de la phrase est-il irréprochable ?" },
          { n: 3, name: 'Le chiffre local', body: "Un prix en dollars canadiens, taxes en sus ou incluses dites clairement, une date au format « 15 septembre », un lieu (Montréal, Québec, la Rive-Sud, Gatineau). Un copy sans ancrage local est un copy traduit." },
          { n: 4, name: "L'humour et la référence", body: "Le jeu de mots anglais ne se traduit pas ; il se remplace ou se coupe. La référence culturelle (hockey, cabane à sucre, la Saint-Jean, Tout le monde en parle) marche une fois par campagne, jamais dans le titre principal, et jamais si l'équipe qui l'a écrite n'est pas d'ici." },
          { n: 5, name: 'La longueur', body: "Le français est 15 à 25 % plus long que l'anglais à contenu égal. Un titre de six mots en anglais fait huit ou neuf mots en français ; dans un bouton, une bannière, un objet de courriel, il ne rentre pas. Réécrire plus court, pas tronquer." }
        ]},
        { t: 'ge', label: 'Objet de courriel, offre de rentrée, marque de consommation',
          good: '« La rentrée à 40 % de rabais, jusqu’au 15 septembre »',
          bad: '« Débloquez des économies incroyables pour la rentrée avec notre offre exclusive limitée dans le temps! »',
          why: "Le premier tient dans l'aperçu (46 caractères), donne le chiffre, la date, et l'occasion en mots québécois (« rentrée », « rabais »). Le second est une traduction de « Unlock incredible back-to-school savings with our exclusive limited-time offer! » ; « débloquez », « incroyables », « exclusive » sont les trois mots que la boîte de réception ignore, et il fait 89 caractères." },
        { t: 'ge', label: 'Page produit, phrase d’accroche, logiciel B2B',
          good: '« Vos demandes entrantes triées et acheminées à la bonne équipe en moins d’une minute. Sans nouveau CRM. »',
          bad: '« Une solution innovante propulsée par l’IA pour transformer votre expérience client et maximiser votre performance. »',
          why: "La première dit ce que ça fait, pour qui, en combien de temps, et ce que ça n'exige pas. La seconde est la phrase que Pascal Girard démonte dans sa chronique de février 2026 : « l'IA devient alors un symbole d'innovation. Pas un moteur de performance. » Un dirigeant québécois de PME lit la première et pose une question ; il lit la seconde et passe." },
        { t: 'h', v: 'Le vocabulaire d’annonce que le lecteur québécois saute' },
        { t: 'p', v: "innovant·e, incontournable, dynamique, passionné·e, propulser, révolutionner, transformer, expérience (sans complément), solution (sans complément), de pointe, sans précédent, à la fine pointe, levier (sans complément), écosystème, paysage, synergie, nouvelle ère, nouveaux sommets. Aucun n'est interdit. Chacun doit être suivi d'un nom, d'un chiffre ou d'un exemple dans la même phrase, sinon il se coupe." },
        { t: 'drill', v: [
          "Prenez un objet de courriel anglais de votre marque ou d'une marque connue. Écrivez trois versions françaises de moins de 50 caractères. Aucune ne doit contenir « débloquez », « exclusif » ou « incroyable ».",
          "Réécrivez une phrase d'accroche de page produit B2B en nommant : ce que ça fait, pour qui, en combien de temps, ce que ça n'exige pas.",
          "Trouvez dans une campagne québécoise récente une référence culturelle. Décidez si elle est portée par l'équipe ou plaquée. Notez pourquoi en une phrase."
        ]}
      ]
    },

    /* ── 5 ─────────────────────────────── */
    {
      id: 't19-tells', title: 'Reconnaître le texte généré en français',
      blocks: [
        { t: 'p', v: "Il n'existe pas encore de mesure publiée de la différence entre un modèle et un rédacteur québécois. Ce qui existe : les traits structurels mesurés en anglais (Reinhart et coll., PNAS 2025 : propositions participiales en ouverture cinq fois plus fréquentes, nominalisations deux fois, coordinations en triade deux fois), et une liste de quatre tells vue par une recruteuse, publiée au Grenier le 1er septembre 2026. Les deux se recoupent, et c'est ce recoupement qui fait qu'on peut s'y fier un peu." },
        { t: 'h', v: 'Les quatre tells de la recruteuse, et ce qu’ils coûtent' },
        { t: 'table', head: ['Tell', 'Ce que ça révèle au lecteur', 'Le contraire, qui fonctionne'],
          rows: [
            ["L'ouverture flatteuse qui ne prouve rien (« Votre approche innovante et votre culture axée sur l'humain m'inspirent depuis longtemps »)", "qu'une machine a visité la page « À propos »", "un élément précis sur l'organisation qui ne figure pas sur sa page d'accueil : une campagne récente, une nomination, un changement de positionnement"],
            ["L'absence totale de détails (pas un chiffre, pas un nom de client, jamais une erreur admise ; rigoureux·se, créatif·ve, orienté·e résultats)", "que le texte affirme au lieu de raconter", "une situation précise, avec ce qui a mal tourné et ce qui a été corrigé"],
            ["L'écart avec le reste du dossier (la lettre plus léchée que le portfolio et le courriel de suivi)", "que la lettre n'est pas de la même main", "un niveau de finition égal partout, quitte à être imparfait partout"],
            ["Les questions évitées (pourquoi ce poste maintenant, pourquoi ce changement de secteur, le trou de huit mois)", "que l'outil « écrit autour du vide, poliment »", "répondre à ce que le CV laisse en suspens, en premier"]
          ]},
        { t: 'key', v: "La phrase à retenir de la chronique : « Presque personne, du côté des employeurs, ne reproche l'usage d'un outil d'IA. La plupart en utilisent tous les jours. Ce qui coûte des entrevues, c'est l'uniformité. » Le problème n'est pas l'outil ; c'est quarante lettres qui disent la même chose de la même façon." },
        { t: 'h', v: 'Les traits structurels, traduits' },
        { t: 'list', v: [
          "**L'ouverture participiale.** « En combinant X et Y, cette solution permet... » « En s'appuyant sur..., l'entreprise vise... » Le sujet arrive tard, l'acteur se cache dans un gérondif. Une par texte, à la rigueur. Trois, c'est un modèle.",
          "**La liste de noms sans verbe.** « Sécurité accrue / Résilience / Performance évolutive / Conformité réglementaire ». Personne ne fait rien dans cette liste. Chaque item doit avoir un verbe ou redevenir une phrase.",
          "**La triade réflexe.** « rapide, sécuritaire et évolutif ». En communiqué, c'est le registre. En chronique ou en page produit, demandez si le troisième mot dit quelque chose que les deux premiers ne disent pas.",
          "**Le « De plus, » en tête de trois paragraphes.** C'est « Moreover » traduit. Le français enchaîne par le sens, pas par l'adverbe.",
          "**La clôture-bilan.** « En conclusion, », « Pour résumer, », « Ultimement, », « Dans un paysage en constante évolution, [X] est appelé·e à jouer un rôle de plus en plus important. » Le Grenier finit sur une ligne ; le modèle finit sur un résumé.",
          "**La triple question rhétorique en ouverture.** « Quelle est la valeur des données ? Qui contrôle nos données ? Où... ? » Une question par texte, à la charnière, suffit."
        ]},
        { t: 'ge', label: 'Clôture d’un article de fond sur une technologie',
          good: '« Reste à savoir si ça tient. Les développeurs devront apprendre Nada et le calcul multipartite. Certaines charges tourneront plus lentement qu’un serveur central, et les utilisateurs le verront. Les régulateurs n’ont pas encore écrit les règles. C’est la liste à revoir dans un an. »',
          bad: '« Nillion représente bien plus qu’une avancée technologique ; c’est un changement de paradigme dans la gestion des données. Dans notre paysage numérique en constante évolution, les technologies comme Nillion sont appelées à jouer un rôle de plus en plus vital. »',
          why: "La première clôture nomme trois risques concrets et une date. La seconde est la traduction de la clôture que le modèle avait écrite en anglais pour le même article en 2024 ; « bien plus qu'une avancée », « changement de paradigme », « paysage en constante évolution », « rôle de plus en plus vital » sont ses quatre formules de fin, en français comme en anglais." },
        { t: 'h', v: 'La méthode de la recruteuse, qui est aussi la vôtre' },
        { t: 'p', v: "Écrivez d'abord une version brute dans vos mots, quitte à dicter à voix haute et à laisser des phrases boiteuses. Servez-vous ensuite de l'outil pour resserrer, corriger, couper les répétitions. Conservez au moins une anecdote concrète et un élément précis sur l'organisation qui ne figure pas sur sa page d'accueil. Gardez deux ou trois de vos tournures imparfaites : ce sont vos empreintes. Quatre phrases, et c'est tout le pipeline." },
        { t: 'drill', v: [
          "Prenez un texte de 300 mots généré en français sur un sujet de votre milieu. Marquez chaque ouverture participiale, chaque liste sans verbe, chaque « De plus », la clôture. Comptez.",
          "Réécrivez la clôture en une ligne qui pourrait être citée. Si elle contient « paysage », recommencez.",
          "Écrivez la version brute d'un paragraphe en dictant à voix haute, sans corriger. Puis resserrez. Gardez une tournure boiteuse et notez laquelle."
        ]}
      ]
    },

    /* ── 6 ─────────────────────────────── */
    {
      id: 't19-reviser', title: 'Réviser un texte français sans l’aplatir',
      blocks: [
        { t: 'p', v: "Réviser, c'est décider ce qu'on ne touche pas avant de toucher quoi que ce soit. En français québécois, la liste de ce qu'on ne touche pas est plus longue qu'en anglais, parce que la moitié des « fautes » qu'un correcteur signale sont le registre." },
        { t: 'h', v: 'Le registre source : quatre colonnes avant toute modification' },
        { t: 'table', head: ['Colonne', 'Ce qui y va', 'Règle'],
          rows: [
            ['Fait', 'noms, dates, chiffres, citations, mandats, nominations', "conservé tel quel ; une erreur se corrige et se note"],
            ['Affirmation', 'conclusions, opinions, et leur force (peut, semble, montre, prouve)', "direction et force conservées ; jamais renforcées"],
            ['Voix', "tournures, anglicismes choisis, lexique québécois, point médian, tutoiement ou vouvoiement, calques d'usage", "conservée ; les anglicismes notés « choisi ou paresseux : à l'auteur »"],
            ['Structure', 'titres, ordre, gabarit imposé, ouvertures en gras, encadrés', "changée seulement si le but le demande, et chaque déplacement est déclaré"]
          ]},
        { t: 'h', v: 'Ce qui n’est jamais une correction' },
        { t: 'list', v: [
          "Remplacer courriel par e-mail, entrevue par entretien, témoin par cookie, mandat par compte.",
          "Supprimer le point médian ou le remplacer par « (e) ».",
          "Enlever l'espace avant le deux-points ou le point d'interrogation.",
          "Remplacer « lettre de présentation » par « lettre d'accompagnement » dans un texte destiné au milieu (on peut le signaler ; on ne le corrige pas sans demander).",
          "Supprimer un anglicisme entre guillemets. Il est là exprès.",
          "Réécrire une phrase longue à virgules en trois phrases courtes parce qu'un guide anglais dit 25 mots maximum. Les chroniques du Grenier ont des phrases de 30 à 50 mots et elles se lisent.",
          "Ajouter une transition (« De plus, », « Par ailleurs, ») entre deux paragraphes qui s'enchaînent déjà."
        ]},
        { t: 'h', v: 'Ce qui se corrige, et se note' },
        { t: 'list', v: [
          "L'accord manqué (« les équipes passe »), la coquille (« comptabilité des valeurs » pour compatibilité, dans un reportage de 2024), le mot manquant.",
          "Le chiffre qui contredit le tableau ou la source.",
          "L'affirmation qui a perdu son « peut » ou son « semble » au passage.",
          "La liste de noms sans verbe : chaque item reçoit un verbe ou revient en phrase.",
          "La clôture-bilan : remplacée par la dernière chose vraie du texte."
        ]},
        { t: 'ge', label: 'Note de révision remise à l’auteur',
          good: '« Gardé : « lettre de présentation » (usage du milieu ; l’Office dit « lettre d’accompagnement », à vous de voir si le texte va à un ministère). Corrigé : « comptabilité des valeurs » → compatibilité, ligne 41. Coupé : la clôture « Dans un paysage... », remplacée par votre phrase de la ligne 38. À fournir : le chiffre du mandat, paragraphe 3. »',
          bad: '« J’ai amélioré la fluidité, corrigé quelques anglicismes et modernisé le ton. Le texte est maintenant plus percutant et professionnel. »',
          why: "La première note dit ce qui a été gardé et pourquoi, ce qui a été corrigé et où, ce qui a été coupé et par quoi, et ce qui manque. L'auteur peut refuser chaque décision. La seconde ne dit rien de vérifiable et « plus percutant et professionnel » est exactement le vocabulaire qu'on venait de couper." },
        { t: 'rubric',
          j: "Corrige vers le français de France ou vers l'Office sans savoir lequel. Supprime le point médian. Signale l'espace avant le deux-points comme une erreur. Ajoute des transitions.",
          c: "Connaît le lexique québécois et le point médian. Sait quand l'usage bat l'Office et le dit. Remet une note de révision avec gardé, corrigé, coupé, à fournir.",
          s: "Écrit la chronique, le communiqué et le copy dans le registre attendu sans modèle sous les yeux. Reconnaît un texte généré en français en une page et nomme ce que ça coûte au lecteur. Adapte un copy anglais en le réécrivant, pas en le traduisant, et sait quel article de la Charte s'applique à la pièce." },
        { t: 'drill', v: [
          "Prenez un texte français révisé par un correcteur automatique. Listez chaque « correction » qui était en fait le registre. Remettez-les.",
          "Écrivez une note de révision de 80 mots pour un texte que vous avez retouché cette semaine : gardé, corrigé, coupé, à fournir.",
          "Trouvez dans une chronique du Grenier une phrase de plus de 40 mots. Décidez si elle se lit. Si oui, ne la touchez pas et dites pourquoi en une ligne."
        ]}
      ]
    }
  ],

  artifact: {
    title: 'Portfolio français en trois pièces',
    intro: "Trois textes dans trois registres, pour une même organisation québécoise réelle ou plausible (une agence, une PME, un OBNL). C'est la preuve qu'un employeur du milieu com-marketing demande : peut-on écrire ici, dans les trois formats que le Grenier publie chaque jour ?",
    steps: [
      { s: 'Choisissez l’organisation et faites le registre source', guide: "Une organisation, un fait récent la concernant (mandat, nomination, lancement, chiffre), une personne nommée avec son titre exact. Remplissez les quatre colonnes (fait, affirmation, voix, structure) avant d'écrire un mot. Ce qui manque va entre crochets et y reste." },
      { s: 'Écrivez le communiqué de nomination ou de mandat (180 à 220 mots)', guide: "La grammaire du tableau de la section 3 : titre à verbe d'annonce, première phrase qui, quoi, depuis quand, où ; parcours avec deux mandats nommés ; citation du dirigeant ; citation de la personne avec un verbe (faire rayonner, bonifier) ; chute chiffrée. Point médian partout où il faut. Une triade permise." },
      { s: 'Écrivez la chronique (550 à 700 mots)', guide: "Prise de position sur un enjeu du milieu, en cinq temps : constat chiffré, battement, preuve par argument (au moins deux chiffres et une anecdote), bascule nommée, chute d'une ligne. Un anglicisme choisi, entre guillemets. Aucun « De plus », aucun résumé final. Lisez-la à voix haute une fois." },
      { s: 'Écrivez le copy marketing (une page produit ou un courriel, 120 à 200 mots)', guide: "Objet ou titre de moins de 50 caractères avec chiffre et date. Tutoiement ou vouvoiement décidé par écrit avant de commencer. Prix en dollars canadiens, taxes dites. Zéro mot de la liste « que le lecteur saute » sans complément. Notez quel article de la Charte s'applique à la pièce et vérifiez-le sur le site de l'Office." },
      { s: 'Passez les trois pièces au test de la recruteuse', guide: "Pour chaque pièce : y a-t-il un élément sur l'organisation qui ne figure pas sur sa page d'accueil ? un chiffre ? une situation racontée plutôt qu'affirmée ? le même niveau de finition que les deux autres ? Corrigez ce qui échoue. Comptez les ouvertures participiales et les listes sans verbe ; le total doit être sous trois." },
      { s: 'Remettez la note de révision', guide: "80 à 120 mots par pièce : gardé (avec le pourquoi, y compris chaque choix usage-contre-Office), corrigé (avec la ligne), coupé (avec ce qui remplace), à fournir (les crochets restants). C'est la pièce que l'employeur lit en premier, parce qu'elle montre comment vous décidez." }
    ]
  }
}];
