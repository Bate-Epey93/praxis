// Practice content for the cards advisor: six timed drills and one three-call simulation.
// The bank in the simulation is fictional. Its policy card is modelled on public RBC pages as
// fetched 12 October 2026 and on Canadian law current to 21 September 2026, and every figure
// in it is marked as something to confirm in-system before it is said to a real client.

export const CARD_DRILLS = [
  {
    id: 'cards-first-fifteen', trackRef: 16, minutes: 5, title: 'Declined abroad: the first fifteen seconds',
    prompt: `A client calls from Lisbon. Opening line: "My card just got declined at the hotel desk, in front of my kids, and I've been on hold for twenty-five minutes. I cannot visit a branch, I'm in Portugal." You can see a fraud restriction on the card placed two hours ago after a transaction the system did not recognise.\n\nWrite your first three sentences, then the three diagnostic questions you ask next, in order, with what each answer tells you.`,
    constraints: ['Name the place and the stakes in the first sentence', 'Give a time-boxed next step before any question', 'No branch, no "unfortunately", no apology template'],
    scoreOn: [
      'Does sentence one prove you heard the specific situation (Lisbon, hotel, kids, the wait)?',
      'Is there a concrete next step with a time on it before you ask anything?',
      'Do the three questions lead to the fork (is the flagged transaction theirs or not) in the fewest steps?',
      'Did you avoid offering anything the client cannot do from Portugal?'
    ],
    goodLooksLike: '"You\'re at a hotel desk in Lisbon with your kids, the card declined, and you\'ve already waited twenty-five minutes. I can see the restriction and I can deal with it on this call. Give me ninety seconds to confirm two things." Then: was the 14:10 transaction at [merchant] yours? (yes: lift the restriction and confirm the hotel can re-run; no: block, report, emergency card). Do you have another card or Apple Pay set up? (fallback for tonight). Is the phone number we have the one in your hand? (so the next alert reaches them).'
  },
  {
    id: 'cards-liability-two-sentences', trackRef: 16, minutes: 3, title: 'Say the liability rule',
    prompt: `A client has just found $1,900 of charges she did not make and asks, voice shaking: "Am I going to have to pay for this?"\n\nAnswer in two sentences a frightened person can hold onto. The rule: a $50 maximum by law unless the bank proves gross negligence, nothing at all after she reports, and the fact that a PIN was used is not proof of negligence. No section numbers out loud.`,
    constraints: ['Two sentences', 'Accurate on the $50 and the $0, and on who has to prove what', 'No "unfortunately", no hedging words'],
    scoreOn: [
      'Did you say she will not be liable for anything from this report onward?',
      'Did you state the $50 maximum honestly rather than promising zero outright?',
      'Did you put the burden of proof on the bank, not on her?',
      'Would a scared person feel safer after hearing it?'
    ],
    goodLooksLike: '"From the moment you reported this, nothing further can be charged to you, and for what already happened the law caps it at fifty dollars at most, and in practice it is usually nothing. The bank would have to prove you were grossly careless to charge even that, and someone using your PIN does not prove it."'
  },
  {
    id: 'cards-fork', trackRef: 16, minutes: 5, title: 'Fraud, dispute or hold',
    prompt: `Three items a client is "disputing" on one call:\n\nA. $9.99 "STRMFLIX" monthly, which she says she cancelled in July. Her account shows she signed up for a free trial in June.\nB. $412.00 at an electronics store in a city she has never visited, yesterday at 02:14.\nC. $180.00 at a hotel, when her receipt says $162.40. The hotel checkout was two days ago.\n\nFor each: classify (fraud, merchant dispute, or authorisation hold), state the first step, and say what you tell her about timing. Then say which one you block the card for.`,
    constraints: ['One classification per item, no hedging', 'The first step for a merchant dispute must involve the merchant', 'Timing must use published figures or the network stages, never "soon"'],
    scoreOn: [
      'Is A a merchant dispute (authorised trial conversion), not fraud?',
      'Is B fraud, with block and report as the first step?',
      'Is C an authorisation hold that will settle, explained rather than disputed?',
      'Did you block the card for B only?'
    ],
    goodLooksLike: 'A: merchant dispute; contact the merchant first and allow 15 to 20 business days for a credit, keep the cancellation confirmation; if nothing, "I disagree with this charge" in the app. B: fraud; block now, report, temporary credit usually within about two business days, fraud update within three business days, new card in 7 to 10 business days. C: an authorisation hold; the posted amount will match the receipt within 3 to 5 days, and if it does not, then it becomes a dispute. Block for B only.'
  },
  {
    id: 'cards-spouse', trackRef: 16, minutes: 5, title: 'The spouse on the line',
    prompt: `"Hi, I'm calling about my husband's card, he's at work. There's a charge on it we don't recognise and I just want to know what it is and get it reversed. We've been married twenty-two years, surely that's enough."\n\nShe is not a joint holder or an authorised user. Write your reply, under 90 words. Then write the one-line note you would log.`,
    constraints: ['Decline to disclose anything, including whether the charge exists', 'Give two real routes', 'No "privacy regulations" wall; explain the why in human terms'],
    scoreOn: [
      'Did you refuse without confirming a single detail about the account?',
      'Did you explain that the rule protects him?',
      'Did you give two routes (him on the line; a power of attorney if he cannot speak for himself)?',
      'Is the logged note factual, with no judgement of her?'
    ],
    goodLooksLike: '"I can hear you want this sorted today, and I want that too. I can\'t discuss the account with anyone but the cardholder, and that\'s what protects him if someone else ever calls about it. Two ways forward: if he can take a call at any point today, I\'ll verify him in a minute and we\'ll deal with it then; if he can\'t speak for himself, I can tell you exactly what a power of attorney needs to look like for us to act on it." Note: third-party caller, declined, routes given, no information disclosed.'
  },
  {
    id: 'cards-investigator', trackRef: 16, minutes: 10, title: 'Inside the scam',
    prompt: `A client calls, calm and cooperative: "I'm just calling to confirm the transfer. Your investigator, Mr. Daniels from the fraud department, called an hour ago and said my card was compromised. He had me move $6,000 to a safe account he set up, and he said to call this number and confirm the reference, which is FRD-22819, and that I'll get a text code to read to him so he can close the case."\n\nYou can see a pending $6,000 e-Transfer from her account. There is no Mr. Daniels. Write what you say in the next sixty seconds, in order, and what you do while you are saying it.`,
    constraints: ['Stop the money first', 'Tell her plainly what is happening without making her feel stupid', 'Never ask for the code; tell her never to read it to anyone', 'Keep her on the line while you route to fraud'],
    scoreOn: [
      'Did you act on the transfer before explaining?',
      'Did you name it as a scam directly, in plain words, with the CAFC-style rules (no remote access, no codes, no handing over cards)?',
      'Did you protect her dignity: this is a professional crime that works on everyone?',
      'Did you keep her on the line and bring fraud in rather than giving her a number to call?'
    ],
    goodLooksLike: '"Stay with me, I\'m stopping that transfer right now while we talk. Nobody from this bank called you today; there is no Mr. Daniels and there is no safe account. That was a scam, and it is a professional one that works on careful people every day, which is why you did what they said. Do not read any code to anyone, including me. I\'m bringing our fraud team onto this call now, and we\'ll go through everything that happened in the last hour together."'
  },
  {
    id: 'cards-replacement-followthrough', trackRef: 16, minutes: 5, title: 'The call that stops tomorrow\'s call',
    prompt: `You have just finished reporting a client's card stolen and ordering a replacement. Before you end the call, list everything that will make this client phone back in the next fourteen days if you do not handle it now, and the one sentence you say about each.\n\nFacts you may use: replacement 7 to 10 business days; emergency replacement in 3 business days or less; the Account Updater refreshes pre-authorised payments with participating merchants but not all; a lock keeps pre-authorised payments flowing; digital wallets may need the card re-added; credits and points must follow to the new account; the client should receive written confirmation.`,
    constraints: ['At least five items', 'One sentence each, client-facing', 'No item may be a question back to the client'],
    scoreOn: [
      'Did you cover pre-authorised payments and name that not every merchant updates?',
      'Did you offer the emergency card and the wallet route for the gap?',
      'Did you mention credits and points moving to the new account?',
      'Did you promise written confirmation and say what it will contain?'
    ],
    goodLooksLike: 'PAPs: "Your recurring bills update automatically with most merchants, but not all, so check your streaming and gym this week and I\'ll tell you which ones to watch." Gap: "If 7 to 10 days is too long, I can order an emergency card, and I can set your phone up to tap today." Wallet: "If Apple Pay stops working, remove the old card and add the new one." Credits: "Any credits or points on the old account follow you; I\'ve checked and will confirm in writing." Written: "You\'ll get a secure message in the next few minutes with all of this and the dates."'
  }
];

export const CARD_SIMS = [
  {
    id: 'sim-cards',
    role: 'Cards advisor, inbound voice, Canadian bank contact centre',
    title: 'Three cards calls in 55 minutes: the decline, the fraud alert, the replacement that went wrong',
    company: 'Lakeshore Bank (fictional), a federally regulated Canadian bank with 2.1 million personal cardholders. Its cards desk handles declines, fraud alerts, disputes, lost and stolen cards, limits and fees. The policy card below is modelled on public RBC pages as of 12 October 2026; in the exercise, treat it as the in-system procedure.',
    minutes: 55,
    scenario: `It is Thursday, 11:40. You are mid-shift on the cards queue and three calls arrive back to back. For each you have the inbound opening, the account notes as they appear on your screen, and the policy card.

The calls are not what they first look like. One caller describes fraud that is partly something else. One has a prior contact note containing a promise the previous advisor should not have made. One is a complaint whether or not anyone calls it that, and the clock on it has already started.

Write each call as you would run it: the first fifteen seconds, the diagnostic questions in order, the resolution path including what you say about liability and timing, and the after-call note. You are not expected to invent policy; where the policy card is silent, say what you would confirm in-system and what you would tell the client meanwhile. Keep all three replies inside the time, as you would on a real shift.`,
    materials: [
      { label: 'Policy card (treat as the in-system procedure for this exercise)', kind: 'copy', content: `LOST / STOLEN: lock in app if misplaced; if lost or stolen, report on the 24-hour line; replacement 7 to 10 business days; emergency replacement 3 business days or less; nothing is charged to the client after the report.
LOCK: declines purchases, cash advances, withdrawals; pre-authorised payments, balance payments and refunds continue. A lock is not a report.
LIABILITY: by law, maximum $50 for unauthorised credit-card use unless the bank proves gross negligence; $0 after the client reports; a PIN having been used is not proof of negligence. Network zero liability applies if reasonable care was taken.
FRAUD DISPUTE: block, report, "I disagree with this charge"; temporary credit usually within about two business days; update within 3 business days.
MERCHANT DISPUTE: client contacts the merchant first; allow 15 to 20 business days for a credit; then dispute in the app with evidence. Visa and Mastercard window: 120 days from the transaction or expected delivery.
AUTHORISATION HOLDS: pending items usually settle within 3 to 5 days; hotels and petrol stations pre-authorise estimates.
FRAUD RESTRICTION: the system may restrict a card when it cannot verify a transaction; an advisor may lift it after verifying the client and confirming the flagged transaction with them.
REPLACEMENT: Account Updater refreshes pre-authorised payments with participating merchants (not all). Credits, points and PAPs must be confirmed moved after any migration. Wallets may need the card re-added.
COMPLAINTS: any expression of dissatisfaction is a complaint; log it; written acknowledgement; referral to a Designated Employee within 14 days if unresolved; 56 days to resolve or close, not pausable; the client may go to the external complaints body (OBSI) within 180 days of the final written response.
VERIFICATION: full verification before any account information, including whether an account exists. No third-party disclosure. Never ask for a one-time code.
VULNERABLE CLIENTS: slow down, open questions, offer a callback, escalate to the fraud and seniors routes; do not offer products.` },
      { label: 'Call 1 — inbound opening and screen notes', kind: 'transcript', content: `CALLER (male, 60s, speaking fast): "My card got declined at the pharmacy just now, for my wife's prescription, in front of a queue. I got a text an hour ago about some charge and I didn't answer it because I thought it was a scam. Now I can't buy her medication. I've been with you people thirty-one years."

SCREEN NOTES:
- Card: Visa, primary cardholder, opened 1995. Limit $12,000, balance $3,140. No missed payments on file.
- 10:38 today: system fraud alert sent by SMS for a $289.00 online purchase at an electronics retailer. No reply received. Card restricted at 10:48 pending verification.
- 10:41 today: $289.00 authorisation at the same retailer, status pending.
- 11:36 today: $64.20 declined, pharmacy.
- Contact phone on file last updated 2019. Mobile number on file ends 0412; the caller's number showing on your screen ends 7781.
- Alerts preference: SMS on.
- Account flag: "Seniors Champion referral available" (standard for clients 60+).` },
      { label: 'Call 2 — inbound opening and screen notes', kind: 'transcript', content: `CALLER (female, 30s, controlled but clipped): "I need to dispute three charges. Someone has been using my card. I've already locked it, so I don't understand how two of them went through after I locked it. I want them reversed today and I want to know how this happened."

SCREEN NOTES:
- Card: Mastercard, primary cardholder. Lock applied 09:02 today via app.
- Disputed items the client listed to the IVR:
  (a) $412.00, electronics store, another province, yesterday 02:14. Card-not-present.
  (b) $14.99, "VIDSTREAM MONTHLY", posted 09:40 today (after the lock). Account shows a free trial started 14 September, converting to paid 14 October.
  (c) $186.30, hotel, posted 10:15 today (after the lock). An authorisation for $186.30 was taken 6 October; the client's app shows a $162.00 receipt image uploaded.
- No prior fraud claims on file.
- Client's recent transactions include three other card-not-present purchases at the same electronics retailer over the past year, all in her home province.` },
      { label: 'Call 3 — inbound opening, screen notes and the prior contact note', kind: 'transcript', content: `CALLER (female, 40s, tired): "This is the fourth time. My card was cancelled for fraud on the 22nd, the replacement went to my old apartment, your colleague told me last Friday a new one was 'on its way to the right address and would be there by Tuesday', it is Thursday, my gym and my daughter's music lessons both bounced yesterday, and I've just been charged a fee by the gym for the failed payment. I'm not angry at you. I'm just done."

SCREEN NOTES:
- Card: Visa, primary cardholder. Original card cancelled 22 September after a confirmed fraud claim ($1,120 refunded 25 September).
- Replacement 1 issued 23 September to the address on file at that date (previous apartment; the client updated her address in the app on 24 September, one day later).
- Contact 1 (26 Sept, phone): client reports non-receipt. Advisor notes "advised 7-10 business days, client to wait."
- Contact 2 (3 Oct, phone): client reports non-receipt again. Note: "Replacement 2 ordered to new address. Advised will arrive by Tuesday 7 Oct." (No emergency replacement was ordered; standard delivery, which the card shows as 7 to 10 business days from 3 October.)
- Contact 3 (8 Oct, chat): "Client asked for update. Advised to continue waiting."
- Replacement 2: issued 3 October, standard delivery. Not yet delivered per tracking; expected window ends 16 October.
- Pre-authorised payments on the old card number: gym ($52, failed 8 Oct, merchant fee charged), music school ($180, failed 8 Oct), two subscriptions (updated automatically via Account Updater).
- Credits from the fraud migration: $1,120 refund shows on the cancelled account. It has not been transferred to the new account.
- No complaint logged on this file. Calls 1 to 3 are coded "replacement enquiry".` }
    ],
    deliverable: `One document with three parts, one per call, 250 to 400 words each. Each part: (1) your first fifteen seconds, verbatim; (2) the diagnostic questions in order, with what each answer decides; (3) the resolution path, including exactly what you say about liability and timing, and what you would confirm in-system before saying it; (4) the after-call note as you would log it, in neutral language with no client data beyond what the screen already holds. For call 3 add the complaint handling: what you log, what the client is told about the 14-day and 56-day rules and OBSI, and the one upstream fix you would raise.`,
    starter: `# Call 1 — the decline at the pharmacy
## First fifteen seconds
## Diagnostic questions, in order
## Resolution: liability, timing, what I confirm in-system
## After-call note

# Call 2 — "someone has been using my card"
## First fifteen seconds
## Diagnostic questions, in order
## Resolution per item (a, b, c)
## After-call note

# Call 3 — the replacement that went wrong
## First fifteen seconds
## Diagnostic questions, in order
## Resolution: the card, the bounced payments, the missing refund
## Complaint handling: log, timelines, OBSI
## After-call note and the upstream fix`,
    rubric: [
      { criterion: 'Reads the real problem under the card problem', weight: 20, meets: 'Each call opens by naming the specific situation and the stakes (the prescription, the lock that "failed", the fourth contact) before any procedure.', exceeds: 'Spots the hidden structure in each call: the unanswered alert that caused the restriction, the lock that was never meant to stop PAPs, the refund that never migrated.' },
      { criterion: 'Fraud versus dispute versus hold, correctly', weight: 25, meets: 'Call 2: (a) fraud, (b) merchant dispute, (c) authorisation hold, with the right first step for each and the lock explained.', exceeds: 'Also notices the client\'s own history at that retailer and verifies (a) rather than assuming, without making her feel accused.' },
      { criterion: 'Liability and timing stated accurately and in writing', weight: 20, meets: 'Says $0 after report and the $50 cap honestly; gives 7 to 10 days, the emergency route, two business days for temporary credit, three for the fraud update; promises written confirmation.', exceeds: 'Flags what must be confirmed in-system before being said, and never repeats the earlier advisor\'s unsupportable "by Tuesday".' },
      { criterion: 'Complaint handling and compliance', weight: 20, meets: 'Call 3 is logged as a complaint; the client is told the 56-day period and the OBSI route honestly; the missing refund is transferred or escalated the same day.', exceeds: 'Recognises the file already has three contacts without a complaint code, that the clock started on 26 September, and raises the address-change-after-issue gap as the upstream fix.' },
      { criterion: 'Craft under pressure', weight: 15, meets: 'No "unfortunately", no policy wall, no branch offered to someone who cannot use one; questions one at a time; the vulnerable-client cues in call 1 are handled with slower pace and a callback offer.', exceeds: 'Each after-call note is factual, neutral and would let the next advisor pick up without the client repeating anything.' }
    ],
    strongResponse: [
      'Call 1 lifts the restriction after verifying the $289 transaction with the client (and considers that it may be his, since it predates the alert by minutes), updates the contact number so the next alert reaches him, offers a callback, and does not sell him anything.',
      'Call 2 blocks and reports (a) only, explains that a lock keeps pre-authorised and recurring charges flowing, routes (b) to the merchant with the trial-conversion explanation, and explains (c) as a hold that will settle to the receipt amount.',
      'Call 3 opens by owning the four contacts and the broken promise without blaming the colleague, orders the emergency replacement, moves the $1,120 refund, fixes or compensates the failed-payment fee path, and logs the complaint with the right start date.',
      'Every timeline given is a published figure or a network stage, and every promise is confirmed in writing.',
      'Nothing is disclosed before verification; no code is requested; no product is offered.',
      'Each after-call note is written so the next advisor needs no archaeology.'
    ],
    commonFailures: [
      'Treating all three of call 2\'s items as fraud and blocking the card for a free-trial conversion.',
      'Telling the caller in call 1 to visit a branch, or lifting the restriction without confirming the flagged transaction.',
      'Repeating "7 to 10 business days" to a client on her fourth contact, instead of the emergency route.',
      'Not noticing the refund that never migrated, which is the FCAC-fine pattern.',
      'Coding call 3 as another "replacement enquiry" because the client said she was not angry.',
      'Saying "the clock starts today" on a complaint whose first expression of dissatisfaction was on 26 September.'
    ],
    trackRefs: [16, 3, 6]
  }
];
