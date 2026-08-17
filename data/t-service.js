// Tracks 16, 17 · Customer service craft and career
export default [

/* ══════════════════ 16 ══════════════════ */
{
  id: 16, phase: 'Service & career', color: '--rs', roles: ['svc', 'co', 'cs'],
  title: 'Customer Service & CX Craft',
  sub: 'Basics to intermediate — the craft, the language, the metrics',
  time: 'Study 4h · Artifact 5h',
  prereq: 'Tracks 3, 5, 14 help; can be studied standalone',
  feeds: 'Feeds tracks 11, 13, 17',
  sources: '2026 support benchmark data · service recovery research · CES/Gartner effort research',
  sections: [
    {
      id: 't16-fundamentals', title: 'What customers actually want',
      blocks: [
        { t: 'p', v: 'Service is not about being nice. It is about resolving the problem with as little effort as possible for the customer, and making them feel taken seriously while you do it. Warmth without resolution generates the worst reviews of all, because the customer feels handled rather than helped.' },
        { t: 'h', v: 'The three things every contact is asking for' },
        { t: 'list', v: [
          '**Resolution** — fix it, or tell me plainly that you cannot and what happens instead.',
          '**Low effort** — do not make me repeat myself, chase you, or navigate your org chart. Effort is the strongest predictor of disloyalty: research consistently finds the overwhelming majority of high-effort customers become disloyal, while low-effort experiences retain even after a failure.',
          '**Acknowledgement** — say back what happened in a way that shows you understood, before you start solving.'
        ]},
        { t: 'key', v: 'Order matters: acknowledge → answer → next step. Reversing it ("Here is the fix — also, sorry about that") reads as processing a ticket rather than helping a person, even when the fix is perfect.' },
        { t: 'h', v: 'CS vs CX vs success' },
        { t: 'table', head: ['Function', 'Owns', 'Trigger', 'Success looks like'],
          rows: [
            ['**Customer service / support**', 'Resolving contacts', 'Reactive — the customer reaches out', 'Fast, correct, low-effort resolution'],
            ['**Customer experience (CX)**', 'The whole journey across touchpoints', 'Designed in advance', 'Fewer reasons to contact anyone at all'],
            ['**Customer success**', 'Realising value from the product', 'Proactive, account-based', 'Retention, expansion, adoption'],
            ['**Community / self-serve**', 'Scaled answers', 'Customer searches first', 'Deflection with satisfaction, not deflection with frustration']
          ]},
        { t: 'h', v: 'Two ideas worth carrying into every shift' },
        { t: 'list', v: [
          '**The service-profit chain.** Supported, informed agents produce satisfied customers, who produce loyalty and margin. Where agents lack authority or information, no script fixes the experience — which is why "can I actually solve this?" is a fair question to ask your manager.',
          '**The service recovery paradox.** A well-recovered failure can leave a customer *more* loyal than one who never had a problem. It is not a licence to fail; it is a reason to treat every complaint as the highest-leverage conversation of your day.'
        ]},
        { t: 'h', v: 'The internal customer' },
        { t: 'p', v: 'Your colleagues in engineering, billing and shipping are customers of your handoffs. Vague internal tickets ("customer angry, please help") create the delays that produce the next complaint. Write internal notes with the same discipline as external replies: what happened, what you tried, what you need, by when.' }
      ]
    },
    {
      id: 't16-channels', title: 'Channels, SLAs and response standards',
      blocks: [
        { t: 'table', head: ['Channel', 'Customer expectation', 'Strengths', 'Watch out for'],
          rows: [
            ['**Email / ticket**', 'Hours, not minutes', 'Complex issues, documentation, attachments', 'Ping-pong: each round trip doubles perceived effort'],
            ['**Live chat**', 'Under a minute to first response', 'Quick answers, sales rescue, co-browsing', 'Concurrency degrading quality; abandoned chats'],
            ['**Phone**', 'Immediate, human', 'Emotion, complexity, high-value accounts', 'No written record unless you write one'],
            ['**Social / public review**', 'Fast and public', 'Visible goodwill, brand repair', 'Never debate details in public; move to private, then close the loop publicly'],
            ['**Self-serve / help centre**', 'Instant, findable', 'Scales infinitely, zero wait', 'Stale articles cost more trust than no articles'],
            ['**AI chat / bot first line**', 'Instant, and a human when it fails', 'Triage, order status, simple answers', 'Dead ends. Every bot needs a visible, one-step path to a human']
          ]},
        { t: 'bench', title: 'Response and quality benchmarks (2026 aggregated)',
          v: [
            { m: 'Email first response time (median, manual triage)', val: '~4 hours', note: 'Around 1 hour where AI pre-triages; under 1 hour is now a realistic standard' },
            { m: 'Live chat first response', val: 'Average ~1 min 35 s', note: 'Under 1 min good, under 30 s excellent' },
            { m: 'CSAT cross-industry average', val: '~78/100', note: 'Above 85% is strong; below 75% signals a systemic problem' },
            { m: 'First contact resolution (FCR)', val: '~70%', note: 'Each additional contact on the same issue sharply lowers satisfaction' },
            { m: 'Wait-time sensitivity', val: '≈2–3 CSAT points per extra minute', note: 'A 5-minute wait rates 10–15 points below a 30-second wait' }
          ],
          source: 'Aggregated 2026 support benchmark reporting (SQM-style FCR studies, chat response benchmarks, cross-industry CSAT indices). Use to set direction; your own trailing figures set targets.' },
        { t: 'h', v: 'Designing an SLA that survives reality' },
        { t: 'list', v: [
          'Set **first response** and **resolution** targets separately, by priority tier — conflating them is the most common SLA design error.',
          'Promise what you can hit on your worst day, not your best. A missed SLA is worse than a modest one met consistently.',
          'Publish it. Stated expectations remove the anxiety that generates chase emails and duplicate tickets.',
          'Define business hours and holiday coverage explicitly, and set an auto-reply that states the real window rather than "we\'ll get back to you shortly".',
          'Measure attainment as a percentage within target, not as an average. Averages hide the tail where the angry customers live.'
        ]},
        { t: 'h', v: 'The auto-reply that reduces work' },
        { t: 'code', label: 'Acknowledgement auto-reply', v: `Subject: We've got your message (#48213)

Thanks — this is in our queue and a person will reply by 4pm ET tomorrow at the latest.
Usually much sooner.

If it's urgent — you can't log in, a payment failed, or something is down for your
whole team — reply with URGENT in the first line and it moves to the top.

Two things that solve most issues faster than waiting:
· Reset your password: [link]
· Check current system status: [link]

— [Name], Support` }
      ]
    },
    {
      id: 't16-lifecycle', title: 'Ticket lifecycle, triage and escalation',
      blocks: [
        { t: 'steps', v: [
          { n: 1, name: 'Intake', body: 'Capture the request, the account, and the impact. If the customer has not said what they were trying to do, ask — most first messages describe a symptom, not a goal.' },
          { n: 2, name: 'Classify and tag', body: 'A disciplined taxonomy is how support becomes an intelligence function. Tag: type (bug / how-to / billing / feature request / complaint), product area, root cause once known, and sentiment.' },
          { n: 3, name: 'Prioritise', body: 'Impact × urgency. Impact = how many users and how badly blocked. Urgency = time sensitivity (payment failing, event tomorrow, contract renewal).' },
          { n: 4, name: 'Own it', body: 'One named owner until resolution. Unowned tickets are the source of most "I\'ve emailed three times" escalations.' },
          { n: 5, name: 'Investigate and act', body: 'Reproduce before you explain. Never speculate about a cause in writing to a customer — speculation becomes a promise.' },
          { n: 6, name: 'Resolve and confirm', body: 'State what was done, what changed, and what to do if it recurs. Ask if it is fully resolved rather than assuming.' },
          { n: 7, name: 'Document and feed back', body: 'Update the knowledge base if the answer was not there. Log the root cause. This step is what stops the same ticket arriving 40 more times.' }
        ]},
        { t: 'table', head: ['Priority', 'Definition', 'Typical first response', 'Typical resolution target'],
          rows: [
            ['P1 — critical', 'Service down, data loss, payment blocked at scale', 'Minutes', 'Same day, with hourly updates'],
            ['P2 — high', 'Key workflow broken for one account, no workaround', '1–2 hours', '1–2 business days'],
            ['P3 — normal', 'Broken with a workaround, or how-to question', 'Within SLA (e.g. 8 business hours)', '3–5 business days'],
            ['P4 — low', 'Cosmetic, feature request, general enquiry', 'Within SLA', 'Best effort, with an honest answer about timing']
          ]},
        { t: 'h', v: 'Escalation done properly' },
        { t: 'list', v: [
          'Escalate on **criteria**, not on emotion: threshold breached, needs authority you do not have, legal or safety exposure, or media/social risk.',
          'Escalating is not failing. Sitting on something you cannot solve is.',
          'Write the handoff so the next person needs no archaeology: what the customer wants, what has been tried, what the customer has been told, what you need, by when.',
          'Tell the customer you are escalating, to whom, and when they will hear back. Silence during escalation is where anger multiplies.',
          'Own the loop-back. The customer should hear from *you*, not disappear into another queue.'
        ]},
        { t: 'code', label: 'Internal escalation note', v: `ESCALATION — #48213 — P2 — Acct: Northwind (Enterprise, renewal in 6 weeks)

WHAT THEY NEED: Bulk export of 2024 invoices in CSV; blocked since Tue.
IMPACT: Their auditor deadline is Friday. Finance lead is the champion on our renewal.
STEPS TAKEN: Reproduced on my sandbox — export times out above ~5k rows.
  Tried: date-range chunking (works, 4 batches), account-level flag (no effect).
WHAT I TOLD THEM: It's a known limit on large exports, we're getting them a
  workaround today, and I'd update by 3pm ET.
WHAT I NEED: Engineering to confirm whether the chunked export is safe to run
  server-side, or a manual pull from the data team. By 2pm ET so I keep my promise.
TICKET LINK / LOGS: […]` }
      ]
    },
    {
      id: 't16-language', title: 'The language of service',
      blocks: [
        { t: 'p', v: 'This is where copywriting and support are the same craft. The rules are the same as track 6 — clarity, active voice, front-loading — applied to someone who is already frustrated and reading fast.' },
        { t: 'h', v: 'Rules that change outcomes' },
        { t: 'list', v: [
          '**Answer first, explain second.** Frustrated readers scan for the answer. Do not make them read your reasoning to find out whether they get a refund.',
          '**Own it with "I" and "we".** "I\'ll get that fixed" beats "that will be looked into." Passive voice reads as evasion under pressure.',
          '**Say what you can do, not only what you cannot.** Every "no" carries an alternative or it reads as a door slammed.',
          '**Positive construction.** "That plan includes 3 seats — I can add a fourth for $X, or move you to Team which includes ten" beats "you can\'t have four seats on that plan."',
          '**No blame, ever** — not on the customer, not on a colleague, not on another department. "The order didn\'t go through" not "you entered the wrong card."',
          '**Match their register, do not mirror their heat.** If they are formal, be formal. If they swear, do not.',
          '**Names and specifics.** "Dana, your refund of $148.20 goes back to the Visa ending 4471 — it lands in 3–5 business days" carries more reassurance than three sentences of apology.',
          '**One question at a time** when you need information. A list of five questions gets one answer.',
          '**Never say "as I mentioned"** or anything that implies they failed to read. It is the most reliably escalating phrase in support.'
        ]},
        { t: 'h', v: 'The anatomy of an apology' },
        { t: 'steps', v: [
          { n: 1, name: 'Name what happened, specifically', body: '"Your report ran on stale data for eleven days." Vague apologies read as boilerplate.' },
          { n: 2, name: 'Take proportionate responsibility', body: 'Ours: say so plainly. Not ours: acknowledge the impact without accepting fault you do not own.' },
          { n: 3, name: 'State the impact you understand', body: '"That means the numbers you sent your board were wrong. I understand what that costs you."' },
          { n: 4, name: 'Say what is fixed and when', body: 'A dated, concrete action. No "we\'re looking into it" without a next-update time.' },
          { n: 5, name: 'Say what prevents the repeat', body: 'One sentence. This is the part that converts an apology into trust.' },
          { n: 6, name: 'Make it right where warranted', body: 'Refund, credit, extension. Offer it — do not wait to be asked, and do not over-offer as a reflex.' }
        ]},
        { t: 'ge', label: 'Bad news delivered two ways',
          good: '"I can\'t refund the September invoice — it\'s outside the 30-day window, and I don\'t want to promise something that gets reversed later. What I can do: credit your October invoice by $120 for the days the export was broken, and switch you to annual billing so this billing gap can\'t recur. Want me to apply the credit now?"',
          bad: '"Unfortunately, as per our refund policy, refunds are only available within 30 days of purchase. I apologise for any inconvenience this may cause. Please let me know if there is anything else I can help with."',
          why: 'The first is warm, firm, explains the why, and hands over a real alternative plus a decision. The second hides behind policy language, apologises for nothing specific, and leaves the customer with only escalation as a next move.' },
        { t: 'h', v: 'Phrases to retire' },
        { t: 'table', head: ['Retire', 'Use instead'],
          rows: [
            ['"Unfortunately…"', 'Lead with what you *can* do; keep the constraint in the second clause'],
            ['"As per our policy"', '"Here\'s how this works, and here\'s what I can do within it"'],
            ['"I apologise for any inconvenience"', 'Name the actual impact: "sorry you lost an afternoon to this"'],
            ['"You should have…"', '"Here\'s the quickest way from where you are now"'],
            ['"That\'s not my department"', '"I\'ll get this to the right person and stay on it — you\'ll hear from me by X"'],
            ['"Calm down"', 'Acknowledge the reason for the anger, then move to the fix'],
            ['"There\'s nothing I can do"', '"I can\'t do X. I can do Y or Z — which helps more?"'],
            ['"Per my last email"', 'Restate the information without reference to the previous attempt'],
            ['"Just" ("just click here")', 'Delete it — it implies the task is trivial and the customer is not']
          ]}
      ]
    },
    {
      id: 't16-deescalation', title: 'De-escalation and difficult conversations',
      blocks: [
        { t: 'p', v: 'An angry customer is usually a customer who feels unheard, out of control, or treated unfairly. De-escalation addresses those three feelings before it addresses the facts. Arguing the facts first is what turns a complaint into a review.' },
        { t: 'h', v: 'Frameworks worth memorising' },
        { t: 'table', head: ['Framework', 'Steps', 'Best for'],
          rows: [
            ['**HEARD**', 'Hear · Empathise · Apologise · Resolve · Diagnose', 'General complaint handling; the diagnose step feeds the root-cause loop'],
            ['**LAST**', 'Listen · Acknowledge · Solve · Thank', 'Fast channels — chat and phone'],
            ['**LEARN**', 'Listen · Empathise · Apologise · React · Notify', 'Service failures needing follow-up and internal comms'],
            ['**BLAST**', 'Believe · Listen · Answer · Solve · Thank', 'Retail and frontline, where believing the customer first is the whole game']
          ]},
        { t: 'h', v: 'The mechanics under the frameworks' },
        { t: 'list', v: [
          '**Let the first wave finish.** Interrupting resets the anger. In chat, this means not firing a macro at the first line of a long message.',
          '**Reflect back the specific grievance** in your own words. "You\'ve been charged twice and the first person told you it was refunded a week ago" — proof of listening beats a sentence of empathy vocabulary.',
          '**Empathise with the situation, not the emotion.** "That\'s a frustrating way to lose an afternoon" lands; "I understand you\'re upset" reads as a script.',
          '**Return control.** Offer two real options. Choice is what dissolves the feeling of being trapped.',
          '**Slow your pace.** Shorter sentences, no jargon, no rapid-fire questions.',
          '**Fix the sequence, not just the issue** — if they were told something wrong earlier, name that explicitly. Unacknowledged prior failures are what escalate to management.',
          '**Never defend a colleague\'s error to the customer.** Acknowledge the impact, resolve, and handle the coaching internally.'
        ]},
        { t: 'h', v: 'Boundaries and abuse' },
        { t: 'list', v: [
          'Anger is acceptable; abuse is not. Personal insults, slurs and threats warrant a warning, then a documented end to the contact.',
          'The warning must be explicit and calm: "I want to help and I will keep working on this. I can\'t continue if the language stays personal — if it does, I\'ll close this contact and email you the next steps."',
          'Document verbatim, factually, without editorialising. That record protects you and the customer.',
          'Tell your manager the same day. Emotional labour compounds silently; unreported abuse is how good agents burn out.',
          'Know your organisation\'s policy before you need it — mid-conversation is the wrong time to be guessing at your authority.'
        ]},
        { t: 'h', v: 'Saying no well' },
        { t: 'steps', v: [
          { n: 1, name: 'Answer the question directly', body: '"No, I can\'t waive the fee." Burying the no wastes their time and reads as evasion.' },
          { n: 2, name: 'Give the real reason in one sentence', body: 'No policy-speak. Real reasons are respected far more often than they are argued with.' },
          { n: 3, name: 'Offer the nearest thing you can do', body: 'Two options if possible.' },
          { n: 4, name: 'Leave the door open', body: 'Where the answer could change ("if you upgrade before renewal, this becomes possible"), say so.' }
        ]}
      ]
    },
    {
      id: 't16-scripts', title: 'Scenario scripts',
      blocks: [
        { t: 'p', v: 'Read these as structures, not word-for-word scripts. Copying wording verbatim is how a team ends up sounding like a robot; internalising the *moves* is how it ends up sounding human.' },
        { t: 'script', title: 'Angry customer, second contact, prior wrong answer',
          v: [
            { who: 'Customer', line: '"This is the third time. Someone told me last week it was refunded and it clearly wasn\'t. Absolutely useless."', tone: 'bad' },
            { who: 'You', line: '"You were told last Tuesday the $148 was refunded, and it wasn\'t — I can see the note and I can see there\'s no refund on the account. That shouldn\'t have happened and I\'m sorry you\'ve had to come back twice for it."', tone: 'you' },
            { who: 'Why', line: 'Names the specific failure, confirms their version with evidence, apologises for the *repetition*, not vaguely.' },
            { who: 'You', line: '"I\'m processing it now while we\'re talking — $148.20 back to the Visa ending 4471, 3–5 business days, reference R-9911. I\'ll email you that confirmation in the next two minutes so you have it in writing."', tone: 'you' },
            { who: 'Why', line: 'Immediate action, exact amount, exact card, timeframe, reference number, written proof. Specificity is what rebuilds trust.' },
            { who: 'You', line: '"One more thing so this doesn\'t happen to the next person — I\'ve flagged the note that said it was processed. Is there anything else outstanding from those three contacts?"', tone: 'you' },
            { who: 'Why', line: 'Shows systemic fix, then checks for the *other* unresolved thing that would otherwise trigger contact four.' }
          ]},
        { t: 'script', title: 'Refund request outside policy (and you cannot grant it)',
          v: [
            { who: 'Customer', line: '"I want a full refund. I\'ve barely used it for six months."' },
            { who: 'You', line: '"I can\'t refund the six months — the window is 30 days and I don\'t want to promise something finance would reverse later. Here\'s what I can do."', tone: 'you' },
            { who: 'You', line: '"I can cancel now so nothing renews, and refund this month\'s $49 since it billed two days ago. Or, if the reason it went unused is the setup, I can put you with the onboarding lead this week and pause billing while you decide. Which is more useful?"', tone: 'you' },
            { who: 'Why', line: 'Direct no, honest reason, two real options, one question. The second option addresses the *cause* of non-use, which is often what they actually want.' }
          ]},
        { t: 'script', title: 'Outage / incident, mid-event',
          v: [
            { who: 'Customer', line: '"Is it down? I have a client presentation in an hour."' },
            { who: 'You', line: '"Yes — dashboards have been failing to load since 9:12am ET. Engineering is on it, and the status page updates every 15 minutes: [link]."', tone: 'you' },
            { who: 'You', line: '"For your presentation in an hour: exports still work, so I can pull your Q3 numbers into a PDF and email them within ten minutes. Want me to do that now?"', tone: 'you' },
            { who: 'Why', line: 'Confirm plainly, give facts with timestamps and no spin, then solve *their* actual deadline rather than only reporting on yours. During incidents, honesty and a workaround beat reassurance.' }
          ]},
        { t: 'script', title: 'Feature request you must decline',
          v: [
            { who: 'Customer', line: '"We need Salesforce sync. When is it coming?"' },
            { who: 'You', line: '"It\'s not on the roadmap for this year — I\'d rather tell you that than say \'soon\'. Two things I can do: log your use case with the details so it counts in prioritisation, and show you the Zapier route some teams use in the meantime, which handles contact sync but not custom objects."', tone: 'you' },
            { who: 'Why', line: 'Honest timing, no false hope, real workaround with its limitation stated. Over-promising a roadmap item is the most common source of churn-with-anger.' }
          ]},
        { t: 'script', title: 'Cancellation with a genuine save attempt',
          v: [
            { who: 'Customer', line: '"Please cancel my account."' },
            { who: 'You', line: '"Done — I\'ve cancelled it, so nothing renews on the 14th, and your data stays available for 90 days if you export or come back."', tone: 'you' },
            { who: 'Why', line: 'Do the thing they asked *first*. Holding the cancellation hostage to a retention pitch is a dark pattern and it produces the one-star review.' },
            { who: 'You', line: '"If you have twenty seconds: what tipped it? I ask because if it\'s something we can fix, that\'s useful to us — and if it\'s price or timing, I may have an option that suits you better than cancelling."', tone: 'you' },
            { who: 'Why', line: 'Permission-based, brief, and the save offer is conditional on the reason rather than sprayed at everyone.' }
          ]},
        { t: 'script', title: 'Billing dispute heading toward a chargeback',
          v: [
            { who: 'Customer', line: '"I never authorised this. I\'m calling my bank."' },
            { who: 'You', line: '"Let\'s sort it here — a bank dispute takes weeks and I can resolve this today. The charge is $240 on 3 August for the annual plan, from the account under d.rivera@… Does that account look like yours?"', tone: 'you' },
            { who: 'Why', line: 'Offers the faster route, states the facts neutrally, verifies identity without accusation. Never imply fraud, and never speculate in writing.' },
            { who: 'You', line: '"If that renewal wasn\'t what you expected, I can refund it today and switch you to monthly. Either way you\'ll have written confirmation in five minutes."', tone: 'you' },
            { who: 'Why', line: 'A refund now usually costs less than a chargeback fee, a lost customer, and a damaged dispute ratio. Resolve fast, document, move on.' }
          ]}
      ]
    },
    {
      id: 't16-selfserve', title: 'Self-service, knowledge base and macros',
      blocks: [
        { t: 'p', v: 'The best support experience is the one that never needed a person. Knowledge base writing is content strategy applied to a queue — and it is a natural bridge role between support and marketing.' },
        { t: 'h', v: 'Article structure that works' },
        { t: 'steps', v: [
          { n: 1, name: 'Title = the question they typed', body: '"Why did my export time out?" not "Export troubleshooting". Titles are the search index.' },
          { n: 2, name: 'One-line answer at the top', body: 'Complete and self-contained. This is also what gets extracted by search and AI assistants (track 10).' },
          { n: 3, name: 'Who this applies to', body: 'Plan, role, platform. Saves the wrong reader from following the wrong steps.' },
          { n: 4, name: 'Numbered steps with the UI labels in bold', body: 'One action per step. Screenshots only where the UI is genuinely ambiguous — they go stale fastest.' },
          { n: 5, name: 'What success looks like', body: '"You\'ll see a green Completed badge." Lets the reader self-verify instead of contacting you.' },
          { n: 6, name: 'If it did not work', body: 'The two most common failure branches, then the path to a human.' },
          { n: 7, name: 'Last reviewed date and owner', body: 'Trust signal, freshness signal, and accountability all at once.' }
        ]},
        { t: 'h', v: 'Macros without the robot voice' },
        { t: 'list', v: [
          'Build macros as **skeletons with required blanks** — a macro that can be sent without editing will be sent without reading.',
          'Open with a line that only applies to this customer. One personalised sentence rescues an otherwise templated reply.',
          'Keep a "never macro this" list: complaints, apologies for a real failure, cancellations, anything emotional or legal.',
          'Version and review macros quarterly; retire ones with low CSAT. Macros drift out of truth as the product changes.',
          'Track macro usage against reply CSAT — the ones that correlate with low scores are usually the ones written for the agent\'s convenience.'
        ]},
        { t: 'h', v: 'Deflection that satisfies' },
        { t: 'list', v: [
          'Measure deflection by **resolution**, not by contacts avoided. A customer who gave up is recorded as deflected and is actually churning.',
          'Search must handle the customer\'s vocabulary, not yours — mine ticket subject lines for the words to use as titles and synonyms.',
          'Put the top five articles where the problem occurs (in the empty state, next to the failing action), not only in the help centre.',
          'Bot handoff rule: a visible route to a human within one step, at any point, with context carried over. Making someone re-explain after a bot failure doubles the perceived effort.',
          'Close the loop: every ticket that had no article becomes a candidate article. That is the single highest-return content habit in support.'
        ]}
      ]
    },
    {
      id: 't16-metrics', title: 'Metrics, QA and the improvement loop',
      blocks: [
        { t: 'table', head: ['Metric', 'What it measures', 'How it gets gamed'],
          rows: [
            ['**CSAT**', 'Satisfaction with a specific interaction', 'Agents solicit ratings only from happy customers; low response rates skew positive'],
            ['**CES** (customer effort score)', 'How hard the customer had to work', 'Rarely gamed and under-used — the strongest loyalty predictor of the three'],
            ['**NPS**', 'Relationship-level likelihood to recommend', 'Treated as a service metric when it is a brand metric; asked too often'],
            ['**FCR** (first contact resolution)', 'Resolved without a follow-up', 'Closing tickets prematurely so they reopen as "new"'],
            ['**FRT / ART**', 'First and average response time', 'Sending an empty "we\'re looking into it" to stop the clock'],
            ['**AHT** (average handle time)', 'Efficiency per contact', 'Rushing customers; the most dangerous metric to incentivise alone'],
            ['**Backlog / age of oldest ticket**', 'Queue health', 'Quietly closing old tickets'],
            ['**SLA attainment %**', 'Share answered within target', 'Retroactive priority downgrades'],
            ['**Contact rate per 100 customers**', 'Whether the product is generating avoidable work', 'Hard to game — which is why it is the best strategic metric here']
          ]},
        { t: 'key', v: 'Pair every efficiency metric with a quality metric. AHT alone produces fast, useless service. FCR alone produces over-long single contacts. The honest headline pair is **CES with FCR**, reported alongside contact rate per 100 customers.' },
        { t: 'h', v: 'A QA scorecard you can actually use' },
        { t: 'table', head: ['Dimension', 'What "meets" looks like', 'Weight'],
          rows: [
            ['Accuracy', 'The answer was correct and complete; no speculation', '30%'],
            ['Resolution', 'Issue resolved or a clear owned next step with a date', '25%'],
            ['Tone and empathy', 'Acknowledged the impact; no banned phrases; matched register', '20%'],
            ['Clarity', 'Answer first, plain language, one action per step', '15%'],
            ['Process', 'Correct tags, notes, escalation path, KB updated where needed', '10%']
          ]},
        { t: 'list', v: [
          'Sample 3–5 tickets per agent per week; more is theatre and less is noise.',
          'Calibrate reviewers monthly on the same tickets — unreliable scoring destroys trust in QA faster than no QA.',
          'Coach on patterns, never on single tickets. One bad reply is an event; three of the same kind is a skill gap.',
          'Have agents self-score before the review. It shortens the conversation and surfaces where their model of "good" differs from yours.'
        ]},
        { t: 'h', v: 'The root-cause loop — support as an intelligence function' },
        { t: 'steps', v: [
          { n: 1, name: 'Tag consistently', body: 'Root cause, not just symptom. This is only possible with a maintained taxonomy.' },
          { n: 2, name: 'Rank monthly by volume × handle time × sentiment', body: 'The top five drivers of avoidable contact.' },
          { n: 3, name: 'Route them to an owner', body: 'Product bug, unclear UI copy, missing KB article, misleading marketing claim, or broken process. Each has a different owner, and naming it is the value you add.' },
          { n: 4, name: 'Report back with money', body: '"Driver #2 is 340 contacts a month at 11 minutes each — roughly 62 agent-hours. A one-line UI copy change removes most of it."' },
          { n: 5, name: 'Feed marketing and product', body: 'Objections into the objection library, verbatim pain into the message bank, recurring confusion into onboarding copy.' }
        ]},
        { t: 'key', v: 'This loop is how a support role becomes a strategic one — and it is exactly the story that lets a support background convert into a content, CX or product-marketing career. You have direct access to the highest-quality voice-of-customer data in the company.' }
      ]
    },
    {
      id: 't16-trust', title: 'Trust, privacy and the things you never promise',
      blocks: [
        { t: 'list', v: [
          '**Verify identity before acting on an account** — and know the approved method. Social engineering targets support first because support is helpful by design.',
          '**Collect the minimum.** Never ask for a full card number, a password, or a government ID in a chat or email. If a customer volunteers one, do not repeat it back and follow your policy for scrubbing it.',
          '**Data-subject requests** (access, correction, deletion) have legal deadlines under GDPR and similar regimes — typically one month. Route them immediately rather than treating them as normal tickets.',
          '**Never promise a roadmap date**, a legal outcome, a compensation amount outside your authority, or that "this will never happen again."',
          '**Write every reply as if it will be screenshotted**, because eventually one will be.',
          '**Document facts, not opinions,** in ticket notes. "Customer raised voice and used slurs; contact ended per policy" — never "customer is a nightmare."',
          '**Accessibility in support:** offer an alternative channel, do not rely on screenshots alone to convey instructions, write plainly, and never require a phone call as the only route to resolution.',
          '**Escalate anything alleging harm, discrimination, safety or legal action immediately.** Do not investigate it yourself and do not reply substantively first.'
        ]},
        { t: 'rubric',
          j: 'Sends unedited macros. Apologises without specifics. Reports CSAT only. Escalates on emotion or not at all.',
          c: 'Writes answer-first, personalised replies; de-escalates with a framework; hits SLA; tags consistently; keeps the KB current.',
          s: 'Designs the SLA and QA scorecard; pairs efficiency with quality metrics; runs the root-cause loop with a costed report; handles abuse, privacy and legal-adjacent contacts by policy; and converts support data into product and marketing decisions.' }
      ]
    }
  ],
  artifact: {
    title: 'Support playbook — SLA, macros, QA scorecard, escalation map',
    intro: 'Build this for a real or invented product. It is directly usable as a portfolio piece for support-lead, CX and content-design roles.',
    steps: [
      { s: 'Write the channel and SLA matrix', guide: 'Channels × priority tiers with first-response and resolution targets, business hours, holiday coverage, and how attainment is measured. Justify each target against the benchmark data in this track.' },
      { s: 'Build the triage taxonomy and priority matrix', guide: 'Tag list (type, product area, root cause, sentiment), the impact × urgency matrix with worked examples, and the escalation criteria with named owners.' },
      { s: 'Write 8 macros as editable skeletons', guide: 'Acknowledgement, password/access, billing question, refund inside policy, refund outside policy, bug acknowledged, feature request declined, cancellation confirmation. Every one must have required blanks and a "never send unedited" note where relevant.' },
      { s: 'Write 4 full scenario responses', guide: 'Angry repeat contact, outage, refund refusal, chargeback threat. Include an annotation line per paragraph explaining the move — that annotation is what shows the craft.' },
      { s: 'Write 3 knowledge base articles in the 7-part structure', guide: 'Titles must be real customer questions. Include the one-line extractable answer, the success signal, the failure branches, and a reviewed-on date.' },
      { s: 'Build the QA scorecard and one calibrated review', guide: 'Five weighted dimensions with "meets" definitions, then score one real (anonymised) or invented reply and write the coaching note. Coach on the pattern, not the ticket.' },
      { s: 'Write the monthly root-cause report', guide: 'Top five contact drivers ranked by volume × handle time × sentiment, each with an owner and an estimated cost in agent-hours, plus what you would send to marketing and product.' }
    ]
  }
},

/* ══════════════════ 17 ══════════════════ */
{
  id: 17, phase: 'Service & career', color: '--rs', roles: ['co', 'cs', 'gtm', 'cro', 'svc'],
  title: 'Career as Product',
  sub: 'Position, prove, and get paid for the judgement',
  time: 'Study 2h · Artifact 8h',
  prereq: 'All previous tracks',
  feeds: 'Your next role',
  sources: 'Applied Dunford/Naval · 2026 hiring-market analyses',
  sections: [
    {
      id: 't17-position', title: 'Position yourself the way you would position a product',
      blocks: [
        { t: 'p', v: 'Run your own Dunford canvas. It is uncomfortable and it works, because it forces you off "I do a bit of everything" — which reads as junior regardless of experience.' },
        { t: 'table', head: ['Canvas step', 'Applied to you'],
          rows: [
            ['Competitive alternatives', 'Other candidates, an agency, a contractor, promoting someone internally, AI tools plus a junior, or hiring nobody'],
            ['Unique attributes', 'The intersections nobody else in the pile has. Cross-functional range, second language, sector depth, a documented AI methodology, support-plus-marketing background'],
            ['Value enabled', 'What the org can do that it currently cannot: one owner across content and lifecycle; bilingual campaigns without an agency; AI throughput without brand drift'],
            ['Best-fit employer', 'Where those attributes are worth a premium — bilingual or regulated organisations, internationally expanding SaaS, support-heavy products, public-sector contractors'],
            ['Category', 'What you call yourself. Not "copywriter". "Content strategist (AI-integrated)", "lifecycle and conversion writer", "CX content lead", "product marketing generalist"']
          ]},
        { t: 'formula', label: 'Positioning statement for a person',
          expr: 'For [employer type] who need [capability], I am the [category] who [value]. Unlike [alternative], I [difference], proven by [artefact].',
          example: 'Test it the same way: could another candidate copy it and have it be true? If yes, it is a job title, not a position.' },
        { t: 'h', v: 'Specific knowledge: the part that cannot be trained' },
        { t: 'p', v: 'Naval\'s idea, applied literally: what do you know that feels like play to you and work to others? Cross-cultural fluency, an unusual sector background, a genuine editorial ear, comfort with data, a support past that gives you real customer language. Combinations are defensible; single skills are not.' },
        { t: 'key', v: 'The indispensability stack for 2026: strategic judgement + audience/cultural intelligence + systems design + AI orchestration + original voice + frontier knowledge (GEO/AEO). Any one of those is replaceable. The combination is not, and the combination is what a portfolio has to demonstrate.' }
      ]
    },
    {
      id: 't17-roles', title: 'The role map — what each interview is really testing',
      blocks: [
        { t: 'table', head: ['Role', 'Core question they are answering', 'What the assessment usually is'],
          rows: [
            ['**Copywriter / conversion writer**', 'Can you write copy that sells and take an edit?', 'Timed writing test: headline set, landing section, email. They read for specificity and structure'],
            ['**Content strategist / lead**', 'Can you own discovery and results, not just output?', 'Strategy exercise: audit + pillar plan + measurement. They read for the stop list and the business linkage'],
            ['**Content SEO / discovery manager**', 'Can you grow qualified organic demand under AI-driven search?', 'Keyword/architecture exercise, sometimes a GEO question. They read for intent literacy and cannibalisation awareness'],
            ['**Product marketing manager**', 'Can you position, launch, and enable sales?', 'Positioning exercise or launch brief, plus a competitive teardown. They read for motion diagnosis and enablement thinking'],
            ['**Lifecycle / CRM manager**', 'Can you move activation and retention with messaging?', 'Sequence design plus a segmentation plan. They read for triggers and metric discipline'],
            ['**CRO / experimentation**', 'Can you form and read tests honestly?', 'Page teardown plus a test design. They read for statistics literacy and revenue framing'],
            ['**Customer service / support specialist**', 'Can you resolve, de-escalate, and write clearly under pressure?', 'Written scenario replies, sometimes a role-play. They read for answer-first structure and ownership language'],
            ['**Support lead / CX manager**', 'Can you design the system and improve it with data?', 'SLA/QA design or a root-cause exercise. They read for metric pairing and coaching approach']
          ]},
        { t: 'h', v: 'What the 2026 market is signalling' },
        { t: 'list', v: [
          '**Analytics and writing are the two most-listed requirements** in content marketing posts. Data literacy is no longer a differentiator; its absence is a disqualifier.',
          '**Ownership language dominates job descriptions:** own discovery, own performance, own the channel. Output-only framing in your CV reads as a step down.',
          '**AI is a baseline expectation** in roughly a third of senior posts, while explicit "prompt engineering" appears in very few. Show governance and process, not tool enthusiasm.',
          '**Content SEO / discovery titles are a growing share of senior listings** — the intersection of content, search and AI-driven discovery is where the demand is.',
          '**Credential preferences are shifting** toward business and technical backgrounds; portfolio evidence outweighs degree pedigree in most content hiring now.',
          '**Bilingual and regulated-market capability commands a premium** where it is a legal requirement rather than a nice-to-have — the candidate pool collapses in those markets.'
        ]}
      ]
    },
    {
      id: 't17-portfolio', title: 'A portfolio that proves judgement',
      blocks: [
        { t: 'p', v: 'Work samples show that you can produce. Case studies show that you can decide. Hiring managers at senior level are buying decisions, so the portfolio has to expose your reasoning, not just your output.' },
        { t: 'steps', v: [
          { n: 1, name: 'Situation', body: 'Business context and constraint in three sentences. Include the awkward parts.' },
          { n: 2, name: 'Diagnosis', body: 'What the data said, what you concluded, what you rejected. Name the frameworks you used.' },
          { n: 3, name: 'Decision', body: 'What you chose and — critically — what you chose *not* to do.' },
          { n: 4, name: 'Execution', body: 'The artefact itself, with annotations at the decision points.' },
          { n: 5, name: 'Result', body: 'A metric with its baseline and timeframe. No metric available? Say so and give the qualitative outcome honestly. Inventing numbers is the fastest way to fail a reference check.' },
          { n: 6, name: 'Learning', body: 'What you would change. This section is where senior readers decide whether you are self-aware.' }
        ]},
        { t: 'h', v: 'The pieces that consistently earn interviews' },
        { t: 'list', v: [
          '**Three case studies**, 400–600 words each, following the structure above.',
          '**One "how I work with AI" page** — philosophy, workflow diagram, governance rules, and a before/after elevation with times. This answers the question every 2026 hiring manager has and few candidates address head-on.',
          '**One measurement artefact** — a measurement plan or a one-page performance report. It proves the analytics claim on your CV.',
          '**One systems artefact** — content ops workflow, messaging architecture, support playbook, or test roadmap. Proves you scale.',
          '**One bilingual or register-shift demonstration**, annotated strategically rather than linguistically, if it is part of your position.',
          '**Teardowns of the target company\'s own marketing**, sent unprompted with the application. The highest-response tactic available, and almost nobody does it.'
        ]},
        { t: 'warn', v: 'Confidentiality: never publish a former employer\'s unreleased data or internal documents. Anonymise ("a 40-person B2B SaaS"), use ranges instead of exact figures, and rebuild the artefact from public information where necessary. A candidate who leaks their last employer\'s numbers is telling you exactly what they will do with yours.' }
      ]
    },
    {
      id: 't17-interview', title: 'Interview performance',
      blocks: [
        { t: 'list', v: [
          '**Name the framework, then leave it behind.** "This looks like a sophistication problem — the category is stage 4, so a better-claim campaign won\'t land." One sentence of framework, then straight into specifics.',
          '**Answer with structure:** situation, action, result, learning. Keep it under 90 seconds and let them ask for depth.',
          '**Always attach money or a metric** to a claimed result, with a baseline. "Conversion went from 2.1% to 2.6% over eight weeks, worth roughly $70K a month at that traffic."',
          '**Have a defensible opinion.** Senior candidates are expected to disagree with something. "I think most brands over-invest in top-of-funnel content and under-invest in activation copy, and here is the evidence I would look at first."',
          '**Say "I don\'t know, here is how I would find out."** It outperforms confident invention every single time.',
          '**Show the stop list.** What you would kill in their current marketing, said respectfully and with reasoning, is the strongest signal of seniority available in an interview.'
        ]},
        { t: 'h', v: 'Take-home assessments' },
        { t: 'list', v: [
          'Do the diagnosis first and show it. Most candidates jump to deliverables; the diagnosis is what differentiates.',
          'State your assumptions explicitly in a short block at the top. Real briefs are always incomplete, and handling that gracefully is the thing being tested.',
          'Include what you would do next and what you would need to validate it.',
          'Respect the stated scope. A 2-hour task returned as a 30-page deck reads as poor judgement, not enthusiasm.',
          'If the task is unpaid and unreasonably large (a full strategy, a real campaign), it is fair to propose a scoped subset instead — that conversation is itself a professional signal.'
        ]},
        { t: 'h', v: 'Questions worth asking them' },
        { t: 'list', v: [
          '"What does the person in this role own that nobody currently owns?"',
          '"How do you decide what not to publish?"',
          '"What is the last piece of content or campaign that changed a business decision here?"',
          '"How does customer feedback reach the people who write the copy?"',
          '"What is your policy on AI-assisted content, and who reviews it?"',
          '"What would make you regret this hire in six months?"'
        ]}
      ]
    },
    {
      id: 't17-comp', title: 'Compensation and the first 90 days',
      blocks: [
        { t: 'list', v: [
          '**Anchor on the role and the market, not your last salary.** Published ranges for content strategist roles have clustered around the low-$70Ks to low-$110Ks in North America, with AI-fluent and bilingual/regulated-market candidates at the upper end. Always verify against current local postings before you quote a number.',
          '**Never give the first number if you can avoid it.** "What range is budgeted for this role?" is a normal, professional question.',
          '**Negotiate the whole package:** base, bonus structure, learning budget, equipment, remote flexibility, title. Title matters more than most candidates think — it sets the ceiling for your next move.',
          '**Get the scope in writing.** Ambiguous scope is how a strategy role becomes a production role by month three.',
          '**Ask what success looks like at 90 days and 12 months** before you accept. If nobody can answer, that is information.'
        ]},
        { t: 'h', v: 'The first 90 days' },
        { t: 'steps', v: [
          { n: 1, name: 'Days 1–30: listen and inventory', body: 'Read every review, ticket tag report, sales call recording and past campaign result you can get. Interview five colleagues across sales, support and product. Do not propose a strategy yet.' },
          { n: 2, name: 'Days 15–45: one visible early win', body: 'Something small, shippable and measurable — fixing the worst-performing high-traffic page, rewriting the abandonment email, building the message bank. Credibility buys you permission for the bigger change.' },
          { n: 3, name: 'Days 30–60: the diagnosis document', body: 'What is working, what is broken, what you propose, what you would stop, with numbers. Circulate it and let people argue with it.' },
          { n: 4, name: 'Days 60–90: the system', body: 'Install one durable thing: messaging architecture, content ops workflow, test roadmap, or support playbook. Systems outlive campaigns and they are what promotions are built on.' }
        ]},
        { t: 'rubric',
          j: 'Portfolio is a list of work samples. Describes duties. No metrics, no reasoning, no stop list.',
          c: 'Case studies with structure and results, clear specialism, can name frameworks and apply them.',
          s: 'Positions with a defensible category and evidence, exposes reasoning and rejected options, documents AI methodology and governance, quantifies results honestly, and arrives with a diagnosis rather than a portfolio tour.' }
      ]
    }
  ],
  artifact: {
    title: 'Job-ready portfolio and role-targeted kit',
    steps: [
      { s: 'Write your positioning statement and test it', guide: 'Full canvas: alternatives, attributes, value, best-fit employer, category. Then the statement. Test whether a peer could copy it and have it be true.' },
      { s: 'Write three case studies (400–600 words each)', guide: 'Situation, diagnosis, decision, execution, result, learning. Name the frameworks. Include what you chose not to do. Anonymise anything confidential.' },
      { s: 'Build the "how I work with AI" page', guide: 'Philosophy in four sentences, workflow diagram, governance rules, and one before/after elevation with time spent per pass. This page answers the question every hiring manager now has.' },
      { s: 'Assemble the artefact index by role', guide: 'Map your artefacts from tracks 1–16 to the four job families you are targeting. Two job descriptions per family, with a keyword-to-artefact table showing which of your pieces evidences each requirement.' },
      { s: 'Write two tailored applications', guide: 'One CV variant plus a cover note per role family. The note should open at the employer\'s awareness level and include one unprompted observation about their marketing or support experience.' },
      { s: 'Prepare the interview kit and the 90-day plan', guide: '10 likely questions with structured answers and the artefact you would reference for each; your stop-list observation about their current work; six questions to ask them; and the 30/60/90 plan you would propose in the final round.' }
    ]
  }
}

];
