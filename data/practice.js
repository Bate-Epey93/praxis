// Practice content: timed drills and full take-home simulations.
// Seed set — extended by generated content in data/practice-gen.js.
import { GEN_DRILLS, GEN_SIMS } from './practice-gen.js';

const SEED_DRILLS = [
  {
    id: 'cut-thirty', trackRef: 6, minutes: 5, title: 'Cut it by thirty percent',
    prompt: `Rewrite this paragraph, keeping every fact, in at least 30 percent fewer words:\n\n"It is important to note that many organisations are currently experiencing significant delays in their month-end close processes, often taking as long as six days to complete. Our platform has been designed to help finance teams to dramatically accelerate this process, and many of our customers have reported that they are now able to close significantly faster than they were previously able to."`,
    constraints: ['Active voice throughout', 'Keep the six-day figure', 'The last word of your first sentence must be the one you want remembered'],
    scoreOn: [
      'Did you cut at least 30 percent of the words?',
      'Is every sentence active?',
      'Does an emphatic word land at the end of a sentence?',
      'Did you avoid adding a claim that was not in the original?'
    ],
    goodLooksLike: 'Around 20 words, two sentences, no adverbs. For example: "Month-end close takes most finance teams six days. Ours close in two."'
  },
  {
    id: 'refuse-well', trackRef: 16, minutes: 5, title: 'Refuse without escalating',
    prompt: `A customer writes: "I want a full refund. I've barely used it for six months and this is ridiculous."\n\nThe refund window is 30 days. You cannot refund six months. You can cancel immediately so nothing renews, refund the current month which billed two days ago, and offer a session with the onboarding lead.\n\nWrite the reply. Under 90 words.`,
    constraints: ['Answer the question in the first sentence', 'No policy language and no "unfortunately"', 'Offer two real options and end with one question'],
    scoreOn: [
      'Is the "no" in the first sentence?',
      'Did you give the real reason in one sentence, without hiding behind policy?',
      'Are there two concrete alternatives?',
      'Does it end with a single question rather than a list?'
    ],
    goodLooksLike: 'Warm, firm, specific. "I can\'t refund the six months, the window is 30 days and I don\'t want to promise something finance would reverse. Here\'s what I can do…"'
  }
];

const SEED_DRILLS_2 = [
  {
    id: 'swap-test-hero', trackRef: 4, minutes: 5, title: 'Break it with the swap test',
    prompt: `Here is the hero copy from a mid-market payroll product:\n\n"The modern payroll platform built for growing teams. Powerful automation, expert support, and the compliance coverage you need. Trusted by thousands of businesses."\n\nStep 1: put a competitor's name on it. Does anything break?\nStep 2: rewrite the hero so it would be false if a competitor published it. You may invent one specific, plausible mechanism and one number, and you must say which you invented.`,
    constraints: ['Under 30 words for the rewrite', 'Name what the buyer stops doing, not what the product has', 'Mark your invented facts with [assumed]'],
    scoreOn: [
      'Would your rewrite become false if a competitor published it?',
      'Does it name a specific mechanism rather than a category benefit?',
      'Did you label the facts you invented instead of smuggling them in?',
      'Did you avoid the words powerful, modern, trusted and platform?'
    ],
    goodLooksLike: 'Something a competitor could not honestly say. "We file your first payroll before your next payday or we pay the late penalty [assumed guarantee]" beats any arrangement of trusted, powerful and modern.'
  },
  {
    id: 'category-tradeoff', trackRef: 4, minutes: 10, title: 'Pick the shelf, pay the price',
    prompt: `A tool records customer interviews, transcribes them, and clusters what people say into themes.\n\nWrite three different market category framings for it. For each, in one line: what it now gets compared to, which evaluation criterion you inherit, what you win on, what you lose on, and the education cost.\n\nThen pick one and say why in a sentence.`,
    constraints: ['Three genuinely different shelves, not three names for one', 'Every framing must state a loss, not only a win', 'One-sentence recommendation at the end'],
    scoreOn: [
      'Are the three framings actually different comparison sets?',
      'Did each one name a criterion you inherit and a real loss?',
      'Did you state the education cost of the least conventional option?',
      'Is your recommendation a choice rather than a summary?'
    ],
    goodLooksLike: 'Transcription tool competes on price per hour and loses to commodity vendors. Research repository competes on integrations and search. A new category costs twelve months of teaching before anyone searches for it. The senior move is naming the trade-off, not finding the clever name.'
  },
  {
    id: 'proof-stack-rank', trackRef: 5, minutes: 5, title: 'Rank the proof',
    prompt: `Claim: "Teams close their month in two days instead of six."\n\nAvailable evidence:\nA. A logo wall of eleven customers\nB. A named controller quote with the numbers and the doubt she had\nC. "Trusted by 3,000 finance teams"\nD. A 90-second recording of a reconciliation running on the viewer's own exported file\nE. A G2 category badge\nF. Median 2.1 days across 340 accounts, methodology linked\n\nRank all six strongest to weakest for a sceptical finance buyer. Then write the two sentences you would put directly under the claim.`,
    constraints: ['Rank all six, no ties', 'The two sentences must use evidence, not adjectives', 'One sentence maximum for your ranking rationale'],
    scoreOn: [
      'Did demonstration and original data outrank the badges and logo wall?',
      'Do your two sentences sit adjacent to the claim they prove?',
      'Did you include a number with its source?',
      'Did you resist adding a superlative?'
    ],
    goodLooksLike: 'D, F, B, C, A, E for most B2B buyers. Underneath the claim: "Median 2.1 days across 340 finance teams, methodology below. Run it on your own export and watch it reconcile in 90 seconds."'
  },
  {
    id: 'objection-mechanism', trackRef: 5, minutes: 10, title: 'Answer with a mechanism',
    prompt: `Verbatim objection from a sales call, said by an operations lead at a 60-person company:\n\n"Honestly the tool looks fine. My worry is that migration lands on me, it takes three weeks, and if the numbers come out wrong in month one it is my name on it."\n\nWrite the rebuttal using acknowledge, reframe, evidence, next step. Then write the one-line version for a comparison page, and name the proof asset you would need to build.`,
    constraints: ['No reassurance without a mechanism attached', 'Under 90 words for the full rebuttal', 'Name the proof asset explicitly, even if it does not exist yet'],
    scoreOn: [
      'Does the answer dissolve the fear with a mechanism rather than an adjective like "easy"?',
      'Did you acknowledge the specific fear, which is blame, not effort?',
      'Is there a concrete next step rather than "get in touch"?',
      'Did you name the proof asset that would make this credible?'
    ],
    goodLooksLike: 'The fear is blame, not work. A mechanism removes it: a named engineer does the migration, you verify against the old system before anything is switched off, and you keep the old tool running for thirty days. Proof asset: a parallel-run case study from a company the same size.'
  }
];

const SEED_SIMS = [];

const byId = arr => id => arr.find(x => x.id === id);

export const DRILLS = [...SEED_DRILLS, ...SEED_DRILLS_2, ...GEN_DRILLS];
export const SIMS = [...SEED_SIMS, ...GEN_SIMS];

export const drillById = byId(DRILLS);
export const simById = byId(SIMS);
