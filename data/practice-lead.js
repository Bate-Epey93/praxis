// Practice content for track 20, Support Leadership. Five timed drills and one 60-minute
// simulation. Figures inside the simulation are invented but internally consistent; the
// benchmarks the learner is expected to apply come from the track and carry their sources there.

export const LEAD_DRILLS = [
  {
    id: 'lead-shrinkage', trackRef: 20, minutes: 5, title: 'Schedule the Tuesday peak',
    prompt: `Forecast for next Tuesday, 10:00 to 10:30: 412 calls, average handle time 6 minutes 20 seconds, target 80 percent answered in 20 seconds. An Erlang C calculator says 49 agents must be on the phones for that interval. Planned shrinkage is 33 percent. Your roster shows 58 people scheduled for that half hour.\n\nWrite the three-line note to your manager: scheduled headcount needed, the gap, and what you will do about it today.`,
    constraints: ['Show the division, not just the answer', 'Name one lever you control and one you need approval for', 'Under 60 words'],
    scoreOn: [
      'Did you divide 49 by 0.67 (not add 33 percent) to get 73?',
      'Did you state the gap as 15 heads, not "we are short"?',
      'Is the cheapest lever (moving breaks or offline time) named before overtime?',
      'Would your manager know what you are asking for without replying?'
    ],
    goodLooksLike: '"Erlang says 49 on phones at 10:00; at 33% shrinkage that is 49 ÷ 0.67 = 73 scheduled, we have 58, gap 15. Today: moving the 10:00 coaching block and two breaks recovers 9. I need approval for 6 hours of voluntary overtime to cover the rest."'
  },
  {
    id: 'lead-grow', trackRef: 20, minutes: 10, title: 'Coach without telling',
    prompt: `Auto-QA flagged an agent, Priya, for skipping the second verification question on 11 of her last 40 calls. Her CSAT is top quartile and her AHT is 40 seconds under target. You have fifteen minutes in a 1:1.\n\nWrite the conversation plan using GROW. Every line from you must be a question until the Will step. Then write the single feedback sentence you will open with, in the form behaviour, moment, effect.`,
    constraints: ['Goal, Reality, Options and Will each get at least one real question', 'The feedback line names a specific call moment, not a trend', 'No scripted empathy phrase handed to the agent'],
    scoreOn: [
      'Is the feedback line specific enough that Priya could pull up the call?',
      'Does Reality ask her to self-assess before you give your view?',
      'Does Options produce at least three choices before you add one?',
      'Does Will end with one behaviour, this week, written by her?'
    ],
    goodLooksLike: 'Opens with "On the 14:05 call yesterday the second verification question was skipped at 0:48, which means that account was discussed before identity was confirmed." Then: "What do you want from verification?" "Walk me through what happens at that point in a call." "What are three ways you could make the second question automatic?" "Which one will you try this week, and how will we both know?"'
  },
  {
    id: 'lead-metric-refuse', trackRef: 20, minutes: 5, title: 'The number you will not report',
    prompt: `Your director wants a weekly dashboard with: average handle time per agent ranked top to bottom, CSAT, calls per agent, and a single "productivity score" combining them. Write the reply: which item you will not report as asked, why in two sentences with the gaming risk named, and what you will report instead.`,
    constraints: ['Refuse exactly one thing', 'Name the behaviour the metric would produce', 'Offer a replacement, not just a refusal'],
    scoreOn: [
      'Did you refuse AHT as a ranked standalone target rather than refusing AHT itself?',
      'Did you name what agents do when AHT is ranked (rush, transfer, avoid hard calls)?',
      'Is the replacement a paired metric (for example AHT alongside FCR or CES)?',
      'Is the tone a professional disagreement rather than a complaint?'
    ],
    goodLooksLike: '"I will report AHT, but not as a ranked league table and not inside a composite. Ranked AHT produces short calls, not resolved ones: agents transfer the hard cases and the repeat-contact rate rises within a month. I will show AHT next to FCR and CES per team, with the three slowest call types named so we fix the cause."'
  },
  {
    id: 'lead-complaint-clock', trackRef: 20, minutes: 5, title: 'Day 41 on the complaint',
    prompt: `An open complaint reached day 41 of the 56-day clock. The Designated Employee has not yet been assigned; the file shows it was received on day 1 and acknowledged on day 3. The customer rang today asking "what is happening".\n\nWrite two things: the internal note that gets this moving (under 50 words) and the single sentence the advisor should say to the customer about timing.`,
    constraints: ['Use the FCAC rules: 14-day referral window, 56 days not pausable, OBSI after 56 days or final response', 'The customer sentence must not promise a date the clock cannot keep', 'Name the compliance breach already in the file'],
    scoreOn: [
      'Did you flag that referral past 14 days is already a breach, not just a risk?',
      'Does the internal note name an owner and a time today?',
      'Does the customer sentence give the external route (OBSI) honestly if day 56 passes?',
      'Did you avoid "we will get back to you shortly"?'
    ],
    goodLooksLike: 'Internal: "Complaint #… day 41 of 56. Not referred to a Designated Employee; the 14-day referral window was missed on day 15. Needs a DE assigned and a Notice of Final Decision drafted by day 50. Owner: [name], by 3pm today." Customer: "Your complaint is in its final review and you will have our written decision within the 56-day period that ends on the 27th; if you do not, or you disagree with it, you can take it to OBSI at no cost and I will send you how."'
  },
  {
    id: 'lead-business-case', trackRef: 20, minutes: 15, title: 'Five FTE or the overtime',
    prompt: `Unit of 60 advisors. Last quarter: overtime ran at 8 percent of paid hours (the plan was 3 percent), abandon rate was 9 percent against a 5 percent target, and 14 agents left in the year. Loaded cost of an advisor is $78,000 a year. A replacement costs roughly $15,000 all in. Forecast says the gap is 5 FTE at the current service-level target.\n\nWrite the one-page case for 5 FTE in four short paragraphs: the cost of the gap today, the cost of the ask, the payback, and the assumption most likely to be wrong.`,
    constraints: ['Every number carries its arithmetic', 'Lead with the cost of not hiring', 'State a 90-day measure that would show the case was right or wrong'],
    scoreOn: [
      'Did you cost the overtime overrun (5 points of paid hours on 60 people) in dollars?',
      'Did you connect attrition to overtime, with the replacement cost in the total?',
      'Is the ask stated as 5 × $78,000 = $390,000 against the costs you computed?',
      'Did you name one assumption that could kill the case and how you would check it?'
    ],
    goodLooksLike: 'Overtime over plan: 5% of 60 × $78,000 ≈ $234,000 a year at straight time, more at premium rates. Attrition: 14 × $15,000 = $210,000, and the exit surveys cite forced overtime. Abandons at 9% mean roughly one caller in eleven never reached us. The ask is $390,000; the two costs above already exceed it before counting lost revenue. Riskiest assumption: that the forecast holds; check by comparing forecast to actual weekly for 90 days.'
  }
];

export const LEAD_SIMS = [
  {
    id: 'sim-lead-opsreview',
    role: 'Support team lead applying for a manager role, Canadian bank contact centre',
    title: 'Monthly ops review and a staffing decision for Cards Support',
    company: 'Northline Financial (fictional), a federally regulated Canadian bank. Cards Support is 64 advisors across two sites, voice and chat, handling lost and stolen cards, fraud alerts, disputes, declines and limits.',
    minutes: 60,
    scenario: `You are a team lead covering for the Cards Support manager, who is away for six weeks. The director has asked you to run the September monthly operations review on your own and to come with a recommendation on the staffing gap, because the budget window for January hires closes next week.

The pack below is what the analyst sent you. It is incomplete in the way real packs are: one figure is stated two different ways, one trend is louder than it is important, and one number that matters is missing and must be requested. The director will not read the pack; she will read your one-pager and ask three questions.

Produce the review as you would present it, then the staffing recommendation. You are not expected to invent data you were not given. Where you must assume, say so in a line. If something in the pack should trigger a compliance action rather than a discussion, say that first.`,
    materials: [
      { label: 'September scorecard versus August and target', kind: 'table', content: `Metric | August | September | Target | Trend
Calls offered | 41,200 | 46,900 | n/a | up 13.8%
Service level (80/20) | 76% | 69% | 80% | down 7 pts
Abandon rate (after 20s) | 6.1% | 9.4% | 5% | up 3.3 pts
Average handle time | 6:48 | 7:02 | 6:30 | up 14s
FCR (survey) | 71% | 70% | 75% | down 1 pt
CSAT (post-call survey) | 79 | 74 | 80 | down 5
CES (1 to 7, lower is better) | 2.9 | 3.4 | 3.0 | worse
QA average | 88.2 | 87.9 | 85 | flat
Calibration variance (pts) | 4.1 | 6.8 | under 5 | widened
Shrinkage actual | 31% | 36% | 32% plan | over plan
Overtime (% paid hours) | 4% | 9% | 3% | up 5 pts
Occupancy | 83% | 89% | 80 to 85% | over range
Schedule adherence | 91% | 87% | 90% | down
Cost per contact (voice) | $8.10 | $7.60 | $8.00 | down
Open complaints (end of month) | 23 | 41 | n/a | up
Complaints past day 40 | 2 | 9 | 0 | up
Attrition (12-month rolling) | 28% | 31% | 25% | up` },
      { label: 'Analyst notes attached to the pack', kind: 'copy', content: `1. September volume jump: the card-renewal batch mailed 3 to 5 September (about 38,000 cards). Calls about "my new card has not arrived" and "my pre-authorised payments failed" ran at roughly 2.4× normal for the two weeks after mailing. Volume returned to August levels by 24 September.

2. Shrinkage: 36% includes the mandatory fraud-recertification training (two half-days per advisor) that ran 8 to 19 September. Without it, shrinkage would have been about 31%.

3. Overtime at 9% was approved by the manager before leave to protect service level during the renewal batch. Note: the finance extract shows overtime at 7.2% of paid hours; the WFM tool shows 9%. The difference is the on-call fraud rota, which finance codes separately. Both numbers are in circulation.

4. Cost per contact fell because volume rose faster than cost. Finance has flagged this as "efficiency improving".

5. Calibration variance widened after two new QA evaluators started on 1 September. No calibration session was held in September; the manager normally runs it in the last week.

6. Complaints: 41 open; 9 past day 40. Of the 9, 6 relate to the renewal batch (cards sent to a previous address). None of the 9 has a Designated Employee assigned yet; the referral is usually done by the manager.

7. Attrition: 5 leavers in September (3 from the evening team). Exit survey themes: "mandatory overtime with no notice" (4 of 5) and "no path to the fraud specialist role" (3 of 5).

8. Erlang C requirement at 80/20 for the October forecast (volume back to ~41,000, AHT 6:45): 58 on phones at the busiest interval. Scheduled at 32% planned shrinkage: 85. Current headcount: 64 advisors. The analyst has not computed the scheduled-headcount gap; she has left the arithmetic to you.

9. Not in the pack: repeat-contact rate within 7 days. The dashboard has been broken since the CRM upgrade on 20 August. A manual pull was requested on 2 September and has not been delivered.` },
      { label: 'Email from the director, Friday', kind: 'email', content: `Subject: Monday review

I have 25 minutes. I want the one-pager and a yes or no on the January hires. Finance is telling me cost per contact is down and overtime is 7%, so they are asking why we need anyone. I am also being asked by the Chief Compliance Officer whether we have any complaint exposure from the renewal mailing. Bring whatever you have.

Also: the evening team lead has asked for an exception to run mandatory overtime through October. I am inclined to say yes unless you tell me otherwise.` },
      { label: 'Voice of customer, September: top verbatims by theme (post-call survey free text)', kind: 'quotes', content: `"I called three times about the card that never came and each person started from the beginning." (renewal, 14 Sept)
"I was told it would arrive in 7 to 10 business days and it is now day 16." (renewal, 19 Sept)
"My Netflix and my gym both bounced because the card number changed and nobody told me." (renewal, 11 Sept)
"The person was kind but kept putting me on hold to check things." (declines, 22 Sept)
"You text me a fraud alert and then I cannot get through to anyone for 40 minutes." (fraud, 9 Sept)
"Resolved on the first call, the advisor gave me a date and it happened on that date." (dispute, 26 Sept)
"Why did my card get sent to the apartment I left two years ago when you have my new address on the app?" (renewal, 15 Sept)
"Your advisor said she could not help because the manager was away." (complaint, 23 Sept)` }
    ],
    deliverable: `One document in three parts. (1) The ops review one-pager: a headline verdict in one sentence, the five numbers that matter with what they mean, what to discount and why, the compliance action required, and three owned actions with dates. 400 to 550 words. (2) The staffing recommendation: the scheduled-headcount arithmetic shown, yes or no on the five January hires, the cost of the gap versus the cost of the hires with your assumptions stated, and your answer on evening mandatory overtime. 200 to 300 words. (3) The three questions you expect the director to ask, each with a two-sentence answer.`,
    starter: `# September ops review — Cards Support

## Verdict (one sentence)

## Compliance action first

## The five numbers that matter

## What to discount, and why

## Three actions (owner, date)

# Staffing recommendation

## Scheduled headcount arithmetic

## Yes or no on January hires, with the cost comparison

## Evening mandatory overtime

# The three questions she will ask`,
    rubric: [
      { criterion: 'Compliance recognised and placed first', weight: 25, meets: 'Identifies that nine complaints past day 40 with no Designated Employee assigned is a breach of the 14-day referral rule and an imminent 56-day breach, and makes it the first item.', exceeds: 'Names the specific actions (assign DEs today, draft Notices of Final Decision, log the renewal-batch complaints as a systemic root cause under the FCAC guideline) and the exposure if the CCO asks.' },
      { criterion: 'Reading the pack honestly', weight: 25, meets: 'Discounts the cost-per-contact fall as a volume artefact, reconciles the two overtime figures, and separates the one-off training shrinkage from the structural number.', exceeds: 'Also flags the missing repeat-contact rate as the number that would settle the FCR question, and treats the renewal batch as a root cause with a prevention owner rather than a weather event.' },
      { criterion: 'Staffing arithmetic and decision', weight: 20, meets: 'Shows 58 ÷ 0.68 = 85 scheduled against 64 on roll (gap 21 at full requirement) and reaches a yes or no with reasons.', exceeds: 'Recognises five hires close a quarter of the gap, costs the overtime and attrition the gap is already generating, and proposes what else closes it (deflection on renewal calls, address verification before mailing).' },
      { criterion: 'Judgement on people', weight: 15, meets: 'Says no, or a conditional no, to open-ended mandatory evening overtime, citing the exit-survey evidence.', exceeds: 'Connects attrition cost to the overtime decision in dollars and proposes the fraud-specialist path as a retention lever.' },
      { criterion: 'Executive communication', weight: 15, meets: 'One-pager leads with the verdict, stays within length, and every action has an owner and a date.', exceeds: 'The three anticipated questions are the ones a director would actually ask, and the answers are two sentences each.' }
    ],
    strongResponse: [
      'The first thing in the document is the complaint exposure, not the service level.',
      'Cost per contact is explicitly set aside as misleading in a volume spike, with the arithmetic that shows why.',
      'The overtime figure is reconciled (7.2 percent plus the fraud rota equals 9 percent) and the director is told which one to use with Finance.',
      'Shrinkage is restated as roughly 31 percent structural plus a one-off, so the staffing plan uses the right denominator.',
      'The headcount gap is computed, and the recommendation does not pretend five hires close it.',
      'The renewal batch is treated as a root cause with a prevention action (address confirmation before mailing, proactive message about pre-authorised payments) and an owner.',
      'Evening mandatory overtime is refused or tightly bounded, with the attrition evidence quoted.',
      'The missing repeat-contact rate is named as a request with an owner and a date.'
    ],
    commonFailures: [
      'Presenting the scorecard top to bottom and reaching the complaints last, or not at all.',
      'Accepting the cost-per-contact improvement at face value because Finance likes it.',
      'Using 36 percent shrinkage for the October plan and over-asking, or using 31 percent and forgetting the training was real.',
      'Recommending the five hires as if they solve the problem, without the arithmetic showing they cover a quarter of the gap.',
      'Saying yes to mandatory evening overtime because the service level is bad, while the exit surveys explain the attrition.',
      'Actions without owners and dates.'
    ],
    trackRefs: [20, 16, 13]
  }
];
