// Track 18 · Strategic Communications
// Frameworks attributed to originators; figures dated and sourced in-text.
export default [{
  id: 18, phase: 'Strategic comms', color: '--bl', roles: ['comms', 'cs', 'gtm', 'svc'],
  title: 'Strategic Communications',
  sub: 'Narrative, stakeholders, crisis, reputation',
  time: 'Study 4h · Artifact 6h',
  prereq: 'Tracks 4, 5 (positioning and messaging)',
  feeds: 'Feeds tracks 12, 13, 16, 17',
  sources: 'AMEC · Coombs (SCCT) · Mitchell/Agle/Wood · IAP2 · Prosci · CIPR · GCS · CDC CERC · PRSA · Edelman/Reuters Institute 2026',
  sections: [

    /* ── 1 ─────────────────────────────── */
    {
      id: 't18-what', title: 'What strategic communications actually is',
      blocks: [
        { t: 'p', v: 'Marketing sells a product to a buyer. Strategic communications manages the relationship between an organisation and every audience that can affect its licence to operate: employees, investors, regulators, media, communities, policymakers. Same craft, different stakes. A bad campaign costs money; a bad crisis response costs the company its permission.' },
        { t: 'plain', v: 'Think of it as three concentric jobs. The innermost is *what we say we are* (narrative). Around it, *how we behave when tested* (crisis, issues, disclosure). Around that, *who believes us and what they will do about it* (reputation, stakeholder support). Marketing lives inside the first ring. Communications owns all three.' },
        { t: 'h', v: 'The five artefacts that make up the function' },
        { t: 'table', head: ['Artefact', 'What it is', 'Who must be able to use it'],
          rows: [
            ['**Corporate narrative**', 'A sequence with tension: the change in the world, the stakes, the mechanism, the invitation', 'CEO, CFO, recruiters, sales, IR — in the same words'],
            ['**Messaging house**', 'A flat lookup table: one umbrella message, three pillars, quotable proof under each', 'Anyone writing anything, in any function or region'],
            ['**Comms strategy**', 'Objectives, audiences, insight, narrative, channels, sequencing, measurement', 'Non-communicators who must approve or fund it'],
            ['**Crisis and issues plan**', 'Pre-cleared lines, thresholds, spokespeople, approval path, statutory clocks', 'A duty officer at 3am, without you'],
            ['**Measurement model**', 'Objectives to impact, with the honest gaps named', 'Finance and the board']
          ]},
        { t: 'warn', lbl: 'The distinction seniors get asked about', v: 'A narrative is not a messaging house. The narrative is a sequence that holds tension and makes an argument; the house is a lookup table that prevents drift. Build a keynote out of pillars and you get three disconnected claims. Build a house out of a keynote and sales has nothing quotable. You need both, and you should be able to say why in one sentence.' },
        { t: 'h', v: 'Objectives ladder down, never up' },
        { t: 'p', v: 'The organisational objective comes first, and the communications objective is derived from it. Inventing a comms objective and retrofitting a business rationale is the single most common reason the function loses budget arguments. AMEC\'s Integrated Evaluation Framework makes the direction explicit, and Barcelona Principles V4.0 (June 2025) prohibits retro-fitting objectives around results outright.' },
        { t: 'formula', label: 'OASIS — UK Government Communication Service planning template', expr: 'Objectives → Audience/insight → Strategy/idea → Implementation → Scoring/evaluation',
          example: 'The most auditable public-sector planning structure available, and it transfers cleanly to corporate work. GCS guidance also recommends allocating a share of campaign resource to evaluation up front, which is the line item that always gets cut first and should not be.' },
        { t: 'case', title: 'The Page Society model', v: 'Arthur W. Page Society\'s *Building Belief* (2014) argues that "corporate character" — mission, values, culture, business model, strategy, operations, brand aligned into one identity — must be genuinely embodied before it is communicated, producing shared belief, then action, then advocacy. It is the strongest governing-body language available for the argument that the story has to be true of operations before it is said out loud.' },
        { t: 'key', v: 'The test of whether a narrative is real: the CFO uses it unprompted in the earnings script and the CHRO uses it in an offer letter. If finance, IR and the board deck each carry a different story, you wrote a brochure and the organisation still has three stories.' },
        { t: 'drill', v: [
          'Find your organisation\'s boilerplate. Rewrite the first 60 words as: the shift in the world, the stakes, the promised state, the mechanism, the proof. Then ask whether three competitors could sign the same paragraph.',
          'Write your current comms objective in the form "change X, among whom, by how much, by when". If you cannot name a baseline figure and the instrument that produced it, you have an activity, not an objective.',
          'List the five artefacts above. Which does your organisation actually have, and which are you assumed to have?'
        ]}
      ]
    },

    /* ── 2 ─────────────────────────────── */
    {
      id: 't18-narrative', title: 'Corporate and executive narrative',
      blocks: [
        { t: 'h', v: 'The five-beat narrative' },
        { t: 'p', v: 'Andy Raskin\'s reverse-engineering of the Zuora deck (2016) is the most usable public structure for a corporate narrative that has to work on investors, recruits and customers from the same script.' },
        { t: 'steps', v: [
          { n: 1, name: 'Name a change in the world', body: 'Big, relevant, and describable without your product. If you cannot name the shift without naming what you sell, you do not have a narrative yet.' },
          { n: 2, name: 'Show winners and losers', body: 'Stakes make the change matter. Without them the shift is trivia.' },
          { n: 3, name: 'Tease the promised state', body: 'What life looks like on the other side, before any product detail.' },
          { n: 4, name: 'Introduce capabilities as the way past specific obstacles', body: 'Features arrive as gifts for named problems, not as a list.' },
          { n: 5, name: 'Prove you can make it true', body: 'Customers who arrived, a mechanism that is demonstrable.' }
        ]},
        { t: 'ge', label: 'Narrative opening, used in the annual report, the all-hands and the recruiter script',
          good: '"Freight brokers still price a load by phone, because the data needed to quote it in real time has never sat in one place. It does now. The brokers using it are taking share from the ones who aren\'t, and we are the reason they can."',
          bad: '"We are a leading global provider of innovative, technology-enabled supply chain solutions that empower our customers to unlock value and drive sustainable growth."',
          why: 'The first names a change, the stakes and the mechanism in three sentences, and is falsifiable — which is what makes it arguable and therefore believable. The second is a category claim nine competitors could sign without editing, which is why nobody inside the company can repeat it from memory.' },
        { t: 'h', v: 'Structure for the documents executives actually read' },
        { t: 'list', v: [
          '**Minto\'s Pyramid Principle** (Barbara Minto, 1985): one governing point at the top, each level summarising the level below. Her **SCQ** introduction — Situation, Complication, Question — identifies the question already in the reader\'s head so you can answer it first. This is the fastest fix for a board paper or an all-hands that opens with context and never states the decision.',
          '**Duarte\'s Sparkline** (Nancy Duarte, *Resonate*, 2010): establish "what is", contrast "what could be", oscillate between them rather than resolving early, escalate to the call to action at the highest point of contrast. Diagnostic: plot emotion against time for your draft and look for a flat line.',
          '**Order the support by a logic you can name** — time, structure, or degree — never by the order in which you did the work.'
        ]},
        { t: 'h', v: 'Executive voice and ghostwriting' },
        { t: 'ge', label: 'Ghostwritten CEO post',
          good: '"I approved the per-seat pricing model we shipped in March. It cost us two enterprise renewals. What we got wrong was assuming mid-market buyers read per-seat pricing the way enterprise buyers do; they read it as a tax on adoption. Here is what we changed in July."',
          bad: '"In today\'s rapidly evolving business landscape, authentic leadership has never been more important. Here are three lessons on resilience I\'ve learned along the way."',
          why: 'The first could only be written by the person who signed the decision, carries a real cost, and is checkable against the record. The second is a genre rather than a voice — indistinguishable from content generated for any other executive in the sector.' },
        { t: 'warn', v: 'Never ghostwrite a register the executive cannot hold in unscripted Q&A. The gap surfaces three weeks later on a podcast, and the distance between the written executive and the spoken one is what audiences read as the real signal.' },
        { t: 'h', v: 'Investor-facing guardrails a communicator must not get wrong' },
        { t: 'p', v: 'If your organisation is listed, some of your copy is regulated text. Know these four and route anything near them through IR and counsel. Regimes and thresholds change, so verify the current position before relying on any summary, including this one.' },
        { t: 'list', v: [
          '**Regulation FD** (17 CFR 243.100–103, adopted August 2000, effective October 2000, still in force) is a binding rule, not guidance. It reaches "persons acting on behalf of an issuer", defined as any senior official **plus any other officer, employee or agent who regularly communicates with market professionals or securityholders** — which is how communications and IR staff fall inside it regardless of title. Intentional selective disclosure of material non-public information requires simultaneous public disclosure; unintentional disclosure requires prompt disclosure. The SEC\'s 2013 report on a Netflix CEO Facebook post also established that an officer\'s personal channel is unlikely to satisfy Reg FD without prior notice that it may be used for disclosure.',
          '**Non-GAAP prominence** (Item 10(e)(1)(i)(A) of Regulation S-K): the most directly comparable GAAP measure must be presented with equal or greater prominence. It reaches documents filed with the SEC **and** earnings releases furnished on Form 8-K. Leading a headline with adjusted EBITDA, or applying "record" only to the adjusted figure, is the pattern the SEC has treated as undue prominence.',
          '**PSLRA safe harbour** for forward-looking statements: an oral statement needs to be identified as forward-looking, accompanied by cautionary language on material risks, and to refer to a readily available, clearly identified written document. Boilerplate does not qualify.',
          '**Quiet periods** are voluntary policy, not law, and practice varies widely with no established norm — some companies start at quarter end, others two to three weeks out, and restrictions usually tighten as the date approaches. Reg FD governs how information is disseminated once shared selectively; it imposes no pre-earnings blackout. Know *your* policy before a trade reporter calls during results week.'
        ]},
        { t: 'case', title: 'AT&T, Reg FD (SEC action 2021, settled 2022)', v: 'The SEC alleged that in 2016 AT&T investor-relations staff disclosed internal smartphone sales data and its effect on revenue metrics to roughly twenty analysts on private calls so that analysts would lower forecasts. The matter settled with a $6.25m penalty, the largest in a Reg FD case, plus $25,000 from each of three IR executives. Reg FD risk sits with the people who talk to the street daily, not only the CEO and CFO.' },
        { t: 'case', title: 'ADT, non-GAAP prominence (settled SEC order, 26 December 2018)', v: 'ADT led an earnings release headline and highlights with adjusted EBITDA and adjusted EPS while GAAP showed a widening net loss, with the comparable GAAP figures several paragraphs down. The SEC entered a settled cease-and-desist order with a $100,000 civil penalty; ADT neither admitted nor denied the findings, as is standard in settled administrative proceedings. It is cited as the first action specifically on the equal-or-greater-prominence requirement. A comms lead who wins the argument for a punchier headline can create an enforcement matter.' },
        { t: 'ge', label: 'Earnings release headline, company reporting a GAAP net loss',
          good: '"Q3 revenue of $412.8 million, up 9 per cent; net loss of $18.2 million; adjusted EBITDA of $54.1 million"',
          bad: '"Record Quarter: Adjusted EBITDA Up 31 Per Cent to $54.1 Million on Continued Strong Momentum"',
          why: 'The second omits the comparable GAAP measure from the headline and applies "record" to a non-GAAP measure alone. That is the presentation pattern the SEC sanctioned in the ADT order.' },
        { t: 'h', v: 'Socialisation is not a cascade' },
        { t: 'p', v: 'A narrative sent down the manager chain as a deck produces attendance without conviction. Give managers the chance to argue with it and let them see something change because of their objection, or the old story returns within a quarter.' },
        { t: 'drill', v: [
          'Draft a 400-word CEO post about a decision that cost the company something, using only facts already public. Then write the three hardest follow-up questions a journalist would ask and check whether the post survives them.',
          'Take a mock earnings release that leads on adjusted EBITDA and rewrite it so GAAP has equal or greater prominence in both headline and highlights. Then write 90 seconds of prepared remarks with a compliant forward-looking-statement reference. Time yourself — this is the 5am version.',
          'Give a one-page message house to a sceptical account executive and to someone from IR separately. Each strikes every line they could not defend to their own audience. The pillar that collapses is the one your organisation does not yet believe.'
        ]}
      ]
    },

    /* ── 3 ─────────────────────────────── */
    {
      id: 't18-internal', title: 'Internal communications and change',
      blocks: [
        { t: 'p', v: 'Internal comms is the highest-trust channel most organisations own and the one most often run as a distribution list. In the 2026 Edelman Trust Barometer, "my employer" was the most trusted institution *it measures* — 78% among employed respondents, against 64% for business and 53% for government. Two caveats before you quote it: Edelman is a communications firm publishing its own annual study, and the comparison is not like-for-like — the 78% asks employees about their **own named employer**, while the business and government figures ask the general population about institutions in the abstract. Even discounted, that gap is an asset you can spend.' },
        { t: 'bench', title: 'The 2026 baseline (UK and global reporting)',
          v: [
            { m: 'Trust in "my employer"', val: '78%', note: '2026 Edelman Trust Barometer, 26th edition; ~34,000 respondents across 28 countries, fieldwork late 2025; among employed respondents' },
            { m: 'UK employees rating internal communication as excellent', val: '54%', note: 'IC Index 2026 — IoIC\'s fourth annual survey with Ipsos Karian & Box, ~5,000 employees at UK organisations of 500+, published May 2026; a nine-point fall in one year' },
            { m: 'Agree reasons behind change are clearly communicated', val: '49%', note: 'IC Index 2026 — down 7 points since 2023; separately, 49% feel they can share an opinion without fear of consequence' },
            { m: 'Time employees have for internal comms', val: '≤10 min/day', note: 'IC Index 2026' },
            { m: 'IC teams whose measurement is primarily outputs (page views, click-throughs)', val: '70%', note: 'Gallagher Employee Communications Report 2026, 1,300+ self-selected comms and HR practitioners; 16% measure outcomes such as sentiment, 12% track the tie to wider business activity' },
            { m: 'Manager comms capability seen as a risk', val: '87%', note: 'Gallagher 2026 — while only ~21% of organisations provide manager toolkits' },
            { m: 'Manager share of variance in TEAM engagement scores', val: '≥70%', note: 'Gallup estimate from its own regression analysis of 11,781 work teams using its proprietary Q12 instrument — not from the 27m-employee database often cited alongside it' }
          ],
          source: 'Figures as reported in 2026 by Edelman, the Institute of Internal Communication, Gallagher and Gallup. Directional, and worth re-checking before quoting in an interview.' },
        { t: 'h', v: 'The preferred sender rule' },
        { t: 'p', v: 'Prosci\'s benchmarking finding is the most operationally useful thing in change comms: **business messages come from the most senior leader** (why this, why now, the risk of not changing) and **personal-impact messages come from the immediate supervisor** (what this means for me and my team). Swap the senders and a CEO explaining personal impact reads as detached while a supervisor explaining strategy reads as unauthorised. Brief and equip supervisors *before* the senior announcement — that is the deadline most plans miss.' },
        { t: 'h', v: 'Three change models, and what each is for' },
        { t: 'table', head: ['Model', 'Originator', 'What it tells you', 'Where comms fits'],
          rows: [
            ['**8 Steps / Accelerators**', 'John Kotter, *Leading Change* (1996); revised as Accelerators (2014)', 'What *leadership* must do to move an organisation', 'Urgency framing, vision articulation, recruiting volunteers, making early wins visible. It is not a publishing plan'],
            ['**ADKAR**', 'Jeff Hiatt / Prosci', 'Where a specific person or group is stuck', 'Comms owns Awareness and Reinforcement; managers own Desire; L&D owns Knowledge and Ability'],
            ['**Transition Model**', 'William Bridges, *Managing Transitions*', 'Why behaviour has not moved after a correct announcement', 'Endings needs its own messaging; the Neutral Zone needs frequent low-drama updates, not silence']
          ]},
        { t: 'warn', v: 'Pushing everyone to the same ADKAR stage at once is the most common sequencing error. Sending Knowledge-stage training invitations to people with no Awareness reads as pressure, produces the "why are we doing this again" backlash, and then gets labelled resistance — when it was your sequencing.' },
        { t: 'ge', label: 'Opening lines of an all-staff email announcing 340 role cuts',
          good: '"We are cutting 340 roles, about 8 per cent of the company. If your role is affected, you will have a one-to-one with your manager and an HR partner between 10am and 2pm today. Everyone will have an email confirming their position by 3pm, either way."',
          bad: '"As we continue to evolve our operating model to better serve our customers in a rapidly changing market, we are making some difficult decisions that will impact the shape of our organisation going forward."',
          why: 'The number, and the time at which uncertainty ends, are the only two things the reader is looking for. Withholding the number does not soften the news; it extends the window in which the whole organisation stops working and starts speculating — and that window is where leaks happen.' },
        { t: 'ge', label: 'A line in a manager briefing pack, for the question managers will definitely be asked',
          good: '"If someone asks whether more cuts are coming: I don\'t know, and I\'m not going to guess. What I can tell you is that no further reductions are approved for this financial year, and if that changes you will hear it from me within 24 hours of me knowing."',
          bad: '"If asked about future headcount reductions, reassure the team that the company is well positioned for growth and remains committed to investing in its people."',
          why: 'The first is a sentence a manager can actually say out loud, survives a screenshot, and commits only to something the manager controls. The second asks a manager to make a promise they cannot keep — and the first time it breaks you have burned the most trusted channel you have.' },
        { t: 'case', title: 'Airbnb, May 2020', v: 'Brian Chesky\'s message announcing 1,900 role reductions (~25% of staff) was published on the company newsroom the same day it went to employees. It explained how the decision was reached and how people were selected, then set out severance, twelve months of US health cover and placement support. It works because it answers process questions before sentiment questions, and because it was written for a public audience from the first draft. Note the limits before copying it: an external cause, cash to fund severance, and no contested selection criteria.' },
        { t: 'case', title: 'Better.com, December 2021', v: 'Roughly 900 employees were told on a three-minute group Zoom call that their employment had ended. A recording was on TikTok within hours. The channel is part of the message, and it is the part that gets quoted. Plan any layoff moment held on video on the assumption it will be replayed.' },
        { t: 'key', v: 'Anything internal is external. Write every all-hands sentence so it reads the same in a trade publication as it did in the room. For a listed company an unguarded revenue comment in a town hall is a Regulation FD problem, not only a reputational one.' },
        { t: 'h', v: 'Listening you can afford to act on' },
        { t: 'p', v: 'Set survey cadence by your decision capacity, not your platform\'s capability. What looks like survey fatigue is usually lack-of-action fatigue: two or three unactioned cycles and the response rate is gone. Publish what changed *and* what you asked for and are not doing, with the reason — naming the refusals is what makes the rest believable.' },
        { t: 'ge', label: 'Follow-up after a pulse survey',
          good: '"In March, 61 per cent of you said you cannot get a pricing exception decided inside a week. From 1 June, any exception under £5,000 is your regional lead\'s call, no central sign-off. Two things you asked for that we are not doing this year, and why: …"',
          bad: '"Thank you for your candid feedback. We heard you loud and clear. Leadership is reviewing the themes and we will share more in the coming months."',
          why: 'The second sentence is the one that produces lack-of-action fatigue, and the cost arrives next cycle as a collapsed response rate you will be asked to explain.' },
        { t: 'drill', v: [
          'Rewrite the first 60 words of a real leadership email so they would read identically if a journalist published them verbatim. List every sentence you deleted and what fear made you draft it.',
          'Build a one-page manager pack for a change in flight: three things to say in their own words, three questions they will be asked with survivable answers, one thing not to say and why, and the date the conversation must have happened by. Have a real line manager read it aloud and cut every phrase they stumble over.',
          'Write two versions of a restructure announcement: the one you would send on announcement day, and the one you would send at 7am after 40 per cent of it leaked overnight. For each fact you held back, decide whether the delay protected employees, a legal position, or leadership from discomfort.'
        ]}
      ]
    },

    /* ── 4 ─────────────────────────────── */
    {
      id: 't18-stakeholders', title: 'Stakeholders, reputation and public affairs',
      blocks: [
        { t: 'h', v: 'Two mapping tools that answer different questions' },
        { t: 'table', head: ['Tool', 'Origin', 'Answers', 'Blind spot'],
          rows: [
            ['**Power-interest grid**', 'A. L. Mendelow (1981)', 'Who can hurt you on *this* decision', 'Under-weights low-power groups with strong legitimacy — exactly the group that later arrives with an NGO or regulator attached'],
            ['**Salience model** (power, legitimacy, urgency)', 'Mitchell, Agle & Wood (1997)', 'Why a group with no formal standing deserves budget', 'Tells you who counts, not what to do about them']
          ]},
        { t: 'list', v: [
          'Redraw the grid **per issue**. It is not an organisational asset pinned to a wall; it expires the moment power shifts.',
          'Score power on evidence — veto rights, licence conditions, budget control, litigation capacity — not on seniority.',
          'Write the **trigger list**: the specific events that would move someone between quadrants, then rebuild when one fires.',
          'The most common surprise in public affairs: a *dependent* stakeholder (legitimacy plus urgency, no power) becomes *definitive* by acquiring a powerful ally. Name who that would be, in advance.',
          'A salience map records whose perception you used, so it doubles as an audit of your own leadership\'s blind spots.'
        ]},
        { t: 'h', v: 'Be honest about how much power you are giving away' },
        { t: 'p', v: 'The **IAP2 Spectrum of Public Participation** runs Inform → Consult → Involve → Collaborate → Empower, and each level carries a *promise* to the public. The promise column is the binding half. Sherry Arnstein\'s **Ladder of Citizen Participation** (1969) is the blunter internal diagnostic: her bottom rungs are manipulation and therapy, and her argument is that participation without redistribution of power is an empty ritual.' },
        { t: 'ge', label: 'Opening statement at a community session where the site is fixed by licence',
          good: '"We will hold four sessions before we submit. We cannot change the site, which is fixed by our licence, and we will not pretend otherwise. We can change the access route, the operating hours and the boundary landscaping. By 30 October we will publish a table showing every comment, what we changed because of it, and what we rejected and why."',
          bad: '"We are committed to working in partnership with the community to co-create a solution that works for everyone."',
          why: 'The second promises Collaborate while delivering Inform on the decision that matters. When the fixed site surfaces in session two, the grievance is no longer about the plant — it is about being misled, and that grievance recruits allies, regulators and journalists who had no view on the plant.' },
        { t: 'key', v: 'AA1000SES (AccountAbility) demands a **responsiveness record**: what input arrived, what changed because of it, what was rejected and why. Most engagement programmes can prove they listened and cannot prove anything changed. The record is the deliverable that survives an assurance review or an allegation of sham consultation.' },
        { t: 'h', v: 'Reputation as a measurable thing' },
        { t: 'p', v: 'RepTrak\'s structure (developed from Fombrun\'s Reputation Quotient) separates **Think** — seven rational drivers: products and services, innovation, workplace, conduct, citizenship, leadership, performance — from **Feel**, an emotional composite, and **Do**, the supportive behaviours stakeholders will actually take. Read the driver deltas, not the headline score: the driver tells you which belief moved and therefore which intervention exists.' },
        { t: 'ge', label: 'Reporting reputation to a board',
          good: '"The Conduct driver fell four points among institutional investors this wave, while Products and Services held. The behavioural consequence is a three-point drop in willingness to give benefit of the doubt. Here is the intervention that addresses Conduct specifically."',
          bad: '"We achieved 68 per cent share of voice this quarter, well ahead of the competitive set."',
          why: 'Volume describes coverage; driver scores describe which belief moved, in which stakeholder group, and whether a behaviour changed. A 68 per cent share-of-voice figure also usually means the outlet set or search string was drawn to flatter — any senior stakeholder who has seen this before will assume so.' },
        { t: 'h', v: 'Issues management: the stage where you still have options' },
        { t: 'p', v: 'The **Chase-Jones** process model (1977) — identification, analysis, change-strategy options, action programme, evaluation — exists to force an explicit posture choice (reactive, adaptive, dynamic) while adaptive options remain. Once a bill is drafted you are reactive whether you chose it or not. The distinguishing test against crisis management: is the outcome still open?' },
        { t: 'warn', v: 'Running issues management as a monthly watchlist with no named owner, no escalation threshold and no authority to change organisational behaviour is surveillance, not issues management. It will hand you a crisis it accurately predicted.' },
        { t: 'h', v: 'Environmental, social and DEI claims: where copy meets law' },
        { t: 'p', v: 'This is the fastest-moving legal surface a communicator touches, and the rule is to separate law from guidance and to date both in every brief. Positions as of mid-2026:' },
        { t: 'list', v: [
          '**EU Empowering Consumers Directive (EU) 2024/825** applies from 27 September 2026 and prohibits unsubstantiated environmental claims, including neutrality claims based on offsetting, and sustainability labels not based on an approved certification scheme. No amount of hedging copy rescues a blacklisted claim — the only fix is deletion.',
          '**EU Green Claims Directive proposal** is *not* law: the Commission signalled intention to withdraw in June 2025 and its status has remained contested. Do not cite it as a requirement.',
          '**UK CMA Green Claims Code** (2021) is guidance with six principles — truthful and accurate, clear and unambiguous, no omission of important information, fair comparisons, full life-cycle consideration, substantiated — while enforcement powers have moved on under the DMCC Act 2024.',
          '**FTC Green Guides** (16 CFR Part 260) are interpretive guidance on Section 5, not an independently enforceable rule; the 2012 edition remained operative through 2026 despite a proposed revision.',
          '**FTC Consumer Reviews and Testimonials Rule** (16 CFR Part 465, effective October 2024) prohibits fake or AI-generated reviews, undisclosed insider reviews, suppressing negative reviews by legal threat, and buying fake influence indicators.',
          '**Greenhushing is not a safe harbour.** Dropping a claim while keeping the target invites investors and NGOs to ask whether the target was ever real, and the withdrawal is itself discoverable.'
        ]},
        { t: 'ge', label: 'Recycled-content claim for the EU market, drafted for publication after 27 September 2026',
          good: '"This bottle is made from 70% recycled PET, verified by [certification body] in March 2026. The cap and label are not recycled. Whether the bottle can be recycled depends on your local collection scheme."',
          bad: '"Climate neutral. We offset 100% of this product\'s emissions, so you can shop with a clear conscience."',
          why: 'Offset-based neutrality claims are blacklisted under the Empowering Consumers Directive, and "clear conscience" is a generic environmental claim with no demonstrated performance behind it. The compliant version is quantified, scoped, dated, verified and explicitly bounded. Note what marketing loses: the word neutral, the number 100, and the emotional close. That trade is the point of the review.' },
        { t: 'case', title: 'KLM (Amsterdam District Court, March 2024)', v: 'The court found 15 of 19 KLM marketing statements misleading: vague environmental benefit claims without explaining how, a product implying customers could fully neutralise emissions, and an overly optimistic picture of sustainable aviation fuel. No injunction was granted because KLM had already stopped using the statements — but withdrawing a claim avoids the remedy, not the finding, and the finding is the durable asset for every later regulator, litigant and journalist.' },
        { t: 'case', title: 'DWS / SEC (September 2023)', v: 'A $19m penalty on the ESG charge (part of a $25m settlement) for materially misleading statements about the controls used to incorporate ESG factors into investment research. The exposure was the distance between a marketed *process* and the controls that actually existed. Any external claim about "how we assess" or "how we govern" needs a documented control that an internal dissenter could not credibly contradict — and assume the person best placed to contradict you is a former employee with the documents.' },
        { t: 'p', v: 'On DEI language: among S&P 500 companies the share referencing DEI terminology fell sharply through 2025–2026, but the EEOC has warned that programmes bearing other labels can still raise Title VII issues. The 2026 drafting question is not whether to keep the acronym; it is whether the mechanism you describe allocates opportunity by protected characteristic. Describe widening the pool and disclosing outcomes rather than publishing a decision rule.' },
        { t: 'h', v: 'Talking to regulators' },
        { t: 'ge', label: 'Covering note on a response to a regulator\'s information request, after finding a reporting error',
          good: '"Attached is the full 2024–25 dataset. It includes 31 incidents previously reported as two aggregated events. We reclassified them on 12 May 2026 after identifying an error in our threshold logic, described in Annex A. Annex B sets out remediation with dates and owners, and the three points where we disagree with paragraph 14 of your draft interpretation, with evidence."',
          bad: '"We take our regulatory obligations extremely seriously and are fully committed to working collaboratively with the Authority to resolve this matter as quickly as possible."',
          why: 'Regulators read for admissibility, jurisdiction, precedent and the cost of defending a decision to their own oversight. The first gives corrected primary data, a dated admission and narrow adjudicable disagreements. The second contains no facts and reads as positioning, which pushes a regulator from resolving toward compelling. Cooperation is demonstrated by what you hand over, not by asserting it.' },
        { t: 'drill', v: [
          'Take one live decision. Build a Mendelow grid and a salience classification over the same twelve named stakeholders. Write one page on where the two tools disagree and which you would put in front of your CEO.',
          'Pick one environmental claim your organisation publishes. Reconstruct the substantiation file that would have to exist: boundary, baseline, methodology, third-party verification and date, excluded life-cycle stages. Then rewrite the claim to survive the 2026 rules, and note in two lines exactly what marketing loses.',
          'Write two 400-word regulator submissions: yours and the one legal would send. Highlight every sentence that gives the reader something to act on and delete every sentence that only signals cooperation. Report the ratio before and after.'
        ]}
      ]
    },

    /* ── 5 ─────────────────────────────── */
    {
      id: 't18-crisis', title: 'Crisis and issues communication',
      blocks: [
        { t: 'p', v: 'Crisis communication is the part of this curriculum where being wrong is most expensive and where structure most reliably beats instinct. Learn the classification first, because the classification dictates the sentence.' },
        { t: 'h', v: 'Situational Crisis Communication Theory (Coombs)' },
        { t: 'steps', v: [
          { n: 1, name: 'Publish instructing and adjusting information first', body: 'What people must do to be safe, and what is being done. Both precede any reputation work.' },
          { n: 2, name: 'Assign the crisis to a cluster', body: 'Victim (natural disaster, rumour, tampering) · accidental (technical error) · preventable (human error, organisational misdeed).' },
          { n: 3, name: 'Score the two intensifiers', body: 'History of similar crises, and existing relational reputation. Either one moves the audience\'s attribution a cluster harsher than the facts warrant.' },
          { n: 4, name: 'Match the primary strategy to the attribution', body: 'Deny (only where you carry no responsibility) · diminish, via excuse or justification (accidental) · rebuild, via compensation and apology (preventable).' },
          { n: 5, name: 'Use bolstering only as a supplement', body: 'Reminder, ingratiation and victimage support a primary strategy. Used as the whole response they are associated with the worst outcomes.' },
          { n: 6, name: 'Re-run the classification as facts land', body: 'An accidental crisis becomes preventable the moment a prior internal warning surfaces, and the posture must move with it.' }
        ]},
        { t: 'key', lbl: 'The rule that prevents the worst mistake', v: 'Kim, Ferrin, Cooper & Dirks (2004): for **competence**-based violations, apology repairs trust better than denial. For **integrity**-based violations, denial repairs trust better than apology. Apologising reflexively on a contestable integrity allegation converts it into a settled admission — and once a breach is attributed to integrity, later displays of repentance are weighted less than the original act, so the misclassification is close to unrecoverable.' },
        { t: 'h', v: 'The first hour has one job' },
        { t: 'p', v: 'The holding statement timestamps your awareness, expresses concern, and commits to a next-update time. It carries no cause, no scope estimate and no reassurance. CIPR\'s 2024 guidance notes the "golden hour" has collapsed — the working target is a response within about 15 minutes, then a pulse of updates — with acknowledgement in the first 1–2 hours, fact-finding and legal consultation at 2–4 hours, and the substantive public statement between 4 and 24 hours.' },
        { t: 'code', label: 'Holding statement — CIPR\'s published example', v: `We are aware of the situation regarding [issue] and are looking into it
immediately. We will provide an update shortly once we have established the
facts. In the meantime our thoughts are with all those who are/may be affected.` },
        { t: 'ge', label: 'Suspected data breach, 45 minutes in, scope unknown, statutory clock possibly running',
          good: '"At approximately 06:20 UTC today we identified unauthorised access to one of our systems. We isolated that system at 06:35 and have engaged external forensic specialists. We do not yet know which data was accessed or how many people are affected. We have begun notifying the relevant regulators. We will publish our next update by 12:00 UTC whether or not we have more to report, and you do not need to take any action yet."',
          bad: '"We take the security of our customers\' data extremely seriously. A limited number of records may have been involved in a highly sophisticated attack by a determined threat actor. There is currently no evidence that any customer data has been misused."',
          why: 'The first gives verifiable timestamps, names the unknowns, promises a specific next update, and tells people there is nothing to do yet. In the second, "sophisticated" and "determined threat actor" are evasion of responsibility by defeasibility, and "limited number" plus "no evidence of misuse" are both claims you will be forced to retract. Each retraction resets the crisis clock.' },
        { t: 'h', v: 'The CDC\'s six CERC principles — the fastest audit for any crisis draft' },
        { t: 'list', v: [
          '**Be first** — if the information is yours to give, give it; if you cannot, explain how you are working to get it.',
          '**Be right** — facts in increments: what you know, what you do not, when you will know more.',
          '**Be credible** — do not withhold to avoid embarrassment. Uncertainty is worse than not knowing.',
          '**Express empathy** — acknowledge in words what people are feeling.',
          '**Promote action** — give people something to do; it reduces anxiety and restores order.',
          '**Show respect** — treat people the way you would want your own family treated.'
        ]},
        { t: 'h', v: 'The apology, when you have decided one is warranted' },
        { t: 'p', v: 'Lewicki, Polin & Lount (2016) tested six components. **Acknowledgement of responsibility** was the most effective, **offer of repair** second; expression of regret, explanation and declaration of repentance clustered third; **request for forgiveness** was least effective and is the one to cut.' },
        { t: 'ge', label: 'Apology where cause is understood and you control the remedy',
          good: '"We got this wrong. The decision was mine and I signed it off. Every affected customer will be refunded in full by Friday, and we have changed the approval process so a single manager can no longer authorise this alone. I am sorry."',
          bad: '"Mistakes were made and we regret that some of our customers felt let down by this experience. We are committed to doing better, we are listening carefully, and we will learn from this as an organisation."',
          why: 'The first leads with responsibility in the first person then offers dated repair — the top two components. The second uses passive voice to remove the agent, relocates the harm into the customer\'s feelings, and offers no repair at all.' },
        { t: 'h', v: 'Statutory clocks a communicator must know exist' },
        { t: 'table', head: ['Regime', 'Clock', 'The trap'],
          rows: [
            ['**GDPR Art. 33**', 'Notify the supervisory authority without undue delay and where feasible within 72 hours of becoming aware', 'Your public statement must not contradict the filing'],
            ['**NIS2 Art. 23**', 'Early warning within 24 hours, notification within 72 hours, final report within one month', 'Also requires notifying service recipients without undue delay'],
            ['**SEC Form 8-K Item 1.05**', 'Four business days from the **materiality determination**, not from discovery', 'Plans routinely say "four days from discovery" — that is wrong, and even specialist guides have misstated it. The determination itself must be made without unreasonable delay, and immaterial incidents belong under Item 8.01']
          ]},
        { t: 'warn', v: 'Two operational failures that no template prevents: nobody holds CMS credentials for the dark site at 03:00 on a Sunday, and legal clearance takes two days for a statement designed to ship in fifteen minutes. Test the approval path under clock, not the document library.' },
        { t: 'h', v: 'Who fronts it' },
        { t: 'p', v: 'Defaulting to the CEO sets the perceived magnitude of the crisis, makes the CEO personally the story, and spends your highest-authority voice at the moment you have the least information. Use a technically credible operational voice first, and reserve the CEO for the moment you can pair responsibility with repair.' },
        { t: 'h', v: 'Recovery takes longer than coverage' },
        { t: 'p', v: 'SenateSHJ\'s Crisis Index 300 (2025), covering more than 300 listed-company crises across 27 exchanges, reported an average 35.2% share-price fall and more than 425 days on average to return to pre-crisis levels, with 121 companies never recovering and 33 delisting. Media volume falls within days. If you have no pre-crisis baseline for trust, churn or purchase intent, you cannot claim recovery — only quiet.' },
        { t: 'key', v: 'Stealing thunder (Arpan & Roskos-Ewoldsen, 2005, replicated since): self-disclosing bad news before a journalist or third party finds it raises credibility and lowers perceived severity relative to being exposed. State facts and scale plainly, say what you are doing and by when, and take questions in the same cycle.' },
        { t: 'drill', v: [
          'Classification drill: take ten real allegations in your sector from the last year. Classify the SCCT cluster and whether the trust violation is competence- or integrity-based, then write the single sentence the classification dictates. Score how often you defaulted to apology regardless.',
          'Fifteen-minute holding statement under legal constraint: given an unverified cause and an active notification clock, produce a publishable statement that names what you do not know, commits to a specific next-update time, contains no admission of liability, and does not pre-empt the filing. Have a lawyer red-line it against the same clock. The output is the measured approval time and the list of phrases legal struck.',
          'Stealing-thunder memo: pick one genuine known-unknown a journalist could surface within 90 days. Argue both sides in one page, name who actually owns the decision, and take it to them.',
          'Recovery baseline audit: write down the three metrics you would be judged on for eighteen months after a crisis, then try to pull today\'s and last year\'s values. Anything you cannot retrieve in a working day is a metric you cannot claim recovery against.'
        ]}
      ]
    },

    /* ── 6 ─────────────────────────────── */
    {
      id: 't18-media', title: 'Media relations and spokesperson craft',
      blocks: [
        { t: 'bench', title: 'What journalists report wanting (2026)',
          v: [
            { m: 'Journalists relying on PR-provided material for story ideas', val: '66%', note: 'Cision 2026 State of the Media, 1,899 journalists' },
            { m: 'Say fewer than a quarter of pitches are relevant', val: '72%', note: 'Cision 2026; most receive 50+ pitches a week' },
            { m: 'Prefer email contact', val: '97%', note: 'Cision 2026; ~53% object to AI-generated pitches' },
            { m: 'Discard a pitch that misses their beat', val: '88%', note: 'Muck Rack State of Journalism 2026, 897 journalists' },
            { m: 'Typical pitch response rate', val: '~3%', note: 'Propel Media Barometer; highest on pitches of 50–150 words' },
            { m: 'Podcast pitch response rate', val: 'several× higher', note: 'Propel reported ~15% in a quarter when overall was ~3%' },
            { m: 'Get news from individual creators or influencers', val: '27%', note: 'Reuters Institute Digital News Report 2026, 48 markets' }
          ],
          source: 'Vendor and institute surveys, 2026. Self-reported preferences, so treat as direction rather than law.' },
        { t: 'h', v: 'The message triangle' },
        { t: 'p', v: 'Three key messages, each with credible proof compressed into something the spokesperson can say from memory. The cap of three is the point: a brief with eleven messages produces a spokesperson who recites, and reciting is what makes an interview clip look evasive. Juniors add messages to satisfy internal stakeholders; seniors negotiate messages out and take the internal fight instead of the on-air one.' },
        { t: 'ge', label: 'Cold pitch to a reporter who covered your topic eleven days ago',
          good: 'Subject: "Data: 8.4% of July card disputes were synthetic-voice fraud"\n\n"Your 3 August piece said banks are still filing voice-clone losses as authorised payments. We handle dispute resolution for 40 UK challenger banks. In July, 8.4% of the 210,000 disputes we processed were flagged as synthetic voice, up from 2.1% in January. Methodology and the raw monthly table are attached. Dan Okoye, our head of fraud operations, can talk today at 30 minutes\' notice, and he will say on the record that the current dispute categories are wrong."',
          bad: 'Subject: "EXCLUSIVE: Leading Innovator in AI-Powered Fraud Prevention Announces Groundbreaking New Platform"\n\n"Hi there, I hope this email finds you well! As fraud continues to evolve in today\'s fast-paced digital landscape, our CEO is available to discuss the future of fraud prevention and share his thought leadership."',
          why: 'The first proves the beat with a dated byline, leads with a number the reporter cannot get elsewhere, ships methodology unasked, names the spokesperson and states what he will actually say — under 150 words, the band where response rates are highest. The second is a mass release mislabelled as an exclusive and offers commentary rather than news.' },
        { t: 'h', v: 'Embargo and exclusive mechanics' },
        { t: 'list', v: [
          'An **embargo is an agreement**. It binds only reporters who accepted it *before* receiving the material. Writing "EMBARGOED" across a full release with the data attached means you handed over the news and retained no claim on timing.',
          'Offer it, state date, time and time zone, and give a clean way to decline: "if you would rather not be bound, say so and I will send it Thursday with everyone else."',
          'An **exclusive** is a genuine trade — most reporters say they are more likely to cover a story offered exclusively — so decide in advance what you are giving up and to whom.',
          'For listed issuers, treat an embargoed release, a briefing and an exclusive as **disclosure events**, not favours. Regulation FD does not care that it felt like relationship-building.'
        ]},
        { t: 'h', v: 'Bridging only works after acknowledgement' },
        { t: 'ge', label: 'Broadcast interview; the hostile premise is factually correct',
          good: '"That figure is right, and it is the reason we changed the escalation policy in March. Complaints went from 1,100 to 1,540 over the year. Since March, median resolution time is down from 21 days to 9, and we now write to every customer within 48 hours. I would rather be judged on the next two quarters than argue about the last one."',
          bad: '"Well, I think the more important question here is the broader industry context, and what we are really seeing across the sector is a general increase in customer awareness…"',
          why: 'The first concedes the number, supplies it so the reporter does not have to source it hostilely, then bridges to verifiable change with dates. The second blocks without acknowledging and hands over the clip captioned "deflected when asked about the rise".' },
        { t: 'ge', label: 'A reporter calls about an investigation you genuinely cannot discuss',
          good: '"I cannot go into the substance while the investigation is open, and here is why: anything I say now could prejudice it. Here is what I can give you. We self-reported on 14 June. We have suspended the two accounts involved. The findings will be published, and when they are I will call you before anyone else. I will send the timeline in writing in ten minutes."',
          bad: '"No comment." Or: "We don\'t comment on speculation, and we would question the framing of your question."',
          why: 'CDC crisis guidance is explicit that a spokesperson should not answer "no comment" but should say what cannot be discussed and why. The first gives a reason for the limit, three usable on-record facts and a future commitment, so the story does not carry "declined to comment" — which most readers score as an admission.' },
        { t: 'h', v: 'The attribution ladder' },
        { t: 'p', v: 'Per the AP\'s news values, adopted almost verbatim in newsroom codes: **on the record** (usable, named); **background** (publishable under negotiated conditions, typically a described role); **deep background** (usable with no attribution); **off the record** (not publishable at all). Negotiate the level explicitly *before* speaking, because it cannot be applied retroactively and the reporter decides whether to accept it at all. An executive who says "between us" mid-answer has already spoken on the record.' },
        { t: 'warn', v: 'Media lists decay faster than teams refresh them. Press Gazette tracked at least 3,434 journalism job cuts across the UK and US in 2025 with thousands more in 2026. Treat any contact not verified against a byline in the last 90 days as unverified, and expect beats to be merged rather than backfilled.' },
        { t: 'p', v: 'Pitching creators and podcasts is a different craft: a host is booking 45 minutes of talent, not filing 600 words. A pitch that leads with a company announcement rather than a guest who can carry a conversation fails on its own terms.' },
        { t: 'drill', v: [
          'List autopsy: take your top 40 contacts, find each one\'s three most recent published items, delete anyone with nothing in 90 days, and write one sentence per survivor on what they personally cover that outlet-level targeting would miss.',
          'Bridge under fire: write ten hostile questions including three where the premise is factually correct. Record 60-second answers on video with no notes. Score each on four points — did you acknowledge, did you concede what was true, did you land one of three messages, did you speculate. Re-record anything under three.',
          'Embargo negotiation, both sides: draft the four-sentence opt-in note, then have a colleague play a reporter who takes the material and refuses the embargo. Rewrite your plan for that outcome.'
        ]}
      ]
    },

    /* ── 7 ─────────────────────────────── */
    {
      id: 't18-measure', title: 'Measurement, evaluation and the AVE problem',
      blocks: [
        { t: 'p', v: 'Communications measurement has a governing body, a standard and a taxonomy. Knowing them by name and version is a fast credibility signal, because most practitioners do not: in Muck Rack\'s State of PR Measurement 2025 (832 professionals), 61% followed no formal framework and only about 11% used an established standard.' },
        { t: 'h', v: 'The AMEC Integrated Evaluation Framework' },
        { t: 'steps', v: [
          { n: 1, name: 'Objectives', body: 'The organisational objective first, then the communication objective derived from it.' },
          { n: 2, name: 'Inputs', body: 'Budget, people, formative research, and the evaluation design agreed before launch.' },
          { n: 3, name: 'Activities', body: 'What you plan and produce.' },
          { n: 4, name: 'Outputs', body: 'What you put out and who it reached.' },
          { n: 5, name: 'Out-takes', body: 'What audiences took away: attention, awareness, understanding, consideration.' },
          { n: 6, name: 'Outcomes', body: 'Effects: knowledge, attitude, trust, preference, intention, advocacy, behaviour.' },
          { n: 7, name: 'Impact', body: 'The organisational, stakeholder or societal result, which loops back to the objective.' }
        ]},
        { t: 'key', lbl: 'Barcelona Principles V4.0 · June 2025', v: 'The current version is **4.0**, published June 2025 and launched at AMEC\'s Global Summit in Vienna — the fourth iteration since the 2010 Barcelona Declaration. Two changes worth knowing: Principle 1 now specifies **SMARTER** objectives (adding **Evaluated** and **Reviewed**) and explicitly prohibits retro-fitting objectives around results; Principle 5 was rewritten from "AVEs are not the value of communication" to "invalid measures such as AVEs **should not be used**; instead measure the contribution of communication by its outcome and impact."' },
        { t: 'table', head: ['#', 'Barcelona Principle V4.0 (June 2025)'],
          rows: [
            ['1', 'Setting clear, measurable objectives is a prerequisite for planning, measurement and evaluation'],
            ['2', 'Defining and understanding all stakeholder audiences is essential'],
            ['3', 'Measurement and evaluation should be applied to all relevant channels'],
            ['4', 'Effective measurement requires both qualitative and quantitative analysis'],
            ['5', 'Invalid measures such as AVEs should not be used; measure contribution by outcome and impact'],
            ['6', 'Report outputs, outcomes and impact related to the organisation and its stakeholders'],
            ['7', 'Ethics, governance and transparency with data, methodologies and technology build trust']
          ]},
        { t: 'h', v: 'Why AVE will not die, and how to kill it locally' },
        { t: 'p', v: 'Advertising Value Equivalency has no agreed methodology, uses rate-card rather than actual prices, ignores quality, audience and objectives, and its base index declines year on year so identical performance scores lower. Rejection is cross-body, not AMEC-only. Watch for the aliases, which is how it gets back in: **EMV** (earned media value), PRV, ACE, ASR, EAV, EVR, MAV. EMV is the one that slips through, because it arrives from a paid-media colleague or a platform default rather than a monitoring vendor.' },
        { t: 'key', v: 'The transferable lesson from AMEC\'s campaign: the metric survived twenty years of argument and started dying when pressure moved to **procurement, awards eligibility and product defaults** — members may not supply AVEs as a sole measure or in any award entry. As an in-house lead, change what the reporting template and the agency contract permit rather than trying to win the argument on merits in a meeting.' },
        { t: 'h', v: 'The substitution error' },
        { t: 'p', v: 'Named by Cutlip, Center and Broom in 1985 and still spelled out in V4.0: media volume and tone do not equate to an effect on the audience. A junior commits it by accident; a senior commits it under deadline because nobody commissioned outcome data in January, so output data has to do a job it cannot do. Note also that V4.0 corrects a popular misreading — the guidance has never been "outcomes instead of outputs"; credible measurement includes both, and dropping output reporting removes the diagnostic layer that explains *why* an outcome moved.' },
        { t: 'h', v: 'Sentiment: know the error bar before you trend it' },
        { t: 'p', v: 'In a validated test of three-way sentiment classification (van Atteveldt, van der Velden & Boukes, 2021), a single trained human coder reached about 82% accuracy and a three-coder majority about 88%, while the best machine-learning model reached about 63% and off-the-shelf dictionaries 39–50%. A quarter-on-quarter shift of a few points is therefore inside the noise. Report the method, the sample and the measured agreement, and refuse to trend across a tool change.' },
        { t: 'formula', label: 'Message Delivery Score (Michaelson, Stacks & Clark, 2017)', expr: 'Score A = p × 100 ÷ (p + o)   ·   Score C = (p − n) × 100 ÷ (p + o)',
          example: 'p = intended messages present, o = relevant messages omitted, n = negative or erroneous messages present. Use A or C; the authors\' own validity test found the variant that puts negatives only in the denominator performs worse. This turns "key message pull-through" from an opinion into a metric with a stated formula and range.' },
        { t: 'ge', label: 'Attribution on an executive one-pager',
          good: '"Trial sign-ups ran 1,900 above the preceding eight-week baseline in the four markets that received the campaign, and were flat in the two matched control markets. Paid search and promotional pricing were unchanged across all six. On that basis we attribute roughly 1,900 sign-ups to earned and owned activity. Caveat: a competitor recall broke in Market 3 in week five; excluding it gives 1,400."',
          bad: '"The campaign generated 340 million impressions and contributed to a 12% uplift in quarterly sales."',
          why: 'The second relies on the reader to draw the causal line, which is how comms teams lose credibility slowly. AMEC\'s taxonomy sets three causation rules — cause precedes effect, a clear relationship including evidence the audience accessed the information, and other causes ruled out as far as possible. The first passes all three, shows a counterfactual, gives a range, and volunteers the thing that weakens its own case.' },
        { t: 'h', v: 'The one-page executive dashboard' },
        { t: 'list', v: [
          'The organisational objective, in the executive\'s own words.',
          'The communication objective derived from it.',
          'One output number inside a **defined** relevant universe (with the qualifying rule stated).',
          'One message or quality number with its formula named.',
          'One out-take or outcome from primary research, with a confidence interval.',
          'One business-contribution number with its counterfactual stated.',
          'The definition-change log — share of voice, quality scores and pull-through are all constructed, so version and date every definition and annotate the chart where it changed.',
          'One decision you are asking them to make. Delete anything that could not change a decision.'
        ]},
        { t: 'p', v: 'AMEC also published **GEO Principles** with a practitioner\'s guide in May 2026 for measuring visibility inside AI-generated answers: measure upstream reputation signals, search and content readiness, and downstream AI outputs; require repeatable prompts, documented methods and stated limitations; treat AI outputs as directional evidence; and triangulate rather than trusting any single score. Its practical value is defensive — a governing-body reason to refuse a vendor\'s opaque "AI visibility score" without appearing to refuse the question. See track 10 for the writing side.' },
        { t: 'rubric',
          j: 'Reports volume, impressions and AVE-adjacent numbers. Objectives have no baseline. Sentiment trended without method. Claims impact by putting two tiles side by side.',
          c: 'Uses the AMEC stages correctly, writes objectives with baseline, instrument and deadline, avoids AVE, reports method with sentiment.',
          s: 'Knows the current standard by version and what changed, kills AVE through templates and contracts rather than argument, states counterfactuals and confidence intervals, maintains a definition-change log, and brings a dashboard where every number could change a decision.' },
        { t: 'drill', v: [
          'Stage-tagging audit: take your last quarterly report and tag every number to exactly one AMEC stage. Which stages are empty? Which "outcomes" are actually outputs? Find the sentence that commits a substitution error and rewrite it honestly.',
          'Objective rewrite under adversarial review: rewrite three live objectives with baseline, instrument, threshold, deadline and interim checkpoint, then hand them to a finance colleague with one instruction — declare victory without doing any work. Anything they can game gets rewritten.',
          'Sentiment validation: pull 100 items your tool has classified, have two colleagues hand-code them against a written three-point rule, and compute agreement between the humans and between the humans and the tool. Rewrite last month\'s sentiment slide to state the sample, the method and the measured agreement.'
        ]}
      ]
    },

    /* ── 8 ─────────────────────────────── */
    {
      id: 't18-ops', title: 'Comms operations and the 2026 environment',
      blocks: [
        { t: 'h', v: 'Deciding whether to speak at all' },
        { t: 'p', v: 'The USC Annenberg 2026 Global Communication Report ("A Quiet Shift") found 81% of PR professionals rating US polarisation as high or extremely high, only about 55% now agreeing that companies have a responsibility to advocate on social issues — a steep fall since 2020 — and 41% agreeing that silence can sometimes be the most effective strategy, rising to 52% among in-house communicators.' },
        { t: 'key', v: 'Spokesperson preparation in 2026 therefore starts one step earlier than message development: decide whether to speak, in whose voice, and on which specific question. A senior communicator is expected to bring a recommendation to stay silent, with reasons — not only a prepared answer. Write the reasoning down, because the same question will return next quarter and the organisation should not re-litigate it from scratch.' },
        { t: 'h', v: 'A decision test you can run in ten minutes' },
        { t: 'steps', v: [
          { n: 1, name: 'Standing', body: 'Do we have a legitimate stake — operations, employees, customers, expertise — or are we commenting on someone else\'s issue?' },
          { n: 2, name: 'Consistency', body: 'Have we said or done anything that contradicts this position? Inconsistency is the story, not the position.' },
          { n: 3, name: 'Constituency', body: 'Which stakeholder actually needs to hear it, and is the right channel internal rather than public?' },
          { n: 4, name: 'Commitment', body: 'What are we prepared to do, fund or change? A statement with no action attached invites the "and what are you doing about it" follow-up.' },
          { n: 5, name: 'Cost of silence', body: 'Who reads silence as an answer, and what will they do? Sometimes silence is the loudest available statement.' }
        ]},
        { t: 'h', v: 'Trust is the operating environment, not a campaign metric' },
        { t: 'bench', title: 'The 2026 numbers worth carrying into a strategy meeting',
          v: [
            { m: 'Trust in news, globally', val: '37%', note: 'Reuters Institute Digital News Report 2026, 48 markets — lowest in the series; 25% in the US' },
            { m: 'People hesitant or unwilling to trust someone with different values', val: '70%', note: '2026 Edelman Trust Barometer, ~34,000 respondents; its named theme is insularity' },
            { m: 'Get news weekly from an AI chatbot', val: '~1 in 10', note: 'Reuters Institute 2026, up from 7% in 2025' },
            { m: 'Always or often click through from a chatbot answer to the source', val: '4%', note: 'versus 19% from search engines and 17% from social' },
            { m: 'Mis- and disinformation in the WEF risk ranking', val: '2nd on the two-year horizon', note: 'Global Risks Report 2026, 1,300+ experts — severe on both two- and ten-year windows' },
            { m: 'PR professionals who believe companies should address social issues', val: '52%', note: 'USC Annenberg 2025, down from 89% in 2023' }
          ],
          source: 'Reuters Institute, Edelman, WEF and USC Annenberg, 2025–2026. Directional; re-check the current edition before quoting.' },
        { t: 'warn', v: 'Do not treat falling institutional trust as a message-volume problem. In an insularity frame, more output from a distrusted institution lowers trust rather than raising it. The levers are who carries the message, whether the organisation did what it previously said, and whether you created a venue for disagreement. None of those are content-calendar problems.' },
        { t: 'h', v: 'AI in the comms function' },
        { t: 'p', v: 'Adoption has plateaued and governance has caught up. In Muck Rack\'s State of AI in PR 2026 (564 practitioners, fieldwork December 2025), generative-AI use held at 76%, while the share working somewhere with an AI use-case policy rose to 51% from 21% in 2024, and AI training at work to 43% from 21%. Only about 12% use agents, and 90% said they would be more comfortable with agents if human approval were required. Ranked uses: editing and refinement 86%, research 76%, writing 74%, strategy and planning 68%. What practitioners refuse to feed it: 77% avoid financial data and 69% avoid personal or proprietary material.' },
        { t: 'list', v: [
          '**Disclose on materiality, per asset — not in a website footer.** PRSA\'s *Promise & Pitfalls* v2.0 (October 2025) asks whether AI meaningfully shaped the content, recommendation or interaction. It offers model wording of the form "AI generated 80% of this content; it was 100% reviewed by a human", and states plainly that accountability belongs to people because AI is not a peer with moral responsibility.',
          '**Governing-body spines exist, so use them rather than inventing policy.** The Global Alliance\'s responsible-AI principles (the Venice Pledge) and CIPR\'s responsible-use checklists cover human-led governance, personal responsibility for whatever you publish, transparency, AI literacy as a professional obligation, and advising your own organisation rather than only executing.',
          '**Run the vendor questions before procurement:** how is data stored, is our data used for training, can the system identify training-data origins, what bias testing exists, is human review in place, can we override outputs, how is compliance handled, how often is the model updated and who verifies accuracy. PRSA\'s stop rule is blunt — if a vendor cannot answer clearly, reconsider.',
          '**Never let a model invent a statistic, a quote or an attribution.** Every number in a release needs a traceable source before it ships (track 6, claims register).',
          '**Simulated voice or likeness needs documented permission**, legal or compliance notification, and a commitment to replace it with authentic content before release.',
          '**Journalists are a specific audience here:** roughly half object to AI-generated pitches and releases. Drafting with a model and owning the output is normal; sending unedited output to a beat reporter is a relationship cost.'
        ]},
        { t: 'h', v: 'Synthetic media is now a crisis category' },
        { t: 'p', v: 'A 2025 Gartner survey reported that 43% of cybersecurity leaders had experienced at least one audio deepfake and 37% a video deepfake in the prior year, and documented incidents include a roughly $25m transfer authorised after a video call whose other participants were synthetic. The comms consequence is that you need a pre-authorised response path, not a policy paragraph.' },
        { t: 'ge', label: 'First statement, 45 minutes after a fabricated video of the CEO begins spreading',
          good: '"At 9:14am ET today a video began circulating on X and WhatsApp appearing to show our chief executive, Maria Alvarez, promising guaranteed returns on an investment product. The video is fabricated. Ms Alvarez has never made that statement, and Northline does not sell investment products of any kind. We have filed platform takedown requests and notified the regulator. Updates will be posted only at [single canonical URL], next by 12:00 ET. If you have been contacted about this offer, do not send money and contact us at [route]."',
          bad: '"We are aware of a video circulating on social media and are looking into the matter. We take these issues extremely seriously and will provide a further update in due course."',
          why: 'The working version is timestamped, names the fabricated claim once and denies it flatly, gives an independently checkable structural fact (we do not sell that product at all), names the actions taken, commits to a single canonical update location and a specific time, and tells the exposed audience what to do. The failing version leaves the fabrication standing as the only substantive content in circulation.' },
        { t: 'warn', v: 'Two opposite errors here. Restating the fabricated claim in your headline gives the clip a second distribution channel and makes your own newsroom the searchable record of the allegation. Waiting for a full legal cycle lets the clip become the default account, so the eventual statement reads as confirmation. Pre-authorise a named signatory who can publish a factual holding statement without the full cycle — and note that **C2PA Content Credentials prove provenance assertions are untampered, not that they are true**, so do not promise a board that provenance stops deepfakes.' },
        { t: 'h', v: 'The AI answer layer is an earned-media surface' },
        { t: 'p', v: 'Muck Rack\'s Generative Pulse (May 2026, drawn from 25 million-plus links across ChatGPT, Claude and Gemini) reports earned media supplying roughly 84% of the citations generative systems produce — journalism alone about 27% — against 0.3% for paid or advertorial content, and that share has held between about 82% and 89% across editions since July 2025. Citation behaviour differs sharply by model, so compare within an engine, not across.' },
        { t: 'key', v: 'The operational consequence: **share of model is a lagging indicator of media relations**, not a separate channel you optimise with owned content. Buying an AI-visibility dashboard before fixing the earned pipeline that produces citations is the 2026 version of buying an AVE report. Write the pitch so the claim is quotable by both a journalist and a model: a number with a unit and a period, a named data source, a public methodology, and a credentialed human who will speak.' },
        { t: 'h', v: 'Comms operations: the unglamorous half of the job' },
        { t: 'table', head: ['Mechanism', 'What it prevents'],
          rows: [
            ['**Spokesperson bench** — named, trained, ranked by topic, with a deputy per topic', 'The CEO fronting a technical incident because nobody else was media-trained'],
            ['**Approval matrix** — who clears what, at what value or risk threshold, with a named out-of-hours route', 'A fifteen-minute statement waiting two days for clearance'],
            ['**Editorial calendar shared with marketing, IR and HR**', 'A product launch landing the same morning as a restructure, or a campaign running through an active issue'],
            ['**Agency brief and scorecard** — objectives, message set, do-not-say list, reporting standard, review cadence', 'AVE-based reports and off-narrative pitching done in your name'],
            ['**Claims register and substantiation files**', 'A regulator or journalist asking for the evidence behind a number nobody owns'],
            ['**Post-incident review with dates and owners**', 'Learning the same lesson three times'],
            ['**Localisation route** — who adapts, who reviews register, which markets get transcreation', 'A translated crisis line that reads as an admission in another jurisdiction (track 3)']
          ]},
        { t: 'h', v: 'The boundary with product and brand marketing' },
        { t: 'p', v: 'Product marketing owns the buyer; communications owns everyone else. The friction is predictable and worth pre-agreeing in writing: who owns the launch narrative (comms sets the corporate frame, PMM sets the buyer-facing story), who owns analyst relations, who approves claims that touch regulated territory, and who speaks when a product failure becomes a corporate issue. Escalation should be a documented rule, not a personality contest.' },
        { t: 'warn', v: 'The most common career-limiting pattern in this function: being excellent at output and absent from decisions. In Gallagher\'s 2026 report — a self-selected survey of 1,300+ comms and HR practitioners — 73% of internal communicators said they want to operate as strategic consultants, 18% said they do so regularly, and 49% said their main function is broadcasting announcements. The fix is not more output; it is bringing a diagnosis, a recommendation and a stop list to the meeting where the decision is made.' },
        { t: 'rubric',
          j: 'Publishes on request. No spokesperson bench, no approval matrix, no record of why past decisions were made.',
          c: 'Runs a plan and a calendar, briefs spokespeople, coordinates with marketing, keeps templates current.',
          s: 'Brings a recommendation to stay silent with reasons, owns the approval and escalation machinery, tests it under clock, sets the AI and disclosure policy, and can show what the function stopped doing to make room for the work that mattered.' },
        { t: 'drill', v: [
          'Write the ten-minute speak-or-stay-silent test for a live issue in your sector and take a recommendation, either way, to whoever owns the decision.',
          'Build the spokesperson bench: topics down the side, named primary and deputy across, last media-trained date, last live interview date. Circulate the gaps.',
          'Draft the deepfake response appendix: verification route, pre-cleared line, platform contacts, and the internal notification order. One page.'
        ]}
      ]
    }
  ],

  artifact: {
    title: 'Comms strategy on a page + crisis kit',
    intro: 'Build it for a real organisation — ideally one facing a live issue you can follow in public. This artefact is the closest thing to a working sample for a communications manager role.',
    steps: [
      { s: 'Write the comms strategy on one page using OASIS', guide: 'Objectives (derived from a named business objective, in "change X among whom by how much by when" form, with baseline and instrument) · audience and insight · strategy and narrative idea · implementation and sequencing · scoring and evaluation. One page. If it runs to three, the objectives are not decided yet.' },
      { s: 'Write the corporate narrative and the messaging house', guide: 'Narrative in five beats, under 300 words, with the shift describable without the product. Then the house: one umbrella message, three pillars, two quotable proofs each. Test the pillars separately on a sales-minded and an IR-minded reader and record which pillar collapsed.' },
      { s: 'Build the stakeholder map, salience read and engagement promise', guide: 'Twelve named stakeholders on a power-interest grid for one specific decision, plus the salience classification. Add the trigger list, the dependent-to-definitive scenario, and the IAP2 level with the exact promise you are prepared to publish.' },
      { s: 'Assemble the crisis kit', guide: 'SCCT classification table for your three most likely scenarios with the strategy each dictates; two holding statements (safety incident, data breach) written to ship in fifteen minutes; the statutory clock list with the correct triggers; the approval path with named out-of-hours owners; and the spokesperson bench with deputies.' },
      { s: 'Prepare a media Q&A and run the bridge drill', guide: 'Message triangle with proof, ten questions including three with true hostile premises, model answers under 60 seconds, the cannot-discuss answer that avoids "no comment", and the embargo opt-in note. Record yourself once and note what you fixed.' },
      { s: 'Write the internal cascade pack for the same issue', guide: 'Preferred-sender split (senior leader vs line manager), manager pack with three must-says and three survivable answers, the by-when date, and the version of the announcement that assumes it leaks overnight.' },
      { s: 'Build the measurement model against AMEC and Barcelona V4.0', guide: 'Objectives to impact with at least one measure per stage, the definition and qualifying rule for every constructed metric, your sentiment method with its measured agreement, one attribution claim with a counterfactual and caveat, and the honest list of stages where you have no data — presented as next quarter\'s budget request.' }
    ]
  }
}];
