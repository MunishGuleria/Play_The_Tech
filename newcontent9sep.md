# playthetech — ERP-side AI cluster

Four platform profiles + one roundup, written to the existing `/platform/[slug]`
template and applying the same nine manufacturing criteria used on the SAP Joule
page. Read from vendor sources on **8 September 2026**.

This cluster completes the ERP set alongside the existing
`/platform/sap-joule` and `/platform/microsoft-dynamics-365-copilot` profiles.

**Source discipline:** Oracle, Infor and Epicor all publish substantial primary
material. Where a fact comes from trade press reporting a vendor announcement
rather than from the vendor's own page, it is labelled as such inline. Where
nothing is published, the table says "Not published."

---
---

# 1. `/platform/oracle-fusion-ai-agents`

**Title:** Oracle Fusion AI Agents and AI Agent Studio: what the vendor actually publishes
**Meta description:** Oracle publishes its Fusion AI agents, the AI Agent Studio and the AI Agent Marketplace — and states the whole thing is included at no additional cost.
**Vendor:** Oracle · **Primary sources:** 4

## The Short Answer

The most aggressively bundled AI in enterprise software: Oracle states AI Agent
Studio is included in the Fusion subscription at no additional cost, with named
finance agents shipping in the product.

## What it is

Oracle publishes three distinct things, and most coverage collapses them into
one:

**Embedded AI agents** — pre-built agents shipping inside Fusion Applications
across ERP, EPM, SCM, HCM and CX.

**AI Agent Studio for Fusion Applications** — Oracle describes it as a design-time
environment to create, configure, validate and deploy AI agents, fully integrated
into Fusion Applications with access to its knowledge stores, tools and APIs.
Oracle documentation places it at Navigator → Tools → AI Agent Studio.

**AI Agent Marketplace** — Oracle-validated, partner-built agents deployable
directly inside Fusion. Oracle states this is embedded natively within Fusion
Applications rather than being a separate storefront, so customers can access,
test and deploy third-party agents within existing workflows.

**March 2026 additions** (Oracle AI World, London): an Agentic Applications
Builder, plus capabilities Oracle names as workflow orchestration, content
intelligence, contextual memory and ROI measurement — alongside a new category,
Fusion Agentic Applications.

## Named ERP agents

Oracle publishes agent-level detail that most ERP vendors do not. Two examples
from the finance set:

**Payables Agent** — Oracle states it ingests invoices from email, portals,
EDI/e-invoicing and PDFs; extracts and normalises the data; matches to purchase
orders and receipts; creates distributions and accounting; applies tax, policy
and fraud checks; and routes for approval and payment.

**Payments Agent** — evaluates and manages early pay, virtual cards and financing
options; enables bank system interactions for supplier onboarding and execution;
and monitors acknowledgements and exceptions.

The Payables Agent description is the most complete published end-to-end
automation of any single agent across the six ERP platforms this site now covers.

## Pricing

*Oracle Fusion AI — published pricing, read 8 September 2026*

| Element | Published price | What the vendor states |
| --- | --- | --- |
| AI Agent Studio | **No additional cost** | "Available at no additional cost"; Oracle's own blog states it is "included with your Oracle Fusion Cloud ERP, HCM, SCM, and CX subscription at no additional cost" |
| Embedded agents | Not published separately | Shipped within Fusion Applications |
| AI Agent Marketplace | Not published | Partner-built agents; commercial terms not stated |
| Fusion Applications | Not published | Standard Oracle enterprise quote |

Oracle also states the Studio requires no additional subscription fees, no scarce
AI skills and no complex implementation project — it is "delivered as part of the
software you already own."

**What this means for a buyer.** The AI layer is not a separate SKU. That removes
the single biggest budgeting problem in this category. What is *not* published is
the underlying Fusion subscription, or the commercial terms on Marketplace
agents — so "free AI" sits on top of an unpublished enterprise licence.

## Data connectivity

**ERP** — Native. Agents run inside Oracle Fusion Cloud ERP.

**CRM** — Native to Oracle CX (Fusion). No third-party CRM is named.

**Other named modules** — EPM, SCM, HCM.

**Extensibility** — AI Agent Studio for custom agents and agent teams; AI Agent
Marketplace for partner-built agents; extended LLM support announced October 2025.

**Implementation** — Not published as a duration. Oracle's framing is that the
Studio avoids an implementation project rather than requiring one.

## Oracle Fusion against the nine manufacturing criteria

| Criterion | Oracle Fusion AI | Evidence |
| --- | --- | --- |
| ERP connectivity | **Native — runs inside Fusion ERP** | No connector or replication. Same architectural position as SAP Joule inside S/4HANA. |
| Product catalogue complexity | Not published | Not named in the agent descriptions reviewed. |
| Technical specifications | **Content intelligence, RAG over enterprise documents** | Oracle names content intelligence among the March 2026 additions; RAG over enterprise documents is a published Studio capability. |
| Quote generation | Not published | The published ERP agents are payables and payments. |
| Margin protection | Not published | Not named as a capability. |
| Dealer / distributor management | Not published | Supplier and procurement processes are named; channel management is not. |
| CRM automation | **Native to Oracle CX** | Oracle names lead and opportunity management and service requests among CX agent capabilities. No third-party CRM. |
| Implementation time | Not published | No duration given. |
| Microsoft ecosystem compatibility | Not published | No Teams or Microsoft 365 surface named. |

**Criteria published: 4 of 9** — the highest of any platform on this site so far.

## Strengths

- The clearest commercial position in the category: the AI layer costs nothing extra, stated plainly and repeatedly by the vendor.
- Genuine agent-level published detail. The Payables Agent description names every step, which is rare and checkable.
- Studio plus Marketplace means you are not limited to what Oracle ships, and partner agents are validated rather than merely listed.
- Coverage spans ERP, EPM, SCM, HCM and CX — the widest published footprint here.
- Native execution inside the transactional system, with approvals and auditability rather than an assistant reading from outside.

## Limits

- Everything is Oracle. There is no published bridge to a non-Oracle CRM, a non-Oracle ERP, or the Microsoft stack.
- The Fusion subscription itself is unpublished, so "no additional cost" is only meaningful once you have priced the base.
- Marketplace agents are partner-built; their commercial and support terms are not published.
- Published ERP agents cluster in finance. Nothing yet on quoting, pricing or margin.

**Skip it if:** you are not already on Fusion. Nothing here is a reason to
migrate ERP, and the value is entirely conditional on being inside Oracle's estate.

## Sources

1. Oracle — Oracle expands AI Agent Studio for Fusion Applications with Agentic Applications Builder and new intelligent workflow tools (24 March 2026) · https://www.oracle.com/news/announcement/oracle-expands-ai-agent-studio-for-fusion-applications-with-agentic-applications-builder-2026-03-24/
2. Oracle — Oracle advances enterprise AI with new agents across Fusion Applications (15 October 2025) · https://www.oracle.com/news/announcement/ai-world-oracle-advances-enterprise-ai-with-new-agents-across-fusion-applications-2025-10-15/
3. Oracle — Oracle expands AI Agent Studio with new Marketplace, LLMs and partner network (15 October 2025) · https://www.oracle.com/news/announcement/ai-world-oracle-expands-ai-agent-studio-for-fusion-applications-with-marketplace-llms-and-vast-partner-network-2025-10-15/
4. Oracle Fusion Insider blog — New: Oracle AI Agent Studio for Fusion Apps · https://blogs.oracle.com/fusioninsider/new-oracle-ai-agent-studio-for-fusion-apps

**At a glance:** Vendor Oracle · Category AI agents native to Fusion Cloud
Applications · Entry price No additional cost above the Fusion subscription ·
Criteria published 4 of 9

---
---

# 2. `/platform/infor-velocity-suite`

**Title:** Infor Velocity Suite: what the vendor actually publishes
**Meta description:** Infor's AI package for CloudSuite — industry AI agents, GenAI, process mining and automations, sold as one flat fee regardless of user count.
**Vendor:** Infor · **Primary sources:** 3

## The Short Answer

The only ERP AI offering here sold as a single flat fee with unlimited use — and
the only one built explicitly around manufacturing and distribution
micro-verticals rather than horizontal finance workflows.

## What it is

Infor publishes **Velocity Suite** as an all-inclusive AI package that pairs with
every Infor CloudSuite. It bundles five things:

| Component | What Infor says it does |
| --- | --- |
| **Infor Industry AI Agents** | Role-based agents built on micro-vertical processes across manufacturing, distribution and service industries |
| **Infor GenAI Embedded Experiences** | Write, summarise, analyse and translate from within the processes users already work in — inside CloudSuite, not a general chatbot |
| **Infor Process Mining** | Identify inefficiencies, bottlenecks and areas for improvement in industry-specific processes |
| **Infor Value+ Automations** | Pre-built automations |
| **Implementation expertise** | Infor states a team of experts implements it for you |

The 2026.04 release adds **Agent Orchestration** and an **Agent Factory** — the
latter for building agents where the pre-built catalogue does not cover the use
case.

**Architecture.** Infor states end-to-end workflows run across Infor **and
non-Infor** systems, with supervisor agents coordinating the work and humans
looped in by exception. That cross-system claim is not made by Oracle or SAP.

**The micro-vertical framing is the differentiator.** Infor states agents are
trained on your industry's data, workflows and terminology so they act like
experienced team members with precise, auditable outcomes. Where Oracle publishes
a Payables Agent, Infor publishes agents built to a mode of manufacturing.

## Pricing

*Infor Velocity Suite — published pricing, read from infor.com on 8 September 2026*

| Element | Published price | What the vendor states |
| --- | --- | --- |
| Velocity Suite | Not published as a figure | "One flat fee, no matter where you're starting from" |
| Scaling | **Flat regardless of users** | Infor states the package is all-inclusive; partner material describes unlimited use, the same price for one user or fifty |
| Implementation | **Included** | "a team of experts to implement it for you" |
| Post go-live support | **One year included** (reported) | Infor's 2026.04 release material states every implemented Velocity Suite solution includes a year of complimentary CareFor Managed Services post go-live — reported via partner channels rather than on the main product page |

**This is the most buyer-friendly commercial structure in the category, and it is
worth understanding why.** Every other ERP AI offering here either bundles AI
into an unpublished platform licence or meters it. A flat fee independent of
seats means AI cost does not scale with adoption — the opposite of a consumption
model. It also means small teams pay the same as large ones, which is
proportionally expensive at low headcount.

**Get the flat fee in writing against CloudSuite tier and module scope.** "Flat"
almost certainly means flat within a defined CloudSuite footprint, and Infor does
not publish where that boundary sits.

**Vendor-cited third-party research.** Infor's homepage cites a Nucleus Research
report finding Infor is helping customers accelerate AI deployment by 30%,
improve model accuracy by 20%, and reduce integration costs and complexity.
Vendor-commissioned analyst research; treat accordingly.

## Data connectivity

**ERP** — Native. Velocity Suite pairs with Infor CloudSuite (Industrial,
Distribution and others).

**Non-Infor systems** — Infor states workflows run across Infor and non-Infor
systems. No specific third-party system is named on the pages reviewed.

**CRM** — Not named specifically.

**Documents** — A GenAI Assistant with Knowledge Hub is described in partner
material as trainable on Infor product documentation and on the customer's own
uploaded process documents.

**Implementation** — Not published as a duration; implementation labour is stated
as included.

## Infor Velocity Suite against the nine manufacturing criteria

| Criterion | Infor Velocity Suite | Evidence |
| --- | --- | --- |
| ERP connectivity | **Native to Infor CloudSuite** | Velocity Suite pairs with every CloudSuite; agents act on live ERP data. |
| Product catalogue complexity | **Micro-vertical catalogues** | Infor states catalogues, workflows, processes and agents are built to the specs of the industry and micro-vertical without extensive customisation. |
| Technical specifications | **Knowledge Hub over uploaded documents** | Described in Infor release material and partner documentation. |
| Quote generation | Not published | Customer order creation appears among named automations; quoting does not. |
| Margin protection | Not published | Not named as a capability. |
| Dealer / distributor management | **Distribution is a named vertical** | CloudSuite Distribution is a supported CloudSuite with its own agent set; vendor performance insights are a named automation. |
| CRM automation | Not published | No CRM named on the pages reviewed. |
| Implementation time | Not published | Implementation is included; no duration is stated. |
| Microsoft ecosystem compatibility | Not published | No Teams or Microsoft 365 surface named. |

**Criteria published: 4 of 9.**

## Strengths

- Flat-fee, unlimited-use pricing is unique in this category and removes the adoption-versus-cost tension entirely.
- Manufacturing and distribution are the design centre, not a vertical page bolted onto a horizontal product.
- Process mining is included — a diagnostic layer none of the other three bundles, and the thing that tells you *where* automation is worth applying.
- Implementation labour included, plus a stated year of post-go-live managed services.
- The cross-system claim (Infor and non-Infor) is broader than Oracle's or SAP's published position.

## Limits

- No published figure for the flat fee, and no published definition of what the flat fee covers at the edges.
- Flat pricing penalises small deployments proportionally.
- Agent Factory is described as better suited to technical users — the self-service ceiling is lower than Oracle's Studio positioning.
- Nothing published on CRM, quoting or margin.
- Several of the most useful specifics (CareFor, Knowledge Hub detail) surface through partner channels rather than Infor's own product pages.

**Skip it if:** you are not on CloudSuite. As with every entry in this cluster,
the value is entirely conditional on the underlying ERP.

## Sources

1. Infor — Infor Velocity Suite · https://www.infor.com/platform/velocity-suite
2. Infor — Enterprise AI / Industry AI · https://www.infor.com/platform/enterprise-ai
3. Infor — Infor Industry AI 2026.04 release · https://www.infor.com/blog/infor-industry-ai-2026-04-release

CareFor Managed Services inclusion and Knowledge Hub detail reported via Infor
partner channels summarising the 2026.04 release; verify directly with Infor.

**At a glance:** Vendor Infor · Category All-inclusive AI package for CloudSuite
ERP · Entry price Flat fee, figure not published · Criteria published 4 of 9

---
---

# 3. `/platform/epicor-prism`

**Title:** Epicor Prism: what the vendor actually publishes
**Meta description:** Epicor's network of vertical AI agents inside Kinetic, Prophet 21 and Propello — including the first ERP AI agent Epicor prices on outcomes.
**Vendor:** Epicor · **Primary sources:** 4

## The Short Answer

Vertical agents built for the make, move and sell economy — and the only ERP AI
product here with a published outcomes-based pricing model.

## What it is

Epicor publishes **Prism** as a network of vertical AI agents that execute work
directly inside its ERP systems. Epicor frames the shift as ERP evolving from a
system of record into a system of outcomes.

**Where it runs:** Kinetic (manufacturing), Prophet 21 (distribution) and
Propello. Prism was initially released for Kinetic.

**The May 2026 agentic stack** (Epicor Insights 2026) added three things Epicor
names directly:

- **Epicor Lux** — the company's agentic design system
- **Epicor Prism Agent Foundry** — for designing, building and customising agents
- A new wave of Prism agents for decision-critical workflows

**Agents Epicor announced at Insights 2026** (as reported by trade press covering
the release): a Reasoning Agent synthesising ERP data, documents and context; a
Quick Ship Tracking Agent; a Quick Ship Freight Insight Agent; a Prophet 21 Prism
Business Rules Agent letting P21 users create and modify business rules from
natural-language prompts while preserving platform governance; an EDI Agent for
plain-language questions about EDI document status and errors; and a CPQ Snap
Assistant for configurator development and maintenance.

**Two of those matter disproportionately for this site's audience.** The EDI
Agent and the CPQ Snap Assistant are the only published ERP AI capabilities
across all six platforms covered here that touch EDI status and product
configuration — the two things distributors and configure-to-order manufacturers
actually spend their days on.

## Published scale — the most concrete numbers in the category

Epicor publishes two operational figures no other ERP vendor here matches:

**The Prism Knowledge Agent processes more than 70,000 requests per month**,
supporting users inside Kinetic, Prophet 21 and Propello. This is a live
production usage figure, not a capability claim.

**Epicor states it operates the largest opt-in ERP dataset**, supporting inventory
and transactions across roughly **40% of the estimated $54B US independent
wholesale automotive aftermarket**, based on light and medium duty parts
distributors.

That second figure is the strongest published vertical-data claim in this entire
cluster. If your business is in aftermarket parts distribution, no other vendor
here can make it.

## Pricing

*Epicor Prism — published pricing, read from epicor.com on 8 September 2026*

| Element | Published price | What the vendor states |
| --- | --- | --- |
| Prism (general) | Not published | Availability depends on Epicor product and environment |
| **Prism Business Communications** | **Outcomes-based** | Epicor calls it "the industry's first ERP AI agent with outcomes-based pricing" |
| Agent Foundry | Not published | Low-code workspace for custom vertical agents |

**Outcomes-based pricing is a genuinely different model** from everything else in
this cluster — Oracle bundles, Infor charges a flat fee, SAP publishes nothing.
Epicor charges against results on at least one agent.

**What to ask.** Outcomes-based only helps if the outcome is defined in your
favour. For Prism Business Communications — which automates RFQ workflows and
supplier communications — establish what counts as a billable outcome, who
measures it, what happens when an agent acts and the outcome does not follow, and
whether there is a floor or cap. An unpublished outcome definition is not
transparency, it is a different kind of opacity.

## Data connectivity

**ERP** — Native to Epicor Kinetic, Prophet 21 and Propello.

**CRM** — Not published as a third-party integration.

**EDI** — **Yes.** The EDI Agent is published for Kinetic users to query document
status and investigate errors in plain language.

**CPQ** — **Yes.** The CPQ Snap Assistant supports configurator development and
maintenance.

**Governance** — Epicor states Prism respects ERP role-based access, and that the
Lux framework enforces guardrails keeping a human in the loop at critical
decision points.

**Deployment note (trade press, from Insights 2026):** Epicor announced that
release **2028.1 will be the final on-premises version** for Kinetic, Prophet 21
and Eclipse. If you run on-premises, this is a material planning input — the AI
roadmap and the cloud deadline are the same decision.

## Epicor Prism against the nine manufacturing criteria

| Criterion | Epicor Prism | Evidence |
| --- | --- | --- |
| ERP connectivity | **Native to Kinetic, P21 and Propello** | Agents execute directly inside the ERP. |
| Product catalogue complexity | **CPQ Snap Assistant** | Supports configurator development and maintenance. |
| Technical specifications | **Reasoning Agent over ERP data and documents** | Epicor describes it as synthesising ERP data, documents and context. |
| Quote generation | **Partly — RFQ workflow automation** | Prism Business Communications automates RFQ workflows and supplier communications, quote to order. Supplier-side, not customer-side quoting. |
| Margin protection | Not published | Not named as a capability. |
| Dealer / distributor management | **Prophet 21 is a distribution ERP with its own agents** | The P21 Business Rules Agent and the aftermarket dataset are distribution-specific. |
| CRM automation | Not published | No CRM named. |
| Implementation time | Not published | A 90-day cloud deployment programme was discussed at Insights 2026 (trade press), but no Prism-specific duration is published. |
| Microsoft ecosystem compatibility | Not published | No Teams or Microsoft 365 surface named. |

**Criteria published: 5 of 9** — the highest of any platform profiled on this site.

## Strengths

- The only published production usage figure in the category: 70,000+ Knowledge Agent requests a month.
- The only vertical-data claim of its kind — roughly 40% of the US independent wholesale automotive aftermarket, by Epicor's own statement.
- Outcomes-based pricing on at least one agent. Whatever its risks, it is the only vendor here putting commercial skin in the game.
- EDI and CPQ agents. Nothing else in this cluster touches either.
- Distribution is a first-class citizen via Prophet 21, not an afterthought.
- Published governance position: role-based access respected, human in the loop enforced by design.

## Limits

- The outcome definition behind outcomes-based pricing is not published. That is the whole contract.
- Prism availability varies by Epicor product and environment; there is no single answer to "do I have it."
- The 2028.1 on-premises end-of-line means AI adoption and cloud migration are one decision, not two.
- Nothing published on margin, or on CRM integration.
- Several agent-level details come from trade press reporting Insights 2026 rather than from Epicor's own product pages.

**Skip it if:** you are staying on-premises past 2028, or you need the AI layer
priced predictably rather than against outcomes you have not yet defined.

## Sources

1. Epicor — Epicor introduces agentic AI stack to power action across ERP workflows (19 May 2026) · https://www.epicor.com/en-us/newsroom/news-releases/epicor-introduces-agentic-ai-stack/
2. Epicor — Epicor Prism product page · https://www.epicor.com/en-us/products/ai-powered-applications/prism/
3. Epicor — Epicor Prism introduces vertical AI agents for supply chain · https://www.epicor.com/en/newsroom/news-releases/prism/
4. Epicor — Epicor launches industry's first ERP AI agent (Prism Business Communications) · https://www.epicor.com/en-us/newsroom/news-releases/prism-business-communications/

Agent-level list and the 2028.1 on-premises deadline reported by trade press
covering Epicor Insights 2026; verify with Epicor before planning against either.

**At a glance:** Vendor Epicor · Category Vertical AI agents inside Kinetic,
Prophet 21 and Propello · Entry price Not published; outcomes-based on Prism
Business Communications · Criteria published 5 of 9

---
---

# 4. `/platform/netsuite-next`

**Title:** NetSuite Next and Ask Oracle: what the vendor actually publishes
**Meta description:** NetSuite's platform overhaul — Ask Oracle, SuiteAgents and the AI Connector for MCP — and what Oracle publishes about cost and rollout.
**Vendor:** Oracle NetSuite · **Primary sources:** 2

## The Short Answer

The biggest change to NetSuite in its history, still mid-rollout — and the only
ERP here publishing a route for outside AI assistants to work against ERP data.

## What it is

Oracle announced **NetSuite Next** at SuiteWorld on 7 October 2025, describing it
as the next generation of NetSuite, embedding conversational AI and agentic
workflows across the suite. Four published components:

**Ask Oracle** — a natural language assistant that Oracle states lets users
search, navigate, analyse and act across the entire NetSuite dataset in their own
words. Oracle specifies it delivers context-aware answers, visualisations,
interactive content, and reasoning explaining the how and why behind every
response. Critically, Oracle states Ask Oracle acts across customisations and
extensions built on the SuiteCloud Platform, including partner applications in
the SuiteCloud Developer Network.

**SuiteAgents** — agentic workflow frameworks, built with the SuiteCloud
Development Framework and running inside NetSuite.

**AI Connector Service** — a Model Context Protocol route allowing external AI
clients to authenticate into NetSuite and call a constrained set of tools.

**AI Studios** — Prompt Studio and Narrative Insight Studio for tuning.

**The MCP connector is the strategic difference.** SAP, Infor and Epicor publish
no equivalent. It means NetSuite data can be worked against from whatever
assistant an organisation has standardised on, rather than only inside the ERP's
own interface — the same architectural openness Backstory publishes on the
revenue-intelligence side.

**Migration.** Oracle states customers can switch to NetSuite Next "with the press
of a button, without having to migrate or disrupt existing customizations." That
is an unusually specific commitment and worth holding Oracle to.

**Foundation.** Powered by Oracle Cloud Infrastructure, combining a unified data
model with what Oracle calls explainable, auditable AI, and the Redwood Design
System.

## Pricing

*NetSuite Next — published pricing, read 8 September 2026*

| Element | Published price | What the vendor states |
| --- | --- | --- |
| NetSuite Next | Not published as a figure | Oracle's positioning is that Next is the future of the platform rather than a separate SKU |
| NetSuite platform | Not published | Oracle publishes no NetSuite price list |
| AI Connector (MCP) | Not published | Announced alongside SuiteAgents |

**A caution on "it's included."** Trade and partner coverage widely reports that
core AI features come with existing licences at no extra cost, and that some
advanced modules are separately licensed or metered against AI Units. Oracle does
not publish a definitive, consolidated statement of what is included versus
metered, and the two claims are not reconcilable from public sources.

**So the buyer's question is a contract question, not a research question.** Ask
Oracle in writing: which named features are included in my current licence, which
are metered, what the unit is, and what happens when the meter runs out. Do not
plan a rollout on a partner blog's reading of the bundle.

## Rollout status

NetSuite Next is **not fully generally available**. Per Oracle's phased approach
and widely reported partner guidance, rollout began in North America with other
regions following through 2026–2027, and several agentic capabilities remain in
preview or early access.

**This matters more than any feature comparison.** Evaluating NetSuite Next today
means evaluating something a large share of customers cannot yet fully use.
Confirm availability for your region, your edition and your specific features
before it enters a business case.

## Data connectivity

**ERP** — Native. Ask Oracle works across the NetSuite dataset.

**Customisations** — Oracle states Ask Oracle acts across SuiteCloud
customisations, extensions and partner applications — a stronger claim than
"works on standard records," and the one most likely to matter in a heavily
customised account.

**External AI** — AI Connector Service via MCP.

**CRM** — NetSuite's own CRM records. No third-party CRM named.

**Implementation** — Not published as a duration. Switching to Next is described
as a button press, not a migration.

## NetSuite Next against the nine manufacturing criteria

| Criterion | NetSuite Next | Evidence |
| --- | --- | --- |
| ERP connectivity | **Native across the full NetSuite dataset** | Ask Oracle acts across the entire dataset including customisations. |
| Product catalogue complexity | Not published | Item records are in scope as data; no catalogue-specific capability is named. |
| Technical specifications | Not published | No document grounding capability named in the announcement reviewed. |
| Quote generation | Not published | Not named among the published capabilities. |
| Margin protection | Not published | Not named as a capability. |
| Dealer / distributor management | Not published | Not named as a capability. |
| CRM automation | **Native NetSuite CRM records** | In scope as part of the unified dataset. No third-party CRM. |
| Implementation time | Not published | Switching stated as a button press; no duration for the AI capabilities. |
| Microsoft ecosystem compatibility | **Partly — via MCP** | The AI Connector lets external MCP-compatible assistants authenticate into NetSuite. Microsoft is not named specifically. |

**Criteria published: 3 of 9.**

## Strengths

- The only ERP in this cluster publishing an MCP route for external AI assistants — genuine architectural openness rather than a walled garden.
- Ask Oracle acting across SuiteCloud customisations and partner apps is a meaningfully stronger claim than most conversational ERP interfaces make.
- The no-migration switch commitment is specific and testable.
- Explainable, auditable AI with reasoning shown is published as a design principle, not an afterthought.
- Strong fit for mid-market companies that could never afford a Fusion or S/4HANA footprint.

## Limits

- Still rolling out. Region, edition and feature availability all vary, and several capabilities remain in preview.
- What is included versus metered is not published clearly enough to plan against.
- Oracle publishes no NetSuite price list at all.
- Nothing published on catalogue, quoting, margin or distribution management.
- Least published capability detail of the four in this cluster.

**Skip it if:** you need certainty this quarter. Much of what makes NetSuite Next
interesting is not yet generally available where most customers are.

## Sources

1. Oracle — NetSuite unveils NetSuite Next (7 October 2025) · https://www.oracle.com/apac/news/announcement/sw25-netsuite-launches-netsuite-next-2025-10-07/
2. Oracle — SuiteAgents and AI Connector Service, announced 7 October 2025 at SuiteWorld (same release)

Rollout timing, AI Unit metering and feature-availability detail are reported by
partner and trade sources rather than published consolidated by Oracle. Confirm
against your own contract.

**At a glance:** Vendor Oracle NetSuite · Category AI-native ERP platform
overhaul · Entry price Not published · Status Phased rollout · Criteria published
3 of 9

---
---

# 5. `/compare/erp-ai-platforms-2026`

**Title:** ERP AI in 2026: how Oracle, SAP, Infor, Epicor, NetSuite and Microsoft actually charge for it
**Meta description:** Six ERP vendors, five completely different pricing models for AI — bundled, flat-fee, outcomes-based, metered and unpublished. Compared from vendor sources.

## The Short Answer

Every ERP vendor now ships AI agents. Almost nobody compares how they *charge*
for them — and the answer differs more than the features do.

## Five pricing models, one category

This is the comparison nobody is writing, and it decides more than the feature
list will.

*ERP AI commercial models — from vendor sources, read 8 September 2026*

| Vendor | Model | What the vendor states |
| --- | --- | --- |
| **Oracle Fusion** | **Bundled, free** | AI Agent Studio "available at no additional cost", included with the ERP, HCM, SCM and CX subscription |
| **Infor** | **Flat fee, unlimited use** | Velocity Suite is "one flat fee, no matter where you're starting from" |
| **Epicor** | **Outcomes-based** (on one agent) | Prism Business Communications billed as "the industry's first ERP AI agent with outcomes-based pricing" |
| **NetSuite** | **Unclear — bundled or metered** | No consolidated published statement; partner sources report both inclusion and AI Unit metering |
| **SAP Joule** | **Not published** | No list price in the capabilities guide; entitlement handled via activation |
| **Microsoft Dynamics 365 Copilot** | Per user | See the existing profile |

**Read that table before any feature table.** An AI capability included at no
extra cost and one billed against outcomes are not the same purchase, even if the
demo looks identical.

**The one that deserves the most scrutiny is Epicor's.** Outcomes-based sounds
buyer-friendly and can be, but only if the outcome is defined, measured and
capped in the contract. Epicor does not publish the definition.

**The one most likely to be misread is NetSuite's.** "It's included" is repeated
across partner blogs; Oracle publishes no statement clean enough to rely on. That
is a contract conversation, not a research finding.

## Architecture: where the AI actually sits

All six run *inside* the ERP rather than connecting to it — which is the whole
point, and the thing every CRM-side AI tool cannot claim.

| | Runs inside ERP | Custom agent builder | Partner agent marketplace | External AI access (MCP) | Cross-vendor systems |
| --- | --- | --- | --- | --- | --- |
| Oracle Fusion | Yes | AI Agent Studio | **Yes, validated** | Not published | Not published |
| Infor | Yes | Agent Factory | Not published | Not published | **Yes, stated** |
| Epicor | Yes | Prism Agent Foundry | Not published | Not published | Not published |
| NetSuite | Yes | SuiteAgents | SuiteCloud Developer Network | **Yes, AI Connector** | Not published |
| SAP Joule | Yes | Not published | Not published | Not published | Not published |

**Three genuine differentiators fall out of this.** Oracle is alone in publishing
a validated partner agent marketplace embedded natively in the application.
NetSuite is alone in publishing an MCP route for outside assistants. Infor is
alone in publishing that its agents orchestrate across non-Infor systems.

## The nine criteria, across the ERP field

| Criterion | Oracle Fusion | Infor | Epicor | NetSuite | SAP Joule |
| --- | --- | --- | --- | --- | --- |
| ERP connectivity | Native | Native | Native | Native | Native |
| Product catalogue | — | Micro-vertical | CPQ Snap | — | SAP objects |
| Technical specs | RAG | Knowledge Hub | Reasoning Agent | — | Doc grounding |
| Quote generation | — | — | RFQ (supplier) | — | Quotation retrieval |
| **Margin protection** | — | — | — | — | — |
| Dealer / distributor | — | CloudSuite Distribution | Prophet 21 | — | — |
| CRM automation | Oracle CX only | — | — | NetSuite CRM only | SAP only |
| Implementation time | — | — | — | — | — |
| Microsoft ecosystem | — | — | — | Via MCP | — |
| **Criteria published** | **4 of 9** | **4 of 9** | **5 of 9** | **3 of 9** | **5 of 9** |

**Two rows are worth staring at.**

**Margin protection is empty across all five.** Not one ERP vendor publishes an
AI capability for protecting margin — despite margin being the single most
common reason a manufacturer or distributor loses money on a deal they won. The
ERP holds every input needed to do it. None of them publishes doing it.

**CRM automation is native-only across the board.** Every vendor's AI reaches its
own CRM and no one else's. If your ERP is SAP and your CRM is Salesforce — an
extremely common pairing — no vendor in this table publishes an AI that spans
both.

That gap between the ERP and a third-party CRM is, structurally, the same gap
the revenue-intelligence tools leave from the other direction. Neither category
crosses it.

## Who each one is actually for

**Oracle Fusion AI** — large enterprises already on Fusion. The bundling is
genuinely generous and the published agent detail is the best in the category.
Nothing here justifies migrating to Oracle.

**Infor Velocity Suite** — mid-market manufacturers and distributors on
CloudSuite who want predictable cost and industry-shaped agents rather than
horizontal finance automation. The flat fee is the standout.

**Epicor Prism** — Kinetic and Prophet 21 customers, especially in aftermarket
parts distribution where Epicor's data position is unmatched. Also the only
option touching EDI and CPQ. Get the outcome definition in writing.

**NetSuite Next** — mid-market companies on NetSuite, and anyone who wants ERP
data reachable from an external AI assistant. Wait for GA in your region before
building a plan.

**SAP Joule** — see the existing profile. Unbeatable inside SAP, invisible
outside it.

## What to ask every ERP vendor

1. Is the AI included in my current subscription, metered, or a separate SKU — in writing, by named feature?
2. If metered, what is the unit, what is my allotment, and what happens when it runs out?
3. If outcomes-based, who defines the outcome, who measures it, and is there a cap?
4. Which named capabilities are generally available in my region and edition *today*, versus in preview?
5. Can the agents reach my third-party CRM, or only your own?
6. Does anything you publish address margin? (Expect no.)

## Sources

Oracle Fusion — https://www.oracle.com/news/announcement/oracle-expands-ai-agent-studio-for-fusion-applications-with-agentic-applications-builder-2026-03-24/ · https://blogs.oracle.com/fusioninsider/new-oracle-ai-agent-studio-for-fusion-apps
Infor — https://www.infor.com/platform/velocity-suite · https://www.infor.com/platform/enterprise-ai
Epicor — https://www.epicor.com/en-us/newsroom/news-releases/epicor-introduces-agentic-ai-stack/ · https://www.epicor.com/en-us/products/ai-powered-applications/prism/
NetSuite — https://www.oracle.com/apac/news/announcement/sw25-netsuite-launches-netsuite-next-2025-10-07/
SAP Joule — see the existing profile for sources

All figures read from these pages on 8 September 2026. This category is moving
quarterly; re-verify before relying on any of it.

---
---

# Implementation notes

**New directory entries:** Oracle Fusion AI Agents, Infor Velocity Suite, Epicor
Prism, NetSuite Next.

**Counters:** Platforms Evaluated → 16 (8 original + 4 revenue intelligence + 4
here) · Published Comparisons → 7 · Last Database Update → 8 September 2026.

**Cross-links:** the ERP roundup should link to the existing SAP Joule and
Microsoft Dynamics 365 Copilot profiles, the manufacturing benchmark, and the
revenue-intelligence roundup — the two roundups make a matched pair, one showing
the CRM-side tools reach no ERP, the other showing the ERP-side tools reach no
third-party CRM.

**The strongest editorial asset in this batch** is the pricing-model table. Five
vendors, five genuinely different commercial structures, all from vendor sources.
Nothing comparable exists on the open web, it answers a question every ERP buyer
has, and it will get cited. Consider giving it its own page —
`/compare/erp-ai-pricing-models-2026` — with the roundup linking to it.

**Re-verification:** NetSuite Next at every quarterly audit until GA is confirmed;
Epicor after the next Insights; all five at the standard quarterly cycle.