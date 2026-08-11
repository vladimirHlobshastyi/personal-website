import type { Post } from '@/types';

const rawPosts: Omit<Post, never>[] = [
  {
    slug: 'ai-agent-insider-threat',
    title: 'The Trojan horse in your CRM: how companies get hacked through one AI-readable field',
    description:
      'One AI-readable field in a CRM can become a real security hole when an agent reads attacker-controlled text as if it were trusted instructions.',
    cover: '/images/blog/ai-agent-insider-threat-cover.webp',
    tags: ['ai-security', 'prompt-injection', 'ai-agents', 'cybersecurity'],
    publishedAt: '2026-08-06',
    ogTitle: 'The Trojan horse in your CRM',
    content: `A few years ago the main AI risk was easy to explain: the model said something dumb, and a human decided whether to trust it. That was already annoying. The newer problem is bigger, because the agent is no longer just talking. It can read inboxes, inspect CRM records, browse the web, write files, run commands and sometimes chain those actions on its own.

That changes the whole failure mode. A wrong answer is one thing. An agent with access, context and somewhere to send data is a very different kind of problem.

The dangerous part is that the workflow often looks completely normal. A sales rep asks for a lead summary. A manager asks Copilot to review the morning inbox. A developer asks a coding agent to inspect a README and fix local config. Nothing about those prompts sounds reckless. Trouble starts when the agent reads attacker-controlled content and treats it like instructions instead of data.

> Once an agent can read private data, absorb hostile content and act through connected tools, it stops feeling like a helper and starts feeling like an insider with bad judgment.

## The shift: from assistant to operator

This is the part many teams still underestimate. Modern agents are moving from interface to actor.

The real issue is not only model quality. It is agency. The moment an agent can:

- access internal systems
- read untrusted external content
- send data or trigger actions back out

you get a risky combination. OWASP still puts prompt injection near the top of the GenAI risk list, and that makes sense. The impact grows fast once the model is connected to business tools instead of living inside a chat window. Recent research goes even further and argues that prompt injection may stay with us as a persistent failure mode for agents, not something that disappears once prompts are written more cleanly.

## Three attack paths matter most in practice

If I were reviewing an agent rollout today, these are the three patterns I would assume are relevant even before an incident shows up internally.

| Attack path | What the attacker controls | What the agent gets wrong |
| --- | --- | --- |
| Indirect prompt injection | Email, PDF, CRM field, webpage, ticket description | Treats hostile content as instructions rather than data |
| Silent egress via metadata or previews | URL previews, HTML title, meta description, Open Graph tags | Leaks data through a side-channel the user never meant to trigger |
| Memory poisoning / sleeper behavior | Long-lived memory, saved preferences, persistent notes | Carries attacker influence into later tasks |

The first pattern is the one most teams already know: someone hides malicious instructions in content the agent will later read. The second is quieter. The 2026 Silent Egress paper showed that agents can be influenced through things users barely notice, like HTML titles, meta descriptions and Open Graph data. A simple link preview can become part of the attack surface.

The third pattern is what makes this feel less like a chatbot problem and more like an insider problem. Long-term memory is useful, but it also gives attackers somewhere to leave residue. If an agent remembers a poisoned preference, a copied address or a fake "always do this" rule, the attack does not need to pay off right away.

## These cases are already real

This is not just a lab discussion anymore. Public cases have already shown the pattern in real products.

### EchoLeak: inbox summary becomes exfiltration

Microsoft tracks CVE-2025-32711 in Microsoft 365 Copilot. Public reporting described a zero-click-style exfiltration chain: the attacker sends crafted email content, the user asks Copilot to summarize the inbox, and the agent processes hostile instructions hidden inside that email context. The brand matters less than the shape of the failure. Untrusted content entered a trusted workflow.

### ForcedLeak: the CRM lead field becomes the payload

Noma Security's ForcedLeak research on Salesforce Agentforce showed the same idea in a sales workflow. Instead of attacking a chat box directly, the attacker used a lead description field. When the rep asked the agent to analyze the lead, the malicious prompt came along with normal CRM data. At that point the agent had exactly what it needed: business context plus connected access.

### CurXecute: coding agents can become execution paths

CVE-2025-54135, documented in the NVD and analyzed publicly by Cato Networks, pushed the problem into developer tooling. In that chain, prompt injection plus unsafe configuration behavior created a route to remote code execution in Cursor workflows. The core lesson is simple: this is not about an AI saying something silly. It is about an agent having enough write power that manipulated input can change the system itself.

## Why this is a business problem, not only a security problem

Security teams will care first, but they should not be the only ones.

First, the same agent that saves time can also increase blast radius. If it can touch customer data, finance flows, internal docs or source code, mistakes get expensive very quickly.

Second, these failures are not always obvious at the start. A poisoned CRM summary or a bad memory entry can look like normal workflow behavior until the data has already moved somewhere it should not have.

Third, the compliance side is no longer theoretical. The European Commission announced that enforcement of additional AI Act rules and transparency requirements begins on **August 2, 2026**. That does not put every agent deployment into the same bucket, but it does mean logging, oversight and governance are getting harder to treat as optional cleanup work.

## What I would lock down first

Prompt guardrails are useful, but they are not enough by themselves. The real controls need to sit deeper in the stack.

### 1. Put authorization at the data and tool layer

If a user is not allowed to access a dataset, the agent should not be able to fetch it just because the request sounds plausible. Prompt checks help, but they should never be the last line of defense.

### 2. Require human confirmation for high-impact actions

Money movement, deletion, permission changes, outbound sending and sensitive exports should stop for explicit human approval. The more autonomy you give an agent, the more important those stop-points become.

### 3. Isolate execution environments

Coding agents, browsing agents and workflow agents should not all share broad network access and long-lived credentials. Sandboxes, scoped secrets and segmentation matter more than beautifully written prompts.

### 4. Treat external content as hostile by default

Emails, PDFs, tickets, websites, pasted links, metadata and lead descriptions should all be modeled as untrusted input. The real question is not whether they look harmless. The question is whether the agent is allowed to treat them as instructions.

### 5. Audit memory and persistent state

If the agent can remember things, memory becomes part of the security boundary. You need visibility into what gets saved, what can shape future tasks and when that state is cleared.

## The question every team should ask now

Do we still know where control lives?

That is the real management question behind agent adoption. Not which model sounds smartest. Not which demo feels the most polished. Control.

If the agent can read private information, browse hostile content and write or send on your behalf, then you are not rolling out a small convenience feature anymore. You are adding a semi-autonomous operator to your stack.

That is why the risk is worth stating plainly in 2026: a convenient AI workflow can become a Trojan horse inside systems the business already trusts. Not because the agent is evil on its own, but because routine inputs can be turned against it.

## Sources

- [OWASP GenAI Security Project: LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [AI Agents May Always Fall for Prompt Injections](https://arxiv.org/abs/2605.17634)
- [Silent Egress: When Implicit Prompt Injection Makes LLM Agents Leak Without a Trace](https://arxiv.org/abs/2602.22450)
- [Microsoft Security Response Center: CVE-2025-32711](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2025-32711)
- [Noma Security: ForcedLeak in Salesforce Agentforce](https://noma.security/noma-labs/forcedleak/)
- [NVD: CVE-2025-54135](https://nvd.nist.gov/vuln/detail/CVE-2025-54135)
- [Cato Networks: CurXecute RCE in Cursor](https://www.catonetworks.com/blog/curxecute-rce/)
- [European Commission: enforcement from August 2, 2026](https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august)`,
  },
  {
    slug: 'digital-face-control-ai-search',
    title: 'Digital Face Control: why AI is erasing your brand from search',
    description:
      'AI search skips brands it cannot quickly understand or verify. If your facts are vague, inconsistent or missing from trusted third-party sources, you get ignored.',
    cover: '/images/blog/digital-face-control-cover.webp',
    tags: ['geo', 'ai-search', 'brand-visibility', 'earned-media'],
    publishedAt: '2026-07-18',
    ogTitle: 'Digital Face Control: staying visible in AI search',
    content: `Picture a buyer asking ChatGPT, Perplexity or Google Search for the best company in your category. Your team may have a solid product, happy clients and decent SEO, but the answer still mentions someone else. That usually does not mean your business is bad. It often means the system could not understand you fast enough or trust you enough to name you.

That is the practical side of Generative Engine Optimization, or GEO. In classic search, the fight was mostly about rankings and clicks. In AI-assisted search, the harder question is this: can the system justify mentioning your brand at all? If it cannot pull clear facts, compare you with alternatives or verify your claims elsewhere, you become easy to skip.

## Visibility is changing because the interface changed

Websites still matter. What changed is the moment when the decision starts.

People increasingly see an answer before they see a list of links. Google's own documentation for AI features makes this pretty clear: your pages still need to be crawlable, indexable, technically sound and genuinely useful. AI visibility does not replace SEO. It depends on it.

The difference is that weak visibility hurts more now. In old search, you could still survive halfway down the page and hope the user kept scrolling. In an answer-first interface, a lot of users never get that far. Ahrefs' 2026 update estimates that AI Overviews cut the organic CTR of position-one pages by around 58% on affected queries. The exact number will vary, but the direction is obvious: more intent gets resolved before the click.

## AI is doing a kind of digital face control

That phrase is blunt, but it helps. AI search is not only retrieving information. It is filtering who looks credible enough to mention.

It is effectively asking:

- Does this page answer the question directly?
- Are the claims specific enough to compare?
- Do trusted third-party sources support the same facts?
- Does the company look consistent across pages and profiles?
- Is there enough evidence here to cite safely?

If the answer is no, you usually do not get a dramatic penalty. You just disappear from the answer. In practice, that can be worse than a ranking drop because the buyer never even knows you were an option.

## Facts matter more than adjectives

This is where a lot of marketing copy stops helping.

Phrases like "market-leading," "premium service" or "individual approach" may still sound nice to a human after the click, but they give an AI system almost nothing to work with before the click. It has much more use for:

- clear pricing logic
- delivery windows
- supported regions
- service limits
- licensing or certification details
- documented implementation steps
- return, refund or support policies

That is one of the strongest takeaways from the original GEO paper. The authors showed that more extractable, evidence-rich content can improve visibility in generative answers, with some methods producing gains of up to 40% in their benchmark. The practical lesson is not that every business gets the same uplift. It is that structure and evidence change whether a model can reuse your content.

## Your opening section needs to earn its place

Many pages waste the most valuable part of the screen on vague brand throat-clearing.

If a page is meant to win a commercial query, the opening section should quickly explain:

- what you offer
- who it is for
- where it applies
- what the key limitation or differentiator is
- what proof supports the claim

This is not about some magical word-count trick. It is about extractability. Retrieval systems often surface passages, not entire pages. If the useful answer only shows up after three paragraphs of generic copy, you are making the model do too much work.

## Earned media matters because AI does not want to trust you alone

Your website is necessary. It is just not enough on its own.

Recent GEO research comparing AI search with traditional web search found that AI answers lean heavily on earned media: third-party coverage, reviews, reference pages and other sources you do not control directly. That is logical. If a system has to justify a recommendation, outside confirmation is safer than self-description.

This is where a lot of companies get the strategy backward. They polish landing pages, but ignore the evidence layer around the brand. In practice, AI visibility often improves when you have:

- credible industry mentions
- detailed review profiles
- comparison articles
- partner pages
- expert commentary
- communities where real users discuss concrete pros and cons

This is not PR for vanity's sake. It is independent verification.

## Consistency is part of trust

An AI system does not experience your company as one clean homepage. It sees fragments: a pricing page, a review, a service page, a profile, a comparison post, a listing.

When those fragments disagree, trust drops. If your timeline says one thing on the site, another in a sales deck and a third in a marketplace profile, the system has less confidence recommending you. The same goes for pricing, geography, support windows and capabilities.

That is why GEO is not just a content exercise. It is also a data-governance exercise. The cleaner and more consistent your business facts are across the public web, the easier they are to cite.

## What I would fix first

If a company wanted to improve AI-search visibility quickly, I would start with four moves.

### 1. Rebuild high-intent pages around direct answers

Take the pages closest to revenue and rewrite the first screen so the offer is explained plainly, with facts instead of slogans.

### 2. Add comparison-ready evidence

Publish the details that help both a machine and a buyer compare options: scope, exclusions, pricing logic, delivery model, proof points and limitations.

### 3. Audit third-party visibility

List the places where the brand appears outside your own site, then check whether those mentions are current, detailed and consistent.

### 4. Treat inconsistencies as ranking risk

Fix contradictions across site copy, structured data, profiles and public references. Messy facts are not just a branding issue anymore.

## GEO is not a replacement for SEO

This is still the part many teams get wrong. GEO is not a clever new shortcut that replaces search fundamentals. It is new pressure on the same foundation.

If your site is hard to crawl, hard to understand, weak on evidence or disconnected from the web's wider trust graph, AI systems have less reason to surface you. The brands that stay visible will not always be the loudest ones. They will be the easiest to verify, the easiest to compare and the safest to cite.

That is what digital face control really means in 2026. More decisions are happening before the click. Your job is to make your business one of the options an AI can mention without hesitation.

## Sources

- [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735)
- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Ahrefs: AI Overviews Reduce Clicks by 58%](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- [Generative Engine Optimization: How to Dominate AI Search](https://arxiv.org/abs/2509.08919)`,
  },
  {
    slug: 'ai-agents-2026-almost-right-code',
    title: 'AI Agents 2026: how to manage AI agents without drowning in almost-right code',
    description:
      'AI agents help most with narrow, checkable work. Teams lose the upside when they use them for fuzzy, high-context tasks and then pay for it in review and rework.',
    cover: '/images/blog/ai-agents-2026-cover.webp',
    tags: ['ai-agents', 'developer-productivity', 'context-engineering', 'software-architecture'],
    publishedAt: '2026-07-10',
    ogTitle: 'AI Agents 2026: managing almost-right code',
    content: `The interesting question is no longer whether teams use AI. Most already do, or they are about to. The real question is whether that usage turns into reliable output or just creates a larger pile of review, rework and token spend.

That difference matters because adoption and productivity are not the same thing. Stack Overflow's 2025 developer survey says 84% of respondents are using or planning to use AI in development. The same survey also shows the pain point clearly: 66% cited "almost right, but not quite" answers as a major frustration. That, more than anything, is the management problem.

## The productivity story is real, but uneven

If we want to be honest about AI agents in engineering, we have to hold two ideas at once.

First, the upside is real. McKinsey reported strong gains on routine work: documentation in roughly half the time, new code in nearly half the time and refactoring in close to two-thirds the time.

Second, those gains do not carry across every kind of task. The same McKinsey study found that time savings fell below 10% on work developers considered highly complex. METR's early 2025 open-source study was even more sobering: experienced developers took 19% longer with AI tools. A later 2026 METR update found only weak evidence of improvement for a returning subset, with wide confidence intervals and clear warnings about selection effects.

The practical takeaway is simple. AI agents are not a universal productivity multiplier. They are a task-shaped tool. The value depends on the work itself, the cleanliness of the codebase, the process around the task and the person steering the agent.

## "Almost right" code is expensive code

Teams rarely lose money because an agent writes something obviously broken. They lose money because the output looks believable enough to survive a lazy first pass.

That is why "almost right" is such an expensive outcome:

- It passes the quick visual check.
- It often compiles and may even satisfy the happy path.
- It hides problems in edge cases, state transitions, type assumptions, security boundaries or UI behavior.
- It creates review debt, because another engineer now has to prove where it is wrong instead of writing the right solution directly.

Stack Overflow's 2025 survey says only 33% of respondents trust AI output, while 46% actively distrust it. That skepticism is healthy. If your team treats agent output like finished code instead of a draft that has to earn trust, the savings disappear later in review and incident cleanup.

## Where agents are genuinely useful

The most reliable wins usually show up when the task is narrow, repetitive and easy to verify.

| Good fit for agents | Why it works |
| --- | --- |
| Boilerplate and scaffolding | The shape is predictable and review is quick |
| Unit tests and fixtures | The scope is narrow and expected behavior is clear |
| Documentation and summaries | The agent is good at compressing existing information |
| Mechanical refactors | The intent is defined before execution starts |
| Codebase search and investigation | Agents can scan and summarize faster than a human starting from zero |

The opposite category matters just as much.

| High-risk agent territory | Why teams get burned |
| --- | --- |
| System design and architecture | The work depends on tradeoffs and context the model does not fully own |
| Security-critical or billing logic | Small mistakes can have outsized impact |
| Data migrations and destructive operations | Silent errors are extremely costly |
| Mature frontend systems | Hidden styling, state and accessibility constraints are easy to miss |
| Cross-service contract changes | The failure surface spreads across teams and environments |

That is the real division of labor. Agents are useful executors. They are still weak owners of high-context judgment.

## Cost problems usually start as context problems

Most teams first notice the issue as spend, but the root cause is usually messy context.

Anthropic's Claude Code guidance says this very directly: token costs rise with context size. Long sessions get expensive because the system keeps carrying more history, tool output and side conversations forward. Their advice is practical: clear unrelated threads, compact history and keep the working context small.

Anthropic's best-practices guide makes the same point from another angle. Scope investigations narrowly, or use subagents so exploratory work does not pollute the main implementation context. That pattern is useful beyond Claude. In general, agents get more expensive and less predictable when one conversation is asked to remember everything.

This is also where MCP becomes useful. The Model Context Protocol gives AI tools a standard way to connect to external docs, resources and workflows. In practice that means you do not have to paste an entire schema, handbook or integration guide into the prompt. You can fetch the exact context the task needs when it needs it.

## The management model that actually works

If a team wants durable gains, it needs an operating model, not just a few tool subscriptions.

### 1. Route work by difficulty

Do not throw every task at the biggest or most autonomous agent you have. Use cheaper, faster models for summarization, search, mechanical code generation and small edits. Escalate only when the task really needs deeper reasoning.

### 2. Keep sessions narrow

One task, one objective, one acceptance target. When the topic changes, reset the context. A session that mixes product thinking, architecture debate, implementation and release notes becomes noisy fast.

### 3. Separate investigate, implement and review

These are different jobs. Investigation needs breadth. Implementation needs focus. Review needs skepticism. Keeping them separate reduces context contamination and makes verification cleaner.

### 4. Make verification mandatory

Agent output should have to prove itself. That means tests, acceptance checks, UI screenshots, diff review and sometimes a second pass from another engineer or another agent. Good teams save time by tightening feedback loops, not by skipping them.

### 5. Treat tools as context infrastructure

Live docs, local files, issue trackers, logs, schemas and internal playbooks should be reachable through tools or structured retrieval. Recopying them into every prompt is expensive and unreliable.

## Frontend work is where overconfidence gets expensive fast

Agents are surprisingly good at generating a clean greenfield screen. That does not mean they are equally safe inside a mature product UI.

In an established frontend, the model rarely has a complete mental picture of:

- the spacing system
- responsive breakpoints
- accessibility requirements
- motion behavior
- content edge cases
- hidden coupling between components and state

That is why a tiny visual change can break a neighboring state you were not even looking at. In practice, AI works best when it drafts inside a well-defined design system. It gets much shakier when it improvises inside a large UI with a lot of history.

## The engineer's role is changing, not disappearing

The strongest AI-assisted developers are not the ones who hand over the keyboard and hope. They are the ones who set scope clearly, provide the right context, define acceptance criteria and reject plausible nonsense fast.

That is partly a technical skill and partly a management skill. You are no longer supervising only code. You are supervising a system that generates code, spends budget, amplifies ambiguity and can look more correct than it really is.

The useful posture is not blind trust or total rejection. It is controlled delegation.

## What matters in practice

If I were setting the baseline for a product team using AI agents in 2026, I would keep it simple:

- Use agents aggressively for narrow, verifiable work.
- Keep architecture, irreversible decisions and critical business logic under clear human ownership.
- Track where review time rises instead of assuming faster output means faster delivery.
- Manage context like a budget, because it behaves like one.
- Build lightweight tooling for retrieval, verification and usage visibility before expanding autonomy.

That is how AI becomes an actual engineering boost instead of an expensive detour. The goal is not to pretend the agent is a senior engineer. The goal is to make it a fast subcontractor inside a system that still has owners, review and standards.

## Sources

- [Stack Overflow Developer Survey 2025: AI](https://survey.stackoverflow.co/2025/ai)
- [McKinsey: Unleashing developer productivity with generative AI](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/unleashing-developer-productivity-with-generative-ai)
- [METR: We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)
- [Anthropic: Best practices for Claude Code](https://code.claude.com/docs/en/best-practices)
- [Anthropic: Manage costs effectively](https://code.claude.com/docs/en/costs)
- [Model Context Protocol: What is MCP?](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)`,
  },
  {
    slug: 'seo-apocalypse-end-of-click-era',
    title: 'The end of the click-only era: making your business visible in AI search',
    description:
      'Customers increasingly get answers before they see links. If your site is hard to crawl, compare or trust, AI systems have little reason to recommend your business.',
    cover: '/images/blog/seo-click-era-cover.webp',
    tags: ['seo', 'ai-search', 'geo', 'rag'],
    publishedAt: '2026-07-05',
    ogTitle: 'The end of the click era: staying visible in AI search',
    content: `Search is still here, but the path to discovery is changing. The old game was simple: win a click from the results page, then persuade the person after they land. The newer game is different. More often now, an AI system filters the options before the customer even opens a site.

That does not mean every query ends with one answer or that classic search is gone. It does mean you can no longer assume a strong ranking is enough. When someone asks an assistant for the best option, a comparison or a recommendation, the assistant may answer directly and cite only a few sources. If your business is missing from that answer, you are invisible at the exact moment interest shows up.

## The new middleman is a decision layer

Classic search mostly sent people to pages. AI search is increasingly reading the question, gathering material and composing an answer. ChatGPT Search, for example, can reformulate a prompt into web queries and then show inline citations or a sources panel in the response. [OpenAI's documentation](https://help.openai.com/en/articles/9237897-chatgpt-search) explains that flow from the user side.

The important point is not that a model replaces every search result. The important point is that a model now sits between the customer and the open web and decides what is worth pulling forward. A slogan like "market leader" gives it very little to work with. A precise specification, a clear return policy, a compatibility note or a verified delivery window is much easier to compare and trust.

> In an answer-first interface, the business that gets mentioned is often the one that is easiest to verify, not the one that shouts the loudest.

## Your website is becoming a data source

This is a useful mindset shift for anyone building or marketing a site. A website is no longer just a brochure or conversion page. It is also a public data source that search and AI systems need to retrieve, understand and cite.

Different AI products use different retrieval and ranking pipelines. Some look a lot like RAG, some do not. The safer move is to focus on what these systems consistently need from a page:

| What the system needs | What the page should provide |
| --- | --- |
| A direct answer | A section that answers one question clearly without relying on surrounding fluff |
| Evidence to compare | Specific facts: price, materials, limits, delivery, availability and policy details |
| A trustworthy source | Consistent information across the page, schema, checkout, profiles and third-party listings |
| Something it can access | Crawlable pages, useful text, internal links and a technically healthy site |

That is why self-contained passages matter so much. A crawler may surface one section, not your whole page. Write headings that match real questions, then make the paragraph below each heading complete enough to quote on its own.

## What has not changed: SEO is still the base layer

This is where the "SEO is dead" take falls apart. Traditional SEO is not becoming less important. It is becoming infrastructure. Google says the same best practices still apply for AI Overviews and AI Mode: useful text needs to be available to crawlers, structured data needs to match visible content and the page still has to be eligible for Google Search in the first place. There is no magic AI-only markup that guarantees inclusion. See [Google's guidance for AI features and websites](https://developers.google.com/search/docs/appearance/ai-features).

That makes technical hygiene non-negotiable. If a page cannot be crawled, indexed, rendered, linked properly or trusted as a source, an AI system has less chance of surfacing it. The same goes for conflicting business data. If a product price differs between the page and the cart, or a return policy disagrees with a marketplace listing, the recommendation layer sees uncertainty where it needs confidence.

## Five practical steps for the AI answer era

### 1. Replace claims with evidence

Audit major landing pages for vague copy. Replace "best quality" with material details, test results, warranty terms, supported use cases or independently verifiable outcomes. There is no universal visibility uplift from doing this. The simpler truth is that evidence is easier to retrieve, compare and cite than slogans.

### 2. Design for extractable passages

Structure pages around real buyer questions. Give each section a descriptive heading, explain the subject in the first sentence and then add the key limitation or proof. A product page should say who it is for and who it is not for. A B2B service page should state scope, delivery model, implementation time and exclusions.

### 3. Treat honest negatives as product data

Sometimes the most useful sentence on a page is a limitation. "Not suitable for wide feet" is less flashy than a universal claim, but it is more helpful. It helps both people and assistants rule out a bad fit and makes the positive recommendation more believable for the right buyer.

### 4. Earn third-party evidence

Your site explains what you say about yourself. Reviews, expert comparisons, partner pages, industry coverage and reputable "best of" lists give assistants outside material to cross-check. This is not a shortcut for weak content. It is the external proof that makes a recommendation easier to defend.

### 5. Run the site like a verified database

Create one source of truth for high-intent facts such as pricing, stock status, service area, support windows, compatibility, delivery and returns. Then make sure those same facts flow into the page, schema, checkout, feeds and business profiles.

## What I would ship in the next 30 days

The point is not to bolt on a new pile of "AI hacks." The point is to make existing business evidence easier to access, compare and trust.

| Week | Ship | Proof it is done |
| --- | --- | --- |
| 1 | Baseline and technical access | Search Console and Bing Webmaster Tools are verified; crawl and indexing issues are fixed; important pages are available as text; robots and CDN rules allow relevant search crawlers. |
| 2 | Evidence-first commercial pages | The ten highest-intent pages answer real buyer questions and include specifications, constraints, pricing, delivery, returns and comparison tables where useful. |
| 3 | Consistent entity data | Product and service facts match across landing pages, structured data, checkout, feeds, Google Business Profile and trusted third-party listings. |
| 4 | Measurement and proof | Branded and non-branded search, referral traffic, conversions and cited mentions are tracked; one expert guide or comparison has been published for others to reference. |

Start with the pages closest to revenue, not with a broad content sprint. One clear product page with verified facts is usually worth more than ten generic articles about AI search.

## The real goal is justified recommendation

The shift toward AI answers is not a reason to abandon normal search or chase a new acronym for its own sake. It is a reason to make the business legible.

The website that wins will not always be the one with the most content or the loudest copy. It will be the one that makes a recommendation easy to justify with accurate, accessible and consistent evidence.

Build pages a customer can trust without a sales call. Build those same pages so a search engine can index them and an AI system can cite them. The click is no longer the only gate to discovery, but it still matters once you have earned the recommendation.`,
  },
];

export const posts: Post[] = rawPosts
  .map((post) => ({ ...post }))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
