// Role prep paths. Curated: which tracks are core, which sections are the 90-minute
// must-know set, which artefacts prove the role, and what the loop actually tests.
// `sims` reference ids in data/practice.js. `interviewRoles` must match INTERVIEW role strings.

export const PATHS = [
  {
    key: 'copy',
    label: 'Conversion copywriter',
    aka: 'Copywriter · Conversion writer · Marketing copywriter · Senior copywriter',
    proves: 'You can write copy that moves a number, and you can take an edit without defending your ego.',
    tests: [
      'A timed writing test: headlines, a hero section, an email. They read for specificity and structure.',
      'Whether you diagnose before you write, or start typing adjectives.',
      'How you respond to an edit you disagree with.'
    ],
    core: [1, 6, 3, 7],
    supporting: [2, 5, 11, 15],
    mustKnow: ['t1-awareness', 't1-sophistication', 't6-precision', 't6-frameworks', 't6-headlines', 't3-frame', 't7-anatomy', 't7-friction'],
    artefacts: [6, 7, 3],
    sims: ['sim-copy', 'sim-lifecycle'],
    calcs: ['cr'],
    interviewRoles: ['Copywriter / conversion writer', 'Any senior role'],
    redFlag: 'Portfolio full of pretty copy with no numbers, no brief, and no explanation of the decision.'
  },
  {
    key: 'content',
    label: 'Content strategist',
    aka: 'Content strategist · Content marketing manager · Head of content · Content lead',
    proves: 'You own discovery and results, not output. You can defend three pillars and a stop list with data.',
    tests: [
      'A strategy exercise: audit an existing blog, propose pillars, name what you would stop.',
      'Whether you connect content to pipeline, or report pageviews.',
      'How you brief and govern other writers, including AI-assisted ones.'
    ],
    core: [9, 3, 5, 13],
    supporting: [1, 2, 10, 15, 14],
    mustKnow: ['t9-strategy', 't9-architecture', 't9-briefs', 't3-voc', 't5-house', 't13-literacy', 't9-ops'],
    artefacts: [9, 5, 3],
    sims: ['sim-strategist', 'sim-seo'],
    calcs: ['content', 'cr'],
    interviewRoles: ['Content strategist', 'Any senior role'],
    redFlag: 'A calendar presented as a strategy. No stop list, no measurement plan, no business goal chain.'
  },
  {
    key: 'seo',
    label: 'Content SEO / discovery',
    aka: 'Content SEO manager · SEO content strategist · Organic growth · AI search lead',
    proves: 'You can grow qualified organic demand when a large share of answers never produce a click.',
    tests: [
      'An architecture or retrofit exercise: fix a page for extraction, explain what you would measure.',
      'Intent literacy and cannibalisation awareness, not keyword volume recitation.',
      'Whether you understand that citation and ranking are now separable problems.'
    ],
    core: [10, 9, 13],
    supporting: [3, 6, 14, 15],
    mustKnow: ['t9-seoaeo', 't10-search', 't10-aeo', 't10-geo', 't9-architecture', 't10-schema'],
    artefacts: [10, 9],
    sims: ['sim-seo', 'sim-strategist'],
    calcs: ['content'],
    interviewRoles: ['Content SEO / discovery', 'Content strategist', 'Any senior role'],
    redFlag: 'Treating GEO as keyword stuffing for chatbots, or adding schema to thin pages and calling it a strategy.'
  },
  {
    key: 'pmm',
    label: 'Product marketing / GTM',
    aka: 'Product marketing manager · PMM · GTM lead · Solutions marketing',
    proves: 'You can position a product, launch it at the right size, and arm the people who sell it.',
    tests: [
      'A positioning or launch exercise, usually with a competitive teardown attached.',
      'Whether you diagnose the GTM motion before writing the plan.',
      'How you would handle sales saying the messaging does not work.'
    ],
    core: [4, 12, 5, 2],
    supporting: [1, 13, 18, 9],
    mustKnow: ['t4-canvas', 't4-diff', 't12-system', 't12-icp', 't12-launch', 't5-house', 't5-objections'],
    artefacts: [4, 12, 5],
    sims: ['sim-pmm', 'sim-strategist'],
    calcs: ['unit', 'cr'],
    interviewRoles: ['Product marketing / GTM', 'Any senior role'],
    redFlag: 'A sales-led launch plan for a product-led company. Category chosen before alternatives.'
  },
  {
    key: 'lifecycle',
    label: 'Lifecycle / CRM',
    aka: 'Lifecycle marketing manager · CRM manager · Email marketing manager · Retention marketing',
    proves: 'You move activation and retention with messaging, and you can read a retention curve.',
    tests: [
      'A sequence design task plus a segmentation and trigger plan.',
      'Whether you optimise for revenue per recipient or still quote open rates.',
      'Deliverability literacy: enough to know which conversation to start.'
    ],
    core: [11, 7, 13],
    supporting: [1, 6, 3, 16],
    mustKnow: ['t11-map', 't11-sequences', 't11-segments', 't11-onboarding', 't11-retention', 't7-math'],
    artefacts: [11, 7],
    sims: ['sim-lifecycle', 'sim-cro'],
    calcs: ['cr', 'unit'],
    interviewRoles: ['Lifecycle / CRM', 'Any senior role'],
    redFlag: 'Batch-and-blast campaigns dressed as lifecycle. No activation definition, no trigger inventory.'
  },
  {
    key: 'cro',
    label: 'CRO / experimentation',
    aka: 'CRO specialist · Experimentation manager · Growth marketer · Optimisation lead',
    proves: 'You form falsifiable hypotheses, read tests honestly, and translate lifts into money.',
    tests: [
      'A page teardown plus a test design, or a results table you must interpret.',
      'Statistics literacy under pressure: peeking, power, SRM, segment reversal.',
      'Whether you rank work by dollars at stake or by what annoys you visually.'
    ],
    core: [7, 8, 13],
    supporting: [1, 6, 14, 11],
    mustKnow: ['t7-math', 't7-leak', 't7-friction', 't8-hypothesis', 't8-stats', 't8-read', 't8-pitfalls'],
    artefacts: [7, 8],
    sims: ['sim-cro', 'sim-copy'],
    calcs: ['cr', 'ab', 'funnel'],
    interviewRoles: ['CRO / experimentation', 'Any senior role'],
    redFlag: 'Button-colour tests, point estimates with no interval, and calling results at 89% confidence.'
  },
  {
    key: 'service',
    label: 'Customer service specialist',
    aka: 'Support specialist · Customer service advisor · CX associate · Technical support',
    proves: 'You resolve, de-escalate and write clearly under pressure, without hiding behind policy.',
    tests: [
      'Written scenario replies, usually including one angry repeat contact and one refusal.',
      'Sometimes a live role-play or a timed queue exercise.',
      'Whether you own the problem in the first sentence or open with an apology template.'
    ],
    core: [16, 6, 3],
    supporting: [5, 14, 11, 15],
    mustKnow: ['t16-fundamentals', 't16-language', 't16-deescalation', 't16-scripts', 't16-lifecycle', 't6-precision'],
    artefacts: [16, 6],
    sims: ['sim-service', 'sim-comms'],
    calcs: ['support'],
    interviewRoles: ['Customer service', 'Any senior role'],
    redFlag: 'Unedited macros, "unfortunately, as per our policy", and no specifics in the resolution.'
  },
  {
    key: 'cx',
    label: 'Support lead / CX manager',
    aka: 'Support manager · CX lead · Head of customer experience · Service operations',
    proves: 'You design the system and improve it with data, and you make support useful to the rest of the company.',
    tests: [
      'An SLA, QA or root-cause design exercise with real numbers.',
      'Which metrics you would refuse to report, and why.',
      'How support feedback reaches product and marketing on a schedule.'
    ],
    core: [16, 13, 11],
    supporting: [14, 18, 15, 5],
    mustKnow: ['t16-channels', 't16-metrics', 't16-selfserve', 't16-trust', 't13-literacy', 't16-lifecycle'],
    artefacts: [16, 13],
    sims: ['sim-service', 'sim-cro'],
    calcs: ['support', 'unit'],
    interviewRoles: ['Support lead / CX', 'Customer service', 'Any senior role'],
    redFlag: 'AHT as a standalone target, QA with no calibration, and tagging that nobody uses.'
  },
  {
    key: 'comms',
    label: 'Communications manager',
    aka: 'Comms manager · Corporate communications · PR manager · Internal comms · Public affairs',
    proves: 'You protect and build reputation across stakeholders, and you can write under legal and time pressure.',
    tests: [
      'A crisis exercise: holding statement, internal note, recommended response strategy, on a clock.',
      'Whether you can measure comms without advertising value equivalency.',
      'Judgement about when the organisation should say nothing at all.'
    ],
    core: [18, 5, 4],
    supporting: [3, 6, 13, 16, 15],
    mustKnow: ['t18-what', 't18-crisis', 't18-media', 't18-internal', 't18-measure', 't5-house'],
    artefacts: [18, 5],
    sims: ['sim-comms', 'sim-service'],
    calcs: [],
    interviewRoles: ['Communications manager', 'Any senior role'],
    redFlag: 'AVE in a report, a holding statement that speculates on cause, and no stakeholder map.'
  }
];

export const BUDGETS = [
  { key: 'sprint', label: 'Interview this week', hours: '2–3 hours', blurb: 'The must-know set, one simulation, and rehearsed answers.' },
  { key: 'week', label: 'One focused week', hours: '5–8 hours', blurb: 'Every core section, two simulations, one portfolio artefact.' },
  { key: 'month', label: 'Thirty days', hours: '12–16 hours', blurb: 'Core and supporting tracks, every artefact, the full simulation set.' }
];

export function pathByKey(k) { return PATHS.find(p => p.key === k); }
