// Tracks 12, 15 · Go-to-market and AI orchestration
export default [

/* ══════════════════ 12 ══════════════════ */
{
  id: 12, phase: 'Go-to-market', color: '--or', roles: ['gtm', 'cs', 'co'],
  title: 'Go-to-Market Strategy',
  sub: 'Launch as a system, not an announcement',
  time: 'Study 3.5h · Artifact 6–8h',
  prereq: 'Tracks 4, 5, 9',
  feeds: 'Feeds tracks 13, 17',
  sources: 'PMM practice · Moore · Dunford · pricing research methods',
  sections: [
    {
      id: 't12-system', title: 'The GTM system and its motions',
      blocks: [
        { t: 'p', v: 'Go-to-market is the connective tissue between what was built and who buys it. The brief that describes it is the artefact that earns a seat at the strategy table — content writers do not write these; product marketers and content strategy leads do.' },
        { t: 'steps', v: [
          { n: 1, name: 'Market and segment analysis', body: 'Who has this problem, how many, how urgently, and who wins today.' },
          { n: 2, name: 'Positioning', body: 'Category, alternatives, differentiation (track 4).' },
          { n: 3, name: 'Messaging', body: 'Pillars, proof, objections, per-segment adaptation (track 5).' },
          { n: 4, name: 'Pricing and packaging', body: 'Tiers, price metric, entry point, upgrade path.' },
          { n: 5, name: 'Channels and motion', body: 'How the product reaches buyers and who does the selling.' },
          { n: 6, name: 'Content and campaign plan', body: 'Assets by phase and awareness level.' },
          { n: 7, name: 'Enablement', body: 'What sales, support and partners need on day one.' },
          { n: 8, name: 'Measurement', body: 'Metrics at 30/60/90 days with a pre-agreed definition of success.' }
        ]},
        { t: 'h', v: 'The four motions — each demands different copy' },
        { t: 'table', head: ['Motion', 'How it sells', 'Copy centre of gravity', 'Failure mode'],
          rows: [
            ['**Product-led (PLG)**', 'Self-serve trial or freemium; the product does the convincing', 'Onboarding, empty states, in-product prompts, activation emails', 'Beautiful acquisition copy feeding an onboarding nobody wrote'],
            ['**Sales-led (SLG)**', 'Humans close; marketing creates and warms pipeline', 'Battle cards, one-pagers, ROI models, demo narrative', 'Marketing writes for the market, sales sells something else entirely'],
            ['**Community-led**', 'Peers convince peers', 'Point of view, original data, participation — not campaigns', 'Extracting from a community without contributing to it'],
            ['**Partner / channel-led**', 'Someone else\'s salesforce sells you', 'Co-branded assets, partner enablement, margin story', 'Assets that serve your brand and not the partner\'s deal']
          ]},
        { t: 'key', v: 'Diagnose the motion before writing anything. The most common senior interview trap: describing a sales-led launch plan for a product-led company. Ask "who does the convincing — the product, a rep, a peer, or a partner?" and let the answer reorganise the whole brief.' }
      ]
    },
    {
      id: 't12-icp', title: 'Segmentation, ICP and the buying committee',
      blocks: [
        { t: 'formula', label: 'Market sizing, honestly', expr: 'TAM (everyone with the problem) → SAM (those you can serve today) → SOM (those you can realistically win in 12–24 months)',
          example: 'Bottom-up beats top-down: number of qualifying accounts × realistic win rate × ACV. A TAM built from an analyst\'s market-size press release is a number nobody in the room believes.' },
        { t: 'h', v: 'ICP definition that a sales team can act on' },
        { t: 'list', v: [
          '**Firmographic:** size, industry, geography, tech stack, growth stage.',
          '**Behavioural triggers:** hiring for a role, funding round, migration, new regulation, seasonal deadline. Triggers are what make timing coincide with need.',
          '**Disqualifiers:** the profile you refuse. An ICP without exclusions is a wish.',
          '**Evidence:** your best 20 customers by retention and margin, not by logo prestige. Find what they share.'
        ]},
        { t: 'h', v: 'The buying committee and its five jobs' },
        { t: 'table', head: ['Role', 'Their job', 'Asset they need'],
          rows: [
            ['Champion', 'Solve the pain, look competent', 'Forwardable one-pager, quick win they can show'],
            ['Economic buyer', 'Justify risk-adjusted spend', 'ROI model, references, downside scenario'],
            ['End user', 'Not have more work', 'Demo, migration story, day-in-the-life proof'],
            ['Technical evaluator', 'No integration surprises', 'Architecture docs, API reference, security posture'],
            ['Blocker (procurement / legal / security)', 'No exposure', 'SOC 2 / DPA / accessibility docs, standard terms, predictable process']
          ]},
        { t: 'key', v: 'B2B deals stall in the blocker lane far more often than in the pitch. Producing the boring assets — security one-pager, DPA summary, accessibility statement — is unglamorous, high-leverage GTM work that most marketers never volunteer for.' }
      ]
    },
    {
      id: 't12-pmf', title: 'Product-market fit signals and pre-launch validation',
      blocks: [
        { t: 'list', v: [
          '**Retention curve flattens.** The single most trusted signal; without it, growth spend inflates a leaky bucket.',
          '**Organic pull:** inbound demand, unprompted mentions, prospects using your category language back at you.',
          '**Sean Ellis test:** ≥40% of users say they would be "very disappointed" to lose the product. A useful directional gate; not gospel.',
          '**Sales efficiency:** shortening cycles and rising win rates against the same competitors.',
          '**Willingness to pay before it is finished:** pre-orders, deposits, design-partner contracts.'
        ]},
        { t: 'h', v: 'Validation before you build the launch' },
        { t: 'steps', v: [
          { n: 1, name: 'Message testing', body: 'Run 3–5 positioning statements as ads or a landing test; measure click and signup rate by message, not by creative.' },
          { n: 2, name: 'Painted door', body: 'A real page and CTA for a thing not yet built. Measures intent, not opinion. Always disclose honestly at the point of signup.' },
          { n: 3, name: 'Design partners', body: 'Five customers who co-build. They produce your case studies, your objection library and your proof — before launch.' },
          { n: 4, name: 'Pricing research', body: 'See the next section. Do it before the launch page, not after the discount requests start.' },
          { n: 5, name: 'Pre-mortem', body: 'Assume the launch failed; list the reasons; mitigate the top five. Cheapest risk management there is.' }
        ]},
        { t: 'warn', v: 'Crossing the Chasm still holds where it counts: early adopters buy vision, mainstream buyers buy references and completeness. Copy that thrilled the first hundred customers usually fails the next thousand — and the fix is not more enthusiasm, it is proof, wholeness and risk reduction.' }
      ]
    },
    {
      id: 't12-pricing', title: 'Pricing and packaging for marketers',
      blocks: [
        { t: 'p', v: 'Pricing is the fastest lever in the business and the one marketers most often duck. You do not need to own it; you need to be literate enough to shape it and to write it clearly.' },
        { t: 'list', v: [
          '**Value-based, not cost-plus.** Price against the value delivered and the alternative\'s cost, never against your build cost.',
          '**Pick the price metric first.** The unit you charge for (seats, events, GMV, tickets resolved) should scale with delivered value. A wrong metric caps growth no discount strategy can fix.',
          '**Good-better-best.** Three tiers named for who they are for. The middle is the target; the top tier makes the middle look sensible; the bottom is the on-ramp, not the destination.',
          '**Fence the tiers on value, not spite.** Gate on capability that correlates with willingness to pay, never on things that make the cheap tier feel punitive.',
          '**Show the price.** Hidden enterprise pricing is defensible above a certain deal size and costs you self-serve demand below it — say which you are choosing and why.',
          '**Discounting is a positioning decision.** Habitual discounts teach buyers to wait, and they permanently reset the reference price.'
        ]},
        { t: 'h', v: 'Willingness-to-pay research you can actually run' },
        { t: 'table', head: ['Method', 'What it asks', 'Strength / limit'],
          rows: [
            ['**Van Westendorp**', 'Too cheap / bargain / expensive / too expensive', 'Fast, cheap, gives an acceptable range; not a demand curve'],
            ['**Gabor-Granger**', '"Would you buy at $X?" across price points', 'Estimates demand at each price; anchoring-prone'],
            ['**Conjoint / MaxDiff**', 'Trade-offs between feature bundles at prices', 'Best for packaging decisions; needs sample size and design care'],
            ['**Win/loss price analysis**', 'What did we lose on price, really?', 'Real behaviour; buyers over-report price as the reason'],
            ['**A/B price test**', 'Live traffic at two prices', 'Truest signal; legal and fairness constraints, and it can burn goodwill']
          ]},
        { t: 'key', v: 'When a prospect says "too expensive," it is a value-communication failure more often than a price failure. Test the value framing (anchor, quantified outcome, cost of inaction) before you touch the number.' }
      ]
    },
    {
      id: 't12-launch', title: 'Launch tiers, plan and enablement',
      blocks: [
        { t: 'table', head: ['Tier', 'What it is', 'Scope', 'Cadence'],
          rows: [
            ['**Tier 1**', 'New product, new category, repositioning', 'Full campaign: PR, paid, webinar, sales motion, exec involvement', '1–2 per year'],
            ['**Tier 2**', 'Significant capability or new segment', 'Blog, email, in-app, sales enablement, targeted paid', 'Quarterly'],
            ['**Tier 3**', 'Feature or improvement', 'Changelog, in-app note, docs, one social post', 'Bi-weekly / continuous']
          ]},
        { t: 'warn', v: 'The big-bang fallacy: treating every release as Tier 1. It exhausts the team, drains credibility, and trains the market to ignore your announcements. Deciding the tier — and defending a downgrade — is a senior judgement call.' },
        { t: 'h', v: 'Phase plan' },
        { t: 'list', v: [
          '**Pre-launch (T−4 to T−1 weeks):** design partners and case studies locked, sales enablement built and *trained*, waitlist or teaser, analyst and press briefings, internal FAQ.',
          '**Launch (T):** announcement content, email to segments, in-app, paid, webinar or live demo, community post, support macros ready.',
          '**Post-launch (T+1 to T+8 weeks):** case studies from first adopters, comparison content, objection content driven by real sales feedback, retrospective with numbers.'
        ]},
        { t: 'h', v: 'Sales enablement that gets used' },
        { t: 'list', v: [
          '**Battle card:** their claim | the reality | our counter | the proof asset | what not to say. One page. If it is two pages it will not be read in a live call.',
          '**One-pager:** problem, solution, result, proof, next step — readable in 30 seconds by someone who has never met you.',
          '**Discovery questions:** the five questions that surface the job and the forces (track 2). Reps who ask these close more than reps who pitch.',
          '**Demo narrative:** the story order for the demo, not a feature tour. Start with the struggling moment, end with the number.',
          '**Objection sheet:** verbatim objections with mechanism-based answers (track 5).',
          '**Training, not distribution.** Assets nobody was walked through do not exist. Book the session; record it; make it part of onboarding.'
        ]},
        { t: 'h', v: 'Competitive intelligence as an ongoing programme' },
        { t: 'list', v: [
          'Monitoring: alerts on competitor names and category terms, review-site changes, pricing-page diffs, job postings (they telegraph roadmap), release notes, and social.',
          'Interpretation: new messaging can mean a new strategy or just a new agency; a price change can mean pressure or a new segment. Do not over-read single events.',
          'Response policy: react to **positioning threats** (they are claiming your territory), ignore most feature announcements, and pre-empt trends you saw first. Not everything deserves a response, and saying so is a senior act.'
        ]},
        { t: 'h', v: 'Selling the strategy internally' },
        { t: 'table', head: ['Stakeholder', 'Open with', 'Never open with'],
          rows: [
            ['CEO / CMO', 'Business impact: pipeline, revenue, market position, risk', '"Here is our content calendar"'],
            ['Sales lead', 'What they get and when: cards, case study, demo script, dates', '"Here is our messaging matrix"'],
            ['Product', 'Customer insight and evidence from research', '"Marketing needs these features for launch"'],
            ['Design', 'The user problem and the decision to be made', '"Make this look better"'],
            ['Finance', 'Cost, payback, assumptions, sensitivity', 'Reach and impressions'],
            ['Support', 'What will change for their queue, and the macros ready in advance', 'Nothing — being surprised by a launch is why support distrusts marketing']
          ]},
        { t: 'key', v: 'Awareness levels apply inside the building. Your CFO may be completely unaware there is a positioning problem. Leading with your solution to an unaware internal audience fails exactly the way it fails externally.' },
        { t: 'rubric',
          j: 'Launch plan is a content calendar. Every release is a big launch. No measurement or enablement.',
          c: 'Covers the eight components, assigns a tier with justification, builds enablement, sets 30/60/90 metrics.',
          s: 'Diagnoses the GTM motion first, sizes bottom-up, plans the blocker assets, runs a pre-mortem with mitigations, tailors internal comms by stakeholder, and can name what was cut from the launch and why.' }
      ]
    }
  ],
  artifact: {
    title: '1-page GTM brief + launch kit + battle card',
    steps: [
      { s: 'Write the 1-page GTM brief (all 8 components)', guide: 'Launch name, tier with justification, measurable objective, segments with awareness levels, positioning in two sentences, three messages with proof, channel mix, 30/60/90 metrics, timeline, risks.' },
      { s: 'Diagnose the motion and adapt the plan to it', guide: 'State whether this is product-led, sales-led, community-led or partner-led, the evidence, and what changes in the plan because of it.' },
      { s: 'Build the segment × asset matrix by phase', guide: 'Pre-launch / launch / post-launch × segment, with awareness level and the asset that serves each cell. Mark which assets are new versus repurposed.' },
      { s: 'Produce the battle card and the one-pager', guide: 'Battle card: their claim | reality | counter | proof | do-not-say. One-pager: problem, solution, result, proof, next step. Both must fit one page each.' },
      { s: 'Write the pre-mortem with 5 named risks and mitigations', guide: 'Probability, impact, mitigation, owner. Include: message misfit, competitor pre-empt, sales unprepared, support unbriefed, and a launch-day technical failure.' },
      { s: 'Write the internal sell in three versions', guide: 'Same launch pitched in three paragraphs: to the CEO, to the sales lead, to product. Show how the opening sentence changes and why.' }
    ]
  }
},

/* ══════════════════ 15 ══════════════════ */
{
  id: 15, phase: 'Go-to-market', color: '--or', roles: ['co', 'cs', 'gtm', 'svc'],
  title: 'AI Orchestration & Prompt Systems',
  sub: 'Build the system, not the one-off prompt',
  time: 'Study 3h · Artifact 5h',
  prereq: 'Tracks 5, 6',
  feeds: 'Feeds every production workflow',
  sources: 'Applied prompting practice · content governance',
  sections: [
    {
      id: 't15-what', title: 'What employers mean by "prompt engineering" now',
      blocks: [
        { t: 'p', v: 'AI fluency is a baseline expectation in senior marketing roles, while explicitly-named "prompt engineering" appears in a very small share of job posts. Read that correctly: nobody is hiring a prompt engineer. They are hiring people who can build **repeatable systems** where models do the volume and humans keep the judgement — and who can prove the output is better than what the team produced before.' },
        { t: 'list', v: [
          'Reusable prompt templates that reliably produce on-brand output for a named task.',
          'A feedback loop: test results and performance data feed back into prompt design, so the system improves quarterly.',
          'A prompt library the whole team can use without you present.',
          'Quality gates and governance: what models may draft, what they may never decide, who reviews what.',
          'Evidence: before/after samples, time saved, quality measured, and the failure cases you caught.'
        ]},
        { t: 'key', v: 'The differentiator is the loop. Most people use AI as a vending machine. The senior move is treating it as a system that gets measurably better because you feed test results back into it — and being able to show which prompt produced the winning variant.' }
      ]
    },
    {
      id: 't15-anatomy', title: 'Anatomy of a production prompt',
      blocks: [
        { t: 'steps', v: [
          { n: 1, name: 'Role and expertise', body: 'Sets the vocabulary and standard. "You are a senior direct-response copywriter who writes for problem-aware B2B buyers and refuses unsupported claims."' },
          { n: 2, name: 'Context', body: 'Brand, product, audience, positioning, competitor set, proof points. This is where your messaging architecture gets injected — the reason track 5 exists.' },
          { n: 3, name: 'Task', body: 'Exactly what you want, with counts, lengths, and quality criteria. Vague tasks produce average output.' },
          { n: 4, name: 'Constraints', body: 'Banned words, banned claims, voice rules, "each variant must use a different persuasion angle", no invented statistics.' },
          { n: 5, name: 'Output format', body: 'Structure it so it is usable without reformatting: table columns, labelled fields, the annotation you need for testing.' },
          { n: 6, name: 'Examples (few-shot)', body: 'One strong example and one rejected example with the reason. Two examples calibrate quality better than three paragraphs of adjectives.' }
        ]},
        { t: 'code', label: 'Production headline prompt (adapt the bracketed parts)', v: `ROLE
You are a senior direct-response copywriter specialising in [CATEGORY]. You write for
[AWARENESS LEVEL] buyers and you never make a claim you cannot source.

CONTEXT
Brand: [NAME]. Positioning: [ONE SENTENCE]. Category we compete in: [CATEGORY].
Buyer: [SEGMENT + JOB STORY]. Dominant emotion: [EMOTION].
Market sophistication: stage [1-5], so claim-only headlines will not land.
Proof available (use only these): [3-5 PROOF POINTS WITH NUMBERS AND SOURCE].
Competitor headlines to differentiate from: [3-5 HEADLINES].

TASK
Write 8 hero headlines, 8-12 words each, each with a paired subheadline of 15-25 words.

CONSTRAINTS
- Every headline must use a DIFFERENT persuasion angle. Label it: struggling-moment /
  quantified-promise / social-proof / named-enemy / identity / mechanism / contrarian / question.
- Banned: revolutionary, game-changer, unlock, elevate, seamless, empower, transform,
  "take your X to the next level".
- No statistic that is not in the proof list. No implied medical, financial or legal outcomes.
- Reject any headline that would be equally true for a competitor. State if you had to reject one.

OUTPUT
Table: Headline | Subheadline | Angle | Awareness level | Proof point used |
A/B hypothesis ("this should raise [metric] for [segment] because [reason]")

EXAMPLES
GOOD: "340 finance teams stopped exporting to Excel. Here's what they do instead."
 — social proof + curiosity, specific number, no adjective doing the work.
REJECTED: "Transform your financial close with revolutionary automation."
 — two banned words, no specificity, works for any competitor.` },
        { t: 'warn', v: 'Never paste customer data, unreleased financials, or personal information into a general-purpose model without checking your organisation\'s policy and the tool\'s data-retention terms. This is the AI mistake that ends careers, and "I did not know" is not a defence.' }
      ]
    },
    {
      id: 't15-techniques', title: 'Techniques worth knowing by name',
      blocks: [
        { t: 'cards', v: [
          { h: 'Decomposition', b: 'Split one big ask into a chain of small ones: research → outline → section drafts → assembly → edit. Quality rises sharply because each step has a checkable output. This is the highest-return technique and the least glamorous.' },
          { h: 'Chain-of-thought / reason-first', b: 'Ask for the reasoning before the output. "First list the top 3 objections and the top 3 emotional drivers, map each headline to one, then write the headlines." Produces more strategic variety than jumping to the deliverable.' },
          { h: 'Few-shot with rejections', b: 'Two or three examples of good, plus examples of what you have rejected and why. Rejections teach the boundary faster than positive examples alone.' },
          { h: 'Persona-based generation', b: 'One variant per segment or job, each with its own motivation. This is how you get genuinely different variants instead of five rewordings — which is the difference between a useful test and a wasted one.' },
          { h: 'Competitive differentiation', b: 'Paste competitor copy and require output that could not be theirs. Prevents the accidental convergence that makes half of a category sound identical.' },
          { h: 'Self-critique then revise', b: '"Score each output 1–10 on clarity, specificity, brand fit and differentiation, explain the scores, then rewrite the bottom half." A second pass costs seconds and reliably lifts quality.' },
          { h: 'Structured output', b: 'Demand tables, labelled fields, or JSON when the result feeds a spreadsheet or a CMS. Unstructured output creates manual work that eats the time you saved.' },
          { h: 'Performance-feedback loop', b: 'Feed real test results back in: which variants won, which lost, what the pattern was, then ask for new variants that build on the winning pattern and avoid the losing one. This is the technique employers are actually asking for.' },
          { h: 'Lightweight evals', b: 'A fixed set of 10 test briefs plus a scoring rubric, run whenever you change a prompt. It is how you know a "better" prompt is actually better rather than differently-flavoured.' }
        ]},
        { t: 'code', label: 'Performance-feedback loop prompt', v: `Last quarter's headline test results for [PRODUCT]:
A "Sleep on a cloud. Literally."                 CR 2.1%   (aspirational)
B "21K five-star reviews can't all be wrong."    CR 2.8%   (social proof)  WINNER
C "Wake up without back pain — guaranteed."      CR 3.0%   (pain + risk reversal)  WINNER
D "America's #1 mattress, $1,350 off."           CR 2.4%   (price)  high CTR, low CR

Observed pattern: pain-point and social-proof angles beat aspiration; price drove clicks
but not conversions, which suggests it attracted a discount-motivated segment.

Now:
1. State the messaging hypothesis this data supports, in one sentence.
2. Generate 6 new headlines that combine pain-point specificity with social proof.
   No pure price angles. Each must use a different pain from this list: [LIST].
3. For each, name the metric you expect to move and the risk it carries.
4. Flag anything in my interpretation of the data that you think is wrong.` }
      ]
    },
    {
      id: 't15-failures', title: 'Failure modes and how to catch them',
      blocks: [
        { t: 'table', head: ['Failure', 'Example', 'Prompt-level fix'],
          rows: [
            ['**Generic / interchangeable**', '"Experience the ultimate in comfort with our premium solution."', 'Inject positioning and competitor copy; add "reject anything equally true of a competitor"'],
            ['**Feature-led, not outcome-led**', '"Featuring 6-layer construction with cooling technology."', '"Lead with what the customer experiences, not what the product contains"'],
            ['**Hyperbole without proof**', '"The most incredible sleep experience ever created."', '"Every claim must attach to a proof point from the supplied list"'],
            ['**Invented statistics**', '"Studies show 87% of users sleep better."', 'Supply the only permitted numbers; require a source tag per claim; verify every figure manually'],
            ['**Voice drift**', 'Casual slang beside technical jargon in one paragraph', 'Paste 5 approved sentences as voice anchors; require consistency'],
            ['**Low variant diversity**', 'Five rewordings of "sleep better tonight"', 'Require labelled distinct angles and reject conceptual overlap explicitly'],
            ['**Confident wrongness about your product**', 'Describes a feature you do not have', 'Supply the feature list as the only source of truth; SME review before publish'],
            ['**Structural sameness**', 'Every paragraph the same length and shape', 'Human pass 3 (momentum) — no prompt reliably fixes rhythm']
          ]},
        { t: 'key', v: 'Over half of long-form professional social content is now AI-assisted, and audiences have learned the tells. "Verifiably human judgement" is becoming a premium signal. Being able to say *why* your content reads differently, and *how* your process guarantees it, is a commercial position — not a moral one.' }
      ]
    },
    {
      id: 't15-governance', title: 'The five-pass process and governance',
      blocks: [
        { t: 'p', v: 'The framework from track 6, restated as an operating procedure for AI-assisted production. This is the document you show when an interviewer asks how you use AI.' },
        { t: 'steps', v: [
          { n: 1, name: 'Model drafts from a real brief', body: 'Never from a one-line request. The brief carries positioning, proof and constraints.' },
          { n: 2, name: 'Precision pass', body: 'Cut 30%. Active voice. Fix parallelism. Emphatic words last.' },
          { n: 3, name: 'Momentum pass', body: 'Short first sentence, one open loop, vary sentence length, read aloud. Kills the structural sameness no prompt fixes.' },
          { n: 4, name: 'Logic and claims pass', body: 'Verify every number against the source. Check claim classes. Check the do-not-say list. Delete anything you cannot substantiate.' },
          { n: 5, name: 'Voice and texture pass', body: 'Add the interview detail, the specific example, the sentence only you would write. This is the pass that makes it publishable.' }
        ]},
        { t: 'h', v: 'Governance decisions to write down' },
        { t: 'table', head: ['Decision', 'Default position'],
          rows: [
            ['What may be model-drafted', 'Volume work: first drafts, variants, summaries, repurposing, meta descriptions, alt text, research synthesis'],
            ['What must be human-authored', 'Positioning, messaging architecture, brand narrative, original research interpretation, anything containing a claim or a customer name'],
            ['What must never be delegated', 'Strategic decisions, legal and regulated claims, apology and crisis comms, individual customer replies about a serious complaint'],
            ['Data handling', 'No customer PII, unreleased financials, or confidential roadmap in general-purpose tools; check retention terms; use approved tooling'],
            ['Disclosure', 'Follow platform and jurisdiction rules; never fabricate a testimonial, review, or human byline for AI-written text'],
            ['Attribution and accuracy', 'Every statistic verified against primary source before publication; a claims register entry per number'],
            ['Quality gate', 'No AI-assisted asset publishes without a named human reviewer recorded against it']
          ]},
        { t: 'warn', v: 'Two hard lines worth stating in an interview: never present AI-generated text as a named human\'s original words without their sign-off, and never publish a statistic you have not personally traced to a source. Both are career-ending and both are entirely preventable.' },
        { t: 'rubric',
          j: 'Asks a model for copy and edits typos. Cannot explain why output is weak. No governance.',
          c: 'Uses structured prompts with context and constraints, runs a consistent editorial pass, catches most failure modes.',
          s: 'Runs a maintained prompt library with evals, closes the loop with performance data, documents governance and data policy, and can show measured before/after quality with the failure cases they caught.' }
      ]
    }
  ],
  artifact: {
    title: 'Prompt library + governance brief + elevation case',
    steps: [
      { s: 'Build a 6-prompt library for one brand', guide: 'Headlines, lifecycle email, comparison page section, social repurposing, review mining, and an editing/critique prompt. Each with all six anatomy components and the brand context filled in for real.' },
      { s: 'Write the decomposed workflow for one long asset', guide: 'Research → outline → section drafts → assembly → edit, with the prompt and the human checkpoint at each step. Note which steps must never be automated.' },
      { s: 'Run and document one full elevation case', guide: 'Raw output → annotated AI tells → 5-pass edit → final. Show all four states plus time spent per pass and a word-count and reading-grade delta.' },
      { s: 'Build the lightweight eval', guide: '10 fixed briefs, a 5-criterion rubric with 1–5 scoring, and results for two versions of the same prompt. Show that your "improved" prompt is measurably better.' },
      { s: 'Write the performance-feedback prompt with real or plausible test data', guide: 'Include the pattern interpretation and the instruction asking the model to challenge your reading of the data.' },
      { s: 'Write the 1-page governance brief', guide: 'What may be drafted, what must be human, what is never delegated, data handling, disclosure, claims verification, and the named quality gate. Written so a non-writer on the team could follow it.' }
    ]
  }
}

];
