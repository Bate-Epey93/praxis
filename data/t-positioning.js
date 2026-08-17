// Tracks 4–6 · Positioning, messaging, craft
export default [

/* ══════════════════ 4 ══════════════════ */
{
  id: 4, phase: 'Strategy craft', color: '--vi', roles: ['cs', 'gtm', 'co'],
  title: 'Positioning, Category & Narrative',
  sub: 'The decision made before any word is written',
  time: 'Study 2.5h · Artifact 4–5h',
  prereq: 'Tracks 1–3',
  feeds: 'Feeds tracks 5, 9, 12, 17',
  sources: 'Dunford · Sinek · Miller · Ries & Trout · category design practice',
  sections: [
    {
      id: 't4-not', title: 'Positioning is not messaging',
      blocks: [
        { t: 'p', v: 'Positioning is what your product **is** in the buyer\'s mind — the mental shelf it sits on, and therefore what it gets compared to and what it is allowed to cost. Messaging is what you **say** once that decision is made. Confusing the two produces beautiful copy that sells the wrong thing.' },
        { t: 'plain', v: 'Positioning is choosing which aisle of the supermarket you are in. Messaging is the label on the jar. A brilliant label in the wrong aisle still loses, because the shopper is comparing you to the wrong neighbours and pricing you against them.' },
        { t: 'h', v: 'Three fast diagnostics' },
        { t: 'list', v: [
          '**Swap test.** Put a competitor\'s name in your homepage copy. Still true? Your positioning is undifferentiated.',
          '**Comparison test.** Ask five customers what they nearly bought instead. If the answers are wildly different, your category framing is unstable.',
          '**Price test.** If buyers keep comparing your price to something cheaper than you intend to be, you are positioned into the wrong reference set. That is a positioning failure, not a discount problem.'
        ]},
        { t: 'case', title: 'Superhuman', v: 'Alternatives: Gmail plus extensions. Unique attributes: 100ms interactions, keyboard-first, no mouse. Value: get through email twice as fast. Best-fit: people whose day is 3+ hours of email. Category: not "email client" (unwinnable vs Google) but "the fastest email experience." Category choice sidesteps a comparison they could never win and justifies a $30/month price in a free category.' },
        { t: 'key', v: 'Positioning is a *choice about competitive context*. The strongest positioning move available to a small player is usually not "better claim" — it is "different comparison set."' }
      ]
    },
    {
      id: 't4-canvas', title: 'Dunford\'s five-step canvas',
      blocks: [
        { t: 'p', v: 'April Dunford\'s method works because it starts at the end of the buyer\'s reasoning, not the beginning of yours. Do the steps in order; skipping to "category" is the classic error.' },
        { t: 'steps', v: [
          { n: 1, name: 'Competitive alternatives', body: 'What would they do if you did not exist? Include the real answers: a spreadsheet, an intern, two agencies, nothing at all. Not just named competitors.' },
          { n: 2, name: 'Unique attributes', body: 'What do you have that the alternatives do not? Features, data, architecture, distribution, expertise. Must be verifiable, not adjectival — "better support" is not an attribute; "a named migration engineer for every account" is.' },
          { n: 3, name: 'Value enabled', body: 'Translate each attribute into what it lets the customer do or avoid. Attribute → capability → outcome. This is where features earn their keep.' },
          { n: 4, name: 'Best-fit customers', body: 'Who cares *most* about that value? Characteristics that predict caring — not your total addressable market. Write the segment so specifically it excludes people.' },
          { n: 5, name: 'Market category', body: 'The frame that makes your value obvious and your strengths inevitable. Chosen last, because it depends on 1–4.' }
        ]},
        { t: 'formula', label: 'Positioning statement (fill it, then throw the sentence away and keep the thinking)',
          expr: 'For [best-fit segment] who [trigger/job], [product] is the [category] that [unique value], because [attribute/proof]. Unlike [alternative], we [difference].',
          example: 'For finance leads at 50–500 person companies who close manually, Close is the month-end automation layer that cuts close from 6 days to 2, because it reconciles from source systems instead of exports. Unlike spreadsheet templates, nothing breaks when someone renames a column.' },
        { t: 'warn', v: 'Category choice has a cost. Naming a new category means you now have to fund education (stage-1 economics). Joining an existing category means you inherit its comparison criteria — including the ones you lose on. Say the trade-off out loud in the brief; that is the senior signal.' },
        { t: 'prompt', label: 'Positioning option generator', v: `Given:
Competitive alternatives (including "do nothing"): [LIST]
Unique attributes with evidence: [LIST]
Value enabled: [LIST]
Best-fit customer signals: [LIST]

Generate 10 positioning statements in the form:
"For [segment] who [trigger], [product] is the [category] that [value], because [proof]."

Vary the MARKET CATEGORY deliberately across the ten — at least four distinct category frames. For each, state: what we would then be compared to, what evaluation criteria we inherit, what we win on, what we lose on, and the education cost.
Then rank the top 3 and name the one you would not recommend and why.` }
      ]
    },
    {
      id: 't4-why', title: 'Golden Circle, StoryBrand and the narrative spine',
      blocks: [
        { t: 'h', v: 'Sinek: why → how → what' },
        { t: 'p', v: 'Communicate from the inside out. **Why** is the belief or cause. **How** is the differentiating process. **What** is the product — least interesting, most talked about. In stage-5 markets the Why *is* the differentiation, because every What has been claimed already.' },
        { t: 'case', title: 'Patagonia', v: 'Why: "We\'re in business to save our home planet." How: repair programme, recycled materials, activism, "don\'t buy this jacket." What: outdoor clothing — almost incidental. The Why makes premium pricing feel like membership rather than markup.' },
        { t: 'h', v: 'StoryBrand: the customer is the hero' },
        { t: 'p', v: 'Donald Miller\'s seven beats, and the one rule that matters: **you are the guide, not the hero.** Brands that cast themselves as the hero produce copy about their own journey, which no buyer has ever cared about.' },
        { t: 'steps', v: [
          { n: 1, name: 'Character with a want', body: 'One clear desire, stated in their words.' },
          { n: 2, name: 'Problem', body: 'External (the practical obstacle), internal (how it makes them feel), philosophical (why it is wrong that this is so).' },
          { n: 3, name: 'Guide', body: 'You. Show empathy plus authority — "we get it" plus "we\'ve done it 340 times."' },
          { n: 4, name: 'Plan', body: '3–4 named steps. Plans reduce anxiety more than promises do.' },
          { n: 5, name: 'Call to action', body: 'One direct ask, plus one transitional ask for the not-ready.' },
          { n: 6, name: 'Avoid failure', body: 'What the status quo costs them. Loss aversion, honestly used.' },
          { n: 7, name: 'Achieve success', body: 'The specific, visualisable better state.' }
        ]},
        { t: 'h', v: 'The four-beat narrative spine (use this for brand narratives)' },
        { t: 'list', v: [
          '**Belief** — the worldview you hold that others don\'t. "Reporting should be a byproduct of work, not a project."',
          '**Tension** — what the world does instead, and why that\'s broken now. Name the enemy: a practice, not a company.',
          '**Mechanism** — how you resolve the tension. This must be real and specific, or the narrative collapses on contact.',
          '**Identity** — who the buyer becomes by agreeing. The invitation.'
        ]},
        { t: 'warn', v: 'A narrative that describes capability the company cannot deliver is a liability, not a story. Check the mechanism paragraph against the product roadmap before it ships. Sales will quote it in every deal.' }
      ]
    },
    {
      id: 't4-diff', title: 'Differentiation, only-ness and category design',
      blocks: [
        { t: 'formula', label: 'Only-ness statement (Marty Neumeier)',
          expr: 'Our [offering] is the ONLY [category] that [benefit] for [audience] in [geography/context] during [era/trend], because [proof].',
          example: 'If you cannot complete it without lying, you have not found your differentiation — you have found your marketing budget requirement.' },
        { t: 'h', v: 'Points of parity vs. points of difference' },
        { t: 'p', v: 'Parity claims get you into the consideration set; difference claims win it. The mistake is spending headline real estate on parity ("secure", "reliable", "integrates with your stack") because it feels safe. Parity belongs in a checklist section, low on the page, stated once.' },
        { t: 'table', head: ['Type', 'Where it goes', 'Example'],
          rows: [
            ['**Point of parity**', 'Feature table, FAQ, trust bar', 'SSO, SOC 2, exports, mobile app'],
            ['**Point of difference**', 'Hero, subhead, first proof block', 'The only tool that reconciles from source systems'],
            ['**Point of irrelevance**', 'Delete', 'Anything the buyer has never asked about']
          ]},
        { t: 'h', v: 'Category design — when to attempt it' },
        { t: 'p', v: 'Creating a category means teaching the market a new frame, then owning the words for it. It is expensive and slow, and it is the highest-return move in marketing when it works.' },
        { t: 'list', v: [
          '**Attempt it when:** existing categories force a comparison you lose, your mechanism is genuinely novel, and you can fund 12–24 months of education.',
          '**Don\'t when:** buyers already search for the category in volume and you would be abandoning demand you can capture today.',
          '**How it shows up in the work:** you name the problem before naming the solution; you publish the point of view (report, book, benchmark); you get third parties using your term; you rank for the term you invented.'
        ]},
        { t: 'case', title: 'Drift and "conversational marketing"', v: 'Chat software was a commodity feature. By naming and evangelising "conversational marketing" — book, podcast, conference, relentless term repetition — the category became the product\'s moat, and the comparison set moved from "live chat widgets" to "the way modern buyers want to talk to companies."' },
        { t: 'key', v: 'The tell for real category design: the market starts using your words in sentences that do not mention your brand.' }
      ]
    },
    {
      id: 't4-arch', title: 'Repositioning, brand architecture and naming',
      blocks: [
        { t: 'h', v: 'Repositioning without losing the base' },
        { t: 'list', v: [
          'Migrate, don\'t teleport: bridge copy that explains the shift in the old frame ("the reporting tool you know, now the close automation layer").',
          'Keep the search equity: retain URLs and pages that rank for the old category while you build the new ones.',
          'Sequence the internal rollout first — sales will keep selling the old story for months if you don\'t re-arm them with battle cards and a new demo narrative.',
          'Expect a dip. Repositioning depresses conversion for 4–8 weeks while message-market fit re-forms. Say so before launch so nobody panics and reverts on week three.'
        ]},
        { t: 'h', v: 'Brand architecture, briefly' },
        { t: 'table', head: ['Model', 'Structure', 'When it fits'],
          rows: [
            ['**Branded house**', 'One master brand, descriptive sub-names (Google Docs)', 'Shared buyer, shared credibility, efficiency of spend'],
            ['**House of brands**', 'Independent brands (P&G)', 'Different buyers, different price tiers, risk isolation'],
            ['**Endorsed**', 'Sub-brand + "by Parent"', 'New category entry that needs borrowed trust'],
            ['**Sub-brand**', 'Parent-led with distinct product identity', 'Adjacent audience, shared halo']
          ]},
        { t: 'h', v: 'Naming: the four filters' },
        { t: 'list', v: [
          '**Distinctive** — searchable, not a generic dictionary word you will never rank for.',
          '**Sayable** — survives a phone call, a podcast, and a second language.',
          '**Clear** at the category level, either in the name or in the mandatory descriptor next to it.',
          '**Clearable** — domain, trademark class, social handles, no offensive collision in your major markets.'
        ]},
        { t: 'rubric',
          j: 'Fills the canvas with generic attributes. Category chosen first. Narrative reads like an About page.',
          c: 'Canvas is specific and honest, alternatives include "do nothing", narrative follows belief→tension→mechanism→identity.',
          s: 'Names the trade-off of the category choice, plans the repositioning migration and internal sequencing, and validates white space with search and review data rather than a 2×2 drawn from intuition.' }
      ]
    }
  ],
  artifact: {
    title: 'Positioning canvas + brand narrative + white-space map',
    intro: 'Use a real company. Best if it is one you want to work for — this artefact doubles as an interview asset.',
    steps: [
      { s: 'Complete all five canvas steps with evidence', guide: 'Competitive alternatives must include at least one non-software answer and "do nothing". Attributes must be verifiable — cite the page, doc or review that proves each.' },
      { s: 'Write three category-frame options with inherited criteria', guide: 'For each: comparison set, criteria inherited, what you win, what you lose, education cost, and the recommendation. This table is what separates strategist from writer.' },
      { s: 'Write the Golden Circle (why / how / what) in 1–3 sentences each', guide: 'Test: does the Why make you feel something, does the How differentiate, does the What feel boring by comparison? If the What is the most interesting layer, the positioning is weak.' },
      { s: 'Write the 250-word brand narrative', guide: 'Belief → tension → mechanism → identity. Name the enemy as a practice, never a competitor. Check the mechanism against what the product actually does today.' },
      { s: 'Build the white-space map from data, not intuition', guide: 'Two axes that buyers actually use as evaluation criteria (pull them from review sites and G2 category pages). Plot 6–8 competitors using quoted evidence. Your position must be defensible, not merely empty.' },
      { s: 'Write the only-ness statement and the parity/difference/irrelevance split', guide: 'Then audit the live homepage: how much hero real estate currently goes to parity claims? Quantify it.' }
    ]
  }
},

/* ══════════════════ 5 ══════════════════ */
{
  id: 5, phase: 'Strategy craft', color: '--vi', roles: ['cs', 'gtm', 'co', 'svc'],
  title: 'Messaging Architecture & Voice',
  sub: 'One source of truth that governs every touchpoint',
  time: 'Study 2.5h · Artifact 5h',
  prereq: 'Track 4',
  feeds: 'Feeds tracks 6, 9, 11, 12, 15, 16',
  sources: 'Messaging-house practice · Nielsen Norman tone research',
  sections: [
    {
      id: 't5-house', title: 'The messaging house',
      blocks: [
        { t: 'p', v: 'A messaging architecture is the document that stops twelve people from inventing twelve companies. It is also the artefact most often *missing* at companies with 30+ people, which makes building one a reliable way to become indispensable.' },
        { t: 'steps', v: [
          { n: 1, name: 'Positioning statement', body: 'From track 4. Internal only — never shipped as copy.' },
          { n: 2, name: 'Mission / why', body: 'One sentence. Not "be the leading provider of…".' },
          { n: 3, name: 'Tagline', body: 'Under 8 words. External. Earns attention, not comprehension.' },
          { n: 4, name: 'Elevator pitch', body: '50–70 words. Passes the swap test. Must survive being said out loud by a nervous sales rep.' },
          { n: 5, name: 'Three message pillars', body: 'Each with: claim, mechanism (why it is true), 2 proof points, the features that ladder up to it, and the objection it pre-empts.' },
          { n: 6, name: 'Objection library', body: 'Verbatim objections with rebuttals and the proof asset for each.' },
          { n: 7, name: 'CTA ladder', body: 'The ask for each awareness level, from "read the teardown" to "start the trial" to "talk to sales".' },
          { n: 8, name: 'Do-not-say list', body: 'Banned claims, banned words, regulated phrases, competitor references. The most-used page in the whole document.' }
        ]},
        { t: 'key', v: 'Three pillars, not five. Miller\'s law says working memory tops out around four chunks; sales reps under pressure remember three. A five-pillar architecture is an unranked list pretending to be a strategy.' },
        { t: 'formula', label: 'Pillar block template', expr: 'Claim → Mechanism → Proof ×2 → Features that ladder up → Objection pre-empted',
          example: 'Claim: "Close in 2 days, not 6." Mechanism: reconciles from source systems, not exports. Proof: median across 340 teams; named customer quote. Features: direct connectors, change detection, audit log. Objection pre-empted: "our data is too messy."' }
      ]
    },
    {
      id: 't5-vp', title: 'Value propositions and the proof stack',
      blocks: [
        { t: 'p', v: 'A value proposition answers: why should this buyer choose this, over that, for this reason, and believe it? Four parts — and the fourth is where most fail.' },
        { t: 'table', head: ['Component', 'Question answered', 'Failure mode'],
          rows: [
            ['**Relevance**', 'Is this for me, now?', 'Written for the market instead of the segment'],
            ['**Quantified value**', 'What exactly do I get?', 'Adjectives instead of numbers'],
            ['**Differentiation**', 'Why you and not them?', 'Parity claims in the hero'],
            ['**Credibility**', 'Why should I believe it?', 'Claim with no mechanism and no evidence']
          ]},
        { t: 'h', v: 'The proof stack, strongest to weakest' },
        { t: 'list', v: [
          '**Demonstration** — the thing working, on screen, on their data. Beats everything.',
          '**Original data** — your benchmark, your study, your median across 340 accounts.',
          '**Named customer results** — logo + role + number + quote. Unnamed testimonials are worth a fraction.',
          '**Third-party validation** — G2 rank, certification, audit, review volume with rating.',
          '**Mechanism explanation** — why it must work, plausibly, in the reader\'s terms.',
          '**Volume claims** — "50,000 users." Weak alone; strong when the users resemble the reader.',
          '**Awards and media logos** — atmospheric. Nice; rarely decisive.'
        ]},
        { t: 'ge', label: 'Claim with and without a stack',
          good: '"Cuts close from 6 days to 2 — median across 340 finance teams. Watch a live 90-second reconciliation on your own export."',
          bad: '"Dramatically faster financial close, trusted by industry leaders."',
          why: 'The first offers a number, a sample size, and a demonstration. The second offers two adjectives and borrowed authority with no name attached.' },
        { t: 'warn', v: 'Every quantified claim needs a defensible source you could produce in a legal review. Keep a claims register: claim, source, date, owner, expiry. This single spreadsheet has saved more campaigns than any creative brief.' }
      ]
    },
    {
      id: 't5-objections', title: 'The objection library',
      blocks: [
        { t: 'p', v: 'Objection handling is where copywriting and customer service converge. Same skill, different surface: surface the objection early, in the buyer\'s words, and answer with a mechanism rather than reassurance.' },
        { t: 'formula', label: 'Rebuttal structure', expr: 'Acknowledge → reframe → evidence → next step',
          example: '"Six weeks of setup is a real cost. That\'s why we do the migration — a named engineer, your last 24 months, verified against your old system before you cancel anything. Here\'s the 40-minute onboarding recording from a team your size."' },
        { t: 'table', head: ['Objection class', 'What it really means', 'Move'],
          rows: [
            ['Price', 'Value is not yet established, or the reference set is wrong', 'Reframe against cost of inaction and the true alternative (agency, headcount, spreadsheet risk)'],
            ['Trust', 'I don\'t believe the claim', 'Demonstration + named proof + specific numbers'],
            ['Risk / anxiety', 'If this fails it\'s on me', 'Risk reversal with a mechanism: guarantee, parallel run, named owner, exit path'],
            ['Effort / habit', 'Switching costs me more than staying', 'Reduce the switching cost visibly: importers, done-for-you, keep-old-tool-30-days'],
            ['Timing', 'Not a priority this quarter', 'Attach to their calendar event (renewal, board meeting, close, season) or offer a transitional ask'],
            ['Authority', 'I can\'t sign this alone', 'Give them the forwardable asset: one-pager, ROI sheet, security doc']
          ]},
        { t: 'key', v: 'Rank objections by frequency × deal impact and answer the top three **above the fold or in the first two emails**. Objections you bury do not disappear; they get answered by the buyer\'s imagination, always unfavourably.' }
      ]
    },
    {
      id: 't5-voice', title: 'Voice and tone as a system',
      blocks: [
        { t: 'p', v: 'Voice is constant identity. Tone is contextual expression. A brand has one voice and many tones — celebratory on a milestone, plain and fast in an outage, warm and unhurried in a refund conversation.' },
        { t: 'h', v: 'Four dimensions (Nielsen Norman)' },
        { t: 'p', v: 'Place your brand on each axis, then write example sentences for each position. Axes without examples are decoration.' },
        { t: 'list', v: [
          '**Funny ←→ serious**',
          '**Formal ←→ casual**',
          '**Respectful ←→ irreverent**',
          '**Enthusiastic ←→ matter-of-fact**'
        ]},
        { t: 'h', v: 'The three-trait format that teams actually use' },
        { t: 'table', head: ['Trait', 'We do', 'We don\'t', 'Sounds like'],
          rows: [
            ['**Direct**', 'Lead with the answer; short first sentences', 'Bury the point in context; hedge with "might"', '"Your close takes 6 days. Here\'s the 2-day version."'],
            ['**Evidence-led**', 'Attach a number and its source to every claim', 'Use superlatives without proof', '"Median 2.1 days across 340 teams."'],
            ['**Human, not chummy**', 'Contractions, plain words, real acknowledgement', 'Slang, exclamation stacks, fake enthusiasm', '"That\'s our bug, not your setup. Fix is live tomorrow."']
          ]},
        { t: 'h', v: 'Tone by context matrix' },
        { t: 'table', head: ['Context', 'Reader\'s emotional state', 'Tone shift'],
          rows: [
            ['Marketing hero', 'Curious, skeptical', 'Confident, concrete, energised'],
            ['Onboarding', 'Uncertain, wants competence', 'Encouraging, step-by-step, no jargon'],
            ['Error / failed payment', 'Frustrated, possibly embarrassed', 'Plain, blameless, next-step-first'],
            ['Outage', 'Anxious, needs facts', 'Short sentences, timestamps, no spin, no apology inflation'],
            ['Support refusal', 'Disappointed, may escalate', 'Warm, firm, explains the why, offers the alternative'],
            ['Win / milestone', 'Pleased', 'Celebratory but attributes the win to them']
          ]},
        { t: 'key', v: 'A voice guide is only real if it contains **rejected examples**. "We don\'t say X, we say Y" teaches in one line what three paragraphs of adjectives cannot.' }
      ]
    },
    {
      id: 't5-channel', title: 'Channel adaptation and message match',
      blocks: [
        { t: 'p', v: 'Same pillar, different execution. Adaptation is not reformatting — the constraint of the channel changes which part of the message survives.' },
        { t: 'table', head: ['Surface', 'Attention budget', 'What must be present'],
          rows: [
            ['Homepage hero', '3–5 seconds', 'Category clarity + primary differentiator + one proof + one CTA'],
            ['Paid social', '1.5 seconds', 'Pattern interrupt or named struggle; no brand-first opening'],
            ['Search ad', 'Read as a list', 'Exact query language + differentiator + concrete CTA'],
            ['Cold email', '2 lines in preview', 'Relevance signal, one specific claim, one small ask — under 90 words'],
            ['Lifecycle email', 'Already interested', 'One idea, one CTA, and a reason this arrived today'],
            ['Sales one-pager', 'Forwarded to a stranger', 'Problem / solution / result / proof, readable in 30 seconds without you present'],
            ['App / UI microcopy', 'Task-focused, impatient', 'Verb-led clarity, no marketing voice, error recovery path'],
            ['Support macro', 'Emotional, waiting', 'Acknowledgement, answer, next step, no jargon']
          ]},
        { t: 'formula', label: 'Message match test', expr: 'Ad promise ⟷ landing page headline: same noun, same benefit, same specificity',
          example: 'Ad: "Best mattress for back pain 2026" → page must contain "back pain" in the H1 or first subhead. Mismatch is one of the most expensive and most common conversion failures because it is invisible in aggregate reporting.' },
        { t: 'h', v: 'Governance: making the architecture stick' },
        { t: 'list', v: [
          'Co-create the objection library with sales and support — they own the raw material, so they defend the output.',
          'Put it where work happens (Notion/Confluence page linked in every brief template), not in a PDF in a drive folder.',
          'Version it with dates and a changelog. Stale messaging docs get ignored, and then rewritten from scratch by someone junior.',
          'Ship templates, not rules: a brief template that pre-fills pillar language is adopted; a style bible is not.',
          'Quarterly review with sales win/loss data. Retire pillars that stopped winning deals.'
        ]},
        { t: 'h', v: 'The AI governance brief' },
        { t: 'p', v: 'Your messaging architecture is the constitution for AI-assisted output. Turn it into machine-usable rules: required context blocks in every prompt, banned phrases, mandatory proof-point injection, and the human quality gate. This deliverable is increasingly requested and rarely well made — see track 15.' },
        { t: 'rubric',
          j: 'Generic hierarchy, vague voice adjectives, channel versions are the same paragraph resized.',
          c: 'Specific pillars with real proof, voice guide with do/don\'t examples, channel adaptations respect constraints.',
          s: 'Includes claims register, objection library built from verbatim data, tone-by-context matrix, adoption plan with named stakeholders, and an AI governance brief that a non-writer could follow.' }
      ]
    }
  ],
  artifact: {
    title: 'Complete messaging matrix + voice guide + AI governance brief',
    steps: [
      { s: 'Build the full messaging house (8 layers)', guide: 'Three pillars only. Each with claim, mechanism, two proofs, laddered features, objection pre-empted. Include the do-not-say list.' },
      { s: 'Write the objection library from verbatim sources', guide: 'Minimum 8 objections in the customer\'s words, ranked by frequency × deal impact, each with acknowledge/reframe/evidence/next-step and the proof asset needed.' },
      { s: 'Create the voice guide: 3 traits × do/don\'t/sounds-like + tone matrix', guide: 'Six contexts minimum, including an outage and a support refusal. Add 8 rejected example sentences with the reason each was rejected.' },
      { s: 'Adapt one pillar across 6 surfaces', guide: 'Homepage hero, paid social, search ad, cold email, lifecycle email, support macro. Respect each attention budget and note the constraint you wrote against.' },
      { s: 'Build the claims register', guide: 'Claim | source | date | owner | expiry. Include at least one claim you would refuse to ship and why.' },
      { s: 'Write the 1-page AI governance brief', guide: 'Required prompt context, banned phrases, proof-injection rule, quality gates, and an example prompt template that encodes the architecture.' }
    ]
  }
},

/* ══════════════════ 6 ══════════════════ */
{
  id: 6, phase: 'Strategy craft', color: '--vi', roles: ['co', 'cs', 'cro', 'svc'],
  title: 'Copywriting Craft',
  sub: 'Precision, momentum, logic — the editorial operating system',
  time: 'Study 3h · Artifact 5h',
  prereq: 'Can run parallel to tracks 1–2',
  feeds: 'Feeds every track after it',
  sources: 'Strunk & White · Sugarman · Schwartz · Caples · Bennett',
  sections: [
    {
      id: 't6-precision', title: 'Precision: the sentence-level operating rules',
      blocks: [
        { t: 'p', v: 'Most copy fails from lack of discipline, not lack of creativity. These rules are also your instrument for evaluating AI output at speed — which is the skill that makes you several times more productive than someone writing from scratch.' },
        { t: 'list', v: [
          '**Omit needless words.** Every word must carry weight. If a paragraph survives a 30% cut, those words were rent-free.',
          '**Active voice.** "The page was redesigned by the team" → "The team redesigned the page." AI defaults to passive; spotting it is editorial skill number one.',
          '**Put the emphatic word last.** Stress falls at the end of a sentence. Reorder to land on the word that matters.',
          '**Parallel construction for parallel ideas.** "Write clearly, edit ruthlessly, test constantly" — not "and be testing constantly."',
          '**Nouns and verbs over adjectives and adverbs.** "She sprinted to the warehouse" beats "she quickly ran to the very large building."',
          '**One idea per sentence.** Two ideas need two sentences, or a colon that earns itself.',
          '**Concrete over abstract.** "Six days" beats "a long time." "340 finance teams" beats "many customers."'
        ]},
        { t: 'warn', v: 'These are defaults, not commandments. Brand voice sometimes calls for a long, layered sentence; passive voice is correct when the actor is genuinely unknown or irrelevant ("your card was declined" is kinder than naming the bank). Senior writers break the rules on purpose and can say which rule they broke and why.' },
        { t: 'ge', label: 'The 30% cut',
          good: '"Your close takes six days. Teams your size do it in two."',
          bad: '"It is important to note that many organisations are currently experiencing significant delays in their month-end close processes, often taking as long as six days to complete."',
          why: '10 words vs 34, same information, and the short version puts "two" in the emphatic final position where it lands.' },
        { t: 'drill', v: [
          'Cut a paragraph you wrote this week by 30%. Log which words died — usually adverbs, throat-clearing, and restatement.',
          'Find every passive construction in one marketing email. Rewrite active. Note where passive was actually better.',
          'Rewrite one sentence three times so a different word lands last each time. Feel the emphasis move.'
        ]}
      ]
    },
    {
      id: 't6-momentum', title: 'Momentum: the slippery slide',
      blocks: [
        { t: 'p', v: 'Sugarman\'s rule: every element of copy has exactly one job — get the reader to the next sentence. The headline sells the subhead, the subhead sells the first line, the first line sells the second.' },
        { t: 'list', v: [
          '**Short first sentence.** "It\'s you." "This will hurt." Three words is a fine opening. Long openers are where readers leave.',
          '**Seeds of curiosity.** End sections with open loops: "The number that changed everything wasn\'t the price." Zeigarnik does the rest.',
          '**Rhythm through variance.** Short, short, long. Then a fragment. Monotone sentence length is the loudest AI tell there is.',
          '**Transitions that carry momentum.** "Which brings a problem." "Here\'s the part nobody mentions."',
          '**Read it aloud.** Where you stumble, the reader stumbles. Where you run out of breath, add a full stop.'
        ]},
        { t: 'formula', label: 'Slide length by awareness', expr: 'Most aware = short slide (headline → offer). Unaware = long slide (story → problem → mechanism → proof → offer).',
          example: 'A retargeting ad needs 12 words. A cold-traffic advertorial may need 1,800 and still convert better than 300 — length is a function of awareness, never of taste.' },
        { t: 'key', v: 'Diagnostic question for any draft: **where does the reader stop?** Read it and mark the exact line where your own attention drifts. That line, not the headline, is usually the conversion problem.' }
      ]
    },
    {
      id: 't6-frameworks', title: 'Structural frameworks — and when each fits',
      blocks: [
        { t: 'cards', v: [
          { h: 'AIDA — attention, interest, desire, action', b: '**When:** default for landing and product pages; complete persuasion arc.\n\nAttention: stop the scroll. Interest: explain the value. Desire: proof, social proof, emotional payoff. Action: one clear ask.\n\nWeakness: easy to write mechanically, and "interest" is where most drafts go soft.' },
          { h: 'PAS — problem, agitate, solution', b: '**When:** pain-driven purchases and problem-aware traffic. The highest-converting short-form structure in direct response.\n\nProblem: name it in their words. Agitate: the second-order cost they haven\'t articulated. Solution: mechanism plus proof.\n\nWeakness: agitation without dignity turns readers off permanently. See track 3.' },
          { h: 'BAB — before, after, bridge', b: '**When:** transformation narratives, emails, testimonial-led pages.\n\nBefore: the current state in sensory detail. After: the specific better state. Bridge: how, and why it is credible.\n\nStrength: fast to write, easy to keep honest because the "after" must be real.' },
          { h: 'PASTOR — problem, amplify, story, transformation, offer, response', b: '**When:** long-form sales pages and webinars where a case study carries the proof.\n\nStory and testimony do the heavy lifting; the offer arrives late and specified precisely (what, what it costs, what happens next, what the guarantee is).' },
          { h: '4 Ps — promise, picture, proof, push', b: '**When:** ads and short landing pages. Compact and complete: what you get, what it looks like, why believe it, why now.' },
          { h: 'FAB — feature, advantage, benefit', b: '**When:** product marketing collateral, feature launches, sales sheets. Keeps engineering-sourced features from shipping untranslated. Always end at benefit; never publish the F alone.' },
          { h: '4 Us — headline test (useful, urgent, ultra-specific, unique)', b: '**When:** evaluating any headline or subject line. Score each 1–4. A headline scoring under 10 rarely earns its slot; you rarely need all four maxed.' }
        ]},
        { t: 'key', v: 'Frameworks are scaffolding, not architecture. Pick the structure from the awareness level and the emotional state, then let the structure disappear into the writing. If a reader can name your framework, it is showing.' }
      ]
    },
    {
      id: 't6-headlines', title: 'Headline and subject-line systems',
      blocks: [
        { t: 'p', v: 'Caples\' finding still holds: changing the headline can move response several-fold with the same body copy. Treat headlines as a portfolio, not a lottery — generate twenty, kill eighteen.' },
        { t: 'h', v: 'Formula bank (write 3 variants of each, then choose)' },
        { t: 'list', v: [
          '**Struggling moment:** "The invoice was right. The spreadsheet was wrong. You found out in the meeting."',
          '**Specific promise + timeframe:** "Close the month in two days. Starting this month."',
          '**Social proof + curiosity:** "340 finance teams stopped exporting to Excel. Here\'s what they do instead."',
          '**Named enemy:** "Your reporting isn\'t slow. Your exports are."',
          '**Question the reader is already asking:** "Why does close take six days when the data is already there?"',
          '**Identity:** "For operators who\'d rather read the data than the deck."',
          '**Contrarian claim + proof:** "More dashboards made your reporting worse. We measured it."',
          '**How-to with constraint:** "How to cut close to two days without changing your ERP."',
          '**Number-led list:** "The 6 places month-end quietly loses a day."',
          '**Before/after:** "From six days of reconciliation to a Tuesday afternoon."'
        ]},
        { t: 'h', v: 'Subject lines: the rules that differ from headlines' },
        { t: 'list', v: [
          'Front-load: mobile truncates around 30–40 characters. The first three words carry the open.',
          'Curiosity must be honest — clickbait costs you the next twenty opens and trains the algorithm against you.',
          'Preview text is a second headline, not a repeat. Use it to complete or complicate the subject.',
          'Personalisation beyond first name (behaviour, plan, last action) outperforms name tokens by a wide margin.',
          'Lowercase, no-punctuation "personal" styling works until your whole industry does it. Then it signals bulk mail.'
        ]},
        { t: 'formula', label: 'Diversity requirement for testing', expr: 'n variants must use n distinct persuasion angles',
          example: 'Five rewordings of the same idea produce five identical results and one wasted test cycle. Force the angles: pain, proof, identity, mechanism, price. Now the test teaches you something regardless of which wins.' },
        { t: 'h', v: 'CTA craft' },
        { t: 'list', v: [
          '**Verb + value, not verb alone.** "Get my close checklist" beats "Submit" and usually beats "Download".',
          '**First person often wins** ("Start my trial") because it reads as the user\'s own thought.',
          '**Reduce friction at the click.** Micro-line under the button: "No card. 4-minute setup. Cancel in one click."',
          '**One primary CTA per view.** Secondary asks must be visually subordinate — a text link, not a second button.',
          '**Match the next screen.** If the button says "See pricing" and the next page is a form, you have broken the promise and the funnel.'
        ]}
      ]
    },
    {
      id: 't6-logic', title: 'Logic, claims and substantiation',
      blocks: [
        { t: 'p', v: 'Persuasion that collapses under scrutiny costs more than it earns. Logic hygiene is also your defence when legal, a journalist, or a sharp prospect pushes back.' },
        { t: 'table', head: ['Error', 'How it shows up in marketing', 'Fix'],
          rows: [
            ['False dichotomy', '"Either switch or keep wasting money"', 'Acknowledge the real third option: staying, imperfectly, on purpose'],
            ['Correlation as causation', '"Our users grow 3× faster"', 'State the direction honestly: fast-growing teams tend to adopt tools like this'],
            ['Misapplied authority', '"Featured in Forbes" as product proof', 'Use authority for the claim it actually supports'],
            ['Unstated assumption', '"Saves 10 hours a week"', 'Name the baseline: for teams currently reconciling manually across 3+ systems'],
            ['Survivorship bias', 'Case studies only from successes', 'Publish the conditions under which it does not work — trust compounds'],
            ['Vague quantifier', '"Up to 80% faster"', '"Up to" is legally safer and rhetorically weak; give the median and the range']
          ]},
        { t: 'h', v: 'Claim classes (know which you are making)' },
        { t: 'list', v: [
          '**Puffery** — subjective, unmeasurable ("the world\'s best coffee"). Generally permissible, generally weak.',
          '**Objective claim** — measurable, so it must be substantiated *before* publication, with evidence you could produce on request.',
          '**Comparative claim** — naming or implying a competitor. Highest risk; needs current, apples-to-apples evidence and usually legal review.',
          '**Testimonial** — must reflect typical results or disclose that it does not; endorsements and paid relationships require disclosure in most jurisdictions.',
          '**Regulated claim** — health, financial, safety, environmental. Route through review, always. "Cures", "guaranteed returns" and unqualified "sustainable" are how brands end up in enforcement actions.'
        ]},
        { t: 'key', v: 'The senior habit: every number in a draft carries a bracketed source in the working document — `[Q3 cohort analysis, n=340, 2026-06]`. Strip the brackets at publish. This one habit ends most legal review cycles before they start.' }
      ]
    },
    {
      id: 't6-editing', title: 'Editing as a system (and how to edit AI output)',
      blocks: [
        { t: 'p', v: 'A five-pass edit takes 12 minutes and outperforms an hour of unstructured fiddling. It is also exactly the process that turns AI drafts into shippable copy.' },
        { t: 'steps', v: [
          { n: 1, name: 'Structure pass', body: 'Is the framework right for this awareness level? Does the order of ideas match the reader\'s questions? Move blocks before touching words.' },
          { n: 2, name: 'Precision pass (Strunk & White)', body: 'Cut 30%. Activate voice. Fix parallelism. Move emphatic words to sentence ends.' },
          { n: 3, name: 'Momentum pass (Sugarman)', body: 'Short first sentence? Does every line pull to the next? Add one open loop; delete one restatement. Read aloud.' },
          { n: 4, name: 'Logic pass (claims)', body: 'Every claim: source, class, substantiation. Kill unsupported causation. Check the do-not-say list.' },
          { n: 5, name: 'Voice and texture pass', body: 'Add what only you could write: the specific detail from an interview, the cultural reference that fits, the sentence with a pulse. This is where AI output becomes yours.' }
        ]},
        { t: 'h', v: 'AI tells to hunt in pass 5' },
        { t: 'list', v: [
          'Monotone sentence length and identical paragraph shapes.',
          'Triads everywhere ("clear, concise, and compelling") used as filler rhythm.',
          'Abstract nouns doing the work of verbs: leverage, streamline, unlock, elevate, transform, empower.',
          'Hedged non-claims: "can help improve", "may contribute to", "is designed to".',
          'Negative parallelism as a crutch: "It\'s not just X — it\'s Y."',
          'Symmetrical summary paragraphs that restate the intro without adding information.',
          'Specificity that evaporates on inspection: numbers with no source, examples with no names.'
        ]},
        { t: 'formula', label: 'The economics of elevation', expr: 'AI draft (2 min) + 5-pass edit (15 min) ≈ 3 hours of from-scratch writing at higher consistency',
          example: 'This is the commercial case for the role: not "I use AI" but "I built an editorial process that makes AI output shippable, and here is the before/after."' },
        { t: 'rubric',
          j: 'Edits for typos and length. Cannot say why a sentence is weak. Publishes AI output with light cosmetic changes.',
          c: 'Runs a consistent multi-pass edit, cuts 30–40% without losing meaning, sources claims, matches framework to awareness.',
          s: 'Breaks rules deliberately and can justify it, detects AI tells reliably, maintains a claims register, and can teach the process to a team with before/after evidence.' }
      ]
    }
  ],
  artifact: {
    title: 'Editorial rewrite portfolio (with an AI elevation case)',
    steps: [
      { s: 'Choose 3 real pieces of copy to teardown', guide: 'A SaaS homepage hero, a B2B email from your inbox, and a clunky paid-social ad. Pick "okay but not great" — perfect copy teaches nothing and terrible copy is too easy.' },
      { s: 'Annotate every violation line by line', guide: 'Two columns: original line | rule violated (needless words, passive, weak emphasis, broken parallelism, abstraction, unsupported claim). Count them.' },
      { s: 'Run the logic and claims audit', guide: 'Name the claim class for every claim. Flag the unstated assumptions and the correlation-as-causation moves. Say what evidence would be needed.' },
      { s: 'Rewrite all three with metrics', guide: 'Table: piece | original word count | rewritten | reduction % | reading grade before/after | claims sourced. Target 35–50% reduction with meaning intact.' },
      { s: 'Generate 12 headlines across 6 distinct angles for one of them', guide: 'Score each on the 4 Us. Choose 3 for a test and write the hypothesis for each. Explain what you learn regardless of which wins.' },
      { s: 'Do one full AI elevation case', guide: 'Prompt for a 200-word hero section. Paste the raw output. Annotate the AI tells. Apply the 5-pass edit. Show raw → annotated → final side by side with time spent at each pass.' }
    ]
  }
}

];
