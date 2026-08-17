// Competency taxonomy: job-description language → curriculum coverage → what proves it.
// `terms` are matched as substrings against pasted advert text, so they must be specific
// enough not to fire on everything.
export const COMPETENCIES = [
  {
    key: 'conversion-copy', label: 'Conversion copywriting',
    terms: ['conversion copy', 'direct response', 'sales copy', 'landing page copy', 'persuasive writing', 'headline testing', 'copywriting'],
    trackRefs: [6, 7, 1], proofHint: 'A before/after rewrite with the diagnosis, the constraint you wrote against, and the metric it moved.'
  },
  {
    key: 'experimentation', label: 'Experimentation and A/B testing',
    terms: ['a/b testing', 'ab testing', 'split testing', 'experimentation', 'conversion rate optimisation', 'conversion rate optimization', 'cro', 'statistical significance', 'test roadmap', 'multivariate'],
    trackRefs: [8, 7, 13], proofHint: 'One full test design with the sample-size maths, plus a results memo that reports the interval and the decision.'
  },
  {
    key: 'content-strategy', label: 'Content strategy and editorial ownership',
    terms: ['content strategy', 'editorial calendar', 'content pillars', 'content planning', 'editorial strategy', 'content roadmap', 'topic cluster'],
    trackRefs: [9, 3, 5], proofHint: 'A 90-day plan with pillars justified by demand and business linkage, and an explicit stop list.'
  },
  {
    key: 'seo', label: 'SEO and organic growth',
    terms: ['seo', 'search engine optimisation', 'search engine optimization', 'organic traffic', 'keyword research', 'serp', 'search console', 'on-page', 'technical seo', 'topical authority'],
    trackRefs: [10, 9], proofHint: 'A page retrofitted for intent and extraction, with the before/after and what you would measure.'
  },
  {
    key: 'aeo', label: 'AI search and answer engine visibility',
    terms: ['ai search', 'answer engine', 'aeo', 'geo', 'generative engine', 'ai overviews', 'llm visibility', 'chatgpt visibility', 'brand mentions'],
    trackRefs: [10, 9], proofHint: 'An AI visibility audit with a monitored prompt set and a citability retrofit plan.'
  },
  {
    key: 'positioning', label: 'Positioning and messaging',
    terms: ['positioning', 'messaging framework', 'value proposition', 'brand narrative', 'messaging architecture', 'differentiation', 'category creation', 'narrative'],
    trackRefs: [4, 5, 1], proofHint: 'A positioning canvas naming the alternatives and the trade-off of the category choice, plus the messaging house.'
  },
  {
    key: 'gtm', label: 'Go-to-market and launches',
    terms: ['go-to-market', 'gtm', 'product launch', 'launch plan', 'product marketing', 'pmm', 'sales enablement', 'battle card', 'competitive intelligence'],
    trackRefs: [12, 4, 5], proofHint: 'A one-page GTM brief with the motion diagnosed, the tier defended, and a battle card sales would actually use.'
  },
  {
    key: 'lifecycle', label: 'Lifecycle, email and retention',
    terms: ['lifecycle marketing', 'crm', 'email marketing', 'marketing automation', 'nurture', 'drip campaign', 'retention marketing', 'churn', 'klaviyo', 'hubspot', 'braze', 'marketo', 'mailchimp'],
    trackRefs: [11, 7], proofHint: 'A full sequence with the trigger inventory and the objection each email handles, not just the copy.'
  },
  {
    key: 'analytics', label: 'Analytics and measurement',
    terms: ['google analytics', 'ga4', 'analytics', 'data-driven', 'reporting', 'dashboards', 'attribution', 'kpis', 'looker', 'tableau', 'measurement'],
    trackRefs: [13, 8], proofHint: 'A measurement plan written before the campaign, and a one-page report that ends in a decision.'
  },
  {
    key: 'jtbd-research', label: 'Customer research and insight',
    terms: ['customer research', 'user research', 'voice of customer', 'jobs to be done', 'jtbd', 'customer interviews', 'win/loss', 'persona', 'segmentation', 'survey design'],
    trackRefs: [2, 3], proofHint: 'A message bank of verbatim quotes ranked by frequency and intensity, mapped to the messages it produced.'
  },
  {
    key: 'ux-writing', label: 'UX writing and content design',
    terms: ['ux writing', 'content design', 'microcopy', 'product copy', 'in-app copy', 'error messages', 'design system', 'figma', 'information architecture'],
    trackRefs: [14, 6], proofHint: 'A microcopy set with error states and empty states, annotated against the UX law each change serves.'
  },
  {
    key: 'ai-tooling', label: 'AI tooling and governance',
    terms: ['ai tools', 'generative ai', 'prompt engineering', 'chatgpt', 'claude', 'llm', 'ai-assisted', 'ai workflow', 'automation'],
    trackRefs: [15, 6], proofHint: 'A prompt library with an eval set, plus a governance page saying what is never delegated.'
  },
  {
    key: 'customer-service', label: 'Customer service delivery',
    terms: ['customer service', 'customer support', 'help desk', 'ticketing', 'zendesk', 'intercom', 'freshdesk', 'live chat', 'de-escalation', 'complaint handling', 'csat'],
    trackRefs: [16, 6], proofHint: 'Scenario replies with the moves annotated, including one refusal and one repeat contact.'
  },
  {
    key: 'cx-operations', label: 'Support operations and QA',
    terms: ['sla', 'quality assurance', 'qa scorecard', 'first contact resolution', 'fcr', 'average handle time', 'support operations', 'knowledge base', 'macros', 'workforce management'],
    trackRefs: [16, 13], proofHint: 'An SLA matrix, a calibrated QA scorecard, and a root-cause report costed in agent-hours.'
  },
  {
    key: 'comms', label: 'Strategic and corporate communications',
    terms: ['corporate communications', 'strategic communications', 'public relations', 'media relations', 'press release', 'spokesperson', 'reputation management', 'crisis communications', 'issues management', 'public affairs'],
    trackRefs: [18, 5], proofHint: 'A crisis pack: holding statement, internal note, stakeholder map and the measurement model behind it.'
  },
  {
    key: 'internal-comms', label: 'Internal and change communication',
    terms: ['internal communications', 'employee communications', 'change management', 'change communication', 'employee engagement', 'town hall', 'intranet'],
    trackRefs: [18, 5], proofHint: 'A change comms plan with the preferred-sender logic, manager pack and listening cadence.'
  },
  {
    key: 'stakeholder', label: 'Stakeholder and executive management',
    terms: ['stakeholder management', 'cross-functional', 'senior stakeholders', 'executive communication', 'influence without authority', 'business partnering'],
    trackRefs: [12, 18, 14], proofHint: 'The same plan pitched three ways, to a CFO, a sales lead and product, with the opening changed.'
  },
  {
    key: 'brand', label: 'Brand and creative direction',
    terms: ['brand voice', 'tone of voice', 'brand guidelines', 'style guide', 'creative direction', 'brand strategy'],
    trackRefs: [5, 4], proofHint: 'A voice guide with rejected examples and a tone-by-context matrix, not three adjectives.'
  },
  {
    key: 'paid', label: 'Paid media and performance marketing',
    terms: ['paid media', 'paid social', 'google ads', 'meta ads', 'ppc', 'performance marketing', 'demand generation', 'roas', 'cac'],
    trackRefs: [7, 13, 1], proofHint: 'Message-match analysis from ad through to landing page, with the conversion maths.'
  },
  {
    key: 'project', label: 'Project and workflow management',
    terms: ['project management', 'asana', 'jira', 'trello', 'monday.com', 'notion', 'workflow', 'prioritisation', 'roadmap', 'agile'],
    trackRefs: [9, 12], proofHint: 'A documented content ops pipeline with gates, owners and SLAs between roles.'
  },
  {
    key: 'cms', label: 'CMS and publishing',
    terms: ['cms', 'wordpress', 'webflow', 'contentful', 'sanity', 'hubspot cms', 'publishing', 'html'],
    trackRefs: [9, 14], proofHint: 'Evidence you shipped, not just wrote: live pages with metadata, schema and internal links done properly.'
  },
  {
    key: 'bilingual', label: 'Bilingual and localisation',
    terms: ['bilingual', 'french', 'spanish', 'localisation', 'localization', 'transcreation', 'multilingual', 'translation'],
    trackRefs: [3, 9], proofHint: 'A side-by-side adaptation with an annotation column explaining each strategic change, not the linguistic one.'
  },
  {
    key: 'accessibility', label: 'Accessibility and inclusive content',
    terms: ['accessibility', 'wcag', 'inclusive language', 'plain language', 'alt text', 'screen reader'],
    trackRefs: [14, 3], proofHint: 'An accessibility pass on real content: headings, link text, alt text, contrast, reading grade before and after.'
  },
  {
    key: 'editing', label: 'Editing and quality control',
    terms: ['editing', 'proofreading', 'copy editing', 'style guide compliance', 'editorial standards', 'fact checking', 'sub-editing'],
    trackRefs: [6, 9], proofHint: 'A teardown showing rule violations line by line, with a rewrite at 35 to 50 percent fewer words.'
  }
];
