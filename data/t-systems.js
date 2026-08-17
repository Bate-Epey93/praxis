// Tracks 9, 10, 13, 14 · Systems: content, discovery, measurement, UX
export default [

/* ══════════════════ 9 ══════════════════ */
{
  id: 9, phase: 'Systems', color: '--gr', roles: ['cs', 'gtm', 'co'],
  title: 'Content Strategy & Editorial Systems',
  sub: 'Design the machine, not the blog post',
  time: 'Study 3h · Artifact 6–8h',
  prereq: 'Tracks 3, 5',
  feeds: 'Feeds tracks 10, 13, 17',
  sources: 'Content ops practice · topical authority research · Naval on leverage',
  sections: [
    {
      id: 't9-strategy', title: 'Strategy is not a calendar',
      blocks: [
        { t: 'p', v: 'A calendar answers "what publishes Thursday." A strategy answers "why this set of topics, for whom, to produce which business outcome, and what we will stop doing." The 2026 job market has moved decisively toward the second: content roles are now scored on owning discovery and driving results, not on output volume.' },
        { t: 'h', v: 'The chain that must connect end to end' },
        { t: 'steps', v: [
          { n: 1, name: 'Business goal', body: 'Pipeline, activation, retention, or brand demand. Pick one primary. "Awareness" alone is not a goal; it is a stage.' },
          { n: 2, name: 'Audience + job', body: 'Which segment, at which awareness level, with which job (tracks 2–3).' },
          { n: 3, name: 'Pillars', body: '3–5 territories you intend to own. Each defensible: real demand, real right to speak, real business linkage.' },
          { n: 4, name: 'Clusters', body: 'Hub-and-spoke topic architecture per pillar, mapped to intent and funnel stage.' },
          { n: 5, name: 'Formats and channels', body: 'Chosen from where the audience already is, not from what you enjoy making.' },
          { n: 6, name: 'Measurement', body: 'Leading indicators weekly, business outcome quarterly, with an attribution method chosen in advance.' },
          { n: 7, name: 'Stop list', body: 'What you will kill or refuse. A strategy without a stop list is a wish list.' }
        ]},
        { t: 'formula', label: 'Pillar test', expr: 'Demand (search + social volume) × Right to speak (proof, expertise, data) × Business linkage (does the buyer of this topic buy the product?)',
          example: 'High demand + no right to speak = commodity content nobody cites. High right to speak + no business linkage = interesting content that never touches revenue. Any pillar failing one of the three gets cut.' },
        { t: 'key', v: 'The difference between a $65K content manager and a $110K+ content strategy lead, in one sentence: the manager fills the calendar; the lead can defend, with numbers, why three pillars exist and four others were rejected.' }
      ]
    },
    {
      id: 't9-architecture', title: 'Topic architecture and topical authority',
      blocks: [
        { t: 'p', v: 'Search and AI systems both reward demonstrated depth on a topic over scattered one-off posts. Architecture is how depth becomes legible to machines and useful to humans.' },
        { t: 'list', v: [
          '**Hub (pillar page):** the comprehensive resource for a territory. Broad, structured, internally linking to every spoke.',
          '**Spokes (cluster pages):** specific questions, comparisons, how-tos, and use cases, each linking back to the hub with descriptive anchor text.',
          '**Coverage rule:** cover the full intent spectrum for the territory — informational, comparative, transactional — or a competitor becomes the default answer for the parts you skipped.',
          '**Internal linking is the architecture**, not decoration. Orphan pages do not rank and do not get cited.',
          '**One page per intent.** Two pages targeting the same intent cannibalise each other and split the signal; consolidate and redirect.'
        ]},
        { t: 'table', head: ['Intent', 'Query shape', 'Content type', 'Funnel stage'],
          rows: [
            ['Informational', '"how to reconcile month end"', 'Guide, framework, teardown', 'TOFU'],
            ['Comparative', '"X vs Y", "alternatives to X"', 'Comparison page, honest matrix', 'MOFU'],
            ['Commercial investigation', '"best close automation tools"', 'Category roundup, buyer\'s guide', 'MOFU'],
            ['Transactional', '"[brand] pricing"', 'Pricing page, demo request', 'BOFU'],
            ['Navigational', '"[brand] login"', 'Product/support surface', 'Retention']
          ]},
        { t: 'h', v: 'Content-market fit' },
        { t: 'p', v: 'The content equivalent of product-market fit: a repeatable topic-format-channel combination that reliably produces the outcome. Signs you have it — the same shape of asset keeps working, people cite it without prompting, and sales starts sending it unprompted. Until then you are still testing, and you should say so in the plan.' },
        { t: 'warn', v: 'Publishing volume without architecture produces a library nobody can navigate and search engines cannot interpret. Before adding 40 posts, audit: how many existing pages compete for the same intent, and how many are orphaned?' }
      ]
    },
    {
      id: 't9-seoaeo', title: 'Writing for SEO and AEO',
      blocks: [
        { t: 'p', v: 'This is the writer\'s half of search, not the technical half. You own intent, structure, claims, headings, anchors, freshness and whether the page deserves to exist. Engineering owns rendering, speed, status codes and infrastructure. Almost everything below comes from Google\'s own published documentation and rater guidelines, which is worth knowing because a large share of what gets sold as SEO advice contradicts them.' },
        { t: 'plain', v: 'Two jobs, one page. **SEO** is making sure the page is the best available answer for a query someone actually types. **AEO** is making that answer liftable — a self-contained unit a search feature or an assistant can quote and attribute. Done properly they are the same act of writing, because both reward the same thing: saying the useful part first, in the reader\'s words, with something specific in it.' },

        { t: 'h', v: '1 · Read the SERP for intent, not for competitors' },
        { t: 'p', v: 'Google\'s Search Quality Rater Guidelines (general guidelines, section 12) describe how raters are told to interpret a query. Borrow the ladder before you write:' },
        { t: 'steps', v: [
          { n: 1, name: 'Dominant interpretation', body: 'What most people mean by this query, in one plain sentence.' },
          { n: 2, name: 'Common interpretations', body: 'What many or some people mean. A query can carry several legitimately.' },
          { n: 3, name: 'Reasonable minor interpretations', body: 'Helps fewer people but still deserves a place in a result set.' },
          { n: 4, name: 'Discard unlikely and no-chance readings', body: 'Google\'s own example: almost nobody searching "hot dog" wants a result about an overheated pet.' },
          { n: 5, name: 'Classify the intent type', body: 'Know, Know Simple (a correct answer that fits in one or two sentences), Do, Website, or Visit-in-person. Most queries are not Know Simple — but when yours is, answer it in the first sentence.' },
          { n: 6, name: 'Read the SERP for format, not for rivals', body: 'Listicles, product pages, forum threads, videos, tools — that is Google\'s read on the expected form. Then decide honestly whether your planned page can be a *very helpful* result for the dominant interpretation.' }
        ]},
        { t: 'warn', lbl: 'Pitfall', v: 'Auditing the SERP for competitors instead of intent. Google explicitly cautions its own raters not to rely on the top results, because a query may carry meanings the SERP does not show, and not to assume a page is good just because it ranks. Copying the top three reproduces their interpretation *and* their blind spots — and produces exactly the commodity content Google\'s AI-features guidance tells you to avoid.' },

        { t: 'h', v: '2 · Titles and H1s: you are submitting, not publishing' },
        { t: 'p', v: 'Google draws the displayed title link from several sources — the title element, the main visual title, heading elements, `og:title`, prominent styled text, external anchor text — and rewrites when they conflict. Its documentation names seven triggers: the title is **incomplete**, **outdated** relative to the page, **inaccurate**, **repeated boilerplate**, **unclear because multiple headings carry equal visual weight**, in the **wrong language or script**, or **redundantly repeats the site name**.' },
        { t: 'bench', title: 'Rewrite rates (Zyppy study of 80,959 URLs across 2,370 sites, Q1 2022)',
          v: [
            { m: 'Titles rewritten at least partially', val: '61.6%' },
            { m: 'Lowest rewrite band', val: '51–60 characters', note: '39–42% rewrite rate' },
            { m: 'Titles of 70+ characters', val: '99.9% rewritten' },
            { m: 'Square brackets', val: '77.6% rewritten', note: 'bracketed text removed 32.9% of the time; parentheses 61.9% / 19.7%' },
            { m: 'Pipe separator removed or replaced', val: '41.0%', note: 'dash separator 19.7%' }
          ],
          source: 'Independent 2022 study — treat as a rewrite-risk heuristic, not a Google rule. Google states there is no limit on title length and truncates the displayed link to fit the device.' },
        { t: 'ge', label: 'Title element plus the H1 on the same page',
          good: 'Title: "Asana vs Monday: Pricing, Limits and Best Fit - Toolshed" (56 characters) · H1: "Asana vs Monday: Pricing, Limits and Best Fit"',
          bad: 'Title: "Asana vs Monday.com vs ClickUp vs Trello: The Ultimate 2026 Project Management Software Comparison Guide [Updated] | Toolshed Blog" · H1: "Which Tool Should Your Team Actually Use?"',
          why: 'The failing version trips five documented rewrite triggers at once: length past 70 characters, square brackets, a pipe separator, repeated boilerplate, and an H1 that hands Google a competing title candidate. The working version sits in the low-rewrite band, uses a dash, and its H1 is the same string minus the site name, so Google\'s sources agree with each other.' },
        { t: 'key', v: 'The failure mode here is invisible: the page ranks, click-through underperforms, and nobody checks whether the *displayed* title is the one they wrote. Audit the title Google actually shows before rewriting anything.' },

        { t: 'h', v: '3 · Meta descriptions: a conditional pitch' },
        { t: 'list', v: [
          'Google creates snippets **primarily from page content**, and uses your description only when it judges that more accurate. It is not a ranking factor and not a guaranteed slot.',
          'Identical or near-identical descriptions across a site are explicitly called out as unhelpful. Either write per page or let Google generate.',
          'Where to spend the effort: high-intent commercial pages, and pages whose on-page opening is weak. If the body copy already answers the query in its first sentence, hand-writing descriptions at scale is low-value work.'
        ]},
        { t: 'ge', label: 'Meta description for a page about content briefs',
          good: '"A brief has to survive an editor, a legal reviewer and a subject expert. This one names the four sections that usually get cut, and what to put in each so they don\'t."',
          bad: '"Looking for the best content brief template? Our comprehensive guide covers everything you need to know. Read on to discover how our expert team helps you boost your SEO rankings today!"',
          why: 'The failing version would fit any page on the site — which is precisely what Google says is unhelpful when individual pages appear in results, so it gets discarded and the writer loses the one line they controlled. The working version makes a specific, checkable claim about what is on the page.' },

        { t: 'h', v: '4 · Headings carry the argument' },
        { t: 'p', v: 'Google\'s starter guide is blunt: semantic heading order is excellent for screen readers, but from Search\'s perspective out-of-order headings do not matter. So treat hierarchy as an accessibility and clarity discipline (track 14), and treat the *wording* as the real work — subheads that assert rather than label.' },
        { t: 'ge', label: 'H2 set for a Know query with no single right answer',
          good: '"Refresh when the page still ranks in the top 20" · "Rewrite when the SERP no longer shows the format you published" · "Consolidate when two of your URLs get impressions for the same query" · "Delete only when nothing on the page can be salvaged"',
          bad: '"What Is Content Decay?" · "Why Is Content Decay Important?" · "Content Decay Best Practices" · "Content Refresh FAQ"',
          why: 'Reading only the working H2s gives you the decision. Reading only the failing set gives you a table of contents and leaves the reader needing to search again — one of Google\'s own warning-sign questions. The failing shape is also the default output of a generative model, which is exactly what the guidance tells you not to publish.' },

        { t: 'h', v: '5 · Keywords: write the claim, not the placement' },
        { t: 'list', v: [
          'Google Search does not use the keywords meta tag, and its own "don\'t focus on this" list includes meta keywords, keyword stuffing, word-count targets, heading order, and treating E-E-A-T as a direct ranking factor.',
          'Anticipate the words your reader would search for and use them naturally — then stop worrying about variations you did not anticipate.',
          'A brief that specifies "primary keyword in the H1, first 100 words and two H2s" produces robotic copy, because it tells the writer where to put words instead of what to argue.',
          'Brief the **claim**, the **dominant interpretation**, and the **questions the page must genuinely answer**. That is the fix for AI-flavoured sameness as much as for search.'
        ]},

        { t: 'h', v: '6 · Query fan-out: coverage without padding' },
        { t: 'p', v: 'Google documents that AI Overviews and AI Mode use a **query fan-out** technique, issuing multiple related searches on the user\'s behalf. The practical translation for a writer:' },
        { t: 'steps', v: [
          { n: 1, name: 'Write out the fanned-out questions', body: 'The related searches a system would plausibly issue around your head query.' },
          { n: 2, name: 'Sort them three ways', body: 'This page answers it · a linked page answers it · nobody on our site does (that is your next brief).' },
          { n: 3, name: 'Answer only what the page genuinely owns', body: 'Well, and better than a model could produce from thin air.' },
          { n: 4, name: 'Link the rest with descriptive anchors', body: 'Anchor text names the subtopic. Internal linking is the architecture, not decoration.' },
          { n: 5, name: 'Stop there', body: 'Google states there are no additional requirements to appear in AI Overviews or AI Mode, and that you do not need new machine-readable files, "AI text files", special markup or Markdown to be eligible — a page needs to be indexed and eligible for a snippet. On `llms.txt` specifically: proposed in 2024, published by several AI labs\' own docs sites, and described by Google as speculative with no AI systems using it. Ship it if it is cheap; do not sell it as a strategy.' }
        ]},
        { t: 'warn', v: 'Confusing coverage with completeness. Fan-out rewards answering the adjacent questions you can answer well; it does not reward a 4,000-word page covering everything. The rater guidelines\' lowest-quality trigger is content that **adds no value compared to similar pages**, and a padded page hits that trigger faster than a short focused one.' },

        { t: 'h', v: '7 · Answer-first writing (the AEO half)' },
        { t: 'ge', label: 'Opening two sentences on a Know Simple query',
          good: '"A title tag has no hard character limit. Google truncates the displayed title to fit the device width, and in practice titles between 51 and 60 characters are the least likely to be replaced with one Google writes itself."',
          bad: '"In today\'s ever-evolving search landscape, title tags remain one of the most important on-page SEO elements. Understanding title tag length is crucial for any marketer who wants to maximise their organic visibility. In this comprehensive guide, we\'ll explore everything you need to know."',
          why: 'The working version delivers the answer in sentence one and qualifies it in sentence two, so the page can be the helpful result *and* be quoted as a supporting source. The failing version delays the answer through three sentences of preamble, raising the odds the reader bounces and the odds a snippet gets built from somewhere further down the page.' },
        { t: 'list', v: [
          'Question as the heading, phrased the way people ask it; a complete answer directly beneath, before any framing or roadmap.',
          '**Keep the block self-contained.** No pronouns pointing backwards, no "as noted above", no "in the previous step". The chunk travels alone, so name the entity: "Praxis stores notes locally" beats "It stores notes locally".',
          'Order it answer → caveat → working → edge cases. That order survives truncation.',
          'Repeat the pattern once per H2, so the page is a stack of independent answers rather than one long argument.',
          'Do not withhold the answer to protect the click. The withheld answer loses the citation *and* the click.',
          'Self-test: paste one section into a chat window with only its heading as the prompt. If it does not answer, it will not be extracted.'
        ]},
        { t: 'h', v: 'Display budgets: format to the cap, not to taste' },
        { t: 'bench', title: 'Measured display limits for featured snippets (Portent, 7,854 snippets from 30,000 keywords)',
          v: [
            { m: 'Paragraph snippet', val: '~40–55 words', note: 'Very rarely exceeds 320 characters; two to three sentences' },
            { m: 'List snippet', val: '8 items maximum shown', note: '96% had a labelled heading directly above the list; items typically 10–50 characters' },
            { m: 'Table snippet', val: '5 rows maximum', note: '89% of displayed cells held 25 characters or fewer' },
            { m: 'AI Overview length', val: '~119 words desktop / 91 mobile', note: 'Semrush, ~11 links per overview' }
          ],
          source: 'Independent studies; display caps behave like a character budget. Use real HTML `table`, `ul` and `ol` elements — a div grid or an image of a table is not extractable. Move caveats and unit notes out of cells into a sentence below.' },
        { t: 'h', v: 'What measurably lifts citation at passage level' },
        { t: 'p', v: 'The originating GEO study (Aggarwal et al., KDD 2024) tested content edits against generative-engine visibility and measured the lift for each. This is passage-level editing, not a site strategy:' },
        { t: 'table', head: ['Edit', 'Measured lift', 'Note'],
          rows: [
            ['Add a relevant quotation from a named credible source', '**+41%**', 'Tested strongest on society, explanation and history topics'],
            ['Add a specific statistic with a unit and a date', '**+40%**', 'Strongest on law, government and opinion topics'],
            ['Cite your sources inline so the passage carries its own evidence', '**+30%**', 'Largest gains on mid-ranked pages; it moved a fifth-ranked source substantially and a top-ranked one down'],
            ['Improve fluency and readability of the target passage', '**+15–30%**', 'Varies by domain'],
            ['Keyword stuffing', '**at or below baseline**', 'Costs edit time and reads badly to humans']
          ]},
        { t: 'key', v: 'Read that table next to Nielsen\'s classic usability finding — concise text tested 58% more usable, scannable layout 47%, objective language 27%, and all three together 124%. The edits that make a passage extractable by a machine are the same edits that make it usable by a person. That is the whole argument for treating AEO as writing craft rather than as a technical retrofit.' },

        { t: 'h', v: '8 · Who / How / Why, and the four quality axes' },
        { t: 'p', v: 'Google\'s people-first guidance is written as questions you can paste into a brief. **Who** made this (a byline where a reader would expect one)? **How** was it made (is any automation, including AI generation, self-evident)? **Why** does it exist — Google calls this the most important, and the answer must be to help people rather than to attract search visits.' },
        { t: 'list', v: [
          '**The negative checklist** — answering yes is the warning sign: made primarily to attract search visits; lots of content across many topics hoping something ranks; extensive automation across topics; mainly summarising others without adding value; chasing trends with no genuine audience relevance; hitting a word count because you believe Google prefers it.',
          '**The bookmark test:** would anyone want to bookmark this, share it, or recommend it?',
          '**The second-search test:** does the reader finish and feel they need to search again? That is the clearest signal the page failed.',
          '**The four axes raters score** on main content: **effort**, **originality**, **talent or skill**, **accuracy** (and for money-or-life topics, consistency with well-established expert consensus). Calibrated to the page type — a short explainer is not held to a documentary\'s standard.',
          '**On AI specifically:** Google\'s position is that using generative tools alone does not determine effort, but that it is entirely possible to use them to produce lowest-quality content with no effort, originality or added value. That is the same argument as track 6\'s five-pass edit, in the platform\'s own words.'
        ]},

        { t: 'h', v: '9 · Anchor text and internal links' },
        { t: 'list', v: [
          'Google\'s stated test: read the anchor text **with the sentence removed** and check it is specific enough to make sense alone.',
          'Cut "click here", "read more", "website", "article".',
          'Do not chain links side by side — readers cannot distinguish them and each loses its surrounding context.',
          'Do not force keywords into anchors; keyword stuffing applies to link text too. Audit for anchor *variety*, not uniformity.',
          'Every page you care about should have a contextual in-body link from at least one other page. For image links, the alt attribute is the anchor text.'
        ]},

        { t: 'h', v: '10 · Cannibalisation, refresh and the decision ladder' },
        { t: 'p', v: 'Two pages nominally targeting a phrase is not cannibalisation. Pull impression data per query per URL, then ask Google\'s own rater question about the pair: **would users want to see both results if the same search engine returned them?** For specific queries, getting the same content from different sites can help users verify information; for broad queries, near-identical results count as duplicates. Google\'s John Mueller has also said more than one of your pages appearing is not inherently a problem.' },
        { t: 'table', head: ['Signal', 'Action', 'Why'],
          rows: [
            ['Page still ranks in the top 20 and the format still matches', '**Refresh** — new data, new examples, new sections', 'The page has equity; the content is stale'],
            ['The SERP now shows a different format than you published', '**Rewrite** to the expected form', 'You are competing in the wrong shape'],
            ['Two of your URLs take impressions for the same query and users would not want both', '**Consolidate** and redirect; re-point internal links', 'Split signals and a confused reader'],
            ['Nothing on the page can be salvaged', '**Delete** — last resort only', 'Google\'s core-update guidance treats deletion as a last resort'],
            ['Traffic dropped a few positions after an update', '**Measure, do not panic**', 'Small position changes do not warrant drastic action']
          ]},
        { t: 'warn', v: 'Refreshing by touching the surface — bumping `dateModified`, adding "2026" to the H1, appending an FAQ block — changes none of the axes raters actually score. Google\'s date guidance requires dates to reflect real publication or update, and its core-update guidance asks for improvement "in meaningful ways", naming rewriting or restructuring for readability as the example. Recovery can take days but may take months, with no guarantee.' },

        { t: 'h', v: '11 · The clicks conversation you must have early' },
        { t: 'bench', title: 'Pew Research Center, browsing data from 900 US adults, 68,879 Google searches, March 2025',
          v: [
            { m: 'Clicked a traditional result when an AI summary appeared', val: '8%', note: 'versus 15% when no summary appeared' },
            { m: 'Clicked a link inside the AI summary', val: '1%' },
            { m: 'Ended the browsing session on that page', val: '26%', note: 'versus 16% without a summary' }
          ],
          source: 'Pew Research Center, published July 2025. Instrumented browsing rather than self-report, which makes it unusually strong evidence.' },
        { t: 'key', v: 'For informational queries, ranking and clicks have partly decoupled. A content programme measured only on sessions will look like it is failing while it is being cited. Change the reporting frame **before** the budget conversation: presence and brand demand at the top of the funnel, clicks in the middle and bottom (tracks 10 and 13).' },

        { t: 'h', v: '12 · Metrics for the writing half of search' },
        { t: 'table', head: ['Metric', 'What it tells you', 'How it gets gamed'],
          rows: [
            ['**Title link retention**', 'Share of URLs where Google displays the title you wrote', 'Optimising retention alone rewards bland literal titles nobody clicks — pair with CTR'],
            ['**Query-level CTR against a feature-adjusted baseline**', 'Whether the title and snippet earn clicks at the position you hold', 'Curiosity-gap titles lift CTR then raise return-to-SERP; pair with scroll depth'],
            ['**Single-URL query share**', 'The honest measure of cannibalisation', 'Chasing it pushes teams to merge pages that legitimately serve different interpretations'],
            ['**Distinct queries per URL**', 'Whether fan-out finds answers on the page', 'Directly incentivises padding — cap it with the effort and originality check'],
            ['**Descriptive-anchor share**', 'Internal links that pass the out-of-context test', 'Becomes exact-match anchors repeated site-wide, which is stuffing'],
            ['**Refresh recovery at 90 days**', 'Whether refresh work actually returns clicks', 'Teams pick pages already recovering; require a pre-registered list and an untouched control set'],
            ['**Impression-weighted content age**', 'Early warning for decay', 'Fixed by bumping timestamps — tie it to a diff of the body copy']
          ]},
        { t: 'rubric',
          j: 'Writes to a keyword-placement brief, copies the top three results, hand-writes meta descriptions at scale, calls two pages cannibalisation from a spreadsheet, and refreshes by bumping the date.',
          c: 'Reads intent before writing, keeps title and H1 in agreement, writes answer-first openings and asserting subheads, uses descriptive anchors, and checks impressions before consolidating.',
          s: 'Cites the primary documentation rather than vendor frameworks, knows which "AI visibility" tactics Google says are unnecessary, briefs the claim and the fanned-out questions, reframes reporting for the click-decoupling, and can name the pages they deliberately left alone.' },
        { t: 'drill', v: [
          '**Interpretation ladder (20 min).** Before opening Google, write the dominant interpretation of a live target query in one sentence, plus two common and one no-chance reading. Then open the SERP. Did it contradict you, and what would your planned page have to change to be a *very helpful* result?',
          '**Title survival audit (45 min).** Export your top 30 URLs by impressions. Record your title element, your H1, and the title Google actually displays. Classify each rewrite against the seven named triggers, then fix the worst ten (51–60 characters, matching H1, dash separator, no brackets, no repeated keyword) and re-audit in three weeks.',
          '**Duplicate-result test (30 min).** From Search Console, find every query where two of your URLs took impressions. For each pair, answer the rater question in writing, then sort into consolidate / differentiate / leave alone. Count how many pairs your keyword spreadsheet had wrongly flagged.',
          '**Brief rewrite (40 min).** Take a brief that produced robotic copy. Delete every instruction about keyword placement, density and word count. Replace with: the dominant interpretation, the claim the page must make, three fanned-out questions it must genuinely answer, the Who/How disclosures, and four H2s written as assertions.'
        ]}
      ]
    },
    {
      id: 't9-briefs', title: 'Briefs and quality control',
      blocks: [
        { t: 'p', v: 'The brief is where strategy survives or dies. A weak brief guarantees a weak draft regardless of who writes it — human or model.' },
        { t: 'code', label: 'Content brief template', v: `TITLE (working):
PRIMARY INTENT + TARGET QUERY:
AUDIENCE + AWARENESS LEVEL:
JOB TO BE DONE (When… I want to… so I can…):
BUSINESS OUTCOME + PRIMARY METRIC:
POSITION IN ARCHITECTURE: hub / spoke of [pillar] · internal links in ___ / out ___
ANGLE (the argument only we can make):
MUST INCLUDE: proprietary data ___ · named example ___ · original framework ___
MUST NOT: banned claims, competitor references, do-not-say list
PROOF POINTS AVAILABLE (with sources):
STRUCTURE: H2 outline, 5-8 sections
FORMAT + LENGTH + READING GRADE:
CTA + next asset:
SUCCESS CRITERIA: what makes this shippable, not just finished
AI USE: which sections may be AI-drafted, which must be human-authored, which need SME review` },
        { t: 'h', v: 'The quality gates' },
        { t: 'table', head: ['Gate', 'Checks', 'Owner'],
          rows: [
            ['Brief approval', 'Angle is differentiated; metric is named; architecture slot exists', 'Strategy lead'],
            ['Draft review', 'Structure, argument, evidence, voice, reading grade', 'Editor'],
            ['SME / technical review', 'Accuracy, feasibility, no over-promise', 'Product or subject expert'],
            ['Claims review', 'Every number sourced; claim classes checked; legal where required', 'Marketing lead / legal'],
            ['Pre-publish', 'Internal links, metadata, schema, alt text, CTA, tracking', 'Ops / SEO'],
            ['Post-publish', '30/90-day performance check, refresh or prune decision', 'Strategy lead']
          ]},
        { t: 'key', v: 'Document the workflow and the gates. That document *is* the deliverable that proves you are a systems thinker rather than a prolific writer — and it is what you show when asked "how would you scale this team?"' }
      ]
    },
    {
      id: 't9-ops', title: 'Content operations at scale',
      blocks: [
        { t: 'list', v: [
          '**Editorial calendar with single ownership per asset.** Shared ownership means no ownership.',
          '**Definition of done, written down.** Includes metadata, links, schema, alt text, tracking, and the promotion plan — not just "the draft is good."',
          '**Style guide that resolves real disputes:** capitalisation, product naming, numbers, terminology, inclusive language, and the do-not-say list. Ten decisions people actually argue about beats forty they don\'t.',
          '**Taxonomy and metadata** so the library stays navigable at 300 pages: pillar, intent, funnel stage, persona, format, last-updated, owner.',
          '**Localisation workflow** if you publish in more than one language: adaptation brief, native review for register, and a decision on which pages are transcreated versus translated.',
          '**SLAs between roles** (brief → draft: 5 days; review → revise: 2 days). Without SLAs, content ops fails at the handoffs, not the writing.',
          '**Refresh cadence.** Every evergreen page has a review date. Freshness affects both search and AI citation eligibility.'
        ]},
        { t: 'h', v: 'The repurposing engine: one asset, twenty' },
        { t: 'p', v: 'Repurposing is planned at brief time, not scavenged afterwards. From one 2,500-word pillar with original data:' },
        { t: 'list', v: [
          '5 LinkedIn posts (one per section argument, each with its own hook)',
          '1 thread / carousel of the framework',
          '1 newsletter edition with a personal frame the article cannot carry',
          '3 short video or audio scripts',
          '5 pull-quote graphics from the strongest lines',
          '1 data visualisation of the original numbers (highly citable — see track 10)',
          '1 checklist or template PDF as a lead magnet',
          '1 slide section for the sales deck',
          '1 onboarding or support article if the content answers a real user question',
          '2 lifecycle emails'
        ]},
        { t: 'formula', label: 'Content ROI', expr: 'ROI = (organic sessions × conversion rate × value per conversion) ÷ production + distribution cost',
          example: '30,000 monthly sessions × 2% → 600 leads; at 8% close and $5,000 ACV = $240,000/month influenced pipeline. Against $35,000 of production, the payback argument writes itself — as long as you state assumptions and use *influenced* rather than *attributed* honestly.' },
        { t: 'h', v: 'Growth loops beat funnels' },
        { t: 'p', v: 'A funnel leaks and needs constant refill. A loop compounds: publish → rank/get cited → capture subscribers → subscribers share → links and mentions → authority → next asset ranks faster. Design the loop explicitly and name the step where it currently breaks.' },
        { t: 'quote', v: 'Content is media leverage: you build it once and it works while you sleep. The asset published this quarter is still selling next year.', by: 'after Naval Ravikant' },
        { t: 'h', v: 'Decay, refresh and pruning' },
        { t: 'list', v: [
          'Traffic decays predictably on non-evergreen pages; a refresh often returns more than a new post at a fraction of the cost.',
          'Refresh means new data, new examples, new sections, updated date — not a cosmetic edit.',
          'Prune or consolidate thin pages that fragment a topic. Fewer, deeper pages usually outperform more, thinner ones.',
          'Track a "content debt" list the way engineering tracks tech debt.'
        ]},
        { t: 'rubric',
          j: 'Produces a calendar of topics. Measures pageviews. No architecture, no stop list.',
          c: 'Pillars justified by demand and business linkage, cluster architecture, briefs with metrics, repurposing planned.',
          s: 'Documents the operating system (workflow, gates, SLAs, taxonomy), models ROI with stated assumptions, designs the growth loop, and manages decay and pruning as deliberately as new production.' }
      ]
    }
  ],
  artifact: {
    title: '90-day content system + calendar + ROI model',
    steps: [
      { s: 'Write the strategy brief with the full chain', guide: 'Business goal → audience/job → 3 pillars (each scored on demand × right to speak × business linkage) → measurement → stop list. Include the four pillars you rejected and why.' },
      { s: 'Build the topic architecture: 3 pillars × 6–8 spokes', guide: 'Per spoke: target query, intent, funnel stage, format, word count, internal links in/out, unique angle. Flag any cannibalisation with existing pages.' },
      { s: 'Write two full briefs using the template', guide: 'One hub, one spoke. Include the AI-use section — which parts may be model-drafted, which must be human-authored, which need SME review.' },
      { s: 'Produce the 12-week calendar with owners and SLAs', guide: 'Week | asset | type | pillar | stage | channel | owner | status | primary metric. Include refresh slots, not only new production.' },
      { s: 'Run the search-writing pass on two existing pages', guide: 'For each: the dominant interpretation in one sentence, the intent type, the title element vs H1 vs the title Google actually displays, the four H2s rewritten as assertions, the fanned-out questions the page owns versus links out to, and the anchor-text out-of-context check. State whether the right action is refresh, rewrite, consolidate or leave alone, with the impression evidence.' },
      { s: 'Design the repurposing engine for one pillar', guide: 'Map one asset to 20 derivatives with the channel and the hook for each. Show the production cost delta versus creating 20 originals.' },
      { s: 'Build the ROI model and the growth loop diagram', guide: 'Month 1 → month 12 projection with stated assumptions, comparison to the equivalent paid spend, and the loop diagram with the currently-broken step named.' }
    ]
  }
},

/* ══════════════════ 10 ══════════════════ */
{
  id: 10, phase: 'Systems', color: '--gr', roles: ['cs', 'gtm'],
  title: 'Search, GEO & AI Discovery',
  sub: 'Being findable when the answer arrives without a click',
  time: 'Study 3h · Artifact 4–5h',
  prereq: 'Track 9',
  feeds: 'Feeds tracks 13, 17',
  sources: '2026 GEO research surveys · AI Overview citation studies · E-E-A-T guidance',
  sections: [
    {
      id: 't10-search', title: 'Search fundamentals a strategist must own',
      blocks: [
        { t: 'p', v: 'You do not need to be a technical SEO. You do need to read intent accurately, cluster demand, and know which levers belong to content versus engineering.' },
        { t: 'list', v: [
          '**Intent before volume.** A 200-search/month comparison query can be worth more than a 20,000-search informational one. Map queries to funnel stage and revenue proximity.',
          '**Read the SERP before writing.** The page format that already ranks tells you what the engine believes the intent is. Fighting that is expensive.',
          '**Cluster, don\'t chase keywords.** One page per intent, covering the family of phrasings, with the terminology real buyers use (from your message bank).',
          '**Cannibalisation is self-inflicted.** Two pages on the same intent split signals and confuse both engines and readers. Consolidate.',
          '**E-E-A-T** — experience, expertise, authoritativeness, trustworthiness — is what quality raters and, in effect, AI retrieval both look for: named authors with real credentials, first-hand experience, citations, contact and policy pages, and corrections.',
          '**Technical basics that are yours to demand:** crawlable HTML, indexability, sane URL structure, fast load, internal links, correct canonical tags, and no content locked behind JavaScript that renders too late to be retrieved.'
        ]},
        { t: 'key', v: 'Content strategists lose credibility with engineering by asking for the wrong things. Learn the boundary: you own intent, structure, depth, freshness and internal linking. They own rendering, speed, status codes and infrastructure.' }
      ]
    },
    {
      id: 't10-aeo', title: 'AEO: writing to be the answer',
      blocks: [
        { t: 'p', v: 'Answer Engine Optimisation is optimising for the extracted answer — featured snippets, AI Overviews, voice results, and the summary block that increasingly sits where your click used to be.' },
        { t: 'list', v: [
          '**Answer first, then elaborate.** Put a complete, self-contained 40–60 word answer directly under the question heading. Extraction systems take units, not arcs.',
          '**Use the question as the heading**, phrased the way people ask it.',
          '**One idea per paragraph** so a paragraph can be lifted without losing meaning.',
          '**Definitions, statistics, comparisons, prices, dates and steps** are the most extractable formats — research on generative citation consistently finds these self-contained units get selected and attributed.',
          '**Tables and lists** for comparisons; they are parsed and reproduced more reliably than prose.',
          '**Do not hide the answer to protect the click.** The withheld answer loses the citation and the click.'
        ]},
        { t: 'ge', label: 'Answer-first structure',
          good: '**H2: What is a good add-to-cart rate?**\n"A good add-to-cart rate is 6–8% for most ecommerce stores; the median across large Shopify samples is roughly 4.6%, and above 10% is exceptional. Rates vary by category — beauty runs higher, considered purchases lower."  *(then the detail, methodology and segments)*',
          bad: '**H2: Add-to-cart rate**\n"Add-to-cart rate is one of the most important metrics for ecommerce businesses today. In this section we will explore why it matters, how it developed as a metric, and what factors influence it…"',
          why: 'The first is a complete, attributable unit with numbers and a hedge. The second cannot be extracted, so it is never quoted — and human scanners bounce off it too.' }
      ]
    },
    {
      id: 't10-geo', title: 'GEO: how AI systems choose what to cite',
      blocks: [
        { t: 'p', v: 'Generative Engine Optimisation is the practice of making content likely to be retrieved, quoted and attributed by AI assistants. It is young, and most of what is sold as GEO is recycled SEO. Here is what the 2026 research actually supports.' },
        { t: 'bench', title: 'Findings worth quoting in an interview',
          v: [
            { m: 'AI Overview citations that also rank in the organic top 10', val: '37.9%', note: 'Ahrefs, March 2026, 863k SERPs — down from roughly 76% in July 2025; 31% rank 11–100 and 31% beyond 100' },
            { m: 'AI Overviews containing the #1 organic result', val: '46% desktop / 34% mobile', note: 'Semrush, 200k US keywords' },
            { m: 'Most-cited ChatGPT pages with no organic visibility', val: '~28%', note: 'Citation and ranking are separable problems' },
            { m: 'Strongest determinants of first citation', val: 'Relevance + position in context', note: 'From large-scale trials across multiple models and factors' },
            { m: 'Content units with a citation advantage', val: 'Statistics, definitions, comparisons, prices, dates, references', note: 'Self-contained, attributable, verifiable' }
          ],
          source: 'Aggregated 2026 GEO research surveys and AI-visibility studies. Treat as directional — the field is moving quarterly.' },
        { t: 'h', v: 'The four operational pillars' },
        { t: 'steps', v: [
          { n: 1, name: 'Retrievability', body: 'Clean HTML, fast, crawlable by AI user agents, permitted in robots.txt where you want visibility, structured data present. If a system cannot fetch and parse it, nothing else matters.' },
          { n: 2, name: 'Extractable substance', body: 'Original statistics, clear definitions, comparison tables, dated facts, methodology sections, and explicit citations of your own sources. Give the model quotable units.' },
          { n: 3, name: 'Third-party presence', body: 'Assistants lean heavily on aggregators, review platforms, forums and earned media. Being discussed on Reddit, G2, industry roundups and podcasts influences what gets cited about you — much of GEO is not on your own site at all.' },
          { n: 4, name: 'Freshness and monitoring', body: 'Review evergreen pages at least quarterly with visible updated dates, and monitor what assistants say about you — including hallucinated claims and lost citations.' }
        ]},
        { t: 'h', v: 'The strategic tension nobody wants to name' },
        { t: 'p', v: 'AEO/GEO success can mean your content is consumed without a visit. That is a real cost. The honest strategy splits by funnel stage: at the top, optimise for **presence and brand demand** (being the cited source builds the brand even without the click); at the middle and bottom, optimise for the **click**, because comparison and pricing decisions still need your surface. Say this out loud in interviews — most candidates have not thought it through.' },
        { t: 'warn', v: 'Schema theatre: adding structured data to thin content. Schema helps systems *find and interpret* content; substance decides whether they *cite* it. Markup on a mediocre page buys nothing.' },
        { t: 'h', v: 'Measuring AI visibility' },
        { t: 'key', lbl: 'Discipline, not dashboards', v: 'AMEC published **GEO Principles** with a practitioner\'s guide in May 2026: measure upstream reputation signals, search and content readiness, and downstream AI outputs; use **repeatable prompts**; document method, assumptions and limitations; treat AI outputs as directional evidence; and never rely on a single score or tool. That is the bar to hold a vendor to — and the reason to refuse an opaque "AI visibility index".' },
        { t: 'list', v: [
          'Freeze a **prompt set** of 50–200 questions mapped to real research and buying stages. A prompt set you cannot re-run identically is not an instrument. Run it on a fixed engine list, the same day each month, from the same locale and account state.',
          'Record four things per run, not one: is the **brand mentioned**, is your **domain cited**, **where** in the answer, and **how it is framed**. Keep mention and citation as separate lines — the overlap between brands mentioned and domains cited can be far from complete.',
          'Normalise for engine appetite before comparing platforms: reported averages run from roughly 3 sources per answer on some engines to 15 on others, so a lower citation count is not automatically worse performance.',
          'Cross-check with platform-side data where it exists (Bing\'s AI performance reporting gives citation counts), and remember Microsoft\'s own caveat that citations reflect frequency, not importance or ranking.',
          'Log **misattribution**. Across eight AI search engines and 1,600 citation queries, the Tow Center found incorrect source attributions in more than 60% of tests, including citations to syndicated republications instead of the original publisher. Corrections are part of the programme, not an exception.',
          'Report citation share and click volume **side by side**. Never blend them into one index.',
          'Watch Search Console for impression-heavy, click-light queries — a signature of answers being consumed upstream.',
          'Track brand-name and brand+category search volume as the leading indicator that presence is converting to demand.',
          'Log corrections: when an assistant states something wrong about your product, that is a content gap with a specific address.'
        ]},
        { t: 'rubric',
          j: 'Treats GEO as keyword stuffing for chatbots. Adds schema and declares victory.',
          c: 'Writes answer-first, structures for extraction, adds valid schema, tests citation presence manually.',
          s: 'Separates retrieval, citation and fidelity as distinct measurements; builds third-party presence deliberately; states the visibility-versus-clicks trade-off by funnel stage; runs a monthly monitoring routine with a correction log.' }
      ]
    },
    {
      id: 't10-schema', title: 'Structured data and technical retrievability',
      blocks: [
        { t: 'list', v: [
          '**Article / BlogPosting** — author with credentials, datePublished, dateModified, publisher.',
          '**FAQPage and HowTo — do not ship these expecting rich results.** FAQ rich results were restricted to well-known government and health sites in August 2023 and HowTo rich results were removed in September 2023. Use them, if at all, for machine understanding, never as an "AEO project".',
          '**ProfilePage / Person** for named authors — entity disambiguation is the job schema actually does well.',
          '**Product / Offer / AggregateRating** — price, availability, review data. Never mark up reviews you did not receive.',
          '**Organization + sameAs** — ties your brand to its entity representation across the web, which matters for how assistants resolve who you are.',
          '**Person** for author pages — credentials, affiliations, links. This is the cheapest E-E-A-T improvement most sites are missing.'
        ]},
        { t: 'code', label: 'Author-credentialed Article JSON-LD skeleton', v: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "…",
  "datePublished": "2026-08-17",
  "dateModified": "2026-08-17",
  "author": {
    "@type": "Person",
    "name": "…",
    "jobTitle": "…",
    "url": "https://example.com/authors/…",
    "sameAs": ["https://www.linkedin.com/in/…"]
  },
  "publisher": { "@type": "Organization", "name": "…", "url": "https://example.com" },
  "citation": ["https://source-one.example", "https://source-two.example"]
}` },
        { t: 'key', v: 'The single most under-used citability lever: publish **original numbers**. A survey of 200 customers, a benchmark from your own data, a teardown with measurements. Original data is the most-cited content type there is, because nobody else can be the source for it.' }
      ]
    }
  ],
  artifact: {
    title: 'AI visibility audit + citability retrofit plan',
    steps: [
      { s: 'Build the prompt set and run the baseline audit', guide: '15 buyer questions × 3 assistants (plus AI Overviews). Scorecard: question | cited? | who was cited instead | is what it says about us accurate? Screenshot the evidence.' },
      { s: 'Diagnose each miss', guide: 'Per uncited question: no content, no extractable units, weak E-E-A-T signals, no third-party presence, or retrievability problem. Be specific — "the answer is buried in paragraph four" is a diagnosis; "needs SEO" is not.' },
      { s: 'Retrofit three pages for extraction', guide: 'Before/after: question-as-heading, 40–60 word answer block, comparison table, dated facts, methodology note, author credentials, updated date. Show the diffs.' },
      { s: 'Write the schema plan with working JSON-LD', guide: 'Two types minimum, validated. Include the Person schema for author pages and Organization sameAs.' },
      { s: 'Build the third-party presence plan', guide: 'Where your buyers already look (specific subreddits, review platforms, roundups, podcasts, community Slacks) and the honest, non-spammy way to be present in each.' },
      { s: 'Write the SEO-vs-GEO strategy memo', guide: 'One page: what changes, what stays, the visibility-versus-clicks trade-off by funnel stage, the monthly monitoring routine, and the three metrics you would report to a CMO.' }
    ]
  }
},

/* ══════════════════ 13 ══════════════════ */
{
  id: 13, phase: 'Systems', color: '--gr', roles: ['cro', 'cs', 'gtm'],
  title: 'Data, Analytics & Measurement',
  sub: 'Numbers that change decisions',
  time: 'Study 3h · Artifact 4h',
  prereq: 'Tracks 7, 8',
  feeds: 'Feeds tracks 12, 17',
  sources: 'GA4 model · attribution and incrementality practice',
  sections: [
    {
      id: 't13-literacy', title: 'Metric literacy',
      blocks: [
        { t: 'p', v: '"Analytics" and "writing" are now the two most-listed requirements in content marketing job posts. Not statistics degrees — the ability to pick the right metric, read it honestly, and say what to do next.' },
        { t: 'table', head: ['Class', 'Definition', 'Example', 'Trap'],
          rows: [
            ['**North star**', 'The one metric that best proxies delivered customer value', 'Weekly active teams reconciling', 'Choosing revenue — it is an outcome, not a proxy for value'],
            ['**Leading**', 'Moves first, predicts the outcome', 'Trials started, activation rate', 'Optimising a leading metric that does not actually lead'],
            ['**Lagging**', 'Confirms the result', 'Revenue, NRR, churn', 'Steering weekly by a metric that reports quarterly'],
            ['**Counter-metric**', 'Guards against gaming the primary', 'Refund rate beside conversion rate', 'Not having one — every incentive gets gamed'],
            ['**Vanity**', 'Feels good, changes nothing', 'Impressions, followers, pageviews alone', 'Reporting it without a decision attached']
          ]},
        { t: 'formula', label: 'The only test of a metric', expr: 'If this number moved 20%, what would we do differently?',
          example: 'No answer means it is a vanity metric for your purposes, however legitimate it is elsewhere. Cut it from the dashboard and stop spending meeting time on it.' },
        { t: 'h', v: 'Rates, ratios and the denominator problem' },
        { t: 'list', v: [
          'Always state the denominator: sessions, users, unique visitors, recipients, delivered, or opens. Most reporting disputes are denominator disputes.',
          'Averages hide distributions. Report medians for skewed data (deal size, time-to-value, session duration) and say which you used.',
          'Small denominators produce dramatic percentages. Show the absolute numbers next to every rate.',
          'Segment before concluding: aggregate flat can hide a strong win and an equal loss (Simpson\'s paradox).'
        ]}
      ]
    },
    {
      id: 't13-ga4', title: 'The GA4 mental model',
      blocks: [
        { t: 'list', v: [
          '**Everything is an event** with parameters. No more pageview-versus-event distinction. Conversions are events you marked as key.',
          '**Sessions are derived, not sacred.** GA4 counts differently from Universal Analytics; do not compare historical numbers naively.',
          '**Explorations** are where real analysis happens: funnel exploration for drop-off, path exploration for behaviour, segment overlap for audience questions.',
          '**Attribution settings matter.** GA4 defaults to a data-driven model in many reports; know which model your numbers came from before you quote them.',
          '**Custom dimensions** for content metadata (pillar, funnel stage, author, format) turn content reporting from anecdote into analysis. Set them up early — you cannot backfill.',
          '**Consent mode and modelling.** With consent banners, a share of data is modelled rather than observed. Say so when you report; precision claims beyond the data are how analysts lose trust.'
        ]},
        { t: 'h', v: 'UTM discipline (the cheapest fix in marketing)' },
        { t: 'code', label: 'UTM convention', v: `utm_source   = platform          (linkedin, google, newsletter_name)
utm_medium   = channel type      (cpc, organic_social, email, referral)
utm_campaign = campaign slug     (2026q3_close_launch)
utm_content  = creative/variant  (hero_a, carousel_3)
utm_term     = keyword/audience  (finance_leads_50_500)

Rules: lowercase always · underscores not spaces · one documented sheet
of allowed values · never UTM internal links (it restarts the session)` },
        { t: 'h', v: 'Search Console: the report content people ignore' },
        { t: 'list', v: [
          'Query-level impressions and clicks are the only place you see real search demand language — a free message-mining source.',
          'High impressions with low CTR = a title/meta or intent-mismatch problem, or answers being consumed upstream.',
          'Position 4–10 pages with strong impressions are the fastest wins available: refresh, not rewrite.',
          'Compare 28-day windows year over year, not month over month, for seasonal categories.'
        ]}
      ]
    },
    {
      id: 't13-attribution', title: 'Attribution, incrementality and honesty',
      blocks: [
        { t: 'table', head: ['Model', 'Credits', 'Bias'],
          rows: [
            ['First touch', '100% to first interaction', 'Overvalues awareness content, ignores closing'],
            ['Last touch', '100% to final interaction', 'Overvalues brand search and retargeting'],
            ['Linear', 'Evenly across touches', 'Treats a podcast mention and a demo as equal'],
            ['Time decay', 'More to recent touches', 'Undervalues long consideration cycles'],
            ['Position based (U-shaped)', '40/20/40 first/middle/last', 'Arbitrary but often a reasonable compromise'],
            ['Data-driven / algorithmic', 'Modelled from observed paths', 'Black box; needs volume; still correlational'],
            ['**Incrementality test**', 'Measured by holdout or geo split', 'The only method that establishes causation — and it costs traffic']
          ]},
        { t: 'key', v: 'All click-based attribution is correlational. The senior position: use a consistent model for trend-reading, use incrementality tests for budget decisions, and say "influenced" rather than "generated" when you cannot prove causation. Precision language here is a credibility signal in every marketing interview.' },
        { t: 'list', v: [
          '**Self-reported attribution** ("how did you hear about us?" on the signup form) captures dark social and word of mouth that no tracker sees. Cheap, biased, and still the best available signal for brand-led channels.',
          '**Marketing mix modelling (MMM)** is regression on aggregate spend and outcomes — no cookies needed, useful at scale, blunt below meaningful spend.',
          '**Content-influenced pipeline** is a defensible middle ground: tag which assets a converted lead consumed pre-conversion and report the set, not a single winner.'
        ]}
      ]
    },
    {
      id: 't13-cohorts', title: 'Cohorts, retention curves and unit economics',
      blocks: [
        { t: 'list', v: [
          '**Cohort by acquisition period** to see whether the product or the marketing is improving. Blended metrics hide both.',
          '**Retention curve shape** matters more than a single churn number (see track 11): early cliff = activation; steady decay = habit; flattening = you have a core.',
          '**Payback period** is the metric finance actually cares about: months to recover CAC from gross profit.',
          '**Contribution margin per order** keeps ecommerce CRO honest: a discount-driven conversion lift that erases margin is a loss.',
          '**Cohort revenue expansion (NRR)** for B2B: above 100% means the base grows without new logos, which changes every marketing priority.'
        ]},
        { t: 'formula', label: 'The four numbers to memorise', expr: 'LTV = ARPA × gross margin ÷ churn rate  ·  CAC = spend ÷ new customers  ·  Payback = CAC ÷ monthly gross profit  ·  LTV:CAC ≥ 3',
          example: '$200 ARPA × 80% margin ÷ 3% monthly churn = $5,333 LTV. Against $1,500 CAC that is 3.6:1 with a ~9-month payback — healthy. Being able to run this in a meeting is what gets a marketer taken seriously by a CFO.' }
      ]
    },
    {
      id: 't13-qual', title: 'Qualitative data and survey design',
      blocks: [
        { t: 'list', v: [
          '**Session replay** — watch 10, not 100. Look for hesitation, rage clicks, and repeated scrolling (searching for information you buried).',
          '**Heatmaps** — scroll maps tell you what share of readers ever see each section; click maps reveal what people try to click that is not clickable (free UX and content insight).',
          '**On-page surveys** — one question, well-timed. Exit intent: "what stopped you today?" Post-purchase: "what almost stopped you?"',
          '**User interviews** — see track 2. Six good interviews beat a thousand-response survey for messaging work.',
          '**Support tickets** — the most under-used dataset in marketing, and the only one that arrives pre-sorted by customer pain.'
        ]},
        { t: 'h', v: 'Survey design: five rules that prevent garbage' },
        { t: 'list', v: [
          'Ask about behaviour and the past, not intentions and the future.',
          'One idea per question; no double-barrelled questions ("was it fast and easy?").',
          'Avoid leading language ("how much did you love…"); offer a genuine negative option.',
          'Put the open-ended question first while attention is highest — it is the answer you will actually use.',
          'Report the n and the sampling method every time. A 12-response survey can be useful; presenting it as representative is not.'
        ]},
        { t: 'h', v: 'Reporting: the shape that gets read' },
        { t: 'steps', v: [
          { n: 1, name: 'Headline verdict in one sentence', body: '"Trials are up 12% and activation is flat — the funnel improved, the product experience did not."' },
          { n: 2, name: 'Three numbers that matter', body: 'With comparison period and the absolute values, not only percentages.' },
          { n: 3, name: 'What we learned', body: 'Insight, not description. Anyone can read a chart aloud.' },
          { n: 4, name: 'What we are doing next', body: 'Two or three decisions with owners and dates.' },
          { n: 5, name: 'What we stopped', body: 'The section that proves you are prioritising rather than accumulating.' }
        ]},
        { t: 'rubric',
          j: 'Reports pageviews and impressions. Confuses correlation with causation. Sends dashboards without a verdict.',
          c: 'Chooses metrics with decisions attached, segments before concluding, states denominators and attribution model.',
          s: 'Designs the measurement plan before the campaign, uses incrementality for budget calls, distinguishes influenced from generated, and reports with a verdict and a stop list.' }
      ]
    }
  ],
  artifact: {
    title: 'Measurement plan + one-page performance report',
    steps: [
      { s: 'Write the measurement plan for one campaign', guide: 'North star, leading indicators, counter-metrics, events to instrument (with names and parameters), attribution model chosen in advance, and the reporting cadence.' },
      { s: 'Define the event and UTM taxonomy', guide: 'Event names with parameters, custom dimensions for content metadata, and the UTM value sheet. State how you will police it.' },
      { s: 'Build the funnel model with real or plausible numbers', guide: 'Stage-by-stage with absolute numbers and rates, denominators labelled, and the largest absolute loss identified in dollars.' },
      { s: 'Run the unit-economics calculation', guide: 'LTV, CAC, payback, LTV:CAC, contribution margin. Show inputs and sensitivity: what happens if churn is 1 point worse?' },
      { s: 'Design one survey and one exit-intent question', guide: 'Five questions maximum, open-ended first, with the analysis plan stated before fielding.' },
      { s: 'Write the one-page performance report', guide: 'Verdict sentence, three numbers with comparison, what we learned, next decisions with owners, and what we stopped. No chart without a sentence.' }
    ]
  }
},

/* ══════════════════ 14 ══════════════════ */
{
  id: 14, phase: 'Systems', color: '--gr', roles: ['cs', 'co', 'cro', 'svc'],
  title: 'Content UX & Information Design',
  sub: 'Where psychology meets the interface',
  time: 'Study 2.5h · Artifact 4h',
  prereq: 'Track 6',
  feeds: 'Feeds tracks 7, 11, 16',
  sources: 'Norman · Yablonski · Gamestorming · WCAG',
  sections: [
    {
      id: 't14-why', title: 'Why writers need UX vocabulary',
      blocks: [
        { t: 'p', v: 'The best copy fails if the page fights cognition. More practically: a writer who can speak in UX terms gets invited into design reviews and shapes the wireframe instead of filling boxes in it. That invitation is the difference between "content writer" and "content strategist" on a job description.' },
        { t: 'list', v: [
          '**Affordances** — what an element makes possible. Does your CTA look pressable?',
          '**Signifiers** — the visual signals that communicate the affordance. Hierarchy *is* signification; the biggest thing on the page claims to be the most important.',
          '**Mapping** — does the page order match the user\'s decision order? (Tracks 3 and 7.)',
          '**Feedback** — every action needs an immediate, legible response. Silence after a click is where trust dies.',
          '**Conceptual models** — "how it works" sections exist to build the mental model that makes the product predictable.',
          '**Constraints** — deliberately limiting options prevents error. Fewer paths, fewer mistakes.'
        ]}
      ]
    },
    {
      id: 't14-laws', title: 'Laws of UX applied to copy',
      blocks: [
        { t: 'table', head: ['Law', 'Statement', 'Copy consequence'],
          rows: [
            ['**Jakob\'s**', 'Users expect your site to work like the others they know', 'Follow the conventional page order; spend novelty on the message, not the navigation'],
            ['**Hick\'s**', 'Decision time grows with the number of choices', 'One primary CTA per view; three pricing tiers, not seven'],
            ['**Miller\'s**', 'Working memory holds ~4 chunks', 'Three value pillars, three benefits, three steps'],
            ['**Fitts\'s**', 'Time to target depends on size and distance', 'Big buttons, high contrast, placed right after the persuasive copy'],
            ['**Peak-end**', 'We remember the peak and the ending', 'Invest in the hero and the final CTA; nail confirmation pages and first support replies'],
            ['**Von Restorff**', 'The distinctive item is remembered', 'One visually different element per section — if everything is highlighted, nothing is'],
            ['**Serial position**', 'First and last items are recalled best', 'Put your strongest benefit first and your second strongest last'],
            ['**Doherty threshold**', 'Under ~400ms feels instantaneous', 'Performance is a content problem; heavy hero media costs conversion'],
            ['**Tesler\'s**', 'Complexity is conserved — someone absorbs it', 'Good microcopy moves complexity from the user to the system'],
            ['**Postel\'s**', 'Be liberal in what you accept', 'Forms should accept messy input and normalise it, not scold the user'],
            ['**Aesthetic-usability**', 'Beautiful is perceived as more usable', 'Design quality raises the credibility of your claims before they are read']
          ]},
        { t: 'warn', v: 'These laws conflict. Jakob\'s says be conventional; Von Restorff says stand out. Hick\'s says reduce choice; Postel\'s says be flexible. Seniority is knowing which to prioritise for this context and saying why — not reciting all eleven.' },
        { t: 'key', v: 'Translate every UX finding into business language or it will be ignored. Not "Hick\'s law violation on the pricing page" but "five tiers with 40 feature rows; 23% of sessions leave the pricing page in under 8 seconds — the three-tier version tested at +11% on trial starts."' }
      ]
    },
    {
      id: 't14-scan', title: 'Scannability and page mechanics',
      blocks: [
        { t: 'list', v: [
          '**Readers scan in an F-pattern** on text-heavy pages: first lines get read, left edges get sampled, middles get skipped. Front-load every paragraph.',
          '**Subheads must carry the argument.** A reader who reads only your H2s should get the whole thesis. This is the single highest-leverage structural edit.',
          '**Paragraphs of 2–4 lines** on desktop, 1–3 on mobile. A wall of text is a decision to be skipped.',
          '**One bolded phrase per block** maximum. Bold everything and you have bolded nothing.',
          '**Lists for parallel items only.** Bulleting non-parallel ideas is how a page loses its argument.',
          '**Line length 45–75 characters** for comfortable reading; full-width text on a wide monitor is fatiguing.',
          '**Descriptive links.** "See the close checklist" beats "click here" for scanning, accessibility and search.'
        ]},
        { t: 'formula', label: 'Subhead test', expr: 'Read only the H1 and H2s. Do you have the full argument?',
          example: 'If the answer is no, the page depends on being read linearly — which almost nobody does. Rewrite the subheads as claims, not labels: "Why close takes six days" beats "Background".' }
      ]
    },
    {
      id: 't14-micro', title: 'Microcopy, forms and error states',
      blocks: [
        { t: 'p', v: 'Microcopy is the highest-density writing in the product: a five-word label can determine whether a payment completes. It is also the surface where marketing voice must yield to clarity.' },
        { t: 'list', v: [
          '**Labels above fields, always visible.** Placeholder-only labels disappear on focus and fail accessibility.',
          '**Ask only what you need now.** Every field costs conversion; optional fields cost it for nothing.',
          '**Explain why for anything sensitive.** "We ask for your phone only to verify large transfers" recovers more completions than any redesign.',
          '**Errors: say what happened, why, and how to fix it — in that order, with no blame.** "That card was declined by your bank. Try another card or contact them; nothing was charged."',
          '**Validate inline and forgive formats.** Accept spaces in card numbers, any date format, and either "+1" or not.',
          '**Empty states are onboarding.** They should instruct and set expectation, never apologise.',
          '**Confirmations must state what happens next and when.** "Sent. You\'ll get a reply within one business day, and a copy is in your inbox now."',
          '**Buttons say what happens, not "Submit."** "Create my account", "Pay $49", "Send the report".'
        ]},
        { t: 'ge', label: 'Error microcopy',
          good: '"That email is already registered. Sign in instead, or reset your password — we\'ll send the link straight away."',
          bad: '"Error 422: invalid input."',
          why: 'The first names the situation, removes blame, and gives two exits. The second tells the user they did something wrong in a language they do not speak.' }
      ]
    },
    {
      id: 't14-access', title: 'Accessibility and inclusive language',
      blocks: [
        { t: 'p', v: 'Accessibility is a legal requirement in many markets and a straightforward quality standard everywhere. Most of what content people own is cheap to fix.' },
        { t: 'list', v: [
          '**Real heading hierarchy** (one H1, nested H2/H3) — screen-reader users navigate by headings, and search systems parse them.',
          '**Descriptive link text**; never "click here" or a bare URL.',
          '**Alt text** describes function and content in context; decorative images get empty alt. Do not stuff keywords.',
          '**Colour is never the only carrier of meaning**; contrast at least 4.5:1 for body text.',
          '**Captions and transcripts** for video and audio — also a substantial search and citability asset.',
          '**Plain language and defined jargon** benefit everyone, and are explicitly required in public-sector and regulated contexts.',
          '**Inclusive defaults:** gender-neutral phrasing where identity is unknown, no ableist idiom used casually, no assumptions about family structure, geography or ability in examples.',
          '**Don\'t rely on hover** to reveal information; touch has no hover.'
        ]},
        { t: 'key', v: 'Bilingual and multi-market note: accessibility standards and plain-language obligations differ by jurisdiction (for example, official-language requirements for Canadian federal content). Knowing the requirement, not just the principle, is a hiring differentiator for public-sector and regulated work.' }
      ]
    },
    {
      id: 't14-facilitation', title: 'Workshops and stakeholder alignment',
      blocks: [
        { t: 'p', v: 'Facilitation is rare among writers and valuable to organisations. Being the person who can run a room converts you from a service provider into a partner.' },
        { t: 'table', head: ['Exercise', 'Purpose', 'Time'],
          rows: [
            ['**Empathy map** (say / think / do / feel)', 'Align on the user before arguing about copy', '15 min'],
            ['**Brainwriting** (silent generation first)', 'Prevents the loudest voice from anchoring the room', '10 min'],
            ['**Affinity mapping**', 'Turns scattered input into themes and pillars', '15 min'],
            ['**Cover story**', 'Surfaces the ambition behind a project', '20 min'],
            ['**Pre-mortem**', '"It failed — why?" Better risk surfacing than any risk register', '20 min'],
            ['**Dot voting**', 'Fast prioritisation without hierarchy dominating', '5 min'],
            ['**Message battle** (rank statements blind)', 'Kills pet phrasing with evidence', '15 min']
          ]},
        { t: 'h', v: 'Running the room' },
        { t: 'list', v: [
          'State the decision the workshop must produce before it starts. Workshops without a decision are meetings with sticky notes.',
          'Silent generation before discussion, every time.',
          'Timebox visibly and end early when the decision arrives.',
          'Close with owners and dates on the wall, then send them within the hour while memory is fresh.',
          'Follow up with the artefact, not the photos of the whiteboard.'
        ]},
        { t: 'rubric',
          j: 'Fills boxes in a wireframe. Flags UX problems with no business framing. Attends workshops.',
          c: 'Applies UX laws to copy decisions, writes decent microcopy, contributes to workshops with structure.',
          s: 'Resolves conflicts between UX laws with reasoning, quantifies UX findings in revenue terms, designs and facilitates the workshop that produces the decision, and owns accessibility as a standard rather than a checklist.' }
      ]
    }
  ],
  artifact: {
    title: 'Content UX audit + facilitated workshop design',
    steps: [
      { s: 'Audit one real page against the laws with annotated screenshots', guide: 'Element by element: hero (peak-end), navigation (Jakob\'s), tiers (Hick\'s + Miller\'s), CTA (Fitts\'s), highlights (Von Restorff), load (Doherty), forms (affordances and Postel\'s).' },
      { s: 'Identify 5 friction points with business impact', guide: 'Table: element | law | user impact | business impact with a number or a stated estimate | fix. No finding without a business framing.' },
      { s: 'Redesign one section: wireframe plus rewritten copy', guide: 'Hand-drawn or Figma. Annotate which law each change serves and what you would measure.' },
      { s: 'Write the microcopy set', guide: 'Two form labels with helper text, three error messages, one empty state, one confirmation, three button labels. Apply the "what happened / why / how to fix" structure.' },
      { s: 'Run the accessibility pass', guide: 'Heading hierarchy, link text, alt text, contrast, hover dependence, plain-language grade before and after. List what you cannot fix as a writer and who owns it.' },
      { s: 'Design a 60-minute workshop that produces one decision', guide: 'Agenda with timings: empathy map (10) → brainwriting (15) → affinity (15) → dot vote (10) → owners and dates (10). State the decision, the pre-work, and the artefact you send afterwards.' }
    ]
  }
}

];
