/**
 * Platform entity profiles for the manufacturing / complex-B2B benchmark.
 *
 * SOURCING RULE (GUARDRAILS 2.1, 2.2, 2.4)
 * Every value below was read from the vendor's own site or documentation on the
 * date in VERIFIED_ON. Nothing here came from another comparison site. Where a
 * vendor does not publish a figure, the value is the literal string
 * NOT_PUBLISHED — never a guess, never an em-dash, never a number carried over
 * from a third party.
 *
 * If you change a fact, change the matching entry in `sources` too. A claim
 * without a source URL in the same object is a bug.
 */

export const NOT_PUBLISHED = 'Not published'

/**
 * The date every fact on these pages was last read from source.
 *
 * A profile added in a later research pass carries its own `verifiedOn` and
 * reads through `platformVerifiedOn()`. Bumping this constant would restamp
 * every older profile with a date on which its facts were not actually
 * re-read — which is the one thing the sourcing rule above forbids.
 */
export const VERIFIED_ON = '2026-08-31'

/** The ERP-side cluster, read from vendor sources in the 8 September 2026 pass. */
export const VERIFIED_ON_ERP = '2026-09-08'

/**
 * The nine buying criteria for complex-catalogue B2B sales. Order matters:
 * commercial and data-connectivity rows first, ecosystem last.
 */
export const CRITERIA = [
  { key: 'erpConnectivity', label: 'ERP connectivity', short: 'ERP' },
  { key: 'catalogueComplexity', label: 'Product catalogue complexity', short: 'Catalogue' },
  { key: 'technicalSpecs', label: 'Technical specifications', short: 'Specs' },
  { key: 'quoteGeneration', label: 'Quote generation', short: 'Quoting' },
  { key: 'marginProtection', label: 'Margin protection', short: 'Margin' },
  { key: 'dealerDistributor', label: 'Dealer / distributor management', short: 'Channel' },
  { key: 'crmAutomation', label: 'CRM automation', short: 'CRM' },
  { key: 'implementationTime', label: 'Implementation time', short: 'Time to live' },
  { key: 'microsoftEcosystem', label: 'Microsoft ecosystem compatibility', short: 'Microsoft' },
]

export const PLATFORMS = {
  salezx: {
    slug: 'salezx',
    name: 'Salezx',
    shortName: 'Salezx',
    vendor: 'Salezx',
    homepage: 'https://www.salezx.com',
    category: 'AI sales brain inside Microsoft Teams and Microsoft 365',
    metaTitle: 'Salezx AI Sales Brain: Pricing & Limits (2026)',
    metaDescription:
      'What Salezx publishes: Teams-native AI sales brain, Ask-ERP report lookups, Quote & Propose, Margin Guard, and transaction pricing.',
    definition:
      "Salezx is a conversational AI sales layer that runs inside Microsoft Teams and Microsoft 365 Copilot, answering from CRM records, ERP reports and uploaded documents, and priced on annual AI transactions rather than per seat.",
    oneLine:
      'A conversational sales layer that runs inside Microsoft Teams and Microsoft 365 Copilot and answers from CRM records, ERP reports and your own documents.',
    whatItIs:
      'Salezx describes itself as the "AI Sales Brain for Microsoft Teams & Microsoft 365". It sits on top of systems a company already runs rather than replacing them: it reads the CRM, ERP reports, product and pricing catalogues, email and documents, then answers questions and drafts work in chat. The vendor splits the product into three components — Salezx (core sales brain), Salezx Grow (lead generation) and Salezx Customer (service).',
    surface: 'Microsoft Teams and Microsoft 365 Copilot. The vendor states no separate licences are needed for the chat surface.',
    capabilities: [
      { name: 'Brief-me', detail: 'Account 360, product and price questions, objection and battlecard recall.' },
      { name: 'Auto-CRM', detail: 'Voice, WhatsApp and chat capture, automatic activity logging, records updated by conversation.' },
      { name: 'Ask-ERP', detail: '"Stock, credit, billing & order status in chat — from your ERP reports".' },
      { name: 'Follow-up', detail: 'Cue-driven nudges, deal-slippage alerts, next-best-action.' },
      { name: 'Account Intel', detail: 'Buying-committee mapping, people-movement alerts, credit enrichment.' },
      { name: 'Quote & Propose / CPQ', detail: 'Listed as add-on sales services alongside RFP & Tender.' },
      { name: 'Margin Guard', detail: 'Listed as an add-on sales service.' },
      { name: 'Review & Forecast', detail: '"Live answers, commitment capture, forecast from discussion".' },
    ],
    integrations: {
      crm: ['Salesforce', 'Dynamics 365', 'Zoho'],
      erp: 'Reads "ERP reports" over secure API integration. Salezx names no ERP vendor — no SAP, Oracle or Infor claim appears on its own site.',
      other: ['Microsoft Teams', 'Microsoft 365', 'Microsoft 365 Copilot', 'LinkedIn', 'WhatsApp', 'IndiaMART', 'TradeIndia'],
    },
    pricing: {
      model: 'Annual plans priced on AI transactions rather than seats. "Cost scales with transactions, not headcount."',
      currency: 'INR',
      tiers: [
        { plan: 'Run', price: NOT_PUBLISHED, detail: 'Named as a plan tier. No price shown on the pricing page. "No setup fee on Run & Drive."' },
        { plan: 'Drive', price: '₹8.6 L/year', detail: '25 users, 70,000 AI transactions per year, 48-hour go-live. Listed against ₹9.5 L with "Save 10% · billed annually".' },
        { plan: 'Command', price: NOT_PUBLISHED, detail: 'Named as a plan tier. No price shown on the pricing page.' },
      ],
      note: 'Core (Brief-me, Auto-CRM, Follow-up, Ask-ERP, Account Intel) is always included; "Add up to 4 more services". Team-size options run 10, 25, 50, 100 and 100+. Only one of the three tiers carries a published price, and it is quoted in Indian rupees only.',
    },
    implementation: '48-hour go-live. The published path is "30 min Trial → 2 hours Setup → 2 days Complete Go-Live", staged as Connect and Unify on day one, Converse and Act & Update on day two.',
    governance:
      '"Reads widely. Acts only in your CRM." Salezx states it reads the CRM, documents, ERP reports and channels but "only ever writes back to your CRM". Files and email are read-only.',
    industries: ['Manufacturing', 'Machinery, Equipment & Parts', 'Building Materials', 'Consumer Goods', 'Professional Services', 'Local Business'],
    criteria: {
      erpConnectivity: {
        value: 'Reads ERP reports via API',
        note: 'Ask-ERP returns "Stock, credit, billing & order status in chat — from your ERP reports". No ERP product is named by the vendor, so depth of connection cannot be verified from the site.',
      },
      catalogueComplexity: {
        value: 'Ingests product and pricing catalogues',
        note: 'Unifies "PDFs, Excel, Word files, product catalogs, and email context" at setup.',
      },
      technicalSpecs: {
        value: 'Yes — specs, compatibility, lead times',
        note: 'The Machinery, Equipment & Parts page cites "specs, compatibility, pricing, and lead times — instantly, for machinery, equipment, auto & spare parts, and medical devices".',
      },
      quoteGeneration: {
        value: 'Quote & Propose plus CPQ',
        note: 'Both listed as sales services on top of Core; the how-it-works page says the system "drafts quotes" on day two.',
      },
      marginProtection: {
        value: 'Margin Guard',
        note: 'Named as a discrete add-on service. The vendor publishes no detail on how the control works.',
      },
      dealerDistributor: {
        value: 'Dealer and channel use cases',
        note: 'Building Materials: "Drive dealer and channel sales… keep distributor relationships earning". Consumer Goods: "Move faster across a fragmented distributor and retail base".',
      },
      crmAutomation: {
        value: 'Auto-CRM, writes to CRM only',
        note: 'Logs activity and updates records from conversation. The CRM is the single write target by design.',
      },
      implementationTime: {
        value: '48-hour go-live',
        note: 'The shortest published implementation of the six platforms here.',
      },
      microsoftEcosystem: {
        value: 'Native to Teams and M365 Copilot',
        note: 'The product is delivered as a Teams / Microsoft 365 Copilot experience rather than a separate app.',
      },
    },
    strengths: [
      'The only platform of the six that publishes a pricing model explicitly decoupled from seat count — relevant when inside sales, field sales and customer service all need access.',
      'Quoting, margin and channel are named product surfaces, not inferred from a generic agent platform.',
      'Publishes a concrete implementation time (48 hours) where four of the six publish none.',
      'The read-wide / write-only-to-CRM boundary is stated plainly, which is unusual and easy to audit.',
    ],
    limits: [
      'Names no ERP vendor anywhere on its own site. "ERP reports" is a materially weaker claim than a certified SAP or Oracle connector, and buyers running S/4HANA should treat it as unverified until scoped.',
      'Only the Drive tier carries a published price, and only in Indian rupees. Run and Command are Not published, so total cost outside India cannot be modelled from public information.',
      'It is not a CRM. It requires Salesforce, Dynamics 365 or Zoho underneath.',
      'Publishes no customer counts, deployment scale, or third-party security certifications on the pages reviewed.',
    ],
    skipIf: 'Your sales team does not run on Microsoft Teams or Microsoft 365, or your evaluation requires a named, certified connector into a specific ERP.',
    sources: [
      { label: 'Salezx — home', url: 'https://www.salezx.com' },
      { label: 'Salezx — features', url: 'https://www.salezx.com/features' },
      { label: 'Salezx — pricing', url: 'https://www.salezx.com/pricing' },
      { label: 'Salezx — how it works', url: 'https://www.salezx.com/how-it-works' },
      { label: 'Salezx — industries', url: 'https://www.salezx.com/industries' },
    ],
  },

  'salesforce-agentforce': {
    slug: 'salesforce-agentforce',
    name: 'Salesforce Agentforce',
    shortName: 'Agentforce',
    vendor: 'Salesforce',
    homepage: 'https://www.salesforce.com/agentforce/',
    category: 'CRM-native agent platform with consumption pricing',
    metaTitle: 'Salesforce Agentforce Pricing & Limits (2026)',
    metaDescription:
      'Salesforce Agentforce pricing from the official rate card: $500 per 100k Flex Credits, $2 per conversation, and $125/user add-ons.',
    definition:
      "Salesforce Agentforce is a CRM-native platform for building and running autonomous AI agents over Salesforce data, sold on consumption through Flex Credits or Conversations, or per user.",
    oneLine:
      'Salesforce\'s agent layer over its own CRM, sold on consumption (Flex Credits or Conversations) or per user, with unmetered add-ons for employee-facing agents.',
    whatItIs:
      'Agentforce is the agent tier of the Salesforce platform. Salesforce sells it four ways and expects buyers to mix them: consumption pricing through Flex Credits or per-Conversation billing for customer-facing agents, and per-user licensing for employee-facing agents through add-ons or the Agentforce 1 editions. Usage is tracked in a product Salesforce calls Digital Wallet.',
    surface: 'The Salesforce platform — Sales Cloud, Service Cloud, Field Service and the Industries clouds. Salesforce also lists Agentforce in Slack.',
    capabilities: [
      { name: 'Flex Credits', detail: 'A pooled unit of payment drawn down per Action. "Agentforce actions are 20 Flex Credits, while Agentforce Voice actions are 30 Flex Credits."' },
      { name: 'Actions', detail: '"A specific function that an AI agent executes on the platform, such as updating a record, summarizing a complex case, answering a product inquiry, or executing a custom prompt or flow".' },
      { name: 'Digital Wallet', detail: 'Near real-time consumption tracking with threshold alerts and usage trends.' },
      { name: 'Buying models', detail: 'Pre-Purchase (pay upfront, draw down), Pre-Commit (baseline commitment, billed monthly in arrears, true-up at term end) and PayGo (no upfront commitment).' },
      { name: 'Agentforce Vibes / Coworker / Voice', detail: 'Listed as products alongside the core agent tiers.' },
    ],
    integrations: {
      crm: ['Salesforce Sales Cloud', 'Service Cloud', 'Field Service', 'Industries clouds'],
      erp: 'The Agentforce pricing page names no ERP connector. Salesforce lists MuleSoft separately under its platform products.',
      other: ['Slack', 'Data 360', 'AgentExchange'],
    },
    pricing: {
      model: 'Consumption (Flex Credits or Conversations) for customer-facing agents; per-user licensing for employee-facing agents. Salesforce notes the page "is provided for information purposes only and is subject to change".',
      currency: 'USD (also published in EUR, GBP, AUD, JPY, SEK)',
      tiers: [
        { plan: 'Flex Credits', price: '$500 USD per 100k Credits', detail: 'Also €500, £400, AU$700, ¥60,000, kr5,000 per 100k Credits. Each Agentforce action consumes 20 Credits; Voice actions 30.' },
        { plan: 'Conversations', price: '$2 USD per conversation', detail: 'Also €2, £1.60, AU$2.80, ¥240, kr20. Customer-facing agents and Digital Wallet.' },
        { plan: 'Agentforce add-ons', price: '$125 user/month', detail: 'For Sales, Service and Field Service. "Unmetered Agentforce usage for employees", full AI suite, AI-powered analytics and Prompt Builder.' },
        { plan: 'Agentforce Industries add-ons', price: '$150 user/month', detail: 'For the Industries clouds. Everything in the Sales and Service add-ons plus industry-specific AI.' },
        { plan: 'Agentforce 1 Editions', price: 'from $550 user/month', detail: 'Sales, Service, Field Service and Industries editions. Agentforce add-on included plus 2.5M Flex Credits per org per year.' },
        { plan: 'Agentforce User License', price: '$5 USD/user/month', detail: 'Company-wide employee access. Requires Flex Credits. "Access to limited Salesforce CRM objects".' },
      ],
      note: 'The per-user prices sit on top of the underlying Salesforce licences, and the $5 and consumption tiers explicitly require a Flex Credit balance. Modelling total cost requires both numbers.',
    },
    implementation: NOT_PUBLISHED,
    governance: 'Digital Wallet provides near real-time consumption visibility with proactive threshold alerts. Salesforce states Pre-Commit is "widely available later this year".',
    industries: ['Manufacturing', 'Consumer Goods', 'Automotive', 'Communications', 'Life Sciences', 'and other industry clouds'],
    criteria: {
      erpConnectivity: {
        value: NOT_PUBLISHED,
        note: 'No ERP connector is named on the Agentforce pricing page. Salesforce lists MuleSoft as a separate platform product.',
      },
      catalogueComplexity: {
        value: NOT_PUBLISHED,
        note: 'Not addressed on the Agentforce pages reviewed. Salesforce sells a separate Manufacturing Cloud with its own pricing page.',
      },
      technicalSpecs: { value: NOT_PUBLISHED, note: 'Not addressed on the pages reviewed.' },
      quoteGeneration: { value: NOT_PUBLISHED, note: 'Not named on the Agentforce pricing page.' },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named on the pages reviewed.' },
      dealerDistributor: {
        value: 'Manufacturing Cloud, "Simplify Channel Engagement"',
        note: 'Salesforce lists "Modernize Commercial Operations", "Transform the Service Experience" and "Simplify Channel Engagement" as its manufacturing solutions, delivered through Manufacturing Cloud rather than Agentforce itself.',
      },
      crmAutomation: {
        value: 'Actions update CRM records',
        note: 'Record updates are a named Action type, metered at 20 Flex Credits each. Automation depth is the strongest of the six inside Salesforce data.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'No implementation time is published on the pricing page.' },
      microsoftEcosystem: {
        value: 'Slack, not Microsoft',
        note: 'Salesforce lists Agentforce in Slack. No Teams or Microsoft 365 surface is published. Microsoft\'s own Sales agent can read Salesforce CRM data from Outlook and Teams.',
      },
    },
    strengths: [
      'The most transparent consumption rate card of the six — unit price, credits per action, and worked monthly examples are all published.',
      'Deepest automation over Salesforce\'s own CRM data, with record updates as a first-class metered Action.',
      'Three buying models (Pre-Purchase, Pre-Commit, PayGo) let a buyer start without an upfront commitment.',
      'Digital Wallet gives near real-time consumption visibility, which matters because the pricing is metered.',
    ],
    limits: [
      'Cost is genuinely hard to forecast. At 20 Credits per action and $500 per 100k Credits, a single rep running 20 requests a day is a published $120/month example — before the underlying Salesforce licence.',
      'Nothing manufacturing-specific is published at the Agentforce layer. Catalogue, quoting and margin work sit in separately licensed products.',
      'Salesforce publishes no implementation time.',
      'The pricing page carries an explicit "subject to change" disclaimer, so any model built from it has a shelf life.',
    ],
    skipIf: 'Your customer, pricing and inventory data does not already live in Salesforce, or you need a predictable annual cost rather than a metered one.',
    sources: [
      { label: 'Salesforce — Agentforce pricing', url: 'https://www.salesforce.com/agentforce/pricing/' },
      { label: 'Salesforce — Agentforce', url: 'https://www.salesforce.com/agentforce/' },
    ],
  },

  'microsoft-dynamics-365-copilot': {
    slug: 'microsoft-dynamics-365-copilot',
    name: 'Microsoft Dynamics 365 + Copilot',
    shortName: 'Dynamics 365',
    vendor: 'Microsoft',
    homepage: 'https://www.microsoft.com/en-us/dynamics-365/products/sales/pricing',
    category: 'CRM with Copilot and prebuilt agents included from the Enterprise tier',
    metaTitle: 'Microsoft Dynamics 365 Copilot Pricing (2026)',
    metaDescription:
      'Official Dynamics 365 Sales pricing ($65, $105, $150/user/mo), Copilot integration capabilities, and published sales agent limits.',
    definition:
      "Microsoft Dynamics 365 + Copilot is a CRM whose Sales Enterprise tier bundles Copilot and prebuilt agents into the seat price, with a Sales agent that surfaces CRM data inside Outlook and Teams.",
    oneLine:
      'Microsoft\'s CRM, where Copilot and prebuilt agents are bundled into the $105 Enterprise tier and the Sales agent surfaces CRM data inside Outlook and Teams.',
    whatItIs:
      'Two things sold together. Dynamics 365 Sales is the CRM, and from the Enterprise tier upward Microsoft includes "Copilot in Dynamics 365 and agentic capabilities" in the seat price. Separately, the Sales agent — the product formerly marketed as Copilot for Sales — is an assistant that brings CRM insights into Outlook and Teams, and it works with Salesforce as well as Dynamics.',
    surface: 'Dynamics 365 Sales, plus Microsoft Outlook and Microsoft Teams through the Sales agent.',
    capabilities: [
      { name: 'Copilot in Dynamics 365', detail: 'Included from the Sales Enterprise tier: natural language insights, email and meeting assistance, opportunity summaries.' },
      { name: 'Prebuilt agents', detail: 'Microsoft names the Sales Close Agent as an example of a prebuilt agent available in Sales Enterprise.' },
      { name: 'Sales agent (in Outlook and Teams)', detail: '"Connect CRM data to get tailored insights from Dynamics 365 Sales or Salesforce." Captures insights and action items from Teams meetings; drafts email and next steps in Outlook.' },
      { name: 'Copilot Credits', detail: 'Sales Premium includes 1,000 Copilot Credits alongside Sales Insights and AI-powered data enrichment.' },
    ],
    integrations: {
      crm: ['Dynamics 365 Sales', 'Salesforce (via the Sales agent)'],
      erp: 'Dynamics 365 is Microsoft\'s own ERP and CRM family. The Sales pricing page publishes no third-party ERP connector.',
      other: ['Microsoft 365', 'Outlook', 'Teams', 'LinkedIn Sales Navigator (via Microsoft Relationship Sales)'],
    },
    pricing: {
      model: 'Per user per month, paid yearly. Copilot capability is tier-gated rather than sold separately for the CRM.',
      currency: 'USD',
      tiers: [
        { plan: 'Dynamics 365 Sales Professional', price: '$65.00 user/month', detail: 'Paid yearly. Core sales force automation, Microsoft 365 interoperation, reporting and dashboards. Copilot is not included.' },
        { plan: 'Dynamics 365 Sales Enterprise', price: '$105.00 user/month', detail: 'Paid yearly. "Includes Copilot in Dynamics 365 and agentic capabilities", access to prebuilt agents like the Sales Close Agent.' },
        { plan: 'Dynamics 365 Sales Premium', price: '$150.00 user/month', detail: 'Paid yearly. Everything in Enterprise plus 1,000 Copilot Credits, Sales Insights, AI-powered recommended actions and data enrichment.' },
        { plan: 'Microsoft Relationship Sales', price: 'Variable', detail: 'Sales Enterprise plus LinkedIn Sales Navigator. 10-seat minimum.' },
        { plan: 'Microsoft 365 Copilot (add-on)', price: '$18.00 user/month', detail: 'Paid yearly, discounted from $21.00 through 31 December 2026; $25.20 billed monthly. "A separate license for a qualifying Microsoft 365 plan is required."' },
      ],
      note: 'The Sales agent\'s own licensing is not published on the product page — Microsoft directs buyers to the Microsoft Product Terms or a Microsoft representative.',
    },
    implementation: NOT_PUBLISHED,
    governance:
      'Microsoft states the Sales agent "allows administrators and users to access content and share data outside of Microsoft 365, including with third-party customer relationship management (CRM) services", and that data sharing is not enabled until administrators and users consent. Admin and CRM security-role requirements are documented.',
    industries: [],
    criteria: {
      erpConnectivity: {
        value: 'Own ERP family; no third-party connector published',
        note: 'Dynamics 365 spans ERP and CRM, so the connection is internal. The Sales pricing page publishes no SAP, Oracle or Infor connector.',
      },
      catalogueComplexity: { value: NOT_PUBLISHED, note: 'Not addressed on the Sales pricing page.' },
      technicalSpecs: { value: NOT_PUBLISHED, note: 'Not addressed on the Sales pricing page.' },
      quoteGeneration: { value: NOT_PUBLISHED, note: 'Not named on the Sales pricing page or in the Sales agent overview.' },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named on the pages reviewed.' },
      dealerDistributor: { value: NOT_PUBLISHED, note: 'Not addressed on the Sales pricing page.' },
      crmAutomation: {
        value: 'Copilot and prebuilt agents from $105/user',
        note: 'Opportunity summaries, email and meeting assistance, and agents such as the Sales Close Agent are bundled rather than metered.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'No implementation time is published.' },
      microsoftEcosystem: {
        value: 'Native, with two documented exclusions',
        note: 'Microsoft states the Sales agent "is not available on Microsoft Dynamics 365 Customer Engagement (on-premises)" and "is not supported in Government Community Cloud (GCC), including USG, and Department of Defense (DoD)".',
      },
    },
    strengths: [
      'Copilot is bundled into the seat price from $105/user/month rather than metered, which makes annual cost the easiest of the six to forecast.',
      'The Sales agent reads Salesforce as well as Dynamics, so a Microsoft-shop rep can keep Outlook and Teams as the working surface without moving CRM.',
      'Publishes exclusions plainly — the on-premises and GCC/DoD limits are documented rather than discovered during rollout.',
      'Dynamics 365 spans ERP and CRM in one family, removing the integration problem for companies already standardised on it.',
    ],
    limits: [
      'Nothing manufacturing-specific — catalogue depth, quoting, margin and channel management are all Not published on the Sales pricing page.',
      'Sales agent licensing is not published; Microsoft points to Product Terms, so the true per-seat cost needs a conversation with Microsoft.',
      'On-premises Dynamics 365 Customer Engagement is excluded outright, which rules out a real slice of manufacturing installed base.',
      'Costs stack: the CRM seat, optionally Microsoft 365 Copilot at $18/user/month, and a qualifying Microsoft 365 plan underneath it.',
    ],
    skipIf: 'You run Dynamics 365 Customer Engagement on-premises, operate in GCC or DoD environments, or need published quoting and margin capability rather than general CRM AI.',
    sources: [
      { label: 'Microsoft — Dynamics 365 Sales pricing', url: 'https://www.microsoft.com/en-us/dynamics-365/products/sales/pricing' },
      { label: 'Microsoft Learn — Sales agent overview', url: 'https://learn.microsoft.com/en-us/microsoft-sales-copilot/introduction' },
      { label: 'Microsoft — Microsoft 365 Copilot for business', url: 'https://www.microsoft.com/en-us/microsoft-365/copilot/business' },
    ],
  },

  'servicenow-ai-agents': {
    slug: 'servicenow-ai-agents',
    name: 'ServiceNow AI Agents',
    shortName: 'ServiceNow',
    vendor: 'ServiceNow',
    homepage: 'https://www.servicenow.com/products/ai-agents.html',
    category: 'Cross-departmental agent orchestration on the ServiceNow Platform',
    metaTitle: 'ServiceNow AI Agents Pricing & Limits (2026)',
    metaDescription:
      'ServiceNow AI Agent Orchestrator and Studio explained from official docs: features, Pro Plus bundling, and workflow pricing.',
    definition:
      "ServiceNow AI Agents is a cross-departmental agent orchestration layer on the ServiceNow Platform, included at no additional cost for Pro Plus and Enterprise Plus customers.",
    oneLine:
      'An agent control tower for companies already running ServiceNow, included at no additional cost for Pro Plus and Enterprise Plus customers.',
    whatItIs:
      'ServiceNow positions the platform itself as "the AI agent control tower — a connection layer across every corner of a business". AI Agent Orchestrator coordinates teams of specialised agents across departments; AI Agent Studio lets people build custom agents from natural-language prompts rather than code; Workflow Data Fabric supplies them with enterprise data through zero-copy integrations.',
    surface: 'The ServiceNow Platform — IT, customer service, HR and other workflows.',
    capabilities: [
      { name: 'AI Agent Orchestrator', detail: 'Coordinates collaboration among teams of AI agents, "enabling inter-agent communication and centralized coordination… regardless of where the process starts".' },
      { name: 'AI Agent Studio', detail: 'Builds custom agents "through natural language prompts—not code", then guides users through creating, testing and activating them.' },
      { name: 'Workflow Data Fabric', detail: '"Zero copy integrations… allow businesses to securely connect to their data sources without moving or duplicating data."' },
      { name: 'Prebuilt agents', detail: '"Thousands of pre-built AI agents for every workflow" across IT, customer service and HR.' },
    ],
    integrations: {
      crm: ['ServiceNow Customer Service Management'],
      erp: 'Workflow Data Fabric connects structured and unstructured enterprise data with zero-copy integrations. No ERP product is named in the announcement.',
      other: ['ServiceNow Platform workflows'],
    },
    pricing: {
      model: 'Bundled into platform tiers, with consumption on top. ServiceNow publishes no per-seat list price.',
      currency: NOT_PUBLISHED,
      tiers: [
        {
          plan: 'Pro Plus / Enterprise Plus',
          price: 'Included at no additional cost',
          detail: 'ServiceNow states the full suite — including AI Agent Orchestrator and AI Agent Studio — "will be included at no additional cost for all Pro Plus and Enterprise Plus customers". The underlying platform subscription is not published.',
        },
        { plan: 'Consumption', price: NOT_PUBLISHED, detail: 'ServiceNow describes "a consumption-based model" that "extends the value of customers\' existing ServiceNow generative AI packages" without publishing a unit rate.' },
      ],
      note: 'ServiceNow publishes no list price for the platform itself, so total cost cannot be modelled from public information.',
    },
    implementation: NOT_PUBLISHED,
    governance: 'ServiceNow frames the Orchestrator as "one central location to analyze, manage, and govern AI agents across every corner of a business", with a human operator approving execution in its worked example.',
    industries: [],
    criteria: {
      erpConnectivity: {
        value: 'Zero-copy data fabric, no ERP named',
        note: 'Workflow Data Fabric connects data "no matter where it resides" without moving or duplicating it, but the announcement names no ERP product.',
      },
      catalogueComplexity: { value: NOT_PUBLISHED, note: 'Not addressed in the material reviewed.' },
      technicalSpecs: { value: NOT_PUBLISHED, note: 'Not addressed in the material reviewed.' },
      quoteGeneration: {
        value: 'Order management scoped to technology providers',
        note: 'ServiceNow\'s Sales and Order Management product is published as "for Technology Providers". It is not positioned for manufacturing quoting.',
      },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not addressed in the material reviewed.' },
      dealerDistributor: { value: NOT_PUBLISHED, note: 'Not addressed in the material reviewed.' },
      crmAutomation: {
        value: 'Cross-departmental agent orchestration',
        note: 'Strongest where a process crosses IT, service and HR. It is not a sales-force-automation CRM.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'No implementation time is published.' },
      microsoftEcosystem: { value: NOT_PUBLISHED, note: 'No Teams or Microsoft 365 surface is published in the material reviewed.' },
    },
    strengths: [
      'If you already hold Pro Plus or Enterprise Plus, the agent suite arrives at no additional licence cost — the only platform of the six that says so outright.',
      'Zero-copy data access is a genuine architectural advantage where data cannot be replicated for compliance reasons.',
      'Orchestration across departments is the real strength: processes that span service, IT and operations rather than a single seller\'s workflow.',
      'Governance is a named product surface, not an afterthought.',
    ],
    limits: [
      'It is not a sales platform. The nearest product, Sales and Order Management, is explicitly scoped to technology providers.',
      'No list price for the platform is published, so "no additional cost" only means anything once you know the Pro Plus or Enterprise Plus subscription.',
      'Catalogue, specs, quoting, margin and channel are all Not published.',
      'Buying it purely for a manufacturing sales use case means paying for a platform whose value sits mostly elsewhere.',
    ],
    skipIf: 'You are not already a ServiceNow customer, or the problem you are solving is seller-facing rather than cross-departmental workflow.',
    sources: [
      {
        label: 'ServiceNow Newsroom — agentic AI innovations announcement',
        url: 'https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-announces-new-agentic-AI-innovations-to-autonomously-solve-the-most-complex-enterprise-challenges-01-29-2025-traffic/default.aspx',
      },
      { label: 'ServiceNow — AI Agents', url: 'https://www.servicenow.com/products/ai-agents.html' },
      { label: 'ServiceNow — Sales and Order Management for Technology Providers', url: 'https://www.servicenow.com/products/order-management-tech-providers.html' },
    ],
  },

  uipath: {
    slug: 'uipath',
    name: 'UiPath',
    shortName: 'UiPath',
    vendor: 'UiPath',
    homepage: 'https://www.uipath.com/pricing',
    category: 'Agentic process automation and orchestration',
    metaTitle: 'UiPath Agentic Automation for Sales Ops (2026)',
    metaDescription:
      'UiPath pricing from $25/mo, Maestro agentic orchestration, and named SAP process automation for order-to-cash and back-office sales operations.',
    definition:
      "UiPath Agentic Automation is a process automation platform that orchestrates robots, AI agents and people across ERP-heavy back-office work such as order-to-cash and procure-to-pay, rather than the sales conversation.",
    oneLine:
      'Process automation that orchestrates robots, AI agents and people across ERP-heavy back-office work — order-to-cash rather than the sales conversation.',
    whatItIs:
      'UiPath automates and orchestrates processes rather than assisting a seller. Maestro, its orchestration product, models processes in BPMN 2.0 and routes work to bots, agents or people, coordinating agents from UiPath, Claude, OpenAI, Gemini, Microsoft Copilot, LangChain and CrewAI under one identity, audit and policy layer.',
    surface: 'Automation Cloud, on-premises, or a customer\'s own region. Not a chat surface for sellers.',
    capabilities: [
      { name: 'Maestro', detail: 'BPMN 2.0 process modelling, real-time execution analytics, task routing to bots, agents or people.' },
      { name: 'Multi-agent management', detail: 'Orchestrates UiPath, Claude, OpenAI, Gemini, Microsoft Copilot, LangChain and CrewAI agents with shared context and unified identity, audit and policy.' },
      { name: 'Maestro Case', detail: 'Case intake and data capture, AI-powered triage and routing, SLA enforcement.' },
      { name: 'SAP automation', detail: 'Names SAP S/4HANA, SAP Business Technology Platform and SAP Build Process Automation; claims a "93% clean core score" for S/4HANA migration using automation over custom code.' },
      { name: 'Governance', detail: 'Policy and audit controls at the orchestration layer, human-in-the-loop exception handling, complete audit trails.' },
    ],
    integrations: {
      crm: [],
      erp: 'Names SAP S/4HANA, SAP BTP and SAP Build Process Automation, and automates order-to-cash, procure-to-pay, invoice processing, purchase orders and approvals, and inventory tracking and replenishment.',
      other: ['Microsoft Copilot', 'Claude', 'OpenAI', 'Gemini', 'LangChain', 'CrewAI'],
    },
    pricing: {
      model: 'Per-plan subscription with user and robot limits at the entry tier; contact sales above it.',
      currency: 'USD',
      tiers: [
        { plan: 'Automation Cloud Basic', price: 'Starting at $25 per month', detail: 'Up to 5 Basic, 5 Plus and 1 Pro user, 2 robots, hosted in the European region, 99.9% service uptime.' },
        { plan: 'Automation Cloud Standard', price: 'Contact Sales for pricing', detail: '"No limits to scale". Enterprise automations, agents, document classification and extraction, orchestration and governance controls.' },
        { plan: 'Automation Cloud Enterprise', price: 'Contact Sales for pricing', detail: 'Unlimited users and robots, self-healing UI automation, bring your own model, encryption keys, credential vaults, CI/CD integration.' },
      ],
      note: 'Only the entry tier carries a published price, and its limits (2 robots, 1 Pro user) put it below the threshold of a production sales-operations deployment.',
    },
    implementation: NOT_PUBLISHED,
    governance: 'Policy and audit controls applied at the orchestration layer, complete audit trails, and human-in-the-loop exception handling across every actor.',
    industries: [],
    criteria: {
      erpConnectivity: {
        value: 'Strongest published SAP process coverage',
        note: 'Names SAP S/4HANA, BTP and Build Process Automation, and covers order-to-cash, procure-to-pay, invoice processing and inventory replenishment.',
      },
      catalogueComplexity: { value: NOT_PUBLISHED, note: 'Not addressed as a product capability.' },
      technicalSpecs: { value: NOT_PUBLISHED, note: 'Not addressed as a product capability.' },
      quoteGeneration: { value: NOT_PUBLISHED, note: 'Quoting is not among the business processes UiPath names.' },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not addressed as a product capability.' },
      dealerDistributor: { value: NOT_PUBLISHED, note: 'Not addressed as a product capability.' },
      crmAutomation: {
        value: 'No CRM of its own',
        note: 'UiPath automates across existing systems. It does not hold customer records or drive a seller\'s workflow.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'No implementation time is published.' },
      microsoftEcosystem: {
        value: 'Orchestrates Microsoft Copilot agents',
        note: 'Microsoft Copilot is one of the agent types Maestro coordinates. There is no Teams-native seller experience.',
      },
    },
    strengths: [
      'The deepest published SAP process coverage of the six, named at product level rather than implied.',
      'Vendor-agnostic agent orchestration — Copilot, Claude, OpenAI and Gemini agents run under one audit and policy layer.',
      'Governance and audit trails are architectural, which matters when automation touches pricing and orders.',
      'A published entry price at $25/month, unusual in this category.',
    ],
    limits: [
      'It is not a sales tool. Quoting, margin, catalogue and channel are all absent from what UiPath publishes.',
      'No CRM and no seller-facing surface: reps do not use UiPath, operations does.',
      'The published $25 tier caps at 2 robots and 1 Pro user — everything at production scale is "Contact Sales".',
      'Buying it to fix a selling problem solves the back-office half at best.',
    ],
    skipIf: 'The problem is a rep who cannot get an answer during a call. UiPath addresses the process behind the order, not the conversation in front of it.',
    sources: [
      { label: 'UiPath — pricing', url: 'https://www.uipath.com/pricing' },
      { label: 'UiPath — Maestro (agentic orchestration)', url: 'https://www.uipath.com/product/agentic-orchestration' },
      { label: 'UiPath — SAP automation', url: 'https://www.uipath.com/solutions/technology/sap-automation' },
    ],
  },

  'sap-joule': {
    slug: 'sap-joule',
    name: 'SAP Joule',
    shortName: 'SAP Joule',
    vendor: 'SAP',
    homepage: 'https://www.sap.com/products/artificial-intelligence/ai-assistant.html',
    category: 'AI assistant embedded in SAP applications',
    metaTitle: 'SAP Joule for Sales: What SAP Publishes (2026)',
    metaDescription:
      'What SAP Joule does in Sales from the official capabilities guide: quotation retrieval, price renewal, and sales order status.',
    definition:
      "SAP Joule is a conversational assistant embedded across SAP applications, including S/4HANA Cloud, where it retrieves and updates SAP business data rather than integrating with the ERP from outside.",
    oneLine:
      'SAP\'s assistant living inside S/4HANA, where the ERP is not an integration target but the application it runs in.',
    whatItIs:
      'Joule is a conversational assistant embedded across SAP solutions. SAP documents four capability types: transactional (create or retrieve business data and complete tasks), navigational (find and open apps), informational (conversational search over SAP Help Portal and documents you upload) and analytical insights (explore your data through SAP Analytics Cloud).',
    surface: 'SAP S/4HANA Cloud Public Edition and Private Edition, SAP SuccessFactors, SAP Analytics Cloud and other SAP solutions.',
    capabilities: [
      { name: 'Transactional', detail: '"Joule works with you to help you create or retrieve business data, complete your tasks… update business data, and much more."' },
      { name: 'Navigational', detail: 'Finds and navigates to functionality or apps "without having to go through multiple links to reach a destination".' },
      { name: 'Informational', detail: 'Conversational search over the SAP Help Portal and documents uploaded through document grounding, returning a summary plus the top three search results.' },
      { name: 'Analytical insights', detail: 'Explores data through SAP Analytics Cloud, with suggested follow-up questions that generate further charts.' },
      { name: 'Sales area', detail: '"In the Sales area, you can ask Joule to check and renew expiring prices, review sales order status, and perform some other operations."' },
      { name: 'Sales quotation skills', detail: 'Retrieves and filters sales quotations by sold-to party, sales organisation, division, product, reference status, overall status, rejection status, type and reference sales inquiry.' },
    ],
    integrations: {
      crm: ['SAP business objects within S/4HANA'],
      erp: 'Native. Joule runs inside SAP S/4HANA Cloud Public and Private Edition — the ERP is the host application, not a connected system.',
      other: ['SAP SuccessFactors', 'SAP Analytics Cloud', 'SAP Help Portal'],
    },
    pricing: {
      model: NOT_PUBLISHED,
      currency: NOT_PUBLISHED,
      tiers: [
        { plan: 'Joule', price: NOT_PUBLISHED, detail: 'No list price appears in the Joule Capabilities guide. Entitlement is handled through "Activating Business AI and Assigning Users" within an SAP solution.' },
      ],
      note: 'Joule is not sold as a standalone line item in the documentation reviewed; availability depends on which capabilities ship with your SAP solution.',
    },
    implementation: 'Not published as a duration. SAP documents an activation step — "Activating Business AI and Assigning Users" — rather than a deployment timeline.',
    governance:
      'SAP notes that Joule "can return responses from SAP content as well as content from its own knowledge base. Only responses that contain links to the source content contain SAP content." Conversational search returns no document links unless a product filter is selected.',
    industries: [],
    criteria: {
      erpConnectivity: {
        value: 'Native — it runs inside S/4HANA',
        note: 'No connector, no data replication, no integration project. Nothing else in this comparison can match it inside SAP.',
      },
      catalogueComplexity: {
        value: 'Acts on SAP business objects',
        note: 'Joule works over master data already in SAP rather than ingesting external catalogues.',
      },
      technicalSpecs: {
        value: 'Document grounding over uploaded documents',
        note: 'The informational capability searches the SAP Help Portal and documents uploaded to the Joule service, summarising and returning the top three results.',
      },
      quoteGeneration: {
        value: 'Quotation retrieval and price renewal',
        note: 'The Sales section lists checking and renewing expiring prices and reviewing sales order status. Quotation skills are retrieval and filtering by party, org, division, product and status.',
      },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not listed among the Sales capabilities in the guide.' },
      dealerDistributor: { value: NOT_PUBLISHED, note: 'Not listed among the Sales capabilities in the guide.' },
      crmAutomation: {
        value: 'Updates SAP data, not a third-party CRM',
        note: 'The transactional capability creates and updates SAP business data. There is no published connection to Salesforce, Dynamics or Zoho.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'SAP documents an activation procedure rather than a time to value.' },
      microsoftEcosystem: { value: NOT_PUBLISHED, note: 'No Teams or Microsoft 365 surface appears in the Joule Capabilities guide.' },
    },
    strengths: [
      'Unbeatable inside SAP: no integration layer to build, no data to replicate, no connector to certify.',
      'The most precisely documented capability set of the six — SAP publishes the exact skills, sample requests and required business catalogues.',
      'Sales quotation and sales order skills are real, named and filterable, not marketing language.',
      'Governance is explicit about what is SAP content and what is model knowledge.',
    ],
    limits: [
      'No price is published anywhere in the capabilities guide, so cost cannot be modelled at all.',
      'It only helps where SAP already is. There is no published bridge to Salesforce, Dynamics, Teams or Microsoft 365.',
      'The published Sales capabilities lean towards retrieval and status — margin protection and channel management do not appear.',
      'Sellers who work in email and chat rather than in SAP get no surface here.',
    ],
    skipIf: 'Your sales team works outside SAP, or you need one assistant spanning CRM, documents and ERP rather than one that is excellent inside a single system.',
    sources: [
      { label: 'SAP Help Portal — Joule Capabilities (PUBLIC, document version 1.0.0, 2026-08-27)', url: 'https://help.sap.com/doc/1b82af8383e2443eaa95a034a70beb1b/CLOUD/en-US/c0bb884c3e27438695f4750b547aac77.pdf' },
      { label: 'SAP Help Portal — Joule in SAP S/4HANA Cloud Public Edition', url: 'https://help.sap.com/docs/joule/capabilities-guide/joule-in-sap-s-4hana-cloud-public-edition' },
      { label: 'SAP — AI assistant', url: 'https://www.sap.com/products/artificial-intelligence/ai-assistant.html' },
    ],
  },

  // ---------------------------------------------------------------------------
  // ERP-side cluster, read 2026-09-08. These four sit alongside the existing
  // sap-joule and microsoft-dynamics-365-copilot profiles to complete the ERP
  // set, and are compared in /compare/erp-ai-platforms-2026 rather than in the
  // manufacturing benchmark — see BENCHMARK_ORDER below for why that matters.
  // ---------------------------------------------------------------------------

  'oracle-fusion-ai-agents': {
    slug: 'oracle-fusion-ai-agents',
    name: 'Oracle Fusion AI Agents',
    shortName: 'Oracle Fusion',
    vendor: 'Oracle',
    // Oracle publishes the Studio through announcements and the Fusion Insider
    // blog rather than a standalone product page, so the canonical vendor URL
    // for entity resolution is the announcement itself.
    homepage: 'https://www.oracle.com/news/announcement/oracle-expands-ai-agent-studio-for-fusion-applications-with-agentic-applications-builder-2026-03-24/',
    verifiedOn: VERIFIED_ON_ERP,
    category: 'AI agents native to Oracle Fusion Cloud Applications',
    metaTitle: 'Oracle Fusion AI Agents Pricing (2026)',
    metaDescription:
      'Oracle publishes its Fusion AI agents, the AI Agent Studio and the AI Agent Marketplace — and states the whole thing is included at no additional cost.',
    definition:
      "Oracle Fusion AI Agents is a set of AI agents native to Oracle Fusion Cloud Applications, built and deployed through AI Agent Studio, which Oracle states is included in the Fusion subscription at no additional cost.",
    oneLine:
      'The most aggressively bundled AI in enterprise software: Oracle states AI Agent Studio is included in the Fusion subscription at no additional cost, with named finance agents shipping in the product.',
    whatItIs:
      'Oracle publishes three distinct things, and most coverage collapses them into one. Embedded AI agents are pre-built agents shipping inside Fusion Applications across ERP, EPM, SCM, HCM and CX. AI Agent Studio for Fusion Applications is described by Oracle as a design-time environment to create, configure, validate and deploy AI agents, fully integrated into Fusion Applications with access to its knowledge stores, tools and APIs. The AI Agent Marketplace holds Oracle-validated, partner-built agents deployable directly inside Fusion — Oracle states it is embedded natively within Fusion Applications rather than being a separate storefront, so customers can access, test and deploy third-party agents within existing workflows. At Oracle AI World in London (March 2026) Oracle added an Agentic Applications Builder plus capabilities it names as workflow orchestration, content intelligence, contextual memory and ROI measurement, alongside a new category: Fusion Agentic Applications.',
    surface:
      'Oracle Fusion Cloud Applications — ERP, EPM, SCM, HCM and CX. Oracle documentation places the Studio at Navigator → Tools → AI Agent Studio.',
    capabilities: [
      { name: 'Embedded AI agents', detail: 'Pre-built agents shipping inside Fusion Applications across ERP, EPM, SCM, HCM and CX.' },
      { name: 'AI Agent Studio', detail: 'A design-time environment to "create, configure, validate and deploy" AI agents, integrated into Fusion with access to its knowledge stores, tools and APIs.' },
      { name: 'AI Agent Marketplace', detail: 'Oracle-validated, partner-built agents embedded natively within Fusion Applications, so they can be accessed, tested and deployed inside existing workflows.' },
      { name: 'Payables Agent', detail: 'Oracle states it ingests invoices from email, portals, EDI/e-invoicing and PDFs; extracts and normalises the data; matches to purchase orders and receipts; creates distributions and accounting; applies tax, policy and fraud checks; and routes for approval and payment.' },
      { name: 'Payments Agent', detail: 'Evaluates and manages early pay, virtual cards and financing options; enables bank system interactions for supplier onboarding and execution; and monitors acknowledgements and exceptions.' },
      { name: 'Agentic Applications Builder', detail: 'Announced March 2026 alongside workflow orchestration, content intelligence, contextual memory and ROI measurement, under a new category Oracle calls Fusion Agentic Applications.' },
    ],
    integrations: {
      crm: ['Oracle CX (Fusion)'],
      erp: 'Native. Agents run inside Oracle Fusion Cloud ERP — no connector, no replication. The same architectural position as SAP Joule inside S/4HANA.',
      other: ['Oracle EPM', 'Oracle SCM', 'Oracle HCM', 'AI Agent Studio', 'AI Agent Marketplace'],
    },
    pricing: {
      model:
        'Oracle states AI Agent Studio is available at no additional cost, and its own blog states it is "included with your Oracle Fusion Cloud ERP, HCM, SCM, and CX subscription at no additional cost". The underlying Fusion subscription is not published.',
      tiers: [
        { plan: 'AI Agent Studio', price: 'No additional cost', detail: '"Available at no additional cost"; Oracle\'s blog states it is included with the Fusion Cloud ERP, HCM, SCM and CX subscription.' },
        { plan: 'Embedded agents', price: NOT_PUBLISHED, detail: 'Not priced separately — shipped within Fusion Applications.' },
        { plan: 'AI Agent Marketplace', price: NOT_PUBLISHED, detail: 'Partner-built agents; commercial terms not stated.' },
        { plan: 'Fusion Applications', price: NOT_PUBLISHED, detail: 'Standard Oracle enterprise quote. No list price is published.' },
      ],
      note:
        'Oracle also states the Studio requires no additional subscription fees, no scarce AI skills and no complex implementation project — it is "delivered as part of the software you already own". The AI layer is not a separate SKU, which removes the single biggest budgeting problem in this category. What is not published is the underlying Fusion subscription, or the commercial terms on Marketplace agents, so "free AI" sits on top of an unpublished enterprise licence.',
    },
    implementation:
      'Not published as a duration. Oracle\'s framing is that the Studio avoids an implementation project rather than requiring one — "no complex implementation project", "delivered as part of the software you already own".',
    governance:
      'Not published as a standalone governance statement. Oracle\'s published position is that agents execute inside the transactional system with the application\'s own controls: the Payables Agent applies tax, policy and fraud checks and routes for approval and payment rather than acting unattended.',
    industries: ['Manufacturing', 'Distribution', 'Professional Services', 'Public Sector'],
    criteria: {
      erpConnectivity: {
        value: 'Native — runs inside Fusion ERP',
        note: 'No connector or replication. Same architectural position as SAP Joule inside S/4HANA.',
      },
      catalogueComplexity: {
        value: NOT_PUBLISHED,
        note: 'Not named in the agent descriptions reviewed.',
      },
      technicalSpecs: {
        value: 'Content intelligence, RAG over enterprise documents',
        note: 'Oracle names content intelligence among the March 2026 additions; RAG over enterprise documents is a published Studio capability.',
      },
      quoteGeneration: {
        value: NOT_PUBLISHED,
        note: 'The published ERP agents are payables and payments.',
      },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named as a capability.' },
      dealerDistributor: {
        value: NOT_PUBLISHED,
        note: 'Supplier and procurement processes are named; channel management is not.',
      },
      crmAutomation: {
        value: 'Native to Oracle CX',
        note: 'Oracle names lead and opportunity management and service requests among CX agent capabilities. No third-party CRM.',
      },
      implementationTime: { value: NOT_PUBLISHED, note: 'No duration given.' },
      microsoftEcosystem: { value: NOT_PUBLISHED, note: 'No Teams or Microsoft 365 surface named.' },
    },
    strengths: [
      'The clearest commercial position in the category: the AI layer costs nothing extra, stated plainly and repeatedly by the vendor.',
      'Genuine agent-level published detail. The Payables Agent description names every step, which is rare and checkable.',
      'Studio plus Marketplace means you are not limited to what Oracle ships, and partner agents are validated rather than merely listed.',
      'Coverage spans ERP, EPM, SCM, HCM and CX — the widest published footprint in the ERP set.',
      'Native execution inside the transactional system, with approvals and auditability rather than an assistant reading from outside.',
    ],
    limits: [
      'Everything is Oracle. There is no published bridge to a non-Oracle CRM, a non-Oracle ERP, or the Microsoft stack.',
      'The Fusion subscription itself is unpublished, so "no additional cost" is only meaningful once you have priced the base.',
      'Marketplace agents are partner-built; their commercial and support terms are not published.',
      'Published ERP agents cluster in finance. Nothing yet on quoting, pricing or margin.',
    ],
    skipIf:
      'You are not already on Fusion. Nothing here is a reason to migrate ERP, and the value is entirely conditional on being inside Oracle\'s estate.',
    sources: [
      { label: 'Oracle — Oracle expands AI Agent Studio for Fusion Applications with Agentic Applications Builder and new intelligent workflow tools (24 March 2026)', url: 'https://www.oracle.com/news/announcement/oracle-expands-ai-agent-studio-for-fusion-applications-with-agentic-applications-builder-2026-03-24/' },
      { label: 'Oracle — Oracle advances enterprise AI with new agents across Fusion Applications (15 October 2025)', url: 'https://www.oracle.com/news/announcement/ai-world-oracle-advances-enterprise-ai-with-new-agents-across-fusion-applications-2025-10-15/' },
      { label: 'Oracle — Oracle expands AI Agent Studio with new Marketplace, LLMs and partner network (15 October 2025)', url: 'https://www.oracle.com/news/announcement/ai-world-oracle-expands-ai-agent-studio-for-fusion-applications-with-marketplace-llms-and-vast-partner-network-2025-10-15/' },
      { label: 'Oracle Fusion Insider blog — New: Oracle AI Agent Studio for Fusion Apps', url: 'https://blogs.oracle.com/fusioninsider/new-oracle-ai-agent-studio-for-fusion-apps' },
    ],
  },

  'infor-velocity-suite': {
    slug: 'infor-velocity-suite',
    name: 'Infor Velocity Suite',
    shortName: 'Infor',
    vendor: 'Infor',
    homepage: 'https://www.infor.com/platform/velocity-suite',
    verifiedOn: VERIFIED_ON_ERP,
    category: 'All-inclusive AI package for Infor CloudSuite ERP',
    metaTitle: 'Infor Velocity Suite Pricing & Limits (2026)',
    metaDescription:
      'Infor\'s AI package for CloudSuite — industry AI agents, GenAI, process mining and automations, sold as one flat fee regardless of user count.',
    definition:
      "Infor Velocity Suite is an all-inclusive AI package for Infor CloudSuite ERP, bundling industry AI agents, embedded GenAI, process mining, automations and implementation for one flat fee.",
    oneLine:
      'The only ERP AI offering here sold as a single flat fee with unlimited use — and the only one built explicitly around manufacturing and distribution micro-verticals rather than horizontal finance workflows.',
    whatItIs:
      'Infor publishes Velocity Suite as an all-inclusive AI package that pairs with every Infor CloudSuite, bundling Infor Industry AI Agents, Infor GenAI Embedded Experiences, Infor Process Mining, Infor Value+ Automations and implementation expertise. The 2026.04 release adds Agent Orchestration and an Agent Factory, the latter for building agents where the pre-built catalogue does not cover the use case. Infor states end-to-end workflows run across Infor and non-Infor systems, with supervisor agents coordinating the work and humans looped in by exception — a cross-system claim Oracle and SAP do not make. The micro-vertical framing is the differentiator: Infor states agents are trained on your industry\'s data, workflows and terminology so they act like experienced team members with precise, auditable outcomes. Where Oracle publishes a Payables Agent, Infor publishes agents built to a mode of manufacturing.',
    surface:
      'Infor CloudSuite — including CloudSuite Industrial and CloudSuite Distribution. Velocity Suite pairs with every CloudSuite rather than shipping as a separate application.',
    capabilities: [
      { name: 'Infor Industry AI Agents', detail: 'Role-based agents built on micro-vertical processes across manufacturing, distribution and service industries.' },
      { name: 'Infor GenAI Embedded Experiences', detail: 'Write, summarise, analyse and translate from within the processes users already work in — inside CloudSuite, not a general chatbot.' },
      { name: 'Infor Process Mining', detail: 'Identify inefficiencies, bottlenecks and areas for improvement in industry-specific processes.' },
      { name: 'Infor Value+ Automations', detail: 'Pre-built automations shipped with the package.' },
      { name: 'Implementation expertise', detail: 'Infor states a team of experts implements it for you, included in the package.' },
      { name: 'Agent Orchestration and Agent Factory', detail: 'Added in the 2026.04 release. Supervisor agents coordinate end-to-end workflows across Infor and non-Infor systems; the Factory builds agents where the pre-built catalogue does not cover the use case.' },
    ],
    integrations: {
      crm: [],
      erp: 'Native. Velocity Suite pairs with Infor CloudSuite (Industrial, Distribution and others) and agents act on live ERP data.',
      other: ['Non-Infor systems (stated, none named)', 'Infor Process Mining', 'Knowledge Hub'],
    },
    pricing: {
      model:
        'Infor publishes a flat-fee model rather than a figure: "one flat fee, no matter where you\'re starting from". Partner material describes unlimited use — the same price for one user or fifty.',
      tiers: [
        // Leads the table deliberately: the sidebar's "Entry price" reads the
        // first tier with a published price, and the flat fee is the fact.
        { plan: 'Velocity Suite', price: 'Flat fee, figure not published', detail: 'Infor states "one flat fee, no matter where you\'re starting from". No number appears on the product page.' },
        { plan: 'Scaling', price: 'Flat regardless of users', detail: 'Infor states the package is all-inclusive; partner material describes unlimited use, the same price for one user or fifty.' },
        { plan: 'Implementation', price: 'Included', detail: '"a team of experts to implement it for you".' },
        { plan: 'Post go-live support', price: 'One year included (reported)', detail: 'Infor\'s 2026.04 release material states every implemented Velocity Suite solution includes a year of complimentary CareFor Managed Services post go-live — reported via partner channels rather than on the main product page.' },
      ],
      note:
        'This is the most buyer-friendly commercial structure in the category, and it is worth understanding why: every other ERP AI offering here either bundles AI into an unpublished platform licence or meters it. A flat fee independent of seats means AI cost does not scale with adoption — the opposite of a consumption model. It also means small teams pay the same as large ones, which is proportionally expensive at low headcount. Get the flat fee in writing against CloudSuite tier and module scope; "flat" almost certainly means flat within a defined CloudSuite footprint, and Infor does not publish where that boundary sits. Infor\'s homepage separately cites a Nucleus Research report finding it is helping customers accelerate AI deployment by 30%, improve model accuracy by 20%, and reduce integration costs and complexity — vendor-commissioned analyst research; treat accordingly.',
    },
    implementation:
      'Not published as a duration. Implementation labour is stated as included — "a team of experts to implement it for you" — with a year of complimentary CareFor Managed Services post go-live reported via partner channels.',
    governance:
      'Infor states agents are trained on your industry\'s data, workflows and terminology and act with "precise, auditable outcomes", with supervisor agents coordinating end-to-end workflows and humans looped in by exception.',
    industries: ['Manufacturing', 'Distribution', 'Service Industries'],
    criteria: {
      erpConnectivity: {
        value: 'Native to Infor CloudSuite',
        note: 'Velocity Suite pairs with every CloudSuite; agents act on live ERP data.',
      },
      catalogueComplexity: {
        value: 'Micro-vertical catalogues',
        note: 'Infor states catalogues, workflows, processes and agents are built to the specs of the industry and micro-vertical without extensive customisation.',
      },
      technicalSpecs: {
        value: 'Knowledge Hub over uploaded documents',
        note: 'A GenAI Assistant with Knowledge Hub is described in Infor release material and partner documentation as trainable on Infor product documentation and on the customer\'s own uploaded process documents.',
      },
      quoteGeneration: {
        value: NOT_PUBLISHED,
        note: 'Customer order creation appears among named automations; quoting does not.',
      },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named as a capability.' },
      dealerDistributor: {
        value: 'Distribution is a named vertical',
        note: 'CloudSuite Distribution is a supported CloudSuite with its own agent set; vendor performance insights are a named automation.',
      },
      crmAutomation: { value: NOT_PUBLISHED, note: 'No CRM named on the pages reviewed.' },
      implementationTime: {
        value: NOT_PUBLISHED,
        note: 'Implementation is included; no duration is stated.',
      },
      microsoftEcosystem: { value: NOT_PUBLISHED, note: 'No Teams or Microsoft 365 surface named.' },
    },
    strengths: [
      'Flat-fee, unlimited-use pricing is unique in this category and removes the adoption-versus-cost tension entirely.',
      'Manufacturing and distribution are the design centre, not a vertical page bolted onto a horizontal product.',
      'Process mining is included — a diagnostic layer none of the other three bundles, and the thing that tells you where automation is worth applying.',
      'Implementation labour included, plus a stated year of post-go-live managed services.',
      'The cross-system claim (Infor and non-Infor) is broader than Oracle\'s or SAP\'s published position.',
    ],
    limits: [
      'No published figure for the flat fee, and no published definition of what the flat fee covers at the edges.',
      'Flat pricing penalises small deployments proportionally.',
      'Agent Factory is described as better suited to technical users — the self-service ceiling is lower than Oracle\'s Studio positioning.',
      'Nothing published on CRM, quoting or margin.',
      'Several of the most useful specifics (CareFor, Knowledge Hub detail) surface through partner channels rather than Infor\'s own product pages.',
    ],
    skipIf:
      'You are not on CloudSuite. As with every entry in this cluster, the value is entirely conditional on the underlying ERP.',
    sources: [
      { label: 'Infor — Infor Velocity Suite', url: 'https://www.infor.com/platform/velocity-suite' },
      { label: 'Infor — Enterprise AI / Industry AI', url: 'https://www.infor.com/platform/enterprise-ai' },
      { label: 'Infor — Infor Industry AI 2026.04 release', url: 'https://www.infor.com/blog/infor-industry-ai-2026-04-release' },
    ],
    sourceNote:
      'CareFor Managed Services inclusion and Knowledge Hub detail reported via Infor partner channels summarising the 2026.04 release; verify directly with Infor.',
  },

  'epicor-prism': {
    slug: 'epicor-prism',
    name: 'Epicor Prism',
    shortName: 'Epicor',
    vendor: 'Epicor',
    homepage: 'https://www.epicor.com/en-us/products/ai-powered-applications/prism/',
    verifiedOn: VERIFIED_ON_ERP,
    category: 'Vertical AI agents inside Kinetic, Prophet 21 and Propello',
    metaTitle: 'Epicor Prism AI Agents Pricing (2026)',
    metaDescription:
      'Epicor\'s network of vertical AI agents inside Kinetic, Prophet 21 and Propello — including the first ERP AI agent Epicor prices on outcomes.',
    definition:
      "Epicor Prism is a network of vertical AI agents that execute work inside Epicor Kinetic, Prophet 21 and Propello, and includes the first ERP AI agent Epicor prices against outcomes.",
    oneLine:
      'Vertical agents built for the make, move and sell economy — and the only ERP AI product here with a published outcomes-based pricing model.',
    whatItIs:
      'Epicor publishes Prism as a network of vertical AI agents that execute work directly inside its ERP systems, framing the shift as ERP evolving from a system of record into a system of outcomes. At Epicor Insights 2026 the company added Epicor Lux (its agentic design system), the Epicor Prism Agent Foundry for designing, building and customising agents, and a new wave of Prism agents for decision-critical workflows. Epicor also publishes two operational figures no other ERP vendor here matches: the Prism Knowledge Agent processes more than 70,000 requests per month across Kinetic, Prophet 21 and Propello, and Epicor states it operates the largest opt-in ERP dataset, supporting inventory and transactions across roughly 40% of the estimated $54B US independent wholesale automotive aftermarket, based on light and medium duty parts distributors.',
    surface:
      'Epicor Kinetic (manufacturing), Prophet 21 (distribution) and Propello. Prism was initially released for Kinetic.',
    capabilities: [
      { name: 'Prism Knowledge Agent', detail: 'Epicor states it processes more than 70,000 requests per month, supporting users inside Kinetic, Prophet 21 and Propello. A live production usage figure, not a capability claim.' },
      { name: 'Prism Business Communications', detail: 'Automates RFQ workflows and supplier communications, quote to order. Epicor calls it "the industry\'s first ERP AI agent with outcomes-based pricing".' },
      { name: 'Reasoning Agent', detail: 'Synthesises ERP data, documents and context. Announced at Insights 2026 and reported by trade press covering the release.' },
      { name: 'EDI Agent', detail: 'Plain-language questions about EDI document status and errors, for Kinetic users. Announced at Insights 2026 (trade press).' },
      { name: 'CPQ Snap Assistant', detail: 'Supports configurator development and maintenance. Announced at Insights 2026 (trade press).' },
      { name: 'Prophet 21 Business Rules Agent', detail: 'Lets P21 users create and modify business rules from natural-language prompts while preserving platform governance. Announced at Insights 2026 (trade press).' },
      { name: 'Quick Ship Tracking and Freight Insight Agents', detail: 'Two shipping-side agents announced at Insights 2026 (trade press).' },
      { name: 'Epicor Lux and Prism Agent Foundry', detail: 'Lux is Epicor\'s agentic design system; the Agent Foundry is a low-code workspace for designing, building and customising vertical agents.' },
    ],
    integrations: {
      crm: [],
      erp: 'Native to Epicor Kinetic, Prophet 21 and Propello. Agents execute directly inside the ERP rather than connecting to it.',
      other: ['EDI (EDI Agent)', 'CPQ (CPQ Snap Assistant)', 'Prism Agent Foundry', 'Epicor Lux'],
    },
    pricing: {
      model:
        'Mixed, and the only outcomes-based model in the category. Prism availability depends on Epicor product and environment; Prism Business Communications is billed against outcomes rather than seats or consumption.',
      tiers: [
        { plan: 'Prism (general)', price: NOT_PUBLISHED, detail: 'Availability depends on Epicor product and environment.' },
        { plan: 'Prism Business Communications', price: 'Outcomes-based', detail: 'Epicor calls it "the industry\'s first ERP AI agent with outcomes-based pricing".' },
        { plan: 'Agent Foundry', price: NOT_PUBLISHED, detail: 'Low-code workspace for custom vertical agents. No price published.' },
      ],
      note:
        'Outcomes-based pricing is a genuinely different model from everything else in this cluster — Oracle bundles, Infor charges a flat fee, SAP publishes nothing. Epicor charges against results on at least one agent. It only helps if the outcome is defined in your favour: for Prism Business Communications, which automates RFQ workflows and supplier communications, establish what counts as a billable outcome, who measures it, what happens when an agent acts and the outcome does not follow, and whether there is a floor or cap. An unpublished outcome definition is not transparency, it is a different kind of opacity.',
    },
    implementation:
      'Not published as a Prism-specific duration. A 90-day cloud deployment programme was discussed at Insights 2026 (trade press). Epicor also announced that release 2028.1 will be the final on-premises version for Kinetic, Prophet 21 and Eclipse — if you run on-premises, the AI roadmap and the cloud deadline are the same decision.',
    governance:
      'Epicor states Prism respects ERP role-based access, and that the Lux framework enforces guardrails keeping a human in the loop at critical decision points.',
    industries: ['Manufacturing', 'Distribution', 'Automotive Aftermarket', 'Building Supply'],
    criteria: {
      erpConnectivity: {
        value: 'Native to Kinetic, P21 and Propello',
        note: 'Agents execute directly inside the ERP.',
      },
      catalogueComplexity: {
        value: 'CPQ Snap Assistant',
        note: 'Supports configurator development and maintenance.',
      },
      technicalSpecs: {
        value: 'Reasoning Agent over ERP data and documents',
        note: 'Epicor describes it as synthesising ERP data, documents and context.',
      },
      quoteGeneration: {
        value: 'Partly — RFQ workflow automation',
        note: 'Prism Business Communications automates RFQ workflows and supplier communications, quote to order. Supplier-side, not customer-side quoting.',
      },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named as a capability.' },
      dealerDistributor: {
        value: 'Prophet 21 is a distribution ERP with its own agents',
        note: 'The P21 Business Rules Agent and the opt-in aftermarket dataset are distribution-specific.',
      },
      crmAutomation: { value: NOT_PUBLISHED, note: 'No CRM named.' },
      implementationTime: {
        value: NOT_PUBLISHED,
        note: 'A 90-day cloud deployment programme was discussed at Insights 2026 (trade press), but no Prism-specific duration is published.',
      },
      microsoftEcosystem: { value: NOT_PUBLISHED, note: 'No Teams or Microsoft 365 surface named.' },
    },
    strengths: [
      'The only published production usage figure in the category: 70,000+ Knowledge Agent requests a month.',
      'The only vertical-data claim of its kind — roughly 40% of the US independent wholesale automotive aftermarket, by Epicor\'s own statement.',
      'Outcomes-based pricing on at least one agent. Whatever its risks, it is the only vendor here putting commercial skin in the game.',
      'EDI and CPQ agents. Nothing else in this cluster touches either.',
      'Distribution is a first-class citizen via Prophet 21, not an afterthought.',
      'Published governance position: role-based access respected, human in the loop enforced by design.',
    ],
    limits: [
      'The outcome definition behind outcomes-based pricing is not published. That is the whole contract.',
      'Prism availability varies by Epicor product and environment; there is no single answer to "do I have it".',
      'The 2028.1 on-premises end-of-line means AI adoption and cloud migration are one decision, not two.',
      'Nothing published on margin, or on CRM integration.',
      'Several agent-level details come from trade press reporting Insights 2026 rather than from Epicor\'s own product pages.',
    ],
    skipIf:
      'You are staying on-premises past 2028, or you need the AI layer priced predictably rather than against outcomes you have not yet defined.',
    sources: [
      { label: 'Epicor — Epicor introduces agentic AI stack to power action across ERP workflows (19 May 2026)', url: 'https://www.epicor.com/en-us/newsroom/news-releases/epicor-introduces-agentic-ai-stack/' },
      { label: 'Epicor — Epicor Prism product page', url: 'https://www.epicor.com/en-us/products/ai-powered-applications/prism/' },
      { label: 'Epicor — Epicor Prism introduces vertical AI agents for supply chain', url: 'https://www.epicor.com/en/newsroom/news-releases/prism/' },
      { label: 'Epicor — Epicor launches industry\'s first ERP AI agent (Prism Business Communications)', url: 'https://www.epicor.com/en-us/newsroom/news-releases/prism-business-communications/' },
    ],
    sourceNote:
      'Agent-level list and the 2028.1 on-premises deadline reported by trade press covering Epicor Insights 2026; verify with Epicor before planning against either.',
  },

  'netsuite-next': {
    slug: 'netsuite-next',
    name: 'NetSuite Next',
    shortName: 'NetSuite',
    vendor: 'Oracle NetSuite',
    homepage: 'https://www.oracle.com/apac/news/announcement/sw25-netsuite-launches-netsuite-next-2025-10-07/',
    verifiedOn: VERIFIED_ON_ERP,
    category: 'AI-native ERP platform overhaul, in phased rollout',
    metaTitle: 'NetSuite Next Pricing & Rollout (2026)',
    metaDescription:
      'NetSuite\'s platform overhaul — Ask Oracle, SuiteAgents and the AI Connector for MCP — and what Oracle publishes about cost and rollout.',
    definition:
      "NetSuite Next is Oracle's AI-native rebuild of NetSuite, adding the Ask Oracle assistant, SuiteAgents and a Model Context Protocol connector for external AI clients, currently in phased rollout.",
    oneLine:
      'The biggest change to NetSuite in its history, still mid-rollout — and the only ERP here publishing a route for outside AI assistants to work against ERP data.',
    whatItIs:
      'Oracle announced NetSuite Next at SuiteWorld on 7 October 2025, describing it as the next generation of NetSuite, embedding conversational AI and agentic workflows across the suite. Four components are published: Ask Oracle, a natural language assistant Oracle states lets users search, navigate, analyse and act across the entire NetSuite dataset in their own words, delivering context-aware answers, visualisations, interactive content and reasoning explaining the how and why behind every response; SuiteAgents, agentic workflow frameworks built with the SuiteCloud Development Framework and running inside NetSuite; the AI Connector Service, a Model Context Protocol route allowing external AI clients to authenticate into NetSuite and call a constrained set of tools; and AI Studios — Prompt Studio and Narrative Insight Studio — for tuning. The MCP connector is the strategic difference: SAP, Infor and Epicor publish no equivalent, so NetSuite data can be worked against from whatever assistant an organisation has standardised on rather than only inside the ERP\'s own interface.',
    surface:
      'Oracle NetSuite, plus external MCP-compatible AI clients through the AI Connector Service. Powered by Oracle Cloud Infrastructure with the Redwood Design System.',
    capabilities: [
      { name: 'Ask Oracle', detail: 'Oracle states it lets users "search, navigate, analyse and act" across the entire NetSuite dataset in their own words, with context-aware answers, visualisations, interactive content, and reasoning explaining the how and why behind every response.' },
      { name: 'Acts across customisations', detail: 'Oracle states Ask Oracle acts across customisations and extensions built on the SuiteCloud Platform, including partner applications in the SuiteCloud Developer Network.' },
      { name: 'SuiteAgents', detail: 'Agentic workflow frameworks, built with the SuiteCloud Development Framework and running inside NetSuite.' },
      { name: 'AI Connector Service', detail: 'A Model Context Protocol route allowing external AI clients to authenticate into NetSuite and call a constrained set of tools.' },
      { name: 'AI Studios', detail: 'Prompt Studio and Narrative Insight Studio, for tuning.' },
      { name: 'Migration commitment', detail: 'Oracle states customers can switch to NetSuite Next "with the press of a button, without having to migrate or disrupt existing customizations".' },
    ],
    integrations: {
      crm: ['NetSuite CRM records'],
      erp: 'Native. Ask Oracle works across the NetSuite dataset, including SuiteCloud customisations, extensions and partner applications.',
      other: ['External MCP-compatible AI clients (AI Connector Service)', 'SuiteCloud Platform', 'SuiteCloud Developer Network', 'Oracle Cloud Infrastructure'],
    },
    pricing: {
      model:
        'Oracle publishes no NetSuite price list, and no consolidated statement of what NetSuite Next includes versus meters. Its positioning is that Next is the future of the platform rather than a separate SKU.',
      tiers: [
        { plan: 'NetSuite Next', price: NOT_PUBLISHED, detail: 'No figure published. Oracle\'s positioning is that Next is the future of the platform rather than a separate SKU.' },
        { plan: 'NetSuite platform', price: NOT_PUBLISHED, detail: 'Oracle publishes no NetSuite price list.' },
        { plan: 'AI Connector (MCP)', price: NOT_PUBLISHED, detail: 'Announced alongside SuiteAgents. No commercial terms published.' },
      ],
      note:
        'A caution on "it\'s included": trade and partner coverage widely reports that core AI features come with existing licences at no extra cost, and that some advanced modules are separately licensed or metered against AI Units. Oracle does not publish a definitive, consolidated statement of what is included versus metered, and the two claims are not reconcilable from public sources. So the buyer\'s question is a contract question, not a research question — ask Oracle in writing which named features are included in your current licence, which are metered, what the unit is, and what happens when the meter runs out. Do not plan a rollout on a partner blog\'s reading of the bundle.',
    },
    implementation:
      'Not published as a duration; switching to Next is described as a button press rather than a migration. NetSuite Next is not fully generally available: per Oracle\'s phased approach and widely reported partner guidance, rollout began in North America with other regions following through 2026–2027, and several agentic capabilities remain in preview or early access. Confirm availability for your region, edition and specific features before it enters a business case.',
    governance:
      'Oracle publishes explainable, auditable AI as a design principle, with Ask Oracle returning reasoning that explains the how and why behind every response. The AI Connector Service authenticates external AI clients and exposes a constrained set of tools rather than open data access.',
    industries: ['Manufacturing', 'Distribution', 'Professional Services', 'Retail'],
    criteria: {
      erpConnectivity: {
        value: 'Native across the full NetSuite dataset',
        note: 'Ask Oracle acts across the entire dataset including customisations.',
      },
      catalogueComplexity: {
        value: NOT_PUBLISHED,
        note: 'Item records are in scope as data; no catalogue-specific capability is named.',
      },
      technicalSpecs: {
        value: NOT_PUBLISHED,
        note: 'No document grounding capability named in the announcement reviewed.',
      },
      quoteGeneration: { value: NOT_PUBLISHED, note: 'Not named among the published capabilities.' },
      marginProtection: { value: NOT_PUBLISHED, note: 'Not named as a capability.' },
      dealerDistributor: { value: NOT_PUBLISHED, note: 'Not named as a capability.' },
      crmAutomation: {
        value: 'Native NetSuite CRM records',
        note: 'In scope as part of the unified dataset. No third-party CRM.',
      },
      implementationTime: {
        value: NOT_PUBLISHED,
        note: 'Switching stated as a button press; no duration for the AI capabilities.',
      },
      microsoftEcosystem: {
        value: 'Partly — via MCP',
        note: 'The AI Connector lets external MCP-compatible assistants authenticate into NetSuite. Microsoft is not named specifically.',
      },
    },
    strengths: [
      'The only ERP in this cluster publishing an MCP route for external AI assistants — genuine architectural openness rather than a walled garden.',
      'Ask Oracle acting across SuiteCloud customisations and partner apps is a meaningfully stronger claim than most conversational ERP interfaces make.',
      'The no-migration switch commitment is specific and testable.',
      'Explainable, auditable AI with reasoning shown is published as a design principle, not an afterthought.',
      'Strong fit for mid-market companies that could never afford a Fusion or S/4HANA footprint.',
    ],
    limits: [
      'Still rolling out. Region, edition and feature availability all vary, and several capabilities remain in preview.',
      'What is included versus metered is not published clearly enough to plan against.',
      'Oracle publishes no NetSuite price list at all.',
      'Nothing published on catalogue, quoting, margin or distribution management.',
      'Least published capability detail of the four in the ERP cluster.',
    ],
    skipIf:
      'You need certainty this quarter. Much of what makes NetSuite Next interesting is not yet generally available where most customers are.',
    sources: [
      { label: 'Oracle — NetSuite unveils NetSuite Next (7 October 2025)', url: 'https://www.oracle.com/apac/news/announcement/sw25-netsuite-launches-netsuite-next-2025-10-07/' },
    ],
    sourceNote:
      'SuiteAgents and the AI Connector Service were announced in the same 7 October 2025 SuiteWorld release. Rollout timing, AI Unit metering and feature-availability detail are reported by partner and trade sources rather than published consolidated by Oracle. Confirm against your own contract.',
  },
}

/**
 * Membership of the manufacturing benchmark — not display order.
 *
 * getBenchmarkPlatforms() sorts by name, so the first column of the matrix, the
 * first entry in the sidebar and the first block of the sources list are decided
 * by the alphabet rather than by hand. This site profiles a vendor that also
 * owns it; a hand-ordered array is exactly where that would quietly show.
 *
 * The list is deliberately frozen at six. The benchmark page's prose, FAQ and
 * verdict are written about these six specifically ("two of the six are not
 * sales tools"), so widening it silently would put ten columns under a sentence
 * that says six. New clusters get their own roundup instead.
 */
export const BENCHMARK_ORDER = [
  'salezx',
  'salesforce-agentforce',
  'microsoft-dynamics-365-copilot',
  'sap-joule',
  'servicenow-ai-agents',
  'uipath',
]

const byName = (a, b) => a.name.localeCompare(b.name)

/** The ERP-side cluster, compared in /compare/erp-ai-platforms-2026. */
export const ERP_ORDER = [
  'oracle-fusion-ai-agents',
  'infor-velocity-suite',
  'epicor-prism',
  'netsuite-next',
]

/** Every profile, in directory order. */
export const PLATFORM_ORDER = [...BENCHMARK_ORDER, ...ERP_ORDER]

export function getPlatform(slug) {
  return PLATFORMS[slug] || null
}

export function getAllPlatforms() {
  return PLATFORM_ORDER.map((slug) => PLATFORMS[slug]).filter(Boolean)
}

export function getBenchmarkPlatforms() {
  return BENCHMARK_ORDER.map((slug) => PLATFORMS[slug]).filter(Boolean).sort(byName)
}

export function getErpPlatforms() {
  return ERP_ORDER.map((slug) => PLATFORMS[slug]).filter(Boolean)
}

export function isErpPlatform(slug) {
  return ERP_ORDER.includes(slug)
}

/**
 * When this profile's facts were last read from source. Profiles added in a
 * later pass carry their own date; the rest fall back to the original.
 */
export function platformVerifiedOn(p) {
  return p?.verifiedOn || VERIFIED_ON
}

