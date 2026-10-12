// Track 20 · Support Leadership: from advisor to head of unit
// Built from a sourced research brief compiled 12 October 2026: GitLab and Buffer career
// frameworks, ICMI and Call Centre Helper on workforce management, COPC balanced-scorecard
// guidance and the R8 standard, SQM Group FCR research, J.D. Power Canada 2025, Gartner,
// Deloitte Digital 2026, Verint 2026, the KCS v6 Practices Guide, TD and RBC disclosures on
// contact-centre AI, OSFI E-23 and the July 2026 AI bulletin, the FCAC complaint-handling
// guideline (revised June 2026) and the OPC call-recording guidance (October 2026).
// Vendor-sourced ranges are labelled "directional"; regulator and standards-body figures are not.
export default [{
  id: 20, phase: 'Service & career', color: '--rs', roles: ['svc'],
  title: 'Support Leadership: from advisor to head of unit',
  sub: 'The ladder, the operations, the numbers and the regulator',
  time: 'Study 5h · Artifact 8h',
  prereq: 'Track 16. Tracks 13 and 18 help with the numbers and the regulator.',
  feeds: 'Feeds track 17 and the lead layer of the Cards Advisor app',
  sources: 'GitLab and Buffer career frameworks · ICMI · Call Centre Helper · COPC R8 · SQM Group · J.D. Power 2025 · Gartner · Deloitte Digital 2026 · Verint 2026 · KCS v6 · TD and RBC disclosures · OSFI E-23 and July 2026 bulletin · FCAC guideline June 2026 · OPC October 2026',
  sections: [

    /* ── 1 ─────────────────────────────── */
    {
      id: 't20-ladder', title: 'The ladder: six rungs and what each one actually tests',
      blocks: [
        { t: 'p', v: 'Support careers stall for one reason more than any other: people get promoted for being good at the current rung and arrive at the next one without its competencies. Recruiter guides for team-lead hiring say it plainly: strong agents are "not automatically strong leaders". The ladder below names what changes at each step, what gets you there, and what the interview is really probing, so you can build the next rung while you are still on this one.' },
        { t: 'plain', v: 'Think of it as six different jobs that happen to share a building. The advisor owns one conversation. The specialist owns the hard conversations and teaches the others. The subject-matter expert owns a domain and the standard. The team lead owns twelve people and a queue. The manager owns a budget, a plan and the regulator\'s deadlines. The head owns the strategy, the AI and the relationship with the people who could shut the unit down. Each one is learnable. None of them is automatic.' },
        { t: 'table', head: ['Rung', 'What changes in scope', 'What gets you promoted to it', 'Typical tenure', 'What the interview tests'],
          rows: [
            ['**1 · Advisor (cards advisor)**', 'One conversation at a time; your metrics are personal: QA, AHT, adherence, FCR, CSAT', 'Product knowledge, verification and fraud discipline, clear writing and speaking, resilience, schedule adherence', '12 to 24 months', 'Role play, de-escalation, compliance recall, attention to detail'],
            ['**2 · Senior advisor / specialist**', 'Complex queues (disputes, fraud, retention, complaints), transfers, floor-walking, piloting new tools. TD piloted its genAI assistant with experienced "resource agents" first (stories.td.com, 15 Aug 2025)', 'Top-quartile quality with stable AHT; peer teaching; written procedures that do not need rework; judgement on exceptions; FCR ownership', '12 to 24 months', 'Case walk-throughs, "show me how you would coach a peer on this call", a knowledge-article writing test'],
            ['**3 · SME / escalations / QA analyst / trainer**', 'Owns a domain (for example card disputes under the network rules), is the Designated Employee tier for complaints in the FCAC sense, scores calls, runs nesting', 'Calibration discipline, root-cause thinking (proximate versus root cause), procedures others can follow, data literacy in QA and WFM tools, teaching', '18 to 36 months', 'Score a recorded call and defend it in a mock calibration; redesign a scorecard item; explain the 56-day complaint clock'],
            ['**4 · Team lead / supervisor**', '10 to 15 reports; accountable for service level, QA, adherence, attrition; runs 1:1s and side-by-sides; first escalation point; intraday calls on breaks and overtime. GitLab\'s manager span is "~10"; Help Scout\'s senior support manager runs six "while staying in the queue"', 'Coaching rather than telling (GROW); specific, timely feedback; reading WFM dashboards; fair, documented performance management; composure when control slips', '2 to 4 years', 'Diagnose an underperformer before acting; resolve an AHT-versus-CSAT conflict; present a team scorecard; how you work with senior management'],
            ['**5 · Manager (site or line of business)**', 'Several leads; budget lines (headcount, overtime, tooling); hiring plan; monthly ops review; BPO relationships; complaint-handling compliance for the unit', 'Capacity planning from forecast to Erlang C to shrinkage to schedules; scorecard design; business cases built on cost per contact and attrition cost; running a monthly review that ends in owned actions', '3 to 5 years (GitLab asks for "3 to 5 years in Support Management" before Senior Manager)', 'Build a staffing plan from a forecast; present a business case for five FTE or a QA tool; walk through an ops review deck; implement a regulator finding'],
            ['**6 · Senior manager / head of support or CX**', 'Multiple sites or channels; strategy, OKRs, the AI roadmap and its governance, the voice-of-customer loop to product, the regulator relationship, the quarterly review upward. GitLab\'s Director "owns the support experience across all products"; its VP "leads monthly Support Key Review" and partners with Finance on capacity planning', 'Strategy and narrative (cost to serve, deflection, experience); governance under OSFI E-23 and the FCAC frameworks; executive communication; leading managers through skip-levels; choosing the operating model (in-house, BPO, AI)', '4 or more years', 'Cut cost per contact 15 percent without hurting FCR; defend an AI deployment to a risk committee; present a QBR; a 90-day plan for a failing site']
          ]},
        { t: 'key', v: 'Build the next rung\'s evidence on this one. An advisor who writes the procedure for the call type the team keeps getting wrong has done specialist work. A specialist who scores three calls a week against the scorecard and brings the disagreements to the QA analyst has done SME work. A lead who can show a forecast-to-schedule calculation has done manager work. Promotion panels look for the rung you already occupy unofficially.' },
        { t: 'case', title: 'Automattic and Help Scout', v: 'Automattic\'s job posts say "We view support as a long-term career, not a stepping stone" and that the company "promotes internally for leadership (including senior leadership)". Help Scout: "We actively promote from within the Customers team - both for managers and specialists." Banks are less explicit, but the same mechanism operates: the people who move up are the ones whose evidence of the next rung already exists.' },
        { t: 'warn', lbl: 'The specialist trap', v: 'The move from rung 3 to rung 4 is the one people get wrong most often. The best scorer, the person everyone escalates to, becomes a lead and keeps doing the work instead of coaching others to do it. The team\'s numbers hold for a quarter on the lead\'s own effort, then fall. Rung 4 is measured on what twelve other people do.' },
        { t: 'drill', v: [
          'Write your current rung and the next one in one line each, then list three pieces of evidence you could produce this month that belong to the next rung.',
          'Take a call you handled this week. Write the one-sentence procedure note a new advisor would need to handle it the same way. That is rung-2 work.',
          'Pick one of the six interview tests and answer it out loud in ninety seconds.'
        ]}
      ]
    },

    /* ── 2 ─────────────────────────────── */
    {
      id: 't20-wfm', title: 'Workforce management: the staffing chain a lead must be able to run',
      blocks: [
        { t: 'p', v: 'Service level is not a mood. It is the output of a chain that starts with a forecast and ends with a schedule, and every link has a number. A lead who cannot read the chain argues about staffing from feel; a manager who can run it argues from arithmetic, which is the only argument Finance accepts.' },
        { t: 'steps', v: [
          { n: 1, name: 'Forecast contacts and handle time per interval', body: 'By half-hour, by day of week, by season. Yesterday\'s pattern is a better predictor than last year\'s average, and a product change or a fraud wave breaks both.' },
          { n: 2, name: 'Convert to required agents with Erlang C', body: 'A.K. Erlang\'s 1917 queueing model gives the probability a contact waits, for a given volume, handle time and staffing. ICMI found nearly 80 percent of centres use some form of it. It assumes callers never hang up, so it overstates staffing where abandonment is real, and skills-based routing may need simulation instead.' },
            { n: 3, name: 'Divide by one minus shrinkage', body: 'Shrinkage is paid time not available for contacts: breaks, meetings, training, absence. Typical totals run 30 to 35 percent. Divide, never add: 70 agents needed at 30 percent shrinkage means 70 ÷ 0.7 = 100 scheduled, not 91.' },
          { n: 4, name: 'Build the schedules', body: 'Shift patterns that cover the interval curve, with offline time placed where it does not hit service level.' },
          { n: 5, name: 'Manage the day', body: 'Adherence, occupancy and the intraday levers. This is where the lead lives.' }
        ]},
        { t: 'formula', label: 'The two ratios people confuse', expr: 'Occupancy = (talk + after-call work) ÷ logged-in time    ·    Utilisation = productive time ÷ total paid time',
          example: 'Utilisation is always the lower number because the denominator includes breaks and training. Agents do not control occupancy; staffing decisions do. Call Centre Helper\'s practitioner consensus: "Occupancy is an output of the staffing decisions you take vs. the demand", roughly 85 percent is sustainable at 200+ agents, 80 percent at 100 to 150, 70 to 75 percent under 100, and "above 80 percent burnout is real". A higher service-level target lowers the occupancy you can hold.' },
        { t: 'table', head: ['Term', 'Definition', 'What a lead does with it'],
          rows: [
            ['Schedule adherence', 'Time in the scheduled state ÷ scheduled time. Targets usually 85 to 95 percent; "100 percent adherence is just unrealistic"', 'Coaches it as a habit, not a punishment; checks the schedule was realistic before blaming the agent'],
            ['Service level 80/20', '80 percent of calls answered within 20 seconds. No documented origin; Verint calls it "arbitrarily chosen in the early days of call center technology"', 'Treats it as a convention to set per queue, not a law. A fraud queue and a rewards queue should not share a target'],
            ['ASA', 'Average speed of answer, over answered calls only', 'Reads it with abandon rate, never alone'],
            ['Abandon rate', 'Calls dropped after a short threshold (10 to 20 seconds) ÷ offered', 'The customer-side cost of under-staffing, in a number'],
            ['Pooling', 'Erlang C rewards scale: splitting one queue into small skills lowers occupancy for the same service level', 'Resists creating a new skill for every product unless the volume justifies it']
          ]},
        { t: 'h', v: 'Intraday levers, cheapest first' },
        { t: 'list', v: [
          'Move breaks and offline time (coaching, training, meetings) away from the peak.',
          'Flex skills: cross-trained agents pick up the queue that is bleeding.',
          'Voluntary time off when over-staffed; voluntary overtime when under.',
          'Queue callback, so the customer keeps their place without holding.',
          'An IVR message that sets expectations and deflects the deflectable.',
          'Escalate to the duty manager for cross-site overflow. This is the expensive one.'
        ]},
        { t: 'case', title: 'What a real-time analyst does all day', v: 'Job postings from Assurant Canada and IBEX in 2025 and 2026 describe the role: "real-time monitoring of all queues, making adjustments to task allocations driven by real-time trends"; "recommend and adjust staffing levels through overtime, VTO and/or skilling"; schedule offline activity "so they don\'t hit service levels"; publish "hourly, mid-day, and end of day performance reports"; first point of contact "for any escalations, outages, system issues". A team lead without a dedicated analyst does a lighter version of all of it.' },
        { t: 'h', v: 'Business continuity' },
        { t: 'p', v: 'Telephony failover with number retention and queueing; work-from-home capability with VPN, headset and home-QA standards; geographic redundancy; continuous backup of interaction records; printed copies of the plan for a network outage; regular testing; self-service notifications to prevent overload. In a bank this sits inside OSFI\'s operational-resilience expectations (E-21) and third-party risk (B-10), and the July 2026 OSFI AI bulletin adds: map AI dependencies, test outage scenarios, keep manual fallbacks.' },
        { t: 'drill', v: [
          'A queue needs 42 agents on the phones at 10:00. Shrinkage is 32 percent. How many must be scheduled? (42 ÷ 0.68 = 61.8, so 62.)',
          'Your team\'s occupancy hit 91 percent for three days. Write the two-sentence note to your manager: what it means and what you are asking for.',
          'List the intraday levers you personally control today, cheapest first.'
        ]}
      ]
    },

    /* ── 3 ─────────────────────────────── */
    {
      id: 't20-quality', title: 'Quality programmes: scorecards, calibration and the AI evaluator',
      blocks: [
        { t: 'p', v: 'A quality programme has three failure modes: a scorecard that measures what is easy rather than what matters, evaluators who disagree with each other, and coaching built on four sampled calls out of five hundred. The fix for each is a design decision, not more effort.' },
        { t: 'h', v: 'Scorecard design, the COPC way' },
        { t: 'list', v: [
          'Programme-level scorecards track service level, quality, efficiency, customer satisfaction and cost. Use weighted composites, not averages.',
          'Standardise categories and weights across sites, vary the targets: "common code, unique floor plans". Review weights annually.',
          'Agent-level scorecards exist to drive coaching, and each session should "focus on one or two areas, not the full scorecard".',
          'Blend hard outcomes (FCR, CSAT) with observable behaviours (verification completed, disclosures read, listening), and tailor by channel.',
          'COPC Release 8.0: "apply the same performance standards regardless of whether a human or technology serves the customer", and "technology and people that make frequent errors must be disabled from transactions until issues are addressed". It also now requires regular audits of the knowledge-management system and an AI ethics policy.'
        ]},
        { t: 'h', v: 'Calibration: the health check of the whole programme' },
        { t: 'steps', v: [
          { n: 1, name: 'Everyone scores the same interaction independently', body: 'QA, supervisors, team leads, the trainer, and the BPO partner if there is one.' },
          { n: 2, name: 'The gaps are the agenda', body: 'Where scores diverge, each evaluator explains the rationale. Nobody defends a number; everyone defends a reading of the standard.' },
          { n: 3, name: 'Write the agreed rationale into the scoring guide', body: 'Otherwise the same argument happens next month.' },
          { n: 4, name: 'Close with three questions', body: '"Did the team grade the call accurately? If not, what should have happened instead? How should similar calls be graded going forward?"' },
          { n: 5, name: 'Track inter-evaluator variance over time', body: 'Monthly cadence. Falling variance means the programme is working; a sudden rise means the standard moved or an evaluator did.' }
        ]},
        { t: 'h', v: 'Auto-QA in 2026: coverage, trust, and who calibrates the machine' },
        { t: 'bench', title: 'Where quality programmes stand', v: [
          { m: 'Manual QA sample', val: '2 to 3% of interactions', note: 'McKinsey: coaches base feedback on "four to six calls out of the five or six hundred the agent conducts every month"' },
          { m: 'Centres using AI to evaluate interactions', val: '9 in 10', note: 'Scorebuddy Q2 2026 pulse, 600 UK and US professionals, fielded July 2026. Vendor-sponsored; directional' },
          { m: 'Trust in AI QA scores', val: '76% managers vs 57% agents', note: 'Same survey. The 19-point gap is a management problem, not a model problem' },
          { m: 'Spreadsheet reliance for QA', val: '65% → 55% year on year', note: 'Scorebuddy and Call Centre Helper report, 11 Dec 2025' }
        ], source: 'Scorebuddy 2025 and 2026 reports (vendor), McKinsey operations insight.' },
        { t: 'key', v: 'Design implication for a bank: let auto-QA score compliance items at 100 percent coverage (verification completed, disclosures read, prohibited phrases absent), keep humans on judgement items (empathy, resolution quality), calibrate the AI evaluator monthly exactly as you would a human one, and apply COPC\'s "disable on frequent errors" rule to the model. The lead\'s new job is defending a score the agent did not watch a person give.' },
        { t: 'ge', label: 'A scorecard item', good: '"Verification: the advisor completed all required identity checks before discussing account details. Yes / No. Evidence: timestamp."', bad: '"Professionalism: the advisor was professional throughout the call. 1 to 5."', why: 'The first is observable, binary and auditable, and an AI can score it at full coverage. The second measures the evaluator\'s mood and will never calibrate.' },
        { t: 'drill', v: [
          'Rewrite three items from any scorecard you have seen into observable yes/no statements with the evidence named.',
          'Two evaluators scored the same call 92 and 71. Write the three questions you would ask in the calibration session before anyone changes a score.',
          'An agent says "the AI marked me down and I don\'t trust it". Write your 60-second reply.'
        ]}
      ]
    },

    /* ── 4 ─────────────────────────────── */
    {
      id: 't20-coaching', title: 'Coaching that sticks, and performance management that is fair',
      blocks: [
        { t: 'p', v: 'Most "coaching" in contact centres is telling: here is your score, here is what to do. Balto\'s survey of 515 managers found they spend 75 percent of their time not coaching but re-coaching, and that a skill takes at least four sessions to stick. The reason is structural. Telling does not change behaviour; a plan the agent built themselves does.' },
        { t: 'table', head: ['', 'Feedback', 'Coaching'],
          rows: [
            ['Direction', 'Leader to agent', 'Agent does most of the diagnosis'],
            ['Content', 'A specific, timely observation: "you skipped the verification question at 1:42"', 'A plan: what the agent will do differently, and how you will both know'],
            ['Use', 'Every time, as close to the call as possible', 'In the 1:1, on one or two areas, never the whole scorecard']
          ]},
        { t: 'h', v: 'GROW (Whitmore, 1992), the model leads actually use' },
        { t: 'steps', v: [
          { n: 1, name: 'Goal — "What do you want?"', body: 'The agent names it. "I want to stop losing the caller when I put them on hold for fraud."' },
          { n: 2, name: 'Reality — "Where are you now?"', body: 'Evidence, not opinion. The auto-QA flags, the CSAT comments, the call they just listened to. Let the agent self-assess before you give your view.' },
          { n: 3, name: 'Options — "What could you do?"', body: 'At least three. The lead adds one only after the agent has run out.' },
          { n: 4, name: 'Will — "What will you do?"', body: 'One behaviour, this week, with a way to check. Written down by the agent.' }
        ]},
        { t: 'bench', title: 'Cadence evidence', v: [
          { m: 'Monthly coaching hours per agent at certified centres', val: '2 to 4 hours for half of them', note: 'J.D. Power; the top scorers allocate more' },
          { m: 'Sessions per agent per month', val: '6, averaging 34 minutes', note: 'Balto, 515 US managers, Oct 2021. Vendor, dated' },
          { m: 'Sessions before a skill sticks', val: 'At least 4', note: 'Same survey' },
          { m: 'COPC rhythm', val: 'Monthly 1:1 on one or two areas', note: 'Mid-month check-ins for agents still ramping' }
        ], source: 'J.D. Power certified-centre data; Balto survey (vendor, 2021); COPC balanced-scorecard guidance.' },
        { t: 'h', v: 'A workable week for a lead of twelve' },
        { t: 'list', v: [
          'One 20-minute 1:1 per agent per week, or fortnightly with a monthly scorecard review.',
          'One side-by-side or screen-share per agent per month; more during nesting.',
          'Two or three call reviews per agent per month, chosen from auto-QA flags rather than random sampling.',
          'One team huddle a week. Fifteen minutes, one topic, one number.'
        ]},
        { t: 'h', v: 'Performance improvement plans in Canada, done so they survive scrutiny' },
        { t: 'list', v: [
          'Only after informal coaching has failed, and the record shows it.',
          'Measurable issues and measurable goals, in a defined 30 to 90-day window.',
          'The training and support the employer will provide, listed.',
          'Targets in line with the job description and any collective agreement, and reflecting the queue the agent actually works. A fraud-queue AHT target applied to a rewards agent is the kind of thing courts notice.',
          'Human-rights and accommodation duties considered (disability, family status) before the plan, not after the grievance.',
          'Regular documented check-ins. Ontario and Alberta employment lawyers report that courts "are now scrutinizing the intent and fairness behind these documents" and have rejected terminations built on a flawed PIP.'
        ]},
        { t: 'ge', label: 'The coaching conversation', good: '"You listened to that call yourself. What did you notice at the point where she went quiet?" (wait) "What are two things you could try next time that happens?"', bad: '"Your empathy score is down again. You need to acknowledge the customer\'s feelings more. Try saying \'I understand how frustrating that must be\'."', why: 'The second hands the agent a phrase that will sound scripted and a diagnosis they did not make. The first produces a plan the agent owns, which is the only kind that survives the next hard call.' },
        { t: 'drill', v: [
          'Take a real call review. Write the GROW questions you would ask, in order, without a single statement in them.',
          'Write the feedback line for one observation from today in the form: behaviour, moment, effect. Under twenty words.',
          'An agent is on a PIP for AHT. List what the plan must contain to be fair, and one thing that would make it unfair.'
        ]}
      ]
    },

    /* ── 5 ─────────────────────────────── */
    {
      id: 't20-metrics', title: 'The metrics ladder and the business case',
      blocks: [
        { t: 'p', v: 'Every rung reports different numbers to different people. An advisor who talks about cost per contact in a 1:1 is confused; a head who talks about adherence in a QBR is wasting the room. Knowing which number belongs where is half of sounding like the rung above you.' },
        { t: 'table', head: ['Level', 'Primary metrics', 'Context metrics'],
          rows: [
            ['Agent', 'QA score, survey-based FCR, CSAT, AHT, schedule adherence, transfer rate, compliance errors', 'Occupancy (they do not control it), knowledge contributions'],
            ['Team', 'Queue service level and ASA, team QA and calibration variance, team FCR and CSAT, adherence, absence, coaching hours delivered, attrition', 'Repeat-contact rate, escalations'],
            ['Unit or site', 'Forecast accuracy, shrinkage actual versus plan, occupancy, abandon rate, cost per contact, contacts per customer, deflection, complaint volumes and 56-day compliance, attrition and time to proficiency, eNPS', 'Overtime percentage, BPO SLA attainment'],
            ['Executive', 'Cost to serve, NPS or CX index, contact rate per customer, deflection and self-service success, complaint trends and regulatory findings, AI governance status, attrition cost', 'Profitability of the function, strategic OKRs']
          ]},
        { t: 'key', v: 'Fix the definitions before you compare anything. FCR is survey-based ("was your issue resolved?") at SQM, and repeat-contact-within-seven-days elsewhere; the two differ by ten points on the same calls. ASA excludes abandons. Abandon rate needs its threshold stated. Deflection needs its definition, its channels and its "no contact within X days" window written down, because the common formulas give different answers.' },
        { t: 'bench', title: 'Benchmarks worth knowing, with their provenance', v: [
          { m: 'First contact resolution, average', val: '~70%', note: 'SQM Group, ~500 North American centres. "A good FCR rate is 70% to 75%". Financial sector 71% in SQM\'s 2021 table' },
          { m: 'World-class FCR', val: '80%+, reached by 5% of centres', note: 'SQM. Every 1-point FCR gain is roughly a 1-point CSAT gain' },
          { m: 'US bank customer satisfaction', val: 'ACSI 80 in 2025 and 2026', note: 'Regional and community banks 83, super-regionals 77' },
          { m: 'Canada retail banking satisfaction', val: 'Big 5 fell 7 points to 604/1,000; midsize rose 5 to 649', note: 'J.D. Power 2025 Canada study, 16 Oct 2025, n=14,399. RBC highest among the Big 5, Tangerine among midsize' },
          { m: 'Cost per contact', val: '$13.50 assisted vs $1.84 self-service', note: 'Gartner, Feb 2024 (median). ContactBabel US 2025: voice $7.16, email $6.05, chat $5.06' },
          { m: 'Agent attrition', val: '~30 to 39% a year', note: 'ContactBabel US ~30%, stable seven years; NICE 2024 actuals 39%, down from 49%' },
          { m: 'Agents likely to leave within six months', val: '31%; 46% of those aged 18 to 34', note: 'Verint State of Agent Experience 2026, 1,000 agents at 300+ seat centres incl. banking' },
          { m: 'Top attrition frustrations', val: 'Unrealistic expectations 47%, no schedule flexibility 45%', note: 'Same Verint report' },
          { m: 'Cost to replace one agent', val: '$10,000 to $20,000', note: 'Vonage range; Frost & Sullivan "approximately $20,000". Build your own from recruiting + training weeks × loaded wage + ramp loss + overtime cover' },
          { m: 'Financial-services AHT', val: '5 to 6 minutes (directional)', note: 'Vendor range, driven by verification. No authoritative 2025 bank figure exists; pull your own' }
        ], source: 'SQM Group; ACSI Finance Study 2025 and 2026; J.D. Power 2025 Canada Retail Banking Satisfaction Study; Gartner; ContactBabel; NICE via secondary; Verint 2026; Vonage and Frost & Sullivan. Directional items are vendor ranges.' },
        { t: 'h', v: 'The three business cases a manager writes' },
        { t: 'formula', label: 'Headcount', expr: 'Forecast → Erlang C requirement → ÷ (1 − shrinkage) → gap in FTE × loaded cost (1.3 to 1.4 × base)  vs  cost of the gap: abandons, complaints, overtime, lost revenue',
          example: 'Show the service-level and abandon impact of under-staffing in dollars first, then the FTE cost. Finance funds the cheaper of the two problems.' },
        { t: 'formula', label: 'Tooling', expr: '(contacts deflected × assisted cost per contact) + (AHT seconds saved × volume × cost per minute) + (QA coverage 2% → 100%, calibration hours saved) + (attrition reduction × replacement cost) − licence − integration − change cost',
          example: 'State a 12 to 24-month payback and name the risk: Deloitte Digital 2026 found AI-mature centres report 85 percent greater profitability, but Intercom found only 10 percent of teams reached mature deployment. Vendor ROI claims describe the top decile.' },
        { t: 'formula', label: 'Attrition', expr: 'Annual cost = departures × (recruiting + training weeks × loaded wage + ramp productivity gap + overtime cover + quality dip)',
          example: 'Then the levers with evidence: realistic scorecards reviewed annually (COPC), schedule flexibility and shift bidding (Verint\'s 45 percent), a visible ladder with pay steps (Buffer\'s model), coaching hours actually delivered (J.D. Power\'s 2 to 4 hours), and removing repetitive work with agent assist. BenchmarkPortal\'s low-attrition centres were associated with remote work (70 percent of them), strong manager support (58 percent) and transparent advancement (37 percent).' },
        { t: 'warn', lbl: 'Time to proficiency', v: 'Vendor ranges run from 4 to 12 weeks for simple tier-one work to 9 to 12 months for financial services, and the attributions are weak. Measure your own: define proficiency as reaching the average of agents with six or more months of tenure on quality, CSAT and FCR, then track weeks to reach it per hiring class. Shopify publishes its own: four weeks of training plus two weeks of mentoring before live channels.' },
        { t: 'drill', v: [
          'Your unit loses 14 agents a year from 60. Build the attrition cost with your own assumptions, line by line, then name the two cheapest levers.',
          'Write the one-paragraph headcount case for 5 FTE, leading with the cost of not hiring.',
          'A vendor claims 40 percent deflection. Write the three questions that establish whether the number means anything.'
        ]}
      ]
    },

    /* ── 6 ─────────────────────────────── */
    {
      id: 't20-knowledge', title: 'Knowledge management: KCS and honest deflection',
      blocks: [
        { t: 'p', v: 'In a bank the knowledge base is not a help centre. It is the governed source of truth that the AI assistant answers from and the regulator audits. TD\'s contact-centre assistant answers only from TD policies and procedures, with a link to the source policy, precisely because the knowledge base is the control. COPC R8 now requires regular audits of it. The methodology most support organisations use to keep it alive is KCS.' },
        { t: 'h', v: 'KCS v6 (Consortium for Service Innovation, 2016): the two loops' },
        { t: 'table', head: ['Loop', 'Practices', 'Who runs it'],
          rows: [
            ['Solve loop', 'Capture at the moment of solving · Structure to the content standard · Reuse by linking the case to the article · Improve every time it is reused ("flag it or fix it")', 'Every advisor, every day'],
            ['Evolve loop', 'Content health (article quality index by sampling) · Process integration · Performance assessment · Leadership and communication', 'Coaches, domain experts, leads']
          ]},
        { t: 'table', head: ['Article state', 'Meaning', 'Who may set it'],
          rows: [
            ['Work in progress', 'Does not yet include a resolution', 'Anyone'],
            ['Not validated', 'Complete, with a resolution, "but we are not confident in the structure or content"', 'KCS Candidates can only create and modify these'],
            ['Validated', '"Complete and reusable, and we are confident in it"', 'Contributors, Publishers, Coaches'],
            ['Archived', 'Defined as having no value; can be restored', 'Domain expert']
          ]},
        { t: 'list', v: [
          '**Roles:** Candidate (KCS I) → Contributor (KCS II, "if you find it, use it, you own it") → Publisher (KCS III, understands external audiences) → Coach (monitors creation, reuse and modify rates) → Knowledge Domain Expert (owns the health of a collection: redundancy, gaps, quality, reuse, cycle time).',
          '**Career use:** the Contributor and Coach roles are rung-2 and rung-3 evidence that costs nothing to start producing.'
        ]},
        { t: 'h', v: 'Measuring self-service without lying to yourself' },
        { t: 'list', v: [
          'KCS Technique 5.12: "no single measure is precise", so triangulate click-stream, surveys and usability tests and watch trends.',
          'The strongest signal: the ratio of new to known issues reaching assisted support. If known issues stop arriving, self-service is working.',
          'Deflection formulas disagree. Deflected ÷ total, help-centre visitors ÷ tickets, and 100 minus ticket-creation rate give different numbers on the same month. Document the definition, the channels and the window.',
          '"Deflected is not resolved." Pair any deflection figure with a success signal: "did this help", or CES on the article.',
          'Vendor benchmarks run 10 to 25 percent for new knowledge bases and claim 50 to 70 percent for mature programmes. The Consortium publishes no number. Treat the claims accordingly.'
        ]},
        { t: 'drill', v: [
          'Take the last call where you had to put someone on hold to check something. Write the knowledge article in the requestor\'s words first, then the resolution. Mark it Not Validated.',
          'Three deflection numbers landed on your desk: 22 percent, 41 percent and 58 percent, all for the same quarter. Write the four questions that reconcile them.'
        ]}
      ]
    },

    /* ── 7 ─────────────────────────────── */
    {
      id: 't20-ai', title: 'AI in the bank contact centre, 2026: what is deployed, what the regulator says, how the job changes',
      blocks: [
        { t: 'p', v: 'The AI conversation in support has moved past "will it replace agents" to "who is accountable for what it says". Knowing the named deployments, the survey reality and the regulatory frame is now table stakes for rung 4 and up, and the fastest way to sound senior in an interview for any of them.' },
        { t: 'table', head: ['Bank', 'What is public', 'Date and source'],
          rows: [
            ['TD', 'Generative AI assistant for contact-centre colleagues, built by Layer 6 on retrieval-augmented generation anchored on TD policies, answers carry links to the source policy. Piloted early 2024 with experienced "resource agents"; hold times fell 15 percent in the pilot; "more than 1,000 contact centre representatives use it every day"', 'stories.td.com, 15 Aug 2025'],
            ['RBC', '"RBC\'s call centre uses genAI to support advisors with a number of tasks from faster access to knowledge, to executing activities on their behalf." RBC Assist and Aiden used by tens of thousands of employees; ~9,000 custom agents built on RBC Assist "with humans in the loop, but the bank is looking to remove that step for some functions"', 'RBC Capital Markets, Oct 2025; Globe and Mail via Euromoney, Mar 2026'],
            ['CIBC', 'CAI chat assistant with 50,000+ employees and ~20,000 daily users; CAI 2.0 agentic workspace in pilot. No contact-centre detail disclosed', 'Wealth Professional, 31 Jul 2026'],
            ['Scotiabank', 'Announced move of contact centres to Google Contact Center AI with LLM summarisation for live agents; delivery not confirmed publicly', 'Apr 2024 announcement']
          ]},
        { t: 'bench', title: 'What the surveys say', v: [
          { m: 'Service leaders planning to explore or pilot customer-facing genAI in 2025', val: '85%', note: 'Gartner, 187 leaders; only 5% had deployed voicebots' },
          { m: 'Organisations with agent assist by end of 2025', val: '73% (predicted)', note: 'Gartner, 27 Aug 2025' },
          { m: 'Leaders who will retain human agents', val: '95%', note: 'Gartner, Jun 2025, 163 leaders; humans kept for "nuanced situations and long-term relationships"' },
          { m: 'Common issues agentic AI will resolve without a human by 2029', val: '80% (predicted)', note: 'Gartner, Mar 2025' },
          { m: 'Centres using agentic AI now', val: '35%', note: 'Deloitte Digital 2026 Global Contact Center Survey, 9 Jun 2026' },
          { m: 'Consumers saying service stayed the same or got worse in 2025', val: 'More than half', note: 'Same Deloitte survey' },
          { m: 'Teams that reached "mature" AI deployment', val: '10% of the 82% who invested', note: 'Intercom 2026 report, 2,400+ teams (vendor). 40% say agents now spend more time training and optimising AI' },
          { m: 'Conversations fully handled by AI with no human', val: '9%', note: 'Cresta 2026 (vendor)' }
        ], source: 'Gartner releases and coverage 2025; Deloitte Digital 2026; Intercom 2026; Cresta 2026. Vendor items directional.' },
        { t: 'h', v: 'What the regulator and the standard require' },
        { t: 'list', v: [
          '**OSFI Guideline E-23 (Model Risk Management)**, final 11 September 2025, effective 1 May 2027: any model including "artificial intelligence or machine learning methods" is in scope, so a contact-centre assistant or an auto-QA model needs an inventory entry, an owner, validation and monitoring.',
          '**OSFI bulletin on generative and agentic AI, July 2026:** "treat AI-generated output as an input to a decision, not the decision itself"; keep a human accountable for material decisions; set limits on autonomy; keep manual fallbacks; map AI dependencies and test outage scenarios; "require third parties to disclose when they use AI to deliver a service".',
          '**COPC R8:** AI must meet the same training, verification and performance standards as people, with an AI ethics policy, and "must be disabled from transactions" when it makes frequent errors.',
          '**FCAC:** complaint rules are channel-neutral. Any expression of dissatisfaction to a bot is a complaint with the same 56-day clock.',
          '**OPC (October 2026):** auto-QA and speech analytics are a new use of the call recording. The purpose stated at the start of the call has to cover it.'
        ]},
        { t: 'h', v: 'How each rung\'s job changes' },
        { t: 'table', head: ['Rung', 'What is different now'],
          rows: [
            ['Advisor', 'Work shifts toward the complex, regulated and emotional contacts: fraud, bereavement, hardship. Verint calls it a "higher order of work". That argues for higher skill bands, not fewer rungs'],
            ['Team lead', 'Coaches from 100 percent auto-QA flags instead of four sampled calls, and has to calibrate the AI evaluator and defend its scores to agents'],
            ['Manager', 'Owns the escalation design: which intents go to a human, what the bot must say about being a bot, how transfers carry context, how containment is measured against the customer\'s own "was it resolved"'],
            ['Head', 'Owns governance: the model inventory and E-23 compliance, vendor AI disclosure, outage fallbacks, and the explanation to the risk committee of why a given use is appropriate']
          ]},
        { t: 'drill', v: [
          'Write the three sentences a bot must say to a caller who expresses dissatisfaction, given the FCAC rule that it is now a complaint.',
          'A vendor demo shows 60 percent containment. Write the question that converts containment into resolution.',
          'Draft the one-paragraph case to a risk committee for using agent-assist summarisation, naming the E-23 obligations it triggers.'
        ]}
      ]
    },

    /* ── 8 ─────────────────────────────── */
    {
      id: 't20-regulated', title: 'Leading in a regulated environment: complaints, conduct, recording, and the reviews upward',
      blocks: [
        { t: 'p', v: 'In a Canadian bank the support unit sits inside a legal regime with dates in it. A lead who knows the dates protects the unit; a manager who runs the unit to them is the one the regulator\'s thematic review praises instead of names. This section is the frame; the cards-specific detail lives in track 16.' },
        { t: 'h', v: 'The complaint-handling regime' },
        { t: 'table', head: ['Requirement', 'Rule', 'Source'],
          rows: [
            ['What counts as a complaint', 'Any expression of dissatisfaction, through any channel, including from unnamed consumers and third parties. Records must be kept', 'FCAC guideline, revised 23 Jun 2026, para 54'],
            ['Acknowledgement', '"Without delay regardless of the channel", with a written Notice of Acknowledgement giving the date received, the process and timelines', 'Paras 44 to 45'],
            ['Referral to a Designated Employee', '"Should not exceed 14 calendar days", and the consumer must be offered the option to escalate before then', 'Paras 30 to 31'],
            ['The deadline', '56 calendar days from first contact to resolve or close; the period "will not be paused for any reason". Resolved if the consumer is satisfied, Closed if dealt with but not satisfied', 'Bank Act framework in force 30 Jun 2022; guideline paras 25 to 27'],
            ['Notice of Final Decision', 'Must state it "marks the conclusion of a Bank\'s internal complaint-handling process" and give the facts, the decision, the redress and how to reach the external complaints body', 'Paras 49 to 52'],
            ['External body', 'OBSI, sole external complaints body for all federally regulated banks since 1 November 2024. Consumers may go once 56 days have elapsed or a final response is issued, and have 180 days after the final response', 'FCAC, Oct 2024'],
            ['Training', '"Initial and ongoing formal training on complaint-handling for all Employees who deal with complaints", with completion and effectiveness monitored', 'Paras 19 to 21'],
            ['Root cause', 'Analyse complaint data for recurring and systemic issues, address the underlying cause, check whether other products or consumers are affected, remediate all affected consumers', 'Paras 18.6, 22 to 24'],
            ['Reporting', 'All complaints handled by a Designated Employee reported to FCAC', 'Paras 53, 57']
          ]},
        { t: 'case', title: 'FCAC thematic review, 31 July 2025', v: 'Six small and medium banks. Findings: they "did not treat every expression of dissatisfaction as a complaint", missed the 56-day deadline, and submitted records that "often lacked required information". Commissioner Shereen Benzvy Miller: "Effective and timely complaint handling is a cornerstone of trust in our financial system." The revised guideline a year later tightened every one of those points.' },
        { t: 'key', v: 'For the person on the phone this means four habits: log the complaint the moment the customer expresses dissatisfaction, know the 14-day referral path, never promise a timeline the 56-day clock cannot keep, and know the exact OBSI wording. For the lead it means a dashboard with days-remaining on every open complaint and a weekly look at the ones past day 40.' },
        { t: 'h', v: 'Conduct: the appropriate-products guideline' },
        { t: 'p', v: 'FCAC\'s Guideline on Appropriate Products and Services (effective 30 June 2022): know the consumer, know the product, train employees on "features, charges, risks and benefits" so they "recommend products that fit client needs without pressuring clients"; "sales targets and incentives should not conflict with these objectives"; monitor sales practices with tools "beyond customer satisfaction surveys"; the bank "remains responsible" for third parties under s. 627.15 of the Bank Act. FCAC has publicly found that some large banks made inappropriate product recommendations. A cards advisor\'s exposure is balance protection, credit-limit offers, fee explanations and hardship handling. A lead must keep sales coaching and appropriateness coaching separate, with evidence of both.' },
        { t: 'h', v: 'Call recording and QA under privacy law' },
        { t: 'list', v: [
          'OPC guidance on recording customer calls, updated 8 October 2026: organisations under PIPEDA must comply "regardless of whether the customer or the organization initiated the call".',
          'Purposes must be ones a reasonable person considers appropriate ("ensuring quality of customer service, dispute resolution, fraud prevention, or training/development of staff") and stated narrowly. Do not label a recording "quality assurance" if it will be used for marketing, profiling or authentication.',
          'Inform the customer at the outset and state the purpose; continuing the call is implied consent; "Customers must be given a choice about whether their voice is recorded", and where recording is not integral, alternatives must be offered.',
          'Voiceprints are "sensitive biometric information" and may need express consent.',
          'Retention limited to the purpose; customers can request access to their own recordings; outsourced call centres are bound by the same rules. Québec\'s Law 25 applies alongside for Québec customers.'
        ]},
        { t: 'h', v: 'The monthly ops review (about sixty minutes)' },
        { t: 'steps', v: [
          { n: 1, name: 'One-page scorecard', body: 'Service, quality, efficiency, CSAT, cost: each versus last month, target and trend.' },
          { n: 2, name: 'Structural trends, not daily noise', body: 'Three-month moving averages.' },
          { n: 3, name: 'Workforce health', body: 'Attrition by tenure band, shrinkage actual versus plan, overtime (consistently above about 5 percent signals structural under-staffing).' },
          { n: 4, name: 'Cost and capacity', body: 'Cost per contact versus budget, schedule efficiency.' },
          { n: 5, name: 'Quality', body: 'QA distribution, calibration variance, training completion.' },
          { n: 6, name: 'Complaints', body: 'Volume, 56-day compliance, top root causes.' },
          { n: 7, name: 'Actions', body: 'Owners and dates. A review without them was a presentation.' }
        ]},
        { t: 'h', v: 'The quarterly business review, upward' },
        { t: 'list', v: [
          'Last quarter\'s commitments and their status, first.',
          'Outcome metrics: FCR, CSAT or NPS, contact rate per customer, cost to serve, complaint and regulatory status.',
          'Drivers and root causes, with the top three themes sent to product and what happened to them.',
          'Workforce: attrition, time to proficiency, engagement.',
          'AI and tooling roadmap with governance status.',
          'Risks. Then asks: headcount, budget, cross-functional dependencies.',
          'Next quarter\'s OKRs, opened for discussion and approval. GitLab\'s Director "drafts and reports quarterly OKRs"; its VP "leads monthly Support Key Review".'
        ]},
        { t: 'h', v: 'Voice of customer: the loop that proves the unit is strategic' },
        { t: 'p', v: 'A three-tier taxonomy (8 to 12 primary causes, then secondary, then tertiary), with the proximate cause ("a dispute was rejected") kept separate from the root cause ("the cardholder agreement wording was ambiguous"). Root-cause coding is mandatory before a final response issues. Each code has an owning team and a threshold (volume, repeat-contact rate, financial impact) at which it becomes a product or process ticket. Close the loop by checking whether the fix reduced contacts for that code. Contact rate per customer is the executive number that shows the loop works. The FCAC guideline made this a regulatory expectation, not a nice-to-have.' },
        { t: 'rubric',
          j: 'Knows the complaint rules exist. Reports whatever the dashboard shows. Coaches by telling. Treats AI as a tool decision rather than a governed model.',
          c: 'Runs the staffing chain, calibrates a scorecard, coaches with GROW, knows the 56-day clock and the 14-day referral, builds a headcount case from a forecast.',
          s: 'Designs the quality programme including the AI evaluator, owns complaint compliance with a days-remaining view, writes business cases that name their risks and payback, runs the ops review to owned actions, and can explain an AI deployment to a risk committee in E-23 terms.' }
      ]
    }
  ],

  artifact: {
    title: 'Unit operating pack — staffing, quality, coaching, compliance, review',
    intro: 'Build it for a real or invented support unit of 40 to 80 agents in a Canadian bank. This is the artefact a team-lead or manager interview asks for in pieces; having the whole pack is the senior signal.',
    steps: [
      { s: 'Build the staffing plan from a forecast', guide: 'A week of half-hour volumes and AHT (invent plausible ones and state them), Erlang C requirement per interval (any public calculator), shrinkage at 30 to 35 percent applied by division, scheduled headcount, and the occupancy you expect. Show the arithmetic.' },
      { s: 'Design the scorecard and the calibration guide', guide: 'Programme level: service, quality, efficiency, CSAT, cost, weighted. Agent level: eight observable items, each yes/no or a defined scale with the evidence named, split into compliance items (auto-QA at 100 percent) and judgement items (human). Add the calibration session format and the inter-evaluator variance you will track.' },
      { s: 'Write the coaching system for a lead of twelve', guide: 'The weekly rhythm (1:1s, side-by-sides, call reviews from flags, huddle), the GROW script with real questions, the feedback form (behaviour, moment, effect), and a fair PIP template that meets the Canadian tests.' },
      { s: 'Write the complaint-compliance checklist and the days-remaining view', guide: 'From the FCAC guideline: what counts, the acknowledgement notice, the 14-day referral, the 56-day clock, the Notice of Final Decision wording, the OBSI handoff, training records, root-cause coding, FCAC reporting. Then a one-page dashboard spec showing every open complaint by days remaining.' },
      { s: 'Write one business case with its risk named', guide: 'Headcount, tooling or attrition. Costs and benefits line by line, payback period, the assumption most likely to be wrong, and what you would measure at 90 days to know.' },
      { s: 'Build the monthly ops review one-pager and the QBR skeleton', guide: 'The seven-part ops review with invented but consistent numbers and three owned actions. Then the QBR outline with the three product themes and the asks.' },
      { s: 'Write the AI governance memo', guide: 'One page to a risk committee: the model (agent assist, auto-QA or a bot), its E-23 inventory entry and owner, the human-accountability line from the July 2026 OSFI bulletin, the manual fallback, the vendor disclosure requirement, the OPC purpose statement the call recording needs, and how containment will be measured against resolution.' }
    ]
  }
}];
