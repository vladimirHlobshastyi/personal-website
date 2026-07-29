import type { Post } from '@/types';

const rawPosts: Omit<Post, never>[] = [
  {
    slug: 'digital-face-control-ai-search',
    title: 'Digital Face Control: why AI is erasing your brand from search',
    description:
      'AI search does not rank brands the way classic search did. If your business is hard to verify, hard to cite or absent from trusted third-party sources, it becomes easy for assistants to ignore.',
    cover: '/images/blog/digital-face-control-cover.webp',
    tags: ['geo', 'ai-search', 'brand-visibility', 'earned-media'],
    publishedAt: '2026-07-18',
    ogTitle: 'Digital Face Control: staying visible in AI search',
    content: `Imagine a buyer asking ChatGPT, Perplexity or Google Search for the best company for a service you sell. If the answer names your competitors and not you, the problem may have less to do with product quality than with whether your business is legible to an AI system.

That is the practical meaning of Generative Engine Optimization, or GEO. In classic search, the fight was often about ranking and click-through rate. In AI-assisted discovery, the more important question is whether a system can justify mentioning you at all. If it cannot extract clear facts, compare you with alternatives, or validate your credibility from other sources, your brand becomes easy to skip.

## Visibility is changing because the interface is changing

The core shift is not that websites stopped mattering. It is that the user increasingly sees an answer before they see a list of links.

Google's own documentation for AI features makes the ordering clear: inclusion in AI experiences still depends on the same underlying search foundations. Your content must be crawlable, indexable, technically healthy and genuinely useful. AI visibility does not replace SEO. It sits on top of it.

That is why weak visibility now feels harsher. In traditional search, a business could still survive somewhere on the page and hope the user kept scrolling. In an answer-first interface, many users never reach that stage. Ahrefs' 2026 update estimates that AI Overviews reduce the organic CTR of position-one pages by about 58% on affected queries. The exact number will vary by query type and intent, but the direction is clear: more answers are being resolved before a click happens.

## AI is doing a kind of digital face control

This is the useful mental model for operators and founders. AI search is not only a retrieval system. It is also a filtering system.

It asks questions like these:

- Does this page answer the question directly?
- Are the claims specific enough to compare?
- Do other trusted sources corroborate the same facts?
- Does the business look internally consistent across pages and profiles?
- Is there enough evidence to cite this source confidently?

If the answer is no, your brand is not necessarily penalized in a dramatic way. It is simply omitted. That omission is often more damaging than a ranking drop, because the user may never know you were an option.

## Facts now matter more than adjectives

Marketing language that works on people after a click often does very little for an AI system before the click.

Terms such as "market-leading," "premium service" or "individual approach" are difficult to verify and easy to ignore. A model has much more use for:

- specific pricing models
- delivery windows
- supported regions
- service constraints
- licensing or certification details
- documented implementation steps
- return, refund or support policies

This is one of the strongest lessons from the original GEO paper. The paper showed that visibility in generative answers can improve when content is made more extractable and evidence-rich, with some optimization methods producing gains of up to 40% in the benchmark. The right takeaway is not that every business gets the same uplift. It is that structure and evidence affect whether a system can reuse your content.

## Your opening sections have to do real work

Do not bury the answer under brand preamble.

If a page is meant to win a commercial question, the opening section should state clearly:

- what you offer
- who it is for
- where it applies
- what the main constraint or differentiator is
- what proof supports the claim

This is less about a magical word count rule and more about extractability. Retrieval systems frequently surface passages, not entire pages. If the answer only becomes clear after several paragraphs of generic copy, you are forcing the model to do too much interpretation.

## Earned media matters because AI does not want to trust you alone

Your own website is necessary, but it is not sufficient.

Recent GEO research comparing AI search and traditional web search found that AI answers lean heavily toward earned media: third-party editorial coverage, reviews, reference pages and other sources that are not controlled by the brand itself. That makes sense. If a system has to justify a recommendation, external corroboration is safer than self-description.

This is where many companies get the strategy backward. They invest in polishing landing pages, but neglect the evidence ecosystem around the brand. In practice, AI visibility is often strengthened by:

- credible industry mentions
- review platforms with useful detail
- comparison articles
- partner pages
- expert commentary
- communities where real users discuss concrete pros and cons

The goal is not PR vanity. It is independent verification.

## Consistency is part of trust

An AI system does not experience your company as one neat homepage. It encounters fragments: a pricing page, a review, a service page, a profile, a comparison article, a location listing.

If those fragments disagree, trust degrades. A service that has one timeline on the site, another in a sales deck, and a third in a marketplace listing becomes harder to recommend confidently. The same applies to pricing, geography, support windows and capabilities.

This is why GEO is not only a content task. It is also a data-governance task. The cleaner your business facts are across the public web, the easier they are to cite without risk.

## What I would fix first

If a company wants to become more visible in AI-assisted search, I would start with four practical moves:

### 1. Rebuild high-intent pages around direct answers

Rewrite the most valuable pages so the first screen explains the offer plainly and uses verifiable facts instead of slogans.

### 2. Add comparison-ready evidence

Publish the details that help a machine and a buyer compare options: scope, exclusions, pricing logic, delivery model, proof points and limitations.

### 3. Audit third-party visibility

List where the company is mentioned outside its own site and identify whether those mentions are current, detailed and consistent.

### 4. Treat inconsistencies as ranking risk

Fix contradictory business data across site copy, structured data, profiles and other public references.

## GEO is not a replacement for SEO

This is the part many teams still get wrong. GEO is not a new trick that replaces search fundamentals. It is a new pressure applied to the same foundation.

If your site is hard to crawl, hard to understand, thin on evidence or disconnected from the broader trust graph of the web, AI systems have less reason and less ability to surface you. The brands that remain visible will not be the loudest. They will be the easiest to verify, the easiest to compare and the safest to cite.

That is what digital face control really means in 2026. The decision is increasingly made before the click. Your job is to make your business one of the options an AI can defend with confidence.

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
      'AI agents can speed up routine engineering work, but the real gains come only when context, verification, cost control and task boundaries are managed deliberately.',
    cover: '/images/blog/ai-agents-2026-cover.webp',
    tags: ['ai-agents', 'developer-productivity', 'context-engineering', 'software-architecture'],
    publishedAt: '2026-07-10',
    ogTitle: 'AI Agents 2026: managing almost-right code',
    content: `AI adoption is no longer the interesting question. The interesting question is whether a team can turn AI usage into reliable output instead of a larger pile of review, rework and token spend.

That distinction matters because adoption and productivity are not the same thing. Stack Overflow's 2025 developer survey says that 84% of respondents are using or planning to use AI tools in their development process. The same survey also shows why the conversation is still unsettled: the biggest frustration, cited by 66% of developers, is dealing with solutions that are "almost right, but not quite." That is the real management problem.

## The productivity story is real, but uneven

There is no honest way to discuss AI agents in engineering without holding two ideas at the same time.

First, the upside is real. McKinsey's developer productivity study reported large gains on routine work: documenting code in roughly half the time, writing new code in nearly half the time, and refactoring in nearly two-thirds the time.

Second, the gains are not universal. The same McKinsey study says time savings shrank to less than 10% on tasks that developers considered high in complexity. METR's early-2025 open-source study was even more sobering: experienced developers took 19% longer when using AI tools. In a later 2026 update, METR reported weak evidence of improvement for a returning subset of developers, but with wide confidence intervals and clear caution about selection effects.

The practical takeaway is simple: AI agents are not a blanket productivity multiplier. They are a task-dependent tool. The payoff depends on the shape of the work, the cleanliness of the codebase, the quality of the surrounding process, and the operator's ability to steer.

## "Almost right" code is expensive code

Teams usually do not lose money because an agent writes obviously broken code. They lose money because the output looks plausible enough to survive a shallow review.

This is why "almost right" is such an expensive failure mode:

- It passes the first visual check.
- It often compiles and may even satisfy the happy path.
- It tends to hide mistakes in edge cases, state transitions, type assumptions, security boundaries and UI behavior.
- It creates verification debt, because another engineer now has to prove where the code is wrong instead of writing the correct solution directly.

Stack Overflow's 2025 survey shows that only 33% of respondents trust the accuracy of AI output, while 46% actively distrust it. That skepticism is rational. If your workflow treats agent output as finished code instead of a draft that must earn trust, the savings disappear in downstream review and incident handling.

## Where agents are genuinely useful

The most reliable gains show up when the task is bounded, repetitive and easy to verify.

| Good fit for agents | Why it works |
| --- | --- |
| Boilerplate and scaffolding | The shape is predictable and review is fast |
| Unit tests and fixtures | The scope is narrow and expected behavior is explicit |
| Documentation and summaries | The agent can compress existing information well |
| Mechanical refactors | The intent is defined before execution starts |
| Codebase search and investigation | Agents can scan and summarize faster than a human reading from zero |

The opposite category is just as important.

| High-risk agent territory | Why teams get burned |
| --- | --- |
| System design and architecture | The work depends on tradeoffs, constraints and business context the model does not fully own |
| Security-critical or billing logic | Small errors have disproportionate impact |
| Data migrations and destructive operations | The cost of a silent mistake is extremely high |
| Mature frontend systems | Hidden styling, state and accessibility constraints are easy to miss |
| Cross-service contract changes | The failure surface spans multiple teams and environments |

This is the real division of labor: agents are strong executors, but they are still unreliable owners of high-context judgment.

## Cost problems usually start as context problems

Most teams first notice the issue as spend, but the root cause is usually context discipline.

Anthropic's Claude Code cost guidance is very direct: token costs scale with context size. Long sessions cost more because the system keeps carrying the accumulated conversation and tool output forward. The same guidance recommends clearing unrelated sessions, compacting history and keeping context small.

Anthropic's best-practices guide makes the same point from a different angle: scope investigations narrowly, or use subagents so that exploratory work does not pollute the main implementation context. That is a useful pattern beyond Claude itself. The broader lesson is that agents get more expensive and less predictable when you ask one conversation to remember everything.

This is also where MCP becomes useful. The Model Context Protocol defines a standard way for AI applications to connect to external tools, resources and workflows. Operationally, that means you do not need to paste an entire knowledge base, database export or integration manual into the prompt. You can fetch the exact context the task needs, when it needs it.

## The management model that actually works

If a team wants durable gains, it needs an operating model, not just subscriptions.

### 1. Route work by difficulty

Do not send every task to the biggest or most autonomous agent available. Use cheaper and faster models for summarization, search, rote code generation and small edits. Escalate only when the task genuinely needs deeper reasoning. This is basic cost control, but it also reduces the temptation to overuse agent autonomy on trivial work.

### 2. Keep sessions narrow

One task, one objective, one acceptance target. When the topic changes, reset the context. A session that tries to cover product thinking, architecture debate, implementation, review and release notes at once becomes a noisy workspace rather than a useful assistant.

### 3. Separate investigate, implement and review

These are different jobs and should not always share the same agent flow. Investigation benefits from breadth. Implementation benefits from focus. Review benefits from skepticism. Keeping them separate reduces context contamination and makes verification clearer.

### 4. Make verification mandatory

Agent output should have to prove itself. That means tests, explicit acceptance checks, screenshots for UI work, diff review, and when needed, adversarial review by another pass or another engineer. A good team saves time by shortening feedback loops, not by skipping them.

### 5. Treat tools as context infrastructure

Live docs, local files, issue trackers, logs, schemas and internal playbooks should be available through tools or structured retrieval, not manually recopied into every conversation. This is one of the few places where infrastructure work directly improves both quality and cost.

## Frontend work is where overconfidence gets expensive fast

Agents can generate a clean greenfield screen surprisingly quickly. That does not mean they are equally safe when editing a mature UI.

In an established frontend, the model rarely has a full mental view of:

- the existing spacing system
- responsive breakpoints
- accessibility rules
- motion behavior
- content edge cases
- hidden coupling between components and state

That is why apparently small visual edits can break neighboring states. In practice, AI is strongest when it drafts a change inside a constrained design system. It is much weaker when it tries to improvise inside a large UI with accumulated history.

## The engineer's role is changing, not disappearing

The strongest AI-assisted developers are not the ones who hand over the keyboard and hope for the best. They are the ones who define scope clearly, provide the right context, set acceptance criteria, and reject plausible nonsense quickly.

That is a management skill as much as a technical one. You are no longer supervising only code. You are supervising a system that generates code, consumes budget, amplifies ambiguity and occasionally looks more correct than it is.

The winning posture is not full trust or full rejection. It is controlled delegation.

## What matters in practice

If I were setting the standard for a product team using AI agents in 2026, I would keep it simple:

- Use agents aggressively for narrow, verifiable work.
- Keep architecture, irreversible decisions and critical business logic under explicit human ownership.
- Track where review time rises instead of assuming faster output means faster delivery.
- Manage context like a budget, because it is one.
- Build lightweight tooling around retrieval, verification and usage visibility before expanding autonomy.

That is how AI becomes a real engineering boost instead of a financial trap. The goal is not to let the agent act like a senior engineer. The goal is to make it an efficient subcontractor inside a system that still has clear ownership, review and standards.

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
      'AI answers are changing how customers discover businesses. Clear evidence, structured content, consistent data and technical SEO now decide whether a brand can be recommended.',
    cover: '/images/blog/seo-click-era-cover.webp',
    tags: ['seo', 'ai-search', 'geo', 'rag'],
    publishedAt: '2026-07-05',
    ogTitle: 'The end of the click era: staying visible in AI search',
    content: `We are watching discovery change shape. The old game was an attention economy: earn a click from a page of search results and persuade a person after they land. The new game is increasingly an access economy: an AI system filters options before the customer ever sees a website.

That does not mean every search engine has disappeared, or that every query now ends with a single answer. It does mean that a business can no longer assume a high-ranking page will be read in full. When people ask an assistant for the best option, a comparison, or a recommendation, the assistant may return a concise answer with a short set of cited sources. If your business is not represented in that answer, you may be invisible at the exact moment of intent.

## The new intermediary is a decision layer

Classic search mostly sent people to pages. AI search experiences increasingly interpret the question, gather supporting sources, and synthesize an answer. ChatGPT Search, for example, can rewrite a prompt into more targeted web queries and show inline citations or a sources panel in its response. [OpenAI's documentation](https://help.openai.com/en/articles/9237897-chatgpt-search) describes that retrieval flow from the user side.

The important shift is not that a model replaces every search result. It is that a model becomes a decision layer between the customer and the open web. A slogan such as "market leader" or "the innovative choice" gives that layer very little to work with. A precise specification, a documented return policy, a compatibility constraint, or a verified delivery window is much easier to compare and justify.

> In an answer-driven interface, the useful business is often the one that is easiest to verify, not the one that is loudest.

## Your website is becoming a data source

For a developer, this is a useful mental-model change: a website is no longer only a brochure or conversion surface. It is also a public data source that search and AI systems need to retrieve, interpret and cite.

Many AI search products use retrieval and ranking pipelines that resemble RAG, but their exact implementations differ. It is safer to focus on the observable requirements than to optimize for a single vendor's internal architecture:

| What the system needs | What the page should provide |
| --- | --- |
| A direct answer | A clear section that answers one question without requiring surrounding context |
| Evidence to compare | Specific facts: price, materials, limits, delivery, availability and policy details |
| A trustworthy source | Consistent information across page, structured data, checkout, profiles and third-party listings |
| Something it can access | Crawlable pages, useful text, internal links and a technically healthy site |

This is why self-contained passages matter. A crawler or retrieval system may surface a specific section, not the entire page. Write headings that match real questions, then make the paragraph below them complete enough to quote without relying on marketing context elsewhere on the page.

## What has not changed: SEO is still the infrastructure

The "SEO is dead" take gets the order wrong. Traditional SEO is becoming more foundational, not less. Google explicitly says that the same SEO best practices remain relevant for AI Overviews and AI Mode: important text should be available to crawlers, structured data should match visible content, and pages must be eligible to appear in Google Search in the first place. There is no special AI-only markup that guarantees inclusion. See [Google's guidance for AI features and websites](https://developers.google.com/search/docs/appearance/ai-features).

That makes technical hygiene non-negotiable. If a page cannot be crawled, indexed, rendered, linked internally or trusted as a source, an AI experience has less opportunity to surface it. The same applies to contradictory business data. A product price that differs between the product page and cart, or a return policy that conflicts with a marketplace listing, creates uncertainty exactly where a recommendation system needs confidence.

## Five practical steps for the AI answer era

### 1. Replace claims with evidence

Audit every major landing page for vague language. Replace "best quality" with material composition, test result, warranty period, supported use case, or an independently verifiable customer outcome. Do not promise an arbitrary visibility uplift from this alone: there is no universal percentage that applies across AI systems or industries. The point is simpler: evidence is easier to retrieve, compare and cite than a slogan.

### 2. Design for extractable passages

Structure pages around the questions a buyer actually asks. Give each section a descriptive heading, define the subject in the first sentence, then state the relevant constraint or proof. A paragraph about a running shoe should say whether it suits wide feet, wet conditions or marathon distance. A paragraph about a B2B service should state scope, delivery model, implementation time and exclusions.

### 3. Treat honest negatives as product data

"Not suitable for wide feet" may feel less persuasive than a universal claim, but it is much more useful. It helps a person and an assistant rule out a bad fit, reduces avoidable returns, and makes the positive recommendation more credible for the right buyer. Good product data includes constraints, not only benefits.

### 4. Earn third-party evidence

Your site explains what you say about yourself. Reviews, expert comparisons, industry coverage, partner pages and reputable "best of" lists give an assistant independent material to cross-check. This is not a shortcut for weak content; it is the external proof that makes a recommendation easier to defend.

### 5. Run the site like a verified database

Make one source of truth for every high-intent fact: pricing, stock status, service area, support window, compatibility, delivery and returns. Then make sure the same value reaches the page, schema, checkout, feeds and business profiles. A clean content model is now a growth concern, not only an engineering preference.

## What I would ship in the next 30 days

The goal is not to add a separate set of "ChatGPT hacks." It is to make the existing business evidence accessible, consistent and easy to verify.

| Week | Ship | Proof it is done |
| --- | --- | --- |
| 1 | Baseline and technical access | Search Console and Bing Webmaster Tools are verified; crawl and indexing errors are fixed; important pages are available as text; robots and CDN rules allow relevant search crawlers. |
| 2 | Evidence-first commercial pages | The ten highest-intent pages answer real buyer questions and include specifications, constraints, pricing, delivery, returns and comparison tables where useful. |
| 3 | Consistent entity data | Product and service facts match across landing pages, structured data, checkout, feeds, Google Business Profile and trusted third-party listings. |
| 4 | Measurement and proof | Branded and non-branded search, referral traffic, conversions and cited mentions are tracked; one expert guide or comparison has been published for third parties to reference. |

Start with the pages closest to revenue, not a content sprint across the entire site. A clear product page with verified facts usually creates more value than ten generic articles about AI search.

## The real goal is justified recommendation

The move toward AI answers is not an excuse to chase a new acronym or to abandon conventional search. It is a reason to make the business legible. The winning website is not necessarily the one with the most content or the most aggressive copy. It is the one that makes a specific recommendation easy to justify with accurate, accessible and consistent evidence.

Build pages that a customer can trust without a sales call. Build the same pages so that a search engine can index them and an AI system can cite them. The click is no longer the only gate to discovery, but it remains valuable once you have earned the recommendation.`,
  },
];

export const posts: Post[] = rawPosts
  .map((post) => ({ ...post }))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
