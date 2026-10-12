// Three sections appended to track 16 for a bank cards advisor: the domain, the rules, the next rung.
// Sources, all fetched 12 October 2026: RBC public cardholder pages and the Credit Card Agreement
// (09/2023) and Disclosure Statement (11/2025); Bank Act Part XII.2 and the FCPF Regulations
// (current to 2026-09-21); FCAC guidelines and bulletins; the Canadian Code of Practice for Consumer
// Debit Card Services; Visa and Mastercard dispute rules; OBSI; CBA Seniors Code; CAFC; OPC findings;
// and about 120 client complaints from Trustpilot, creditcardGenius and news archives (Reddit was
// unreachable). Every bank figure must be confirmed in-system before it is said to a client.
export const CARD_SECTIONS = [

  /* ── A ─────────────────────────────── */
  {
    id: 't16-cards', title: 'Cards: the calls a cards advisor actually gets, and what the client wants underneath',
    blocks: [
      { t: 'p', v: 'A cards desk is not a help desk. The caller has usually just been refused money at a till, watched money leave an account, or realised a card that pays their rent is dead. The product knowledge is in the bank\'s systems. What nobody teaches is the shape of the calls: which ones cluster, what the person wants underneath the words, and which service failure turns an ordinary card issue into a regulated complaint.' },
      { t: 'plain', v: 'Read every card call as two problems. The surface problem is the card. The real problem is what the card was about to do: get them home, feed a family, prove to a partner that the money is safe, keep a subscription from bouncing in front of a client. Solve the surface problem fast and name the real one out loud, and the call ends well even when the answer is no.' },
      { t: 'h', v: 'What clients complain about, ranked by frequency' },
      { t: 'table', head: ['Cluster', 'What they say', 'What they actually want', 'Dominant state'],
        rows: [
          ['**Declined on a routine purchase** (false fraud flag)', '"Declined my card for a $60 pizza purchase. 5 hour wait to figure out why."', 'Finish the purchase now; not be embarrassed again tomorrow', 'Angry, embarrassed at the counter'],
          ['**Locked or declined abroad**, cannot reach anyone', '"We have been locked out of our cards while abroad and they are refusing to unlock them."', 'Pay for the hotel tonight with no fallback; regain control without flying home', 'Scared, then furious'],
          ['**Unauthorised charges**; refund slow, partial or refused', '"I got a fraudulent transaction on my debit card EVEN AFTER LOCKING my card."', 'Money back; certainty it stops; not be treated as the suspect', 'Scared, then angry at being doubted'],
          ['**Fraud alert received**, cannot get through, transfer loops', '"You text me a fraud alert and then I cannot get through to anyone for 40 minutes."', 'Answer the bank\'s own question and get back to their day', 'Anxious, then resentful'],
          ['**Replacement or renewal card** slow, missing, wrong address', '"Sent my replacement credit card to the wrong address."', 'A working card before the old one dies or the trip starts', 'Anxious, then angry'],
          ['**Pre-authorised payment declined**, retried, cascading fees', '"They kept trying to take the charge over & over, a total of 48 times."', 'Bills paid without being fined for being short by cents', 'Angry, financially frightened'],
          ['**Dispute** for goods not delivered or merchant failure', '"They didn\'t do a proper investigation and would not provide me with the information I needed."', 'Money back from a merchant who did not deliver; a date', 'Angry, unheard'],
          ['**Card cancelled or not renewed without notice**', '"Cancelled my credit card without notifying me right before a trip."', 'An uninterrupted card, especially for subscriptions and travel', 'Blindsided'],
          ['**Interest after paying in full**; slow payment posting', '"They still charge interest because they take so long to post the payment."', 'Pay in full and owe nothing; understand residual interest', 'Confused, then cheated'],
          ['**Debit daily limit or virtual-debit restrictions**', '"There\'s a limit of debit purchase transaction per day of 2k."', 'One large purchase today', 'Stranded']
        ]},
      { t: 'key', lbl: 'The five failures that convert an issue into a complaint', v: 'Across about 120 complaints the same five things appear, whatever the card issue: transfer loops and dropped calls; a branch-only fix for a client who cannot reach a branch; no date and no written reason for a decision; being treated as the suspect in a fraud case ("called me a scammer"); and silent changes (card cancelled, limit cut, fee added) the client never saw coming. The one glowing dispute review in the corpus praised exactly the opposite: an advisor "gave me a date and it happened on that date". Dates and ownership are the product.' },
      { t: 'h', v: 'The figures to know cold (public RBC pages, fetched 12 October 2026; confirm in-system before quoting)' },
      { t: 'table', head: ['Topic', 'What the public page says', 'Where'],
        rows: [
          ['Lost or stolen', 'Lock first in the app if misplaced; if lost or stolen call the 24-hour line; outside North America call collect. Replacement in 7 to 10 business days; emergency replacement "in 3 business days or less" in most places', 'Lost-or-stolen page; protecting-my-card FAQ'],
          ['What a lock does', 'Credit card: purchases, cash advances and withdrawals decline; **pre-authorised payments, balance payments, refunds and Avion redemptions still go through**. A lock is not a report', 'Lock Card page'],
          ['Zero liability', '"Not liable for fraudulent charges provided you have taken reasonable precautions to protect your PIN and your card." Agreement: no liability absent gross negligence (gross fault in Quebec); none after the report. Quebec: $50 cap even without notice', 'Instant-use page; Agreement s.5 and Quebec annex'],
          ['Fraud alerts', 'SMS from short code 722373 when a transaction looks out of the ordinary; reply to confirm or deny; RBC never asks for a link click or personal information in an alert', 'Alerts page'],
          ['Disputes', 'Contact the merchant first and "allow 15-20 business days for a credit"; then "I disagree with this charge" in the app; temporary credit "usually within about two business days"; fraud-claim update within 3 business days (one article says 3 to 5)', 'Transaction-help page; Dec 2024 article'],
          ['Statement errors', 'Raise within 30 days after the last day of the statement period or the statement is considered accurate', 'Agreement s.25'],
          ['Authorised vs posted', 'Authorised items usually stay pending 3 to 5 days; hotels and petrol stations pre-authorise an estimate, so the amount can differ', 'Cardholders hub'],
          ['Grace and interest', 'Due date at least 21 days after the statement period; extended to 25 days if the previous balance was not paid in full; cash advances carry interest from day one and a per-transaction fee; residual interest can appear on the first statement after a full payment', 'Disclosure Statement; read-your-statement page'],
          ['Minimum payment', 'Interest + fees + instalments + $10 (Quebec: a percentage of the balance, 5 percent for accounts opened on or after 1 Aug 2019)', 'Read-your-statement page'],
          ['Missed minimums', 'Miss twice in 12 months and the purchase and cash-advance rates rise until 12 months of on-time payments; a missed minimum ends any promotional rate and cancels instalment plans', 'Disclosure Statement'],
          ['Over limit', '$29.00 fee where it applies (not Quebec), once per statement period; a purchase may simply be declined instead', 'Payments FAQ; Disclosure'],
          ['Foreign currency', '2.5 percent over the network benchmark rate; shown to six decimals; a merchant\'s own conversion (DCC) stacks on top, which is where "5 percent" complaints come from', 'Disclosure Statement; card information boxes'],
          ['Tap', 'Up to $250 per tap, including Apple Pay and Google Pay; above that, insert', 'Contactless page'],
          ['Replacement and recurring bills', 'All RBC Visa and Mastercard credit cards are enrolled in the Account Updater, which updates pre-authorised payments with participating merchants when the number or expiry changes; opt out by phone. Not every merchant participates, so do not promise it', 'General-questions FAQ; Agreement s.20'],
          ['Digital wallet', 'Instant use with Apple Pay within 48 hours of approval if enrolled in online banking (not RateAdvantage Visa); renewed cards usually update in wallets, some replacements need re-adding', 'Instant-use page; Apple Pay page'],
          ['PIN', 'Mailed separately; set to match an existing debit PIN; change or reset a forgotten PIN at a branch with two pieces of ID; change it before travel if overseas terminals reject long PINs', 'Chip and PIN page'],
          ['Travel', '"You no longer need to tell RBC when you\'ll be away"; fraud monitoring may restrict the card if RBC cannot reach you, so contact details must be current; global toll-free and collect numbers exist', 'Cardholders hub; using-cards-abroad'],
          ['Annual fee', 'Charged the first day of the month after opening and yearly on that date; "non-refundable"', 'Disclosure Statement'],
          ['Rate and term changes', 'At least 30 days written notice of an interest-rate increase; if a change increases your obligations you may refuse and close within 30 days at no cost', 'Disclosure; Agreement s.30'],
          ['Credit limit', 'Change in online banking, by phone or at a branch; based on credit history and income; the bank "may reduce your Credit Limit, without prior notice"', 'Credit-limit FAQ; Agreement s.9']
        ]},
      { t: 'warn', lbl: 'Where the public pages contradict each other, or say nothing', v: 'RBC\'s own pages give the cards line as "24-hour" in one place and "during regular business hours" in another, and list two different sets of Avion Travel hours. A search-engine summary of the dispute flow claims a request is "considered closed after 10 business days"; that sentence appears on no loadable page, so do not teach it. There is no public page explaining why a personal card was declined, and none on credit-card renewal timing. When the public source is silent or split, the in-system procedure is the only thing you may quote.' },
      { t: 'case', title: 'The $4.25 million lesson', v: 'In 2026 FCAC fined RBC $4.25 million because, when fraud was reported and a card account was migrated to a new one, "RBC failed to transfer certain credits from the deactivated accounts to the new ones." 227,947 accounts over 2001 to 2024; $22.4 million transferred and refunded. For an advisor the lesson is a habit: after any fraud migration or replacement, check that credits, points and pre-authorised payments followed the client to the new account, and say that you checked.' },
      { t: 'ge', label: 'Declined abroad, first fifteen seconds',
        good: '"You\'re in Lisbon, the card declined at the hotel, and you need it working tonight. I can see the block. Give me ninety seconds to confirm two things and I\'ll either lift it or tell you exactly what will work instead before we hang up."',
        bad: '"I\'m sorry to hear that. Unfortunately our fraud team has placed a restriction on the card. You would need to visit a branch with two pieces of ID to have it removed."',
        why: 'The first names the place, the stakes and a time-boxed next step. The second offers a branch to someone on another continent, which is the single most-cited failure in the corpus.' },
      { t: 'script', title: 'Fraud alert: the client calls after the text',
        v: [
          { who: 'Client', line: '"I got a text saying there\'s a $412 charge in Calgary. I\'m in Halifax. I\'ve been on hold for forty minutes and I\'m panicking."', tone: 'bad' },
          { who: 'You', line: '"A $412 Calgary charge you didn\'t make, and forty minutes to reach a person. I\'m sorry about the wait; you\'re with the right desk now and this call is where it gets handled."', tone: 'you' },
          { who: 'Why', line: 'Restates the specific fact, owns the wait without excuse, and tells them the loop is over.' },
          { who: 'You', line: '"Two things before anything else: I\'m blocking that card now so nothing further goes through, and you are not liable for anything after this report. Then we\'ll go through the recent transactions together so we catch anything else."', tone: 'you' },
          { who: 'Why', line: 'Safety first, liability stated accurately (no liability after the report; the bank must prove gross negligence to charge more than $50 before it), then the diagnostic.' },
          { who: 'You', line: '"Your new card will come in 7 to 10 business days; if you need one faster I can arrange an emergency replacement, and I\'ll set you up on Apple Pay today if you want to tap in the meantime. The disputed $412 gets a temporary credit, usually within two business days, and you\'ll hear from fraud within three business days. I\'ll put all of that in a secure message to you now."', tone: 'you' },
          { who: 'Why', line: 'Every promise is a figure RBC publishes, offered in writing. Nothing is "soon".' }
        ]},
      { t: 'drill', v: [
        'Take the ten clusters above. For each, write the one sentence that names the real problem (the job), not the card problem.',
        'Pick any figure in the table. Say the client-facing version out loud in under fifteen words, then say where you would confirm it in-system before quoting.',
        'A client says "I locked my card and a charge still went through". Explain in two sentences what a lock does and does not stop, without making them feel stupid.'
      ]}
    ]
  },

  /* ── B ─────────────────────────────── */
  {
    id: 't16-rules', title: 'The rules of the game: liability, disputes, complaints, vulnerable clients, verification',
    blocks: [
      { t: 'p', v: 'Everything in the previous section is bank policy and can change on a Tuesday. This section is the layer underneath: the law and the network rules that bind every Canadian issuer, that a client can hold the bank to, and that an advisor who knows them can use to say "no" fairly and "yes" with confidence. Dated sources throughout; the law is current to 21 September 2026.' },
      { t: 'bench', title: 'Ten figures an advisor must know cold', v: [
        { m: 'Maximum liability for unauthorised credit-card use', val: '$50', note: 'Bank Act s. 627.33(1). Unless the bank proves gross negligence (gross fault in Quebec). The old citation to the Cost of Borrowing Regulations is pre-2022' },
        { m: 'Liability after the client reports the card or PIN lost, stolen or at risk', val: '$0', note: 's. 627.33(2). Use of the correct PIN does not by itself prove negligence, s. 627.33(3)' },
        { m: 'Debit Code response to a reported unauthorised transaction', val: '10 business days', note: 'May pause while a signed statement or affidavit is awaited; the issuer must prove the client contributed, on the balance of probabilities' },
        { m: 'Visa and Mastercard cardholder dispute window', val: '120 calendar days, ceiling 540', note: 'From the transaction or the expected delivery date. Visa verified from its June 2024 guidelines; Mastercard from acquirer documentation' },
        { m: 'Legislated complaint period', val: '56 calendar days', note: 'FCPF Regulations s. 14. "Banks may not pause the 56 day period"' },
        { m: 'Referral of an unresolved complaint to a Designated Employee', val: '14 calendar days', note: 'FCAC guideline' },
        { m: 'Window to go to OBSI after the final written response', val: '180 days', note: 'OBSI can recommend up to $350,000; targets banking investigations in 90 days; recommendations are non-binding and refusals are published' },
        { m: 'Minimum time from statement end to the minimum-payment due date', val: '21 days', note: 's. 627.34(2). No interest on purchases if the full balance is paid by the due date; cash advances never get a grace period' },
        { m: 'Collection contact hours without written consent', val: '7am to 9pm local; Sunday 1pm to 5pm; never on a holiday', note: 'FCPF Regulations, Schedule item 5. There is no federal weekly call-count limit; that is provincial law for agencies' },
        { m: 'Reported fraud losses in Canada, 2025', val: '$704 million, 112,000+ reports', note: 'CAFC. Bank investigator scam alone $37.4M in 2025 and $28.6M in the first half of 2026. CAFC estimates only 5 to 10 percent of victims report' }
      ], source: 'Justice Laws (Bank Act, SOR/2021-181), FCAC, OBSI, Visa, Mastercard via issuer copy, Interac Debit Code via FCAC, CAFC. All fetched 12 October 2026.' },
      { t: 'key', v: '"The PIN was used" is never, on its own, a reason to deny a claim. Bank Act s. 627.33(3) says so, and FCAC Bulletin B-6 adds that banks "must investigate whether circumstances beyond the cardholder\'s control resulted in an unauthorized transaction" and must be able to show the investigative steps taken. The two biggest news stories about RBC cards (an $8,772 PIN-transaction refusal in 2022, a $14,000 lost-debit refusal) are about exactly this line. Know it before a client has to quote it to you.' },
      { t: 'h', v: 'Fraud versus merchant dispute: the fork in every "I didn\'t authorise this" call' },
      { t: 'table', head: ['', 'Fraud (unauthorised)', 'Merchandise or service dispute (authorised but wrong)'],
        rows: [
          ['Who made it', 'Not the client, not an authorised user', 'The client or someone they authorised; includes free-trial conversions and subscriptions'],
          ['Governing rule', 'Bank Act s. 627.33, network zero liability, Debit Code, FCAC B-6', 'Network chargeback reason codes: not received, not as described, defective, credit not processed, cancelled recurring, duplicate'],
          ['Liability', '$50 by law, $0 in practice and after report', 'None; the outcome depends on evidence'],
          ['First step', 'Block, report, investigate. No merchant contact needed', 'Merchant first; the issuer will usually want proof of the attempt'],
          ['Evidence', 'Client statement or affidavit, bank transaction data, sometimes a police report', 'Order confirmation, receipt, correspondence, return tracking, cancellation confirmation, photos'],
          ['Risk', 'Repeated claims with negligence erode protection', 'Disputing a legitimate charge is "friendly fraud" and reverses against the client'],
          ['Timeline to give', 'Report now; temporary credit per bank policy; update within the bank\'s stated days', 'A straightforward dispute usually settles in 30 to 45 days, a contested one in 60 to 90, arbitration can run months. Give the stages, not a date you cannot keep']
        ]},
      { t: 'warn', v: 'Visa\'s own position, stated to CBC Marketplace: where a cardholder "expressly authorizes charges by agreeing to terms and conditions and provides their information to a merchant, it is not fraud, so does not fall under Zero Liability." The client who signed up for a free trial and forgot has a merchant dispute, and telling them it is fraud sets up a reversal and a worse call later.' },
      { t: 'h', v: 'A complaint is any expression of dissatisfaction' },
      { t: 'steps', v: [
        { n: 1, name: 'Recognise and log it', body: 'Even if you resolve it on the call. FCAC\'s 2025 review found banks "did not treat every expression of dissatisfaction as a complaint" and named it as a failure.' },
        { n: 2, name: 'Confirm the written acknowledgement', body: 'With the date received, the process, the timelines and the external body\'s contact details. Bank Act s. 627.43(4).' },
        { n: 3, name: 'Fourteen days to a Designated Employee', body: 'If it cannot be resolved by the first employee. Offer the escalation before then if the client asks.' },
        { n: 4, name: 'Never say the clock is paused', body: 'It cannot be. Fifty-six days from first contact, through any channel, including a bot.' },
        { n: 5, name: 'Never call internal staff an "ombudsman"', body: 's. 627.43(2). RBC\'s senior office is the Client Complaints Appeal Office; the independent body is OBSI. Say both names correctly.' },
        { n: 6, name: 'Know the exits', body: 'OBSI within 180 days of the final written response, or once 56 days have passed; free, in both official languages. FCAC supervises but "does not resolve individual disputes".' }
      ]},
      { t: 'case', title: 'RBC\'s own ladder, from its complaint brochure and the 2025 CCAO report', v: 'Start at the source (secure message, the cards line, or the branch); escalate to RBC Client Care; appeal to the Client Complaints Appeal Office, "the most senior designated office", which reviewed 2,978 banking complaints in 2025 with an average review of 46 days and credit cards at 16.9 percent of volume; then OBSI. The CCAO does not intervene in credit adjudication, so a declined limit increase is a different conversation from a mishandled dispute, and the advisor should route each honestly.' },
      { t: 'h', v: 'Vulnerable clients: what the code and the law expect of you' },
      { t: 'list', v: [
        '**Seniors Code (CBA, 2019), Principle 5:** where a bank "becomes aware of the likelihood of financial harm to a senior due to financial abuse, fraud or scams, banks will endeavour to mitigate the potential for financial harm, while respecting clients\' privacy, and security and autonomy." A senior is 60 or over, transacting for non-business purposes. Every bank has a Seniors Champion and an escalation route; know yours.',
        '**Red flags on a cards call:** charges the client cannot explain and does not seem to understand; a third party prompting answers in the background; a sudden new authorised user; "my nephew needs the PIN"; a transfer or cash advance the client describes as instructed by "the bank\'s investigator"; pressure to act before a deadline.',
        '**What you may do:** slow the call down, ask open questions, offer a callback, decline to process while verification is incomplete, and escalate. PIPEDA s. 7(3)(d.3) lets the bank disclose without consent to a government institution or next of kin where there are reasonable grounds to believe the client is a victim of financial abuse. The bank decides that; the advisor escalates.',
        '**Appropriate products (Bank Act s. 627.06):** every product offered must suit the client\'s circumstances, "even if the consumer requested" it, and incentives must not interfere. On a cards desk the exposure is balance protection, limit increases (express consent required; card use is not consent, s. 627.32) and consolidation offers to someone in distress.'
      ]},
      { t: 'h', v: 'The bank investigator scam, because you will get this call this month' },
      { t: 'p', v: 'CAFC\'s description: an automated call or spoofed number claiming to be the bank, police, a credit bureau or Amazon, reporting fraud; the caller asks for remote access, or for the one-time code "to confirm your identity", or for the client to move money "to protect your account", or to hand the card to a courier. The scammer may recite the first digits of the card, which are the BIN shared by thousands. The rules to give every client, in CAFC\'s words: "Never provide remote access"; "Don\'t share codes received via text message or email with anyone"; "Institutions or police will never request you to turn over your bank card." Hang up and call the number on the back of the card. If a client calls you to "confirm the transfer the investigator asked for", you are inside the scam: stop the transfer, say plainly what is happening, and route to fraud while they are still on the line.' },
      { t: 'h', v: 'Verification: five rules the privacy commissioner has enforced' },
      { t: 'list', v: [
        'Verify the caller fully before saying anything about the account, including whether an account exists. A caller\'s self-identification is not verification (OPC case 2002-100: a last name confirmed by the caller\'s mother, balance disclosed to the wrong person).',
        'A spouse, parent or adult child has no right to any account information unless they are a joint holder, a named authorised user for what the agreement permits, or an attorney under a power of attorney the bank has accepted (cases 2002-108, 2003-175).',
        'Marriage is not authority. "She\'s my wife" is not consent.',
        'A document described on a call is not authority until the bank has verified it under its procedure (2003-181). The bank may require a copy of a POA before acting on a relative\'s instruction (2004-278).',
        'One-time passcodes are the client\'s own authentication. Never ask a client to read one the bank did not just send, and never accept one relayed by a third party.'
      ]},
      { t: 'ge', label: 'Spouse on the line',
        good: '"I can hear you\'re trying to sort this out for him, and I want to help. I can\'t discuss the account with anyone but the cardholder; that protects him as much as anyone. If he\'s there, put him on and I\'ll verify him in a minute. If he can\'t speak for himself, I\'ll tell you exactly what a power of attorney needs to look like for us to act on it."',
        bad: '"Unfortunately due to privacy regulations I am unable to disclose any information regarding this account to a third party."',
        why: 'Same refusal. The first keeps the relationship and gives two routes; the second is the "wall" that produces the complaint.' },
      { t: 'drill', v: [
        'Say the liability rule to a frightened client in two sentences: the $50 cap, the $0 after report, and who has to prove what. No legal citations out loud.',
        'Three transactions: a $9.99 charge from a streaming service the client "cancelled", a $412 purchase in a city they have never visited, and a $180 hotel amount that differs from the receipt. Classify each as fraud, merchant dispute or authorisation hold, and give the first step for each.',
        'A client says "I\'ve complained three times and nothing happens". Write what you log, what you tell them about the 14 and 56-day rules, and the OBSI sentence, in under 80 words.'
      ]}
    ]
  },

  /* ── C ─────────────────────────────── */
  {
    id: 't16-growth', title: 'From advisor to specialist: building the next rung while you are on this one',
    blocks: [
      { t: 'p', v: 'The move from advisor to senior advisor or specialist is decided on evidence you produce while still doing the advisor job. Quality in the top quartile with a stable handle time, peers who learn from you, procedures you wrote that do not need rework, and judgement on exceptions. None of that appears by accident. Track 20 covers the ladder in full; this section is the first ninety days on a cards desk, done so the second rung is already half built.' },
      { t: 'table', head: ['What gets you promoted', 'How to produce the evidence this quarter'],
        rows: [
          ['Top-quartile quality with stable AHT', 'Listen to one of your own calls a week against the scorecard before QA does. Score it honestly, write the one thing you would change, do it on the next ten calls. Never cut AHT by transferring or skipping the diagnostic question'],
          ['Peer teaching', 'When a colleague asks how you handled a call type, write the answer as a note and share it. Three notes a month is a teaching record'],
          ['Procedures that do not need rework', 'For the call type the team keeps getting wrong, write the one-page procedure in the client\'s words first (what they say) and the resolution second. Mark it Not Validated and give it to the SME. That is KCS Contributor behaviour, and it is the most visible rung-2 evidence there is'],
          ['Judgement on exceptions', 'Keep a log, with no client data, of the exceptions you asked for and why: the waived fee, the emergency card, the escalation you pushed. Patterns in that log are your case for the fraud or disputes queue'],
          ['FCR ownership', 'Before ending any call, ask yourself what would make this person call back tomorrow, and handle it now: the PAP that will bounce, the points that did not migrate, the written confirmation they will want']
        ]},
      { t: 'h', v: 'A weekly self-coaching routine that fits around a queue' },
      { t: 'steps', v: [
        { n: 1, name: 'Monday: pick one behaviour', body: 'From last week\'s QA flags or your own review. One, not three. Write it where you can see it.' },
        { n: 2, name: 'Daily: three-line debrief', body: 'Pattern only, never client data: issue type, what worked, what to look up. The Cards Advisor app blocks digits that look like card numbers for this reason.' },
        { n: 3, name: 'Midweek: one call-type note', body: 'A procedure note in the requestor\'s words. Share it.' },
        { n: 4, name: 'Friday: the stop list', body: 'One thing you did this week that you will stop. Usually a phrase ("unfortunately, as per our policy") or a habit (holding to check something you could have known).' },
        { n: 5, name: 'Monthly: ask for the numbers', body: 'Your FCR, CSAT, QA distribution and the repeat-contact rate on your calls. If your lead cannot produce them, that is useful information about the unit.' }
      ]},
      { t: 'h', v: 'Conduct lines a cards advisor must never cross' },
      { t: 'list', v: [
        'No balance-protection, limit-increase or consolidation offer to a client in distress, in a fraud call, or who has not asked. Appropriateness assessment applies "even if the consumer requested the product" (FCAC), and sales incentives "should not conflict with these objectives".',
        'No promise of a timeline the published or in-system procedure does not support. "Seven to ten business days" is a promise; "soon" is a future complaint.',
        'No description of internal escalation staff as independent, and no "the clock is paused".',
        'No disclosure to anyone but the verified cardholder, however sympathetic the caller.',
        'No note in your own records that identifies a client. Pattern notes only.'
      ]},
      { t: 'warn', lbl: 'The AHT trap', v: 'The fastest way to a good handle time is to transfer the hard calls and skip the question that would have found the second fraudulent charge. Both show up within a month as repeat contacts, a complaint, or a QA finding. Leads who understand the metrics ladder (track 20) read AHT next to FCR; make sure yours are read together by producing the FCR evidence yourself.' },
      { t: 'rubric',
        j: 'Reads the procedure to the client. Transfers anything unfamiliar. Quotes figures from memory without a source. Treats a fraud call as a form to complete.',
        c: 'Names the real problem under the card problem, runs the fraud-versus-dispute fork correctly, states liability accurately, gives published timelines in writing, logs every expression of dissatisfaction, verifies before disclosing.',
        s: 'Handles the scam-in-progress call, the vulnerable client and the third-party caller by policy without losing the person; checks that credits and PAPs followed a replacement; writes the procedure note the team adopts; owns FCR on their calls; and can say which bank figure they would not quote because the public source is split.' },
      { t: 'drill', v: [
        'Write the procedure note for "card declined abroad, mobile banking also locked", in the client\'s words first. Under 200 words. Mark it Not Validated.',
        'List five phrases you have heard on a cards desk this week that belong on a stop list, and the replacement for each.',
        'Write your exception log entry for the last time you asked for something outside the standard path: what, why, outcome, and what pattern it belongs to.'
      ]}
    ]
  }
];
