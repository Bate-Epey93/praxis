// Frameworks index, swipe templates, interview bank

export const FRAMEWORKS = [
  { n: 'Awareness levels', src: 'Schwartz', t: 1, use: 'Decide where copy must start for this traffic', steps: ['Most aware — lead with offer', 'Product aware — differentiate', 'Solution aware — claim the category', 'Problem aware — name and agitate', 'Unaware — story and identity only'] },
  { n: 'Market sophistication', src: 'Schwartz', t: 1, use: 'Decide whether a claim, a mechanism or an identity is needed', steps: ['1 Be first — state the claim', '2 Enlarge the claim', '3 Introduce the mechanism', '4 Elaborate the mechanism', '5 Identification'] },
  { n: 'Seven principles of influence', src: 'Cialdini', t: 1, use: 'Choose 2–3 deliberately; more reads as pressure', steps: ['Reciprocity', 'Commitment & consistency', 'Social proof', 'Authority', 'Liking', 'Scarcity', 'Unity'] },
  { n: 'Fogg behaviour model', src: 'Fogg', t: 1, use: 'Diagnose a stalled action', steps: ['Motivation present?', 'Ability — is it easy enough?', 'Prompt — is the ask clear and now?', 'All three must coincide'] },
  { n: 'Cost-of-inaction frame', src: 'Direct response', t: 1, use: 'Reframe price against the status quo', steps: ['Units of pain', '× frequency', '× value per unit', '− price = the real comparison'] },
  { n: 'Jobs to be done', src: 'Christensen', t: 2, use: 'Find the demand behind the purchase', steps: ['Identify the struggling moment', 'Separate functional / emotional / social job', 'Write the job story', 'Map to messages'] },
  { n: 'Four forces of progress', src: 'Moesta', t: 2, use: 'Diagnose why a better product is not being bought', steps: ['Push of the situation', 'Pull of the new solution', 'Anxiety about the new', 'Habit of the present'] },
  { n: 'Universal job map', src: 'Ulwick', t: 2, use: 'Find neglected stages to own', steps: ['Define', 'Locate', 'Prepare', 'Confirm', 'Execute', 'Monitor', 'Modify', 'Conclude'] },
  { n: 'Opportunity score', src: 'Ulwick (ODI)', t: 2, use: 'Quantify which outcomes are underserved', steps: ['Rate importance 1–10', 'Rate satisfaction 1–10', 'Score = imp + max(imp − sat, 0)', 'Above ~15 = underserved'] },
  { n: 'Switch interview', src: 'Moesta / Klement', t: 2, use: 'Excavate a real purchase timeline', steps: ['Start at the purchase, work backwards', 'Find the first thought', 'Locate the trigger event in scene', 'Probe "what almost stopped you"', 'Mark energy spikes'] },
  { n: 'Audience-first tests', src: 'Practice', t: 3, use: 'Catch brand-first drift', steps: ['First-thought test', 'So-what ladder', 'You/we ratio count', 'Swap test'] },
  { n: 'Message mining', src: 'VoC practice', t: 3, use: 'Find copy instead of writing it', steps: ['Collect verbatim (no editing)', 'Tag by theme, force, emotion', 'Count frequency', 'Rate intensity 1–5', 'Rank by frequency × intensity'] },
  { n: 'Ladder of abstraction', src: 'Practice', t: 3, use: 'Pick the right rung for the audience', steps: ['Attribute', 'Feature', 'Functional benefit', 'Emotional outcome', 'Identity'] },
  { n: 'Positioning canvas', src: 'Dunford', t: 4, use: 'Decide what the product is, in order', steps: ['Competitive alternatives', 'Unique attributes', 'Value enabled', 'Best-fit customers', 'Market category'] },
  { n: 'Golden circle', src: 'Sinek', t: 4, use: 'Communicate inside-out', steps: ['Why — the belief', 'How — the differentiating process', 'What — the products'] },
  { n: 'StoryBrand', src: 'Miller', t: 4, use: 'Cast the customer as hero', steps: ['Character with a want', 'Problem (external/internal/philosophical)', 'Guide (empathy + authority)', 'Plan', 'Call to action', 'Avoid failure', 'Achieve success'] },
  { n: 'Narrative spine', src: 'Practice', t: 4, use: 'Write a brand narrative', steps: ['Belief', 'Tension (name the enemy practice)', 'Mechanism (must be real)', 'Identity (the invitation)'] },
  { n: 'Only-ness statement', src: 'Neumeier', t: 4, use: 'Force honest differentiation', steps: ['Our [offering]', 'is the ONLY [category]', 'that [benefit] for [audience]', 'in [context] during [era]', 'because [proof]'] },
  { n: 'Messaging house', src: 'PMM practice', t: 5, use: 'One source of truth for all copy', steps: ['Positioning (internal)', 'Mission', 'Tagline', 'Elevator pitch', '3 pillars with proof', 'Objection library', 'CTA ladder', 'Do-not-say list'] },
  { n: 'Proof stack', src: 'Practice', t: 5, use: 'Choose the strongest available evidence', steps: ['Demonstration', 'Original data', 'Named customer results', 'Third-party validation', 'Mechanism explanation', 'Volume claims', 'Awards & logos'] },
  { n: 'Objection rebuttal', src: 'Sales practice', t: 5, use: 'Answer with a mechanism, not reassurance', steps: ['Acknowledge', 'Reframe', 'Evidence', 'Next step'] },
  { n: 'Tone dimensions', src: 'Nielsen Norman', t: 5, use: 'Define voice on axes, then write examples', steps: ['Funny ↔ serious', 'Formal ↔ casual', 'Respectful ↔ irreverent', 'Enthusiastic ↔ matter-of-fact'] },
  { n: 'AIDA', src: 'Classic', t: 6, use: 'Full-page persuasion arc', steps: ['Attention', 'Interest', 'Desire', 'Action'] },
  { n: 'PAS', src: 'Direct response', t: 6, use: 'Pain-driven, problem-aware traffic', steps: ['Problem in their words', 'Agitate the second-order cost', 'Solution with mechanism and proof'] },
  { n: 'BAB', src: 'Direct response', t: 6, use: 'Transformation stories and emails', steps: ['Before — current state', 'After — specific better state', 'Bridge — how, credibly'] },
  { n: 'PASTOR', src: 'Direct response', t: 6, use: 'Long-form sales pages', steps: ['Problem', 'Amplify', 'Story', 'Transformation', 'Offer', 'Response'] },
  { n: '4 Ps', src: 'Direct response', t: 6, use: 'Ads and compact landing pages', steps: ['Promise', 'Picture', 'Proof', 'Push'] },
  { n: 'FAB', src: 'Sales practice', t: 6, use: 'Translate engineering features', steps: ['Feature', 'Advantage', 'Benefit — never stop at F'] },
  { n: '4 Us', src: 'Newman', t: 6, use: 'Score any headline or subject line', steps: ['Useful', 'Urgent', 'Ultra-specific', 'Unique'] },
  { n: 'Five-pass edit', src: 'Practice', t: 6, use: 'Ship copy — and elevate AI output', steps: ['Structure', 'Precision (cut 30%)', 'Momentum (read aloud)', 'Logic and claims', 'Voice and texture'] },
  { n: 'LIFT model', src: 'WiderFunnel', t: 7, use: 'Audit a page in six lenses', steps: ['Value proposition', 'Relevance', 'Clarity', 'Urgency', 'Anxiety', 'Distraction'] },
  { n: 'Landing page anatomy', src: 'Practice', t: 7, use: 'Answer questions in the order asked', steps: ['Hero', 'Struggle recognition', 'Mechanism', 'Proof', 'Objections', 'Offer + risk reversal', 'Close'] },
  { n: 'Opportunity sizing', src: 'CRO practice', t: 7, use: 'Rank work by money, not percentages', steps: ['Traffic', '× (achievable − current rate)', '× value per conversion'] },
  { n: 'Hypothesis format', src: 'Experimentation practice', t: 8, use: 'Make a test falsifiable', steps: ['Because [evidence]', 'we believe [change]', 'will cause [outcome] for [segment]', 'measured by [primary metric]', 'wrong if [counter-signal]'] },
  { n: 'Seven-step test design', src: 'Practice', t: 8, use: 'Run a defensible test', steps: ['Find the problem in data', 'Write the hypothesis', 'Design variants', 'Calculate sample and duration', 'QA implementation', 'Run without interference', 'Analyse, decide, document'] },
  { n: 'PXL prioritisation', src: 'CXL', t: 8, use: 'Score tests with evidence, not opinion', steps: ['Above the fold?', 'Noticeable in 5 seconds?', 'Adds or removes an element?', 'Based on research (which kind)?', 'Ease of implementation'] },
  { n: 'Pillar test', src: 'Practice', t: 9, use: 'Justify or cut a content territory', steps: ['Demand (search + social)', '× Right to speak (proof, data, expertise)', '× Business linkage'] },
  { n: 'Hub and spoke', src: 'Content practice', t: 9, use: 'Build topical authority', steps: ['Comprehensive hub per pillar', 'Spokes per specific intent', 'Interlink both ways', 'One page per intent'] },
  { n: 'Content ops pipeline', src: 'Practice', t: 9, use: 'Scale without losing quality', steps: ['Idea', 'Brief approval', 'Draft', 'Editor review', 'SME review', 'Claims review', 'Pre-publish checks', 'Measure', 'Refresh or prune'] },
  { n: 'Answer-first structure', src: 'AEO practice', t: 10, use: 'Get extracted and cited', steps: ['Question as the heading', '40–60 word complete answer', 'One idea per paragraph', 'Tables for comparisons', 'Dated facts with sources'] },
  { n: 'GEO four pillars', src: '2026 GEO research', t: 10, use: 'Be citable by AI assistants', steps: ['Retrievability', 'Extractable substance', 'Third-party presence', 'Freshness and monitoring'] },
  { n: 'Lifecycle map', src: 'Growth practice', t: 11, use: 'Find the weakest stage', steps: ['Acquire', 'Activate', 'Retain', 'Expand', 'Advocate'] },
  { n: 'Welcome sequence', src: 'Lifecycle practice', t: 11, use: 'Convert a new subscriber', steps: ['Deliver + frame (immediate)', 'One useful thing (day 2)', 'Named proof (day 5)', 'Top objection honestly (day 8)', 'Offer with real urgency (day 12)'] },
  { n: 'GTM system', src: 'PMM practice', t: 12, use: 'Structure a launch', steps: ['Market and segments', 'Positioning', 'Messaging', 'Pricing and packaging', 'Channels and motion', 'Content plan', 'Enablement', 'Measurement'] },
  { n: 'Launch tiers', src: 'PMM practice', t: 12, use: 'Right-size the launch', steps: ['Tier 1 — new product or repositioning', 'Tier 2 — significant capability', 'Tier 3 — feature or improvement'] },
  { n: 'Prompt anatomy', src: 'Applied AI practice', t: 15, use: 'Build a production prompt', steps: ['Role and expertise', 'Context (brand, buyer, proof)', 'Task with counts and criteria', 'Constraints and bans', 'Output format', 'Examples including rejections'] },
  { n: 'HEARD', src: 'Service practice', t: 16, use: 'Handle a complaint', steps: ['Hear', 'Empathise', 'Apologise', 'Resolve', 'Diagnose (feed the root-cause loop)'] },
  { n: 'LAST', src: 'Service practice', t: 16, use: 'Fast-channel de-escalation', steps: ['Listen', 'Acknowledge', 'Solve', 'Thank'] },
  { n: 'Apology anatomy', src: 'Service practice', t: 16, use: 'Repair a real failure', steps: ['Name what happened specifically', 'Take proportionate responsibility', 'State the impact you understand', 'Say what is fixed and when', 'Say what prevents the repeat', 'Make it right'] },
  { n: 'Saying no well', src: 'Service practice', t: 16, use: 'Refuse without escalating', steps: ['Answer directly', 'One-sentence real reason', 'Nearest thing you can do (two options)', 'Leave the door open where honest'] },
  { n: 'Root-cause loop', src: 'CX practice', t: 16, use: 'Turn support into intelligence', steps: ['Tag root causes', 'Rank by volume × handle time × sentiment', 'Assign an owner per driver', 'Report in agent-hours and money', 'Feed product and marketing'] },
  { n: 'OASIS comms planning', src: 'UK Government Communication Service', t: 18, use: 'Write a comms strategy a non-communicator will approve', steps: ['Objectives — SMART, derived from a business objective', 'Audience and insight', 'Strategy and idea', 'Implementation and sequencing', 'Scoring and evaluation, resourced up front'] },
  { n: 'Five-beat corporate narrative', src: 'Andy Raskin (2016)', t: 18, use: 'One story that works on investors, recruits and customers', steps: ['Name a change in the world', 'Show winners and losers', 'Tease the promised state', 'Introduce capabilities as gifts past obstacles', 'Prove you can make it true'] },
  { n: 'Pyramid Principle + SCQ', src: 'Barbara Minto (1985)', t: 18, use: 'Board papers, memos and any document read once', steps: ['One governing point at the top', 'Each level summarises the level below', 'Situation, Complication, Question', 'Answer the question first, then support', 'Order support by a logic you can name'] },
  { n: 'Preferred sender model', src: 'Prosci', t: 18, use: 'Sequence a change announcement', steps: ['Business messages from the most senior leader', 'Personal-impact messages from the immediate supervisor', 'Never swap the senders', 'Brief supervisors before the senior announcement', 'Repeat both; one delivery is distribution, not communication'] },
  { n: 'ADKAR', src: 'Jeff Hiatt / Prosci', t: 18, use: 'Diagnose where a group is stuck and who owns the fix', steps: ['Awareness', 'Desire', 'Knowledge', 'Ability', 'Reinforcement'] },
  { n: 'Bridges Transition Model', src: 'William Bridges', t: 18, use: 'Behaviour has not moved after a correct announcement', steps: ['Separate change from transition', 'Endings — name what is lost and who loses it', 'Neutral Zone — frequent low-drama updates', 'New Beginnings — roles and reorientation'] },
  { n: 'Power-interest grid', src: 'Mendelow (1981)', t: 18, use: 'Triage stakeholders for one specific decision', steps: ['Fix the unit of analysis on one issue', 'Score power on evidence, not seniority', 'Score interest in this decision specifically', 'Assign posture per quadrant with an owner and cadence', 'Write the trigger list that would move someone'] },
  { n: 'Stakeholder salience', src: 'Mitchell, Agle & Wood (1997)', t: 18, use: 'Justify budget for a group with no formal standing', steps: ['Test power (coercive, utilitarian, normative)', 'Test legitimacy against prevailing norms', 'Test urgency (time-sensitivity plus criticality)', 'Classify latent, expectant or definitive', 'Map how a dependent stakeholder acquires an ally'] },
  { n: 'IAP2 spectrum', src: 'International Association for Public Participation', t: 18, use: 'Be explicit about how much decision power you are giving away', steps: ['Choose the level before any tactic', 'Read across to the participation goal', 'Publish the promise you will be held to', 'Fence the parts of the decision that are closed', 'Report back against the promise'] },
  { n: 'SCCT', src: 'W. Timothy Coombs', t: 18, use: 'Choose crisis response posture', steps: ['Publish instructing and adjusting information first', 'Cluster: victim, accidental, preventable', 'Score intensifiers: crisis history, prior reputation', 'Match deny / diminish / rebuild to attribution', 'Bolster only as a supplement', 'Re-classify as facts land'] },
  { n: 'CERC principles', src: 'US CDC', t: 18, use: 'Audit any crisis draft in 60 seconds', steps: ['Be first', 'Be right — facts in increments', 'Be credible — do not withhold to avoid embarrassment', 'Express empathy', 'Promote action', 'Show respect'] },
  { n: 'Apology components, ranked', src: 'Lewicki, Polin & Lount (2016)', t: 18, use: 'Construct an apology once you have decided to give one', steps: ['Acknowledgement of responsibility (strongest)', 'Offer of repair', 'Expression of regret', 'Explanation of what went wrong', 'Declaration of repentance', 'Request for forgiveness (weakest — cut this first)'] },
  { n: 'Competence vs integrity repair', src: 'Kim, Ferrin, Cooper & Dirks (2004)', t: 18, use: 'Decide between apology and denial', steps: ['Classify the violation as competence- or integrity-based', 'Competence — apology repairs better', 'Integrity — denial repairs better', 'Check what evidence will surface later', 'Accept that misclassification is close to unrecoverable'] },
  { n: 'Message triangle', src: 'Marketing Partners', t: 18, use: 'Prepare any spokesperson for any interview', steps: ['Establish context and objective', 'Maximum three key messages', 'Attach credible proof to each', 'Compress each into a sayable sound bite', 'Rehearse redirects on friendly and hostile sets'] },
  { n: 'Attribution ladder', src: 'Associated Press news values', t: 18, use: 'Any conversation with a journalist that is not a formal interview', steps: ['On the record — usable and named', 'Background — publishable on negotiated terms', 'Deep background — usable, no attribution', 'Off the record — not publishable', 'Negotiate before speaking; it cannot be applied retroactively'] },
  { n: 'AMEC Integrated Evaluation Framework', src: 'AMEC (Macnamara)', t: 18, use: 'Design or audit any comms measurement model', steps: ['Objectives from organisational objectives', 'Inputs', 'Activities', 'Outputs', 'Out-takes', 'Outcomes', 'Impact — then feed back into planning'] },
  { n: 'Barcelona Principles V4.0', src: 'AMEC, June 2025', t: 18, use: 'The standard you audit against', steps: ['1 Clear measurable (SMARTER) objectives', '2 Define and understand all stakeholder audiences', '3 Measure all relevant channels', '4 Qualitative and quantitative analysis', '5 No invalid measures such as AVEs', '6 Report outputs, outcomes and impact', '7 Ethics, governance and transparency'] },
  { n: 'Speak-or-stay-silent test', src: 'Practice, post-2024 polarisation research', t: 18, use: 'Decide whether the organisation should comment at all', steps: ['Standing — do we have a legitimate stake?', 'Consistency — does anything we said or did contradict this?', 'Constituency — who actually needs to hear it, and is the channel internal?', 'Commitment — what will we do, fund or change?', 'Cost of silence — who reads silence as an answer?'] },
  { n: 'Case study structure', src: 'Portfolio practice', t: 17, use: 'Prove judgement, not output', steps: ['Situation', 'Diagnosis (frameworks named)', 'Decision (and what you rejected)', 'Execution', 'Result with baseline', 'Learning'] },
  { n: 'First 90 days', src: 'Practice', t: 17, use: 'Start a senior role well', steps: ['Days 1–30 listen and inventory', 'Days 15–45 one visible early win', 'Days 30–60 diagnosis document', 'Days 60–90 install one durable system'] }
];

export const TEMPLATES = [
  {
    cat: 'Headlines', items: [
      { n: 'Struggling moment', v: '"The invoice was right. The spreadsheet was wrong. You found out in the meeting."' },
      { n: 'Specific promise + timeframe', v: '"Close the month in two days. Starting this month."' },
      { n: 'Social proof + curiosity', v: '"340 finance teams stopped exporting to Excel. Here\'s what they do instead."' },
      { n: 'Named enemy', v: '"Your reporting isn\'t slow. Your exports are."' },
      { n: 'Their own question', v: '"Why does close take six days when the data is already there?"' },
      { n: 'Identity', v: '"For operators who\'d rather read the data than the deck."' },
      { n: 'Contrarian + proof', v: '"More dashboards made your reporting worse. We measured it."' },
      { n: 'How-to with constraint', v: '"How to cut close to two days without changing your ERP."' },
      { n: 'Number-led list', v: '"The 6 places month-end quietly loses a day."' },
      { n: 'Before / after', v: '"From six days of reconciliation to a Tuesday afternoon."' }
    ]
  },
  {
    cat: 'Subject lines', items: [
      { n: 'Objection-handler', v: '"The returns question, answered"' },
      { n: 'State-of-play', v: '"Your trial has 11 days left and no data in it"' },
      { n: 'Specific proof', v: '"How Northwind cut close from 7 days to 2"' },
      { n: 'Honest urgency', v: '"Price changes Friday — here\'s what it means for you"' },
      { n: 'Curiosity paid off in line one', v: '"The number that surprised us wasn\'t the price"' },
      { n: 'Service framing (recovery)', v: '"Did something break?"' },
      { n: 'Permission close', v: '"Last email from us on this"' }
    ]
  },
  {
    cat: 'CTA microcopy', items: [
      { n: 'Verb + value', v: '"Get my close checklist" · "See the 90-second demo" · "Start my trial"' },
      { n: 'Friction reducer under the button', v: '"No card. 4-minute setup. Cancel in one click."' },
      { n: 'Transitional ask (not ready)', v: '"Not ready? Read the teardown instead →"' },
      { n: 'Payment button', v: '"Pay $49 — you\'ll get access immediately"' }
    ]
  },
  {
    cat: 'Objection rebuttals', items: [
      { n: 'Price', v: 'Acknowledge: "$2,400 a year is a real line item." Reframe: "The alternative is 6 hours a week of manual work — about $17,000 at a $60 blended rate." Evidence: median across 340 teams. Next step: "Run the numbers on your own volume here →"' },
      { n: 'Migration risk', v: '"Six weeks of setup would be a real cost. That\'s why a named engineer does the migration: we import your last 24 months, you verify against your old system, and you cancel nothing until it matches. Here\'s the 40-minute walkthrough from a team your size."' },
      { n: 'Timing', v: '"If this quarter is full, the honest answer is to start after close. What I\'d do now is the 20-minute data check, so the January decision takes a week instead of a month."' },
      { n: 'Authority', v: '"You shouldn\'t have to make this case alone — here\'s the one-pager your CFO will actually read, with the payback maths and the security summary."' },
      { n: 'Trust in the claim', v: '"Don\'t take the number from us. Run the export on your own data in the sandbox — if it doesn\'t match, that\'s the answer."' }
    ]
  },
  {
    cat: 'Support macros (skeletons)', items: [
      { n: 'Acknowledgement', v: 'Hi [NAME] — thanks for flagging this. [ONE LINE RESTATING THEIR SPECIFIC ISSUE].\n\nI\'m looking into it now and will come back to you by [TIME + TIMEZONE] either way. If anything changes on your side in the meantime, reply here and it stays on this thread.\n\n— [YOU]' },
      { n: 'Bug acknowledged', v: 'Hi [NAME] — I reproduced it: [WHAT HAPPENS, IN ONE SENTENCE]. It\'s our bug, not your setup.\n\nWhat happens next: engineering has it as [PRIORITY], and I\'ll update you [FREQUENCY] until it\'s fixed.\nWorkaround for right now: [STEPS], which handles [WHAT IT COVERS] but not [HONEST LIMITATION].\n\n— [YOU]' },
      { n: 'Refund inside policy', v: 'Hi [NAME] — done. [AMOUNT] is going back to the [CARD/METHOD ending DIGITS], and it lands in [3–5 BUSINESS DAYS]. Reference [REF].\n\nYou\'ll get the confirmation email in a couple of minutes so you have it in writing. [OPTIONAL: ONE QUESTION ABOUT THE REASON].\n\n— [YOU]' },
      { n: 'Refund outside policy (refusal)', v: 'Hi [NAME] — I can\'t refund [WHAT], because [REAL REASON IN ONE SENTENCE] and I don\'t want to promise something that gets reversed later.\n\nWhat I can do: [OPTION 1] or [OPTION 2]. Which is more useful to you?\n\n— [YOU]' },
      { n: 'Feature request declined', v: 'Hi [NAME] — [FEATURE] isn\'t on the roadmap for [TIMEFRAME]. I\'d rather tell you that than say "soon".\n\nTwo things I can do: log your use case with the specifics so it counts in prioritisation, and show you [WORKAROUND], which handles [WHAT] but not [LIMITATION].\n\n— [YOU]' },
      { n: 'Outage update', v: '[NAME] — [WHAT IS AFFECTED] since [TIME + TIMEZONE]. Engineering is on it and the status page updates every [INTERVAL]: [LINK].\n\nFor your [SPECIFIC DEADLINE]: [WORKAROUND OR OFFER TO DO IT FOR THEM]. Want me to?\n\n— [YOU]' },
      { n: 'Cancellation confirmed', v: 'Hi [NAME] — cancelled. Nothing renews on [DATE], and your data stays available until [DATE] if you want to export or come back.\n\nIf you have twenty seconds: what tipped it? Useful to us either way, and if it\'s something fixable I\'d like to know.\n\n— [YOU]' },
      { n: 'Escalation notice to customer', v: 'Hi [NAME] — this needs [TEAM/PERSON], so I\'ve escalated it with everything you\'ve told me; you won\'t need to repeat any of it.\n\nI\'m staying on it — you\'ll hear from me, not a new queue, by [TIME]. If it moves faster than that I\'ll tell you sooner.\n\n— [YOU]' }
    ]
  },
  {
    cat: 'Communications documents', items: [
      { n: 'Holding statement (first 15 minutes)', v: `We are aware of the situation regarding [ISSUE] and are looking into it immediately.
We will provide an update by [SPECIFIC TIME + TIMEZONE] whether or not we have more to
report. In the meantime our thoughts are with all those who are or may be affected.

[IF SAFETY RELEVANT] If you are affected, [SPECIFIC ACTION TO TAKE / NOTHING TO DO YET].

RULES FOR THIS DRAFT
· No cause. No scope estimate. No "limited number". No "no evidence of misuse".
· No admission of liability. Must not pre-empt or contradict a regulatory filing.
· Timestamps must be verifiable. Next-update time must be specific.` },
      { n: 'Incident statement (facts known, scope unknown)', v: `At approximately [TIME + TIMEZONE] on [DATE] we identified [WHAT, FACTUALLY].
We [CONTAINMENT ACTION] at [TIME] and have engaged [EXTERNAL SPECIALISTS].

What we do not yet know: [LIST THE UNKNOWNS PLAINLY].
What we are doing: [STEPS, WITH OWNERS].
What you need to do: [ACTION OR "nothing at this stage"].
Next update: by [TIME], whether or not there is more to report.

[NAME, ROLE — the operationally credible voice, not automatically the CEO]` },
      { n: 'Comms objective (the form that survives review)', v: `By [DATE], [DIRECTION] [MEASURE] among [AUDIENCE, DEFINED]
from [BASELINE FIGURE, recorded by INSTRUMENT on DATE] to [TARGET],
measured on [SAME INSTRUMENT, IDENTICAL WORDING], with [INTERIM CHECKPOINT] as the
mid-point review.

Business objective this ladders to: [NAMED, from the plan — not invented for this doc]
Barcelona V4.0 check: Specific · Measurable · Achievable · Relevant · Time-bound ·
Evaluated (during, not only at the end) · Reviewed (can adapt)` },
      { n: 'Message triangle brief', v: `TOPIC:                          SPOKESPERSON:               DATE:
OBJECTIVE (what must change in the audience's head):
AUDIENCE + what they already know:

MESSAGE 1:                      PROOF (number / named example / first-hand):
MESSAGE 2:                      PROOF:
MESSAGE 3:                      PROOF:

THREE HOSTILE QUESTIONS (at least one with a TRUE premise) + the acknowledgement that
must come before any bridge:
CANNOT DISCUSS + why, and what I can give instead (never "no comment"):
DO NOT SAY:` },
      { n: 'Embargo opt-in note', v: `Before I send anything: we have [WHAT] going out at [TIME + TIMEZONE] on [DAY, DATE],
and I would like to give it to you on [DAY] under embargo until then.

Do you want it on that basis? If you would rather not be bound, say so and I will send it
[LAUNCH DAY] with everyone else, no hard feelings.

[Never send the material before they accept. An embargo binds only those who agreed.]` },
      { n: 'Change announcement + manager pack', v: `ANNOUNCEMENT (senior leader — business messages only)
What is changing:                          Scale, in numbers:
Why now, and the risk of not changing:
When uncertainty ends (specific time):
Who hears what, from whom, by when:

MANAGER PACK (supervisor — personal impact)
Three things to say in your own words:
Three questions you will be asked, with answers you can repeat twice:
  Q: Are more cuts coming? A: [only what the manager controls + a commitment to tell them]
One thing not to say, and why:
Conversation must have happened by: [DATE + TIME]  ·  Verify from the team side, not the tracker` },
      { n: 'Crisis plan spine (STOP)', v: `STRATEGY   objectives · audiences and impacts · guiding principles · thresholds
TACTICS    pre-cleared holding lines · clearance requirements · contacts · dark site
ORGANISATION  named comms lead · war-room structure · policy alignment · logistics
PEOPLE     staffing and surge · training · responder wellbeing

CLOCKS (verify current, per jurisdiction)
  GDPR Art.33   supervisory authority, without undue delay, ≤72h from awareness
  NIS2 Art.23   early warning ≤24h · notification ≤72h · final report ≤1 month
  SEC 8-K 1.05  4 business days from the MATERIALITY DETERMINATION (not discovery)

APPROVAL PATH  who clears a 15-minute statement, in hours and out of hours, by name
SPOKESPERSON BENCH  topic → primary → deputy → last trained → last live interview` }
    ]
  },
  {
    cat: 'Working documents', items: [
      { n: 'Market diagnosis one-pager', v: `MARKET DIAGNOSIS — [product] — [date]
Mass desire (no product words):
Intensity / staying power / scope:   /5  /5  /5
Awareness level of THIS traffic:
Sophistication stage (1-5) + evidence:
Dominant emotion · identity the buyer steps into:
Top 3 objections (verbatim):
Influence principles in play (max 3):
Cost of inaction (numbers):
What we will NOT say:` },
      { n: 'Content brief', v: `TITLE (working):
PRIMARY INTENT + TARGET QUERY:
AUDIENCE + AWARENESS LEVEL:
JOB STORY (When… I want to… so I can…):
BUSINESS OUTCOME + PRIMARY METRIC:
ARCHITECTURE SLOT: hub / spoke of [pillar] · links in ___ out ___
ANGLE (the argument only we can make):
MUST INCLUDE: data ___ · named example ___ · original framework ___
MUST NOT: [do-not-say list]
PROOF POINTS (with sources):
STRUCTURE: H2 outline
FORMAT / LENGTH / READING GRADE:
CTA + next asset:
AI USE: draftable sections / human-only sections / SME review needed` },
      { n: 'Test design record', v: `TEST: [name]                          OWNER:          DATES:
EVIDENCE (data that prompted this):
HYPOTHESIS: Because __, we believe __ will cause __ for __, measured by __.
WRONG IF:
PRIMARY METRIC:                        GUARDRAILS:
BASELINE RATE:      MDE:      POWER:      SIGNIFICANCE:
SAMPLE PER VARIANT:        DURATION:        QA CHECKLIST DONE: ☐
RESULT: rate A __ / rate B __ · lift __ · CI __ to __ · confidence __
SEGMENTS (device / source / new-returning):
DECISION:                              REVENUE PROJECTION + CAVEATS:
LEARNING CARRIED FORWARD:` },
      { n: 'Battle card', v: `COMPETITOR: [name]              UPDATED: [date]     OWNER:
THEY WIN WHEN:                  WE WIN WHEN:
THEIR CLAIM        | THE REALITY            | OUR COUNTER            | PROOF ASSET
-------------------|------------------------|------------------------|-------------
                   |                        |                        |
LANDMINE QUESTIONS TO PLANT:
DO NOT SAY: [anything unverifiable or disparaging]
PRICE POSTURE:                  MIGRATION STORY:` },
      { n: 'GTM brief (1 page)', v: `LAUNCH: [name]        TIER: 1/2/3 + why        DATE:        OWNER:
MOTION: product-led / sales-led / community-led / partner-led + evidence
OBJECTIVE (measurable):
SEGMENTS + AWARENESS LEVELS:
POSITIONING (2 sentences):
3 MESSAGES + PROOF:
CHANNELS + BUDGET:
CONTENT BY PHASE: pre / launch / post
ENABLEMENT NEEDED (incl. support macros + blocker assets):
METRICS 30 / 60 / 90:
TOP 5 RISKS + MITIGATIONS + OWNERS:` },
      { n: 'QA scorecard', v: `TICKET:              AGENT:              REVIEWER:              DATE:
Accuracy      /30   correct, complete, no speculation
Resolution    /25   resolved or owned next step with a date
Tone/empathy  /20   named the impact, no banned phrases, matched register
Clarity       /15   answer first, plain language, one action per step
Process       /10   tags, notes, escalation path, KB updated
TOTAL         /100
PATTERN (not this ticket alone):
COACHING NOTE (one behaviour to change):
AGENT SELF-SCORE BEFORE REVIEW:` }
    ]
  }
];

export const INTERVIEW = [
  { role: 'Copywriter / conversion writer', q: 'Walk me through how you\'d approach a landing page that isn\'t converting.', a: 'Diagnose before writing: traffic source and its awareness level, analytics drop-off, scroll depth, exit survey, top objections from tickets. Then size the opportunity in dollars. Then rewrite by section — hero, struggle, mechanism, proof, objections, offer, close — and name the primary metric plus a test plan. Land it with the revenue projection.' },
  { role: 'Copywriter / conversion writer', q: 'How do you handle an edit you disagree with?', a: 'Separate taste from evidence. If it\'s taste, defer — it\'s their brand. If it\'s evidence ("this claim isn\'t sourced", "this reads as parity in the hero"), make the case once with the data and offer a test. Give a concrete example where you did both.' },
  { role: 'Copywriter / conversion writer', q: 'Show me a headline you wrote and five you rejected.', a: 'This tests generation discipline. Have real variants across distinct angles — pain, proof, identity, mechanism, price — and be able to say what each targeted and why you killed it.' },
  { role: 'Content strategist', q: 'Our blog gets traffic but no pipeline. What do you do?', a: 'Check the intent mix — high-traffic informational content that never touches a buying decision. Audit against the pillar test (demand × right to speak × business linkage), find the missing comparative and commercial-investigation coverage, check cannibalisation and internal linking, then propose a stop list alongside the new plan.' },
  { role: 'Content strategist', q: 'How do you decide what NOT to publish?', a: 'The strongest question you can be asked. Answer with the pillar test, capacity as a fixed budget, and a real example of something you killed and what you did with the capacity instead.' },
  { role: 'Content strategist', q: 'How would you prove content ROI to a CFO?', a: 'Sessions × conversion rate × value per conversion versus production cost, with assumptions stated and "influenced" used honestly rather than "generated". Add the paid-equivalent comparison and the decay/refresh cost. Offer an incrementality approach for the harder claim.' },
  { role: 'Content strategist', q: 'How has AI changed how you work?', a: 'Answer with process, not tools: what may be drafted, what must be human, the five-pass edit, the governance rules, and one measured before/after. Mention the eval set if you have one — very few candidates do.' },
  { role: 'Content SEO / discovery', q: 'Organic traffic is down 30% year over year. Where do you start?', a: 'Segment before diagnosing: branded vs non-branded, query-level impressions versus clicks in Search Console, which templates and intents lost, technical changes, and how much is answers consumed upstream. Then split the response by funnel stage — presence at the top, clicks in the middle and bottom.' },
  { role: 'Content SEO / discovery', q: 'How do you get cited by AI assistants?', a: 'Four pillars: retrievability, extractable substance (statistics, definitions, comparisons, dates), third-party presence on the platforms assistants lean on, and freshness with monitoring. Mention that citation and ranking are separable — a large majority of AI Overview citations come from outside the organic top 10.' },
  { role: 'Product marketing / GTM', q: 'How would you position a product you\'ve just met?', a: 'Dunford in order: competitive alternatives including "do nothing", verifiable attributes, value enabled, best-fit customers, then category last. Name the trade-off of the category choice — what comparison set and evaluation criteria you inherit.' },
  { role: 'Product marketing / GTM', q: 'Plan the launch of a mid-sized feature.', a: 'Assign the tier first and defend a downgrade. Diagnose the motion. Then phases with pre-launch enablement (including support macros and blocker assets), launch assets by segment and awareness level, post-launch case studies driven by real objections, 30/60/90 metrics, and a pre-mortem with five mitigations.' },
  { role: 'Product marketing / GTM', q: 'Sales says our messaging doesn\'t work. What do you do?', a: 'Listen to calls before rewriting anything. Usually one of three things: the messaging is fine but untrained, the objection library is missing the real objections, or the message is aimed at the wrong buyer in the committee. Co-create the fix with two reps so they defend it.' },
  { role: 'Product marketing / GTM', q: 'How do you decide whether to respond to a competitor\'s move?', a: 'Respond to positioning threats where they claim your territory; ignore most feature announcements; pre-empt trends you saw first. Say explicitly that not everything deserves a response — that restraint is the senior signal.' },
  { role: 'Lifecycle / CRM', q: 'Activation is 22%. How would you improve it?', a: 'Define the activation event precisely, count the steps to it, watch ten sessions, then attack the biggest drop: empty-state copy, one action per screen, progress mechanics, and a day-3 rescue message with one action and a human escape hatch. Measure time-to-first-value, not just rate.' },
  { role: 'Lifecycle / CRM', q: 'Our cart sequence underperforms. Where do you look first?', a: 'Email two — the "your item is waiting" reminder that adds no information. Replace it with the specific objection-handler mined from tickets and reviews. Then check timing, mobile rendering, and whether the offer arrives before the objection is answered.' },
  { role: 'CRO / experimentation', q: 'A test shows +18% at 89% confidence after five days. Ship it?', a: 'No — below threshold, before the planned sample, inside the novelty window, and the interval likely spans zero. Offer the constructive version: if the business needs early calls, design sequential tests from the start.' },
  { role: 'CRO / experimentation', q: 'We only get 8,000 visitors a month. Can we test?', a: 'Yes, but not at small MDEs. Test large swings (offer, page structure, audience), use surrogate metrics higher in the funnel, run for longer cycles, consider painted-door and qualitative research, and be explicit that some questions are unanswerable at this volume. That honesty is the answer they want.' },
  { role: 'CRO / experimentation', q: 'How do you present a losing test?', a: 'As a finding with a cost avoided. State what was falsified, what it implies about the audience, the guardrail metrics, and the next hypothesis. Mention the learning repository — turning individual results into compounding pattern knowledge.' },
  { role: 'Customer service', q: 'A customer is furious on their third contact. Walk me through your reply.', a: 'Name the specific failure and confirm their version with evidence; apologise for the repetition, not vaguely; act while they wait and give exact amounts, references and timeframes; confirm in writing; flag the internal cause; then check for the other unresolved thing that would cause contact four.' },
  { role: 'Customer service', q: 'You have to say no. How?', a: 'Direct no, one-sentence real reason, two alternatives, one question back. Never hide behind policy language, never apologise for a policy you can explain, and leave the door open where it is honest to do so.' },
  { role: 'Customer service', q: 'How do you keep quality up when the queue is long?', a: 'Triage by impact × urgency, send honest acknowledgements with a real time commitment rather than empty holding replies, use macro skeletons with a personalised opening line, and escalate on criteria rather than waiting. Then flag the volume driver to whoever owns the cause — a long queue is usually a symptom.' },
  { role: 'Customer service', q: 'A customer becomes abusive. What do you do?', a: 'Anger is acceptable, abuse is not. One calm explicit warning naming the behaviour and the consequence; if it continues, end the contact and document verbatim and factually. Report it the same day. Know the policy in advance rather than improvising authority mid-conversation.' },
  { role: 'Support lead / CX', q: 'Which metrics would you report, and which would you refuse to?', a: 'CES with FCR as the honest pair, contact rate per 100 customers as the strategic metric, SLA attainment as a percentage rather than an average. Refuse AHT as a standalone target — it produces fast useless service. Explain the gaming risk for each metric you name.' },
  { role: 'Support lead / CX', q: 'How does support make the rest of the company better?', a: 'The root-cause loop: consistent tagging, monthly ranking by volume × handle time × sentiment, an owner per driver, and a report costed in agent-hours. Then route objections into the objection library, verbatim pain into the message bank, and recurring confusion into onboarding copy.' },
  { role: 'Communications', q: 'A story breaks alleging misconduct by a senior executive. Walk me through your first hour.', a: 'Verify what is actually known; classify the SCCT cluster and whether the trust violation is competence- or integrity-based, because that dictates apology versus denial; publish a holding statement that timestamps awareness, expresses concern and commits to a specific next update, with no cause and no reassurance; brief employees before or with the external release; check statutory clocks; and choose an operationally credible spokesperson rather than defaulting to the CEO.' },
  { role: 'Communications', q: 'Our CEO wants to comment on a political issue. What do you advise?', a: 'Run the five-part test out loud: standing, consistency with what we have already said and done, which constituency actually needs to hear it, what we are prepared to do or fund, and the cost of silence. Then bring a recommendation either way with reasons. Cite that a large share of in-house communicators now regard silence as sometimes the most effective strategy, and that inconsistency is what becomes the story.' },
  { role: 'Communications', q: 'How would you measure our comms programme?', a: 'Name the standard: AMEC Integrated Evaluation Framework with Barcelona Principles V4.0 (June 2025), SMARTER objectives, no AVEs or aliases like EMV. Then one measure per stage, definitions and qualifying rules stated, sentiment reported with method and measured agreement, one attribution claim with a counterfactual, and the stages where we have no data presented as next quarter\'s budget request.' },
  { role: 'Communications', q: 'Sales and marketing want the launch narrative to lead with the product. You disagree. What do you do?', a: 'Separate the artefacts: the corporate narrative sets the frame (the change in the world and the stakes), the messaging house gives sales quotable proof, and product marketing owns the buyer-facing story. Show that a narrative which cannot name the shift without naming the product does not travel to investors, recruits or regulators. Then give them what they actually need — pillars with proof — rather than winning an argument about the keynote.' },
  { role: 'Communications', q: 'How do you get managers to communicate well during a change?', a: 'Preferred sender model: senior leader takes the business messages, the immediate supervisor takes personal impact, and supervisors get briefed before the announcement, not after. Give them a pack with three must-says, three survivable answers and one thing not to say, then verify the conversation happened from the team side rather than from the manager tracker.' },
  { role: 'Communications', q: 'A regulator has asked for information and we found an error in our own reporting. How do you handle the comms?', a: 'Lead with corrected primary data, a dated and specific admission, a remediation plan with owners, and narrow disagreements framed so they can be adjudicated. Delete every sentence that only signals cooperation. Regulators read for admissibility and for the cost of defending a decision to their own oversight, so cooperation is demonstrated by what you hand over.' },
  { role: 'Any senior role', q: 'What would you stop doing in our current marketing?', a: 'The single strongest seniority signal. Come with one specific, respectful, reasoned observation about their actual work, and what you would do with the freed capacity.' },
  { role: 'Any senior role', q: 'Tell me about a time you were wrong.', a: 'Pick a real one with a mechanism: what you believed, what evidence changed it, what it cost, what you changed in your process afterwards. Process change is what makes the answer land.' },
  { role: 'Any senior role', q: 'How do you prioritise when everything is urgent?', a: 'Size in money or risk, not in volume of requests. Show a real ranking you made, the thing you deliberately let slip, and how you communicated that trade-off upward.' },
  { role: 'Any senior role', q: 'What are your salary expectations?', a: '"What range is budgeted for this role?" first. If pressed, give a researched range anchored on the role and market rather than your last salary, and mention the whole package — title, scope, learning budget, flexibility.' }
];
