// Tracks 1–3 · Foundations: desire, jobs, audience
export default [

/* ══════════════════ 1 ══════════════════ */
{
  id: 1, phase: 'Foundations', color: '--cy', roles: ['co', 'cs', 'cro', 'gtm'],
  title: 'Market Psychology & the Architecture of Desire',
  sub: 'Diagnose before you write a word',
  time: 'Study 3h · Artifact 4–5h',
  prereq: 'None — start here',
  feeds: 'Feeds tracks 4, 5, 6, 7, 12',
  sources: 'Schwartz · Cialdini · Kahneman · Fogg · Ryan & Deci',
  sections: [
    {
      id: 't1-desire', title: 'Desire cannot be created',
      blocks: [
        { t: 'p', v: 'Eugene Schwartz opened *Breakthrough Advertising* with the single most load-bearing sentence in marketing: copy cannot create desire. It can only channel existing mass desire onto a product. Everything downstream — positioning, headlines, funnels, retention — is plumbing for a force that already exists in the market.' },
        { t: 'plain', v: 'You are not a magician conjuring want out of nothing. You are a plumber routing a river that is already flowing. The river is the market\'s existing hunger — for less back pain, for a promotion, for a team that stops arguing in Slack. Your job: find the river, then dig the shortest channel from it to your product.' },
        { t: 'h', v: 'The three variables of mass desire' },
        { t: 'list', v: [
          '**Urgency / intensity** — how badly does the market want this right now? Pain beats aspiration on urgency almost every time.',
          '**Staying power** — does the desire repeat (sleep, status, safety) or exhaust itself after one purchase?',
          '**Scope** — how many people share it? A ferocious desire held by 400 people is a niche business, not a market.'
        ]},
        { t: 'key', v: 'Rank a market on all three before writing. High intensity + high staying power + wide scope is where category leaders live. Low intensity means no copy will save you — you have an education problem or a product problem, not a copy problem.' },
        { t: 'ge', label: 'Channelling vs. inventing desire',
          good: '"Wake up without the back pain that\'s been ruining your mornings." — attaches to an existing, felt, daily desire.',
          bad: '"Discover a revolutionary new sleep paradigm." — asks the reader to want something they have never wanted before.',
          why: 'The first borrows energy the market already generated. The second has to generate energy from scratch, which advertising has almost never managed to do at a profit.' },
        { t: 'warn', lbl: 'Senior pitfall', v: 'Every strategist knows this intellectually. The gap between mid and senior is doing the diagnosis **under deadline** — every time, even at 4pm on a Friday when the client just wants three headlines. Build the habit, not the belief.' },
        { t: 'drill', v: [
          'Pick a product you use. Write its mass desire in one sentence with no product words in it.',
          'Score that desire 1–5 on intensity, staying power, scope. Where would copy struggle?',
          'Find one ad in your feed that tries to *invent* desire. Rewrite its headline to channel an existing one instead.'
        ]}
      ]
    },
    {
      id: 't1-awareness', title: 'The five levels of awareness',
      blocks: [
        { t: 'p', v: 'Awareness is what the prospect already knows about their problem, the solution category, and you. It dictates where copy must start. Get it wrong and even beautiful writing bounces.' },
        { t: 'table', head: ['Level', 'Prospect\'s state', 'Copy must lead with', 'Natural channel'],
          rows: [
            ['**Most aware**', 'Knows you, wants it, waiting on a reason', 'The offer, price, deadline', 'Retargeting, cart email, loyalty'],
            ['**Product aware**', 'Knows you exist, not convinced you\'re the one', 'Differentiation, proof, risk reversal', 'Comparison pages, review ads, demo follow-up'],
            ['**Solution aware**', 'Knows solutions exist, doesn\'t know you', 'Claim the category, own the mechanism', 'Category keywords, "best X" content, review sites'],
            ['**Problem aware**', 'Feels the pain, doesn\'t know solutions', 'Name and agitate the problem, then reveal', 'Blog, social, problem-keyword search'],
            ['**Unaware**', 'No language for the problem yet', 'Story, identity, insight — no product talk', 'Thought leadership, PR, brand video, community']
          ]},
        { t: 'key', v: 'The most expensive mistake in marketing is writing most-aware copy (features, pricing, "buy now") for a problem-aware audience — and its mirror, spending problem-aware education on a retargeting list that already added to cart.' },
        { t: 'h', v: 'Awareness is a property of the traffic, not the page' },
        { t: 'p', v: 'The same page serves different awareness levels depending on where the click came from. This is why one landing page cannot do everything, and why "our homepage converts badly" is usually a traffic-mix question first.' },
        { t: 'ge', label: 'Same product, two awareness levels',
          good: 'Cold social traffic → "Your best rep quits every 18 months. Here\'s the pattern nobody names." (problem aware)',
          bad: 'Cold social traffic → "Get 20% off annual plans — 3 seats minimum." (most aware offer to strangers)',
          why: 'The offer is not persuasive to someone who has not yet accepted they have the problem. Discounting to the unconvinced trains price sensitivity and buys nothing.' },
        { t: 'drill', v: [
          'Classify these by awareness: (a) "50% off Pro" (b) "The only CRM that writes the follow-up for you" (c) "Why your best rep quits every 18 months" (d) "Stop losing deals to bad handoff notes" (e) "Project management for teams that hate project management".',
          'Open any brand\'s paid-social ad and its Google Ads copy. Are the awareness levels different? They should be.',
          'Audit one funnel: list each touchpoint and the awareness level it assumes. Find the mismatch.'
        ]}
      ]
    },
    {
      id: 't1-sophistication', title: 'The five stages of sophistication',
      blocks: [
        { t: 'p', v: 'Sophistication is not about the prospect — it is about the **market**. How many claims like yours have they already heard? Every competitor who runs an ad raises the stage and burns down the previous playbook.' },
        { t: 'steps', v: [
          { n: 1, name: 'Be first — state the claim plainly', body: '"Cures headaches." Works only in genuinely new categories. Rare, and it decays in months.' },
          { n: 2, name: 'Enlarge the claim', body: 'Bigger, faster, more specific than the incumbent. "Cures headaches in 9 minutes."' },
          { n: 3, name: 'Introduce the mechanism', body: 'Claims are disbelieved, so explain *how*. Every "AI-powered" pitch of the last three years lives here.' },
          { n: 4, name: 'Elaborate the mechanism', body: 'Your how must beat their how. Proprietary process, patents, architecture diagrams, benchmark tables.' },
          { n: 5, name: 'Identification', body: 'No claim is believed. Only identity moves. You sell who the buyer becomes, not what the product does.' }
        ]},
        { t: 'case', title: 'Basecamp', v: 'Diagnosed the PM-tool market as stage 4–5 — every competitor claims integrations, AI, speed. Went stage 5: "the calm company." The copy describes a way of working, not a feature set. The same identity play in a stage-2 market would read as evasive.' },
        { t: 'case', title: 'HubSpot', v: 'Rather than fight as "marketing software" in a crowded stage-4 market, they named a new category — "inbound marketing" — wrote the book, and ranked for the term. A stage-1 move executed inside a stage-4 market. Category creation is the escape hatch from mechanism arms races.' },
        { t: 'warn', v: 'Client insists on a stage-2 "we\'re better and faster" campaign in a stage-5 market. Do not argue from taste. Build a claims-saturation table: 10 competitors × their primary claim. Let the duplication make the argument for you.' },
        { t: 'formula', label: 'Quick sophistication read', expr: 'Google "best [category]" → read the top 10 titles + H1s',
          example: 'Claims only = stage 1–2. Mechanism language ("how it works", "our process", "patented") = 3–4. Identity, worldview and enemy language = 5.' }
      ]
    },
    {
      id: 't1-cialdini', title: 'The seven principles of influence',
      blocks: [
        { t: 'p', v: 'Cialdini gives you the *why* under the tactics. Best copy activates two or three deliberately; amateur copy activates all seven and reads like a scam.' },
        { t: 'cards', v: [
          { h: '1 · Reciprocity', b: 'Give real value first and the ask feels fair. Free tools, teardowns, samples, unusually generous docs. The gift must be genuinely useful — a gated PDF of recycled blog posts creates debt in the wrong direction.' },
          { h: '2 · Commitment & consistency', b: 'Small yes leads to bigger yes. Micro-conversions (quiz, calculator, 14-day trial) exist to start an identity the buyer will want to stay consistent with. Copy should name the identity: "You\'ve already started optimising — finish the job."' },
          { h: '3 · Social proof', b: 'Strongest when the proof source resembles the reader. "2,000 agency owners" beats "50,000 users" for an agency owner. Specific > large.' },
          { h: '4 · Authority', b: 'Credentials, published research, named experts, third-party ratings. Borrowed authority (media logos) is weaker than demonstrated authority (original data, teardown, benchmark).' },
          { h: '5 · Liking', b: 'Similarity, praise, cooperation. Voice does most of this work. A brand that sounds like a person the reader would sit next to gets read.' },
          { h: '6 · Scarcity', b: 'Loss framing beats gain framing. Must be true: real seat caps, real cohort dates, real inventory. Fake timers that reset on refresh cost more in trust than they earn in conversions.' },
          { h: '7 · Unity', b: 'The most underused. Not "I like you" but "we are the same kind." Shared identity, shared enemy, shared origin. "Built by immigrants, for immigrants." This is the psychological engine of stage-5 positioning.' }
        ]},
        { t: 'ge', label: 'Layering, not stacking',
          good: 'Unity + scarcity + social proof: "Join 2,000 operators who refuse template marketing. The February cohort closes Friday."',
          bad: 'All seven in one email: authority logos + countdown + testimonial wall + free gift + "as trusted by" + "only 3 left" + founder story.',
          why: 'Persuasion density past ~3 principles reads as pressure. Pressure triggers reactance — the reader pushes back to protect autonomy.' },
        { t: 'key', lbl: 'Ethical line', v: 'Cialdini\'s own test: are you **detecting** something true about the offer, or **fabricating** it? Real scarcity, disclosed. Real proof, verifiable. Real authority, earned. Everything else is a loan against brand equity at a punitive rate.' }
      ]
    },
    {
      id: 't1-behavioral', title: 'Behavioural economics that changes copy',
      blocks: [
        { t: 'p', v: 'Kahneman\'s two systems: System 1 is fast, associative, emotional and does almost all the buying; System 2 is slow, deliberate and mostly shows up to justify what System 1 already decided. Write for System 1, then arm System 2 with the justification.' },
        { t: 'table', head: ['Effect', 'What happens', 'Copy move'],
          rows: [
            ['**Loss aversion**', 'Losses feel ~2× gains', 'Frame the cost of inaction: "You\'re losing 6 hours a week to this" beats "Save 6 hours a week"'],
            ['**Anchoring**', 'First number sets the scale', 'Show the crossed-out price, the agency alternative, the annual cost of the problem — before your price'],
            ['**Endowment / IKEA effect**', 'We overvalue what feels ours or what we built', 'Free trial, configurator, "your dashboard", "your plan" language'],
            ['**Framing**', 'Same fact, different feeling', '"$1.40/day" vs "$499/year". "90% fat free" vs "10% fat"'],
            ['**Decoy / compromise effect**', 'A third option reshapes choice', 'Good-better-best where the middle is the target; the premium tier exists to make it reasonable'],
            ['**Default bias**', 'People take the pre-set path', 'Pre-select the annual plan, recommended tier, opt-out-not-opt-in (where lawful and honest)'],
            ['**Zeigarnik effect**', 'Open loops nag until closed', 'Progress bars, "2 of 3 steps done", curiosity gaps in subject lines'],
            ['**Peak-end rule**', 'We remember the peak and the end', 'Invest disproportionately in hero and final CTA; nail the confirmation page and the first support reply'],
            ['**Cognitive load**', 'Effort reduces belief and action', 'One idea per section, short first sentences, no jargon before it is earned'],
            ['**Social norms**', 'We copy what similar others do', '"87% of teams your size pick Pro" beats "Pro is our best value"'],
            ['**Ambiguity aversion**', 'Unknown risk blocks action', 'Show the exact next step, timeline, and what happens after payment'],
            ['**Status quo bias**', 'Switching feels expensive', 'Migration copy: importers, done-for-you setup, "keep your old tool for 30 days"']
          ]},
        { t: 'warn', v: 'Behavioural effects are real but small and context-dependent, and many famous ones have shaky replication records. Treat them as **hypothesis generators for tests**, not laws. A senior candidate who says "priming effects are noisy, so I\'d test it" outranks one who cites a 2008 study as settled fact.' },
        { t: 'formula', label: 'Cost-of-inaction frame', expr: 'CoI = (units of pain × frequency × value per unit) − price',
          example: '6 wasted hours/week × 48 weeks × $60/hour = $17,280/year. Against a $2,400 licence, the price stops being the subject of the conversation.' }
      ]
    },
    {
      id: 't1-identity', title: 'Emotion, identity and the actual trigger to act',
      blocks: [
        { t: 'p', v: 'Buying is emotional selection followed by rational defence. Your copy has two jobs and they run in that order: make the reader *feel* recognised, then give them the sentence they will repeat to their boss or spouse.' },
        { t: 'h', v: 'The eight-emotion shortlist' },
        { t: 'p', v: 'Plutchik\'s wheel is more than enough vocabulary: joy, trust, fear, surprise, sadness, disgust, anger, anticipation. Most B2B copy plays in **trust, fear, anticipation**; most DTC in **joy, anticipation, disgust** (of the status quo). Name the target emotion in your brief. If you can\'t, the copy will default to bland optimism.' },
        { t: 'h', v: 'Identity beats benefit at the top of the market' },
        { t: 'p', v: 'People buy what confirms who they already believe they are, or who they are trying to become. "For marketers who refuse templates." "For the engineer who reads the changelog." Identity copy self-selects the audience and repels the rest — which is a feature, not a bug.' },
        { t: 'h', v: 'Fogg: behaviour = motivation × ability × prompt' },
        { t: 'p', v: 'All three must arrive at the same moment. Copy usually over-invests in motivation and under-invests in **ability** (make it easier) and **prompt** (ask clearly, right now). When conversion is flat despite strong desire, look for friction and a missing or buried ask before you rewrite the emotional pitch.' },
        { t: 'h', v: 'Self-determination theory: autonomy, competence, relatedness' },
        { t: 'list', v: [
          '**Autonomy** — never corner the reader. Offer a real choice, including the choice to leave. Reactance is the silent conversion killer.',
          '**Competence** — the reader must believe *they* can do it, not just that the tool works. "Set up in 4 clicks, no developer" is competence copy.',
          '**Relatedness** — belonging. Community, cohort, "teams like yours." This is Unity from the influence list, restated as a need.'
        ]},
        { t: 'ge', label: 'Identity + competence in one hero',
          good: '"For operators who\'d rather read the data than the deck. Import your funnel in 4 minutes — no analyst required."',
          bad: '"Powerful analytics for modern teams. Unlock insights with our AI-driven platform."',
          why: 'The first names an identity, grants competence, and states the effort cost. The second could be pasted onto 400 other products without changing a word.' },
        { t: 'rubric',
          j: 'Cites biases as trivia. Writes benefit lists. Emotion is decoration on top of feature copy.',
          c: 'Picks a target emotion and one or two influence principles on purpose, and can defend the choice with reference to the audience.',
          s: 'Diagnoses awareness + sophistication + dominant emotion before writing, sequences System 1 then System 2, names where a bias claim is uncertain and turns it into a test.' }
      ]
    },
    {
      id: 't1-workflow', title: 'The 2-hour diagnosis workflow',
      blocks: [
        { t: 'p', v: 'Diagnosis is a tool, not a deliverable. Two hours, then you write. Longer than that and you are hiding from the blank page.' },
        { t: 'steps', v: [
          { n: 1, name: 'Read 40 reviews (25 min)', body: 'Two- and four-star reviews of you and your two closest competitors. Highlight verbatim pain and verbatim praise. This is your language bank.' },
          { n: 2, name: 'Read 20 support tickets or sales-call notes (20 min)', body: 'Objections in the buyer\'s words. Note the exact phrase, not your paraphrase.' },
          { n: 3, name: 'Map awareness by channel (15 min)', body: 'For each traffic source: what does this person already know? Where is the mismatch?' },
          { n: 4, name: 'Score sophistication (15 min)', body: 'Ten competitor headlines in a table with their primary claim. Count duplicates.' },
          { n: 5, name: 'Name desire, emotion, identity (15 min)', body: 'One sentence each. If you cannot, you have not read enough raw language yet.' },
          { n: 6, name: 'Pick two influence principles and one framing move (10 min)', body: 'Write them at the top of the brief. Everything you draft has to earn its place against them.' }
        ]},
        { t: 'code', label: 'Diagnosis one-pager (paste into every brief)', v: `MARKET DIAGNOSIS — [product] — [date]
Mass desire (no product words):
Intensity / staying power / scope:      /5   /5   /5
Awareness level of THIS traffic:
Market sophistication stage (1-5) + evidence:
Dominant emotion to activate:
Identity the buyer is stepping into:
Top 3 objections (verbatim):
Influence principles in play (max 3):
Cost of inaction (numbers):
What we will NOT say: ` },
        { t: 'prompt', label: 'Competitor claim + awareness analysis', v: `You are a senior direct-response strategist. Analyse these competitor headlines for the [CATEGORY] market:
[PASTE 10-15 HEADLINES WITH SOURCE]

For each: (1) Schwartz awareness level it targets, (2) primary claim type (benefit / mechanism / identity / price / proof), (3) Cialdini principle activated.
Then output:
- Sophistication stage of this market with evidence from the duplication you see.
- Which awareness levels are overserved and which are ignored.
- 3 headline angles nobody in the set is using, each labelled with the awareness level and emotion it targets.
Be specific. Reject any angle that would work equally well for a competitor.` }
      ]
    }
  ],
  artifact: {
    title: 'Market awareness & desire audit',
    intro: 'Pick a real product with visible marketing — a SaaS you use, a DTC brand, a local business. Avoid giants (too much noise) and unknowns (too little material).',
    steps: [
      { s: 'Pull 12–15 live headlines and classify each by awareness level', guide: 'Sources: homepage, paid social, Google Ads (use the ad transparency library), email subject lines, blog H1s. Table: Asset | Headline | Awareness level | Evidence for that call.' },
      { s: 'Score market sophistication with a competitor claims table', guide: '10 competitors × primary claim. Count duplicate claim types. Stage call plus one paragraph of evidence. Name the escape route: better mechanism, or identity, or new category.' },
      { s: 'Build the verbatim language bank', guide: '40 reviews + 20 tickets or forum threads. Two columns: pain language, praise language. Tag each with frequency (how often) and intensity (how hot). Frequency × intensity ranks your messaging priorities.' },
      { s: 'Write one headline per awareness level (5 total)', guide: 'Each must be deployable on a named channel and target a named emotion. Annotate the influence principle used.' },
      { s: 'Map all 7 influence principles: present / effective / gap', guide: 'Where is Unity missing? Unity is the most common gap in B2B. Recommend two specific additions, not seven.' },
      { s: 'Write the 1-page diagnosis and the "what we will not say" list', guide: 'The exclusion list is the senior move. It shows you made choices instead of an inventory.' }
    ]
  }
},

/* ══════════════════ 2 ══════════════════ */
{
  id: 2, phase: 'Foundations', color: '--cy', roles: ['co', 'cs', 'gtm', 'cro'],
  title: 'Jobs To Be Done & Demand Discovery',
  sub: 'Why people switch — and the language of the switch',
  time: 'Study 3h · Artifact 5h',
  prereq: 'Track 1',
  feeds: 'Feeds tracks 3, 4, 5, 12',
  sources: 'Christensen · Moesta · Ulwick · Klement',
  sections: [
    {
      id: 't2-what', title: 'A job is a progress, not a persona',
      blocks: [
        { t: 'p', v: 'Jobs To Be Done reframes demand: people do not buy products, they hire them to make progress in a particular circumstance. The unit of analysis is the **struggling moment**, not the customer\'s demographics.' },
        { t: 'plain', v: 'A 34-year-old marketing manager in Toronto does not buy anything because she is 34, a marketing manager, or in Toronto. She buys because on Tuesday at 4pm her CEO asked for a number she cannot produce, and she needs to stop feeling exposed by Thursday. That circumstance — not the demographic — is what predicts the purchase.' },
        { t: 'h', v: 'Every job has three dimensions' },
        { t: 'list', v: [
          '**Functional** — the practical task. "Report pipeline by source without exporting to a spreadsheet."',
          '**Emotional** — how they want to feel. "Stop feeling exposed in leadership meetings."',
          '**Social** — how they want to be seen. "Be the person who brings the number, not the excuse."'
        ]},
        { t: 'key', v: 'Functional gets you into the consideration set. Emotional and social decide the purchase and the loyalty. Most B2B copy stops at functional, which is why so much of it is interchangeable.' },
        { t: 'case', title: 'The milkshake', v: 'Christensen\'s team found a large share of milkshakes sold before 9am to solo commuters. The job was not "drink a tasty shake" — it was "make a boring 20-minute commute interesting and keep me full until 11." Competitors were bananas, bagels and boredom, not other milkshakes. Thicker shake, faster queue, moved the dispenser outside the till line: sales rose. Demographic segmentation would never have found it.' },
        { t: 'ge', label: 'Job-led vs. product-led framing',
          good: '"You have 20 minutes to explain a bad month to your board. Start here."',
          bad: '"Advanced attribution reporting with 40+ integrations."',
          why: 'The first enters the reader\'s circumstance at the exact moment of struggle. The second describes the product\'s anatomy and waits for the reader to do the translation work. Most won\'t.' }
      ]
    },
    {
      id: 't2-statements', title: 'Job statements, job stories, job maps',
      blocks: [
        { t: 'formula', label: 'Job statement (Ulwick form)', expr: '[verb] + [object of the verb] + [contextual clarifier]',
          example: '"Minimise the time it takes to reconcile invoices at month-end." No product, no technology, no adjectives — a job statement should stay true if your product disappears.' },
        { t: 'formula', label: 'Job story (Klement form — the one to write copy from)', expr: 'When ___ , I want to ___ , so I can ___ .',
          example: '"When my CEO asks for pipeline by source in a meeting, I want to answer from my phone, so I can look in control instead of promising a follow-up email."' },
        { t: 'h', v: 'The universal job map — eight stages' },
        { t: 'p', v: 'Any job decomposes the same way. Map it and you will find where the current solution fails, which is where your copy and product should aim.' },
        { t: 'steps', v: [
          { n: 1, name: 'Define', body: 'Work out what the job requires and plan it.' },
          { n: 2, name: 'Locate', body: 'Gather the inputs and information needed.' },
          { n: 3, name: 'Prepare', body: 'Set up materials, environment, data.' },
          { n: 4, name: 'Confirm', body: 'Verify everything is ready and correct.' },
          { n: 5, name: 'Execute', body: 'Do the core task.' },
          { n: 6, name: 'Monitor', body: 'Watch it, catch deviations.' },
          { n: 7, name: 'Modify', body: 'Adjust, fix, iterate.' },
          { n: 8, name: 'Conclude', body: 'Finish, file, hand off, report.' }
        ]},
        { t: 'key', v: 'Most products serve stage 5 (execute) and abandon the customer at 1–4 and 6–8. Those neglected stages are where the best content topics, onboarding copy and expansion offers hide. "We do the execute step well" is a commodity claim; "we remove the prepare and confirm steps entirely" is positioning.' },
        { t: 'drill', v: [
          'Write three job stories for a product you know — one functional-led, one emotional-led, one social-led.',
          'Map the eight stages for a job you personally do at work. Circle the two most painful. Which tool serves them? Usually none.',
          'Rewrite a feature bullet as a job statement with no product words in it.'
        ]}
      ]
    },
    {
      id: 't2-forces', title: 'The four forces of progress',
      blocks: [
        { t: 'p', v: 'Bob Moesta\'s model explains why obviously-better products fail to get bought. Four forces act on every switch, two pushing toward it, two holding it back.' },
        { t: 'table', head: ['Force', 'Direction', 'What it sounds like', 'Copy job'],
          rows: [
            ['**Push** of the situation', '→ switch', '"I can\'t keep doing this manually."', 'Name the struggle precisely; make the status quo visible and expensive'],
            ['**Pull** of the new solution', '→ switch', '"If it just imported my data, I\'m in."', 'Show the specific better state, ideally as a demo or a screenshot'],
            ['**Anxiety** about the new', '← stay', '"What if migration breaks and it\'s my fault?"', 'Risk reversal, migration guarantee, proof from similar teams, named owner of the process'],
            ['**Habit** of the present', '← stay', '"The spreadsheet is ugly but it works."', 'Reduce switching cost: importers, done-for-you setup, run-in-parallel option']
          ]},
        { t: 'key', v: 'Anxiety and habit are usually the binding constraint, and almost all marketing budget goes to push and pull. Reading the four forces on a stalled funnel is one of the highest-leverage diagnostics in this whole curriculum.' },
        { t: 'ge', label: 'Anxiety-reducing copy',
          good: '"Keep your current tool running for 30 days. We import your last 24 months, you check the numbers match, then you cancel — or we do it for you and you pay nothing."',
          bad: '"Easy migration! Get started in minutes."',
          why: 'The first dismantles a specific fear (my data breaks and I get blamed) with a specific mechanism. The second asserts ease, which the anxious buyer discounts to zero.' },
        { t: 'h', v: 'Demand-side vs. supply-side thinking' },
        { t: 'p', v: 'Supply-side: "we have 40 integrations, therefore buy." Demand-side: "on the third Tuesday of the month you lose an afternoon, therefore switch." Senior interviewers listen for which side your sentences start on.' },
        { t: 'prompt', label: 'Four-forces diagnostic from raw research', v: `Here are 15 verbatim quotes from customer interviews / reviews / churn surveys:
[PASTE]

Sort every quote into: PUSH (situation pressure), PULL (attraction of new), ANXIETY (fear of new), HABIT (comfort with current).
Then:
1. Which force is strongest and which is our binding constraint?
2. For each anxiety, write the specific copy or offer mechanism that dissolves it (not a reassurance — a mechanism).
3. Rank the four forces by how much of our current messaging addresses them. Name the imbalance.` }
      ]
    },
    {
      id: 't2-interviews', title: 'Switch interviews — how to actually run one',
      blocks: [
        { t: 'p', v: 'A switch interview reconstructs the timeline of a real purchase in reverse, like a crime scene. You are not asking what people want; you are excavating what they already did. Six to ten interviews with recent switchers beats a 900-response survey for messaging work.' },
        { t: 'h', v: 'Recruit for recency and reality' },
        { t: 'list', v: [
          'People who bought in the last 60–90 days (memory is still intact).',
          'Include people who bought a **competitor** and people who bought **nothing** — the "nothing" group teaches you about anxiety and habit.',
          'Never interview only happy power users. They rewrote their own history around loving you.'
        ]},
        { t: 'h', v: 'The timeline questions' },
        { t: 'list', v: [
          '"Take me back to the first moment you thought something had to change. Where were you? What happened that day?"',
          '"What did you do next — search, ask someone, do nothing?" (Watch for long gaps: those are anxiety, not indifference.)',
          '"What almost stopped you from buying?"',
          '"Who else had a say? What did you have to tell them?" (This is your social job and your internal-champion copy.)',
          '"What did you expect it to fix? What did it actually fix?"',
          '"What were you using before, and what happened to it?" (Old solution\'s fate reveals habit strength.)'
        ]},
        { t: 'warn', v: 'Never ask "what features do you want" or "would you pay for X." People are unreliable about the future and reliable about the past. Ask about the past, in scene, with dates and rooms and who said what.' },
        { t: 'key', v: 'Energy spikes are the signal. When a person\'s voice changes — speed up, swearing, laughing, going quiet — mark the timestamp. That sentence is usually your headline. Interview transcripts are the single richest source of unfakeable copy.' },
        { t: 'code', label: 'Interview coding sheet', v: `Participant | Trigger event (date + scene) | Push quotes | Pull quotes | Anxiety quotes | Habit quotes
Words THEY used for the problem:
Words THEY used for the outcome:
Who else was involved + what they needed to hear:
Alternatives considered (incl. "do nothing"):
Deciding moment (what tipped it):
Energy spike timestamps: ` }
      ]
    },
    {
      id: 't2-odi', title: 'Outcome-driven innovation & opportunity scoring',
      blocks: [
        { t: 'p', v: 'Ulwick\'s contribution is quantitative: turn the job into a list of desired outcomes, then survey importance and satisfaction to find where the market is underserved. This is how you convert qualitative jobs work into a prioritised roadmap that a CFO will read.' },
        { t: 'formula', label: 'Desired outcome statement', expr: '[direction of improvement] + [unit of measure] + [object] + [context]',
          example: '"Minimise the time it takes to detect a broken tracking tag after a site release." Testable, measurable, product-agnostic.' },
        { t: 'formula', label: 'Opportunity score', expr: 'Opportunity = Importance + max(Importance − Satisfaction, 0)',
          example: 'Importance 8.6, Satisfaction 3.1 → 8.6 + 5.5 = 14.1. Scores above ~15 signal a badly underserved outcome; below 10, the market is content and copy should not lead there.' },
        { t: 'table', head: ['Pattern', 'Reading', 'Marketing implication'],
          rows: [
            ['High importance, low satisfaction', 'Underserved — the money', 'Lead the messaging here; it is your differentiation'],
            ['High importance, high satisfaction', 'Table stakes', 'Mention as parity, never as the headline'],
            ['Low importance, low satisfaction', 'Ignore', 'Do not build content pillars here'],
            ['Low importance, high satisfaction', 'Overserved', 'Candidate for a cheaper disruptive offer']
          ]},
        { t: 'key', v: 'This is also the cleanest way to kill a bad brief. "We want to lead with our reporting suite" → importance 6.2, satisfaction 7.8. Overserved. Show the table, propose the underserved outcome instead. Data ends arguments that taste cannot.' }
      ]
    },
    {
      id: 't2-tocopy', title: 'From jobs to messaging: the map',
      blocks: [
        { t: 'p', v: 'Research that never reaches a sentence is a hobby. The job-to-message map is the artefact that makes JTBD operational for a copy team.' },
        { t: 'table', head: ['Job story', 'Force to overcome', 'Message', 'Proof', 'Asset / channel'],
          rows: [
            ['When the board asks for CAC by channel, I want an answer in the meeting, so I can look in control', 'Push', '"Answer the CAC question before the meeting ends."', 'Live 40-second demo GIF', 'Paid social, problem-aware'],
            ['When I evaluate a new tool, I fear the migration lands on me', 'Anxiety', '"We move your last 24 months. You verify. Then you cancel the old one."', 'Named migration lead + 3 customer quotes', 'Comparison page, product-aware'],
            ['When my spreadsheet already works, changing feels expensive', 'Habit', '"Run both for 30 days. Keep whichever tells the truth."', 'Parallel-run case study', 'Nurture email 4']
          ]},
        { t: 'h', v: 'Struggling-moment headlines' },
        { t: 'p', v: 'The most reliable headline generator in this curriculum: take the trigger event from a switch interview, write it as a moment, and stop. No product, no adjective.' },
        { t: 'ge', label: 'Struggling moment as headline',
          good: '"The invoice was right. The spreadsheet was wrong. You found out in the meeting."',
          bad: '"Streamline your financial reporting workflow."',
          why: 'Specific scene, felt exposure, zero product language — and only someone who lived it will react, which is exactly the self-selection you want.' },
        { t: 'rubric',
          j: 'Uses "JTBD" as a synonym for persona. Writes job statements that contain the product name.',
          c: 'Runs interviews, writes clean job stories, maps them to messages.',
          s: 'Reads the four forces on a stalled funnel, quantifies outcomes with opportunity scores, and can show which message was retired because the data said the market was already satisfied there.' }
      ]
    }
  ],
  artifact: {
    title: 'JTBD research kit + job-to-message map',
    intro: 'Do this on a real product — ideally one where you can reach three real buyers. If not, use 60 reviews and 3 forum threads as your proxy corpus and say so in the write-up.',
    steps: [
      { s: 'Write the interview guide (10 timeline questions)', guide: 'Reverse-chronological structure: purchase → deciding moment → consideration → first thought → trigger event. Include the two "what almost stopped you" probes.' },
      { s: 'Run 3 switch interviews or code 60 reviews', guide: 'Record and transcribe. Mark energy spikes with timestamps. If using reviews, use 2- and 4-star only — 1- and 5-star reviews are mostly emotion without mechanism.' },
      { s: 'Produce 6 job stories across functional / emotional / social', guide: 'When…/I want to…/so I can…. Every one must be traceable to a specific quote in your corpus. Cite it.' },
      { s: 'Complete the four-forces analysis with verbatim quotes', guide: 'Four columns, minimum three quotes each. Then name the binding constraint and the current messaging imbalance.' },
      { s: 'Score 8 desired outcomes on importance × satisfaction', guide: 'Even a 20-person survey or an informed estimate labelled as such beats no quantification. Show the opportunity scores and the resulting priority order.' },
      { s: 'Build the job-to-message map and write 5 headlines from struggling moments', guide: 'Table: job story | force | message | proof | channel. Then the five headlines, each annotated with the interview quote that produced it.' }
    ]
  }
},

/* ══════════════════ 3 ══════════════════ */
{
  id: 3, phase: 'Foundations', color: '--cy', roles: ['co', 'cs', 'svc'],
  title: 'Audience-First Framing & Voice of Customer',
  sub: 'Write from the reader\'s side of the table',
  time: 'Study 2.5h · Artifact 4h',
  prereq: 'Tracks 1–2',
  feeds: 'Feeds tracks 5, 6, 9, 16',
  sources: 'Voice-of-customer research practice · plain-language standards',
  sections: [
    {
      id: 't3-frame', title: 'Audience-first framing',
      blocks: [
        { t: 'p', v: 'Brand-first framing starts inside the company and works outward: what we built, why we are proud, what we call it. Audience-first framing starts in the reader\'s head at the moment of contact and works back to the product. Same facts, opposite order, radically different conversion.' },
        { t: 'h', v: 'Four tests that catch brand-first drift' },
        { t: 'list', v: [
          '**The first-thought test.** What is the reader thinking one second before they see this? Does the first line meet that thought or ignore it?',
          '**The so-what ladder.** Ask "so what?" of every claim until you hit something the reader feels. "6-layer foam" → so what → "pressure spreads" → so what → "you stop waking at 3am." Stop there.',
          '**The you/we ratio.** Count second-person vs first-person references. Above 1:1 in favour of "we" on a landing page is almost always a symptom.',
          '**The swap test.** Replace your brand name with a competitor\'s. If the copy still reads as true, you wrote about the category, not about your product.'
        ]},
        { t: 'ge', label: 'Same product, both framings',
          good: '"Your monthly close takes 6 days. Teams your size close in 2 with this — here\'s the exact workflow."',
          bad: '"We\'re excited to announce our new automated reconciliation engine, built on 10 years of accounting expertise."',
          why: 'Brand-first copy asks the reader to care about the company\'s biography before they know what they get. Audience-first copy pays them first.' },
        { t: 'warn', v: 'Audience-first is not the same as sycophantic. "You\'re a rockstar marketer who deserves the best" is flattery, not framing. Framing means entering the reader\'s actual situation, including the ugly parts.' },
        { t: 'key', v: 'The senior move is applying this to internal audiences too. A GTM brief for a CFO opens with pipeline impact; the same brief for a sales lead opens with what they get on launch day. Awareness levels apply inside the building.' }
      ]
    },
    {
      id: 't3-voc', title: 'Voice-of-customer research that produces sentences',
      blocks: [
        { t: 'p', v: 'The best copy is usually found, not written. Message mining is the discipline of harvesting real language at scale and ranking it.' },
        { t: 'table', head: ['Source', 'What it gives you', 'How to mine it'],
          rows: [
            ['Reviews (yours + competitors\')', 'Pain and delight language, comparison logic', '2★ and 4★ only; tag by theme; note the phrase, not your paraphrase'],
            ['Support tickets & chat logs', 'Objections, confusion, unmet expectations', 'Sort by volume of tag; read the first 2 lines of the customer\'s message — that\'s their framing'],
            ['Sales call recordings', 'Objections in real time, the words that unstick deals', 'Search transcripts for "worried", "but", "how do you", "what happens if"'],
            ['Search queries (GSC + keyword tools)', 'The exact phrasing of demand, at scale', 'Filter for question queries and comparison queries; they are pre-written headlines'],
            ['Reddit / niche forums / Discord', 'Unfiltered peer language and hidden objections', 'Search "[category] recommendations" and "alternatives to [competitor]"'],
            ['Churn & cancellation surveys', 'Where the promise broke', 'One open field beats ten multiple-choice options'],
            ['Win/loss interviews', 'Why you were chosen or not, in the buyer\'s words', 'Ask "what did you tell your boss?"']
          ]},
        { t: 'formula', label: 'Ranking what you mined', expr: 'Priority = frequency × intensity',
          example: 'A complaint that appears 40 times, calmly, matters differently from one that appears 6 times with swearing. Both belong on the map; only one belongs in the headline. Log both scores.' },
        { t: 'h', v: 'Coding raw language — the two-pass method' },
        { t: 'steps', v: [
          { n: 1, name: 'Pass one: collect verbatim', body: 'Copy exact sentences into a sheet. No editing, no summarising. Editing at collection time is how you accidentally launder the customer\'s voice into your own.' },
          { n: 2, name: 'Pass two: tag and cluster', body: 'Tag by job, by force (push/pull/anxiety/habit), by emotion. Cluster into themes. Count. Now you have a ranked message bank with citations.' }
        ]},
        { t: 'key', v: 'Deliverable to keep forever: a **message bank** — a living sheet of quotes tagged by theme, with source and date. It makes every future brief faster and every claim defensible. In interviews, showing a message bank signals process, not talent.' },
        { t: 'prompt', label: 'Review-mining pass', v: `Here are 60 customer reviews for [PRODUCT] and its two closest competitors:
[PASTE]

1. Extract every distinct pain point, using the reviewer's exact words. Do not paraphrase.
2. Cluster into themes; give each theme a frequency count and a 1-5 intensity rating with justification.
3. Separate praise language into functional / emotional / social benefit.
4. List 10 phrases so specific and idiomatic that they could only come from a real customer.
5. Flag any objection that appears in competitor reviews but never in ours — that's an untapped differentiation angle.
Output as a table, sorted by frequency x intensity.` }
      ]
    },
    {
      id: 't3-ladder', title: 'The ladder of abstraction & specificity',
      blocks: [
        { t: 'p', v: 'Most weak copy sits at the wrong rung. The ladder runs from concrete to abstract; persuasion needs both, in the right order.' },
        { t: 'table', head: ['Rung', 'Example', 'Use when'],
          rows: [
            ['**Attribute** (concrete)', '"6-layer foam, 10-inch profile"', 'Product-aware readers who are comparing specs'],
            ['**Feature**', '"Zoned pressure support"', 'Mechanism stage; needed to make a claim credible'],
            ['**Functional benefit**', '"Your spine stays aligned all night"', 'Solution-aware; the "what do I get" question'],
            ['**Emotional outcome**', '"You wake up without that first-step wince"', 'Problem-aware; where desire actually lives'],
            ['**Identity**', '"For people who refuse to accept 40 as the age you start hurting"', 'Stage-5 markets; brand-level work']
          ]},
        { t: 'key', v: 'Rule of thumb: climb up for the headline, climb down for the proof. Abstraction persuades, specificity convinces. A page that is all abstraction feels like advertising; all specificity feels like a datasheet.' },
        { t: 'ge', label: 'Specificity as credibility',
          good: '"Cuts month-end close from 6 days to 2. Median across 340 finance teams; slowest was 4."',
          bad: '"Dramatically accelerates your financial close."',
          why: 'Numbers with a source and an honest worst case are more believable than a superlative. Including the slowest result raises trust more than hiding it.' },
        { t: 'drill', v: [
          'Take one feature and climb the full ladder — five rungs, five sentences.',
          'Find a vague claim on your own site. Rewrite it with a number, a timeframe, and a named source.',
          'Take an abstract headline and write its concrete proof line. Which one is doing the work?'
        ]}
      ]
    },
    {
      id: 't3-segments', title: 'Segments, ICPs and personas — what each is for',
      blocks: [
        { t: 'p', v: 'These three get used interchangeably and shouldn\'t be. Being precise about them is a fast senior signal in interviews.' },
        { t: 'table', head: ['Artefact', 'Definition', 'Good for', 'Fails at'],
          rows: [
            ['**Segment**', 'A group that responds differently to the same offer', 'Targeting, channel and offer decisions', 'Nothing — this is the load-bearing one'],
            ['**ICP** (ideal customer profile)', 'Firmographic + behavioural description of accounts worth winning', 'Sales targeting, qualification, spend allocation', 'Writing copy — it has no interior life'],
            ['**Persona**', 'A humanised composite of a buyer\'s goals, context and language', 'Aligning a team on who they are writing for', 'Prediction — demographics rarely predict purchase'],
            ['**Job**', 'The progress someone is trying to make in a circumstance', 'Messaging, product, content topics', 'Media buying — platforms target people, not jobs']
          ]},
        { t: 'key', v: 'Segment by **job + awareness + trigger**, not by age and job title. "Finance leads at 50–500 person companies in the 3 weeks before board reporting" is a segment you can write to and buy media against. "Millennial decision-makers" is not.' },
        { t: 'h', v: 'The buying committee' },
        { t: 'p', v: 'In B2B, nobody buys alone. Each role has its own job, and your champion needs different copy from your economic buyer.' },
        { t: 'list', v: [
          '**Champion** — wants to look smart and stop suffering. Needs ammunition: a one-pager they can forward.',
          '**Economic buyer** — wants risk-adjusted return. Needs numbers, references, and a downside story.',
          '**End user** — wants their day to get easier. Needs proof it will not add work.',
          '**Blocker** (security, legal, procurement) — wants no surprises. Needs documentation, compliance answers, and a predictable process.'
        ]},
        { t: 'warn', v: 'Persona documents that list favourite coffee orders and stock-photo faces are a running joke for a reason. If a detail cannot change a sentence you write, delete it.' }
      ]
    },
    {
      id: 't3-empathy', title: 'Agitation ethics: empathy without exploitation',
      blocks: [
        { t: 'p', v: 'Problem-aware copy agitates. Done well, the reader feels seen; done badly, manipulated. The line is not intensity — it is whether the agitation is **true, recognisable, and followed by real relief**.' },
        { t: 'table', head: ['Test', 'Pass', 'Fail'],
          rows: [
            ['Truth', 'The pain described is one the reader actually has', 'Manufactured insecurity ("your friends are judging your mattress")'],
            ['Recognition', 'Reader thinks "that\'s exactly it"', 'Reader thinks "you\'re trying to make me feel bad"'],
            ['Proportion', 'Agitation length matches the stakes', 'Three paragraphs of despair to sell a pen'],
            ['Relief', 'A credible, immediate path out', 'Fear with a vague solution and a high price'],
            ['Dignity', 'Reader keeps their agency and self-respect', 'Shame, body-shaming, financial fear-mongering']
          ]},
        { t: 'ge', label: 'Agitation done cleanly',
          good: '"Every morning you decide whether to stretch first or just get up and take it. That trade-off is not normal and it is not permanent."',
          bad: '"Your back pain is destroying your career, your marriage, and your future. Every day you wait, more damage."',
          why: 'The first describes a real, recognisable daily calculation and grants agency. The second escalates unfalsifiable catastrophe — effective on a small percentage, corrosive to brand trust with everyone else.' },
        { t: 'key', v: 'Regulated categories (health, finance, legal, insurance) have hard legal limits on agitation and implied outcomes. When in doubt: describe experience, not medical or financial results, and route claims through review. "Customers report sleeping through the night" is survivable; "cures sciatica" is not.' }
      ]
    },
    {
      id: 't3-bilingual', title: 'Multi-market framing: adaptation, not translation',
      blocks: [
        { t: 'p', v: 'Translation moves words. Transcreation moves the *effect*. If you write for more than one language market — Canadian EN/FR, US/LatAm ES, UK/DE — this is a hard commercial differentiator, because most teams get it wrong in the same predictable ways.' },
        { t: 'h', v: 'What actually shifts across markets' },
        { t: 'list', v: [
          '**Directness.** English CTAs command ("Get started"). French, German and Japanese often prefer value-first or infinitive constructions; a literal imperative can read as brusque.',
          '**Formality register.** tu/vous, du/Sie, tú/usted. This is a positioning decision, not a grammar decision — and it must stay consistent across every touchpoint including support macros.',
          '**Proof norms.** North American copy leads with volume ("50,000 customers"); several European markets weight institutional credibility, certifications and longevity higher.',
          '**Urgency tolerance.** Countdown-driven scarcity travels badly into markets with stronger consumer-protection norms and reads as suspect.',
          '**Length.** French and Spanish run 15–25% longer than English; German compounds break mobile layouts. Design must survive expansion, so brief the constraint up front.',
          '**Humour, idiom, sport metaphors.** Almost never survive. Replace the function, not the phrase.'
        ]},
        { t: 'ge', label: 'Adaptation vs. translation',
          good: 'EN: "Stop guessing. Start closing." → FR: « Des chiffres fiables, enfin. » (value-first, no imperative stack)',
          bad: 'EN: "Stop guessing. Start closing." → FR: « Arrêtez de deviner. Commencez à conclure. »',
          why: 'The literal version is grammatically fine and rhetorically foreign — a stacked double imperative that reads as pushy to a francophone B2B reader. The adaptation keeps the promise and changes the delivery.' },
        { t: 'key', v: 'Deliverable that wins interviews: a side-by-side EN/FR page with **annotations explaining each strategic change**. Not "here is my French." Rather: "English leads with a command because the market is stage-4 and competitive; French leads with credibility because francophone B2B weights established proof earlier. Register is vous for enterprise, tu for the self-serve tier."' },
        { t: 'warn', v: 'Machine translation is now good enough to fool a monolingual manager and not good enough to sell. The failure mode is subtle: correct grammar, wrong register, dead rhythm, idioms translated literally. Always have a native speaker read for *register*, not just accuracy.' }
      ]
    },
    {
      id: 't3-plain', title: 'Plain language, load and accessibility',
      blocks: [
        { t: 'p', v: 'Plain language is not dumbing down. It is removing the tax the reader pays to extract your meaning. In service and UX writing it is also an accessibility and legal issue.' },
        { t: 'list', v: [
          '**Front-load.** Put the outcome first, the qualification second. Readers scan the first three words of a line and the first line of a paragraph.',
          '**One idea per sentence.** Two ideas need two sentences or a colon.',
          '**Vary sentence length deliberately.** Short-short-long creates rhythm; all-short reads staccato and all-long loses the thread.',
          '**Reading grade 6–9** for consumer copy and support content; grade 10–12 is acceptable for technical B2B audiences reading documentation.',
          '**Prefer the familiar word.** "Use" not "utilise", "help" not "facilitate", "buy" not "purchase" — unless the register demands otherwise.',
          '**Define jargon on first use or delete it.** Jargon signals membership to insiders and exclusion to everyone else. Know which you want.',
          '**Write for scanning:** meaningful subheads, short paragraphs, one bolded phrase per block maximum, lists for parallel items only.'
        ]},
        { t: 'formula', label: 'Cut test', expr: 'Cut any draft by 30%. If meaning survives, those words were rent-free tenants.',
          example: 'Run it on your own best paragraph. The 30% that dies is almost always adverbs, throat-clearing openers ("It is important to note that"), and restated points.' },
        { t: 'rubric',
          j: 'Writes what the company wants to say, then adds "you" to the front. Research is a Google search.',
          c: 'Mines reviews and tickets, uses customer language, passes the swap test, adjusts reading level by audience.',
          s: 'Runs a maintained message bank with frequency × intensity scoring, adapts across markets with annotated strategic rationale, and can name which internal stakeholder needs which framing.' }
      ]
    }
  ],
  artifact: {
    title: 'Voice-of-customer message bank + audience-first rewrite set',
    intro: 'This artefact is the one hiring managers ask to keep. Make it a real working document, not a slide.',
    steps: [
      { s: 'Build a 60-quote message bank with source, date, theme, frequency, intensity', guide: 'Sources must span at least three types (reviews, tickets/forums, search queries, calls). Sort by frequency × intensity. Highlight the top 8.' },
      { s: 'Write the audience-first diagnosis of one live page', guide: 'Apply all four tests: first-thought, so-what ladder, you/we ratio (give the actual count), swap test. Quote the failures.' },
      { s: 'Rewrite that page audience-first, same facts', guide: 'Show original and rewrite side by side. Annotate each change with the test it answers and the customer quote it borrows from.' },
      { s: 'Climb the ladder of abstraction for the three core features', guide: 'Five rungs each. Then state which rung the headline should occupy for each awareness level and why.' },
      { s: 'Define 3 segments by job + awareness + trigger', guide: 'No demographics unless they change a sentence. For each: the trigger event, the channel where you can reach them at that moment, and the one message they need.' },
      { s: 'Produce an annotated multi-market adaptation of one asset', guide: 'Side-by-side, with a rationale column: register choice, proof-norm shift, urgency handling, length constraint. If you write only one language, do a register shift instead (enterprise vs self-serve) with the same annotation discipline.' }
    ]
  }
}

];
