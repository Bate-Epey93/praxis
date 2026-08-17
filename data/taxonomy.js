// Competency taxonomy: job-description language -> curriculum coverage -> what proves it.
// `terms` are matched as substrings against pasted advert text, so they must be specific
// enough not to fire on everything. Over-generic terms are stripped at merge time.
export const COMPETENCIES = [
  {
    key: "conversion-copy", label: "Conversion copywriting",
    terms: ["conversion copy", "direct response", "sales copy", "landing page copy", "persuasive writing", "copywriting", "copywriter", "sales page", "ad copy", "long-form copy", "headline writing"],
    trackRefs: [6, 7, 1], proofHint: "A before and after rewrite of a real page showing the diagnosis, the constraint you wrote against, and the number it moved."
  },
  {
    key: "copy-editing", label: "Editing and editorial quality control",
    terms: ["copy editing", "proofreading", "sub-editing", "editorial standards", "style guide", "fact checking", "house style", "attention to detail", "grammar", "editing other writers", "quality control"],
    trackRefs: [6, 9], proofHint: "A line-by-line teardown of someone else's draft naming the rule broken on each edit, plus a rewrite at 35 to 50 percent fewer words."
  },
  {
    key: "messaging-architecture", label: "Messaging architecture and value propositions",
    terms: ["messaging framework", "messaging architecture", "value proposition", "value props", "message house", "messaging pillars", "key messages", "proof points", "benefit statements", "messaging hierarchy", "objection handling"],
    trackRefs: [5, 4, 6], proofHint: "A messaging house with the proof stack under each pillar and the objection each pillar answers, dated and version-controlled."
  },
  {
    key: "brand-voice", label: "Brand voice and tone of voice",
    terms: ["tone of voice", "brand voice", "brand guidelines", "voice and tone", "brand consistency", "editorial voice", "brand tone", "voice guidelines", "style guide compliance"],
    trackRefs: [5, 4], proofHint: "A voice guide with rejected examples beside approved ones and a tone-by-context matrix, not three adjectives."
  },
  {
    key: "positioning", label: "Positioning and category narrative",
    terms: ["positioning", "repositioning", "differentiation", "category design", "category creation", "brand narrative", "point of view", "competitive frame", "market positioning", "brand architecture", "naming"],
    trackRefs: [4, 12, 1], proofHint: "A positioning canvas that names the real alternatives, the trade-off the category choice makes, and what you would refuse to claim."
  },
  {
    key: "jtbd-research", label: "Customer research and jobs to be done",
    terms: ["jobs to be done", "jtbd", "customer research", "user research", "customer interviews", "discovery interviews", "win/loss", "win loss", "persona", "survey design", "qualitative research", "customer insight"],
    trackRefs: [2, 3], proofHint: "Ten interview transcripts reduced to a job map, with the switching triggers and anxieties quoted rather than paraphrased."
  },
  {
    key: "voice-of-customer", label: "Voice of customer and feedback synthesis",
    terms: ["voice of customer", "customer feedback", "review mining", "verbatim", "nps", "customer sentiment", "feedback loops", "customer quotes", "survey responses", "closing the loop"],
    trackRefs: [3, 2, 16], proofHint: "A message bank of customer verbatims ranked by frequency and intensity, mapped to the specific headlines and replies they produced."
  },
  {
    key: "content-strategy", label: "Content strategy and editorial ownership",
    terms: ["content strategy", "content pillars", "editorial calendar", "content calendar", "editorial strategy", "content roadmap", "topic clusters", "content planning", "content audit", "content governance", "publishing cadence"],
    trackRefs: [9, 3, 5], proofHint: "A 90-day editorial plan where every pillar is justified by demand evidence and business linkage, plus the stop list of what you killed."
  },
  {
    key: "seo", label: "SEO and organic search",
    terms: ["seo", "search engine optimisation", "search engine optimization", "keyword research", "organic traffic", "organic search", "serp", "search intent", "on-page", "topical authority", "ahrefs", "semrush", "search console", "backlink"],
    trackRefs: [10, 9], proofHint: "One page retrofitted for intent with the keyword map, the internal links added, and what you would measure at 90 days."
  },
  {
    key: "technical-seo", label: "Technical SEO and site health",
    terms: ["technical seo", "structured data", "schema markup", "core web vitals", "site audit", "crawl budget", "screaming frog", "canonical", "redirects", "site architecture", "page speed", "indexation", "xml sitemap"],
    trackRefs: [10, 14, 9], proofHint: "A crawl audit that ends in a prioritised fix list ranked by traffic at risk, not a 60-page tool export."
  },
  {
    key: "aeo-geo", label: "AI search and answer engine visibility",
    terms: ["answer engine", "aeo", "generative engine optimisation", "generative engine optimization", "ai overviews", "ai search", "llm visibility", "chatgpt visibility", "perplexity", "brand mentions", "zero-click", "citations"],
    trackRefs: [10, 9], proofHint: "An AI visibility audit with a fixed prompt set monitored over time and a citability retrofit on one live page."
  },
  {
    key: "cro", label: "Conversion rate optimisation",
    terms: ["conversion rate optimisation", "conversion rate optimization", "conversion optimisation", "conversion optimization", "cro", "funnel analysis", "landing page optimisation", "user testing", "heatmap", "session recording", "hotjar", "optimizely", "vwo", "friction audit"],
    trackRefs: [7, 8, 13], proofHint: "A funnel teardown that locates the leak with data first, then the fix, with the revenue arithmetic of closing it."
  },
  {
    key: "experimentation", label: "Experimentation and A/B testing",
    terms: ["a/b test", "ab test", "split test", "experimentation", "multivariate", "statistical significance", "sample size", "test roadmap", "hypothesis", "experiment design", "test velocity", "confidence interval", "control and variant"],
    trackRefs: [8, 13, 7], proofHint: "One full test design with the sample-size maths done before launch, and a results memo that reports the interval and names the decision."
  },
  {
    key: "analytics", label: "Analytics and measurement",
    terms: ["google analytics", "ga4", "attribution", "dashboards", "measurement plan", "tracking plan", "funnel metrics", "cohort analysis", "looker", "tableau", "power bi", "sql", "conversion tracking", "roi"],
    trackRefs: [13, 8], proofHint: "A measurement plan written before the campaign ran, sitting next to the report that used it and ended in a decision."
  },
  {
    key: "exec-reporting", label: "Executive reporting and business cases",
    terms: ["executive reporting", "board reporting", "reporting to senior", "monthly reporting", "kpi reporting", "quarterly business review", "qbr", "business case", "presenting to leadership", "executive summary", "c-suite", "senior leadership team"],
    trackRefs: [13, 18, 12], proofHint: "A one-page monthly report that opens with the decision you are asking for rather than the traffic chart, plus the business case behind one budget request."
  },
  {
    key: "lifecycle", label: "Lifecycle, email and retention",
    terms: ["lifecycle marketing", "email marketing", "email campaigns", "crm", "marketing automation", "nurture", "drip campaign", "retention", "churn", "win-back", "re-engagement", "onboarding flows", "personalisation", "personalization"],
    trackRefs: [11, 7], proofHint: "A full sequence with the trigger inventory, the objection each message handles, and the holdout group you kept to prove it worked."
  },
  {
    key: "deliverability", label: "Email deliverability and consent",
    terms: ["deliverability", "sender reputation", "inbox placement", "list hygiene", "spam complaints", "dmarc", "unsubscribe rate", "open rate", "click-through rate", "gdpr", "can-spam", "consent"],
    trackRefs: [11, 13], proofHint: "A deliverability and consent audit: authentication records, sunset policy, and what you stopped sending to protect the list."
  },
  {
    key: "martech-stack", label: "Marketing and CRM platforms",
    terms: ["klaviyo", "braze", "iterable", "marketo", "hubspot", "salesforce", "mailchimp", "customer.io", "activecampaign", "customer data platform", "zapier", "integrations", "api", "tag manager"],
    trackRefs: [11, 15, 13], proofHint: "A flow you built end to end in the platform itself, documented with the data fields it depends on and what breaks when they are empty."
  },
  {
    key: "gtm", label: "Go-to-market and product launches",
    terms: ["go-to-market", "gtm", "product launch", "launch plan", "product marketing", "pmm", "launch strategy", "pricing and packaging", "tiering", "adoption", "cross-functional launch", "beta"],
    trackRefs: [12, 4, 5], proofHint: "A one-page launch brief that diagnoses the motion, defends the tier you chose, and states what would make you delay the date."
  },
  {
    key: "sales-enablement", label: "Sales enablement and collateral",
    terms: ["sales enablement", "battle card", "battlecard", "sales collateral", "pitch deck", "sales training", "demo script", "one-pager", "enablement materials", "supporting the sales team"],
    trackRefs: [12, 4, 5], proofHint: "A battle card a salesperson used unedited, plus the call note or recording showing which line they actually said."
  },
  {
    key: "competitive-intel", label: "Competitive and market intelligence",
    terms: ["competitive analysis", "competitive intelligence", "competitor research", "market research", "market analysis", "competitive landscape", "industry trends", "win loss analysis", "market sizing", "tam"],
    trackRefs: [12, 4, 13], proofHint: "A competitor teardown that ends in one changed sentence of your own copy, not a feature grid nobody reads."
  },
  {
    key: "paid-performance", label: "Paid media and performance marketing",
    terms: ["paid media", "paid social", "google ads", "meta ads", "ppc", "performance marketing", "demand generation", "roas", "cac", "media buying", "retargeting", "budget allocation"],
    trackRefs: [7, 13, 1], proofHint: "Message-match evidence from ad through to landing page, with the cost per acquisition before and after the change."
  },
  {
    key: "content-design", label: "Content design and UX writing",
    terms: ["ux writing", "content design", "microcopy", "product copy", "in-app copy", "error messages", "empty states", "information architecture", "figma", "design system", "user flows", "usability", "wireframe", "prototype"],
    trackRefs: [14, 6], proofHint: "A microcopy set covering error and empty states, annotated with the principle each change serves and the usability problem it removed."
  },
  {
    key: "accessibility", label: "Accessibility and plain language",
    terms: ["accessibility", "wcag", "inclusive language", "plain language", "alt text", "screen reader", "readability", "aria", "reading level", "colour contrast", "color contrast"],
    trackRefs: [14, 3], proofHint: "An accessibility pass on real content showing headings, link text, alt text and reading grade before and after."
  },
  {
    key: "ai-orchestration", label: "AI tooling and prompt systems",
    terms: ["generative ai", "prompt engineering", "chatgpt", "claude", "llm", "ai tools", "ai-assisted", "ai workflow", "copilot", "ai content", "workflow automation", "ai governance", "prompt library"],
    trackRefs: [15, 6], proofHint: "A prompt library with an eval set that catches regressions, plus a one-page policy naming what you never delegate to a model."
  },
  {
    key: "customer-service", label: "Customer service delivery",
    terms: ["customer service", "customer support", "help desk", "live chat", "customer queries", "inbound enquiries", "service delivery", "phone support", "email support", "customer facing", "service excellence"],
    trackRefs: [16, 6], proofHint: "Ten scenario replies with the moves annotated, including one refusal and one repeat contact you had to own."
  },
  {
    key: "cx-operations", label: "Support operations, SLAs and QA",
    terms: ["service level", "slas", "first contact resolution", "fcr", "average handle time", "aht", "quality assurance", "qa scorecard", "ticket volume", "backlog", "workforce management", "support operations", "csat", "customer satisfaction score"],
    trackRefs: [16, 13], proofHint: "An SLA matrix with a calibrated QA scorecard and one root-cause report costed in agent-hours saved."
  },
  {
    key: "support-tooling", label: "Helpdesk and ticketing systems",
    terms: ["zendesk", "intercom", "freshdesk", "gorgias", "help scout", "kustomer", "service cloud", "jira service desk", "ticketing system", "omnichannel", "chatbot", "live chat tools"],
    trackRefs: [16, 15], proofHint: "Macros, tags and routing rules you configured yourself, with the reporting that shows what happened to handle time."
  },
  {
    key: "self-service-knowledge", label: "Knowledge base and ticket deflection",
    terms: ["knowledge base", "help centre", "help center", "self-service", "faq", "macros", "canned responses", "ticket deflection", "support content", "how-to articles", "documentation"],
    trackRefs: [16, 9, 14], proofHint: "Three help articles rewritten against real ticket language, with the contact-rate change on the topics they cover."
  },
  {
    key: "escalation-complaints", label: "Complaint handling and de-escalation",
    terms: ["de-escalation", "escalations", "difficult customers", "conflict resolution", "complaints procedure", "empathy", "refunds", "angry customers", "service recovery", "root cause", "apology"],
    trackRefs: [16, 18, 5], proofHint: "A recovery script for the worst case you have handled, showing what you conceded, what you refused, and how you closed the loop internally."
  },
  {
    key: "corporate-comms", label: "Corporate and media communications",
    terms: ["corporate communications", "strategic communications", "public relations", "media relations", "press release", "press office", "spokesperson", "thought leadership", "external communications", "media enquiries", "journalists", "comms plan"],
    trackRefs: [18, 5], proofHint: "A comms plan with the audience map, the spokespeople named, and a measurement model that goes beyond impressions."
  },
  {
    key: "internal-comms", label: "Internal and change communications",
    terms: ["internal communications", "employee communications", "change communication", "change management", "employee engagement", "town hall", "intranet", "leadership communications", "all-hands", "manager cascade"],
    trackRefs: [18, 5], proofHint: "A change comms plan with the preferred-sender logic, the manager pack, and the listening cadence that catches what the survey misses."
  },
  {
    key: "crisis-reputation", label: "Crisis, issues and reputation management",
    terms: ["crisis communications", "issues management", "reputation management", "holding statement", "risk register", "media training", "escalation protocol", "public affairs", "regulatory communications", "crisis plan"],
    trackRefs: [18, 16], proofHint: "A crisis pack: holding statement, internal note issued before external, stakeholder map, and the trigger that moves an issue to a crisis."
  },
  {
    key: "stakeholder", label: "Stakeholder and cross-functional management",
    terms: ["stakeholder management", "senior stakeholders", "cross-functional", "influence without authority", "business partnering", "working with product", "align stakeholders", "buy-in", "internal clients", "matrix organisation"],
    trackRefs: [12, 18, 14], proofHint: "The same recommendation pitched three ways, to finance, to sales and to product, with the opening changed and the reason why."
  },
  {
    key: "agency-budget", label: "Agency briefing, vendors and budget",
    terms: ["briefing agencies", "agency management", "external agencies", "freelancers", "vendor management", "budget management", "creative brief", "brief writing", "manage suppliers", "procurement", "scope of work"],
    trackRefs: [12, 9, 18], proofHint: "A creative brief tight enough that round one came back usable, plus the written feedback you gave on round two."
  },
  {
    key: "project-management", label: "Project and content operations",
    terms: ["project management", "asana", "jira", "trello", "monday.com", "notion", "clickup", "airtable", "prioritisation", "competing deadlines", "multiple projects", "workflow", "content operations", "agile"],
    trackRefs: [9, 12], proofHint: "A documented pipeline with gates, owners and turnaround times between roles, and the throughput before and after you introduced it."
  },
  {
    key: "cms", label: "CMS and publishing",
    terms: ["cms", "wordpress", "webflow", "contentful", "storyblok", "drupal", "shopify", "hubspot cms", "sitecore", "html", "publishing", "metadata"],
    trackRefs: [9, 14], proofHint: "Live URLs you published yourself with metadata, schema and internal links done properly, not a Google Doc."
  },
  {
    key: "bilingual", label: "Bilingual and localisation",
    terms: ["bilingual", "multilingual", "fluent in french", "french speaking", "native speaker", "spanish", "german", "dutch", "localisation", "localization", "transcreation", "translation", "language skills"],
    trackRefs: [3, 9], proofHint: "A side-by-side adaptation with an annotation column explaining each strategic change, not the linguistic one."
  },
  {
    key: "team-leadership", label: "Team leadership and coaching",
    terms: ["line management", "direct reports", "manage a team", "mentoring", "coaching", "people management", "team lead", "performance management", "recruitment", "training the team", "capacity planning"],
    trackRefs: [16, 17, 12], proofHint: "A coaching record for one person: the scorecard, what you changed in your feedback, and the outcome you can point at."
  },
  {
    key: "portfolio-samples", label: "Portfolio and writing samples",
    terms: ["portfolio", "writing samples", "work samples", "case studies", "published work", "attach samples", "links to your work", "cover letter"],
    trackRefs: [17, 6], proofHint: "Three pieces chosen for this specific advert, each with a short note on the brief, the constraint and the result, rather than a folder of everything."
  }
];
