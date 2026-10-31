# Portfolio redesign plan

## Purpose

Make this site a clear, credible personal portfolio that helps product teams and clients quickly understand Vladimir's experience, see relevant evidence, and start a conversation. The site should demonstrate care for interfaces through its own clarity, hierarchy, and finish.

The site is a professional introduction, not a catalogue of every technology or a second technical résumé. Detailed technical information belongs in relevant project case studies and on the About page.

## Audience and positioning

Primary audience: product teams and clients looking for an experienced software engineer to build or improve a web or mobile product.

Positioning: **Senior Software Engineer focused on web and mobile products, with a strong frontend core and the ability to carry features through APIs, integrations, and production delivery.**

The site must describe engineering and product implementation accurately. It must not imply that Vladimir offers UX research or visual design as a separate service unless that is confirmed. Project outcomes and metrics must be factual; do not invent numbers or claim sole ownership of team results.

## Visitor questions

The main pages should answer these questions in order:

1. Who is Vladimir and what kind of work does he do?
2. Is there relevant experience with products like mine?
3. What did he personally contribute?
4. What is it like to work with him?
5. How do I contact him?

Use clear headings, concise copy, useful project imagery, and one obvious next action. Do not make a fixed reading pattern or a single-screen page-length target a design requirement.

## Content and information architecture

### Home

1. Compact introduction: name, clear role/value statement, short proof of experience, project and contact actions, and a supporting portrait.
2. Selected work immediately after the introduction: three distinct, credible projects with readable imagery, product category, Vladimir's contribution, and a case-study link.
3. A concise explanation of the work Vladimir can own, without repeating the same service cards elsewhere.
4. A short personal/work-style introduction linking to About.
5. A clear contact action.

### Work index

Lead with the projects. Keep the introduction short; move broad technology explanations out of the way. Use consistent cards that explain the product and Vladimir's contribution without clipped copy or repeated calls to action. Keep a concise confidentiality note where it helps set expectations.

### Project case studies

Use a consistent story: product and context; role and scope; challenge; work delivered; evidence or outcome; selected imagery; technologies. Avoid repeating the same ownership text in several sections. Clearly identify anonymized or reconstructed visuals. Separate personal contribution from team outcomes.

### About

Explain relevant experience, working approach, and technical range once. Keep the primary expertise easy to identify; group supporting technologies and keep exhaustive lists secondary. Avoid repeating the Home page and Work index copy verbatim.

### Contact

Make email and Telegram easy to find. Keep availability, location/time-zone fit, and response expectations only when accurate. Remove service summaries already covered elsewhere.

### Blog

Keep articles easy to scan and visually consistent with the portfolio. The blog supports credibility but should not compete with the portfolio's primary path to Work and Contact.

## Visual direction

- Preserve the calm, personal character and the existing warm neutral palette as a starting point; validate any palette change against real page screenshots and contrast.
- Reduce oversized headings where they force excessive line breaks or push key actions and work out of view.
- Establish one clear hierarchy: one leading message, quieter section headings, readable body copy, and restrained labels.
- Use borders and cards selectively. Do not turn every text block into a panel.
- Keep project imagery large and legible. Do not place portfolio copy over busy UI screenshots when it competes with the product itself.
- Use one primary filled button and a clear secondary link/action in each decision point. Remove duplicate links that lead to the same destination.
- Keep the header useful while reducing its visual and vertical weight; preserve visible keyboard focus.
- Treat desktop and mobile as separate compositions with the same content priority. Check text order, image height, navigation, tap targets, and contrast at narrow widths.
- Motion and decoration should remain subtle and must not delay or obscure content.

## Content rules

- Lead with the visitor's problem and the product work, then use technology as supporting evidence.
- Prefer plain language and specific contributions over broad claims such as “seamless,” “world-class,” or “highly scalable.”
- Keep the Home introduction short; reserve detailed scope and full stacks for case studies.
- Mention a technology only where it helps a target client or technical reviewer assess fit.
- Use the same fact consistently across pages. Verify experience, role, availability, project permissions, and any outcome claims before publishing.
- Explain confidentiality once in a concise, visible way. Never present reconstructed screens as original product screenshots.

## Positioning refinement from product review

The strongest differentiator is not the size of the technology list. It is the ability to understand a product's rules and user flows, make sound implementation decisions in a complex codebase, and carry a feature through release.

- State the working sequence plainly: understand the product and business rules, clarify the flow and edge cases, then implement and support release.
- Present AI as a practical tool for product work and codebase recovery. Keep the emphasis on judgment, verification, and ownership rather than the novelty of AI.
- Use case studies to prove product thinking: what users or the business needed, what constraints mattered, what decision Vladimir made, what he personally delivered, and what changed. Use real outcomes where they can be verified; otherwise describe the concrete delivery result without invented metrics.
- Make complex-context ownership tangible through one or two examples of connected areas (such as roles and tenant boundaries, payments and subscription states, or web/mobile behavior), rather than broad claims about handling complexity.
- Keep the visual identity personal and calm. The portrait should be a meaningful part of the introduction, with the name and role visible on it, as in the earlier layout.

## Next visual review

- Preserve the warm neutral direction unless page-level comparison shows a concrete readability or brand problem.
- Check every muted label and secondary text color in both themes. The current dark-theme `--quiet` color is about 4.13:1 against the page background, below the WCAG AA 4.5:1 target for normal text; choose the final token against the actual surface it appears on.
- Review button hierarchy, hit areas, focus indication, hover states, and corner radius as one coherent system. Keep the primary action visually distinct and avoid making every card or control look like the same box.
- Capture desktop and mobile pages in both themes before settling the palette or visual finish.

## Implementation phases

### Implemented in this pass

- Home now opens with a shorter role and value statement, two actions, and a supporting portrait; the long skills catalogue is removed from the first screen.
- Selected work follows the introduction and presents three projects in consistent cards. The logistics card now uses a product interface visual instead of an article screenshot.
- Home capability copy is reduced to three distinct offers, with repeated capability cards removed.
- Work index leads with projects; cards no longer show clipped one-line copy, technology tags, or two links to the same case study.
- Case studies state role and scope once, then explain the product context, challenge, outcome, responsibilities, and technologies.
- About separates fit, expertise, working style, and technology; repeated ownership copy and long capability-card details have been reduced.
- Contact focuses on the contact channels and removes repeated service, availability, and working-style panels.
- Footer has one prominent email action and quieter supporting links. Blog and work headings are reduced to match the rest of the hierarchy.
- Light-theme muted labels, accent text, and inactive navigation links have stronger contrast while keeping the warm palette.

The broader image set still needs a final editorial review. Desktop and mobile browser rendering have not yet been captured after these changes.

## Search and AI discovery

- Use clear page titles, descriptions, canonical URLs, crawlable internal links, a sitemap, and factual structured data. Keep the same role, experience, contact details, and project claims consistent between page copy and metadata.
- Describe Vladimir as an individual engineer. Do not mark a personal portfolio as a separate service company or describe anonymized case studies as software products available to install.
- Do not rely on meta-keyword lists or AI-specific ranking files. `public/llms.txt` is kept as a short optional summary for systems that choose to read it; it is not a Google indexing or ranking requirement.
- Search and AI visibility cannot be guaranteed by markup. After deployment, verify the domain in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, inspect important URLs, and review indexing/crawl reports. Keep crawler access open at both robots.txt and hosting/CDN layers.
- Add third-party references and first-hand case evidence over time. These establish trust more meaningfully than adding more technology names or schema fields.


### Phase 1 — Home page hierarchy and duplication

- Rewrite the Home introduction around role, value, experience, and two clear actions.
- Remove the long technology catalogue from the first screen.
- Place selected work directly after the introduction.
- Remove repeated service/about cards and retain only distinct, useful information.
- Improve selected-project summaries and ensure images support the claims.

### Phase 2 — Work index and case-study storytelling

- Put projects before broad capability/stack descriptions on the Work index.
- Simplify project cards and remove duplicate actions and clipped summaries.
- Reorder case-study information so product, role, work, and outcome are understood before the full stack.
- Remove repeated ownership copy and clarify anonymized/reconstructed material.
- Review similar projects for meaningful differences and factual accuracy.

### Phase 3 — About, Contact, and Blog

- Give About, Contact, and Blog distinct purposes and remove repeated sales copy.
- Keep technical detail available without making it the main narrative.
- Make contact actions and availability information clear and accurate.

### Phase 4 — Site-wide visual refinement

- Tune typography, spacing, colors, borders, cards, buttons, navigation, and footer based on the new content hierarchy.
- Review desktop and mobile page compositions, focus states, and color contrast.
- Refine or replace project imagery only with material that is permitted and represented honestly.

## Definition of done

- A first-time visitor can quickly identify Vladimir's role, primary expertise, relevant experience, selected work, and contact path.
- The Home page presents work before secondary detail and does not repeat whole capability lists.
- Each page answers a distinct visitor question and does not repeat large blocks of copy from another page.
- Project cards and case studies make Vladimir's individual contribution clear and use readable, accurately described imagery.
- Visual hierarchy is calm and consistent; buttons and links have distinct purposes; cards, borders, and large headings are used with restraint.
- Desktop and mobile layouts preserve the same priority and remain readable and navigable.
- No unsupported metrics, project claims, or service promises are introduced.

## Review checkpoints

Work through the phases in order and keep changes reviewable. At each checkpoint, assess the result against the visitor questions and definition of done. Resolve factual uncertainty from existing project information; where a claim cannot be verified, keep it general or omit it.
