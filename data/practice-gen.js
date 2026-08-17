// GENERATED — do not edit by hand.
// Produced by tools/merge-practice.mjs from a practice-engine workflow journal.
// 59 timed drills · 8 take-home simulations.

export const GEN_DRILLS = [
  {
    "id": "headline-drive-audit",
    "trackRef": 1,
    "minutes": 5,
    "title": "Name the drive, fix the dud",
    "prompt": "Five hero headlines for Kettleback, a rota and scheduling tool sold to independent UK physiotherapy clinics:\n\n1. \"Never lose a Saturday to rota admin again.\"\n2. \"The rota tool 1,400 UK physio clinics run on.\"\n3. \"Built by physios, for physios.\"\n4. \"Kettleback: intelligent scheduling, powered by automation.\"\n5. \"See next month's staffing gaps before your patients do.\"\n\nStep 1: label each headline with exactly one drive it pulls on, chosen from: relief from a named pain, safety in numbers, belonging, foresight and control, none.\nStep 2: pick the weakest headline and rewrite it twice, each version pulling on a different drive from that list. Write the drive name in brackets after each rewrite.",
    "constraints": [
      "One label per headline, no hedging with two",
      "Each rewrite is 12 words or fewer",
      "No new product capability may appear in your rewrites"
    ],
    "scoreOn": [
      "Did you give every headline exactly one label rather than two?",
      "Does each rewrite name a specific moment, number or person instead of a category?",
      "Could a colleague guess the drive behind each rewrite without reading your bracket?",
      "Did you resist adding a capability the original five never claimed?"
    ],
    "goodLooksLike": "The labels are decisive and one of them is \"none\". A strong rewrite sounds like \"Know by the 20th whether next month's clinics are covered\", where the drive is doing the work rather than an adjective."
  },
  {
    "id": "cost-of-staying-put",
    "trackRef": 1,
    "minutes": 5,
    "title": "Price the status quo",
    "prompt": "You sell a claims-letter checking workflow to Marbury Insurance, a mid-size UK motor insurer. Their current state:\n\n- 6 claims letter templates, edited ad hoc by 22 handlers\n- Last year 340 letters went out quoting the wrong excess figure\n- Each correction letter costs 11 pounds to post, plus about 18 minutes of handler time\n- 47 of those cases became logged complaints\n- Average handler cost to the business: 24 pounds an hour\n\nWrite three sentences that make staying put feel expensive. One must land on money, one on time, one on a consequence that is neither money nor time. Do the arithmetic where it helps.",
    "constraints": [
      "25 words maximum per sentence",
      "Banned words: inefficient, streamline, costly, pain point",
      "Every number you use must come from the brief or be derived from it"
    ],
    "scoreOn": [
      "Does at least one sentence contain a figure you calculated rather than copied?",
      "Is your third sentence free of money and time, and still concrete?",
      "Would a claims director recognise their own Tuesday in at least one sentence?",
      "Did you keep every sentence under 25 words without dropping a number?"
    ],
    "goodLooksLike": "The money sentence shows the working, roughly \"340 corrections at 11 pounds postage plus 18 minutes of handler time is about 6,200 pounds of undoing your own letters.\" The consequence sentence points at something a regulator or a customer sees."
  },
  {
    "id": "gain-loss-frame-pair",
    "trackRef": 1,
    "minutes": 10,
    "title": "Gain frame, loss frame, verdict",
    "prompt": "Renwick is invoice-chasing software sold to small building firms. Facts you may use, and only these:\n\n- Across 380 accounts, clients recovered an average of 4,200 pounds of overdue invoices in their first month\n- Setup takes about 25 minutes and needs your last 12 months of invoices\n- 39 pounds a month, cancel any time\n- 61 percent of those accounts are firms with fewer than 8 staff\n\nWrite a 30-word hero paragraph framed as a gain, then a 30-word hero paragraph framed as a loss, using the same facts. Then write one sentence naming the specific failure mode of the loss frame with this audience, and say which one you would ship and why.",
    "constraints": [
      "30 words maximum per hero paragraph",
      "No fact, number or claim beyond the five bullets",
      "The loss frame must use money already lost, not a threat you invented"
    ],
    "scoreOn": [
      "Do both paragraphs rest on the same facts with nothing smuggled in?",
      "Does your loss frame describe real money owed rather than a scare you made up?",
      "Did you name a concrete failure mode, such as who it would insult and when, rather than saying it \"could feel negative\"?",
      "Did you actually pick one to ship instead of saying it depends?"
    ],
    "goodLooksLike": "The verdict sentence is the hard part and it should be specific: a loss frame aimed at a sole trader who already knows exactly who owes him can read as being told off by his own software. Name that, then choose."
  },
  {
    "id": "job-story-from-quote",
    "trackRef": 2,
    "minutes": 5,
    "title": "Two job stories from one quote",
    "prompt": "Verbatim from a customer interview:\n\n\"I bought the label printer the week after the Christmas rush. I'd been writing addresses by hand at eleven at night with the kids asleep upstairs, and I got two wrong and both parcels came back to me. My sister does markets too and she'd shown me hers back in November, but I didn't do anything about it until I had that second return sitting on the kitchen table.\"\n\nWrite two job stories in the form: When [situation], I want to [motivation], so I can [expected outcome]. Use only material present in the quote. Then write, on its own line, the trigger moment in six words or fewer.",
    "constraints": [
      "No product names and no feature words in either job story",
      "Each job story under 30 words",
      "The two stories must differ in situation, not just wording"
    ],
    "scoreOn": [
      "Could a completely different solution, not a label printer, satisfy both job stories?",
      "Is each situation a specific moment from the quote rather than a general condition?",
      "Did you name a single event as the trigger rather than a gradual realisation?",
      "Are both stories free of the words print, label, device and app?"
    ],
    "goodLooksLike": "A working situation clause is time-stamped and physical, such as \"When it is gone eleven and I am hand-writing addresses at the kitchen table\". The trigger line is an event you could photograph."
  },
  {
    "id": "four-forces-churn-extract",
    "trackRef": 2,
    "minutes": 15,
    "title": "Sort the four forces",
    "prompt": "Fernpost is a client-portal tool used by small architecture practices. Six numbered lines from a churn interview with a practice owner who cancelled:\n\n1. \"Every time a client emails a revised brief, I'm the one copying it into three places.\"\n2. \"The new one has a proper drawing viewer, clients can mark up on their phone.\"\n3. \"We've got four years of correspondence in Fernpost and I don't know what happens to it.\"\n4. \"Honestly I only ever log in on Mondays, out of habit, to clear notifications.\"\n5. \"My last two projects both slipped because a comment sat unread for nine days.\"\n6. \"Whoever we move to, someone has to teach Marion, and Marion has been here longer than me.\"\n\nStep 1: sort all six into push of the current situation, pull of the new, anxiety about switching, habit holding them in place.\nStep 2: write one sentence of on-page copy, 20 words or fewer, that reduces the strongest anxiety without promising anything you cannot back from these six lines.\nStep 3: write the single sentence you would put in the cancellation confirmation email, and say in a few words what you would want it to change.",
    "constraints": [
      "Every line gets exactly one force",
      "The anxiety-reducing sentence must not invent a feature or a guarantee",
      "The cancellation sentence must not ask them to stay"
    ],
    "scoreOn": [
      "Did you assign all six lines without leaving one unsorted or double-labelled?",
      "Does your anxiety sentence answer a fear that is actually in the transcript, not a generic one?",
      "Would your anxiety sentence survive a lawyer asking what evidence backs it?",
      "Is your cancellation sentence something you would be comfortable receiving yourself?"
    ],
    "goodLooksLike": "The sort is defensible even where it is arguable, and you can say why line 6 is anxiety rather than habit. The on-page sentence sounds like an operational fact, not reassurance: \"Export every project's correspondence as PDFs before you close the account.\""
  },
  {
    "id": "job-or-solution-sort",
    "trackRef": 2,
    "minutes": 5,
    "title": "Job, or solution in disguise",
    "prompt": "Six statements pulled from a discovery log at a fleet maintenance software company:\n\n1. \"Customers want a mobile app.\"\n2. \"I need to know the van is loaded correctly before it leaves the yard.\"\n3. \"Users are asking for more filters on the dashboard.\"\n4. \"I want to stop being the only person who knows the payroll password.\"\n5. \"Buyers want an integration with Xero.\"\n6. \"I want to walk into Monday's meeting knowing which accounts slipped.\"\n\nMark each J for job or S for solution in disguise. Then rewrite every S as a job statement, guessing the underlying progress the person is chasing.",
    "constraints": [
      "Each rewrite is 15 words or fewer",
      "No tool, feature or platform names in any rewrite",
      "State your guess as a job, not as a question"
    ],
    "scoreOn": [
      "Did you mark 2, 4 and 6 as jobs?",
      "Is every rewrite free of the words app, dashboard, filter and integration?",
      "Does each rewrite say what the person is trying to get done rather than what they want built?",
      "Could two different products plausibly serve each of your rewrites?"
    ],
    "goodLooksLike": "A good rewrite of the Xero line moves up a level to the actual progress, something like \"I want month-end to close without me retyping 200 job numbers.\" It does not just say \"customers want accounting to be easier\"."
  },
  {
    "id": "we-first-to-reader-first",
    "trackRef": 3,
    "minutes": 10,
    "title": "Turn the paragraph around",
    "prompt": "Live copy from the homepage of Hallamshire Logistics:\n\n\"At Hallamshire Logistics we are proud to offer a comprehensive suite of last-mile delivery solutions. Founded in 2009, our mission is to be the partner of choice for ambitious retailers. Our purpose-built technology platform, combined with our nationwide network of 14 depots and our commitment to service excellence, means we are uniquely positioned to support your growth journey.\"\n\nThe reader is an operations manager at a homeware retailer doing about 900 parcels a week, who has just had a bad peak season with their current courier.\n\nRewrite it so the first seven words are about that reader's situation. Keep the two facts worth keeping and drop everything that carries no evidence.",
    "constraints": [
      "60 words maximum",
      "Banned: solutions, journey, partner of choice, excellence, uniquely positioned",
      "Keep the depot count and at least one other verifiable fact"
    ],
    "scoreOn": [
      "Do your first seven words describe the reader's situation rather than the company?",
      "Does the word \"we\" appear fewer times than in the original?",
      "Have you cut at least four claims that no reader could check?",
      "Is your version 60 words or fewer, counted honestly?"
    ],
    "goodLooksLike": "The opening puts the reader in their own week, roughly \"Nine hundred parcels a week, and last December you spent it on the phone.\" The facts that survive are the ones an ops manager could verify, like 14 depots."
  },
  {
    "id": "voice-of-customer-headline",
    "trackRef": 3,
    "minutes": 10,
    "title": "Headline from their words only",
    "prompt": "Three reviews of Nightshift, a meal-kit subscription aimed at people working irregular hours:\n\nR1: \"Honestly the reason I keep it is the twelve minute ones. I get in at ten past eight, the kids have already eaten, and I can't be bothered to think.\"\nR2: \"Portion size is the thing. I do twelve hour shifts on the ward and every other box I tried left me raiding the vending machine at two in the morning.\"\nR3: \"I cancelled the first one because everything needed a pan, a tray and a blender. This is one pan. My kitchen is the size of a wardrobe.\"\n\nStep 1: list the exact phrases, in their words, that carry the value. No paraphrasing.\nStep 2: write a headline of 10 words or fewer using at least three words lifted straight from the reviews.\nStep 3: write a subhead of 20 words or fewer where every claim traces to a specific review.",
    "constraints": [
      "Only vocabulary a reviewer used, plus ordinary connecting words",
      "No category words the reviewers never said, such as nutritious, convenient or wholesome",
      "Headline 10 words maximum, subhead 20 words maximum"
    ],
    "scoreOn": [
      "Are at least three words in your headline lifted exactly from a review?",
      "Can you point to the review line behind every claim in your subhead?",
      "Does your headline name a moment or a constraint rather than a benefit category?",
      "Did you keep out every word that only a marketer would use?"
    ],
    "goodLooksLike": "The headline borrows the reviewer's own frame, along the lines of \"One pan. Twelve minutes. Ten past eight.\" Your phrase list should include \"can't be bothered to think\" and \"kitchen is the size of a wardrobe\", because that is where the energy is."
  },
  {
    "id": "same-facts-two-readers",
    "trackRef": 3,
    "minutes": 10,
    "title": "Same facts, two readers",
    "prompt": "Facts about an upcoming system migration at a grocery distribution business:\n\n- Migration runs Sunday 14 September, 06:00 to 09:00\n- The rota app is read-only for those three hours\n- Paper fallback rotas are emailed to all supervisors on Friday 12 September\n- If the migration fails, rollback takes 40 minutes and Monday's shifts publish three hours late\n- The migration costs 18,000 pounds and removes 6,400 pounds a month of legacy licence fees from November\n\nWrite two notices from these facts. One for warehouse supervisors, one for the CFO. Same facts, no contradictions between them.",
    "constraints": [
      "45 words maximum each",
      "No fact may appear in one version in a form that contradicts the other",
      "Each version opens with what that reader must do or decide"
    ],
    "scoreOn": [
      "Does each version open with an action or a decision for that specific reader?",
      "Are all shared numbers identical across both versions?",
      "Is each version 45 words or fewer?",
      "Would the supervisor version still work pinned to a wall with no other context?"
    ],
    "goodLooksLike": "The supervisor version is nearly an instruction: print the paper rota on Friday, do not expect edits before nine on Sunday. The CFO version leads with the payback and the downside case, not with the schedule."
  },
  {
    "id": "cut-thirty-percent",
    "trackRef": 6,
    "minutes": 10,
    "title": "Cut 104 words to 72",
    "prompt": "This paragraph is 104 words. Get it to 72 or fewer without losing a single fact or capability.\n\n\"We know that managing supplier onboarding can often be a real challenge for procurement teams, particularly when you are dealing with a large number of vendors across multiple regions. That is why we have built a platform that is designed from the ground up to help make the process significantly easier and more efficient for everyone involved. With Ferrous, procurement teams are able to collect all of the documentation they need in one single place, automatically chase suppliers who have not yet responded, and get a clear and complete view of exactly where every supplier is in the onboarding process at any given time.\"\n\nCount your words at the end and write the number.",
    "constraints": [
      "72 words maximum, counted and stated",
      "All three capabilities must survive: collect documents, chase non-responders, see status",
      "No new claims and no new numbers"
    ],
    "scoreOn": [
      "Did you count your words and write the number down?",
      "Are all three capabilities still present and still clear?",
      "Did you delete whole clauses rather than only trimming adjectives?",
      "Is there a single sentence in your version longer than the longest one you would say out loud?"
    ],
    "goodLooksLike": "The first sentence of the original mostly disappears, because telling procurement teams that onboarding is hard tells them nothing. What remains reads like \"Ferrous collects supplier documents in one place, chases the ones who go quiet, and shows where every supplier has got to.\""
  },
  {
    "id": "so-what-ladder",
    "trackRef": 6,
    "minutes": 5,
    "title": "Three rungs up from the feature",
    "prompt": "Three feature lines from the release notes of Ashgrove, a field-service app used by heating engineers:\n\nA. Offline mode\nB. Role-based permissions\nC. Automated VAT-inclusive quote totals\n\nFor each, write three rungs:\nRung 1, the feature as stated.\nRung 2, what it lets a named person do that they could not do before.\nRung 3, what changes about their week, their money or their reputation.\n\nRung 3 must be something one engineer would repeat to another in a van.",
    "constraints": [
      "Rung 3 is one sentence, 20 words maximum",
      "Banned endings: so you can save time, peace of mind, work smarter",
      "Name a real role at rung 2, such as the engineer, the office manager or the apprentice"
    ],
    "scoreOn": [
      "Does every rung 3 contain a consequence rather than a feeling?",
      "Did you name a specific person or role at rung 2 for all three features?",
      "Would an engineer actually say your rung 3 out loud to a colleague?",
      "Did you avoid all three banned endings?"
    ],
    "goodLooksLike": "The offline ladder ends somewhere physical, near \"You can still close the job in a boiler cupboard with no signal, so nothing gets written up twice at nine at night.\" Permissions is the hardest one, and vague rung 3s show up there first."
  },
  {
    "id": "vague-to-specific-swap",
    "trackRef": 6,
    "minutes": 3,
    "title": "Nine vague words, gone",
    "prompt": "An internal update about a product change:\n\n\"Our new onboarding flow has performed really well since launch. A lot of users are getting through it quickly, and the team has seen a significant improvement in activation. Support tickets are down and the feedback has been positive overall.\"\n\nThe vague bits: really well, a lot, quickly, significant improvement, activation, down, positive, overall, since launch.\n\nRewrite it with invented but internally consistent detail: dates, counts, percentages, a named team. Keep it to 60 words. Then mark, with an asterisk, the one number you would have to source before this could be sent to anyone outside the team.\n\nSpeed matters here. Three minutes, one pass.",
    "constraints": [
      "60 words maximum",
      "Every invented number must be consistent with every other one",
      "Exactly one asterisk"
    ],
    "scoreOn": [
      "Did you replace all nine vague items rather than the easy four?",
      "Do your numbers hold together, so the counts and percentages cannot contradict each other?",
      "Did you finish in one pass without going back to polish?",
      "Is the asterisked number the one that would most embarrass you if it were wrong?"
    ],
    "goodLooksLike": "Numbers that behave, such as 1,240 signups since 4 August with 71 percent reaching first invoice, not a percentage floating free of any denominator. Fiction is fine here, incoherent fiction is not."
  },
  {
    "id": "headings-that-argue",
    "trackRef": 9,
    "minutes": 10,
    "title": "Rewrite headings as an argument",
    "prompt": "You are editing a draft article for Fleetline, a fictional telematics company selling to logistics managers at firms running 20 to 200 vans. The writer submitted this structure:\n\nH1: Idle time\nH2: Introduction\nH2: What is idle time?\nH2: Why it matters\nH2: How Fleetline helps\nH2: Case study\nH2: Conclusion\n\nFacts sitting in the draft body (fictional, use them freely): idling burns 0.6 litres of diesel an hour; the average van in Fleetline's customer base idles 47 minutes a shift; the largest single cause is drivers keeping cabs warm during depot waits, not traffic; at a customer called Marden Logistics, idle alerts cut measured idle time by a third in the first 90 days; Marden's fleet manager had assumed the problem was motorway congestion.\n\nRewrite all seven headings so each states a claim rather than naming a topic. Then read the headings alone, top to bottom, and check they form one continuous argument. Adjust until they do.",
    "constraints": [
      "No heading longer than 9 words, H1 no longer than 6",
      "At least two headings must carry a specific number",
      "Do not add, merge or remove sections, seven in, seven out",
      "Ban the words Introduction, Conclusion, Overview, Benefits"
    ],
    "scoreOn": [
      "Does every heading make a claim a reader could disagree with?",
      "Reading only the headings, can you state the article's argument in one sentence?",
      "Do at least two headings carry a number rather than a vague quantity?",
      "Did you resist simply adding adjectives to the original topic labels?"
    ],
    "goodLooksLike": "The headings read as a chain of reasoning, not a menu. Something in the shape of 'Your vans idle 47 minutes a shift' followed by 'Most of it happens at the depot, not in traffic'. The weak version keeps the original shape and dresses it up: 'The hidden cost of idle time'."
  },
  {
    "id": "forty-five-word-answer",
    "trackRef": 10,
    "minutes": 5,
    "title": "Write a 45-word extractable answer",
    "prompt": "Kestrel is a fictional usage-based billing tool. A support engineer typed these notes into a Slack thread:\n\n'mid-cycle upgrades take effect immediately, we prorate the difference and add it to the current invoice. downgrades don't apply until the next cycle starts, that's deliberate, stops people flip-flopping to dodge overage. usage already accrued stays on the old rate. upgrade twice in one cycle and you get two proration lines. only admins and billing owners can change plan, normal members can't. no backdating, ever.'\n\nThe question a buyer types into a search box or an assistant is: 'What happens if I change my Kestrel plan mid-cycle?'\n\nWrite the answer in 45 words or fewer. It has to survive being lifted out of the page with no heading, no brand context and no surrounding paragraph, and still be accurate to the notes above.",
    "constraints": [
      "45 words maximum, count them by hand",
      "First sentence answers the question directly, no scene-setting",
      "Name the product in the first sentence",
      "No adjectives that could not be checked by a customer"
    ],
    "scoreOn": [
      "Is your first sentence an answer rather than a restatement of the question?",
      "If someone saw only your 45 words, would they know what happens on both an upgrade and a downgrade?",
      "Did you count the words rather than estimate them?",
      "Did you avoid adding a single fact the notes do not contain?"
    ],
    "goodLooksLike": "It reads like a fact, not a pitch, and holds up quoted alone. The opening moves straight into mechanics: plan up, charge now, prorated; plan down, next cycle. The weak version opens with 'At Kestrel, we understand that business needs change' and spends 20 of its 45 words on nothing."
  },
  {
    "id": "metric-that-moves-decision",
    "trackRef": 13,
    "minutes": 10,
    "title": "Pick the deciding metric",
    "prompt": "Northlight (fictional) sells project tracking software. The team is split on whether to keep the free trial at 14 days or extend it to 30. Sales wants 30, growth wants 14, and the argument has run for three weeks. The dashboard already reports all of the following:\n\n- weekly website sessions\n- trial starts per week (610)\n- share of trials creating a project within 3 days (38%)\n- share of paying customers whose first project came after day 14 (never checked)\n- support tickets per 100 trials (9)\n- NPS from trialists (31)\n- blended CAC (340 pounds)\n- sales-assisted trial win rate (22%)\n\nPick the single metric whose value would actually change the decision. Write down, in this order: the metric, the threshold that sends you to 30 days, the threshold that keeps you at 14, and the specific action you take on each side. Then write two sentences explaining why the rest fail the test, whatever else they are good for.",
    "constraints": [
      "One metric, no composite index, no dashboard of three",
      "State a number in both directions before you argue for either",
      "Under 200 words in total",
      "You may not choose a metric only because it is already instrumented"
    ],
    "scoreOn": [
      "Did you commit to a numeric threshold before writing the justification?",
      "If the metric came back exactly at your threshold, would you honestly act differently?",
      "Can you name what each rejected metric does move, other than this decision?",
      "Does your action sentence say what happens next week, not what you would monitor?"
    ],
    "goodLooksLike": "A pre-committed line someone could hold you to: 'above 15% we extend to 30 days, below 10% we stay at 14 and spend the effort on day-one activation, in between we run it another quarter.' The weak version nominates 'trial conversion rate' and never says which number would change anyone's mind."
  },
  {
    "id": "find-the-cannibalisation",
    "trackRef": 9,
    "minutes": 10,
    "title": "Find the cannibalisation",
    "prompt": "Tallow (fictional) sells payroll software to UK firms with 5 to 250 staff. Six months of search data, invented but internally consistent:\n\n| URL | Main query | Impressions/mo | Avg position | Clicks/mo |\n| /payroll-software | payroll software | 9,800 | 12.1 | 190 |\n| /blog/payroll-software-small-business | payroll software for small business | 12,400 | 8.9 | 310 |\n| /blog/best-payroll-software-uk | best payroll software uk | 7,600 | 9.4 | 240 |\n| /blog/payroll-software-comparison | payroll software comparison | 5,100 | 11.7 | 120 |\n| /blog/how-to-run-payroll | how to run payroll | 22,000 | 6.2 | 980 |\n\nExtra detail from the logs: for the query 'best payroll software uk', Google alternates between two of these URLs week to week, and neither has held the position for more than nine consecutive days. The /payroll-software page is the only one with pricing and a demo form. The two comparison-style blog posts share four of their six competitor entries.\n\nName the pages that are genuinely competing, say which one survives, and write the instruction you would hand a developer and a writer: what happens to the loser, what the surviving page's H1 becomes, and what gets kept from the page you are retiring.",
    "constraints": [
      "Name at most two competing pairs, and say which pair you would fix first",
      "Your fix must survive losing the retired page's rankings, say how",
      "Write the developer instruction as one sentence a non-marketer could follow",
      "Do not propose rewriting all five pages"
    ],
    "scoreOn": [
      "Did you separate pages that share a query from pages that share an intent?",
      "Would your surviving page still answer everything the retired page ranked for?",
      "Did you say explicitly what happens to the old URL, rather than 'consolidate'?",
      "Is the page with the money on it, not just the page with the traffic, accounted for in your plan?"
    ],
    "goodLooksLike": "You spot that the alternating URLs are the symptom, not the disease, and that two of these pages answer the same buying question with different furniture. The instruction is concrete: which URL 301s where, which sections move across, what the new H1 says. Weak answers merge everything into the commercial page and quietly lose an informational ranking worth 980 clicks a month."
  },
  {
    "id": "rewrite-this-error",
    "trackRef": 14,
    "minutes": 5,
    "title": "Rewrite this error message",
    "prompt": "A user of a fictional CRM has just uploaded a 3,200 row CSV to import contacts. The system processed 3,188 rows successfully. Twelve rows were rejected because the email column was empty. The screen currently shows a red banner:\n\n'Error 4012: The operation could not be completed. Invalid input detected. Please try again or contact support.'\n\nBehind the scenes, the import did not roll back, the 3,188 contacts are already in the account, and the rejected rows are available as a downloadable file with the original row numbers.\n\nWrite the replacement. You need three pieces: the message itself, the primary button label, and the secondary link label. Then write the one sentence you would put in the ticket explaining to the engineer why the current message causes support contacts.",
    "constraints": [
      "Message under 30 words, buttons under 4 words each",
      "State what did happen before what did not",
      "No apology longer than two words, and no exclamation marks",
      "Do not use the words error, invalid, failed or oops"
    ],
    "scoreOn": [
      "Does the message tell the user their 3,188 contacts are safe?",
      "Can the user tell exactly which rows need fixing and how to get them?",
      "Is the primary button the next action, rather than 'OK' or 'Dismiss'?",
      "Would someone who has never seen this product understand it without asking a colleague?"
    ],
    "goodLooksLike": "The user learns the outcome, the exception and the next click, in that order, and never needs support. Something along the lines of a count that landed, a count that did not, and the reason in five words. Weak rewrites keep the banner red and just soften the tone: 'Sorry, something went wrong with your import.'"
  },
  {
    "id": "biggest-leak-in-funnel",
    "trackRef": 13,
    "minutes": 10,
    "title": "Name the biggest leak",
    "prompt": "One month of a fictional SaaS funnel:\n\n| Step | Count | Step conversion |\n| Landing page views | 48,000 | |\n| Reached pricing page | 9,600 | 20% |\n| Started signup | 3,840 | 40% |\n| Verified email | 2,300 | 60% |\n| Created first project | 690 | 30% |\n| Paid | 138 | 20% |\n\nContext you may use: paid plans average 41 pounds a month; the landing page is 60% paid social traffic on a broad interest audience; email verification uses a code that expires in 10 minutes; creating a first project requires importing a CSV or connecting a tool, and the two most requested integrations do not exist yet.\n\nName the single biggest leak. Defend your choice against the two obvious traps: the largest absolute drop, and the lowest percentage step. Then write the three sentences you would send to a founder who has asked 'where are we losing people', and one thing you would do next week to test your reading.",
    "constraints": [
      "Name one step, not a theme like 'onboarding'",
      "Quantify the prize: how many extra paying accounts a realistic fix wins",
      "Your three sentences to the founder must fit in one phone screen",
      "Say what you would do if the fix is expensive and the leak is real anyway"
    ],
    "scoreOn": [
      "Did you convert your chosen leak into extra paid accounts per month, with the arithmetic shown?",
      "Did you say why the 38,400 lost at the first step is not automatically the answer?",
      "Does your proposed test produce evidence within two weeks, not a quarter?",
      "Would your three sentences make sense to someone who has not seen the table?"
    ],
    "goodLooksLike": "A defended choice with a price on it: this step, this realistic lift, this many extra accounts at 41 pounds. You handle the traffic quality question explicitly rather than ignoring it. Weak answers point at the lowest percentage in the column and stop, or recommend 'improving onboarding' without saying which screen changes."
  },
  {
    "id": "prose-into-scannable",
    "trackRef": 14,
    "minutes": 10,
    "title": "Turn rules into a scannable table",
    "prompt": "Halyard (fictional) sells outdoor gear. This is the entire returns section of the help centre, as written:\n\n'Returns: Customers who bought within the last 30 days can return any unused item in its original packaging for a full refund, though items bought in a sale are refunded to store credit rather than the original payment method unless the item is faulty. Between 31 and 90 days we can offer an exchange or store credit but not a cash refund, and this does not apply to wetsuits, base layers or anything marked final sale, which cannot be returned at all once the hygiene seal is broken. Faulty items can be returned at any point in the two year warranty and are always refunded to the original payment method, and we cover return postage in that case only.'\n\nRewrite it as: one sentence of lead above the fold, a table a customer can scan in about ten seconds, and the single sentence shown to a person whose item turns out not to be returnable at all.",
    "constraints": [
      "Table has no more than four columns and no more than five rows",
      "Every cell under eight words",
      "The lead sentence must help someone who is in a hurry decide whether to read on",
      "Change no rule, and drop no exception"
    ],
    "scoreOn": [
      "Can you answer 'I bought a sale wetsuit 40 days ago' from your table in under ten seconds?",
      "Did all three exceptions survive the rewrite, including the postage rule?",
      "Does your table have one axis a customer already knows about themselves, such as how long ago they bought?",
      "Is the not-returnable sentence something you would be willing to read aloud to that customer?"
    ],
    "goodLooksLike": "The customer finds their own row without reading the others, and the exceptions live in cells rather than in a footnote nobody reads. The dead-end sentence is direct and gives the reason in the same breath. Weak versions produce a tidy table plus a paragraph of caveats underneath, which is the original problem with lines around it."
  },
  {
    "id": "make-the-claim-quotable",
    "trackRef": 10,
    "minutes": 5,
    "title": "Make three claims quotable",
    "prompt": "Vantis (fictional) sells compliance reporting software to utilities. Three sentences currently on its homepage:\n\n1. 'Our platform significantly reduces onboarding time.'\n2. 'Most teams see results quickly.'\n3. 'Industry leaders trust Vantis for compliance reporting.'\n\nWhat the internal analysis actually found (fictional, and all you may use): across 214 accounts onboarded during 2025, median time to a first completed regulatory report fell from 11 days to 4; 'results' in that analysis means the first completed report and nothing else; the 4 day median excludes accounts over 500 seats, which take substantially longer and were not measured separately; three of the six largest UK water utilities are customers and are named in the public case study library; two of them are not contractually allowed to be named in advertising.\n\nRewrite all three sentences so each carries a number, its scope condition and where it came from. A stranger, or an AI assistant summarising the page, should be able to repeat any one of them without misleading anybody.",
    "constraints": [
      "Each rewrite under 30 words",
      "The limitation stays inside the sentence, not in a footnote or an asterisk",
      "Claim nothing the source material does not support",
      "Keep all three as sentences, no bullet lists"
    ],
    "scoreOn": [
      "Could a sceptical reader tell exactly what was measured and on whom?",
      "Did you handle the two utilities that cannot be named, rather than ignoring the constraint?",
      "Is each sentence still readable out loud, or did the caveats strangle it?",
      "Did you resist upgrading 'median' into 'average' or 'up to'?"
    ],
    "goodLooksLike": "Each sentence would survive a lawyer, a journalist and an assistant quoting it out of context. The scope rides along naturally: what fell, from what to what, measured across how many accounts, excluding whom. Weak rewrites bolt a number onto the same vague sentence and leave the 500-seat exclusion out entirely."
  },
  {
    "id": "definition-that-survives",
    "trackRef": 13,
    "minutes": 5,
    "title": "Define the disputed metric",
    "prompt": "Three teams at a fictional company report 'active accounts' to the same board, with three different numbers:\n\n- Marketing: any account with a login in the last 30 days. 18,400.\n- Product: accounts with 3 or more sessions in the last 28 days. 9,100.\n- Finance: accounts with at least one paid seat. 6,750.\n\nThe board has asked for one number. Free trials are 14 days. Roughly 900 accounts are internal staff and test tenants. About 1,200 accounts have paid seats but nobody has logged in for three months.\n\nWrite the single definition, in 60 words or fewer, that goes in the metric dictionary. It must name the qualifying event, the time window, the exclusions and the edge case you are deliberately choosing to drop. Then write one sentence naming what your definition will over-count, and one sentence naming which team will object and what they will say.",
    "constraints": [
      "60 words maximum for the definition itself",
      "Name a specific event, not 'engagement' or 'usage'",
      "You must exclude something, and say so in the definition",
      "No footnotes, the whole definition is the sentence someone reads at 8am"
    ],
    "scoreOn": [
      "Could two analysts write the same query from your definition without talking to each other?",
      "Did you name the edge case you are dropping rather than hoping nobody asks?",
      "Is your over-count sentence a real weakness, not a fake modest one?",
      "Did you avoid splitting the difference into a definition that pleases all three teams and describes none of them?"
    ],
    "goodLooksLike": "An analyst can implement it, and the team it disadvantages can see they were considered rather than overruled quietly. The 1,200 paying-but-dormant accounts get a decision, not silence. Weak answers write a definition that happens to produce a number between 9,100 and 18,400 and call that consensus."
  },
  {
    "id": "refresh-merge-kill",
    "trackRef": 9,
    "minutes": 15,
    "title": "Refresh, merge or kill",
    "prompt": "Rowan (fictional) sells HR software. Its onboarding content cluster, one year of data:\n\n| Page | Visits/mo | Demo signups/yr | Last updated | Note |\n| /blog/employee-onboarding-checklist | 6,200 | 41 | 2023 | screenshots show an old product UI |\n| /blog/onboarding-best-practices | 900 | 2 | 2022 | written by a freelancer, no clear angle |\n| /blog/remote-onboarding-2024 | 1,400 | 0 | 2024 | year in the URL and the title |\n| /guides/onboarding | 2,100 | 130 | 2026 | the main commercial guide, has the demo CTA |\n| /blog/what-is-onboarding-software | 3,300 | 6 | 2025 | position 4 for a query /guides/onboarding also targets |\n| /blog/first-day-email-templates | 4,800 | 58 | 2025 | most linked page on the site, 34 referring domains |\n\nDecide refresh, merge, kill or leave alone for each of the six, with a one-line rationale for each. Then pick the single decision you would have to defend to a head of content who has just said in a meeting that nothing gets deleted, and write the two sentences you would actually say to them.",
    "constraints": [
      "Every page gets a verdict, no 'it depends'",
      "Each rationale under 15 words",
      "At most two refreshes, you do not have the writer capacity for more",
      "Your two sentences to the head of content may not mention crawl budget"
    ],
    "scoreOn": [
      "Did you check what each page earns as well as what it attracts?",
      "Did you protect the link equity on the most linked page in whatever you decided?",
      "Would your merge leave a single page that serves both intents, or a longer page that serves neither?",
      "Are your two sentences an argument about readers or revenue, rather than an SEO rule?"
    ],
    "goodLooksLike": "The verdicts differ in kind, and the money page, the traffic page and the link page all get treated differently on purpose. The defence is short and about consequence: what a reader currently gets, what they would get afterwards. Weak sheets mark everything 'refresh' because deleting feels risky, and never say what the refresh would change."
  },
  {
    "id": "caption-that-prevents-misreading",
    "trackRef": 13,
    "minutes": 5,
    "title": "Caption a misleading chart",
    "prompt": "A fictional kitchenware retailer's quarterly chart shows one line, organic sessions, rising from 214,000 in Q1 to 261,000 in Q2. On the slide it is labelled 'Organic sessions +22%'.\n\nWhat is underneath the line, all of it invented but consistent: 61% of the increase came from a single branded query, 'griddle pan sale', in the two weeks following a national TV spot; non-brand organic sessions rose 4%; organic conversion rate fell from 1.9% to 1.6%, so organic orders rose about 3%.\n\nWrite the 40-word annotation that sits under the chart and stops the wrong conclusion being drawn. Then write the one sentence you say out loud when the CMO calls this an SEO win in the board meeting, in front of the SEO lead who did good work this quarter.",
    "constraints": [
      "Annotation 40 words maximum, and it must keep the 22% figure",
      "It must contain both the headline number and the correction",
      "No hedging words such as somewhat, slightly or arguably",
      "The spoken sentence must be sayable without making the SEO lead look bad"
    ],
    "scoreOn": [
      "Does the annotation stop the wrong reading without deleting the good news?",
      "Did you include the orders number, not just the sessions number?",
      "Would the SEO lead read your annotation and feel accurately represented?",
      "Is the spoken sentence one sentence, and would you actually say it in the room?"
    ],
    "goodLooksLike": "The annotation gives the reader the same conclusion the analyst reached, in one pass: sessions up, most of it brand and TV-driven, orders up far less. The spoken line separates the channel's credit from the campaign's effect without a lecture on attribution. Weak captions repeat the 22% and add 'note: includes branded traffic', which nobody acts on."
  },
  {
    "id": "launch-tier-downgrade",
    "trackRef": 12,
    "minutes": 10,
    "title": "Tier the release train",
    "prompt": "Kessel (fictional) sells expense management software to mid-market finance teams. The November release train has four items. The launch tiers are fixed:\n\nTier 1: full company launch. Press, webinar, paid campaign, enablement session, exec sponsor. Two per quarter maximum, and one is already spent.\nTier 2: channel launch. Email to the installed base, in-app announcement, one enablement doc, no press.\nTier 3: release note only. Changelog entry and a line in the monthly customer digest.\n\nThe four items:\n\nA. Multi-currency receipt capture. 41 of 120 enterprise accounts have asked for it. Named in three open deals worth £310k of new ARR combined. Works on day one, no migration.\nB. Dashboard visual refresh. New charts, same data, same permissions. No pricing change, no new capability. The PM, Aoife, has booked a customer webinar for 12 November and asked for a press pitch.\nC. SOC 2 Type II certification completed. Nine deals sit in security review, £1.1m ARR between them. Procurement teams ask for the report, not for a story.\nD. Slack alerts for approvals. Small feature, 20% of users are in Slack daily, no revenue attached, strong reaction in beta.\n\nAssign a tier to each of the four. Then write the note to Aoife telling her B is Tier 3 and the webinar is off. Under 100 words.",
    "constraints": [
      "Use at least two different tiers, and no more than one Tier 1",
      "State in one sentence the criterion you tiered on",
      "The note to Aoife must not contain the word unfortunately, and must not invite a vote"
    ],
    "scoreOn": [
      "Did you assign a tier to all four items?",
      "Does the single criterion you named explain every one of your four calls, not just three?",
      "Does the note to Aoife say what is happening before it says why?",
      "Did you name something Aoife still gets, rather than only what she loses?"
    ],
    "goodLooksLike": "The criterion is change in buyer behaviour, not build effort or team pride. C earns the Tier 1 slot because £1.1m is stuck in security review and a certificate moves it. The note to Aoife opens with the decision: \"The refresh ships as a release note on 6 November. It changes how the dashboard looks, not what a customer can do, so we can't fill a webinar with it.\""
  },
  {
    "id": "cfo-and-sales-pitch",
    "trackRef": 12,
    "minutes": 10,
    "title": "Same launch, two rooms",
    "prompt": "Kessel Autopilot (fictional) ships on 6 October. It categorises company card spend automatically, so finance no longer codes each line by hand. The facts you have:\n\n- Pilot: 14 customers, 11 weeks. Median month-end coding time fell from 9 hours to 2.5 hours per close. Two customers saw no change; both had already outsourced coding.\n- Accuracy: 94% of lines categorised without human review. Roughly one line in 17 goes to a review queue.\n- Price: £4 per active card per month on top of the current contract. The median account has 310 active cards. Median current ACV is £28,400.\n- Build cost so far: £480k, six people for seven months. Running cost about £900 per customer per year.\n- Sales: 22 reps, 61% quota attainment this half, 74-day average cycle. This is the only new SKU this half.\n- Not shipping at launch: multi-entity support. The 19 largest customers cannot use it until Q1.\n\nWrite the pitch twice. Once for the CFO, who signs off the pricing. Once for the VP Sales, who has to put it in front of 22 reps on 2 October. Ninety words each.",
    "constraints": [
      "Ninety words maximum per version",
      "Both versions must name the 94% accuracy and the multi-entity gap",
      "No sentence may appear in both versions"
    ],
    "scoreOn": [
      "Does the CFO version lead with money and the sales version lead with the deal in front of a rep?",
      "Are both versions inside 90 words?",
      "Do both name the two limits somewhere other than the final line?",
      "Could a rep say your sales version out loud from memory after reading it twice?"
    ],
    "goodLooksLike": "The CFO version does the arithmetic out loud: 310 cards at £4 a month is £14,880 a year against a £28,400 contract, minus about £900 of run cost. The sales version does the deal instead: what a rep can sell on 6 October, to whom, and what to say when the account has three entities."
  },
  {
    "id": "go-no-go-note",
    "trackRef": 12,
    "minutes": 5,
    "title": "Call the launch",
    "prompt": "Ten days out from the 6 October launch of Kessel Autopilot (fictional), you own the launch decision. Readiness as of this morning:\n\n- Pricing approved in the billing system: done.\n- Enablement session: booked 2 October, 22 reps, none certified yet.\n- Support macros and escalation path: not started. Support lead on leave until 1 October.\n- In-app onboarding flow: in QA, two open bugs. One blocks the connect step for Xero users, who are 31% of accounts.\n- Press and analyst briefings: three booked for 6 October under embargo.\n- Pilot customers agreed to be named: two of fourteen.\n- Billing test in staging: passed on 19 September, not re-run since the last deploy.\n- Legal sign-off on the accuracy claim: approved wording is \"94% of lines categorised without human review, measured across 14 pilot accounts over 11 weeks\".\n\nWrite the note to the launch group. Under 120 words. Recommend go, no-go, or go with a named change, and give a date.",
    "constraints": [
      "Your recommendation and a date must be in the first sentence",
      "Name the one item that decides it, not every amber item",
      "If you delay, say what the delay buys and who does what"
    ],
    "scoreOn": [
      "Is the recommendation, with a date, in the first sentence?",
      "Did you name a single deciding item rather than listing every gap?",
      "Would someone who read only your first two sentences act correctly?",
      "Is there a named owner against every action you asked for?"
    ],
    "goodLooksLike": "A decision, not a status report. Something like: \"Go on 6 October, with the in-app flow switched off for Xero accounts until the connect bug clears.\" Around 90 words, one owner per action, and the Xero bug treated as the hinge rather than the untested billing job."
  },
  {
    "id": "rep-line-objection",
    "trackRef": 12,
    "minutes": 5,
    "title": "The line a rep remembers",
    "prompt": "You have five minutes with 22 reps at the enablement session. They need two things they can say without notes.\n\nFacts. Kessel Autopilot (fictional) categorises company card spend automatically. In the pilot, median month-end coding fell from 9 hours to 2.5 hours per close. Price is £4 per active card per month; the median account has 310 cards. It gets 94% of lines right and sends the rest to a review queue. NetSuite and Xero both ship rules-based categorisation that customers already use, and those rules break whenever a merchant changes its billing name.\n\nWrite two things:\n(a) One sentence a rep says in under 12 seconds to a finance director who has not asked for this.\n(b) The reply to \"we already do this in NetSuite\", under 40 words, that does not rubbish NetSuite.",
    "constraints": [
      "The opening sentence is 25 words maximum and contains one number",
      "No adjectives in either piece",
      "The rebuttal must concede one true thing about NetSuite before it separates you"
    ],
    "scoreOn": [
      "Can you say the opening line from memory after reading it twice?",
      "Does the opening line carry a number a finance director already cares about?",
      "Does the rebuttal concede something true before it differentiates?",
      "Did you avoid claiming anything the pilot data does not support?"
    ],
    "goodLooksLike": "The opening line is about the close, not the feature: \"Finance teams like yours were spending nine hours a month coding card spend by hand. Ours spend two and a half.\" The rebuttal starts where the customer is right, then names the specific point where rules fail, and stops."
  },
  {
    "id": "invented-stat-hunt",
    "trackRef": 15,
    "minutes": 10,
    "title": "Find the fabricated number",
    "prompt": "You asked an AI assistant to draft the opening paragraph of a blog post. Here is everything it was given, and what it produced.\n\nWHAT THE MODEL WAS GIVEN (your source pack, all internal to this fictional company):\n- Our 2026 customer survey, 412 respondents, all finance managers at UK companies with 50 to 500 staff: 61% said month-end close takes more than five working days; 28% said they had corrected a filed expense report in the last year.\n- Product telemetry, August 2026: median time to first categorised transaction after connecting a card feed is 4 minutes.\n- One customer quote, Ravensbourne Group, finance manager Ines Okafor: \"We were three days into the close before we could trust the card spend.\"\n\nWHAT THE MODEL WROTE:\n\"Month-end close is the quiet crisis of modern finance. Research shows that 82% of finance teams now spend more than five days closing the books, and the average UK business loses £14,500 a year to misclassified expenses. Industry analysts expect this to worsen as card spend grows 30% year on year. Our own survey of finance managers found that 28% had corrected a filed expense report in the last year, and customers like Ravensbourne Group tell us they were 'three days into the close before we could trust the card spend'. With Autopilot, categorisation begins within four minutes of connecting a feed.\"\n\nLabel every sentence as supported, distorted, or invented, and say in a few words which source it does or does not come from. Then rewrite the paragraph using only what the source pack supports, under 90 words.",
    "constraints": [
      "Label all six sentences, including the ones that pass",
      "The rewrite may not contain a number that is absent from the source pack",
      "The rewrite must still open with a claim, not a definition"
    ],
    "scoreOn": [
      "Did you label every sentence rather than only the obviously wrong ones?",
      "Did you catch the figure that came from your own survey and was changed?",
      "Can you point to a source line for every number left in your rewrite?",
      "Is your rewrite shorter than the original and still an opening?"
    ],
    "goodLooksLike": "Three different failures named separately: one number invented outright, one real number inflated, and one vague attribution doing the work of a source. The rewrite says who was surveyed and how many, for example \"Six in ten of the 412 finance managers we surveyed take more than five working days to close.\""
  },
  {
    "id": "prompt-rewrite-brief",
    "trackRef": 15,
    "minutes": 10,
    "title": "Rewrite the broken prompt",
    "prompt": "Someone on your team uses this prompt to draft the weekly customer email. Three rounds have come back unusable.\n\nTHE PROMPT AS WRITTEN:\n\"You are an expert marketing copywriter. Write an engaging email to our customers about our new expense categorisation feature. Make it compelling and highlight the key benefits. Keep it professional but friendly.\"\n\nWHAT IT PRODUCED (first two lines):\n\"Say goodbye to expense headaches forever! We're thrilled to announce a game-changing new feature that will completely transform the way your finance team works.\"\n\nFacts you may hand the model: the feature categorises company card spend automatically; in a 14-customer pilot, median month-end coding time fell from 9 hours to 2.5 hours; accuracy is 94%, and the rest goes to a review queue; multi-entity accounts are not supported until Q1.\n\nRewrite the prompt, under 200 words, so that anyone on the team gets a first draft you would send after light editing.",
    "constraints": [
      "Name the reader and the one action you want from them",
      "Include a refusal rule that says what the model does when it lacks a fact",
      "Define done as something checkable in under a minute",
      "200 words maximum"
    ],
    "scoreOn": [
      "Does your prompt say who the reader is and what they should do after reading?",
      "Have you told the model what to do when a fact is missing, not only that it must not invent?",
      "Could a colleague reuse this next week by changing one or two lines?",
      "Is done defined by something checkable, such as a word count, a banned list, or a required element?"
    ],
    "goodLooksLike": "It reads like a brief, not an incantation. It names a real reader (\"finance managers who connected a card feed but have never opened the categorisation tab\"), supplies the four facts verbatim, and includes a line such as: \"If a number is not in the facts above, write [NEEDS FIGURE] and carry on.\""
  },
  {
    "id": "ai-guardrail-rules",
    "trackRef": 15,
    "minutes": 5,
    "title": "Write the guardrail block",
    "prompt": "An AI assistant drafts first replies for your support queue. A human sends every reply, but agents are pasting without reading. Three failures from last week at Kessel (fictional):\n\n1. A customer asked for a refund outside the 30-day window. The draft said \"I've processed your refund today.\" No refund existed. The agent sent it.\n2. A customer asked whether Autopilot handles multi-entity accounts. The draft said \"Yes, Autopilot supports multi-entity out of the box.\" It does not until Q1.\n3. A customer wrote in Portuguese. The draft replied in English and apologised for \"the delay in your ticket\", which the customer had not mentioned.\n\nWrite the rules block that goes into the system prompt to stop these three. Six rules maximum, one line each.",
    "constraints": [
      "Each rule must be checkable by reading the draft alone",
      "At least one rule must give the assistant a fallback action, not just a prohibition",
      "No rule longer than 20 words"
    ],
    "scoreOn": [
      "Does each of the three failures map to at least one of your rules?",
      "Could you tell, from the draft text alone, whether a rule had been broken?",
      "Did you write at least one rule that tells the assistant what to do instead?",
      "Did you avoid rules that depend on the model knowing something it was never given?"
    ],
    "goodLooksLike": "Rules that bite and can be checked at a glance: \"Never state that an action has been taken. Say what the agent will do next.\" And: \"Reply in the language the customer wrote in.\" Six lines, no adverbs, nothing that relies on the model's goodwill."
  },
  {
    "id": "subject-line-rubric",
    "trackRef": 15,
    "minutes": 10,
    "title": "Build the pass-fail rubric",
    "prompt": "You are about to let a model draft 40 subject lines a week for lifecycle email. Before that, you need a check anyone on the team can apply in 30 seconds.\n\nThe email: goes to trial accounts on day 9 of a 14-day trial, who have connected a card feed but have never opened the categorisation tab. The one action you want is that they open the tab and review their first week of categorised spend.\n\nDRAFT A: \"You're missing the best part of Kessel\"\nDRAFT B: \"Your first week of card spend is already categorised\"\nDRAFT C: \"Unlock the full power of your trial before it ends\"\n\nWrite the rubric: five checks, each answerable yes or no from the subject line and the stated action alone. Then score all three drafts against it and pick one.",
    "constraints": [
      "Five checks, each a yes or no question",
      "At least one check must be about the reader's state, not the wording",
      "Score all three drafts, including the one you pick"
    ],
    "scoreOn": [
      "Is every check answerable without opening another document?",
      "Does your rubric fail Draft C for a stated reason rather than on taste?",
      "Did at least one check separate Draft A from Draft B?",
      "Would a colleague applying your rubric to the same three drafts reach the same pick?"
    ],
    "goodLooksLike": "Checks that discriminate. A rubric all three drafts pass is not a rubric. One check that earns its place: \"Does the line refer to something this reader has already done in the product?\" That is a yes for one draft only, and it decides the pick."
  },
  {
    "id": "holding-statement-15",
    "trackRef": 18,
    "minutes": 15,
    "title": "Fifteen-minute holding statement",
    "prompt": "It is 14:05 on Thursday 14 September. You are comms lead at Kessel (fictional, 180 staff, expense software, 1,200 business customers). Everything known at 14:05, from the incident channel:\n\n- At 09:40 an engineer found that an internal reporting dashboard had been reachable without a login since a deploy on 2 September, twelve days ago.\n- The dashboard showed aggregate spend by customer: company name, monthly card spend total, number of active cards. No card numbers, no employee names, no bank credentials.\n- Access logs show 47 visits from outside the company network. 41 came from one IP block belonging to a security research firm. Six are unidentified.\n- The dashboard was taken offline at 10:12.\n- Legal says: do not use the words breach or hack before forensics reports, expected Monday.\n- The decision on notifying the ICO is being taken at 16:00 today.\n- A journalist at a trade title emailed at 13:50 asking to confirm \"a security incident affecting customer spend data\". Her deadline is 17:00.\n- Two customers have already asked support whether their data was exposed.\n- The CEO is on a flight until 18:30.\n\nWrite the holding statement that goes to the journalist, onto the status page, and into the support team's hands by 15:00. Under 180 words. Then list, in three lines, what you are not saying and why.",
    "constraints": [
      "Promise nothing you cannot deliver by Monday",
      "Do not use the words breach or hack",
      "Give one named next-update time",
      "Tell customers what to do, even if the answer is nothing yet"
    ],
    "scoreOn": [
      "Does the statement say what happened, in plain words, within the first two sentences?",
      "Have you avoided any claim that Monday's forensics could contradict?",
      "Is there a specific next-update time rather than \"in due course\"?",
      "Does a customer finish it knowing whether they need to act right now?"
    ],
    "goodLooksLike": "Short, dated, and dull in the right way: what was reachable, for how long, what it showed, what it did not show, when it was closed, and when you will speak again. For example: \"It showed company names and monthly card spend totals. It did not show card numbers or bank details. We took it offline at 10:12 today. Next update by 18:00.\" Your three lines of omissions should include the six unidentified visits and why you are not counting them yet."
  },
  {
    "id": "bridging-lines",
    "trackRef": 18,
    "minutes": 3,
    "title": "Three bridges, one breath",
    "prompt": "You are prepping a spokesperson for a ten-minute broadcast interview about a security incident at Kessel (fictional).\n\nFacts you may use, and nothing else: an internal reporting page was reachable without a login for twelve days; it showed company names and monthly card spend totals, not card numbers or bank details; one of your own engineers found it during a routine review; it was taken offline the same morning; forensics reports on Monday; every internal page has since been set to fail closed if it is not behind a login.\n\nWrite one bridging line for each question. One or two sentences each.\n\n1. \"How many of your customers had their data stolen?\"\n2. \"Isn't it true you only found this because a security researcher told you?\"\n3. \"Can you guarantee this won't happen again?\"",
    "constraints": [
      "Acknowledge in six words or fewer before you bridge",
      "Never repeat the loaded word from the question",
      "No \"what I would say is\" and no \"look\""
    ],
    "scoreOn": [
      "Does each answer acknowledge the question before it moves?",
      "Did you avoid repeating the loaded words (stolen, guarantee)?",
      "Does every bridge land on a fact you actually have, rather than a sentiment?",
      "Can you say each line out loud in one breath?"
    ],
    "goodLooksLike": "Bridges that carry a fact, not a mood. On the guarantee question: \"No one can promise that. I can tell you what changed this morning: every internal page now fails closed if it is not behind a login, and we are auditing the rest this week.\" On question 2, the correction comes first and takes one clause, not a paragraph."
  },
  {
    "id": "all-staff-note",
    "trackRef": 18,
    "minutes": 10,
    "title": "The note before the story",
    "prompt": "Same incident, 16:20 on the same Thursday. The trade title publishes at 17:00 or shortly after. Kessel has 180 staff, of whom about 40 are in support and sales and will be asked directly by customers within the hour. The CEO lands at 18:30 and will write her own note tomorrow morning. The public statement is already on the status page and says: the reporting page was reachable without a login from 2 to 14 September, it showed company names and monthly card spend totals, it did not show card numbers or bank details, it was taken offline at 10:12, next update by 18:00.\n\nDilan Ferreira, comms manager, is handling press. Nadia Okonjo, ops, owns the customer email that goes out tomorrow.\n\nWrite the all-staff note that goes out at 16:30. Under 200 words. Assume it will be screenshotted and sent to the journalist.",
    "constraints": [
      "Nothing in it you would not say publicly",
      "Tell staff exactly what to do if a customer, or a friend, asks them",
      "One named person for press questions",
      "No \"please note\" and no \"we take security seriously\""
    ],
    "scoreOn": [
      "Would you be comfortable seeing this note quoted in the article?",
      "Does a support person finish it knowing what to say and what to route on?",
      "Did you give staff something useful that is not already in the public statement?",
      "Is there a named person to ask rather than an unowned inbox?"
    ],
    "goodLooksLike": "It treats staff as the first line, not as an audience. The extra it gives them is not secret information, it is instruction and sequencing: \"If a customer asks, send them the status page and say we will update by 18:00. Do not estimate numbers. Anything from a journalist goes to Dilan, including on LinkedIn.\" Around 150 words."
  },
  {
    "id": "non-apology-rewrite",
    "trackRef": 18,
    "minutes": 5,
    "title": "Rewrite the non-apology",
    "prompt": "This went out on Friday evening after Kessel (fictional) charged 340 customers twice on the same day. Every double charge was reversed within 48 hours. In the meantime, 61 of those customers had a payment declined, and 9 wrote in to say a payment to their own supplier failed as a result.\n\nTHE STATEMENT AS PUBLISHED:\n\"We would like to apologise to any customers who may have been impacted by a billing issue that occurred on Friday. We take our responsibilities to our customers extremely seriously, and we are working hard to ensure that incidents of this nature do not occur in the future. Customers with concerns are encouraged to reach out to our support team, who stand ready to assist.\"\n\nRewrite it. Under 100 words.",
    "constraints": [
      "No conditionals: no \"any\", no \"may have\", no \"impacted\"",
      "Use the real numbers",
      "Say what happens for the nine whose supplier payment failed",
      "Tell the reader whether they need to do anything"
    ],
    "scoreOn": [
      "Did you remove every hedge from the original?",
      "Are 340, 61 and 9 all in your version?",
      "Does it apologise for a thing that happened rather than for how people feel?",
      "Does a reader know whether they personally need to act?"
    ],
    "goodLooksLike": "Plain and countable. \"On Friday we charged 340 customers twice. Every charge was reversed within 48 hours. For 61 of you a payment was declined before we fixed it, and for nine a supplier payment failed. We are contacting those nine today.\" Under 100 words, no \"reach out\", and the apology attached to a specific act."
  },
  {
    "id": "policy-refusal-rewrite",
    "trackRef": 16,
    "minutes": 5,
    "title": "Refuse without the wall",
    "prompt": "Here is a real-shaped refusal, sent as written:\n\n\"Dear Customer, Thank you for contacting us. Unfortunately, as per our Terms of Service section 7.3, we are unable to process refunds for annual subscriptions outside of the 14 day cooling off period. We do apologise for any inconvenience caused. Please note that your subscription will remain active until 3 March 2027. Should you have any further queries, please do not hesitate to contact us. Kind regards, The Support Team\"\n\nThe facts behind it: the customer, Marta, paid £588 for a year on 2 January, nine weeks ago. She has logged in twice. You genuinely cannot refund the annual charge. You can cancel the renewal today so nothing bills again, and you can move her to the £14 a month plan and put the unused portion of the annual, £430, on her account as credit against those monthly bills.\n\nRewrite the reply. Under 100 words.",
    "constraints": [
      "The decision must be visible in the first two sentences",
      "No clause numbers, no \"unfortunately\", no \"do not hesitate\"",
      "Apologise at most once",
      "The £430 and the cancellation must both appear with what happens next"
    ],
    "scoreOn": [
      "Can a reader who stops after two sentences state the answer?",
      "Did you give the reason in your own words rather than citing the terms?",
      "Does Marta know exactly what happens to her money and by when?",
      "Did you apologise no more than once?"
    ],
    "goodLooksLike": "Warm, short, specific about money. Something in the shape of: \"I can't refund the £588. The annual charge is outside the window and I would rather tell you that now than promise something finance reverses. Here is what I can do instead: cancel the renewal today, and move the unused £430 onto your account as credit against a £14 monthly plan.\" No hiding behind the terms, no second apology."
  },
  {
    "id": "eighty-word-deescalation",
    "trackRef": 16,
    "minutes": 5,
    "title": "Fourth time asking",
    "prompt": "Ticket history, order #48120, a wireless doorbell:\n\nDay 1: delivered damaged. Customer contacts you, agent asks for photos, customer sends four photos.\nDay 5: customer chases. A different agent asks for photos.\nDay 9: a third agent promises a replacement dispatched within 48 hours. Nothing was dispatched.\nDay 12, today, the customer writes: \"Fourth time. Does anyone there actually read anything? I have sent the photos twice and been promised a replacement that does not exist. I want a name and a date or I am going to my card provider.\"\n\nWhat is true right now: the replacement is in stock and you can dispatch it today for next-day delivery. You can refund the £18 delivery fee yourself. Anything beyond that needs a manager and takes two days.\n\nWrite the reply. Under 80 words.",
    "constraints": [
      "Under 80 words",
      "Do not ask for anything already in the thread",
      "Name yourself once and give exactly one date",
      "No \"sorry for the inconvenience\", no \"thank you for your patience\""
    ],
    "scoreOn": [
      "Is it under 80 words?",
      "Does the first sentence contain an action rather than an apology?",
      "Did you avoid asking for the photos or any other detail already sent?",
      "Is there exactly one named person and one date in the reply?"
    ],
    "goodLooksLike": "The first line does something, the apology is one clause, and the customer has nothing left to do. Roughly: \"Your replacement went out this afternoon and arrives tomorrow, Thursday. I have refunded the £18 delivery. Three people asked you for the same photos and none of us shipped the unit, which is our failure, not yours. I am Sam and this ticket stays with me until it lands.\""
  },
  {
    "id": "macro-to-human",
    "trackRef": 16,
    "minutes": 5,
    "title": "Un-macro this reply",
    "prompt": "Here is the macro your team currently sends:\n\n\"Hi {{first_name}}, Thanks so much for reaching out! I completely understand how frustrating this must be, and I'm so sorry you're experiencing this issue. Rest assured, our team is working hard to get this resolved as quickly as possible. I've gone ahead and escalated this to our technical team, who will investigate and get back to you within 24-48 hours. In the meantime, please don't hesitate to reach out if you have any other questions! Thanks so much for being a valued customer.\"\n\nThe actual situation: Ravi is a payroll manager. He reported that your CSV export silently drops the final row whenever the file has more than 500 lines. Engineering has confirmed it and the fix ships Monday. Today is Wednesday. Ravi has to file to HMRC on Friday. Two workarounds exist: he can export in batches of under 500 rows and stitch them together, or he can send you the raw file and you will run the export server-side and email it back within two hours.\n\nRewrite it for Ravi. Under 90 words.",
    "constraints": [
      "Keep no phrase from the macro",
      "Name the bug in one plain sentence, without the word \"issue\"",
      "The Friday workaround must appear before the Monday fix date",
      "No emoji, no \"valued customer\", no \"rest assured\""
    ],
    "scoreOn": [
      "After reading it, does Ravi know how to file on Friday?",
      "Did you describe the bug in plain terms rather than calling it an issue?",
      "Is every sentence about his situation rather than your team's effort?",
      "Is it under 90 words with no phrase carried over from the macro?"
    ],
    "goodLooksLike": "Deadline first, fix date second, feelings last if at all. Opens near: \"Your export drops the last row on files over 500 lines. That is confirmed, and the fix lands Monday, which is after your HMRC deadline, so here are two ways to file on Friday.\" Then the two options, then one line offering to run it yourself."
  },
  {
    "id": "say-the-thing",
    "trackRef": 16,
    "minutes": 3,
    "title": "Say the thing",
    "prompt": "Five hedged sentences pulled from live support replies. Rewrite each as one direct sentence that keeps the same meaning:\n\n1. \"I'll go ahead and get that escalated for you.\"\n2. \"It appears there may have been an issue with the payment on your account.\"\n3. \"We are currently unable to provide a specific timeframe at this time.\"\n4. \"I would recommend that you may want to consider reaching out to your bank.\"\n5. \"Your feedback has been noted and passed along to the relevant team.\"\n\nWhere a direct sentence needs a specific you do not have, invent the smallest one and put it in square brackets, for example [Thursday] or [£12].",
    "constraints": [
      "One sentence each, and each shorter than the original",
      "Banned: \"go ahead\", \"at this time\", \"reach out\", \"noted\", \"relevant team\"",
      "Invented specifics go in square brackets",
      "Do not promise anything the original did not promise"
    ],
    "scoreOn": [
      "Is every rewrite shorter than the sentence it replaces?",
      "Does each one say who does what, and by when where a time is implied?",
      "Did you avoid promising more than the original did?",
      "Is the subject of each sentence a person or a thing, rather than \"it\" or \"there\"?"
    ],
    "goodLooksLike": "Ten to fifteen words each, a named actor in every one. Number two lands near: \"Your card was declined on [12 March], so the payment did not go through.\" Number five is the hard one, because honest usually means admitting nobody will act on it, so it becomes something like: \"I have logged this for the [billing] team, and I cannot promise it changes anything.\""
  },
  {
    "id": "ticket-root-cause",
    "trackRef": 16,
    "minutes": 15,
    "title": "Find the upstream fix",
    "prompt": "Last 30 days, 2,140 tickets. Top five contact reasons:\n\nWhere is my order: 412\nHow do I cancel: 260\nReset link expired: 197\nCan I change my delivery address: 154\nCharged twice: 88\n\nWhat you know from working the queue:\n- Password reset links expire after 15 minutes. The reset email takes 9 minutes on average to arrive, longer on Outlook.\n- Tracking emails send at dispatch, but the courier's first scan happens 31 hours later on average, so the tracking page reads \"no information found\" for most of the first day.\n- Cancelling requires a phone call, weekdays 9 to 5.\n- An agent can change a delivery address in 20 seconds, but customers cannot do it themselves.\n- Average handling cost is £3.40 per ticket.\n\nProduce three things. One sentence naming a single root cause. A 40-word ask to the product team, including the cost of leaving it as it is. One line of macro copy you could change today without anyone's approval, under 25 words.",
    "constraints": [
      "Name one root cause only, not a list",
      "Use the £3.40 figure in the ask",
      "The macro line must be under 25 words and shippable today",
      "The 40-word ask must name the change, not just the problem"
    ],
    "scoreOn": [
      "Does your root cause explain the volume, or does it restate the ticket subject?",
      "Did you put a money figure on the current cost using the numbers given?",
      "Could the product team build from your 40 words without booking a meeting?",
      "Is your macro line something you could paste into the tool today with nobody's sign-off?"
    ],
    "goodLooksLike": "The reset queue is the cleanest case: a 15-minute expiry against a 9-minute delivery time means many links are dead on arrival, and 197 tickets at £3.40 is roughly £670 a month plus the customers who never get back in at all. The ask names the change, for example extending expiry to 60 minutes, not \"improve the reset experience\". Choosing a different root cause is fine if the reasoning is as tight."
  },
  {
    "id": "price-rise-note",
    "trackRef": 16,
    "minutes": 10,
    "title": "Bad news to four thousand people",
    "prompt": "You run support and comms for a shift-scheduling tool used by pubs, cafes and small care homes. The facts:\n\n- The price goes from £29 to £39 a month on 1 November 2026.\n- It is the first rise in three years.\n- Customers on annual plans keep £29 until their renewal date.\n- The new price includes shift swapping, which has been a £10 a month add-on. About 30 percent of customers already pay for it, so their bill does not change.\n- Anyone who cancels before 1 November can export their rota history as CSV, and support will run the export for them.\n- 4,000 customers will receive this email.\n\nWrite the subject line and the email body.",
    "constraints": [
      "Subject line under 45 characters, and it must name the change",
      "The new price and the date must both appear in the first 25 words of the body",
      "At most one sentence explaining your costs",
      "Body under 120 words, and no \"we've made the difficult decision\""
    ],
    "scoreOn": [
      "Could a reader who stops after 25 words state the new price and the date?",
      "Did you spend no more than one sentence on your own costs?",
      "Is there a real option, with a real action, for someone who wants to leave?",
      "Does the subject line name the change rather than hint at it?"
    ],
    "goodLooksLike": "A subject like \"Your price changes on 1 November\" and a first line that gets straight to £39 and the date. The add-on detail earns a sentence because for 30 percent of readers the answer is \"nothing changes for you\". The exit route is stated plainly rather than buried at the bottom in smaller words."
  },
  {
    "id": "no-plus-note",
    "trackRef": 16,
    "minutes": 5,
    "title": "The no and the note",
    "prompt": "A customer, James, bought an annual plan on 2 January for £290. Your January sale ran from 20 to 27 January at £232. He wants the £58 difference. Your price-match window is 7 days from purchase, and his purchase was 18 days before the sale started, so he does not qualify. You have a £25 goodwill allowance you can use without asking anyone. You have seen nine versions of this same complaint this month, and sale dates are never published before they start.\n\nWrite two things. First, the reply to James, under 70 words. Second, a note to your manager, under 40 words.",
    "constraints": [
      "The customer reply must contain the real figures and stay under 70 words",
      "Do not use the word \"policy\" in either piece",
      "The internal note must propose one specific change, not describe the annoyance",
      "The internal note must be under 40 words"
    ],
    "scoreOn": [
      "Does the reply to James contain the real numbers rather than vague terms?",
      "Would you be comfortable if James read your internal note?",
      "Does the note propose one change someone could actually action?",
      "Did you avoid the word \"policy\" in both pieces?"
    ],
    "goodLooksLike": "The reply owns the rule as a decision rather than a wall: the sale started 18 days after he bought and the match window is seven, so the answer is no, and whatever you choose to do with the £25 is stated clearly rather than dangled. The note reads like a colleague, for instance: \"Nine of these in January. Suggest we show the match window on the checkout page and stop deciding these case by case.\""
  },
  {
    "id": "positioning-statement",
    "trackRef": 17,
    "minutes": 10,
    "title": "Your positioning statement",
    "prompt": "Write a positioning statement for yourself in three sentences, using this shape:\n\nFor [a specific kind of team in a specific situation], I am the person who [the job they struggle to fill], unlike [the nearest real alternative they would consider], because [evidence, including one number from your own work].\n\nThen add a fourth sentence naming who you are not for.\n\nThe alternative in the third slot has to be something a hiring manager would genuinely weigh up: a different kind of hire, an agency, a contractor, a tool, or doing nothing for another two quarters.",
    "constraints": [
      "Include one real number from your own work",
      "No self-describing adjectives: passionate, driven, strategic, creative, results-oriented",
      "Under 90 words in total",
      "The \"not for\" sentence must rule out work you would plausibly be offered"
    ],
    "scoreOn": [
      "Could a recruiter repeat your statement to a hiring manager after reading it once?",
      "Is the number yours, specific, and defensible under questioning?",
      "Is the alternative a real option a manager would weigh, rather than a straw man?",
      "Does your \"not for\" sentence cost you something, or does it only rule out work nobody would offer you?"
    ],
    "goodLooksLike": "Narrow enough to sound like a person rather than a category. For example, opening \"For DTC brands doing £2m to £10m with one in-house marketer and no analyst\", then the job you actually do, then \"unlike an agency retainer\", then the number. The last sentence should make you slightly uncomfortable, because a positioning statement that rules nothing out is a description, not a position."
  },
  {
    "id": "what-would-you-change",
    "trackRef": 17,
    "minutes": 10,
    "title": "What would you change first",
    "prompt": "You are in a final interview for a senior content role at Kernel, a B2B expense management company. Your interview pack contained this.\n\nHomepage hero, as live:\nH1: \"Kernel: financial operations, reimagined.\"\nSub: \"The intelligent platform that empowers modern finance teams.\"\nSub-sub: \"Join thousands of companies streamlining their spend.\"\nCTA: \"Book a demo\"\n\nNumbers in the pack:\n- Homepage to demo request: 0.9 percent.\n- 62 percent of demo requests come from companies under 50 staff.\n- Sales only accepts companies over 200 staff.\n- 41 percent of demo requests are disqualified on the first call.\n- Average sales cycle: 74 days.\n\nThe interviewer asks: \"If you joined on Monday, what would you change first?\"\n\nWrite the answer you would say out loud. 150 words maximum.",
    "constraints": [
      "One change, held for the whole answer",
      "Cite at least one number from the pack",
      "Name the metric you expect to move and the metric you would watch for damage",
      "Include the sentence \"I could be wrong about\" and finish it honestly"
    ],
    "scoreOn": [
      "Did you commit to one change rather than listing three?",
      "Did you use a number from the pack rather than speaking in general terms?",
      "Did you name what would get worse if your change works?",
      "Is your \"I could be wrong about\" a real risk you have thought through, rather than modesty?"
    ],
    "goodLooksLike": "The strongest answers do not start with the hero copy being vague, even though it is. With 41 percent disqualified and 62 percent of requests coming from companies too small to sell to, the page is doing its job for the wrong audience, and better words without better qualification just produce more of the same. A good answer says raw demo volume will probably fall, says that is the point, and names accepted demos as the number that has to rise to justify it."
  },
  {
    "id": "stop-list-call",
    "trackRef": 17,
    "minutes": 5,
    "title": "The stop list",
    "prompt": "A six-person B2B SaaS marketing team, everything it did last quarter:\n\nWeekly blog post: 12 published, 3,400 organic sessions in total, 2 demo requests. Around 1.5 days of one person's week.\nMonthly webinar: 3 run, 210 registrations, 74 attendees, 11 demo requests. Around 3 days each.\nLinkedIn brand page: 4 posts a week, 1,100 followers, roughly 400 impressions per post. Around 2 hours a week.\nQuarterly customer newsletter: 1 sent, 4,900 recipients, 38 percent open rate, 1 demo request. Around 2 days.\nOne conference stand: £14,000 plus 4 staff days, 62 badge scans, 9 accepted meetings, 2 opportunities worth £40,000 combined.\nCase studies: 2 published, around 4 days each. Sales says they are used in every deal.\n\nName one thing this team should stop. Under 120 words.",
    "constraints": [
      "Exactly one thing, and stopped rather than reduced",
      "State what is lost, including who will object",
      "Say where the freed time goes, specifically",
      "Under 120 words"
    ],
    "scoreOn": [
      "Did you name the person or team who will push back?",
      "Did you state what is lost, not only what is saved?",
      "Is the reallocation a specific piece of work rather than \"more of what works\"?",
      "Is it under 120 words and about one thing only?"
    ],
    "goodLooksLike": "The blog is the obvious candidate on these numbers, but a good answer handles the lag: organic traffic built over years does not vanish in a quarter, so the cost of stopping arrives six to nine months later and someone should take that decision knowingly. Naming who objects matters. \"The founder posts the blog link on LinkedIn every Tuesday and will notice by week two\" is the sentence that separates judgement from arithmetic."
  },
  {
    "id": "cv-bullet-rewrite",
    "trackRef": 17,
    "minutes": 5,
    "title": "Bullets that earn the call",
    "prompt": "Three CV bullets, of the kind that appear on most marketing CVs:\n\n1. \"Responsible for managing the company's social media channels and increasing engagement.\"\n2. \"Worked closely with cross-functional stakeholders to deliver various marketing campaigns.\"\n3. \"Helped improve the website conversion rate through A/B testing.\"\n\nRewrite all three using your own real work. Each becomes one line naming a decision you made and what happened as a result. If you do not remember the exact figure, write the bound you could defend in an interview, for example \"at least 15 percent\" or \"roughly 40 hours a month\".",
    "constraints": [
      "Each bullet under 22 words",
      "Each must name a decision you made, not a task you were assigned",
      "Banned openers: \"responsible for\", \"helped\", \"worked closely with\", \"assisted\"",
      "Every number must be one you could defend under five minutes of questioning"
    ],
    "scoreOn": [
      "Does each bullet name a decision that would not have happened without you?",
      "Could you defend every number through five minutes of follow-up questions?",
      "Did you remove all four banned openers?",
      "Is each bullet under 22 words?"
    ],
    "goodLooksLike": "A decision, then a consequence, in that order. Something like \"Cut posting from daily to twice weekly and moved the time into two customer case studies, which sales now uses in every deal.\" The test is whether an interviewer could ask \"why did you decide that?\" and get a real answer. A bullet describing an outcome you were merely near fails that test."
  },
  {
    "id": "costly-mistake-story",
    "trackRef": 17,
    "minutes": 10,
    "title": "The thing you got wrong",
    "prompt": "Written answer to a question you will be asked: \"Tell me about something you got wrong.\"\n\nWrite it out in full, 150 words maximum, in this order: what you believed, what you did about it, what the evidence eventually said, what you changed, and what you now do differently.\n\nThe mistake has to have cost something real, in money, time or trust, and you have to say roughly how much. Interviewers at senior level are not testing whether you have made mistakes. They are testing whether you can describe one without turning it into a trophy.",
    "constraints": [
      "Name the cost in money, time or trust, with a number or a defensible bound",
      "No ending where the failure becomes a larger success",
      "One sentence on what you do differently now, specific enough that a colleague could check it",
      "150 words maximum"
    ],
    "scoreOn": [
      "Would your manager at the time agree with your version of events?",
      "Is the cost stated as a number or a bound rather than \"some time\"?",
      "Did you resist turning it into a success story?",
      "Could a colleague verify that you actually do the new thing now?"
    ],
    "goodLooksLike": "Flat, specific, no arc. For example: \"I argued for two quarters that our low trial conversion was a messaging problem. I rewrote the onboarding emails twice. When we finally watched six session recordings, the sign-up form was rejecting valid VAT numbers.\" Then the cost, then the change, and the change should be a habit rather than a lesson: \"I now watch five recordings before I write anything\" is checkable, \"I now question my assumptions\" is not."
  },
  {
    "id": "ship-hold-rerun-checkout",
    "trackRef": 8,
    "minutes": 10,
    "title": "Ship, hold or rerun",
    "prompt": "A one product DTC store (a £64 desk lamp, plus an optional £29 three year warranty checkbox) tested a simplified checkout. The variant removed the coupon code field and the warranty checkbox. Full readout:\n\nArm | Sessions | Orders | Conversion rate | AOV | Revenue\nControl | 18,412 | 921 | 5.00% | £71.02 | £65,409\nVariant | 18,377 | 1,003 | 5.46% | £64.00 | £64,192\n\nOther facts on the record:\n- Relative lift on conversion rate 9.1%, stated confidence 93%.\n- Warranty attach in control was 24.2% of orders. In the variant it was zero, because the checkbox is gone.\n- Gross margin on the lamp is 42% (£26.88). Gross margin on the warranty is 88%.\n- The test ran 8 days, Friday to the following Friday, including the August bank holiday weekend. In a normal week, 22% of orders land on Monday and Tuesday.\n- Nothing else changed on the site.\n\nWrite the note you would post to the growth lead. Under 150 words. Recommend ship, hold or rerun, and say exactly what would change your mind.",
    "constraints": [
      "Under 150 words",
      "Quote at least two numbers you calculated yourself, not two numbers from the table",
      "Give one recommendation, not a list of considerations",
      "No hedging phrase in the first sentence"
    ],
    "scoreOn": [
      "Did you work out revenue per session or profit per session rather than judging on conversion rate alone?",
      "Did you name at least one reason the 8 day window makes the result unreliable?",
      "Is your recommendation a single clear verb a reader could act on today?",
      "Did you state a specific number or condition that would flip your answer?"
    ],
    "goodLooksLike": "You notice that conversion went up while money went down, and you say so with the arithmetic in your hand. Something like: \"Conversion is up 9.1% but revenue per session fell from £3.55 to £3.49 and gross profit per session fell from £1.65 to £1.47, because the variant deleted an 88% margin attach that a quarter of buyers took. Rerun with the warranty preserved.\" The bank holiday and the 8 day run get one line, not a paragraph."
  },
  {
    "id": "write-the-hypothesis",
    "trackRef": 8,
    "minutes": 5,
    "title": "Write the hypothesis",
    "prompt": "Form analytics for a van insurance quote form, last 30 days:\n\nField 1, vehicle registration: 3,140 entered, 98% continued\nField 2, postcode: 3,077 entered, 96% continued\nField 3, date of birth: 2,954 entered, 64% continued\nField 4, annual mileage: 1,890 entered, 612 finished the form (32%)\n\nMedian time in field 4 is 41 seconds. Every other field sits between 5 and 8 seconds. 71% of field 4 abandons are on mobile. Field 4 is free text, numbers only, no default, helper text reads \"Estimated annual mileage\". Session replay shows people switching tabs and coming back before abandoning.\n\nWrite one hypothesis in this shape, under 60 words:\n\"Because [evidence], we believe [change] for [audience] will [outcome]. We will know we were right when [metric] moves [amount] within [window].\"\n\nThen add two lines: one guardrail metric, and one result that would make you drop the idea rather than iterate on it.",
    "constraints": [
      "Under 60 words for the hypothesis itself",
      "One change only, specific enough to brief a developer today",
      "Cite a number from the data in the evidence clause"
    ],
    "scoreOn": [
      "Does your evidence clause contain a figure from the data rather than a general observation?",
      "Is the change one thing, not a bundle of three?",
      "Does your success line contain both a number and a time window?",
      "Could the test come back against you on the criteria you wrote, without you being able to reinterpret it afterwards?"
    ],
    "goodLooksLike": "The evidence is the 41 seconds, not \"users struggle\". The change is a single mechanic, for example replacing free text with five mileage bands. The success line is falsifiable: \"field 4 completion moves from 32% to at least 45% within three weeks at 95% confidence\". The abandon line is the hard part and the point of the drill."
  },
  {
    "id": "size-the-form-opportunity",
    "trackRef": 8,
    "minutes": 10,
    "title": "Size it before you build it",
    "prompt": "A B2B SaaS pricing page, steady for twelve months:\n\n42,000 sessions a month on the pricing page\n9.4% click through to the signup form\n31% of form starts complete the form\n22% of completed signups become paid within 30 days\nARPA £58 a month, median account life 14 months\n\nA designer proposes replacing the 11 field signup form with a 4 field form plus progressive profiling, and estimates completion rises from 31% to 36%. Cost is three weeks of one engineer plus four days of design. The 36% figure comes from a vendor case study in a different industry. Month to month form completion has swung between 27% and 35% over the past year with nothing shipped.\n\nDo the arithmetic, then write a recommendation of 120 words or fewer. It must contain the money figure, the assumption most likely to be wrong, and a decision on whether to ship it, test it or drop it.",
    "constraints": [
      "Under 120 words for the recommendation",
      "Say which frame your money figure uses: new MRR per month, or lifetime value added",
      "Name one assumption you would check before the build starts"
    ],
    "scoreOn": [
      "Did you carry the numbers all the way to paying customers rather than stopping at form completions?",
      "Did you state the frame of your money figure so a finance person could not misread it?",
      "Did you address the 27% to 35% natural swing rather than ignoring it?",
      "Is your recommendation ship, test or drop, chosen rather than left open?"
    ],
    "goodLooksLike": "About 197 extra completions a month, roughly 43 extra paying accounts, roughly £2,500 of new MRR each month or about £35,000 of lifetime value a month. Then the senior move: the swing in the baseline is bigger than the claimed lift, so a before and after read is worthless here, but at roughly 3,950 form starts a month a split test can read a 5 point move in about three weeks. Test it."
  },
  {
    "id": "metric-being-gamed",
    "trackRef": 8,
    "minutes": 5,
    "title": "Spot the gamed number",
    "prompt": "An agency sends this on a Friday afternoon:\n\n\"Hi all, great news on the homepage test. Final numbers: variant 6.8% vs control 4.8%, a 41% lift, significant at 96%. We cleaned the data by excluding sessions under 3 seconds and bot flagged traffic, which is standard practice. We also aligned on add to cart as the success metric mid flight, since purchases were too sparse to reach significance in the window. Recommend rolling out to 100% on Monday, full deck Thursday.\"\n\nWhat you know from your own side: the test plan named purchases as the primary metric with a four week run. It was stopped on day 11, the morning significance was first reached. The exclusion removed 14% of control sessions and 3% of variant sessions.\n\nWrite the reply. Under 120 words.",
    "constraints": [
      "Under 120 words",
      "Name the mechanisms specifically, not \"I have concerns about the methodology\"",
      "Ask for numbers you could receive before Monday",
      "Concede one thing that is genuinely fine"
    ],
    "scoreOn": [
      "Did you name at least two specific mechanisms, such as the metric switch, the lopsided exclusion or the early stop?",
      "Did you request a named number rather than \"more data\"?",
      "Did you concede one point, so the reply reads as a colleague rather than an ambush?",
      "Is it free of sarcasm and still unmistakably a no for Monday?"
    ],
    "goodLooksLike": "Short, specific and easy to act on. For example: \"Two things before Monday. The primary metric was purchases and the readout is add to cart, so the result answers a different question than the one we set. The 3 second exclusion removed 14% of control and 3% of variant, which moves the denominators unequally. Can you send purchases for both arms, unexcluded, for days 1 to 11?\""
  },
  {
    "id": "error-copy-checkout",
    "trackRef": 7,
    "minutes": 5,
    "title": "Fix four checkout strings",
    "prompt": "Four live strings from a checkout. Rewrite all four.\n\n1. \"Error: Invalid input in field 3.\" Context: field 3 is card expiry. The customer typed 05/2027 and the field wants MM/YY.\n2. \"Transaction failed. Please try again.\" Context: the issuing bank declined. No money left the customer's account. Trying the same card usually fails again; another card or the bank's app usually works.\n3. \"Something went wrong.\" Context: the address lookup failed because the postcode was typed as \"SW 1A2AA\". The correct format is SW1A 2AA.\n4. Button label: \"Submit order\". Context: the cart is £71, delivery is free over £50, and exit surveys say people fear being charged before they see the delivery cost. Delivery cost is shown on the next screen, which is the last screen before payment.",
    "constraints": [
      "Each message under 20 words, button four words or fewer",
      "Every message says what happened and what to do next",
      "Say whether money moved, wherever money is in question",
      "No \"please try again\", no \"oops\", no \"invalid\""
    ],
    "scoreOn": [
      "Does each message name the actual cause in words the customer can act on?",
      "Did you tell the customer their card was not charged in the declined case?",
      "Is every message under 20 words?",
      "Does your button tell the reader what happens next rather than what they are doing to the form?"
    ],
    "goodLooksLike": "Plain, calm, specific. The declined card is the test: \"Your bank declined this payment and your card was not charged. Try another card, or approve it in your banking app.\" The button stops promising the end of the journey and names the next screen instead."
  },
  {
    "id": "objection-blocks-from-calls",
    "trackRef": 7,
    "minutes": 10,
    "title": "Three blocks, top three objections",
    "prompt": "A B2B scheduling tool for care agencies, £249 a month for five seats. Someone tagged 60 recorded sales calls for the objection that came up before the deal stalled:\n\nWe already use something for this, mostly spreadsheets plus WhatsApp | 27\nOur staff data is a mess so onboarding will take months | 19\nNo budget until the new financial year in January | 14\nI believe it but I cannot get my registered manager to agree | 11\n\nFacts you may use, all true in this scenario: setup takes a 90 minute call plus a CSV of staff and sites, median time from signing to first published rota is 6 days; 41 of 88 current customers moved from spreadsheets; monthly rolling contract, cancel with 30 days' notice; the product produces the audit trail managers are asked for at inspection.\n\nWrite the objection section: one heading plus three blocks, answering the top three objections by count.",
    "constraints": [
      "Heading 50 characters, block titles 5 words, block bodies 40 words",
      "Each block contains one concrete number or timeframe",
      "No feature lists and no bullet points inside a block"
    ],
    "scoreOn": [
      "Did you answer the three most common objections rather than the three easiest to write?",
      "Does every block contain a number or a timeframe from the brief?",
      "Would a sceptical buyer recognise their own words in your block titles?",
      "Did you resist adding a claim that is not in the material?"
    ],
    "goodLooksLike": "Each block picks up the objection in the reader's language and closes it with evidence. For the mess objection: \"Send one CSV. Most agencies publish their first rota six days after signing.\" The budget block does not argue with January, it makes January survivable."
  },
  {
    "id": "hero-message-match",
    "trackRef": 7,
    "minutes": 5,
    "title": "Match the hero to the ad",
    "prompt": "Live hero on a landing page:\n\nEyebrow: EXPENSE MANAGEMENT\nH1: Financial clarity for modern teams\nSubhead: Our platform gives finance leaders the visibility they need to make better decisions, faster.\nCTA: Get started\n\nWhere the traffic comes from: 61% of last month's 26,400 sessions came from one TikTok ad. The ad opens with \"If you're still photographing receipts in a car park at 11pm, this one's for you.\" It is targeted at owners of trades businesses running 3 to 20 vans. Mobile bounce rate on this page is 74%. Organic bounce rate is 39%.\n\nWhat the product actually does: you photograph a receipt, it matches itself to the card payment automatically, and your accountant gets the whole month's pack on the 1st.\n\nRewrite the four hero fields.",
    "constraints": [
      "Eyebrow 24 characters, H1 55, subhead 130, CTA 18",
      "Written for a van fleet owner, not a finance director",
      "Do not use platform, solution, visibility, streamline or seamless",
      "Name something the reader stops having to do"
    ],
    "scoreOn": [
      "Would someone arriving from that ad recognise their own situation in the first five words?",
      "Does your H1 fit in 55 characters when you count it?",
      "Did you name a task the reader is relieved of, rather than a benefit in the abstract?",
      "Is your CTA specific to this product rather than a phrase that would fit any site?"
    ],
    "goodLooksLike": "The hero picks the reader up where the ad dropped them. Something in the register of \"Photograph the receipt. That's the paperwork done.\" The subhead earns the claim with the mechanism and the accountant on the 1st. Nobody in the copy is called a modern team."
  },
  {
    "id": "abandonment-rewrite",
    "trackRef": 11,
    "minutes": 10,
    "title": "Rewrite the abandonment email",
    "prompt": "Live cart abandonment email, sent 20 minutes after abandonment, one email, no follow up:\n\nSubject: You left something behind! 🛒\nPreheader: Don't miss out\nBody: \"Hi there, We noticed you left some items in your cart. Don't miss out! Your items are waiting for you, but stock is limited and we can't hold them forever. As a special thank you, here's 20% off with code COMEBACK20. Shop now! The Team\"\n\nThe numbers: 14,000 abandoners a month. Of those emailed, 0.9% order. A 10% holdout that receives nothing orders at 0.55%, so the email adds 0.35 points. AOV £68, gross margin 46%, so £31.28 a sale. The 20% code costs £13.60 per order and is applied on every order the email produces, including the ones that would have happened anyway.\n\nContext that matters: the product is a made to order armchair with a three week lead time, so nothing is running out of stock. In pre sales chat, 44% of questions are \"how long until it arrives\" and 18% are \"can I change the fabric later\".\n\nRewrite it as email one of a two email flow.",
    "constraints": [
      "Under 120 words, subject under 45 characters",
      "No discount, no emoji, no scarcity claim",
      "Answer the most common real question in the first two lines",
      "State your send delay and one sentence saying why"
    ],
    "scoreOn": [
      "Did you lead with the lead time question rather than with the nudge?",
      "Is every claim in your email true given the made to order lead time?",
      "Is your subject line under 45 characters and free of the word \"cart\"?",
      "Did you justify your send delay with something about the buying decision rather than a rule of thumb?"
    ],
    "goodLooksLike": "The email reads like the answer to the question that stopped them, not a chase. Opening in the region of \"Your chair takes three weeks to make, and the fabric can change any time before it goes into production.\" The delay is measured in hours, not minutes, because nobody buys a £700 chair in the twenty minutes after leaving. Bonus if you notice the discount currently loses money: about 49 incremental orders at £17.68 against roughly 77 subsidised orders at minus £13.60."
  },
  {
    "id": "which-flow-first",
    "trackRef": 11,
    "minutes": 10,
    "title": "Which flow gets built first",
    "prompt": "You have one lifecycle developer for the next two weeks. Four flows are proposed:\n\nFlow | Monthly eligible | Expected conversion | Value per conversion | Build\nBrowse abandonment | 22,000 | 0.4% | £68 order at 46% margin | 4 days, after a 2 week privacy review\nPost purchase cross sell | 3,400 | 6% | £29 order at 61% margin | 3 days\nWin back at 120 days | 9,100 in the one off backlog, then about 700 a month | 1.1% | £68 order at 46% margin | 2 days\nTrial day 3 activation nudge | 1,250 | activation 34% to 41% | £180 gross profit per activated trial | 5 days\n\nWork out the monthly gross profit for each, then write 150 words to your manager: the order you would build them in, the rule you used to rank them, and the flow whose headline number is most misleading and why.",
    "constraints": [
      "Under 150 words",
      "State your ranking rule in one sentence before the ranking",
      "Name one flow you would not build this quarter and say so plainly"
    ],
    "scoreOn": [
      "Did you convert to gross profit rather than ranking on revenue or on audience size?",
      "Did you separate the one off backlog from the ongoing monthly figure for win back?",
      "Is your ranking rule stated explicitly enough that a colleague could apply it to a fifth flow?",
      "Did you account for build days and the two week privacy wait, not just the money?"
    ],
    "goodLooksLike": "Roughly £2,750, £3,610, £3,130 in month one then about £240 a month, and £15,750. The activation nudge wins on both total profit and profit per build day, and the honest sentence is that win back looks strong only because a backlog is being counted as if it recurred. A stated rule such as \"monthly gross profit per build day, at steady state not month one\" is what separates this from a guess."
  },
  {
    "id": "deliverability-triage-note",
    "trackRef": 11,
    "minutes": 5,
    "title": "Open rate fell by half",
    "prompt": "Six weeks of data from your email tool:\n\nList grew from 74,000 to 102,000, with 28,000 addresses arriving in 9 days from a giveaway that only asked for an email address.\nOverall open rate fell from 41% to 22%.\nGmail addresses are 68% of the list and account for almost all of the fall. Outlook opens are flat at 39%.\nSpam complaint rate rose from 0.06% to 0.42%. Your sending tool's stated threshold for trouble is 0.30%.\nHard bounce rate is 4.1%, against a 2% norm for this list.\nThe giveaway cohort opens at 3% and has received all six sends since joining.\n\nWrite the note to the head of growth, who signed off the giveaway. Under 120 words.",
    "constraints": [
      "Under 120 words",
      "Name the mechanism, one thing to stop today, and one segment rule for this week",
      "Give the metric and the date you will use to confirm recovery",
      "No blame language"
    ],
    "scoreOn": [
      "Did you explain why the whole list is suffering because of one cohort, in one sentence a non specialist would follow?",
      "Is there exactly one action to take today, not a list of five?",
      "Did you name both a recovery metric and a date rather than \"we will monitor\"?",
      "Would the person who approved the giveaway be able to read this without becoming defensive?"
    ],
    "goodLooksLike": "One clear mechanism, one clear stop. Roughly: \"The 28,000 giveaway addresses open at 3% and complain at eight times our old rate, and mailbox providers read that as a signal about all our mail, so the engaged 74,000 are being filtered too. Stop sending to the giveaway cohort today.\" Recovery is named as a number on a date, for example Gmail open rate back above 35% by 14 September."
  },
  {
    "id": "five-buttons",
    "trackRef": 7,
    "minutes": 3,
    "title": "Five buttons, four words each",
    "prompt": "Rewrite these five button labels. Each sits in a different place, and the context is what decides the words.\n\n1. Pricing page, annual plan card, next screen is a card entry form: \"Submit\"\n2. Free VAT calculator, after the result appears, next screen is a signup for the full bookkeeping tool: \"Learn more\"\n3. Cart page with three items, next screen is delivery options: \"Continue\"\n4. Demo request form under a headline about cutting payroll admin from 6 hours a month to 40 minutes, next step is a 20 minute call: \"Send\"\n5. End of a blog post, offering a benchmark report behind an email field: \"Download\"",
    "constraints": [
      "Four words maximum per button",
      "Start with a verb the reader is doing, not one the system is doing",
      "Do not use \"Get started\", \"Submit\" or \"Learn more\" anywhere"
    ],
    "scoreOn": [
      "Does each label say what the next screen actually is?",
      "Would any of your five labels work equally well on a different one of these five buttons?",
      "Is every label four words or fewer?",
      "Did you avoid promising something the next screen does not deliver, such as \"Buy now\" before a payment screen?"
    ],
    "goodLooksLike": "Each button reads as the next step in the reader's sentence. The demo one is the tell: \"Book the 20 minute call\" is too long, \"Book my demo call\" is close, and the honest version names the call length if you can fit it. Every label should be wrong for at least one of the other four contexts."
  },
  {
    "id": "no-traffic-test-plan",
    "trackRef": 8,
    "minutes": 15,
    "title": "Testing without the traffic",
    "prompt": "A B2B site. The demo request page takes 1,900 sessions a month and converts at 2.6%, about 49 requests. Sales says roughly half of those requests are unqualified and waste a 20 minute call each.\n\nAt this baseline, detecting a 10% relative lift needs roughly 60,000 sessions per arm, which is more than five years of traffic. The page has not been changed in three years. 41% of the traffic comes from one paid search campaign. Six sales calls a week are recorded and you can listen to them. Design has a full page redesign ready to go.\n\nWrite the plan. Under 200 words. It must cover: what you would change and in what order, what evidence you will accept instead of statistical significance, how you would tell an improvement from normal variation, the guardrail that would make you roll back, and the sentence where you say plainly what you are giving up by not running a controlled test.",
    "constraints": [
      "Under 200 words",
      "No proposal that requires more traffic than the site has",
      "One explicit sentence naming what you give up",
      "Say what you would do about the unqualified half, not only about the conversion rate"
    ],
    "scoreOn": [
      "Does your plan work at 1,900 sessions a month, with no wishful traffic assumptions?",
      "Did you name a specific non statistical evidence source, such as the call recordings, and say what you would listen for?",
      "Did you set a rollback guardrail with a number attached?",
      "Did you write the sentence admitting what a before and after read cannot tell you?"
    ],
    "goodLooksLike": "A senior plan says the quiet part out loud: at this volume you are buying judgement, not proof, and a good month could be seasonality. It ships one large change rather than six small ones, because only a big swing is visible in this much noise. It treats qualified demos, not demo requests, as the real metric, since 49 requests where half are junk is a different problem from a low conversion rate. Call recordings do the work that significance cannot."
  }
];

export const GEN_SIMS = [
  {
    "id": "sim-copy",
    "role": "Conversion copywriter (contract, three days a week)",
    "title": "Ambler M2: hero and objection section rewrite",
    "company": "Ambler (fictional), a London DTC brand with one product, the £449 M2 under desk walking pad, 11 staff, third year of trading, roughly £2.2m in the last twelve months and about £5.4m since launch in 2024, self funded.",
    "minutes": 55,
    "scenario": "Thanks for getting to this stage. You would be our second writer, working on the M2 product page and the lifecycle emails. This exercise is the closest thing we have to the actual job.\n\nHere is the situation. The M2 page is our only real storefront. Over the last 28 days it took 34,532 sessions and produced 377 orders. Paid social spend has roughly doubled since May and the conversion rate has gone the other way. Separately, our returns team is unhappy: 14.2% of orders come back and each return costs us £41 in reverse logistics before the refund. We think the page is part of both problems, but we are not sure which part. Attached you have the live copy, 28 days of analytics, ten verbatim reviews, the review and returns tagging our support team keeps, and the Slack thread where we handed the brief over.\n\nThe constraints are real and they are not negotiable this month. Dev is frozen until 4 September, so you are writing into the modules that already exist: six hero fields with fixed character limits, and one \"Why Ambler?\" section with a heading and exactly three blocks. No new photography, the hero shot stays as it is. The price stays at £449 and the 30 day returns offer stays. You cannot add a section, a badge, a video or a calculator, however much you want one.\n\nTwo things are genuinely unresolved and we are not going to resolve them for you. First, Priya and Dan disagree about what this page is for and therefore what the secondary CTA should do. Second, product will not confirm a date for the low profile M3 deck, so you have to decide how to write about the current hardware without promising anything. Make the call yourself, write down what you assumed and why, and we will argue about it in the follow up call rather than before it. Do not email us questions, the team is off site.\n\nKeep it to 55 minutes. Use a character counter, we are not asking you to count by hand. We would rather see a rough submission with clear reasoning than a polished one you cannot defend, and we will ask you to defend individual lines. AI assistance is allowed if you tell us where you used it.",
    "materials": [
      {
        "label": "Current landing page copy, verbatim",
        "kind": "copy",
        "content": "HERO (as live)\n\nEyebrow: WALKING PAD\nH1: Move more. Sit less.\nSubhead: The Ambler M2 slides under most desks and helps you hit your step goal without stepping away from your work.\nPrimary CTA: Shop now\nSecondary CTA: Learn more\nTrust line: 4.3 stars from 214 reviews. Free UK delivery.\nHero image: the M2 under a raised sit stand desk, a woman typing, mid stride. Fixed for this launch, cannot be reshot.\n\nLIVE CHARACTER LIMITS (hard, set by the build)\nEyebrow 30. H1 60. Subhead 140. Primary CTA 18. Secondary CTA 18. Trust line 70.\n\nSTAT STRIP (directly below the hero, not editable in this task)\n6 km/h top speed | 110 kg max user weight | 45 dB running noise | 2 year warranty\n\nOBJECTION SECTION (third section down, currently titled \"Why Ambler?\")\n\nHeading: Why Ambler?\n\nBlock 1. Built to last\nEvery M2 is bench tested to 3,000 hours before it leaves the factory and it is covered by a two year warranty. Over 12,000 sold since 2024.\n\nBlock 2. Risk free trial\nNot sure? Take 30 days. If it is not for you we will collect it free of charge, no questions asked.\n\nBlock 3. Quiet by design\nOur brushless motor runs at 45 dB, quieter than a normal conversation, so you can keep walking through calls and nobody will know.\n\nSECTION LIMITS (hard)\nSection heading 50 characters. Block title 6 words. Block body 45 words.\n\nSPEC ACCORDION (collapsed by default, seventh section down, not editable)\nDeck height 12.4 cm. Running surface 120 x 44 cm. Weight 26 kg. Speed 0.8 to 6 km/h. Max user weight 110 kg. Remote included. Price £449."
      },
      {
        "label": "Site analytics, M2 landing page, last 28 days",
        "kind": "table",
        "content": "By device\nDevice | Sessions | Bounce rate | Add to cart | Orders | Conversion rate | Median time on page\nMobile | 24,180 | 71% | 611 | 74 | 0.31% | 0:22\nDesktop | 9,940 | 44% | 1,032 | 288 | 2.90% | 1:47\nTablet | 412 | 47% | 41 | 15 | 3.64% | 1:52\nAll | 34,532 | 63% | 1,684 | 377 | 1.09% | 0:51\n\nMobile sessions by source\nSource | Sessions | Share of mobile | Bounce rate | Orders\nPaid social, cold prospecting | 18,900 | 78% | 79% | 22\nOrganic search | 2,760 | 11% | 48% | 21\nDirect and branded search | 1,690 | 7% | 41% | 24\nEmail | 830 | 3% | 39% | 7\n\nScroll depth to the \"Why Ambler?\" section\nDevice | Sessions | Reached the section | Orders from those sessions | Conversion rate of those sessions\nMobile | 24,180 | 2,901 (12%) | 41 | 1.41%\nDesktop | 9,940 | 3,777 (38%) | 234 | 6.20%\nTablet | 412 | 173 (42%) | 11 | 6.36%\n\nNotes from the analyst\nNote | Value\nDesktop returning visitors | 2,140 sessions, 88 orders, 4.11%\nCross device: orders where the first touch was a mobile paid social session | 96 of 377\nAverage order value | £449, single product store, no bundles"
      },
      {
        "label": "Customer reviews, 10 of 214, verbatim",
        "kind": "quotes",
        "content": "\"Third week and I am hitting 11,000 steps on days I never leave the flat. One warning: my desk only goes up to 121cm and standing on the pad I am typing with my shoulders slightly hunched. Fine for an hour, not for three.\" — Marek T., 5 stars, verified buyer, 2 Aug 2026\n\"Sent it back. I am 6ft 1 and my sit stand desk maxes out at 118cm. Put me on a 12cm deck and the desk sits below my elbows. Nothing on the site told me to check that before I bought.\" — Owen R., 2 stars, verified buyer, 26 Jul 2026\n\"I was convinced it would be too loud for calls. Ran it at 3km/h through a forty minute client call and nobody mentioned it once.\" — Hannah P., 5 stars, verified buyer, 14 Jul 2026\n\"The pad is good. The app is not. It lost two weeks of sessions and the step count runs about 15% under my watch.\" — Dev S., 3 stars, verified buyer, 9 Aug 2026\n\"Would be five stars if the app worked. I have had to reinstall it twice in a month.\" — Claire M., 3 stars, verified buyer, 31 Jul 2026\n\"Docked a star for the app, which is clearly an afterthought. The pad itself is solid and I use it every day.\" — Tom B., 4 stars, verified buyer, 21 Jul 2026\n\"I am 5ft 2 and my desk sits at 104cm raised, so the extra 12cm actually put me at a better typing height than I had before. It depends entirely on your desk.\" — Jules A., 5 stars, verified buyer, 3 Aug 2026\n\"The page says it fits under most desks. It does fit under my desk. That is not the same as being able to work on it. My desk is a fixed 74cm. Complete waste of £449.\" — Priyanka V., 1 star, verified buyer, 18 Jul 2026\n\"Typing is fine up to about 3.5km/h. Above that my accuracy falls apart and I end up stopping to fix things. Tell people to expect a walk, not a workout.\" — Sam K., 4 stars, verified buyer, 27 Jul 2026\n\"Measured first because of another review here. Elbow height standing is 113cm for me, desk goes to 127cm, so 12.4cm of deck still leaves room. Two minutes of measuring saved me a return.\" — Adaeze N., 4 stars, verified buyer, 6 Aug 2026"
      },
      {
        "label": "Support data: review tagging, returns and pre sales chat",
        "kind": "data",
        "content": "Reviews tagged by topic (all 214 reviews, tagged by the support team, topics overlap)\nTopic | Reviews mentioning | Share | Mean rating of those reviews\nDesk height, clearance or fit | 67 | 31% | 3.4\nDelivery and setup | 62 | 29% | 4.9\nNoise | 51 | 24% | 4.8\nBuild quality and sturdiness | 44 | 21% | 4.5\nTyping or mouse accuracy while walking | 38 | 18% | 4.1\nCompanion app | 9 | 4% | 3.2\nOverall store rating | 214 reviews | 100% | 4.3\n\nReturns, trailing 90 days (168 returns against 1,183 orders, 14.2%)\nReason given | Returns | Share of returns\nDoes not fit my desk, cannot type at the right height | 61 | 36%\nChanged mind, no longer needed | 39 | 23%\nSlower or less sturdy than expected | 24 | 14%\nFaulty on arrival | 18 | 11%\nOther | 19 | 11%\nApp problems | 7 | 4%\n\nPre sales chat, last 30 days (940 conversations, top five intents)\nQuestion intent | Chats | Share\nHow tall is it, will I have enough legroom | 288 | 31%\nCan I actually type while walking | 142 | 15%\nDoes it work with my standing desk, what height do I need | 121 | 13%\nIs it quiet enough for calls | 58 | 6%\nWarranty and returns | 44 | 5%"
      },
      {
        "label": "Slack thread, #growth-copy, Monday 17 August",
        "kind": "transcript",
        "content": "Priya Naidu (Head of Growth) 09:14\nBrief for the freelance writer is attached. Scope is the hero and the \"Why Ambler?\" section, nothing else. Dev is frozen until 4 Sep so the modules cannot change: same six hero fields, same three blocks, same character limits as the live build. No new photography. Price stays £449, 30 day returns stays.\n\nDan Whitlock (Founder) 09:31\nCan we get \"burn up to 300 calories an hour\" into the H1? It is the line that does numbers for us on TikTok, every time. Also app 2.0 lands in October and it is a proper rebuild. Feels like a miss not to tease it in one of the three blocks.\n\nNadia Okonjo (Ops) 09:40\nWe have no substantiation for a calorie figure and legal will not sign one off, so that is a no. Same answer on the M3 low profile deck at 5.9cm: product will not commit to a date, so it cannot appear on the page in any form.\n\nNadia Okonjo (Ops) 09:41\nOne more thing the writer should know. Every return costs us £41 in reverse logistics before we even refund the customer.\n\nPriya Naidu 09:47\nPrimary metric is landing page conversion rate. That is what I am judging the work on.\n\nDan Whitlock 09:52\nMildly disagree. The Black Friday list is worth more to us than October revenue. I would rather the secondary CTA collected an email address than sent people to a spec page.\n\nPriya Naidu 09:58\nWe are not resolving this before the deadline. Writer: make the call yourself, write down what you assumed and why, and we will argue about it on the call. Please do not send questions, we are off site until Monday the 24th."
      }
    ],
    "deliverable": "One plain document, roughly 400 words of finished copy and rationale combined. Four parts. (1) The hero block, all six fields written to the live limits, with a character count shown after each line: eyebrow 30, H1 60, subhead 140, primary CTA 18, secondary CTA 18, trust line 70. (2) A variant H1 only, 60 characters or fewer, testing a different angle from your first, with one line naming the angle. (3) The objection section: one heading of 50 characters or fewer, then exactly three blocks, each with a title of six words or fewer and a body of 45 words or fewer. (4) A rationale of 150 to 200 words covering four things: the objection you targeted and the evidence for it, at least one assumption you made and why, one thing you deliberately chose not to say, and whether that was a constraint you were given or a judgement you made, and your primary metric, the window you would read it over, and the result that would tell you the rewrite had failed. No design, no wireframes, no extra sections.",
    "rubric": [
      {
        "criterion": "Diagnosis: picks the objection that is actually blocking the sale, and does not chase the decoys",
        "weight": 30,
        "meets": "Identifies desk height and working posture as the blocking objection, citing at least two independent sources in the pack (reviews tagged 31% at a mean 3.4 stars, 36% of returns, 288 of 940 chats, or 409 of 940 once the standing desk height row is included). Does not build the rewrite around the 0.31% mobile conversion rate or the app. Noting that 96 of 377 orders had a mobile paid social first touch, and treating the mobile hero as a discovery surface while still targeting the fit objection, is correct and should not be marked down.",
        "exceeds": "Explicitly disarms a decoy with a number: notes that 78% of mobile sessions are cold paid prospecting and that non paid mobile converts at roughly 1%, or that the app appears in 4% of reviews against 30% of the sample quotes, or that the 6.20% scroll depth figure is self selected and cannot be read as the section causing conversion."
      },
      {
        "criterion": "Hero craft inside the fixed modules",
        "weight": 25,
        "meets": "All six fields written, all inside their limits with counts shown, in plain concrete English that sounds like the reviews rather than like a brand deck. The fit question is addressed or set up somewhere in the hero, not deferred entirely to the section below. Any field over its stated limit fails this criterion outright, whatever the copy quality, because the point of the exercise is shipping inside a dev freeze.",
        "exceeds": "The H1 and subhead divide the work: one names the reader or the outcome, the other gives the concrete number or test, and neither restates the other. The variant H1 tests a different angle (qualification versus outcome, say) rather than a synonym swap. CTA labels state what happens next in the reader's language."
      },
      {
        "criterion": "Objection section: gives the reader a way to settle the doubt",
        "weight": 20,
        "meets": "At least one block turns the fit objection into something the reader can act on in under two minutes, using the real numbers available (12.4cm deck height, their own desk maximum, their elbow height). The other blocks earn their space rather than restating warranty and noise.",
        "exceeds": "Handles the honest downside without softening it into nothing: says plainly who the M2 does not work for, and uses the 30 day returns offer as a backstop rather than as the main argument. Reads as one section with a single job, not three unrelated reassurances."
      },
      {
        "criterion": "Assumptions and trade-offs stated in writing",
        "weight": 15,
        "meets": "Names at least one ambiguity the pack genuinely leaves open (the secondary CTA and primary metric split between Priya and Dan, or whether to publish a specific desk-height threshold) and the call made on it. The calorie line and the M3 date count as constraints to write around, not as assumptions. Does not ask for clarification instead of deciding.",
        "exceeds": "States the assumption, the reason, and what would change the decision. Handles the M3 timing and the calorie line as constraints to write around rather than ignoring them, and connects the choice to the £41 return cost or to the difference between cold paid and warm branded traffic."
      },
      {
        "criterion": "Measurement and defensibility",
        "weight": 10,
        "meets": "Names one primary metric and a plausible read window, and states a result that would count as failure.",
        "exceeds": "The failure condition is specific and falsifiable, and accounts for the fact that a page qualifying buyers harder may lower conversion rate while lowering returns. Says which secondary number would need to move for that trade to be worth taking."
      }
    ],
    "strongResponse": [
      "Desk height, clearance or working posture appears somewhere in your six hero fields, not only in the section below it.",
      "Every field is inside its character limit and you have written the counts next to them, so the copy could ship during a dev freeze without design work.",
      "At least one objection block asks the reader to do something concrete and short, such as measuring a height and comparing it against a number you give them, rather than telling them not to worry, and noise does not get a block of its own, or if it does, you can say why it earns space when noise mentions average 4.8 stars and rank fourth in pre sales chat.",
      "At least two figures in your rationale come from the materials (12.4cm, 31% of reviews, 36% of returns, 288 of 940 chats, £41 per return) and none are invented.",
      "Your rationale contains a sentence starting with words to the effect of \"I assumed\", and it names something the pack genuinely leaves open rather than something already answered in the Slack thread.",
      "You state what the secondary CTA does and tie that choice to the goal you picked, rather than leaving \"Learn more\" in place by default.",
      "No calorie claim appears anywhere in your copy, and the M3 low profile deck is not referenced or hinted at.",
      "You have filled in the AI use line, either naming where you used it or writing none, because the brief made it a condition and the follow-up call will test whether you can defend lines you did not write."
    ],
    "commonFailures": [
      "Making the 0.31% mobile last-click rate the headline diagnosis and rewriting the fit objection out of the page to chase it, when 78% of mobile sessions are cold paid prospecting and non paid mobile converts at close to 1%.",
      "Giving the companion app a block because three of the ten quotes mention it, when app tagging covers 4% of reviews and 4% of returns.",
      "Re-selling warranty, free returns and noise, the three things the current section already covers and that the reviews say are settled.",
      "Writing \"fits under most desks\" again in fresher words, so the page still answers whether the pad slides under the desk instead of whether you can work on it.",
      "Using the founder's calorie line because it is the loudest request in the thread, despite ops saying there is no substantiation.",
      "Ignoring the character limits, or asking for a new module, a calculator or a fit quiz that cannot be built before 4 September."
    ],
    "trackRefs": [
      3,
      6,
      7,
      8,
      13
    ],
    "starter": "AMBLER M2 REWRITE — CANDIDATE SUBMISSION\n\nName:\nTime started:            Time finished:\nAI use (where, if anywhere):\n\n1. HERO\nEyebrow (max 30):                          [   / 30]\nH1 (max 60):                               [   / 60]\nSubhead (max 140):                         [   / 140]\nPrimary CTA (max 18):                      [   / 18]\nSecondary CTA (max 18):                    [   / 18]\nTrust line (max 70):                       [   / 70]\n\n2. VARIANT H1\nH1-B (max 60):                             [   / 60]\nThe angle this tests that H1-A does not:\n\n3. OBJECTION SECTION\nSection heading (max 50):                  [   / 50]\n\nBlock 1 title (max 6 words):\nBlock 1 body (max 45 words):\n\nBlock 2 title (max 6 words):\nBlock 2 body (max 45 words):\n\nBlock 3 title (max 6 words):\nBlock 3 body (max 45 words):\n\n4. RATIONALE (150 to 200 words total)\nThe objection I targeted, and the evidence:\nWhat I assumed, and why:\nWhat I chose not to say:\nPrimary metric, read over what window, and the result that would tell me this failed:",
    "originalId": "sim-ambler-hero-objection-rewrite"
  },
  {
    "id": "sim-strategist",
    "role": "Content Strategist (B2B SaaS, mid-market finance)",
    "title": "Blog diagnosis and pillar plan: 90-minute written exercise",
    "company": "Sablefin, a spend management platform (corporate cards, expenses, approvals) sold to finance teams at 200 to 2,000 employee companies. 140 staff, Series B, £11m ARR, average deal £41,000 ACV.",
    "minutes": 90,
    "scenario": "You are interviewing for Content Strategist at Sablefin. The blog did 133,400 sessions in the last 90 days and is growing 14% quarter on quarter. The revenue dashboard the leadership team looks at every Monday shows blog-sourced pipeline of £0 for the same period. Elin Marchetti, our CMO, has read that as a volume problem and wants to go from 8 posts a month to 20. Before she signs that off, she wants a second opinion from the person we are about to hire.\n\nYou have 90 minutes and four attachments: the top 12 posts by sessions with conversion data, a round-up of what the sales team says buyers actually ask, Elin's note, and a page of operational context from our analyst. Everything you need is in those four documents. Nobody is available to answer questions in the next 90 minutes, which is deliberate: we want to see what you do when the brief is incomplete rather than what you do when someone hands you the missing piece.\n\nTwo things are genuinely unresolved and we are not going to resolve them for you. First, two attribution systems disagree about the blog by more than a million pounds, and we have no house position on which one is right. Second, we will not tell you whether the board's Q4 organic sessions target is movable, or whether the web team's six-week queue can be jumped for a single request. Pick a position on each, write the assumption down, and carry on. A submission that asks for clarification instead of assuming scores zero on the assumptions and measurement criterion.\n\nYou may use AI tools if you disclose it. Whatever you submit, you will spend 20 minutes defending in the next round: every number you cite, we will ask where it came from, and every recommendation, we will ask what it costs us. A polished page you cannot defend is worse than a rougher one you can.",
    "materials": [
      {
        "label": "Attachment A: Top 12 blog posts by sessions, 1 May to 31 July 2026",
        "kind": "table",
        "content": "Post | Dominant search intent | Sessions | Avg engaged time | Email signups | Demo requests | Sales-accepted opps | Influenced pipeline | First published | Last updated\nWhat is an expense accrual? (with examples) | Definition, students and bookkeepers | 21,400 | 1:10 | 96 | 2 | 0 | £0 | Mar 2023 | Jan 2026\nFree expense policy template (Google Docs) | Template download | 14,900 | 1:05 | 610 | 9 | 2 | £84,000 | Sep 2023 | Apr 2026\nPer diem rates 2026: full table | Reference lookup, seasonal | 12,200 | 0:55 | 41 | 1 | 0 | £0 | Jan 2024 | Jan 2026\nMileage reimbursement calculator | Tool, mostly employees | 9,800 | 1:30 | 120 | 1 | 0 | £0 | Jun 2024 | Feb 2026\nExpense fraud statistics 2026 | Stat citation, journalists and bloggers | 8,700 | 1:15 | 35 | 0 | 0 | £0 | Nov 2023 | Feb 2026\nEmployee expense report checklist | How-to, admin | 7,300 | 1:20 | 210 | 4 | 1 | £38,000 | Feb 2024 | Mar 2026\nThe future of finance teams in the age of AI | Thought leadership, LinkedIn traffic | 6,300 | 1:45 | 30 | 0 | 0 | £0 | Feb 2026 | never\nHow to close the books in 5 days | How-to, controllers | 5,400 | 3:30 | 140 | 3 | 1 | £46,000 | Aug 2024 | May 2026\n10 best expense management software in 2026 | Comparison shopping | 4,600 | 3:05 | 74 | 12 | 4 | £188,000 | Oct 2025 | Jun 2026\nHow to reconcile corporate card spend in NetSuite | Problem-aware, finance ops | 2,100 | 4:20 | 88 | 11 | 5 | £310,000 | Jan 2025 | Jun 2026\nSablefin vs Expensify: an honest comparison | Vendor evaluation | 1,150 | 5:10 | 22 | 8 | 4 | £242,000 | Mar 2025 | Jul 2026\nMulti-entity expense approvals: a workflow guide | Problem-aware, group finance | 890 | 6:05 | 19 | 7 | 3 | £201,000 | Jun 2026 | never\nTOTALS (top 12) | | 94,740 | | 1,485 | 58 | 20 | £1,109,000 | |\nBLOG-WIDE (247 live posts) | | 133,400 | | 2,090 | 71 | 24 | £1,241,000 | |\nNote: blog-wide closed-won revenue traced to any of these posts in the window is £96,000, from one deal on a three-year contract. Previous quarter blog-wide demo requests were 69."
      },
      {
        "label": "Attachment B: What buyers ask us, sales round-up (compiled by Rebecca Lund, Head of Sales, 4 August 2026)",
        "kind": "quotes",
        "content": "\"Every single NetSuite account asks the same thing in call two: what happens to the card feed and who does the reconciliation at month end. I send them the NetSuite post every time. It is the only thing we have that answers it.\" — Marta Kohler, Senior AE\n\n\"Group structures kill us. Three entities, two currencies, a controller in each one, and nobody can tell me whose approval comes first. We have one guide on it and it is five weeks old.\" — Ify Adeyemi, Solutions Consultant\n\n\"The buyer is sold by call three. Then they go quiet for six weeks because they have to get it past the FD and they have nothing to take into that meeting. I end up writing the business case for them in an email at 9pm.\" — Marta Kohler, Senior AE\n\n\"Honestly the market has moved on. Everyone I speak to wants to know about AI agents doing the coding and the approvals. And we badly need a Brex comparison, I lost one on that last month.\" — Dominic Sears, AE\n\n\"Pricing. Always pricing. First question on 80% of my discovery calls. We should just publish the pricing and stop wasting everyone's time.\" — Hana Mistry, SDR\n\n\"How long does implementation actually take and who moves the historic data. If I say twelve weeks they flinch, if I say six they do not believe me. There is nothing written down that I can send.\" — Tom Brackley, SDR Lead\n\n\"Security questionnaire arrives at week four like clockwork. SOC 2, data residency, who can see card numbers. We answer it from scratch every time.\" — Ify Adeyemi, Solutions Consultant\n\n\"The ones who read us before they book are a different conversation. They already know they have a multi-entity problem. The ones who come off a template download need three calls to work out what they even want.\" — Jordan Osei, Customer Success Lead"
      },
      {
        "label": "Attachment C: Note from Elin Marchetti, CMO",
        "kind": "email",
        "content": "From: Elin Marchetti\nTo: Content candidate\nSubject: What I want out of the 90 minutes\n\nContext, quickly.\n\nThe blog converts at 0.05%. I am counting demo requests over sessions, 71 on 133,400. The benchmark I keep seeing quoted for B2B SaaS is 2%. That is a 40x gap and it is embarrassing, and the honest reading is that we simply do not have enough at-bats. Klarity publishes 30 posts a month. We publish 8. They outrank us on everything that matters.\n\nSo my proposal to the board is 20 posts a month from October. The freelance contract is already signed and runs to June 2027, so the money is spent either way.\n\nI want three content pillars and a stop list from you. Two things before you write it.\n\nOne, the AI series is mine. \"The future of finance teams in the age of AI\" got 340 reshares and two inbound speaking invitations and I am not interested in an argument about whether it converts. It is brand, not pipeline, and I will defend it in the room.\n\nTwo, I do not want to hear that the answer is to publish less. I have an organic sessions target of 200,000 for Q4 that is on the board pack with my name against it. If your plan makes that number harder, tell me exactly how much harder and what I say instead.\n\nOne page. I read the first paragraph properly and skim the rest, so put the answer at the top.\n\nElin"
      },
      {
        "label": "Attachment D: Operational context (Sam Oduya, Marketing Analyst)",
        "kind": "data",
        "content": "ATTRIBUTION, THE SHORT VERSION\nThe Monday dashboard uses last non-direct click at the moment the deal record is created. The demo form lives on /demo, and returning visitors almost always arrive via branded search or direct, so the blog is stripped out at the last step. That dashboard shows blog-sourced pipeline of £0 for the quarter.\nA separate multi-touch export, which I pull by hand and nobody reviews, credits any blog page viewed in the 90 days before deal creation. That export shows £1,241,000 influenced across 24 sales-accepted opportunities.\nAverage deal £41,000 ACV. Average sales cycle 94 days. Both numbers come from the same CRM.\n\nCONVERSION PATHS\nEvery blog post carries the same footer banner: \"Book a demo\". There are no in-post CTAs and no post-specific offers except the two template downloads. Template and CTA changes go through the shared web team, whose queue is currently 6 weeks.\n\nEMAIL\n2,090 blog signups in the window. All go into one monthly newsletter. 18% open, 1.1% click, no segmentation, no product path, no handoff to sales.\n\nLINKS\n\"Expense fraud statistics 2026\" holds 61 referring domains, more than any other page on the site. The NetSuite post (9 referring domains) and the Expensify comparison (4) both sit two internal links away from it.\n\nCOMPETITORS NAMED IN CRM, LAST 62 COMPETITIVE DEALS\nExpensify 29, Payhawk 14, Sage-native workflow 11, Brex 3, Klarity 0, other 5.\n\nPRODUCTION\n8 posts a month. 6 per quarter written in-house by Priya Raman. 18 per quarter from three freelancers at £500 each, £9,000 a quarter, contract to 30 June 2027.\n\nTREND\nBlog sessions up 14% quarter on quarter. Branded search up 3%. Demo requests 71 this quarter against 69 last.\nQ4 on the board pack is October to December 2026. The window above is our most recent complete 90 days.\n\nTOP SITE-SEARCH QUERIES INSIDE THE BLOG\nnetsuite (412), pricing (388), multi entity (301), implementation (244), sso (162), sage intacct (150)"
      }
    ],
    "deliverable": "One memo of 600 to 800 words of prose, excluding table cells, plus two tables, submitted as a single document, in five parts. (1) Diagnosis, maximum 350 words, three or four findings, each carrying at least one number taken from the attachments. (2) Three pillars as a table with five columns: pillar, the buyer and the moment it serves, the evidence from Attachment A or B that demand already exists, what belongs in it and what does not, and one success metric that is not sessions. (3) A stop list of at least five items, each with a disposition (stop, refresh, consolidate, redirect, or keep but do not extend) and one line naming what that disposition costs Sablefin. (4) A reply to Elin, maximum 120 words, containing a specific number of posts per month and what the £9,000 a quarter is spent on instead. (5) An assumptions box, minimum two and maximum five, at least one covering attribution.",
    "rubric": [
      {
        "criterion": "Diagnosis reads the data rather than the dashboard",
        "weight": 25,
        "meets": "Identifies that traffic and pipeline live in different posts. Cites the concentration (four posts, NetSuite reconciliation, the software listicle, the Expensify comparison and the multi-entity guide, carry £941,000 of the £1,109,000 influenced pipeline in the top 12, 85%, or 76% of the blog-wide £1,241,000, on 8,740 sessions) and the dead weight (the five posts in the top 12 with zero influenced pipeline account for 58,400 sessions, 44% of all blog sessions, and produce 4 of 71 demo requests and no sales-accepted opportunities). Rejects volume as the cause with evidence rather than assertion, for example that sessions grew 14% quarter on quarter while demo requests grew from 69 to 71, 2.9%. Graders accept either denominator for the concentration figure: 85% of the top-12 £1,109,000 or 76% of the blog-wide £1,241,000.",
        "exceeds": "Separates the measurement artefact from the real problem and sizes both: the £0 figure is an artefact of last non-direct click, and even on the generous multi-touch number the mix is wrong. Also flags that £1,241,000 influenced is not revenue, only £96,000 has closed, and treats Elin's 0.05% against 2% comparison as two different metrics rather than a gap."
      },
      {
        "criterion": "Pillars are built from demand evidence, not topic taxonomy",
        "weight": 25,
        "meets": "Three pillars, each traceable to a question sales actually reports and to at least one existing post that already converts. No pillar rests on the AI thought-leadership post or the Brex request.",
        "exceeds": "Covers the six-week silence after call three that Marta describes, which no current post addresses, and names the artefact that fills it. Sequences the pillars by which one the sales team can use first. Takes an explicit position on pricing (388 site searches, first question on 80% of discovery calls) rather than either ignoring it or promising a decision that is not the content strategist's to make."
      },
      {
        "criterion": "Stop list has dispositions and stated costs",
        "weight": 20,
        "meets": "Five or more items, a disposition per item, a cost per item, and it keeps the expense policy template despite the 1:05 engaged time.",
        "exceeds": "Handles the fraud statistics post as a link asset rather than a conversion asset and says what happens to the internal links if it goes, sequences consolidations and redirects so nothing breaks mid-quarter, and stops at least one thing that is genuinely popular."
      },
      {
        "criterion": "Handling the CMO, the contract and the board target",
        "weight": 15,
        "meets": "Gives one specific monthly number, repoints the £9,000 rather than pretending it can be cancelled, and does not simply tell Elin to publish less.",
        "exceeds": "Shows how the Q4 sessions target can still be defended while the mix shifts, or quantifies the sessions cost of the plan and hands Elin the sentence she says in the board room instead, or shows that the 200,000 target is roughly 27,000 sessions above the current growth trend before any post is stopped, and hands Elin that sentence for the board. Deals with the protected AI series without either capitulating to it or attacking it."
      },
      {
        "criterion": "Assumptions, measurement and defensibility",
        "weight": 15,
        "meets": "Two or more assumptions written down, at least one on attribution, and a per-pillar metric that is not sessions.",
        "exceeds": "Proposes a cheap way to settle the attribution disagreement inside one quarter rather than choosing a side permanently, sets a leading indicator with a review date, and marks at least one recommendation as low confidence with the reason."
      }
    ],
    "strongResponse": [
      "Names both causes and keeps them separate: the £0 is produced by last non-direct click attribution, and the real problem is that the five zero-pipeline posts in the top 12 (accrual definition, per diem, mileage calculator, fraud statistics, AI thought leadership) carry 58,400 sessions, 44% of the blog, and return 4 demo requests, zero sales-accepted opportunities and £0. Cites the concentration explicitly and names the posts: NetSuite reconciliation, the software listicle, the Expensify comparison and the multi-entity guide carry £941,000 of the £1,109,000 influenced pipeline in the top 12, on 8,740 sessions.",
      "Rebuilds Elin's comparison rather than accepting it. The 2% figure she quotes is a visitor-to-lead rate; the blog's visitor-to-lead rate is 1.57% (2,090 signups on 133,400 sessions), close to it. The 0.05% is a demo-request rate. The blog is not failing to convert, it is converting the wrong readers into an unsegmented monthly newsletter with 1.1% click and no handoff to sales.",
      "Prices the board target. At the current 14% quarter on quarter the blog lands near 152,000 next quarter and 173,000 the quarter after, against a 200,000 Q4 target. The target already needed above-trend growth before any stop list, and the candidate says so with the figure rather than absorbing the gap silently.",
      "Keeps the expense policy template post and says why in numbers (610 signups, 9 demo requests, £84,000) instead of cutting it because engaged time is 1:05.",
      "The stop list has at least five rows, each with a disposition and a cost, and at least one row costs something the reader will notice losing. The fraud statistics post gets a disposition other than delete, or is deleted while naming the loss of 61 referring domains and what happens to the internal links into the NetSuite and Expensify pages.",
      "Every pillar maps to a specific line in Attachment B and to a post in Attachment A that already converts. Nothing in the pillars comes from the AI series or from a Brex comparison, and if Brex is mentioned at all it is with the 3-in-62 figure attached.",
      "The reply to Elin contains one number of posts per month and one sentence on what the £9,000 buys instead, and it prices Elin's own proposal: 20 posts a month is 60 a quarter against 24 today; the 36 extra posts at the current £500 freelance rate cost roughly £18,000 a quarter, triple the committed spend, and no attachment shows where that comes from.",
      "At least two assumptions are written down, one about which attribution number is being used and why, and each pillar has a metric that is not sessions."
    ],
    "commonFailures": [
      "Answering the volume question with more volume: better keywords, a refreshed calendar, a topic cluster map, and nothing removed.",
      "Cutting the template and checklist posts because engaged time is around one minute, which removes 820 of the 1,485 email signups and the largest pipeline contributor outside the four evaluation posts at £84,000.",
      "Reporting £1,241,000 as if the blog had produced revenue, when £96,000 has closed and the cycle is 94 days.",
      "Building a pillar on the wrong signal: the AI series because the CMO protects it, or Brex because one AE was loud, when Brex appears in 3 of 62 competitive deals and Expensify in 29. Or building a pricing pillar that assumes Sablefin will publish its price list, when that is a commercial decision no attachment authorises. The defensible move on pricing is content that answers what drives the price, not the number.",
      "Proposing work the constraints forbid: a CTA redesign that depends on the shared web team's six-week queue inside a plan that has to show something sooner, or cancelling a contract that runs to June 2027.",
      "Writing a clean page with no assumption stated, so the first follow-up question about which attribution number was used has no answer behind it."
    ],
    "trackRefs": [
      2,
      3,
      9,
      13,
      18
    ],
    "starter": "MEMO: WHY THE BLOG DOES NOT PRODUCE PIPELINE\nTo: Elin Marchetti, CMO\nFrom:\nDate:\nWord count:            Assumptions stated:\n\n1. DIAGNOSIS (max 350 words, three or four findings, each with a number)\n\nFinding 1.\n\nFinding 2.\n\nFinding 3.\n\nFinding 4 (optional).\n\n2. THREE PILLARS\n\n| Pillar | Buyer and moment it serves | Evidence demand exists (cite A or B) | What belongs / what does not | Success metric (not sessions) |\n| Pillar 1 | | | | |\n| Pillar 2 | | | | |\n| Pillar 3 | | | | |\n\n3. STOP LIST (minimum five rows)\n\n| Item | Disposition (stop / refresh / consolidate / redirect / keep, do not extend) | What this costs us |\n| | | |\n| | | |\n| | | |\n| | | |\n| | | |\n\n4. REPLY TO ELIN (max 120 words)\n\nPosts per month I am proposing:\nWhat the £9,000 a quarter buys instead:\nEffect on the Q4 sessions target:\nWhat I need from you:\n\n5. ASSUMPTIONS (two to five, at least one on attribution)\n\nA1.\nA2.",
    "originalId": "sim-blog-pipeline-diagnosis"
  },
  {
    "id": "sim-seo",
    "role": "Content SEO / Discovery Manager (intermediate to senior)",
    "title": "Answer-engine retrofit: the cycle counting guide",
    "company": "Bincount: warehouse inventory-accuracy software (cycle counting app plus WMS connectors) sold to 3PLs and mid-market retailers, 48 staff, Series A, UK and US.",
    "minutes": 60,
    "scenario": "Thanks for making the time. This is a 60 minute exercise and we mean 60 minutes. If you run out of road, tell us what you would have done next and why that order, rather than half-finishing everything.\n\nContext. Today is Monday 17 August 2026. Our cycle counting guide is the highest-impression page on the site and it is going backwards. Over the last 28 days impressions are up 38% on the previous period and clicks are down 12%. Sales say roughly half of discovery calls now open with a prospect quoting a number they got from an AI assistant, and twice last month the number came from a competitor. We want you to retrofit that one existing page so a search engine or an answer engine can lift a clean, correct answer out of it and, ideally, attribute it to us. We also want to know how you would tell whether it worked, given we have no new tooling budget this quarter.\n\nTwo things constrain you. First, the dev team is mid-migration to a new headless CMS. Nobody can add JSON-LD, change page templates, or edit the title tag and H1 until that finishes, and Tomas is quoting six weeks. You can edit the body copy through the CMS today and ship this week. Second, our house rule caps a guide at 1,600 words. The page is at 1,430. Assume the four answer blocks and the new headings are additions on top of the sections you keep, so you will be over 1,600 unless you cut. Show your net word count.\n\nPriya (demand gen) and Sam (VP marketing) have both sent notes, and their asks are in the pack along with the sales and support material. Some of it is worth doing and some of it is not. Use your judgement and say which is which. You may use AI tools if you note where. We will ask you to walk us through your reasoning in the next round, so do not submit anything you cannot defend line by line.",
    "materials": [
      {
        "label": "Current page copy (abridged), bincount.com/resources/cycle-counting-guide",
        "kind": "copy",
        "content": "URL: bincount.com/resources/cycle-counting-guide (locked, no redirects during migration)\nTitle tag: Cycle Counting Guide | Bincount (locked for six weeks)\nMeta description: Bincount helps warehouse teams get inventory accuracy right. Read our guide. (locked)\nPublished 12 Mar 2024. Last substantive update 3 Nov 2025. 1,430 words. No structured data on the page.\n\n[H1] The Bincount Guide to Inventory Accuracy  (locked for six weeks)\n\n[Intro, 180 words]\n\"Inventory accuracy is the foundation everything else in the warehouse rests on. Picking, replenishment, promising a delivery date to a customer: all of it assumes the number in the system matches the number on the shelf. In our experience working with operations leaders across 3PL, retail and light manufacturing, that assumption is the one that quietly breaks first.\n\nWe have spent four years building tools for teams who count. In that time we have seen every version of the same conversation. Someone in finance wants a wall-to-wall count. Someone in operations does not want to close the site. Nobody agrees on what accurate means.\n\nThis guide sets out how we think about the problem and what we have learned from the warehouses we work with.\"\n\n[H2] Why It Matters  (210 words)\nOpens: \"Getting this wrong is expensive.\" Third paragraph carries the only benchmark on the page: \"Teams we work with typically sit between 92% and 96% location-level accuracy before they change anything, and most set 98% as the operating target for A-class SKUs.\"\n\n[H2] The Old Way  (240 words)\nParagraph 2, sentence 4: \"...so rather than shutting the site for a weekend twice a year, most teams now count a small slice of locations every shift, usually 0.5% to 2% of active SKUs, and clear the variances before the next wave. That is what cycle counting means in practice. (Most sites we work with run two shifts, five days a week.)\"\nParagraph 3, in passing: \"You do not need to stop picking. Blind counts on locations that are not inside an open pick task will not slow the floor, provided your WMS can lock a bin for about ninety seconds.\"\n\n[H2] Our Point of View  (260 words)\nExplains ABC segmentation: \"We favour ABC segmentation. Count A items monthly, B items quarterly, C items twice a year.\" Then: \"There is a case for hit-rate based counting instead, and we have used it with some clients.\" No mention of auditors or annual physical counts anywhere on the page.\n\n[H2] The Bincount Difference  (200 words)\nProduct-led. Mentions the free tool once, without a descriptive link: \"our calculator can help.\" (Tool lives at bincount.com/tools/count-sample-size.)\n\n[H2] Common Pitfalls  (190 words)\nFive one-line bullets, no explanation under any of them.\n\n[H2] Getting Started  (150 words)\n\"As a rule of thumb we suggest starting by counting 5% of your SKUs each week and tightening from there.\"\n\n[CTA] Book a demo with our team."
      },
      {
        "label": "Search Console, last 28 days, page = /resources/cycle-counting-guide",
        "kind": "table",
        "content": "Page totals: 109,810 impressions | 987 clicks | 0.90% CTR | avg position 11.4. Twelve queries listed; Dami has already netted off the anonymised remainder, so the rows below sum to the page total.\nVersus previous 28 days: impressions +38%, clicks -12%, average position 11.9 to 11.4\n\n| Query | Impressions | Clicks | CTR | Avg position |\n| inventory accuracy formula | 41,200 | 121 | 0.29% | 26.4 |\n| cycle counting | 18,400 | 96 | 0.52% | 8.9 |\n| warehouse inventory software | 12,500 | 18 | 0.14% | 31.8 |\n| what is cycle counting | 9,860 | 148 | 1.50% | 4.2 |\n| cycle counting vs physical inventory | 6,310 | 210 | 3.33% | 3.1 |\n| cycle counting best practices | 5,220 | 74 | 1.42% | 7.4 |\n| how often should you cycle count | 4,740 | 33 | 0.70% | 5.6 |\n| abc analysis cycle counting | 3,980 | 61 | 1.53% | 6.8 |\n| what is a good inventory accuracy percentage | 3,120 | 22 | 0.71% | 4.9 |\n| cycle count sample size calculator | 2,650 | 14 | 0.53% | 11.7 |\n| do you have to stop picking to cycle count | 1,190 | 47 | 3.95% | 2.4 |\n| bincount pricing | 640 | 143 | 22.34% | 1.2 |\n\nAnalytics note from Dami (data): Search Console does not separate impressions inside an AI summary from ordinary blue-link impressions, so treat the impression rise as directional only."
      },
      {
        "label": "Demand evidence pack (buyer questions, assistant referrals, overlapping pages)",
        "kind": "data",
        "content": "A. Questions asked, from 40 recorded discovery calls (Jun to Aug 2026) and 612 support tickets in the same window\n\n| Question as asked | Calls (of 40) | Support tickets | Answered on the current page? |\n| How often should we count? | 31 | 44 | Partly, two different figures |\n| What percentage can we count without adding headcount? | 24 | 31 | Partly |\n| Do we have to stop picking or close the site? | 22 | 12 | Yes, buried in paragraph 3 of The Old Way |\n| What accuracy percentage should we be aiming for? | 19 | 8 | Yes, buried in Why It Matters |\n| How do we choose which SKUs to count first? | 17 | 9 | Yes, under Our Point of View |\n| Does cycle counting replace the annual physical count for our auditors? | 16 | 27 | No, not mentioned anywhere |\n| How long before accuracy improves? | 11 | 6 | No |\n| How many counters do we need? | 9 | 14 | No |\n| What is your ISO 27001 position? | 1 | 0 | No |\n\nB. Assistant referral sessions to this page, same 28 days (analytics referrer)\nchatgpt.com 141 sessions, 6 demo requests\nperplexity.ai 47 sessions, 2 demo requests\ngemini.google.com 19 sessions, 1 demo request\ncopilot.microsoft.com 7 sessions, 0 demo requests\nTotal 214 sessions, 9 demo requests (4.2%)\nOrganic search to the same page: 987 sessions, 11 demo requests (1.1%)\nDami's caveat: referrer is missing or stripped on roughly a third of assistant traffic, so 214 is a floor, not a count.\n\nC. Other pages ranking for the same queries\n/features/cycle-counting: avg position 9.4 for \"cycle counting\", 12.6 for \"cycle counting vs physical inventory\". 88 clicks in 28 days. Used in sales decks.\n/blog/abc-analysis-warehouse: avg position 5.1 for \"abc analysis cycle counting\". 380 clicks in 28 days.\n/tools/count-sample-size: avg position 14.2 for \"cycle count sample size calculator\". 61 clicks. The page is the widget only, no surrounding text, no headings."
      },
      {
        "label": "Verbatim, sales and support",
        "kind": "quotes",
        "content": "\"Before we go any further I need your ISO 27001 statement and your data residency policy.\" (Prospect, national grocery 3PL, one of 40 calls, £180k ARR if it lands. Priya has quoted this line in three separate meetings.)\n\n\"I googled how often should you count and got five different answers, all of them from software companies, all of them different.\" (Operations manager, mid-market retailer, closed won)\n\n\"Your guide says 0.5 to 2 percent a shift and then says 5 percent a week. Which one is it? My finance director has read both.\" (Support ticket 4471)\n\n\"Half my discovery calls now open with someone quoting a number an assistant gave them. Twice last month it was a competitor's number and I had to spend ten minutes unpicking it.\" (Marcus, sales engineer)\n\n\"Our auditors want to know whether the annual count still has to happen. I could not find that anywhere on your site so I asked an assistant and it told me it depends.\" (Prospect, food distribution)"
      },
      {
        "label": "Internal notes from Priya (demand gen) and Sam (VP marketing)",
        "kind": "email",
        "content": "From: Priya Nadkarni, Head of Demand Generation\nSubject: cycle counting page, my list\n\nFour things I want on this page.\n\n1. FAQ schema. Countwise have it on every guide and they are the ones getting quoted in AI answers. This is the whole reason we are losing.\n2. Put Bincount in every H2. \"How Bincount recommends counting\", that sort of thing. If the assistant is summarising the section it should have to say our name.\n3. Gate the sample-size calculator. It gets a bit of traffic and we get nothing from it. A form in front of it would give us maybe 40 MQLs a month.\n4. Add a comparison table against Countwise. Sales have been asking for one since March.\n\nOn timing, Tomas says no template changes and no JSON-LD until the headless migration is done, six weeks. Body copy through the CMS is fine, so we can ship text this week.\n\n---\n\nFrom: Sam Okonjo, VP Marketing\nSubject: re: cycle counting page\n\nTwo rules for whoever picks this up. Guides stay under 1,600 words, no exceptions, and that rule exists because our long guides stopped getting read. Title tag and H1 changes need brand review, which is a two week queue, so assume they are frozen.\n\nAlso, do not touch /features/cycle-counting without telling me first. Sales use it in decks and I do not want it changing under them mid-quarter.\n\nPriya's list is her list, not a brief. Push back where you disagree, that is what we are hiring for."
      }
    ],
    "deliverable": "One document in five parts. 700 to 900 words of your own analysis, excluding the rewritten headings and the four answer blocks, which are page copy and are counted separately against the 1,600 word page cap.\n\n1. Assumption note, 80 words maximum: the single constraint or ambiguity you are resolving, what you assume, and what you would change if the assumption turns out to be wrong.\n\n2. Page skeleton: 9 to 12 headings in final wording, in the order they appear, H1 excluded because it is frozen. Mark exactly four as PRIORITY and write the full answer block underneath each of those four, 40 to 70 words of final copy, not a description of what the copy would say. For the remaining headings, one line each on what sits underneath.\n\n3. Cut list: 3 to 5 specific things you remove or move from the current page to stay inside the 1,600 word cap, each with the word count you think it frees and a one-line reason. End the cut list with a single line: words added, words cut, net total. It must come in under 1,600.\n\n4. Stakeholder table: each of Priya's four requests, plus the ISO 27001 and data residency ask from the £180k call, marked do, reshape or decline, with a one-line reason each.\n\n5. Measurement: a table of 5 metrics (metric, source, baseline from the pack where one exists, first read date, what it tells you), plus one leading indicator you would check weekly, one metric you would refuse to use with the reason, and a decision rule stating what result at 8 weeks would make you roll this pattern out to the other guides, hold, or revert.\n\nPlain text or a doc, no deck. Note anywhere you used an AI tool.",
    "rubric": [
      {
        "criterion": "Extractability of the rewritten answers",
        "weight": 25,
        "meets": "Headings are written as the buyer's question or a direct claim rather than labels. Each of the four written answer blocks opens with a sentence that still makes sense if it is lifted out of the page on its own, and carries a specific number or named condition drawn from the materials. The 0.5 to 2 percent per shift and 5 percent per week figures do not both survive: they are either reconciled in one sentence or reduced to a single figure, with the other removed.",
        "exceeds": "Also controls the shape: the answer lands in the first 40 words and the qualifier follows, one claim per block, no brand throat-clearing before the answer, and at least one block written so it survives being quoted without the surrounding page while the source of the claim stays obvious."
      },
      {
        "criterion": "Question selection and prioritisation",
        "weight": 20,
        "meets": "Headings are drawn from the demand pack and the query table rather than invented, and cover the four or five highest-demand questions the page currently buries.",
        "exceeds": "Spots the auditor question (16 of 40 calls, 27 tickets, absent from the page entirely) and prioritises by demand multiplied by current gap rather than by raw volume."
      },
      {
        "criterion": "Reading the data correctly",
        "weight": 20,
        "meets": "Targets the queries sitting at positions 2 to 6 with weak CTR as the ones this retrofit can move, and does not present the 41,200 impression query at position 26.4 as the headline problem.",
        "exceeds": "Names the impressions up 38 percent with clicks down 12 percent pattern as consistent with answers being summarised above the link rather than as proof the copy failed, and uses the 4.2 percent versus 1.1 percent conversion gap between assistant referrals and organic clicks to argue the value of the work in demand terms. Notes that bincount pricing supplies 143 of 987 clicks at 22.34 percent CTR, so the page's 0.90 percent headline CTR is flattered by branded traffic, and excludes it from the baseline used to judge the retrofit."
      },
      {
        "criterion": "Measurement plan and decision rule",
        "weight": 20,
        "meets": "Five metrics with named sources, baselines taken from the pack where they exist, a first read date, at least one proxy for citation that needs no new tooling budget, and a decision rule with a number and a date attached.",
        "exceeds": "States what the measurement cannot see (missing referrers on about a third of assistant traffic, no impression split inside AI summaries, the six week schema delay confounding a clean before and after) and designs around it, for example a fixed prompt set checked on a schedule or unretrofitted guides held back as a control."
      },
      {
        "criterion": "Constraint handling and stakeholder judgement",
        "weight": 15,
        "meets": "Names the JSON-LD and title tag freeze explicitly, works inside body copy only, respects the 1,600 word cap with real cuts, and declines or reshapes at least one of Priya's requests with a reason.",
        "exceeds": "Writes headings so schema can be applied in six weeks without another rewrite, and is not penalised for declining FAQ markup as a route to a visible rich result provided the reason is given and the extraction argument for it is kept. Surfaces the overlap with /features/cycle-counting as a decision needing Sam's sign-off with a recommendation attached, and states plainly what is out of scope this week and what it would cost to do it later. Tests Priya's 40 MQLs a month against the 61 clicks that page takes in 28 days and names the implied form-fill rate as the reason to decline, rather than declining on principle."
      }
    ],
    "strongResponse": [
      "The assumption note names the JSON-LD freeze or the /features/cycle-counting overlap specifically, not ambiguity in general, and says what would change if the assumption is wrong.",
      "Every heading in the skeleton is a question or a direct claim, and none of them contains the word Bincount.",
      "Each of the four PRIORITY answer blocks opens with a sentence that answers the heading on its own, before any qualifier, and contains at least one number or condition traceable to the materials.",
      "The response treats the 41,200 impression query at position 26.4 as a ranking problem outside this retrofit, and names at least two queries between positions 2 and 6 as the actual targets.",
      "The 0.5 to 2 percent per shift and 5 percent per week figures are either reconciled in one sentence, using the two shifts over five days detail, or reduced to a single figure with the other removed from the page.",
      "A heading covers the auditor question, which appears in 16 of 40 calls and 27 tickets and is absent from the current page.",
      "At least one of Priya's four requests is declined or reshaped, with the reason tied to extraction or measurement rather than to taste.",
      "The cut list ends with words added, words cut and a net total under 1,600, and the measurement section ends with a decision rule carrying both a number and a date."
    ],
    "commonFailures": [
      "Rewriting the page as a new article rather than retrofitting the existing one, or adding words without cutting any, which breaks the 1,600 word cap and the ship-this-week constraint in one move and leaves the overlap with /features/cycle-counting untouched.",
      "Leading the response with the 41,200 impression query because it is the biggest number in the table, when position 26.4 makes it a ranking problem this retrofit cannot touch.",
      "Turning headings into questions but leaving the answer starting with \"At Bincount we believe\" or \"In our experience\", so the first extractable sentence still says nothing.",
      "Submitting a measurement plan that is a list of tools (schema validator, rank tracker, log file analysis) rather than metrics with baselines, a first read date and a decision point.",
      "Accepting Priya's list wholesale, including gating the sample-size calculator, which removes the one asset most likely to be cited and linked and rests on an MQL number the page's 61 clicks cannot support.",
      "Spending a heading on ISO 27001 or data residency because the deal is worth £180k and Priya has raised it three times, when the demand pack shows 1 of 40 calls and 0 of 612 tickets, and a security page is the right home for it anyway."
    ],
    "trackRefs": [
      9,
      10,
      14,
      13,
      7
    ],
    "starter": "ANSWER-ENGINE RETROFIT: /resources/cycle-counting-guide\n\n1. ASSUMPTION NOTE (80 words max)\n   Constraint or ambiguity I am resolving:\n   What I assume:\n   What changes if I am wrong:\n\n2. PAGE SKELETON (9-12 headings, final wording, in order)\n   H1 (frozen, do not rewrite): The Bincount Guide to Inventory Accuracy\n\n   H2 1.\n      [ ] PRIORITY   under it:\n   H2 2.\n      [ ] PRIORITY   under it:\n   H2 3.\n      [ ] PRIORITY   under it:\n   H2 4.\n      [ ] PRIORITY   under it:\n   H2 5.\n      [ ] PRIORITY   under it:\n   H2 6.\n      [ ] PRIORITY   under it:\n   H2 7.\n      [ ] PRIORITY   under it:\n   H2 8.\n      [ ] PRIORITY   under it:\n   H2 9.\n      [ ] PRIORITY   under it:\n   (add up to three more)\n\n   ANSWER BLOCKS (four only, 40-70 words each, final copy)\n   Heading:\n   Block:\n\n   Heading:\n   Block:\n\n   Heading:\n   Block:\n\n   Heading:\n   Block:\n\n3. CUT LIST (3-5 items, current page is 1,430 of 1,600 words)\n   | Remove or move | Where it goes | Words freed | Why |\n\n   Words added: ___  |  Words cut: ___  |  Net total: ___  (must come in under 1,600)\n\n4. STAKEHOLDER REQUESTS\n   | Request | Do / reshape / decline | Reason (one line) |\n   | FAQ schema on every guide | | |\n   | Bincount in every H2 | | |\n   | Gate the sample-size calculator | | |\n   | Countwise comparison table | | |\n   | ISO 27001 and data residency (Priya's £180k call) | | |\n\n5. MEASUREMENT\n   | Metric | Source | Baseline from the pack | First read | What it tells me |\n\n   Leading indicator I check weekly:\n   Metric I refuse to use, and why:\n   Decision rule at 8 weeks (roll out / hold / revert), with the number:\n\nAI USE\n   Where I used a tool, and for what:",
    "originalId": "sim-aeo-page-retrofit"
  },
  {
    "id": "sim-pmm",
    "role": "Product Marketing Manager, mid-market B2B SaaS",
    "title": "Policy Guard launch: GTM brief, battle card and the tier call",
    "company": "Tessera, a contract lifecycle management platform sold to mid-market legal and procurement teams; 310 staff, Series C, roughly $46M ARR across three product lines, of which the Contracting Platform line is about $36M; 1,140 customers on two tiers (Enterprise and Growth).",
    "minutes": 60,
    "scenario": "You are the PMM for our Contracting Platform line. Today is Monday 14 September 2026. Policy Guard, our clause policy engine, is a GA candidate for 12 October. I need a one-page GTM brief and a one-page sales battle card from you, and the brief has to open with a launch tier decision that you own.\n\nOur tier ladder, for reference. Tier 1 is a company moment: press and analyst briefings, paid campaign, exec keynote slot, a full field enablement day, six weeks of lead time, and one slot per quarter. Q4's Tier 1 slot is currently held by the renewals pricing change that goes out on 6 October. Tier 2 is a segment launch: in-app announcement, lifecycle email to a qualified segment, blog, battle card plus a 30-minute enablement call, customer webinar optional, three weeks of lead time. Tier 3 is a release note: changelog, in-app tooltip, CSM talking point.\n\nTwo things are genuinely unresolved and I am not going to resolve them for you. First, Finance will not decide until 26 October, two weeks after GA, whether Policy Guard is included in Enterprise or sold as a per-seat add-on. You still have to write the brief. Second, our CRO has strong views about how this should launch and has put them in writing. Read her note as an input, not an instruction. You have the product manager's epic in its original engineering language, three competitor claims captured from their sites last week, two quotes from AEs about why deals stall, the launch roster from the Q4 calendar, and the numbers we have. Nobody has cleaned any of it up for you.\n\nGround rules. Sixty minutes, and ruthless editing is part of what we are scoring, so a long answer is a worse answer. AI tools are allowed if you say so at the top. In the follow-up call we will ask you to defend every number you cite and every claim you put on the battle card, so do not write anything you cannot source back to the materials.",
    "materials": [
      {
        "label": "TESS-4471 epic, written by the product manager (verbatim from the tracker)",
        "kind": "tickets",
        "content": "TESS-4471 | Epic: Policy Guard (PGE v1) | Owner: M. Okonkwo, PM Contracting Platform | Target build 4.19 | GA candidate 12 Oct 2026 | Status: code complete, in hardening\n\nSummary: Deterministic policy evaluation over the clause AST emitted by the ingest parser. Policies are authored as rule sets inside the Playbook Library module (PLB) and compiled to an immutable, versioned ruleset. On every redline save, and again as a pre-signature validation hook, the engine walks the AST and returns one of three verdicts per clause: allow, allow-with-fallback (approved fallback text injected inline), or block.\n\nScope in v1:\n- Self-serve rule authoring UI. No code, no services engagement, no CSV import. Legal ops builds rules directly.\n- Immutable evaluation log per document version: actor, ruleset version, verdict, timestamp. Exposed at /v2/policy/evaluations. Retention 7 years.\n- Webhook fan-out to Slack and Teams on block verdicts.\n- p95 evaluation latency 380ms at 250 clauses; p99 910ms.\n- Requires PLB module. Requires a user holding the policy.author role. NOTE: provisioning defect PLAT-2210 meant policy.author was not auto-granted to workspace admins on PLB-enabled accounts. Fixed in 4.19.\n- Region: the evaluation service runs in us-east-1 only at GA. eu-central-1 rollout is scoped for build 4.22, no earlier than mid-January 2027. EU-resident customers can use the feature at GA, but clause text transits the US region during evaluation. Legal has signed this off for GA on condition that no marketing asset states or implies in-region EU evaluation before 4.22.\n\nOut of scope v1: ML-suggested fallbacks, non-English clause parsing (EN only), bulk retroactive evaluation of archived contracts, rule import from a competitor's format.\n\nDependencies: PLB 3.4, ingest parser 2.11, entitlements service.\nentitlements service: packaging flag not yet set, blocked on Finance. Agreed fallback is that the flag ships ON for all PLB-enabled accounts at GA on 12 Oct with no charge; Finance's 26 Oct ruling applies from 1 December, and if it rules add-on, existing users get a 60-day grace before entitlement enforcement."
      },
      {
        "label": "Competitor claims captured from live sites, 9 September 2026",
        "kind": "copy",
        "content": "CLAUSEMILL, clausemill.com/platform/playbooks\nHeadline: \"Your playbook, enforced.\"\nBody: \"Encode every fallback position once, then let sales, procurement and finance self-serve inside the guardrails legal set. Policy rules evaluate in-region, including EU-resident processing for European customers.\"\nPage footer, small type: \"Playbook enforcement is available on Clausemill Enterprise. Rule sets are built and maintained by Clausemill Professional Services. Typical implementation is 6 to 8 weeks.\"\nPricing page: \"Enterprise, from $110,000 per year, three-year term.\"\n\nBRIGHTLINE CLM, brightlineclm.com/ai-redlining\nHeadline: \"Stop maintaining rules.\"\nBody: \"Brightline's redlining model reads your last 2,000 signed agreements and suggests the fallback your legal team would have chosen. No rule authoring, no maintenance, live in a week.\"\nFAQ, question 4: \"Are suggestions binding? Suggestions are advisory. Brightline does not block clause acceptance or record a verdict against a document version.\"\n\nORDERLY, orderly.io/pricing\nHeadline: \"Contracts, sorted. 4,100 teams route through Orderly.\"\nBody: \"Clause library, approval routing and e-signature on every plan, including Starter at $9 per user per month.\"\nFeature matrix footnote 2: \"Approval routing sends a contract to a named reviewer. Orderly does not evaluate clause content.\""
      },
      {
        "label": "Sales quotes, collected by the PMM team in the 8 September pipeline review",
        "kind": "quotes",
        "content": "\"I have lost three deals this year and every single one was because we are not Salesforce-native. Nobody in my deals asks about playbooks. If we are launching anything in Q4, launch the CRM integration, and I will say that to anyone who wants to hear it.\"\n- Priya Raman, Enterprise AE, 4 years at Tessera, highest Q2 attainment on the team\n\n\"The stall is always the same conversation. Legal says we cannot let sales touch the paper, so the buying group shrinks to legal only, and legal on its own cannot carry a $80k line item. What I need is something that lets the GC say yes to sales self-serve without feeling like she has lost control of the paper. Right now I have nothing to say in that meeting.\"\n- Dan Whitcombe, Enterprise AE, 18 months at Tessera"
      },
      {
        "label": "Install base, Q3 stall coding, and Policy Guard beta results",
        "kind": "table",
        "content": "TABLE A: Install base and feature eligibility, as of 8 Sep 2026\nSegment | Accounts | Accounts with Playbook Library (PLB) | Average ACV\nEnterprise | 218 | 218 | $84,000\nGrowth | 922 | 46 | $19,500\nTotal | 1,140 | 264 | n/a\n\nTABLE B: Q3 deals over $40k ACV that stalled or were lost, primary reason as coded in CRM (n=17)\nPrimary stall reason | Deals | Combined ACV\nLegal will not permit non-lawyer redlining | 9 | $612,000\nPrice or budget | 3 | $178,000\nNo Salesforce-native integration | 2 | $96,000\nSecurity review timeline | 2 | $121,000\nIncumbent renewal timing | 1 | $58,000\nTotal | 17 | $1,065,000\n\nTABLE C: Policy Guard closed beta, 38 invited Enterprise accounts, 21 Jul to 5 Sep 2026\nMetric | Value\nAccounts invited | 38\nAccounts that authored at least one policy rule | 9 (24%)\nAccounts where no user held the policy.author role for the whole beta | 22\nAccounts that declined the invitation or never replied | 7\nMedian legal review cycles per contract, activated accounts, 90 days before | 3.1\nMedian legal review cycles per contract, activated accounts, during beta | 1.4\nMedian contract turnaround, activated accounts, 90 days before | 11.4 days\nMedian contract turnaround, activated accounts, during beta | 6.2 days\nTotal clause evaluations, activated accounts | 41,600\nBlock verdicts issued, activated accounts | 2,940\nBlock verdicts resolved by approved fallback text with no legal involvement | 2,087 (71%)\nActivated accounts saying they would expand usage after GA | 8 of 9"
      },
      {
        "label": "Email from the CRO, received Friday 11 September, 18:42, with the Q4 launch roster attached",
        "kind": "email",
        "content": "From: Alina Ferreira, Chief Revenue Officer\nTo: PMM, Contracting Platform; M. Okonkwo (PM)\nCc: CEO; VP Demand Gen\nSubject: Policy Guard needs to be a big one\n\nClausemill posted about their playbook product on LinkedIn last Tuesday and got over 400 comments. We cannot let them own this story. I want Policy Guard as our Tier 1 for Q4: press release, two analyst briefings, and a customer webinar the week of GA.\n\nThree specific asks.\n\n1. The line I want on everything is \"the only CLM that automatically enforces your playbook\". It is short and it lands in a demo.\n\n2. Put Policy Guard into the Q4 pricing email that Lifecycle already has scheduled for 6 October. That email goes to the whole base and it is a free 1,140-account send, so we should use it.\n\n3. I do not want to hear about Playbook Library gating in the field messaging. Reps should sell this to everyone and we sort out entitlements later.\n\nI am on the road until Thursday. Send me the brief and I will sign it off from the airport.\n\n---\nATTACHED: Launch roster, who owns what (from the Q4 launch calendar)\nProduct marketing (you): brief, battle card, positioning, blog.\nLifecycle (S. Adeyemi): in-app announcement, segment email.\nDemand gen (VP, R. Vance): paid, webinar promotion.\nField enablement (J. Torres): enablement call, rep certification.\nProduct (M. Okonkwo): release note, in-app tooltip.\nCustomer success (L. Brandt): CSM talking point, beta-account expansion.\nComms (contract, 2 days a week): press and analyst."
      }
    ],
    "deliverable": "One document, plain text or a doc, no deck, under 1,000 words in total. Section headings from the template do not count toward the word budget. Three parts.\n\n1) GTM brief, 350 to 450 words, one page, with these sections: launch tier decision plus a rationale of no more than three bullets; target segment named with an account count; a one-sentence positioning statement; three message pillars, each with the specific proof point behind it; an asset list covering only the three assets that matter most, each with an owner taken from the launch roster and a date; two success metrics, each with a baseline, a target and the source you would read it from; assumptions, including how you handle the packaging decision that lands on 26 October; and the single trigger that would make you change your tier call.\n\n2) Battle card, 300 to 400 words, one page, written for a rep to use live: one-line pitch, three discovery questions, one block each for Clausemill and Brightline (their claim, what is actually true, the line the rep says out loud), the response to the two stalls a rep will actually hit on this product: the legal-permission stall from Table B, and one other you choose and name, and a short risk note for the field that includes a one-line answer for a prospect who raises a cheap routing tool such as Orderly.\n\n3) A reply to the CRO, 3 to 5 lines, in the tone you would actually send on a Monday morning.",
    "rubric": [
      {
        "criterion": "Launch tier decision and its defence",
        "weight": 22,
        "meets": "Picks a tier, states it in the first line, and supports it with the eligible-account count, the fact that the Q4 Tier 1 slot is already committed to the 6 October renewals pricing change, and the fact that Tier 1 requires six weeks of lead time when GA is 28 days away, so Tier 1 is not available on the calendar regardless of merit.",
        "exceeds": "Treats the tier as a resource trade-off rather than a label: names what Tier 1 would cost the renewals launch, proposes a specific smaller upgrade where it is cheap (for example one analyst briefing without the full campaign), and states the measurable trigger that would earn a tier upgrade later, or proposes booking the Q1 2027 Tier 1 slot for the 4.22 release, when eu-central-1 evaluation lands and packaging is settled, rather than spending Q4 badly."
      },
      {
        "criterion": "Reading the evidence rather than skimming it",
        "weight": 18,
        "meets": "Recognises that 24% beta activation is explained by the policy.author provisioning defect affecting 22 of 38 accounts, and builds the case on the CRM stall data rather than on the loudest quote.",
        "exceeds": "Reframes activation correctly rather than only excusing it: of 38 invited, 22 had no policy.author holder and 7 never replied, leaving 9 accounts able to use the product, and all 9 activated. Quantifies the opportunity from the stall coding (9 deals, $612,000, versus 2 deals and $96,000 for the integration complaint), and handles the AE who is loud and partly right without dismissing her, for example by naming where the integration gap is real and where it is not."
      },
      {
        "criterion": "Positioning and message pillars",
        "weight": 18,
        "meets": "Positioning names the buyer, the alternative and the change, and each pillar carries a proof point from the materials instead of a feature description. No engineering vocabulary survives into customer-facing lines.",
        "exceeds": "Pillars are built around the buying-group problem the AE described, the general counsel saying yes to sales self-serve without losing control, and the proof points are chosen for the room they will be used in rather than simply listed."
      },
      {
        "criterion": "Battle card usability and claim discipline",
        "weight": 18,
        "meets": "Rep-usable in a live call: short, sayable lines, real discovery questions, and no claim the materials cannot support, including no EU in-region claim and no \"only CLM\" claim.",
        "exceeds": "Finds the wedge inside each competitor's own fine print (Clausemill's 6 to 8 week services build versus self-serve authoring, Brightline advisory suggestions with no block and no verdict record, and Orderly routing without clause evaluation handled in one line in the risk note) and writes the counter as a question a rep can ask rather than a claim to assert."
      },
      {
        "criterion": "Handling the open packaging decision and pushing back upward",
        "weight": 14,
        "meets": "States a packaging assumption in writing and flags the 26 October decision as a dependency, and declines at least two of the CRO's three asks with the specific reason, not a general one: the whole-base 6 October send would announce a feature to 876 accounts that cannot use it, inside the renewals pricing email that is itself the Q4 Tier 1 launch, while the price is undecided for another 20 days; and staying silent on Playbook Library gating in field messaging sets reps up to sell into 876 ineligible Growth accounts.",
        "exceeds": "Writes the plan so it survives either packaging outcome, naming exactly which assets change if Finance rules add-on and how the 1 December effective date and the 60-day grace are handled with beta and early adopters, and the CRO reply offers a substitute for each thing it refuses rather than only saying no."
      },
      {
        "criterion": "Editing discipline and honesty about method",
        "weight": 10,
        "meets": "Declares AI use or non-use in the first line, and each of the three parts lands inside its stated word range.",
        "exceeds": "Every line earns its place, no section is padded to hit a minimum, and at least one thing the learner could have said is visibly left out in favour of something that changes a decision."
      }
    ],
    "strongResponse": [
      "States the launch tier in the first line and justifies it with facts from the materials: only 264 of 1,140 accounts hold the Playbook Library module needed to use the feature, the Q4 Tier 1 slot is already held by the 6 October renewals pricing change, and Tier 1's six-week lead time does not fit the 28 days between 14 September and GA on 12 October.",
      "Explicitly reframes the 24% beta activation figure as a provisioning defect, 22 of 38 accounts had no user holding policy.author until the 4.19 fix and 7 never replied, leaving 9 accounts that could use the product and all 9 activated, then cites the activated-account outcomes (3.1 to 1.4 review cycles, 11.4 to 6.2 days, 2,087 of 2,940 block verdicts resolved by approved fallback text with no legal involvement).",
      "Sizes the opportunity from the stall coding, 9 of 17 stalled deals worth $612,000 on legal refusing non-lawyer redlining, and does not organise the launch around the 2 deals worth $96,000 that cited the Salesforce integration.",
      "Treats Priya Raman's account of her own deals as true and argues from the aggregate instead, naming where the Salesforce gap is real (2 deals, $96,000) without implying she has miscounted.",
      "Contains a written packaging assumption and the consequence of being wrong, working from the agreed fallback that the flag ships on for PLB accounts at GA, that the 26 October ruling applies from 1 December and that existing users get a 60-day grace, and names which asset and which CTA change if Finance rules add-on.",
      "The battle card makes no EU in-region or EU residency claim and no \"only CLM\" claim, because Clausemill's own page claims playbook enforcement, and it differentiates against Clausemill on how the rules get built, self-serve authoring by legal ops versus a 6 to 8 week professional services engagement on a $110,000 minimum, rather than on the existence of the capability.",
      "Both success metrics have a stated baseline, a target and a named source, and at least one of them is an outcome rather than an activity count, for example activation among the 264 eligible accounts or pipeline in the legal-bottleneck stall code.",
      "The CRO reply refuses at least two of the three asks, in one sentence each, and offers a specific alternative rather than a general reassurance."
    ],
    "commonFailures": [
      "Reading 24% beta activation as weak demand and choosing a release-note launch for the wrong reason, without ever noticing PLAT-2210.",
      "Building the narrative around the Salesforce-native complaint because it came from the loudest and highest-attaining rep, against the CRM coding, or making the opposite error and claiming Priya Raman's three lost deals contradict Table B. Table B covers Q3 only and only deals over $40k ACV, so her count and the coding can both be true. The correct move is to accept her cases and argue the aggregate, not to catch her out.",
      "Carrying the engineering vocabulary into customer-facing copy: clause AST, deterministic evaluation, webhook fan-out, p95 latency.",
      "Accepting the CRO's \"only CLM that automatically enforces your playbook\" line, which Clausemill's live site contradicts, or matching Clausemill by claiming or implying EU in-region processing, when eu-central-1 is not scoped before build 4.22 and Legal's GA sign-off forbids it. Neither claim survives the follow-up call.",
      "Writing the whole brief as if packaging were settled, so the plan quietly depends on a Finance decision that lands two weeks after GA.",
      "Treating the CRO's 400 LinkedIn comments as demand evidence. Competitor social engagement is not pipeline, and the exercise supplies actual pipeline evidence in Table B."
    ],
    "trackRefs": [
      4,
      5,
      12,
      13,
      18
    ],
    "starter": "AI use: [state here if you used it, and for what]\n\nPART 1. GTM BRIEF (one page, 350 to 450 words)\n\nLaunch tier:\nWhy this tier (max 3 bullets):\n-\n-\n-\n\nTarget segment and size:\n\nPositioning statement (one sentence):\n\nMessage pillars, with the proof behind each:\n1. Pillar:\n   Proof:\n2. Pillar:\n   Proof:\n3. Pillar:\n   Proof:\n\nThe three assets that matter most, owner, date:\n1.\n2.\n3.\n\nSuccess metrics:\n1. Metric / baseline / target / where I read it:\n2. Metric / baseline / target / where I read it:\n\nAssumptions I am making:\n\nWhat would change my tier decision:\n\nPART 2. BATTLE CARD (one page, 300 to 400 words)\n\nOne-line pitch (say it out loud before you write it down):\n\nThree discovery questions:\n1.\n2.\n3.\n\nClausemill\n  Their claim:\n  What is actually true:\n  What the rep says:\n\nBrightline CLM\n  Their claim:\n  What is actually true:\n  What the rep says:\n\nStall 1, legal will not permit non-lawyer redlining:\n  Response:\nStall 2 (name it):\n  Response:\n\nRisk notes for the field (include the one line for a prospect who raises a cheap routing tool such as Orderly):\n\nPART 3. REPLY TO THE CRO (3 to 5 lines)",
    "originalId": "sim-pmm-policy-guard-gtm"
  },
  {
    "id": "sim-lifecycle",
    "role": "Lifecycle / CRM Manager, self-serve growth",
    "title": "Fix the trial abandonment sequence and design the trigger inventory",
    "company": "Grainline: self-serve inventory forecasting for independent food and drink brands (roasters, hot sauce, craft soda), 48 staff, Series A, £89/month Starter and £229/month Studio after a 14 day free trial with no card up front.",
    "minutes": 60,
    "scenario": "Thanks for making it to the exercise round. Here is the actual thing you would own in week one.\n\nGrainline runs a three email abandonment sequence for free trials that go quiet. It has been live and largely untouched since October 2025. Over the last 90 days it recovered 3.1% of the trials that entered it. The same sequence, same audience, ran at 4.4% in 2025 before we moved ESPs. Our CEO has asked for recovery up 50% by the end of Q4. She has not defined recovery, and honestly neither have we, so that is yours to pin down in writing.\n\nTwo things constrain you. First, our CRM enforces a global frequency cap of four marketing emails per contact per rolling 14 days across every programme, and the onboarding drip already spends three of those slots in the trial window. Product notifications are exempt from the cap, but only if the message is about that account's own state and carries no offer. Second, Finance has capped promotional depth at 20% and only on the final message, which puts them at odds with our Head of Growth, who wants to match a competitor at 30% and add two more sends. You do not have to make either of them happy. You do have to say what you would do and why. Our data lead has frozen the event schema until 20 October, so anything needing new instrumentation is a Q4 request with a six week lead time, not something you can ship next sprint.\n\nI have attached the three emails as they currently send, the performance table, the trial funnel cut by activation state, ticket themes from support, and the kickoff thread. Some of it is noisier than it looks. Cap yourself at 60 minutes, we pay £150 for the exercise either way, and I would rather see a rough plan you can defend in a follow up call than a polished one you cannot. AI assistance is allowed on this exercise if you tell us where you used it. It is not allowed in the live round that follows, where I will ask you to walk me through your reasoning without your notes.",
    "materials": [
      {
        "label": "The three emails as they currently send",
        "kind": "copy",
        "content": "All three send from Grainline <noreply@mail.grainline.io>, at 09:00 UTC regardless of recipient timezone. Trials run 14 days and expire at 23:59 UTC on day 14. Accounts with more than 20 seats are routed to an account manager on day 8 and are suppressed from all three.\n\n=== EMAIL 1. Trigger: 72 hours with no session_start during an active trial ===\nSubject: Don't miss out on Grainline\nPreview text: (not set, inbox falls back to \"View this email in your browser\")\n\nHi there,\n\nThanks for starting your Grainline trial. Grainline is the smart forecasting platform trusted by hundreds of growing brands.\n\nWith Grainline you can:\n- Forecast demand across every SKU\n- Never run out of stock again\n- Save hours every week on spreadsheets\n- Make data-driven decisions with confidence\n\nYour 14 day trial is ticking. Don't miss out on everything Grainline has to offer.\n\n[ See plans and pricing ]  ->  grainline.io/pricing\n\nThe Grainline Team\n\n=== EMAIL 2. Trigger: 7 days after last session_start, still in trial ===\nSubject: {{first_name}}, still deciding?\nPreview text: We'd love to help you get set up\n\nHi {{first_name}},\n\nWe noticed you haven't been back in a while. Choosing a forecasting tool is a big decision, and we get it.\n\n\"Grainline paid for itself in the first month. We cut warehouse holding costs 31% across our four distribution centres.\"\nMarcus Feld, Operations Director, Halvern Wholesale Group\n\nWant to see what Grainline could do for your business? Our team is happy to walk you through it.\n\n[ Book a demo ]  ->  calendly.com/grainline-sales/30min\n\nThe Grainline Team\n\n=== EMAIL 3. Trigger: trial day 13, 09:00 UTC, sent to everyone still unconverted ===\nSubject: Your trial ends tonight. 20% off inside.\nPreview text: Last chance to keep your data\n\nHi {{first_name}},\n\nYour Grainline trial ends tonight. After that your account will be paused and your uploaded data will be scheduled for deletion.\n\nUpgrade before midnight and take 20% off your first three months on any plan.\n\nGrainline gives you SKU level demand forecasting, reorder point alerts, supplier lead time tracking, multi-location stock views, seasonality modelling, and one click exports for your accountant.\n\n[ Claim 20% off ]  ->  grainline.io/pricing?promo=TRIAL20\n\nQuestions? Just reply to this email and one of our team will help.\n\nThe Grainline Team\n\nOps notes from the previous owner, left in the campaign description field:\n- {{first_name}} has no fallback value set. 8.4% of trial records have an empty first name.\n- The Calendly link in Email 2 books into the mid-market sales rota. Self-serve trials have no sales coverage, so those bookings are cancelled by an SDR within 24 hours.\n- Data retention policy is 90 days after trial end, not deletion at midnight.\n- Channels available in the CRM today: email and in-app message. Push and SMS are not implemented. \"Product notification\" is a message classification, not a separate channel, and applies to either.\n- Local-time sending is supported by the current ESP and was simply never reconfigured after the migration. Switching it back is a settings change, roughly one hour of work.\n- The importer saves partial state. app.grainline.io/import returns the user to their last uploaded file with the column mapping they had reached. Nobody links to it from anywhere."
      },
      {
        "label": "Sequence performance, 1 May to 29 July 2026",
        "kind": "table",
        "content": "Email | Trigger | Sends | Open rate | Click rate | Click to open | Recovery rate | Recoveries | Unsub rate\nEmail 1 | 72h no session | 2,418 | 41.2% | 3.1% | 7.5% | 0.9% | 22 | 0.31%\nEmail 2 | 7 days no session | 2,244 | 18.6% | 1.4% | 7.5% | 0.4% | 9 | 0.62%\nEmail 3 | Trial day 13 | 2,090 | 52.4% | 9.2% | 17.6% | 2.1% | 44 | 1.18%\nSequence total | 2,418 entrants | 6,752 | n/a | n/a | n/a | 3.1% | 75 | 1.9%\n\nFootnotes as recorded in the ESP:\n1. Recovery is defined by the ESP as paid conversion within 7 days of send, last touch.\n2. The in-app \"trial ending\" banner and the transactional \"your trial ends in 24 hours\" notice both fire on trial day 13. Neither is excluded from last touch attribution.\n3. Of the 44 recoveries credited to Email 3, 31 were accounts that had already completed data import before the email was sent.\n4. Same sequence, same audience, previous ESP, 12 October to 31 December 2025 (1,006 entrants): sequence recovery 4.4%. Nothing in the copy changed at migration. Send times moved from local 08:00 to 09:00 UTC.\n5. Deliverability, all three: 99.1% delivered, 0.4% spam complaint on Email 3, inbox placement not measured.\n6. Per-email rates are over sends. The sequence total row is over the 2,418 entrants, so the columns do not sum. Total unsubscribe counts unique contacts."
      },
      {
        "label": "Trial funnel by activation state, same 90 days",
        "kind": "data",
        "content": "TABLE A. All trials started, 1 May to 29 July 2026\nSegment | Trials | Share | Paid conversion | Paid accounts\nCompleted data import | 1,062 | 30.0% | 22.8% | 242\nStarted import, did not complete | 1,404 | 39.7% | 2.1% | 29\nNever opened the importer | 1,074 | 30.3% | 1.0% | 11\nTotal | 3,540 | 100% | 8.0% | 282\n\nTABLE B. The 2,418 trials that entered the abandonment sequence, by import state at entry\nSegment | Entrants | Share | Recoveries | Recovery rate\nCompleted data import | 540 | 22.3% | 52 | 9.6%\nStarted import, did not complete | 1,197 | 49.5% | 17 | 1.4%\nNever opened the importer | 681 | 28.2% | 6 | 0.9%\nTotal | 2,418 | 100% | 75 | 3.1%\n\nTABLE C. Accounts that opened the importer, by data source\nSource | Accounts | Completed import | Completion rate\nShopify native connector | 812 | 655 | 80.7%\nSquare CSV export | 604 | 121 | 20.0%\nLightspeed CSV export | 431 | 86 | 20.0%\nOther CSV or manual entry | 619 | 200 | 32.3%\nTotal | 2,466 | 1,062 | 43.1%\n\nTiming, from the product analytics tool:\n- Median time from trial_started to import_completed among completers: 41 minutes.\n- Median among completers who later paid: 26 minutes.\n- Among accounts that opened the importer and never completed it, the median last import_started event lands 3 hours 12 minutes into the trial, then nothing.\n- Importer error log, top failure across all failed sessions: \"unmatched column: sku_variant\" at 61%, second \"file exceeds 10,000 rows\" at 14%.\n\nTABLE D. Event inventory available to the ESP today\nCRM contact properties available for segmentation and suppression: seat_count, plan_tier, signup_source, trial_end_date, marketing_consent.\nEvent | Fires today | Properties passed to CDP | Reliability\ntrial_started | yes | plan_tier, signup_source | reliable\nsession_start | yes | none | reliable\nimport_started | yes | source (shopify, square, lightspeed, other) | reliable\nimport_completed | yes | source, row_count | reliable\nimport_failed | yes | none, error_type is logged server side but not passed | fires reliably, reason unavailable\nforecast_viewed | yes | sku_count | reliable\nlocation_added | yes | none | instrumented Jan 2026, never QA'd, volume looks roughly 4x too high\ninvite_sent | no | n/a | not instrumented\nplan_page_viewed | web only | none | misses the in-app plan page, roughly 40% of views\ncard_added | yes | plan_tier | reliable\nsupport_ticket_created | yes | tag | reliable, 45 minute delay\nseat_count | n/a | CRM contact property, synced nightly from billing | reliable"
      },
      {
        "label": "Support ticket themes, 140 trial-tagged tickets, same 90 days",
        "kind": "tickets",
        "content": "Theme | Tickets | Share | Median first reply | Notes from the support lead\nImport and file format | 58 | 41.4% | 4h 20m | Almost all Square or Lightspeed exports. Column names do not match our template.\nMulti-location and warehouse views | 24 | 17.1% | 5h 05m | Feature exists on Studio only. Not visible on trial, which defaults to Starter.\nPricing and plan questions | 21 | 15.0% | 3h 40m | 15 are \"which plan do I need\", 6 object to the price itself.\nLogin, password, SSO | 18 | 12.9% | 1h 50m | Routine.\nXero and QuickBooks sync requests | 12 | 8.6% | 6h 15m | On the roadmap for 2027.\nOther | 7 | 5.0% | 4h 00m | Billing address, VAT number, one GDPR request.\n\nVerbatim, selected by the support lead:\n\"I exported my sales from Square like the guide says and it just spins then says unmatched column sku_variant. I have tried three times. I run one shop and 240 products, this should not be hard.\" - trial day 1, never returned\n\"Spent about half an hour renaming columns in Excel to match your template before I gave up. If your competitor can read a Square export I do not see why you cannot.\" - trial day 2, converted 6 weeks later after a second trial\n\"£89 a month for a spreadsheet with a chart on it is frankly absurd and you should be ashamed. I will be telling everyone in the Brixton makers group.\" - trial day 9, did not convert, replied to Email 3\n\"Where do I see stock for both my units? I have the railway arch and the unit in Peckham. Cannot find it anywhere.\" - trial day 4, converted to Studio after support explained\n\"Your email said my data would be deleted at midnight so I panicked and exported everything. Then I logged in the next day and the trial was still running. Which is it?\" - trial day 14\n\"Honestly I just did not get round to it. Busy month. Is there a way to pick it up where I left off?\" - trial day 11, did not convert"
      },
      {
        "label": "#growth-lifecycle kickoff thread, 4 August 2026",
        "kind": "transcript",
        "content": "Priya Raman, VP Growth, 09:12\nRight, trial abandonment. Ana wants recovery up 50% by end of Q4. Board deck says 3.1% today so call it 4.7% or thereabouts. Whoever owns this, you have the sequence and the funnel data.\n\nTom Escourt, Head of Growth, 09:18\nMy read is simple. Email 3 does 52% opens and 2.1% recovery, it is the only one earning its keep, and it is the one with the offer. Ledgerly runs 30% off on day 10 and I am told it crushes for them. I want us at 30%, add a day 10 and a day 16 win-back, so five emails. That is the whole fix as far as I am concerned. Email 2 is embarrassing, 18.6% opens, someone rewrite the subject line.\n\nDeborah Ilunga, Finance, 09:31\nNo to 30%. Blended payback on Starter is already 11 months and a 30% haircut across three months puts self-serve past 13. Cap is 20% and final message only. That is not a negotiating position.\n\nSam Okonjo, Lifecycle Ops, 09:44\nBefore anyone designs five emails: the CRM cap is four marketing sends per contact per rolling 14 days, all programmes counted together. Onboarding already fires three inside the trial window (welcome, day 2 setup tips, day 6 feature tour). Onboarding sits with Lifecycle, so it is yours to change. Product Marketing wrote the day 6 feature tour and will want a reason if it goes. So there is one free slot today, and before anyone asks: yes, the current abandonment sequence spends three more on top of that. It was built before the cap and it has been grandfathered on an exception that Compliance ends on 1 September. Whatever you design has to live inside four, including onboarding. Product notifications are exempt, but the compliance rule is the message has to be about that account's own state and carry no offer, and I would rather not stretch that definition too far given our complaint rate on Email 3.\n\nNadia Fenn, Data, 10:02\nSchema is frozen until 20 October for the warehouse migration. Anything that needs a new event or a new property on an existing event is a Q4 ticket, roughly six weeks from request to reliable data. I would not build anything on location_added, it has never been QA'd and the counts are obviously wrong.\n\nTom Escourt, Head of Growth, 10:09\nNoted but I still think we are overthinking a discount problem.\n\nPriya Raman, VP Growth, 10:15\nBring me a position either way, with the reasoning. I will take \"we are not doing that and here is why\" if it is argued."
      }
    ],
    "deliverable": "One document, roughly 700 to 900 words excluding the message bodies and both tables, in four parts. (1) Diagnosis, 150 words maximum: what is actually failing, the evidence you are leaning on, and the single number you would move first. (2) Revised sequence: 3 to 5 messages, each specified as trigger, timing, channel, marketing or product notification, subject line, preview text, body of 100 words or fewer, one CTA with its destination URL, and exit condition. Add one line stating how the whole sequence fits the four-in-14-days cap and what you traded to make room. (3) Trigger inventory: a table of 6 to 10 triggers beyond this one sequence, with columns for trigger name, entry condition, events it depends on, audience, first message sent, suppression and exit rules, and a status of \"ships now\" or \"needs instrumentation, Q4\". (4) Measurement note, 120 words maximum: your written definition of recovery, how you would separate sequence effect from the day 13 in-app banner, and the first test you would run with its primary metric and one guardrail. Note anywhere you used AI and what you checked by hand.",
    "rubric": [
      {
        "criterion": "Diagnosis reaches the activation blocker rather than the email surface",
        "weight": 25,
        "meets": "Identifies that the sequence is being asked to solve a setup failure: 77.7% of entrants never completed data import, and import completers convert at 22.8% against 1.6% for non-completers. Notes that Square and Lightspeed exports complete at 20% against Shopify's 80.7%.",
        "exceeds": "Also separates what lifecycle can fix from what product must fix, quantifies the ceiling on email alone (the 1,878 non-activated entrants currently recover 23, a 1.2% rate; lifting them to 3% yields 56, an increase of 33, against the 39 extra recoveries the CEO's 50% target actually requires), and names the 2025 to 2026 drop from 4.4% to 3.1% as a separate migration question worth ten minutes rather than folding it into the same story."
      },
      {
        "criterion": "Revised sequence: segmentation, timing and copy",
        "weight": 25,
        "meets": "Branches by import state instead of sending one message to everyone. At least one message fires inside the first 24 hours against the 3 hour 12 minute median drop-off point. Copy is specific, single-CTA, points back into the product rather than the pricing page, and fixes the merge field fallback, the false day 13 deadline and the deletion claim.",
        "exceeds": "Copy speaks to the exact stall (a named Square or Lightspeed path, an offer to take the file and map it, a resume-where-you-left-off link) and reads like it came from the ticket verbatims. Sequence includes a plausible non-email step, for example a human reply-to address or a mapped-file service, and says what it costs to run."
      },
      {
        "criterion": "Trigger inventory is buildable against the real event inventory",
        "weight": 25,
        "meets": "Every trigger names the events it depends on and is correctly marked ships now or needs instrumentation. Does not build on location_added or invite_sent, and recognises that import_failed carries no error_type, so branching by failure reason is not available today.",
        "exceeds": "Routes around the missing error_type using import_started source plus absence of import_completed within a window, and files a short, prioritised instrumentation ask for 20 October with the reason each property is needed."
      },
      {
        "criterion": "Handling the frequency cap, the discount request and stated assumptions",
        "weight": 15,
        "meets": "Fits the plan inside four sends per 14 days, names explicitly what was suppressed or reclassified to make room, and takes a clear position on the 30% request with a reason grounded in the data rather than deference to Finance.",
        "exceeds": "Uses the product notification exemption deliberately and states the line it will not cross, notes the 0.4% complaint rate and 1.18% unsubscribe on Email 3 as the reason for restraint, and flags at least one assumption it could not verify from the materials with the check it would run in week one."
      },
      {
        "criterion": "Measurement, attribution and the first test",
        "weight": 10,
        "meets": "Defines recovery in writing (return to product, import completed, or paid conversion) and picks one as primary. Notices that the day 13 last touch number is contaminated by the in-app banner and the transactional notice.",
        "exceeds": "Proposes a workable separation, for example a holdout on the day 13 email while the banner runs for everyone, and sizes it honestly against 2,090 sends and a 2.1% base rate, saying whether the test can actually reach significance in the quarter or not."
      }
    ],
    "strongResponse": [
      "States one written definition of recovery before using the word anywhere else in the document, and says which of the three plausible definitions it is not using.",
      "Names the import blocker as the primary cause and cites at least two of these figures: 22.8% versus 1.6% conversion, 77.7% of entrants non-activated, 20.0% completion on Square and Lightspeed against 80.7% on Shopify.",
      "Takes an explicit position on the 30% discount request and grounds it in the fact that 31 of the 44 Email 3 recoveries had already completed import, rather than only citing the Finance cap.",
      "At least one message in the revised sequence fires within 24 hours of the stall, not 72 hours, with the 3 hour 12 minute median drop-off given as the reason.",
      "Every row of the trigger inventory names its source events, and no row depends on location_added or invite_sent without being marked needs instrumentation, Q4.",
      "The plan states its total sends per contact inside the 14 day window and names exactly which onboarding email was suppressed or which message was classified as a product notification to make room.",
      "The rewritten copy fixes all four known defects: the empty first_name fallback, the day 13 tonight claim against a day 14 expiry, the deletion claim against a 90 day retention policy, and the Calendly link that self-serve trials have no coverage for. It also notices that Email 2's testimonial is off-ICP for a product sold to independent roasters and hot sauce brands (a wholesale group with four distribution centres), and that Email 3 promotes multi-location stock views, a Studio-only feature invisible on a Starter trial, which 24 support tickets confirm as a live source of confusion.",
      "Closes with at least one thing deliberately not done inside 60 minutes and the reason, for example the 4.4% to 3.1% ESP migration drop left as a separate investigation."
    ],
    "commonFailures": [
      "Rewriting three subject lines, adding an emoji and calling the sequence fixed, with no segmentation by import state.",
      "Misreading the performance table: treating Email 2's 18.6% open rate as the headline problem when it is the smallest contributor and its click to open matches Email 1 exactly, or reading Email 3's 2.1% as proof that discounting works without noticing that 31 of its 44 recoveries were already activated accounts and that the in-app banner fires the same morning.",
      "Designing triggers on events that do not exist or cannot be trusted, most often a branch on import failure reason or anything built on location_added.",
      "Ignoring the four-in-14-days cap entirely, so the proposed five or six message plan cannot be built without a fight nobody has been told about.",
      "Producing a polished sequence with no stated assumptions and no acknowledged scope limits, which reads as finished rather than defensible and falls apart in the follow-up call.",
      "Naming the 4.4% to 3.1% drop as the headline problem and proposing a send-time revert as the fix, without noticing that the 2025 figure covers a different and much shorter period at a fraction of the volume, and that it explains at most a fraction of a gap dominated by the activation blocker."
    ],
    "trackRefs": [
      11,
      13,
      2,
      8,
      6
    ],
    "starter": "GRAINLINE TRIAL ABANDONMENT: REVISED SEQUENCE AND TRIGGER INVENTORY\n\nPrepared by:\nTime spent:\nAI used (where, and what I verified by hand):\n\n---\n\n1. DIAGNOSIS (150 words max)\n\nWhat is actually failing:\n\nEvidence I am leaning on:\n\nThe one number I would move first, and from what to what:\n\nAssumptions I am making, and how I would check each in week one:\n\n---\n\n2. REVISED SEQUENCE\n\nDefinition of the audience entering this sequence:\n\nMESSAGE 1\nTrigger:\nTiming:\nChannel:\nMarketing or product notification:\nSubject line:\nPreview text:\nBody (100 words max):\nCTA and destination URL:\nExit condition:\n\nMESSAGE 2\nTrigger:\nTiming:\nChannel:\nMarketing or product notification:\nSubject line:\nPreview text:\nBody (100 words max):\nCTA and destination URL:\nExit condition:\n\nMESSAGE 3\nTrigger:\nTiming:\nChannel:\nMarketing or product notification:\nSubject line:\nPreview text:\nBody (100 words max):\nCTA and destination URL:\nExit condition:\n\n(Add MESSAGE 4 and MESSAGE 5 only if you need them.)\n\nFrequency cap: total sends per contact in the 14 day window, and what I traded to make room:\n\nPosition on the 30% discount request:\n\n---\n\n3. TRIGGER INVENTORY\n\nTrigger name | Entry condition | Events it depends on | Audience | First message | Suppression and exit | Status (ships now / needs instrumentation, Q4)\n | | | | | | \n | | | | | | \n | | | | | | \n | | | | | | \n | | | | | | \n | | | | | | \n\nInstrumentation asks for 20 October, in priority order, with the reason for each:\n\n---\n\n4. MEASUREMENT NOTE (120 words max)\n\nMy definition of recovery:\n\nHow I would separate sequence effect from the day 13 in-app banner:\n\nFirst test: hypothesis, primary metric, guardrail, and whether it can reach significance this quarter:\n\n---\n\n5. OUT OF SCOPE\n\nWhat I did not do in 60 minutes, and why:",
    "originalId": "sim-lifecycle-trial-abandonment"
  },
  {
    "id": "sim-cro",
    "role": "CRO Specialist (mid-level), Growth team",
    "title": "CRO take-home: KB-041 results memo and follow-up test design",
    "company": "Kettleback, a UK direct-to-consumer whole-bean coffee subscription sold on monthly plans, 62 staff, Series A, roughly £14m annualised revenue.",
    "minutes": 60,
    "scenario": "Kettleback sells whole-bean coffee on a monthly subscription in the UK. Sixty-two staff, Series A, roughly £14m annualised. You would be joining a growth team of four as the CRO specialist. The person who held the role before you left on 8 August, and the handover was three bullet points.\n\nHere is the exercise. KB-041 was a three-arm test on the plan selection page. It ran for 19 of a planned 21 days and stopped when the previous CRO's account was deactivated. Nobody has written the readout. You have the experiment brief as it was filed, the results as our analyst pulled them, the customer feedback from the same window, and a note from Marcus, our Growth Lead, who wants an answer before Tuesday's board pack.\n\nWrite the results memo with a decision in it, then design the follow-up test. Two things to work around: we have one front-end engineer for three days in the week of 24 August, and no new test can start before 1 September because the brand campaign creative freezes on the 25th. Also worth knowing: the Q3 goal is £330k of new subscription MRR, we are 8% behind it, about £26k of monthly recurring revenue to find, and we do not have an LTV model by plan. Finance uses a blended 11-month average subscription life for every plan, which nobody believes but nobody has replaced.\n\nGive it 60 minutes and stop. We are not looking for slides. We would rather read a memo that names its own weak points than one that reads as finished. Ines, our Director of Growth, will ask you two follow-up questions about this in the next round, so write what you can defend.",
    "materials": [
      {
        "label": "Experiment brief KB-041, as filed 19 July 2026",
        "kind": "copy",
        "content": "KETTLEBACK EXPERIMENT BRIEF, KB-041\nFiled 19 July 2026 by Ola Bergstrom, CRO Specialist (last day 8 August 2026)\n\nPAGE: kettleback.co.uk/subscribe/plans, step 1 of 3 in the signup flow.\nAUDIENCE: new visitors, UK, all devices. Logged-in and returning subscribers excluded.\nSPLIT: 34 / 33 / 33, assignment by visitor on a 30-day cookie. All metrics are reported per session, so repeat sessions from one visitor share an arm.\nPLANNED WINDOW: 21 July to 10 August 2026 (21 days).\n\nHYPOTHESIS\nVisitors leave /subscribe/plans because four plans are shown as a dense comparison grid that does not resolve below 400px, so the monthly price is never legible on a phone. If the plan choice is the first and only decision on the page, more sessions will complete a paid first order.\n\nARMS\nControl: current four-column comparison grid, brand photography header, separate basket interstitial at step 2.\nVariant A, \"Plan-first\": single-column stacked plan cards on mobile, price and weight above the fold, no header image, Taster listed first, plan selection and basket merged into one step.\nVariant B, \"Story-led\": control grid unchanged, plus a full-bleed sourcing photograph and a 90-word origin story above the grid. Basket interstitial unchanged.\n\nPLANS AND PRICES\nTaster 200g, £11/month. House 500g, £26/month. Double 1kg, £44/month. Annual prepay (500g/month), £264 upfront.\n\nMETRICS\nPrimary: subscription start rate, defined as a paid first order completed within the session, per session.\nSecondary: average first-order value, revenue per session.\n\nGUARDRAILS (pre-registered, all versus control)\nG1: 14-day cancel rate must not rise by more than 1.5 percentage points absolute.\nG2: support contacts per 100 starts must not rise by more than 20%.\nG3: median time to first order must not rise.\n\nDECISION RULE AS FILED\nShip the arm that wins the primary metric at p < 0.05, provided no guardrail is breached. If a guardrail is breached, escalate to the Director of Growth.\n\nPOWER\nDesigned for a 4% relative MDE, 80% power, alpha 0.05, two-tailed. Requires 21 days at current traffic. [Annotation added by data team, 13 August: we cannot reproduce this. At a 3.1% baseline and roughly 1,250 sessions per arm per day, 21 days gives 80% power at about a 15% relative effect, not 4%. Ola's sizing sheet is in the deactivated account.]\n\nINSTRUMENTATION NOTE\nVariant A merges plan selection and basket into a single step, so the basket_viewed event only fires when a visitor opens the summary drawer. basket_viewed is not comparable across arms and must not be used as a funnel metric in this test.\n\nTRAFFIC NOTE, added 3 August\nPaid social prospecting budget was raised from £1.1k/day to £4.6k/day between 26 and 31 July for the Bean Club campaign. Mobile share of sessions rose from 63% to 71% across those six days. Assignment split was unaffected. Traffic mix was not.\n\nSTATUS NOTE, added 8 August by data team\nTest stopped at day 19 when Ola's access was revoked at end of employment. No further data collected."
      },
      {
        "label": "KB-041 results pull, prepared 14 August 2026 by Yuki Ferreira-Marsh (Analytics)",
        "kind": "table",
        "content": "Section | Metric | Control | Variant A (Plan-first) | Variant B (Story-led)\nPrimary | Sessions | 24,180 | 23,640 | 23,510\nPrimary | Subscription starts | 750 | 812 | 760\nPrimary | Start rate | 3.10% | 3.43% | 3.23%\nPrimary | Relative lift vs control | n/a | +10.7% | +4.2%\nPrimary | p-value (two-tailed) | n/a | 0.040 | 0.41\nPrimary | 95% CI on relative lift | n/a | +0.4% to +22.1% | -5.6% to +15.1%\nDevice | Mobile sessions | 16,440 | 16,080 | 16,000\nDevice | Mobile start rate | 2.62% | 3.30% | 2.85%\nDevice | Mobile lift, p-value | n/a | +26.0%, p=0.0003 | +8.8%, p=0.20\nDevice | Desktop sessions | 7,740 | 7,560 | 7,510\nDevice | Desktop start rate | 4.12% | 3.72% | 4.05%\nDevice | Desktop lift, p-value | n/a | -9.7%, p=0.20 | -1.7%, p=0.83\nValue | Average first-order value | £41.54 | £34.02 | £40.88\nValue | Revenue per session | £1.288 | £1.168 | £1.322\nValue | Revenue per session lift, p-value | n/a | -9.3%, p=0.12 | +2.6%, p=0.64\nPlan mix | Taster £11, share of starts (count) | 18% (135) | 41% (333) | 20% (152)\nPlan mix | House £26, share of starts (count) | 54% (405) | 42% (341) | 53% (403)\nPlan mix | Double £44, share of starts (count) | 22% (165) | 12% (97) | 21% (160)\nPlan mix | Annual prepay £264, share of starts (count) | 6% (45) | 5% (41) | 6% (45)\nGuardrail G1 | Starts eligible for 14-day window (21 Jul to 31 Jul only) | 548 | 596 | 556\nGuardrail G1 | 14-day cancel rate, all plans | 5.8% | 8.5% | 6.1%\nGuardrail G1 | 14-day cancel rate within Taster buyers | 14.1% | 14.6% | 14.3%\nGuardrail G1 | 14-day cancel rate within House buyers | 4.6% | 4.9% | 4.7%\nGuardrail G1 | 14-day cancel rate within Double buyers | 3.3% | 3.5% | 3.4%\nGuardrail G2 | Support contacts per 100 starts | 3.1 | 3.4 | 3.0\nGuardrail G3 | Median time to first order | 4m 12s | 3m 05s | 4m 38s\nDiagnostic | basket_viewed rate (see brief instrumentation note) | 22.4% | 6.1% | 21.8%\nDiagnostic | Plan page exit rate | 46.2% | 41.8% | 44.9%\nDiagnostic | Scroll depth past plan grid, mobile | 51% | 88% | 39%"
      },
      {
        "label": "Email from Marcus Adeyemi, Growth Lead",
        "kind": "email",
        "content": "From: Marcus Adeyemi, Growth Lead\nTo: you\nCc: Sadie Whitlock, Head of Brand\nSent: Monday 17 August 2026, 07:52\nSubject: KB-041, need the call today\n\nMorning. Sorry to land this in week one. Ola's handover doc is three bullet points and one of them is a link to a Figma file that 404s.\n\nWhere I've got to. I've been checking the dashboard most mornings since about day four. A crossed 95% around day eleven and has stayed there, so as far as I'm concerned we've had a winner for over a week and we've been leaving money on the table while nobody wrote it up.\n\nThat said, my instinct is we ship B. A is a spreadsheet with a buy button. B is the only arm built on the new brand system, and Sadie's October rollout assumes that page. B's numbers are a bit behind A but they're not miles off, and B actually looks like the highest revenue per session in the pull Yuki sent, so I'm not sure A is even the real winner. Happy to be told I'm wrong, but tell me why in a way I can repeat to Ines.\n\nTwo other things. One, whatever we ship, can we put a 10% first-order discount banner on it? That should cover off the order value dip and give the board something to look at. Two, brand creative freezes 25 August, so if we're changing that page's imagery it has to be decided this week.\n\nConstraints: Yuri from front-end has three days in the week of 24 August and that's the lot until mid-September. No new test can go live before 1 September.\n\nI need the memo Tuesday morning for the board pack. Keep it to a page. You own the call, I just have opinions, and I'll back whatever you write as long as you can defend it to Ines.\n\nMarcus\n\n--- forwarded, Sadie Whitlock, 17 August 07:41 ---\n\"Just flagging that B is the only arm that carries the new type scale and the sourcing photography. If we ship A we are shipping a page that contradicts the campaign six weeks before it launches. I don't want to override the data, I want it on the record.\""
      },
      {
        "label": "Customer and internal feedback, 21 July to 14 August",
        "kind": "quotes",
        "content": "ON-PAGE EXIT SURVEY, \"What stopped you signing up today?\", 1,140 responses across all arms\n\n\"Couldn't work out how much it actually costs a month until I got to the basket.\" (control, price-clarity theme tagged on 214 responses, 78% of them control)\n\"Cheapest bag was right at the top so I picked that. Honestly I'd have taken the bigger one if I'd seen it properly.\" (Variant A)\n\"Much easier to read on my phone than last time I looked.\" (Variant A)\n\"Where's the decaf? Don't want to sign up if I can't get decaf.\" (Variant A, 7 responses)\n\"Nice photos but I scrolled past the same picture twice trying to find the prices.\" (Variant B)\n\"Still don't know what 'washed' means and the story didn't say.\" (Variant B)\n\nSUPPORT, Priya Raghunathan, CX Lead, 12 August\n\"We've had 9 tickets since 24 July from people who couldn't find decaf on the plan page. All nine described a single stacked list of plans, which I'm told is one specific variant. Flagging it because it's the only pattern I've seen. For context, decaf is a roast option at step 2 in every arm and we didn't move it.\"\n\nTRUSTPILOT, 2 stars, 4 August\n\"New signup page is a downgrade. Felt like I was being sold the smallest bag possible. Went elsewhere.\"\n\nTRUSTPILOT, 5 stars, 6 August\n\"Signed up on the train in about two minutes, which is more than I can say for most of these.\"\n\nSLACK, Yuki Ferreira-Marsh (Analytics), 14 August 16:20\n\"Numbers are in the sheet. Two flags before anyone quotes them. The 14-day cancel figure only covers starts up to 31 July, because anything later hasn't had 14 days by the time I pulled this. That's 1,700 of 2,322 starts, 73%. The early window is that heavy because the paid burst ran 26 to 31 July. It is not a full-test number. And the device rows are a post-hoc cut, they weren't in Ola's brief, so treat them accordingly.\"\n\nSLACK, Ines Duarte (Director of Growth), 14 August 17:40\n\"I don't need the winner. I need to know what we now believe about how people choose a plan, and what we're spending the September engineering days on.\""
      }
    ],
    "deliverable": "Three pieces, 60 minutes total, plain text or a single doc. No slides.\n\n1. Results memo, 450 to 700 words, addressed to Marcus and copied to Ines. It must open with the decision in the first three lines. It must contain at least one assumption written out and labelled as an assumption, and a short section on where the reading could be wrong.\n\n2. Follow-up test spec, as a labelled list with these eight fields filled in: hypothesis, page and audience, variants, primary metric, guardrails and thresholds, sample and duration estimate, ship criteria, kill criteria. Roughly 200 to 300 words.\n\n3. A reply to Marcus on the brand campaign timing, 80 words maximum, that addresses the 25 August freeze and the discount banner request.",
    "rubric": [
      {
        "criterion": "Decision quality and defensibility",
        "weight": 30,
        "meets": "Names one decision in the first three lines and holds it: ships, holds, or ships to a defined slice, with conditions attached. States what the decision costs and what would change it. Does not present three options and leave the choice to the reader.",
        "exceeds": "The decision is conditional in a way that is operationally specific rather than hedged: names the slice, the ship criteria, the rollback trigger, and the date the decision gets revisited. Anticipates the two questions Ines would ask and answers them in the memo rather than leaving them for the room. Names the memo as the escalation the filed decision rule requires. The rule says a guardrail breach escalates to the Director of Growth, G1 is breached, and Ines is on the copy line, so the memo does that job explicitly rather than quietly overriding a pre-registered rule."
      },
      {
        "criterion": "Statistical reading of the result",
        "weight": 25,
        "meets": "Reads A as a real primary-metric win (+10.7%, p=0.040, CI excludes zero but only just, +0.4% to +22.1%) and B as not a win (p=0.41, CI crosses zero). Treats the desktop dip as inconclusive rather than as a loss, and notes the device cut is post-hoc. Does not claim the paid social burst invalidates the test.",
        "exceeds": "Names the specific validity limits without inflating them: daily peeking on a fixed-horizon design inflates false-positive risk but the brief's power claim does not hold: roughly 24,000 sessions per arm at a 3.1% baseline reaches 80% power at about a 15% relative effect, so a significant +10.7% in a test powered for 15% is likely to overstate the true effect, which is consistent with a confidence interval whose lower bound sits just above zero; the traffic mix shift affects generalisability, not internal validity; the desktop cell is underpowered rather than negative; 19 of 21 days is a shortfall worth stating, not a reason to bin the result."
      },
      {
        "criterion": "Guardrail and value-metric judgement",
        "weight": 20,
        "meets": "Identifies that G1 is breached (5.8% to 8.5%, above the 1.5pp threshold) and that revenue per session fell 9.3% while starts rose. Recognises that G2 is not breached (3.1 to 3.4 per 100 starts is a 10% rise against a 20% threshold) and that A does not breach G3 (median fell to 3m 05s). Credit, do not penalise, a response that notes B's median rose to 4m 38s and so breaches G3 as written, while treating that as moot because B did not win the primary metric. Does not ship on the primary metric alone.",
        "exceeds": "Diagnoses the breach as plan mix, not customer quality, using the within-plan cancel rates (Taster 14.1% vs 14.6%, House 4.6% vs 4.9%), and ties the mix shift back to a specific design choice in A, listing Taster first. Notes the 14-day figure covers only starts to 31 July, about 73% of starts, and that those starts sit disproportionately inside the paid burst. Says plainly that B's higher revenue per session is inside noise and cannot carry a decision. Does not dismiss A's revenue per session drop as noise merely because p=0.12. The mix shift that drives it (Taster 18% to 41% of starts, 135 of 750 against 333 of 812) is unambiguous, and first-order value follows mechanically from mix and price, so the revenue effect is more certain than its own p-value suggests."
      },
      {
        "criterion": "Follow-up test design",
        "weight": 15,
        "meets": "A test that follows from the diagnosis rather than a rerun of A against B. All eight fields filled, primary metric is a value metric or the start rate paired with an explicit value guardrail, duration estimate is grounded in the observed traffic and effect size.",
        "exceeds": "Isolates one variable, typically plan ordering or plan framing inside the A layout, so the next result is attributable. Sizes it honestly against available traffic and says what happens if it cannot reach power in the window. Fits the one engineer, three days, 1 September start."
      },
      {
        "criterion": "Stakeholder handling and memo craft",
        "weight": 10,
        "meets": "Answers Marcus without either capitulating or lecturing. Separates the brand argument from the test result instead of arguing taste. Declines or defers the discount banner with a reason. Scannable structure a manager can read in three minutes.",
        "exceeds": "Gives Sadie a usable path rather than a refusal, for example which parts of the brand system can ride on the winning layout before the freeze. Frames the discount banner as a confound that would make the next result unreadable, not as a bad idea. Writes in a register Marcus could paste into the board pack unchanged."
      }
    ],
    "strongResponse": [
      "The memo states one decision in its first three lines. A reader who stops after three lines knows what is shipping, to whom, and when.",
      "Variant B is ruled out on the evidence (+4.2%, p=0.41, confidence interval crossing zero) and that judgement is kept separate from the brand argument. The response does not argue about whether B looks better.",
      "The desktop result for A is described as inconclusive and underpowered (-9.7%, p=0.20), not as evidence that A hurts desktop, and if a mobile-only rollout is recommended the memo says why the desktop cell cannot settle the question. The response also does not cite basket_viewed dropping from 22.4% to 6.1% as evidence of anything, or names it explicitly as an instrumentation artefact of merging the two steps.",
      "The G1 breach is explained as a plan-mix effect using the within-plan cancel rates in the table (Taster 14.1% vs 14.6%, House 4.6% vs 4.9%), rather than as evidence that the page attracted worse customers, and the 14-day figure is described as covering starts up to 31 July only, roughly 73% of starts, rather than as a full-test number.",
      "One assumption about how a £11 Taster subscriber compares in value to a £26 House subscriber is written out and labelled, along with the direction in which the decision flips if that assumption is wrong.",
      "The response notices that the brief's 4% MDE could not have been achieved at this traffic, and treats the +10.7% point estimate as an upper-leaning estimate rather than a settled effect size. It also notes that assignment is by visitor while the primary metric is per session, so sessions are clustered and the quoted p-values are, if anything, slightly optimistic. Both are treated as caveats on precision, not reasons to discard the result.",
      "Applies Finance's own blended 11-month life to the observed plan mix and states the consequence in money: monthly recurring value per start is about £27 in control against about £22 in A, so subscription revenue per session falls roughly 10% even though starts rise 10.7%. The memo says plainly that on the company's stated assumption, A buys volume by selling a cheaper plan.",
      "The follow-up test changes plan ordering or plan framing within the winning layout, rather than rerunning A against B, and it carries a value metric as primary or as a hard guardrail with a numeric threshold."
    ],
    "commonFailures": [
      "Declaring A the winner on the primary metric and shipping it everywhere, without engaging with the guardrail breach, and dismissing the 9.3% fall in revenue per session as non-significant without noticing that the plan mix shift behind it is large, certain, and enough on its own to make first-order value fall.",
      "Repeating the brief's 4% MDE as though the test were well powered, and so treating +10.7% as a reliable estimate of the effect size rather than the upper-leaning result of an underpowered test.",
      "Reading the desktop dip as a real loss and recommending a mobile-only rollout without acknowledging that the desktop cell is underpowered and the cut was post-hoc.",
      "Treating the basket_viewed collapse from 22.4% to 6.1% as lost purchase intent, when the brief states the two steps were merged in Variant A.",
      "Building the memo around the decaf tickets and the two-star Trustpilot review, which amount to a handful of contacts against 812 starts and point at a step the test did not change.",
      "Accepting the 10% discount banner as a fix for the order-value drop, which confounds the next test and treats a symptom rather than the plan-ordering change that produced the mix shift."
    ],
    "trackRefs": [
      8,
      7,
      13,
      18
    ],
    "starter": "KB-041 RESULTS MEMO\nTo: Marcus Adeyemi, Growth Lead\nCc: Ines Ferreira, Director of Growth\nFrom:\nDate:\n\n1. DECISION\n(three lines maximum)\n\n2. WHAT THE TEST SHOWS\n2.1 Primary metric\n2.2 Device split\n2.3 Order value and plan mix\n\n3. GUARDRAILS\nG1, 14-day cancel rate:\nG2, support contacts per 100 starts:\nG3, median time to first order:\n\n4. ASSUMPTION I AM MAKING\nAssumption:\nIf this assumption is wrong, the decision changes as follows:\n\n5. WHERE THIS READING COULD BE WRONG\n\n6. WHAT SHIPS, TO WHOM, AND WHEN\n\n\nFOLLOW-UP TEST SPEC, KB-042\nHypothesis:\nPage and audience:\nVariants:\nPrimary metric:\nGuardrails and thresholds:\nSample and duration estimate:\nShip criteria:\nKill criteria:\n\n\nREPLY TO MARCUS ON BRAND TIMING AND THE DISCOUNT BANNER\n(80 words maximum)",
    "originalId": "sim-cro-ab-results-memo"
  },
  {
    "id": "sim-service",
    "role": "Customer Support Specialist (Tier 2), B2B healthcare scheduling SaaS",
    "title": "Live Ticket Exercise: Three Replies in 55 Minutes",
    "company": "Sundial, a UK scheduling and patient-reminder platform for independent physio, dental and podiatry clinics; 74 staff, Series A, about 2,800 clinics on the platform.",
    "minutes": 55,
    "scenario": "It is Monday 17 August 2026, 09:10. You have picked up the Tier 2 queue. Three tickets are waiting: a practice manager on her third contact about an answer we gave her that was wrong, a sole practitioner who wants £290 back on a charge he says he was never warned about, and a nine-chair dental practice that had a bad week and has a competitor coming in to demo on Wednesday. All three are real accounts with logs attached. Your job this morning is to write the replies, not to plan a project.\n\nTwo things about how our floor works. Your own authority is capped: you can approve service credits up to £150 and refunds that sit inside the published policy, and nothing else. Marcus, the team lead who signs off exceptions, is on leave until Thursday. Sofia is covering him and clears the exceptions queue at 15:00 today and 15:00 Wednesday, with a reason code required on every item. Callum in Growth has posted in the support channel about one of these accounts and what he thinks we should give them. Read it, and note that a preference from another department is not an approval.\n\nThe awkward part is that the policy does not cleanly cover one of these situations, and you will have to write before anyone senior has answered you. We are interested in the line you draw between what you commit to a customer on your own authority and what you present as a request you have made on their behalf, and in whether the thing you commit still helps them if the request is refused. Where the materials do not tell you something you need, make an assumption, write it down, and carry on. Do not invent facts about the product that the logs do not support.\n\nFifty-five minutes, timed. On Thursday we will ask you to talk through two of your three replies without your notes in front of you and explain why you drew the line where you did. A submission we can pick apart in conversation is worth more to us than one that reads as flawless.",
    "materials": [
      {
        "label": "The three inbound tickets, verbatim, with account context",
        "kind": "tickets",
        "content": "TICKET #48211 (third contact on this thread)\nAccount: Bramley Physio & Rehab. Plan: Practice, annual, £890/yr, renews 12 Nov 2026. Customer since 12 Nov 2024. Contact: Farrah Okonjo, practice manager. Last three CSAT scores: 5, 5, 4. Thread: 6 Aug 11:02 (Farrah asks), 7 Aug 09:14 (Sundial replies), 14 Aug 16:41 (Farrah reports failure, no reply sent), 17 Aug 08:12 (below).\n\nFarrah Okonjo, 17 Aug 08:12:\n\"Third time asking. On 7 August one of your team told me the CSV importer would bring across appointment history if I mapped the columns, and linked me to the help article. I spent the best part of six hours over last weekend and three evenings cleaning 3,412 rows for eleven clinicians. Friday's import loaded the patients and dropped every appointment. There was no error. It just said 'import complete'. We go live on the new system on Monday 24 August and I have already told my clinicians their diaries will have last year's history in them. I am not asking for money. I want to know whether the article is wrong or the software is broken, and what I do between now and Monday. Please do not send me the article again.\"\n\nTICKET #48376 (chaser on an unanswered ticket)\nAccount: Merrick Physiotherapy. Plan: Solo, annual, £290/yr. Customer since 31 July 2023. Renewal charged 31 July 2026, card ending 4417. Contact: Iain Merrick, sole practitioner. Last login 3 March 2026. No support tickets since 2024.\n\nIain Merrick, 14 Aug 10:33, chased 16 Aug 19:20:\n\"You have taken £290 off my card for a year of something I have not opened since March. I did not get any warning email. I have checked, there is nothing in my inbox and nothing in my junk. I have been paying you since 2023 and I went back to paper diaries in the spring because the SMS credits were charged separately and I could never make the bill add up. I want the £290 back. I am not interested in credit, or a discount, or a call. If I have not heard something concrete by Friday I will ask the bank to reverse it.\"\n\nTICKET #48402 (new)\nAccount: Northgate Dental Care. Plan: Practice+, 9 practitioners at £49 each, £441/month, monthly billing on a 12-month term renewing 1 Sept 2026. Customer since 4 Sept 2023. Two locations since 9 Aug 2026. Contact: Dr Priya Sandhu, principal dentist.\n\nPriya Sandhu, Sunday 16 Aug 21:47:\n\"I am writing on a Sunday night because I do not want another week like the last one. Four patients did not turn up because they got no reminder, and on Thursday two of my hygienists had patients arrive an hour after their slot because the times my patients had been given were not the times on my day sheet. Your own status page admits you had an outage. In dentistry a missed appointment is not an inconvenience, it is a child who does not get seen. We are nine chairs and we pay you every month. I have Rushmere Dental Systems coming in on Wednesday to demo. Tell me what happened, all of it, and tell me why I should not sign with them.\""
      },
      {
        "label": "Refunds, credits and cancellations policy (v4.2) plus the internal authority matrix",
        "kind": "copy",
        "content": "CUSTOMER-FACING EXTRACT, v4.2, effective 1 June 2026\n1. First purchase. Any plan bought for the first time may be refunded in full within 14 days of the charge.\n2. Renewals. Renewal charges, monthly or annual, are not refundable. We email a renewal notice to the account's billing contact 14 days before the charge.\n3. Cancellation. You may cancel auto-renewal at any time in Settings > Billing, or by asking us. Cancelling stops the next charge. It does not refund the current term, and access continues to the end of the term you have paid for.\n4. Downgrades take effect at the next renewal. We do not pro-rate mid-term.\n5. Service credit. Where Engineering confirms a Sev-1 or Sev-2 incident affecting your account, Support may issue a service credit of up to one month of your plan value. Credits appear on your next invoice.\n6. SMS credits are billed separately and are not refundable once sent.\n7. Card disputes. While a card dispute is open, the account is placed in read-only until the bank closes the dispute. Read-only accounts keep all their data but cannot take online bookings or send reminders.\n\nSUPPORT HANDBOOK, SECTION 6: APPROVAL AUTHORITY\nAgent may approve: service credits up to £150; refunds that fall inside policy clause 1, at any value; trial extensions up to 30 days.\nAgent may NOT approve: any refund outside policy at any value; any credit above £150; waiver of a paid service (assisted migration, onboarding session, SMS top-up) at any value.\nTeam Lead may approve: refunds outside policy up to £500; credits up to one month of plan value; service waivers.\nHead of Support: anything above £500.\nEvery exception is logged with one reason code: GOODWILL, OUR-ERROR, DOC-ERROR, BILLING-GAP, INCIDENT, RETENTION.\n\nPAID SERVICES PRICE LIST\nPLAN SHAPE, for reference. Solo: £290/yr, one clinician, SMS billed separately. Practice: £890/yr flat, up to 12 clinicians, single location, SMS billed separately. Practice+: £49 per practitioner per month, multi-location, includes a 4,000-message SMS bundle and priority support.\nAssisted migration (contacts, clinician mapping and appointment history, from CSV or a supported system): £240 one-off, 5 working days from receipt of a validated file.\nOnboarding session, 90 minutes: £120.\nSMS credit top-up, 1,000 messages: £38."
      },
      {
        "label": "Internal notes, account logs and the status page",
        "kind": "data",
        "content": "PRIOR REPLY ON #48211, 7 Aug 09:14, from Dev Raman (Support):\n\"Hi Farrah, good news, our CSV importer handles appointment history as well as contacts. Just map your columns to the template (there is a column for appointment date and one for clinician) and it will bring the lot across. Here is the article: help.sundial.app/importing-your-data. Shout if you get stuck.\"\n\nWHAT THE IMPORTER ACTUALLY DOES: contacts, one free-text notes field, and clinician assignment. Appointment history import was cut from scope in release 6.1 on 23 April 2026. The help-centre article \"Importing your data\" still described the old behaviour; version history shows the appointment-history paragraph live from 14 Jan 2026 until it was removed on 8 August 2026. On the day Dev replied, his answer matched the published article.\n\nBRAMLEY IMPORT LOG: file received 14 Aug 15:47, 3,412 rows validated. Patients created 3,388, duplicates skipped 24, appointment columns ignored with no warning shown. PROD-0942 open since 2 June 2026: \"importer should warn on unmapped appointment columns\". No owner assigned.\n\nMERRICK ACCOUNT LOG: 2 May 2026, login email changed from iain@merrickphysio.co.uk to i.merrick@gmail.com by the user. Billing contact email unchanged and still iain@merrickphysio.co.uk. 17 July 2026, renewal notice sent to iain@merrickphysio.co.uk, delivery status bounced, mailbox not found, MX records for merrickphysio.co.uk removed 6 May 2026. 31 July 2026, renewal charged £290, successful. Auto-renew is still on.\nPROD-1188 open since 11 June 2026: \"changing the login email does not update the billing contact email\". 61 accounts identified with a bouncing billing address, 14 of which have renewed in the last 90 days. Not classed as an incident.\n\nSTATUS PAGE, 12 Aug 2026: SEV-2, 09:40 to 13:55 BST, \"SMS reminder delivery delayed or failed for accounts on the UK short code\". Reminders queued inside the window were sent late or dropped. No backfill was run. Confirmed by Engineering as INC-2291. No other incidents in August.\n\nNORTHGATE AUDIT LOG: 9 Aug 14:12, location \"Northgate — Rowsley Street\" created by nadia.f@northgatedental.co.uk, timezone set to Europe/Madrid. 9 Aug 14:31, 42 future appointments reassigned to the new location. Practice default timezone is Europe/London and is unchanged. Documented behaviour: patient-facing confirmations and reminders render in the location's timezone. The clinician day sheet renders in the practice default timezone. When the two disagree, staff see the booked time and the patient is told the location time. Europe/Madrid runs one hour ahead of Europe/London. A practice admin can change a location timezone in Settings > Locations; changing it re-renders existing appointments at the corrected clock time.\n\nNORTHGATE BILLING: £441/month, paid on time every month since Sept 2023, no failed payments. SMS bundle 4,000/month, 3,140 sent in July."
      },
      {
        "label": "Northgate Dental: missed appointments and reminder log, 7 to 14 August",
        "kind": "table",
        "content": "Date | Ref | Location | Slot the practice booked | Time the patient was told | Reminder queued | Delivery | Outcome\n7 Aug (Fri) | NG-2214 | High Street | 09:20 | 09:20 | 6 Aug 10:04 | Delivered 6 Aug 10:04 | Did not attend\n13 Aug (Thu) | NG-2301 | High Street | 11:00 | 11:00 | 12 Aug 10:05 | Failed, no retry | Did not attend\n13 Aug (Thu) | NG-2308 | High Street | 15:40 | 15:40 | 12 Aug 10:06 | Failed, no retry | Did not attend\n13 Aug (Thu) | NG-2319 | Rowsley Street | 09:00 | 10:00 | 12 Aug 14:31 (booked 12 Aug 14:29) | Delivered 12 Aug 14:31 | Marked did not attend at 09:20, patient arrived 10:02\n13 Aug (Thu) | NG-2325 | Rowsley Street | 14:15 | 15:15 | 12 Aug 15:02 (booked 12 Aug 15:00) | Delivered 12 Aug 15:02 | Patient arrived 15:14, seen 59 minutes late\n14 Aug (Fri) | NG-2333 | Rowsley Street | 08:30 | 09:30 | 13 Aug 09:40 (booked 13 Aug 09:38) | Delivered 13 Aug 09:40 | Patient arrived 09:28, seen late\nNote | — | — | — | — | — | — | Reminders are queued at 10:00 the day before, or at the time of booking if booked inside 24 hours. Rows without a booking time were booked more than 24 hours ahead. No appointments existed at Rowsley Street before 9 Aug."
      },
      {
        "label": "#support-floor Slack thread, Monday 17 August",
        "kind": "transcript",
        "content": "08:22 Sofia Reyes (Duty Manager): Marcus is off until Thursday. I am covering exceptions but I am in the pricing review all week, so I will clear the exceptions queue at 15:00 today and 15:00 Wednesday. Anything that lands after 15:00 waits for the next slot. Put the reason code in the title or I will bounce it back.\n\n08:31 Dev Raman (Support): Morning all, I am out with a chest infection, back Wednesday. Please pick up anything urgent on my tickets. Sorry.\n\n08:44 Callum Wraith (Head of Growth): Heads up on Northgate Dental. They renew 1 Sept, £5,292 ARR, and they have Rushmere coming in on Wednesday to demo. Whatever they ask for, give it to them. Three months free if that is what it takes. I would rather eat £1,323 than lose a nine-chair reference site in the Midlands.\n\n08:51 Sofia Reyes: Callum, that is a preference, not an approval. Anything over £150 still comes through the queue with a reason code on it.\n\n08:55 Callum Wraith: Noted, and I will back it when it lands. Just get it done today please.\n\n09:02 Aoife Brennan (Migrations desk): For anyone looking at migrations this week, the queue is five working days and I have four validated files in front of anything new. If somebody needs to be live by next Monday, tell me before lunch today. I can usually split a job: contacts and clinician mapping first, history loaded after go-live in a second pass.\n\n09:06 Aoife Brennan: Second pass does mean the diary looks empty on day one, so whoever owns that account needs to warn them rather than let them find out.\n\n09:07 Aoife Brennan: And if contacts are already loaded, I do not need a re-import. Send me the same validated file and I will run a history-only pass keyed on the existing patient records. It will not duplicate anyone."
      }
    ],
    "deliverable": "Produce, in plain text or a single document: (1) three customer-facing replies, one per ticket, each 120 to 200 words; (2) one internal note per ticket, no more than 60 words each, covering cause, what you committed on your own authority, what you escalated to whom and by when, and the reason code; (3) one pattern flag of about 100 words on what these three tickets say about a problem bigger than these three tickets; (4) a short assumptions list, one line each. No more than 1,000 words in total. No deck, no cover note.",
    "rubric": [
      {
        "criterion": "Ownership of the incorrect prior answer",
        "weight": 20,
        "meets": "Says clearly and early in the Bramley reply that the answer given on 7 August was wrong, states what the importer actually imports, apologises once, then moves to what happens next. Does not hand the customer a colleague's name or the article's version history as her problem.",
        "exceeds": "Owns it as Sundial's error rather than an individual's, explains in a single sentence why it happened without using the explanation as an excuse, and makes the correction immediately useful by telling Farrah exactly what her 3,412-row file can and cannot do now."
      },
      {
        "criterion": "Policy accuracy and authority discipline",
        "weight": 25,
        "meets": "Applies the policy correctly to Merrick (renewal charge is not refundable, clause 1 does not apply), cancels auto-renewal, commits nothing above £150 and waives no paid service, and names who has been asked and when they will answer.",
        "exceeds": "Reads clause 5 precisely: it gates service credits on a confirmed Sev-1 or Sev-2, which only Northgate has, and its one-month ceiling (£441 for Northgate) collides with the agent's £150 cap in section 6. Resolves both points explicitly rather than picking whichever suits, and does not reach for a clause 5 credit on Bramley or Merrick where no incident exists. Dates every escalation against the customer's own deadline: Friday for Merrick, Monday 24 August go-live for Bramley, Wednesday demo for Northgate."
      },
      {
        "criterion": "Diagnosis and resistance to the loud framing",
        "weight": 25,
        "meets": "Separates the 12 August SMS incident from the Rowsley Street timezone setting, tells Northgate how to correct the location timezone today, and does not attribute all four missed appointments to the outage.",
        "exceeds": "Maps the log rows to their causes, including the 7 August case that fits neither, states plainly what Sundial did and did not cause, and treats the Wednesday demo as a deadline to beat rather than as a reason to concede money."
      },
      {
        "criterion": "Reply craft under pressure",
        "weight": 15,
        "meets": "Each reply opens with the answer rather than pleasantries, stays inside the word count, sets one specific next step with a time on it, and matches register to the reader: practical for Farrah, blunt and short for Iain, clinically serious for Priya.",
        "exceeds": "Avoids the exact moves each customer has pre-empted, leaves all three with something concrete they can act on before lunch, and lets at least one reply run short because the reader asked for brevity rather than padding it to the word count. The refusal to Iain is stated once and not softened with hedging."
      },
      {
        "criterion": "Systemic signal",
        "weight": 15,
        "meets": "The pattern flag names at least one issue beyond the three tickets with its internal reference (PROD-1188, PROD-0942 or the article version history) and says what should change.",
        "exceeds": "Quantifies the exposure using the numbers in the materials, proposes one measurable check rather than a general improvement, and names who should own it and by when."
      }
    ],
    "strongResponse": [
      "Every one of the three replies names a specific date and time for the next thing that will happen, rather than 'shortly', 'as soon as possible' or 'in due course'.",
      "The Bramley reply states within its first three sentences that the 7 August answer was wrong and what the importer actually brings across, and it does not name Dev Raman.",
      "The plan given to Farrah still helps her if the £240 migration waiver is refused: something is committed on the candidate's own authority that does not depend on Sofia's 15:00 decision, and the empty-diary consequence of a split migration is stated to her rather than left to be discovered.",
      "The Merrick reply confirms auto-renewal is now off, says plainly that a renewal charge is not refundable under the published policy, gives a decision date earlier than Iain's stated Friday deadline, and mentions the read-only consequence of a card dispute, if at all, only as information about what would happen to his account, never as a condition, a warning or a reason he should not dispute.",
      "The Northgate reply names two separate causes with the dates attached to each, and gives the Rowsley Street timezone correction as a step that can be taken today in Settings > Locations.",
      "The Northgate reply states that correcting the Rowsley Street timezone will re-render the 42 future appointments at their booked times, so any patient already confirmed at the wrong hour needs contacting again, and it says who will do that and when.",
      "No reply commits three months free or any credit above £150; any larger figure appears as a request with a named approver and a time, phrased so that a refusal does not make the writer a liar.",
      "The pattern flag contains at least one internal reference and one number lifted from the materials, plus a check that would show whether the fix actually worked."
    ],
    "commonFailures": [
      "Apologising to Northgate for the SMS incident, offering a credit, and never touching the Rowsley Street timezone, so the patient-facing times are still an hour out when clinic opens on Tuesday.",
      "Accepting the 'four patients did not turn up because they got no reminder' framing whole, when 7 August pre-dates both the incident and the second location, and one of the four was a timezone-driven late arrival logged as a non-attendance.",
      "Reading Callum's Slack message as authority and committing three months free, £1,323, which is roughly nine times the agent's approval cap.",
      "Writing 'my colleague gave you incorrect information' or naming Dev, which shifts a company error onto a person who is off sick and cannot answer for it.",
      "Quoting clause 2 at Iain, closing the ticket, and ignoring that the renewal notice bounced because of PROD-1188, so the one fact that would justify an exception never reaches anyone who can approve one.",
      "Promising Farrah her appointment history for the 24 August go-live without checking that assisted migration takes five working days and has four validated files ahead of hers."
    ],
    "trackRefs": [
      16,
      18,
      13,
      6
    ],
    "starter": "SUNDIAL TIER 2 QUEUE, MONDAY 17 AUGUST\n\nREPLY 1 - Ticket #48211, Farrah Okonjo, Bramley Physio & Rehab\n[120 to 200 words]\n\nInternal note - #48211\nCause:\nCommitted on my authority:\nEscalated to / by when / reason code:\n\nREPLY 2 - Ticket #48376, Iain Merrick, Merrick Physiotherapy\n[120 to 200 words]\n\nInternal note - #48376\nCause:\nCommitted on my authority:\nEscalated to / by when / reason code:\n\nREPLY 3 - Ticket #48402, Dr Priya Sandhu, Northgate Dental Care\n[120 to 200 words]\n\nInternal note - #48402\nCause:\nCommitted on my authority:\nEscalated to / by when / reason code:\n\nPATTERN FLAG [about 100 words]\nWhat I saw across the three:\nEvidence and reference:\nChange I would make, and who owns it:\nHow we would know it worked:\n\nASSUMPTIONS I MADE\n1.\n2.\n3.",
    "originalId": "sim-support-three-tickets-sundial"
  },
  {
    "id": "sim-comms",
    "role": "Communications Manager",
    "title": "Live incident: holding statement, internal note, and the 17:00 call",
    "company": "Vantry: subscription security cameras for homes and small businesses, 61 staff, Series B, 214,000 paying accounts across the UK and Ireland.",
    "minutes": 60,
    "scenario": "You joined Vantry as communications manager nine weeks ago. You report to the CEO. There is no PR agency on retainer and no crisis playbook beyond a two-page doc written after last April's outage.\n\nIt is 12:05 on Sunday 17 August 2025. Since 07:12 this morning, customers have been posting screenshots showing that the app's \"Shared with me\" tab rendered still thumbnail images from cameras belonging to households they have no connection to. Engineering disabled the feature at 09:06 and the symptom stopped. Nobody yet knows how many accounts saw someone else's thumbnail, and nobody can prove what did or did not happen during a 91-minute window on 14 August when the relevant access logs were lost.\n\nA freelance reporter has sent six questions and says she is publishing tonight with or without us. Her deadline is 17:00. Outside counsel has sent a list of things you may not say, and wants up to two hours to clear anything you write. Marta Lindqvist, the CEO, boards a flight at 12:20 and lands at 15:40. She has told the leadership team more than once that no public statement goes out without her sign-off.\n\nWrite what you would actually send, and tell us how you would run the next 48 hours. We are not looking for a flawless statement. We want someone who can say something true and useful while half the facts are missing, and who can explain in a follow-up call why every line is in there. The materials below contain more than you need. Deciding what is signal is part of the exercise.",
    "materials": [
      {
        "label": "Incident timeline, prepared for the incident channel at 12:05",
        "kind": "table",
        "content": "All times BST. All dates 2025. Compiled by Tom Ferris (Head of Engineering) and Aisling Byrne (Support Lead).\n\nTimestamp | Event | Source | Status\nTue 12 Aug 09:14 | App 4.9.0 released to 10% of Android users. Release rebuilds the \"Shared with me\" tab. | Release log | Confirmed\nThu 14 Aug 11:02 | 4.9.0 released to 100% of iOS and Android. | Release log | Confirmed\nThu 14 Aug 11:02 to 12:33 | Thumbnail CDN access logs missing for 91 minutes. Log shipper crashed, autoscaler restarted it. | Ops ticket VAN-2291 | Gap confirmed, contents unrecoverable\nSat 16 Aug 20:41 | Ticket 88412: \"the Shared with me tab is showing a driveway that is not mine\". Agent tagged it \"user error, shared account confusion\" and closed it at 21:07. | Zendesk export | Confirmed\nSat 16 Aug 21:55 | Ticket 88429, same symptom, closed with the same tag at 22:14. | Zendesk export | Confirmed\nSun 17 Aug 07:12 | Customer posts a screenshot publicly. | Public post | Confirmed\nSun 17 Aug 07:12 to 11:50 | 47 tickets from 41 distinct accounts describing the same symptom. | Zendesk live count | Confirmed, still rising\nSun 17 Aug 08:30 | Engineering reproduces the fault on a staff test account. | Tom Ferris, incident channel | Confirmed\nSun 17 Aug 09:06 | Shared-access rendering disabled by feature flag for all users. Symptom stops. | Flag audit log | Confirmed\nSun 17 Aug 09:40 | Sev-1 declared, incident channel opened. | Incident record | Confirmed\nSun 17 Aug 10:15 | Forensic query started: which accounts rendered a thumbnail belonging to a household they are not linked to. | Tom Ferris | Running, ETA Mon 18 Aug 14:00\nSun 17 Aug 10:52 | CDN cache purged and all thumbnail URLs rotated. Any URL captured before this time is now dead. | Ops record | Confirmed\nSun 17 Aug 11:20 | Press enquiry received. | press@ inbox | Confirmed\nSun 17 Aug 11:48 | Engineering position in writing: no code path found by which recorded clips or live streams could be served to another household. Cannot be proven across the 91-minute log gap. | Tom Ferris, email | Assessment, not proof\nSun 17 Aug 12:05 | Now. | | \n\nProduct facts (confirmed): thumbnails are single still images, refreshed every 30 minutes, retained 24 hours. Recorded clips and live streams are served on a separate authenticated path. 31,400 accounts have at least one shared viewer.\n\nOpen at 12:05: how many accounts rendered another household's thumbnail. Whether misrouting was one-way or both ways. What happened during the 91-minute log gap. Whether the regulatory awareness date is Sat 16 Aug 20:41 or Sun 17 Aug 08:30."
      },
      {
        "label": "Press enquiry, received 11:20",
        "kind": "email",
        "content": "From: Priya Raman <p.raman@circuitbrief.co>\nTo: press@vantry.io\nCc: m.lindqvist@vantry.io\nSent: Sunday 17 August, 11:20 BST\nSubject: Vantry shared camera images, running tonight, answers by 17:00 please\n\nHello,\n\nI am writing a piece for Circuit Brief on this morning's reports that Vantry customers can see camera images from other people's homes and businesses. I have spoken to two customers and have four screenshots. The piece runs this evening whether or not you come back to me. I would rather it included your position.\n\nSix questions:\n\n1. Can you confirm the figure circulating online, that around 40,000 households were affected?\n2. Were live video feeds or recorded clips ever accessible to people outside the account, or only still images?\n3. Vantry support received a report of this on Saturday evening and closed it as user error. Did Vantry know about this on Saturday and choose not to act until Sunday morning?\n4. Which content delivery provider serves these images, and is the fault theirs or yours?\n5. Has the Information Commissioner's Office been notified, and if not, when will it be?\n6. Will affected customers be compensated?\n\nI will take a written statement, on the record, attributed to a named person. I will not take background-only. Deadline 17:00 BST today. My number is below if it is faster to talk.\n\nPriya Raman\nFreelance, Circuit Brief\n07700 900 118"
      },
      {
        "label": "Public posts and support signals, pulled at 11:55",
        "kind": "quotes",
        "content": "\"I opened the app this morning to check my shop and the second tile was someone else's counter. Not my shop, not my city by the look of the till. I have 12 cameras with Vantry, £4.99 a month, £7.99 from September. Screenshot attached. I blurred the faces, they did not.\" — Dara Okonjo, Okonjo Bakery, Leeds. Posted 07:12. 890 reposts, 2,100 likes. Verified customer, account in good standing since 2023.\n\n\"Vantry have been streaming our homes to strangers for months and only got caught because somebody screenshotted it. 40,000 households. Cancel today.\" — @HomeNotHarvest. Posted 09:48. 41,000 reposts. Has posted about Vantry 63 times since the April outage. Support can find no Vantry account matching the handle or its linked email. The 40,000 figure matches nothing Vantry has published. The nearest thing is a Vantry blog post of March 2024: 'more than 30,000 homes now use shared access.' That post counted homes with the feature switched on, not homes affected by anything.\n\n\"Not defending them, but mine was one still image and it was gone when I reopened the app. Calling this a hack is not helping anyone.\" — @rmc_photo. Posted 10:31. 60 reposts.\n\n\"@Vantry your app store rating has gone from 4.6 to 3.1 in a week. Read the room.\" — @cheapskatedad. Posted 10:55. 300 reposts.\n\n\"Were the thumbnails served from a shared CDN path with a guessable key? If so, flipping a feature flag does nothing for anyone who already has the URLs. That is the question I would want answered.\" — @halcyon_sec, security researcher, 4,800 followers. Posted 11:40. 1,900 reposts."
      },
      {
        "label": "Note from outside counsel, 11:31",
        "kind": "email",
        "content": "From: Hannah Oyelaran <h.oyelaran@meridianlegal.co.uk>\nTo: Vantry incident group\nSent: Sunday 17 August, 11:31 BST\nSubject: Constraints on external statements, please read before drafting\n\nI have seen the timeline. Before anything goes out:\n\n1. Do not use these words in anything published, sent to press, or written internally: breach, data breach, hack, hacked, leak, leaked, compromised, exposed. Describe it factually, for example \"an error in the shared-access feature\". Those words carry regulatory meaning we have not yet earned.\n\n2. Do not state, confirm, or deny any figure for affected accounts, households, or tickets until the forensic query completes. This covers anything published, sent to press, or sent to customers. Internal briefings may carry the current counts, clearly marked provisional. That includes correcting a third party's number with a number of our own, and includes \"far fewer than\" formulations.\n\n3. Do not name Fanshaw Edge, our CDN provider. Clause 14.3 of the MSA restricts public reference to them in connection with a service incident. This holds even if the journalist names them first.\n\n4. You may say we have found no evidence that recorded video or live streams were accessible to other households, on two conditions: Tom confirms it in writing (he did, 11:48) and the sentence is framed as our position as at a stated time with a commitment to update. Do not write \"no recordings were accessed\". We cannot stand that up across the missing 91 minutes.\n\n5. No compensation, credit, refund, or goodwill offer in any public statement. Remedy follows the regulatory assessment, not the news cycle. Support agents must not offer credits without escalation.\n\n6. Regulator. Our working position is that the 72-hour clock runs from 08:30 today. I am not settled on this. Saturday's 20:41 ticket is arguable and I would rather we did not build a public narrative around acting within 36 minutes. Notification decision by Wed 20 Aug 08:30.\n\n7. Please instruct all staff to say nothing to anyone about this, internally or externally, until we have a final position.\n\n8. Send me anything for external publication and allow up to two hours. I am reachable until 21:00 today.\n\nHannah"
      },
      {
        "label": "#inc-0417 incident channel, Sunday morning",
        "kind": "transcript",
        "content": "Tom Ferris (Engineering) 09:08\nFlag is off for everyone. Symptom stops at the client. Cause is a cache key in the rebuilt Shared with me tab that dropped the household ID, so a thumbnail could be served to the wrong viewer. Still images only, that path never carried clips or live feeds.\n\nAisling Byrne (Support) 09:35\n19 tickets, 17 accounts, all since 07:12, running about one every eight minutes. Two from Saturday night that we closed as user error. I have pulled both agents off the queue for a chat, not a disciplinary, they followed the tag guidance we gave them.\n\nAisling Byrne 09:41\nContext on the numbers people will throw at us. Cancellation requests Mon 11 to Sun 17 Aug: 1,809, against a rolling seven-day average of 240. Exit survey: 88% select \"price\", 4% select \"privacy or security\", 8% other. App store rating 4.6 to 3.1 over seven days, 412 one-star reviews, 380 of them mention the price change. The reviews started climbing on 11 Aug, the day we announced £4.99 going to £7.99 from 1 September. That is three days before 4.9.0 went to everyone.\n\nRob Deakin (Growth) 10:20\nTwo asks. One, put three months free for affected customers in the statement, it kills the story and it costs us less than the churn. Two, the Tuesday lifecycle email \"Your September price change explained\" is built and scheduled to 198,000 people. I do not want to pause it, pausing costs us the September conversion window and we are already behind. For what it is worth, lifecycle can send to any segment inside ninety minutes if you tell me before 15:00. After that the Sunday on-call has gone home and it is tomorrow.\n\nTom Ferris 10:54\nCDN cache purged, thumbnail URLs rotated. Anything captured before 10:52 is a dead link now.\n\nTom Ferris 11:48\nWriting this down so it is on the record. I have found no code path by which recorded clips or live streams could be served across households. I cannot prove what was served between 11:02 and 12:33 on 14 August because those access logs are gone. I am not comfortable with anyone saying nothing was accessed. I am comfortable with no evidence found, as of now.\n\nMarta Lindqvist (CEO) 11:52\nBoarding in twenty minutes, landing 15:40, patchy wifi. You know my rule, nothing public without me. Do what you need to do. I will call the moment I land.\n\nAisling Byrne 12:01\nHeads up, two agents have already replied to tickets this morning saying \"we are aware of a security breach affecting some accounts\". Those replies are out. I need a line for the queue in the next fifteen minutes or they will keep improvising."
      }
    ],
    "deliverable": "One document, four parts, 650 to 850 words total. Plain text or a single doc. No deck.\n\nA. Assumptions: up to 3 bullets, one line each, at the top.\nB. Holding statement: 120 to 160 words, publishable as written on status.vantry.io and issuable to press with only a named attribution line added.\nC. Internal note to all 61 staff: 200 to 250 words. Must include one sentence staff may use verbatim if asked, written so that a support agent can also paste it as the opening line of a ticket reply, because that queue needs a line within fifteen minutes, a named route for enquiries, and a time for the next update.\nD. Response strategy: 300 to 400 words covering what goes to Priya Raman before 17:00 and in what form, who is named as the on-the-record spokesperson for the press statement, and what you do if Marta cannot be reached before 17:00, the approval path between now and 15:40, the sequence to Tuesday 19 August, a one-line decision on each of Growth's two asks (the three months free offer, and the Tuesday price-change email scheduled to 198,000 people), the one event that would make you change the plan, and what you deliberately left out, and where this plan is weakest.",
    "rubric": [
      {
        "criterion": "Holding statement discipline",
        "weight": 25,
        "meets": "Publishable as written, inside the word count, breaks none of constraints 1 to 5 in counsel's note (6, 7 and 8 govern process and internal comms, not the text of the statement), no banned vocabulary, no compensation, no account figures. Says what is known, what has been done, and when the next update comes.",
        "exceeds": "The statement could be quoted in full and still be accurate on Monday when the account count lands. It separates still thumbnails from live video and recordings without overclaiming, and it puts the Saturday tickets in Vantry's own words rather than waiting to be caught with them."
      },
      {
        "criterion": "Handling of unknowns and assumptions",
        "weight": 20,
        "meets": "Names the 91-minute log gap and the unsettled awareness date. Does not assert scope. States assumptions in the required block rather than burying them in prose.",
        "exceeds": "Any \"no evidence\" line is written as a point-in-time position with a named owner and a named review moment, and the submission says what retracting it would cost and how that risk is priced against saying nothing, and flags that the notification decision date must be set from the earlier of the two possible awareness moments, not the preferred one."
      },
      {
        "criterion": "Reading the materials",
        "weight": 15,
        "meets": "Does not present the 4.6 to 3.1 rating fall or the 1,809 cancellations as incident damage. Treats the 40,000 claim as unsourced rather than as a fact to rebut with a number.",
        "exceeds": "Identifies 40,000 as an inflated reading of a two-and-a-half-year-old shared-access adoption figure, separates \"has shared access\" from \"saw another household's thumbnail\", and corrects the category error without supplying a number of Vantry's own. Ranks Dara Okonjo's evidenced post above the higher-reach one and says why reach is the wrong sort. Answers, or plans to answer, the CDN cache question the researcher raised, or notes that the exit-survey window mostly predates 07:12 on Sunday and therefore settles nothing about incident-driven churn in either direction, and says what would."
      },
      {
        "criterion": "Internal note",
        "weight": 15,
        "meets": "One door for enquiries with a named owner, a sentence staff can actually use, a next update time, and a clear instruction on personal posting with a reason attached.",
        "exceeds": "Treats counsel's blanket \"say nothing to anyone\" as unworkable and replaces it with something staff will follow, and gives the support queue a usable line inside Aisling's fifteen minutes, since that is where the volume lands and where two wrong replies have already gone out."
      },
      {
        "criterion": "Strategy and sequencing",
        "weight": 15,
        "meets": "A clear recommendation on engaging or declining, a plan that actually meets 17:00, and an approval path that survives the CEO being in the air between 12:20 and 15:40.",
        "exceeds": "Sequences customer notification ahead of the article rather than after it, decides in advance what changes if Monday's count is large versus small, names the trigger for moving from holding to full statement, and makes a call on Rob's Tuesday email and his three months free."
      },
      {
        "criterion": "Defensibility and register",
        "weight": 10,
        "meets": "Plain sentences. No hype vocabulary. Trade-offs named rather than only best practice.",
        "exceeds": "Every judgement call carries a one-clause reason, so a follow-up interview can probe any line and get an answer. Says what was left out and why, and where the plan is weakest."
      }
    ],
    "strongResponse": [
      "The holding statement contains no form of breach, hack, leak, compromised, or exposed, and no figure for affected accounts, households, or tickets.",
      "Names the on-the-record spokesperson and states the fallback if the CEO is unreachable before 17:00, rather than leaving attribution blank while Priya has said she will not take background-only, and states in writing the assumption about who can approve a public statement before 15:40 and what happens if that assumption turns out to be wrong.",
      "The 91-minute log gap appears in the strategy, and any \"no evidence\" wording carries a stated time and a named next update rather than standing as a flat claim.",
      "The price rise is named as the driver behind the rating fall and the cancellation spike, and neither figure is used as evidence of incident impact.",
      "The 40,000 figure is addressed directly in what goes to Priya Raman, and no substitute number is offered in its place.",
      "The Saturday tickets appear in the external answer, not only in the internal note, the awareness date is not asserted as Sunday 08:30 without qualification, and the submission notices that counsel's Wed 20 Aug 08:30 notification decision point falls after Tue 19 Aug 20:41, the deadline that applies if Saturday's 20:41 ticket is the awareness moment, and says so in writing.",
      "The three months free offer is kept out of the public statement, with a one-line reason given.",
      "The internal note contains a specific sentence staff can say word for word, a named person to route enquiries to, and a stated time for the next update."
    ],
    "commonFailures": [
      "Uses \"breach\", \"leak\", or \"exposed\" somewhere in the public statement or the internal note, usually in the first sentence, after reading a legal note that bans all three.",
      "Builds the strategy around the 4.6 to 3.1 rating fall and the 1,809 cancellations, treating a pricing problem as incident damage and recommending reassurance messaging aimed at the wrong audience.",
      "Chases @HomeNotHarvest because of the 41,000 reposts, and either repeats the 40,000 figure while declining to comment on it or corrects it with a number counsel has forbidden.",
      "Writes \"no recordings were accessed\" or \"customer video was never at risk\", which the missing 91 minutes cannot support and which becomes a retraction on Monday.",
      "Treats the CEO's flight as a blocker: misses 17:00 with a plan to publish tomorrow, or publishes without ever naming the approval assumption being relied on.",
      "Turns counsel's point 7 into an internal note that tells 61 people to say nothing, gives them no usable sentence, and leaves the support queue improvising for another six hours."
    ],
    "trackRefs": [
      18,
      16,
      5,
      13,
      6
    ],
    "starter": "VANTRY INCIDENT, SUNDAY 17 AUGUST 2025, 12:05\nPrepared by: [your name]\n\nASSUMPTIONS (maximum 3, one line each)\n-\n-\n-\n\n1. HOLDING STATEMENT (120 to 160 words)\n[Publishable as written on status.vantry.io and issuable to press with only a named attribution line added]\n\n\n\n2. INTERNAL NOTE TO ALL STAFF (200 to 250 words)\nSubject line:\n\nBody:\n\nSentence staff may use verbatim if asked (must also work as the opening line of a support ticket reply):\n\nWhere to route enquiries:\n\nNext update:\n\n\n3. RESPONSE STRATEGY (300 to 400 words)\nRecommendation on the 17:00 deadline, and in what form:\n\nNamed on-the-record spokesperson, and the fallback if Marta cannot be reached before 17:00:\n\nApproval path between now and 15:40:\n\nSequence to Tuesday 19 August:\n\nDecision on Growth's two asks (three months free; the Tuesday price-change email to 198,000 people), one line each:\n\nThe one event that would change this plan:\n\nWhat I have deliberately left out, and why:\n\nWhere this plan is weakest:",
    "originalId": "sim-comms-live-incident-holding"
  }
];
