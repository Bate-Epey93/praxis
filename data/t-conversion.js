// Tracks 7, 8, 11 · Conversion, experimentation, lifecycle
export default [

/* ══════════════════ 7 ══════════════════ */
{
  id: 7, phase: 'Conversion', color: '--am', roles: ['cro', 'co', 'cs'],
  title: 'CRO & Conversion Copy',
  sub: 'Make the traffic you already paid for worth more',
  time: 'Study 3h · Artifact 5–6h',
  prereq: 'Tracks 1, 3, 6',
  feeds: 'Feeds tracks 8, 11, 13, 14',
  sources: 'Direct-response practice · WiderFunnel LIFT · 2026 ecommerce benchmark data',
  sections: [
    {
      id: 't7-math', title: 'The metrics that decide everything',
      blocks: [
        { t: 'p', v: 'Conversion rate optimisation is the systematic practice of increasing the share of visitors who take the action you want. Doubling traffic costs money; doubling conversion costs thought. At scale, a tenth of a percentage point is a salary — or a department.' },
        { t: 'formula', label: 'Conversion rate', expr: 'CR = (conversions ÷ visitors) × 100',
          example: '200,000 visitors, 4,000 orders → 2.0%. Always state the denominator: sessions, users, or unique visitors. Mixing them is the most common reporting error in CRO.' },
        { t: 'formula', label: 'Revenue per visitor — the KPI that ends arguments', expr: 'RPV = revenue ÷ visitors  =  CR × AOV',
          example: '2.0% × $1,400 = $28. Lift CR to 2.5% and RPV becomes $35 — a 25% revenue increase on identical traffic. RPV catches the case where a variant raises CR but wrecks order value.' },
        { t: 'formula', label: 'Cart abandonment', expr: '(carts created − purchases) ÷ carts created × 100',
          example: '10,000 carts, 3,000 orders → 70%. Note this is a *rate*, not a diagnosis; the fix depends on where in checkout they leave.' },
        { t: 'formula', label: 'Unit economics guardrails', expr: 'LTV = AOV × purchases/year × years · Payback = CAC ÷ (monthly gross profit per customer)',
          example: 'An LTV:CAC of 3:1 with a payback under 12 months is a common health target. A conversion "win" that halves LTV is a loss; always pair CR with retention.' },
        { t: 'bench', title: 'Ecommerce reality check (2026 aggregated benchmarks)',
          v: [
            { m: 'Global ecommerce conversion rate', val: '~2–3%', note: 'Median Shopify store around 1.4% purchase rate; Americas ~3.1%' },
            { m: 'Add-to-cart rate', val: '~4.6–7.9%', note: 'Median across ~2,800 Shopify stores: 4.6%' },
            { m: 'Cart abandonment', val: '~70%', note: 'Mobile 73–75%, desktop 65–68%; beauty/luxury above 81%, pet supplies ~53%' },
            { m: 'Email campaign open rate', val: '~19–21% all-industry', note: 'Ecommerce campaigns 28–33%; government/nonprofit highest' },
            { m: 'Email click rate', val: '~2.1–2.4%', note: 'Varies 0.8–4.9% by industry' },
            { m: 'Abandoned-cart flow', val: '~50% open, ~6% click', note: 'DTC recovery conversion typically 5–15%; top flows exceed 15%' }
          ],
          source: 'Aggregated 2026 industry benchmark reporting (Klaviyo, Shopify-store studies, Baymard-style abandonment research). Treat as orientation, not targets — your own trailing 90 days is the only benchmark that decides anything.' },
        { t: 'key', v: 'In interviews, never report a lift without its money. Not "CR improved 0.3%" but "0.3 points on 200K monthly visitors at $1,400 AOV is roughly $840K a month, about $10M a year." Same fact; completely different level of candidate.' },
        { t: 'warn', v: 'Benchmarks are the weakest form of evidence in CRO. Traffic mix, price point, brand strength and season swamp industry averages. Use them to sanity-check, never to set goals.' }
      ]
    },
    {
      id: 't7-leak', title: 'Finding the leak before writing a word',
      blocks: [
        { t: 'p', v: 'CRO is triage. The page you feel like fixing is rarely the page losing the most money. Find the largest absolute loss, not the worst percentage.' },
        { t: 'formula', label: 'Opportunity sizing', expr: 'Opportunity = traffic × (achievable rate − current rate) × value per conversion',
          example: 'A page with 15,000 sessions at 1.2% has more upside than one with 900 sessions at 0.4%, even though the second looks worse. Rank by dollars at stake.' },
        { t: 'h', v: 'The funnel diagnostic, stage by stage' },
        { t: 'table', head: ['Symptom', 'Likely cause', 'Copy or UX move'],
          rows: [
            ['High traffic, high bounce', 'Message mismatch with the ad/query, or hero fails in 3 seconds', 'Rewrite hero to echo the entry promise; add one proof above the fold'],
            ['Good engagement, low add-to-cart', 'Value not established, or objections unanswered', 'Mechanism + proof stack; move top objection above the fold'],
            ['High add-to-cart, low checkout start', 'Sticker shock at shipping/tax, or cart lacks reassurance', 'Show total cost earlier; add returns/guarantee copy in cart'],
            ['Checkout started, not finished', 'Form friction, forced account, payment options, trust', 'Guest checkout, fewer fields, trust marks at the payment step'],
            ['Converts but churns / returns', 'Over-promise upstream', 'Fix the promise, not the funnel — this is a positioning problem'],
            ['Mobile much worse than desktop', 'Truncated copy, CTA below fold, tap targets, load time', 'Mobile-first rewrite; test on a real mid-range device']
          ]},
        { t: 'h', v: 'Data sources, in the order you should touch them' },
        { t: 'list', v: [
          '**Analytics funnel** — where the volume dies (GA4 funnel exploration).',
          '**Segment splits** — device, new vs returning, source. Aggregate numbers hide the actual problem.',
          '**Session replay** — watch 10 abandoned sessions. Nothing else builds intuition this fast.',
          '**Scroll and click heatmaps** — how far they get, what they try to click that is not clickable.',
          '**On-page exit survey** — one question: "what stopped you buying today?" Free text.',
          '**Support tickets and pre-sale chat** — the objection list, already written for you.'
        ]},
        { t: 'key', v: 'Write the problem statement with numbers before proposing anything: "The product page gets 42K sessions/month, 61% bounce, and 71% of visitors never scroll past the hero. Estimated recoverable revenue at a realistic 8% relative lift: $118K/month."' }
      ]
    },
    {
      id: 't7-anatomy', title: 'Landing page anatomy',
      blocks: [
        { t: 'p', v: 'A converting page answers the buyer\'s questions in the order they ask them. That order is remarkably stable across categories.' },
        { t: 'steps', v: [
          { n: 1, name: 'Hero — what is it, for whom, why better, what now', body: 'Category clarity + differentiator + one proof + one CTA. Visible without scrolling on a mid-range phone.' },
          { n: 2, name: 'Struggle recognition', body: 'One or two lines proving you understand their situation. This is where problem-aware traffic decides to keep reading.' },
          { n: 3, name: 'Mechanism — how it works', body: 'Three steps, named. Plans reduce anxiety more than promises. Include a screenshot or demo.' },
          { n: 4, name: 'Proof', body: 'Strongest first: demonstration, then original data, then named results. Place proof adjacent to the claim it supports, not in a testimonial ghetto at the bottom.' },
          { n: 5, name: 'Objection handling', body: 'Top three objections by frequency × impact, in the buyer\'s words, answered with mechanisms.' },
          { n: 6, name: 'Offer and risk reversal', body: 'What you get, what it costs, what happens after you click, and what protects them if it fails.' },
          { n: 7, name: 'Close', body: 'Restate the single most important promise; repeat the CTA. Peak-end rule: the last screen is remembered.' }
        ]},
        { t: 'h', v: 'Above the fold: the three-second contract' },
        { t: 'list', v: [
          'Value proposition (what and for whom) — no cleverness that delays comprehension.',
          'One primary CTA, visually dominant, with a friction-reducing microline.',
          'At least one proof element: rating with volume, named logo, or a number with a source.',
          'On mobile: headline plus CTA must fit without scrolling. Test it on a 375px viewport.'
        ]},
        { t: 'ge', label: 'Hero copy',
          good: '"Month-end close in 2 days, not 6. Reconciles straight from your source systems — 340 finance teams, median 2.1 days." + [See a 90-second reconciliation] · "No card. Uses your own export."',
          bad: '"Financial Excellence, Reimagined. Empower your team with next-generation intelligence." + [Learn more]',
          why: 'The first states the category, the differentiator, the proof, the ask, and removes the friction. The second requires two more scrolls before the reader learns what is being sold.' },
        { t: 'warn', v: '"Above the fold is everything" is true for the *decision to continue*, not for the decision to buy. Long pages outperform short ones for cold, high-consideration traffic. The rule is: earn the scroll, then keep earning it.' }
      ]
    },
    {
      id: 't7-friction', title: 'Friction, anxiety and risk reversal (LIFT)',
      blocks: [
        { t: 'p', v: 'WiderFunnel\'s LIFT model gives you a six-lens audit that maps directly onto copy decisions. Value proposition is the plane; the other five are forces on it.' },
        { t: 'table', head: ['Lens', 'Question', 'Typical fix'],
          rows: [
            ['**Value proposition**', 'Is the perceived benefit worth the perceived cost?', 'Quantify the benefit, reframe the price against the true alternative'],
            ['**Relevance**', 'Does this match why they came?', 'Message match with ad/query; dynamic headline by source'],
            ['**Clarity**', 'Is the value and the action obvious in seconds?', 'Cut jargon, one idea per block, explicit CTA verb'],
            ['**Urgency**', 'Why act now — internally and externally?', 'Real deadline, seasonal trigger, or cost-of-delay framing'],
            ['**Anxiety**', 'What could go wrong for them?', 'Risk reversal, security marks, returns policy in the buying moment, real photos'],
            ['**Distraction**', 'What competes with the action?', 'Remove nav on paid landing pages, one CTA per view, kill autoplay and popups mid-task']
          ]},
        { t: 'h', v: 'Friction inventory: count it, don\'t feel it' },
        { t: 'list', v: [
          'Clicks and fields between intent and completion. Every field costs conversion; every optional field costs it for no reason.',
          'Unanswered questions per screen (write them down as you scroll like a first-time buyer).',
          'Surprise costs: shipping, tax, setup fees, minimum seats. Surprise is the most expensive form of friction.',
          'Load time. Doherty threshold: interactions under ~400ms feel instant; every extra second of load measurably drops conversion.',
          'Forced account creation. Guest checkout is one of the most reliably positive changes in ecommerce.'
        ]},
        { t: 'h', v: 'Risk reversal that actually reverses risk' },
        { t: 'list', v: [
          'Name the mechanism, not the sentiment: "we import your last 24 months and you verify before cancelling anything" beats "easy migration".',
          'Make the guarantee specific and easy to claim. A hard-to-claim guarantee reads as a trap.',
          'Put it where the anxiety peaks — next to the price and next to the submit button, not only in the footer.',
          'Say what happens next after payment. Ambiguity aversion kills more carts than price does.'
        ]},
        { t: 'case', title: 'Trial-length copy', v: 'Long trials (365-night, 90-day) work not because buyers use them but because they collapse the anxiety force to near zero at the decision moment. The cost of the returns you eat is usually smaller than the conversion you gain — measure both before copying the tactic.' }
      ]
    },
    {
      id: 't7-proof', title: 'Social proof: taxonomy and placement',
      blocks: [
        { t: 'table', head: ['Type', 'Strength', 'Best placement'],
          rows: [
            ['Aggregate rating + volume ("4.9 ★, 21,400 reviews")', 'High for consumer', 'Hero trust bar, near price, near CTA'],
            ['Named case with a number', 'Highest for B2B', 'Adjacent to the claim it proves'],
            ['Quote with role + company + photo', 'Medium-high', 'Beside objection-handling copy'],
            ['Screenshot / demo of the result', 'Very high', 'Mechanism section'],
            ['Volume claims ("50,000 teams")', 'Medium; high if audience matches', 'Trust bar'],
            ['UGC / unretouched photos & video', 'High for DTC', 'Product gallery, PDP mid-scroll'],
            ['Third-party badges (G2, SOC 2, certifications)', 'Medium; parity signal', 'Footer, security section, checkout'],
            ['Expert or institutional endorsement', 'Category-dependent', 'Authority block, PR page'],
            ['Negative-inclusive reviews (showing 3★)', 'Raises trust', 'Review module — never filter to 5★ only']
          ]},
        { t: 'key', v: 'Proof works in proportion to (a) specificity, (b) similarity to the reader, and (c) adjacency to the claim. A wall of unnamed five-star quotes at the page bottom does almost nothing; one named customer number beside the claim it validates does a lot.' },
        { t: 'ge', label: 'Testimonial editing',
          good: '"We cut close from 7 days to 2. The first month I didn\'t believe the numbers, so we ran both systems in parallel." — Dana R., Controller, 180-person SaaS',
          bad: '"Great product, has really transformed our workflow. Highly recommend!" — Happy customer',
          why: 'The first contains a number, a specific doubt, and the way that doubt was resolved — which pre-handles the reader\'s objection. The second is indistinguishable from a fabrication.' },
        { t: 'warn', v: 'Authentic urgency only. A countdown that resets on refresh, a "3 left in stock" that never changes, or invented "12 people viewing" numbers convert marginally better and cost trust permanently — and in several jurisdictions they are now actionable consumer-protection violations.' }
      ]
    },
    {
      id: 't7-price', title: 'Price, offer and value framing',
      blocks: [
        { t: 'list', v: [
          '**Anchor before you price.** Show the alternative cost (agency retainer, headcount, hours lost) or the crossed-out original, then your number.',
          '**Reframe the unit.** "$1.40/day" for a consumer subscription; "less than one billable hour a month" for professional tools. Same money, different mental account.',
          '**Good-better-best with a designed middle.** Three tiers, the middle recommended, the top tier there to make the middle rational. Name tiers by who they are for, not by metal.',
          '**Pick the right price metric.** Charge for something that grows with the value the customer gets (seats, events, revenue processed) — this is the single biggest pricing lever, and it is a copy problem as much as a finance one.',
          '**Charm pricing works, mostly for value-signalling categories.** $99 vs $100 matters in DTC; in enterprise, round numbers signal confidence.',
          '**Bundle to hide comparison** and unbundle to win a price-sensitive comparison. Both are legitimate; choose deliberately.',
          '**Payment framing.** Monthly with annual discount shown as savings, financing for high tickets, and always show what happens at renewal. Hidden renewal terms are the top driver of chargebacks and one-star reviews.'
        ]},
        { t: 'formula', label: 'Value-to-price ratio you must make visible', expr: 'Perceived value ÷ perceived cost > 1 at the moment of the ask',
          example: 'Both terms are *perceived*. You can raise the numerator (quantified outcomes, proof, bonuses) or lower the denominator (payment terms, guarantee, effort) — copy can move both without changing the price.' },
        { t: 'h', v: 'Mobile conversion copy' },
        { t: 'list', v: [
          'Headlines under ~10 words survive; long headlines wrap to five lines and eat the fold.',
          'One CTA visible at all times — a sticky bar is usually a net win on mobile PDPs.',
          'Front-load every paragraph; assume only the first line is read.',
          'Replace hover states with visible information. Tooltips do not exist on touch.',
          'Test on a real mid-range Android on 4G, not a flagship on office wifi.'
        ]},
        { t: 'rubric',
          j: 'Suggests button-colour and "make it pop" changes. Reports CR without revenue. No segmentation.',
          c: 'Sizes the opportunity, audits with LIFT, writes hypotheses, quantifies revenue impact, checks mobile separately.',
          s: 'Ranks by dollars at stake, ties conversion work to LTV and returns, refuses tactics that trade trust for points, and can name the test they killed because the maths said the sample was unreachable.' }
      ]
    }
  ],
  artifact: {
    title: 'CRO teardown + rewrite with projected revenue impact',
    steps: [
      { s: 'Pick a real page and size the opportunity in dollars', guide: 'Estimate traffic (SimilarWeb or stated figures), state your assumptions explicitly, and compute recoverable revenue at a conservative relative lift. Assumptions labelled as assumptions is a senior habit.' },
      { s: 'Run the full LIFT audit with screenshots', guide: 'Six lenses, annotated screenshots, and a friction inventory: clicks, fields, unanswered questions, surprise costs, load time.' },
      { s: 'Write the problem statement with numbers', guide: 'Traffic, current rate, drop-off stage, evidence source. No opinions in this section.' },
      { s: 'Rewrite the page section by section (all 7 blocks)', guide: 'Hero, struggle, mechanism, proof, objections, offer/risk reversal, close. Annotate the source of each proof point and the objection each block answers.' },
      { s: 'Build the proof and objection map', guide: 'Table: objection (verbatim) | frequency source | where answered on the new page | proof type used.' },
      { s: 'Project impact and state the test plan', guide: 'Revenue model with three scenarios (conservative/expected/optimistic), the primary metric, and what you would need to see to call it a win. Include what you would do if it lost.' }
    ]
  }
},

/* ══════════════════ 8 ══════════════════ */
{
  id: 8, phase: 'Conversion', color: '--am', roles: ['cro', 'cs', 'gtm'],
  title: 'Experimentation & A/B Testing',
  sub: 'Statistics you can defend in a meeting',
  time: 'Study 3h · Artifact 4–5h',
  prereq: 'Track 7',
  feeds: 'Feeds tracks 11, 13, 15',
  sources: 'Frequentist testing practice · sequential testing literature',
  sections: [
    {
      id: 't8-basics', title: 'What a test is, and what to test',
      blocks: [
        { t: 'p', v: 'An A/B test shows two or more versions to randomly assigned visitors **simultaneously** and measures which produces better results on one pre-declared metric. Simultaneity is not a detail: run A this week and B next week and you have measured the week, not the copy.' },
        { t: 'table', head: ['Type', 'What varies', 'Traffic need', 'Use when'],
          rows: [
            ['**A/B**', 'One variable, two versions', 'Lowest', 'You want a clean read on one change'],
            ['**A/B/n**', 'One variable, 3–5 versions', 'Medium-high', 'Several strong distinct hypotheses for the same element'],
            ['**Multivariate (MVT)**', 'Several variables, all combinations', 'Very high', 'You need to know interactions and have the volume to pay for it'],
            ['**Split URL**', 'Whole page or flow', 'Medium', 'Radically different design or structure'],
            ['**Painted door / smoke test**', 'Demand for a thing you have not built', 'Low', 'Validating an offer or feature before investing'],
            ['**Holdout / geo test**', 'Exposure vs no exposure', 'High', 'Measuring incrementality of a channel or campaign']
          ]},
        { t: 'h', v: 'The impact hierarchy — test big things' },
        { t: 'list', v: [
          '**Highest:** offer, price framing, positioning/value proposition, page structure, target audience.',
          '**High:** headline and hero, proof placement, objection handling, form length, checkout flow.',
          '**Medium:** CTA text, image choice, social-proof format, section order.',
          '**Almost always noise:** button colour, font size, minor spacing, punctuation. These consume the same test capacity as a real hypothesis.'
        ]},
        { t: 'key', v: 'Test capacity is a fixed budget of weeks. Every trivial test costs you a real one. When a stakeholder asks for a button-colour test, translate it upward: "same slot, bigger question — let\'s test the offer framing in that block."' }
      ]
    },
    {
      id: 't8-hypothesis', title: 'Hypothesis discipline',
      blocks: [
        { t: 'formula', label: 'The only hypothesis format you need',
          expr: 'Because [evidence], we believe [change] will cause [outcome] for [segment], measured by [primary metric]. We\'ll know we\'re wrong if [counter-signal].',
          example: 'Because scroll maps show 71% never pass the hero and exit surveys cite "not sure it works with our ERP", we believe adding a named-integration proof line in the hero will increase add-to-trial rate for paid-search visitors, measured by trial-start rate. We\'ll know we\'re wrong if trial starts hold but activation drops.' },
        { t: 'list', v: [
          'Evidence first. "I think the headline is weak" is a preference; "71% never scroll past the hero" is a finding.',
          'One primary metric decides the test. Secondary metrics are monitored, never used to rescue a loss.',
          'Include the counter-signal. Stating in advance what would falsify you is the difference between experimentation and confirmation.',
          'Name the segment. A win for mobile paid traffic and a loss for desktop organic is two findings, not one.'
        ]},
        { t: 'warn', v: 'If you cannot write the counter-signal, you are not testing — you are shipping with extra steps.' }
      ]
    },
    {
      id: 't8-stats', title: 'The statistics, properly',
      blocks: [
        { t: 'plain', v: 'Flip a coin ten times and get seven heads: nothing to see. Flip it ten thousand times and get seven thousand heads: the coin is loaded. Statistical significance is just the machinery for telling those two situations apart, and sample size is the number of flips you need before the machinery works.' },
        { t: 'cards', v: [
          { h: 'Statistical significance / p-value', b: 'The p-value is the probability of seeing a difference **at least this large** if there were truly no difference. p < 0.05 (95% confidence) is convention, not law.\n\n**What it is not:** the probability your variant is better, or the size of the effect. Saying "95% confident B wins" is loose shorthand for "if there were no real difference, results this extreme would occur under 5% of the time."' },
          { h: 'Confidence interval', b: 'The range of plausible true effects. Report it. "+7% lift (95% CI: +1% to +13%)" is honest; "+7% lift" alone hides that the true effect might be +1%. Senior candidates report intervals; juniors report point estimates.' },
          { h: 'Statistical power (1−β)', b: 'The chance of detecting a real effect of a given size. Convention: 80%. At 80% power you miss one real winner in five. Underpowered tests are how organisations conclude "nothing works" and stop testing.' },
          { h: 'Minimum detectable effect (MDE)', b: 'The smallest lift the test can reliably see. Smaller MDE needs quadratically more traffic. Halving the MDE roughly quadruples the sample. Decide the MDE from business impact: what lift would be worth shipping?' },
          { h: 'Sample size', b: 'Calculated **before** launch from baseline rate, MDE, power and significance. Rough shape: a 2% baseline wanting to detect a 10% relative lift needs roughly 80,000 visitors per variant. Low-traffic sites should test big swings or use surrogate metrics — not smaller MDEs.' },
          { h: 'Type I and Type II error', b: 'Type I: declaring a winner that isn\'t (false positive; ~5% by design at 95%). Type II: missing a real winner (false negative; ~20% at 80% power). Run 20 tests at 95% and expect roughly one false positive. This is normal, not malpractice — which is why replication of surprising wins matters.' },
          { h: 'Frequentist vs Bayesian', b: 'Frequentist: fixed sample, p-values, "significant or not." Bayesian: posterior probability that B beats A, and expected loss — easier to communicate, and it does not forbid looking. Neither cures peeking on its own; Bayesian tools still need a stopping rule.' },
          { h: 'Sequential testing', b: 'Methods (alpha-spending, group-sequential, always-valid inference) that legitimise checking early by adjusting the threshold. If your team cannot resist peeking, adopt sequential rather than pretending discipline exists.' }
        ]},
        { t: 'formula', label: 'Rough sample size per variant', expr: 'n ≈ 16 × p(1−p) ÷ (absolute MDE)²',
          example: 'Baseline 3% (p=0.03), want to detect +0.3pp absolute: 16 × 0.03 × 0.97 ÷ 0.003² ≈ 51,700 per variant. Use a proper calculator for reporting, but this back-of-envelope tells you in ten seconds whether a test is even possible.' },
        { t: 'key', v: 'The interview question you will get: "A test has run 4 days, shows +25% at 88% confidence, and your manager wants to ship it." Answer: we have not reached the pre-calculated sample size or the significance threshold; early results are inflated by peeking bias and by the novelty effect; the confidence interval almost certainly spans zero; I would let it run — and if we need to decide early, we should have set up a sequential test from the start.' }
      ]
    },
    {
      id: 't8-design', title: 'Designing a test in seven steps',
      blocks: [
        { t: 'steps', v: [
          { n: 1, name: 'Find the problem in data', body: 'Analytics, replays, heatmaps, exit surveys. Quantify it.' },
          { n: 2, name: 'Write the hypothesis', body: 'Because/believe/cause/measured by/wrong if. One primary metric.' },
          { n: 3, name: 'Design the variants', body: 'Change one conceptual thing. If you need to change five elements to express one idea, that is still one variable — but say so explicitly in the write-up.' },
          { n: 4, name: 'Calculate sample size and duration', body: 'Before launch. Round duration up to whole business cycles — minimum one full week, ideally two to four, to cover weekday/weekend and pay-cycle effects.' },
          { n: 5, name: 'QA the implementation', body: 'Both variants render on every major device/browser. Tracking fires once. No flicker. Check the split is actually random. This step catches more invalid tests than any statistical safeguard.' },
          { n: 6, name: 'Run without interference', body: 'No mid-test edits, no overlapping tests on the same element, no traffic reallocation. Log external events (sale, PR, outage) rather than stopping.' },
          { n: 7, name: 'Analyse, decide, document', body: 'Primary metric first, then segments, then guardrail metrics (AOV, returns, activation, support volume). Write the memo even when it is flat.' }
        ]},
        { t: 'h', v: 'Duration rules of thumb' },
        { t: 'list', v: [
          'Minimum one full business cycle, usually 7 days; 14–28 days preferred to dilute novelty effects.',
          'Cover at least one full purchase-consideration window for high-ticket items — a 3-week consideration cycle cannot be measured in 5 days.',
          'Stop at the pre-declared sample size or duration, whichever is later — not whichever looks better.'
        ]}
      ]
    },
    {
      id: 't8-read', title: 'Reading results and doing the money maths',
      blocks: [
        { t: 'table', head: ['Variant', 'Visitors', 'Conversions', 'CR', 'Confidence'],
          rows: [
            ['Control (A)', '45,200', '1,356', '3.00%', '—'],
            ['Variant B', '45,100', '1,443', '3.20%', '92%'],
            ['Variant C', '45,300', '1,495', '3.30%', '97%']
          ]},
        { t: 'list', v: [
          '**C:** 3.30% vs 3.00% = +10% relative, 97% confidence — above threshold. Ship C as the new control.',
          '**B:** +6.7% relative at 92% — below threshold. Not a winner. It is also not a loser; it is unresolved. Do not ship it, and do not conclude the idea failed.',
          '**Also check:** are the visitor counts balanced (they are, within 0.5%)? Do segments agree? Did AOV or refunds move?'
        ]},
        { t: 'formula', label: 'Revenue impact of the winner', expr: 'Δrevenue = traffic × ΔCR × AOV',
          example: '200,000 × (0.033 − 0.030) × $1,400 = $840,000 per month, roughly $10M annualised — from one headline test. State it in both absolute and percentage terms, and state the confidence interval around it.' },
        { t: 'warn', v: 'Do not annualise aggressively without noting decay. Copy wins erode as markets adapt and as the change becomes the new baseline. Report "annualised at current traffic, assuming no decay" — the caveat is what makes the number credible.' },
        { t: 'h', v: 'Flat results are findings' },
        { t: 'p', v: 'A well-powered flat test tells you that element is not a lever for this audience. That is real information: stop spending capacity there and move up the impact hierarchy. Teams that treat flat as failure stop reporting them, and then repeat them.' }
      ]
    },
    {
      id: 't8-pitfalls', title: 'The failure modes',
      blocks: [
        { t: 'cards', v: [
          { h: 'Peeking / stopping early', b: 'Checking daily and calling it when it looks good. Inflates false positives dramatically — with enough looks you can reach "significance" on a coin flip. Fix: pre-declared sample size, or a sequential method that legitimises looking.' },
          { h: 'Sample ratio mismatch (SRM)', b: 'A 50/50 split delivering 52K/48K. Randomisation or tracking is broken, so the groups are not comparable and the result is invalid regardless of how good it looks. Check every test; a chi-square on the split takes seconds.' },
          { h: 'Novelty and primacy effects', b: 'New designs get a temporary lift from being different; loyal users get a temporary drop from disruption. Both decay. Fix: run 2–4 weeks, and re-check the winner 30 days after rollout.' },
          { h: 'Multiple comparisons', b: 'Testing five variants and twelve metrics guarantees a "significant" result somewhere. Fix: one primary metric declared up front; correct thresholds when comparing many variants.' },
          { h: 'Simpson\'s paradox / segment reversal', b: 'Aggregate win, mobile loss. Or aggregate flat, hiding a strong win in one segment and an equal loss in another. Always split by device, source and new/returning.' },
          { h: 'Interaction between concurrent tests', b: 'Two tests on the same funnel step contaminate each other. Keep a test calendar with claimed surfaces; treat it as a lock table.' },
          { h: 'Local maxima', b: 'Years of 1% wins on the same page while the real gain sits in the offer or the audience. Fix: schedule periodic radical tests (split URL, new offer) alongside incremental ones.' },
          { h: 'Winner\'s curse', b: 'Observed lifts of the tests you declare winners are systematically overstated, especially in low-powered tests. Expect implemented wins to under-deliver versus the test estimate — and forecast conservatively.' }
        ]},
        { t: 'h', v: 'Prioritisation frameworks' },
        { t: 'table', head: ['Model', 'Inputs', 'Best for'],
          rows: [
            ['**PIE**', 'Potential, Importance, Ease', 'Fast triage with limited data'],
            ['**ICE**', 'Impact, Confidence, Ease', 'General backlog scoring; beware confidence inflation'],
            ['**PXL**', 'Binary, evidence-based questions (is it above the fold? is it based on research? does it add or remove?)', 'Reducing opinion in scoring — the most defensible of the three']
          ]},
        { t: 'key', v: 'The deliverable that gets you hired is not a clever test — it is a **learning repository**: hypothesis, variants, primary metric, sample, result, confidence interval, segment findings, decision, and the insight carried into the next test. Companies buy compounding, and the repository is where compounding lives.' },
        { t: 'rubric',
          j: 'Calls tests early, tests trivial elements, reports point estimates with no interval, no documentation.',
          c: 'Pre-calculates sample size, writes falsifiable hypotheses, checks SRM and segments, documents results including flats.',
          s: 'Chooses frequentist vs sequential deliberately, sizes the roadmap against traffic reality, reports intervals and expected decay, and maintains the learning repository that makes the next quarter faster.' }
      ]
    }
  ],
  artifact: {
    title: 'Test roadmap + one full test design + results memo',
    steps: [
      { s: 'Build a 10-test roadmap scored with PXL', guide: 'Each row: surface, evidence source, hypothesis one-liner, primary metric, estimated sample need, weeks required at current traffic. Mark which tests are impossible at your traffic and say what you would do instead.' },
      { s: 'Write one test design in full', guide: 'All seven steps. Include the sample-size calculation with inputs shown, the QA checklist, and the counter-signal.' },
      { s: 'Design the variants and justify the variable', guide: 'Show control and variant copy in full. If multiple elements change, argue why it is still one conceptual variable.' },
      { s: 'Write the results memo from a given dataset', guide: 'Use the table in this track or invent plausible data. Include: primary metric verdict, confidence interval, segment splits, guardrail metrics, revenue projection with caveats, and the decision.' },
      { s: 'Write the "we were wrong" section', guide: 'Take a case where the test lost or went flat. What did you learn, what did you retire, what does the next hypothesis become? This section is what senior interviewers read first.' },
      { s: 'Set up the learning repository template', guide: 'Columns as listed in the key insight above, plus a tag taxonomy (element, audience, principle tested) so patterns become searchable after 30 tests.' }
    ]
  }
},

/* ══════════════════ 11 ══════════════════ */
{
  id: 11, phase: 'Conversion', color: '--am', roles: ['co', 'cro', 'cs', 'svc'],
  title: 'Lifecycle, Email & Retention',
  sub: 'The funnel after the funnel',
  time: 'Study 3h · Artifact 5h',
  prereq: 'Tracks 5, 7',
  feeds: 'Feeds tracks 13, 16',
  sources: 'Lifecycle practice · 2026 email and cart-recovery benchmarks',
  sections: [
    {
      id: 't11-map', title: 'The lifecycle map',
      blocks: [
        { t: 'p', v: 'Acquisition gets the credit; lifecycle gets the margin. Retained revenue costs a fraction of new revenue, and lifecycle copy is the cheapest lever most companies leave idle.' },
        { t: 'table', head: ['Stage', 'Buyer\'s question', 'Copy job', 'Primary metric'],
          rows: [
            ['**Acquire**', 'Is this for me?', 'Relevance and promise', 'CR, CAC, RPV'],
            ['**Activate**', 'Can I actually do this?', 'Time-to-value, competence, one next step', 'Activation rate, time to first value'],
            ['**Retain**', 'Is this still worth it?', 'Reinforce realised value, teach depth', 'Retention curve, churn, DAU/MAU'],
            ['**Expand**', 'What else should I use?', 'Adjacent job, upgrade trigger tied to usage', 'NRR, expansion rate, AOV'],
            ['**Advocate**', 'Would I stake my name on this?', 'Make sharing easy and flattering', 'Referral rate, review volume, NPS']
          ]},
        { t: 'key', v: 'Activation is the highest-leverage and most-neglected stage. A visitor who signs up and never reaches value is a full CAC spent on a churn event. Onboarding copy is conversion copy — treat it with the same rigour as the landing page.' },
        { t: 'formula', label: 'Where to spend next', expr: 'Compare marginal $ per point of lift: acquisition CR vs activation rate vs month-2 retention',
          example: 'On most subscription businesses a 5-point activation improvement outperforms a 0.3-point acquisition improvement — and costs less, because you own the surface and need no media budget.' }
      ]
    },
    {
      id: 't11-sequences', title: 'The core sequences, written out',
      blocks: [
        { t: 'h', v: 'Welcome sequence (5 emails)' },
        { t: 'table', head: ['#', 'Timing', 'Job', 'Trigger / principle'],
          rows: [
            ['1', 'Immediate', 'Deliver what was promised + set the frame (who you are, what you believe, what to expect)', 'Reciprocity; highest open rate you will ever get — do not waste it on "welcome!"'],
            ['2', 'Day 2', 'One genuinely useful thing they can act on today', 'Reciprocity, competence'],
            ['3', 'Day 5', 'Named customer story with a number', 'Social proof'],
            ['4', 'Day 8', 'Handle the top objection honestly, including a limitation', 'Honesty, anxiety reduction'],
            ['5', 'Day 12', 'The offer, with a real reason to act now', 'Scarcity, consistency']
          ]},
        { t: 'h', v: 'Abandoned cart / abandoned trial (3 emails)' },
        { t: 'list', v: [
          '**+1 hour** — service tone, not sales tone: "your cart\'s saved, here\'s the link." Highest open rate; carries the least persuasion.',
          '**+24 hours** — the weak link in almost every programme. Do not send "your item is waiting." Send the objection-handler: shipping, returns, sizing, security, or the one review that answers the hesitation.',
          '**+72 hours** — genuine urgency (stock, price change, cohort close) or the last-value reminder. Historically the highest click and recovery of the three.'
        ]},
        { t: 'bench', title: 'What good looks like (2026 aggregated)',
          v: [
            { m: 'Cart-recovery flow open rate', val: '~50%', note: 'Top decile above 65%' },
            { m: 'Cart-recovery click rate', val: '~6%', note: 'Elite flows above 13%' },
            { m: 'Cart-recovery conversion', val: '5–15% of recipients', note: 'DTC; above 15% is top-tier' },
            { m: 'All-industry campaign open', val: '~19–21%', note: 'Post-Apple-MPP opens are inflated — trust clicks and revenue per recipient more' },
            { m: 'Unsubscribe rate', val: '<0.9%', note: 'Above 1% consistently = frequency or relevance problem' }
          ],
          source: 'Aggregated 2026 ESP benchmark reporting.' },
        { t: 'h', v: 'Winback (3 emails, 60–120 days dormant)' },
        { t: 'list', v: [
          '"Did something break?" — service framing, one question, zero offer. Some of your best product feedback arrives here.',
          '"Here\'s what changed since you left" — specific, dated, with proof. Not a feature dump.',
          '"Last email from us on this" — permission-respecting close, with an easy preference downgrade instead of a hard unsubscribe.'
        ]},
        { t: 'ge', label: 'Email 2 of a cart sequence',
          good: 'Subject: "The returns question, answered" · Body: "Most people who pause here are wondering what happens if it doesn\'t fit. 365 nights, free return pickup, no restocking fee — and 3 out of 4 who return once buy a different size instead of leaving. Your cart\'s still here."',
          bad: 'Subject: "Your Puffy Cloud is waiting" · Body: "Don\'t forget the items in your cart! Complete your purchase today."',
          why: 'The good version names the actual hesitation and dissolves it with a mechanism plus a number. The bad version restates a fact the reader already knows and adds no new information — which is exactly why the middle email underperforms in most programmes.' }
      ]
    },
    {
      id: 't11-subject', title: 'Subject lines, preview text and deliverability',
      blocks: [
        { t: 'list', v: [
          'Front-load the first 30–40 characters; mobile truncates the rest.',
          'Preview text is a second headline. Never let it default to "View in browser".',
          'Curiosity must be paid off in the first two lines of the body, or you have trained a distrust reflex.',
          'Test one variable: subject *or* send time *or* offer — not all three, then wonder.',
          'Since Apple Mail Privacy Protection, open rate is a directional metric at best. Optimise for clicks and revenue per recipient; keep opens only for relative subject-line comparisons within the same audience.'
        ]},
        { t: 'h', v: 'Deliverability basics every copywriter should know' },
        { t: 'list', v: [
          '**Authentication:** SPF, DKIM and DMARC must be configured; major mailbox providers now effectively require them for bulk senders.',
          '**Engagement is the ranking signal.** Sending to unengaged addresses harms delivery for the engaged ones. Sunset policies (stop mailing after ~90–180 days of no engagement) raise revenue by shrinking the list.',
          '**List hygiene:** double opt-in where growth quality matters, bounce suppression, and never buy lists.',
          '**One-click unsubscribe** in the header is now expected for bulk mail; hiding the unsubscribe drives spam complaints, which are far more damaging.',
          '**Spam-word paranoia is mostly folklore.** Reputation, authentication and engagement dominate; "free" in a subject line is not what sent you to junk.',
          '**Warm up new domains and IPs** gradually, and never send your first big campaign from a brand-new sending domain.'
        ]},
        { t: 'warn', v: 'Copywriters get blamed for deliverability problems they did not cause. Learn enough to diagnose: sudden drop across all campaigns = infrastructure or reputation; drop on one campaign = content or audience. Knowing which conversation to start is the value.' }
      ]
    },
    {
      id: 't11-segments', title: 'Segmentation, triggers and personalisation ethics',
      blocks: [
        { t: 'p', v: 'Batch-and-blast is a tax on your list. Triggered, segmented messages routinely earn multiples of broadcast performance because they arrive attached to a reason.' },
        { t: 'table', head: ['Segmentation model', 'Definition', 'Use'],
          rows: [
            ['**RFM**', 'Recency, frequency, monetary value', 'Ecommerce: identify VIPs, at-risk, one-time buyers'],
            ['**Lifecycle stage**', 'Lead / trial / activated / paying / dormant', 'Which sequence they belong in at all'],
            ['**Behavioural**', 'Actions taken or not taken', 'Triggers: viewed pricing 3×, invited no teammates, hit a usage cap'],
            ['**Job / use case**', 'Why they hired the product', 'Content and expansion offers that match the actual job'],
            ['**Value tier**', 'Predicted or realised LTV', 'Where to spend human attention (and where not to discount)']
          ]},
        { t: 'h', v: 'Trigger inventory that earns its keep' },
        { t: 'list', v: [
          'Pricing page visited twice in 7 days with no trial → objection-handler, not a discount.',
          'Trial day 3 with zero data imported → activation rescue with the smallest possible next step.',
          'Usage at 80% of plan limit → expansion offer framed as continuity, not upsell.',
          'Support ticket resolved positively → review or referral ask (the single best-timed ask you have).',
          'Two failed payments → dunning sequence in service tone, never in marketing tone.'
        ]},
        { t: 'key', v: 'Personalisation ethics: use data the customer knows you have, in ways they would find helpful rather than surveilling. "Because you imported Stripe data" is fine. Referencing behaviour they never consciously shared reads as creepy and torches trust in one send.' }
      ]
    },
    {
      id: 't11-onboarding', title: 'Onboarding and activation copy',
      blocks: [
        { t: 'p', v: 'Onboarding copy has one job: get the user to the moment where the product proves itself, as fast as possible, with their competence intact.' },
        { t: 'list', v: [
          '**Define the aha moment in a measurable event.** "Imported one data source and viewed a populated dashboard." Not "explored the product."',
          '**Cut the path to it.** Every step between signup and value must justify itself. Delete the tour. Ask for nothing you can infer.',
          '**Write empty states as instructions, not apologies.** "No reports yet — connect a source and your first report builds in about 40 seconds." Empty states are the most-read and least-written copy in software.',
          '**Progress mechanics.** "2 of 3 done" exploits the Zeigarnik effect honestly and lifts completion.',
          '**One next action per screen.** Onboarding is where Hick\'s law does the most damage.',
          '**Celebrate the user, not the product.** "You just closed the month in 4 minutes" beats "Congrats, you\'ve unlocked Reports!"'
        ]},
        { t: 'ge', label: 'Activation email on day 3 of a stalled trial',
          good: 'Subject: "Your trial has 11 days left and no data in it" · Body: "The fastest path is one CSV — 90 seconds, and you\'ll see whether the numbers match your close. If your data lives somewhere awkward, reply with the system name and I\'ll tell you the shortest route."',
          bad: 'Subject: "Getting the most out of your trial" · Body: "Here are 7 features to explore! 1. Dashboards 2. Reports 3. Integrations…"',
          why: 'The good version names the real state, gives one action with a time cost, and offers a human escape hatch. The bad version offers seven choices to a user who has not made one.' }
      ]
    },
    {
      id: 't11-retention', title: 'Churn, winback and the feedback loop',
      blocks: [
        { t: 'h', v: 'Read the retention curve, not the churn number' },
        { t: 'list', v: [
          'Steep drop in the first 7–30 days = activation or promise problem (marketing and onboarding own this).',
          'Steady mid-life decay = habit not formed, or value realised once and never again.',
          'Curve that flattens = you have a retained core; now segment it and find what those users did differently in week one.',
          'A flat curve at a low level is a viable business; a curve that never flattens is not.'
        ]},
        { t: 'h', v: 'Cancellation flows: the most under-written surface in software' },
        { t: 'list', v: [
          'Ask the reason with one open field before offering anything. The answers are your product roadmap and your objection library.',
          'Offer the *right* save, matched to the reason: pause for "too busy", downgrade for "too expensive", a human for "it didn\'t work".',
          'Never dark-pattern the exit. Difficult cancellation is now regulated in several markets and always generates the reviews that cost you future acquisition.',
          'Close warmly and leave the door open with data intact for 30–90 days. Winback of a former customer is the cheapest revenue you will ever write.'
        ]},
        { t: 'h', v: 'Closing the loop back into marketing' },
        { t: 'p', v: 'Cancellation reasons, support tags and NPS verbatims are the highest-quality message-mining sources in the company — and lifecycle owns access to them. Route them into the message bank (track 3) and the objection library (track 5) monthly. This loop is the machine that keeps positioning honest.' },
        { t: 'rubric',
          j: 'Writes campaigns, not systems. Sends to everyone. Judges success on open rate.',
          c: 'Builds triggered flows, segments meaningfully, measures revenue per recipient, writes activation copy deliberately.',
          s: 'Ties lifecycle to unit economics, runs sunset and deliverability hygiene, designs cancellation flows that generate insight, and routes voice-of-customer back into positioning on a schedule.' }
      ]
    }
  ],
  artifact: {
    title: 'Lifecycle audit + full sequences',
    steps: [
      { s: 'Map the current lifecycle of a real product with metrics', guide: 'Five stages, the copy that exists at each, the gap, and the metric you would use. Sign up for something and document what actually arrives — most companies have holes you can name precisely.' },
      { s: 'Write the 5-email welcome sequence in full', guide: 'Subject, preview text, body under 200 words, one CTA, P.S., plus the trigger/principle and the objection each email handles.' },
      { s: 'Write a 3-email cart or trial abandonment flow', guide: 'Email 2 must be the objection-handler, not a reminder. State which objection and where the evidence for it came from.' },
      { s: 'Design the trigger inventory (8 triggers)', guide: 'Trigger event | segment | message | why now | success metric. Include one dunning trigger written in service tone.' },
      { s: 'Rewrite an onboarding path to the aha moment', guide: 'Define the activation event, count the current steps, propose the shortest path, and write the empty-state and progress copy.' },
      { s: 'Design the cancellation flow and the insight loop', guide: 'Reason capture, matched save offers, warm exit. Then the monthly routine that routes reasons into the message bank and objection library, with named owners.' }
    ]
  }
}

];
