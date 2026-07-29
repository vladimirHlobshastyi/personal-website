# AI Agent Project Architecture Rules

> This file defines the mandatory project structure and code-organization rules for this Next.js project.
> The goal is predictable architecture, maximum reuse, minimal duplication, and clear ownership of components, hooks, utilities, constants, types, and styles.

## 1. Core Principles

The agent MUST follow these rules before creating or moving code:

1. **Reuse before creating.**
   - Search the existing codebase before creating a new component, hook, utility, type, constant, or style definition.
   - Extend or reuse an existing implementation when it already solves the same problem.
   - Do not create duplicate components with slightly different names.

2. **Keep code at the narrowest valid scope.**
   - Used by one component only → keep it inside that component.
   - Used by several components of one route/page only → keep it inside that route.
   - Used by multiple routes/pages → promote it to a global shared folder.

3. **Do not over-globalize.**
   - Code must not be moved into global `components`, `hooks`, `utils`, `constants`, or `types` merely because it may be useful later.
   - Promote code only when reuse is real.

4. **Keep pages thin.**
   - `page.tsx` should primarily compose components and route-level logic.
   - Large UI blocks, complicated state, transformations, helpers, constants, and types should not accumulate inside `page.tsx`.

5. **Prefer composition over duplication.**
   - If two pages have similar UI or behavior, extract the common part instead of maintaining two copies.

6. **Preserve the existing architecture.**
   - Before changing folder structure, aliases, shared APIs, or architectural conventions, inspect the project first.
   - Do not introduce a second competing architecture.

---

# 2. Recommended Top-Level Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── _providers/
│   │   └── analytics-provider/
│   │       ├── analytics-provider.tsx
│   │       ├── analytics-script-tags.tsx
│   │       └── index.ts
│   │
│   ├── contact/
│   │   ├── page.tsx
│   │   ├── _components/
│   │   ├── _constants/
│   │   └── _utils/
│   │
│   └── ...
│
├── features/
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── index.ts
│   │
│   ├── ui/
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── disclaimer.tsx
│   │   ├── icon.tsx
│   │   └── index.ts
│   │
│   ├── features/
│   │   ├── contact-form.tsx
│   │   ├── project-card.tsx
│   │   ├── experience-timeline.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── hooks/
│   └── index.ts
│
├── utils/
│   └── index.ts
│
├── constants/
│   └── index.ts
│
├── types/
│   └── index.ts
│
└── ...
```

If the current project does **not** use `src/`, keep the same structure at the project root:

```text
app/
features/
components/
hooks/
utils/
constants/
types/
```

Do not introduce `src/` only for aesthetic reasons.

---

# 3. `app/` Is the Routing Layer

This project uses the **Next.js App Router**.

The `app/` directory must primarily represent routing and route composition.

Example:

```text
app/
├── page.tsx                 # /
├── contact/
│   └── page.tsx             # /contact
├── projects/
│   ├── page.tsx             # /projects
│   └── [slug]/
│       └── page.tsx         # /projects/:slug
└── about/
    └── page.tsx             # /about
```

Do not create a separate `pages/` router unless the existing project intentionally uses both routing systems.

## Important Next.js rule

In App Router, colocated files do not automatically become public routes. A route becomes publicly accessible through special route files such as `page.tsx` or `route.ts`.

However, for route-specific implementation details this project SHOULD use **private folders prefixed with `_`**.

Do not create every private folder by default. Create only the route-local folders that actually have files.

Example:

```text
app/contact/
├── page.tsx
├── _components/
└── _constants/
```

Private folders are intentionally excluded from routing and make the architectural boundary explicit.

Root app-level providers that are only mounted by `app/layout.tsx` should live in `app/_providers`.
Each non-trivial provider should use a folder with the provider implementation file and an `index.ts`
barrel.

Example:

```text
app/_providers/analytics-provider/
├── analytics-provider.tsx
├── analytics-script-tags.tsx
└── index.ts
```

Provider-adjacent utilities, script builders, constants, and transformations should not accumulate
inside the provider component. Keep them in the narrowest valid app-level folder such as
`app/_utils` or `app/_constants`.

### Use route groups only for route organization

Route groups use parentheses:

```text
app/
├── (marketing)/
│   ├── page.tsx
│   ├── about/
│   └── contact/
└── (portfolio)/
    └── projects/
```

`(marketing)` and `(portfolio)` do not appear in the URL.

Use route groups for grouping routes/layouts, **not** as a replacement for `_components`, `_utils`, etc.

---

# 4. Route-Specific Code

If code belongs only to one route, keep it inside that route.

Example:

```text
app/contact/
├── page.tsx
│
├── _components/
│   ├── contact-hero/
│   │   ├── contact-hero.tsx
│   │   ├── contact-hero.types.ts
│   │   ├── contact-hero.constants.ts
│   │   └── index.ts
│   │
│   └── contact-form-section/
│       └── contact-form-section.tsx
│
├── _hooks/
│   └── use-contact-form.ts
│
├── _utils/
│   └── format-contact-payload.ts
│
├── _constants/
│   └── contact.constants.ts
│
└── _types/
    └── contact.types.ts
```

### Rule

If `use-contact-form.ts`, `format-contact-payload.ts`, or `contact.constants.ts` is used only by `/contact`, it stays here.

Do NOT move route-specific code to global shared folders.

---

# 5. Shared Components

Global reusable components live in:

```text
components/
├── layout/
├── ui/
└── features/
```

These categories have different responsibilities.

## `components/layout`

`components/layout` contains reusable application shell components used by the root layout or by
multiple layout surfaces.

Typical layout components:

- `site-header`;
- `site-footer`;
- global navigation;
- layout-level wrappers that are not route-specific.

Layout components may know about app navigation and site-level content, but they should not contain
route-specific page sections or provider side effects.

---

# 6. `components/ui`

`components/ui` contains small, generic, reusable presentation primitives.

Examples:

```text
components/ui/
├── avatar.tsx
├── badge.tsx
├── button.tsx
├── disclaimer.tsx
├── icon.tsx
├── input.tsx
├── modal.tsx
├── section-title.tsx
└── index.ts
```

Typical UI components:

- avatar
- badge
- button
- icon
- input
- modal
- tooltip
- disclaimer
- loader
- divider
- section-title
- container

A UI component should generally:

- not know about a specific page;
- not contain portfolio-specific business/domain logic;
- be reusable in multiple unrelated places;
- receive its data through props.

Bad:

```tsx
<PortfolioContactBadge />
```

when the actual component is just a generic badge.

Better:

```tsx
<Badge>Available for work</Badge>
```

---

# 7. `components/features`

`components/features` contains **reusable domain UI only**.

This folder is not a general-purpose home for everything feature-related.

Examples:

```text
components/features/
├── contact-form.tsx
├── experience-timeline.tsx
├── project-card.tsx
├── project-gallery.tsx
├── skills-grid.tsx
└── index.ts
```

A feature component can know about the application's domain.

For example:

```tsx
<ProjectCard project={project} />
```

is a feature component because `ProjectCard` understands the portfolio's `Project` model.

A generic:

```tsx
<Card />
```

belongs in `components/ui`.

## When a shared feature grows

If a shared feature expands beyond UI into feature-owned logic such as:

- `services`;
- `validation`;
- domain `types`;
- feature-specific hooks;
- transformations or adapters;

do not keep growing `components/features`.

Promote that feature into a dedicated shared feature module:

```text
features/project-gallery/
├── components/
│   └── project-gallery.tsx
├── hooks/
├── services/
├── validation/
├── constants/
├── types/
└── index.ts
```

Use `components/features` only when the shared domain concern is primarily a reusable UI component.

---

# 8. Simple vs Complex Component Structure

## Simple component

If a component contains only:

- the component itself;
- a small props type/interface;
- straightforward rendering;

it MAY remain one `.tsx` file.

Example:

```text
components/ui/badge.tsx
```

```tsx
type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return <span>{children}</span>;
}
```

Do not create five files for a trivial component.

---

## Complex component

If a component has additional implementation details such as:

- multiple types;
- reusable props definitions;
- constants;
- utilities;
- variants;
- local hooks;
- subcomponents;
- substantial styles/configuration;

create a component folder.

Example:

```text
components/features/project-card/
├── project-card.tsx
├── project-card.types.ts
├── project-card.constants.ts
├── project-card.utils.ts
├── project-card.styles.ts
├── use-project-card.ts
└── index.ts
```

Not every file is required.

Create only files that are actually needed.

---

# 9. Component-Local Files

Anything used exclusively by one component belongs next to that component.

Example:

```text
project-card/
├── project-card.tsx
├── project-card.types.ts
├── project-card.constants.ts
├── project-card.utils.ts
├── project-card.styles.ts
└── index.ts
```

Examples:

### `project-card.types.ts`

```ts
export type ProjectCardProps = {
  title: string;
  description: string;
};
```

### `project-card.constants.ts`

```ts
export const PROJECT_CARD_IMAGE_SIZES = '(max-width: 768px) 100vw, 50vw';
```

### `project-card.utils.ts`

```ts
export const getProjectHref = (slug: string) => `/projects/${slug}`;
```

These files MUST NOT be moved to global folders while they are used only by `ProjectCard`.

---

# 10. Promotion Rule: Local → Route → Global

Use this decision hierarchy.

```text
Is this code used only by one component?
        |
       yes
        ↓
Keep it inside the component folder.
        |
       no
        ↓
Is it used only inside one route?
        |
       yes
        ↓
Keep it inside app/<route>/_hooks|_utils|_types|_constants|_components.
        |
       no
        ↓
Is it reused by multiple routes/features?
        |
       yes
        ↓
Move it to the appropriate global shared folder.
```

Examples:

```text
project-card-specific formatter
→ components/features/project-card/project-card.utils.ts

Formatter shared by several components on /projects
→ app/projects/_utils/project.utils.ts

Formatter shared by /projects, /about and /contact
→ utils/project.utils.ts
```

This rule applies equally to:

- components;
- hooks;
- utilities;
- constants;
- types;
- style definitions.

---

# 11. Global Hooks

Globally reusable hooks belong in:

```text
hooks/
```

Example:

```text
hooks/
├── use-media-query.ts
├── use-outside-click.ts
├── use-scroll-position.ts
└── index.ts
```

A hook becomes global only when it is genuinely reused across multiple routes/features.

Component-only hook:

```text
components/features/project-gallery/use-project-gallery.ts
```

Route-only hook:

```text
app/contact/_hooks/use-contact-form.ts
```

Global reusable hook:

```text
hooks/use-media-query.ts
```

---

# 12. Global Utilities

Globally reusable pure helpers belong in:

```text
utils/
```

Example:

```text
utils/
├── cn.ts
├── date.ts
├── format.ts
├── url.ts
└── index.ts
```

Utilities should preferably be:

- pure;
- framework-independent where possible;
- small and focused;
- named according to their responsibility.

Avoid giant files such as:

```text
utils/helpers.ts
utils/common.ts
utils/misc.ts
```

Prefer:

```text
utils/date.ts
utils/url.ts
utils/string.ts
```

---

# 13. Global Constants

Globally reusable constants belong in:

```text
constants/
```

Example:

```text
constants/
├── navigation.constants.ts
├── social.constants.ts
├── seo.constants.ts
└── index.ts
```

Do not put route-specific constants here.

Bad:

```text
constants/contact-form.constants.ts
```

if only `/contact` uses them.

Better:

```text
app/contact/_constants/contact-form.constants.ts
```

---

# 14. Global Types

Shared types belong in:

```text
types/
```

Example:

```text
types/
├── navigation.types.ts
├── project.types.ts
├── social.types.ts
└── index.ts
```

Do not create a single massive:

```text
types.ts
```

for the entire application.

Prefer domain-specific files.

Component props that are not reused elsewhere should remain with the component.

---

# 15. Barrel Exports / `index.ts`

Large public folders must expose a clean public API through `index.ts`.

Example:

```text
components/ui/index.ts
```

```ts
export { Avatar } from './avatar';
export { Badge } from './badge';
export { Button } from './button';
export { Icon } from './icon';
```

Feature exports:

```text
components/features/index.ts
```

```ts
export { ContactForm } from './contact-form';
export { ProjectCard } from './project-card';
export { SkillsGrid } from './skills-grid';
```

Component folder:

```text
components/features/project-card/index.ts
```

```ts
export { ProjectCard } from './project-card';
export type { ProjectCardProps } from './project-card.types';
```

Global folders should also have a public `index.ts` where that improves imports:

```text
hooks/index.ts
utils/index.ts
constants/index.ts
types/index.ts
```

Do not expose private implementation details unless another module genuinely needs them.

---

# 16. Import Rules

Prefer configured aliases instead of deep relative imports.

Preferred:

```ts
import { Badge, Button } from '@/components/ui';
import { ProjectCard } from '@/components/features';
import { useMediaQuery } from '@/hooks';
import { formatDate } from '@/utils';
import type { Project } from '@/types';
```

Avoid:

```ts
import { Button } from '../../../../components/ui/button';
```

For files inside the same component or route-local implementation, short relative imports are acceptable:

```ts
import type { ProjectCardProps } from './project-card.types';
```

Do not create circular dependencies through barrel files.

---

# 17. Tailwind CSS Rules

Tailwind CSS is the primary styling system.

## Required rules

1. Prefer Tailwind utility classes over custom CSS.
2. Do not use inline React styles unless the value must be calculated dynamically.
3. Do not duplicate large class strings across the project.
4. Reusable visual patterns must be extracted.
5. Use the project's existing `cn`, class-merging helper, CVA/variants system, or equivalent if one already exists.
6. Do not introduce a new styling dependency without a real need.

Avoid:

```tsx
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
  }}
/>
```

Prefer Tailwind:

```tsx
<div className="flex items-center rounded-xl" />
```

For substantial or repeated component styles, extract semantic class definitions.

Example:

```text
project-card/
├── project-card.tsx
└── project-card.styles.ts
```

```ts
export const projectCardStyles = {
  root: 'group relative overflow-hidden rounded-2xl border',
  content: 'flex flex-col gap-4 p-6',
  title: 'text-xl font-semibold tracking-tight',
};
```

Then:

```tsx
<div className={projectCardStyles.root}>
  <div className={projectCardStyles.content}>...</div>
</div>
```

For components with variants, prefer the project's existing variant solution rather than manually building repeated conditional class strings.

---

# 18. Server and Client Components

App Router uses Server Components by default.

The agent MUST NOT add:

```ts
'use client';
```

automatically.

Use a Client Component only when required, for example:

- `useState`;
- `useEffect`;
- browser APIs;
- event-driven client interaction;
- client-only libraries;
- custom hooks that require client React APIs.

Prefer keeping the client boundary as small as possible.

Bad:

```tsx
'use client';

export default function ProjectsPage() {
  // Entire page becomes client-side unnecessarily.
}
```

Better:

```tsx
// app/projects/page.tsx — Server Component
import { ProjectFilters } from './_components/project-filters';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectFilters />
      <ProjectsList />
    </>
  );
}
```

Only `ProjectFilters` should be a Client Component if interaction requires it.

---

# 19. `page.tsx` Responsibility

A page should describe the page composition, not contain the whole application logic.

Bad:

```text
app/contact/page.tsx
```

with:

- hundreds of lines of JSX;
- form validation;
- form constants;
- helper functions;
- several local components;
- complicated types;
- repeated Tailwind patterns.

Preferred:

```tsx
import { ContactForm } from './_components/contact-form';
import { ContactHero } from './_components/contact-hero';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
```

Keep pages readable at a glance.

---

# 20. Reuse Rules

Before implementing anything new, the agent MUST search for:

- an existing component with the same purpose;
- an existing hook with equivalent behavior;
- an existing utility;
- an existing type/model;
- an existing constant;
- an existing Tailwind pattern;
- an existing feature that can be extended.

Do not create:

```text
button.tsx
custom-button.tsx
primary-button.tsx
new-button.tsx
```

when one reusable `Button` with variants can solve the problem.

Likewise, do not duplicate:

```ts
const SOCIAL_LINKS = ...
```

on several pages.

Move genuinely shared data to the correct shared location.

---

# 21. Duplication Threshold

Use the following default rule:

### First occurrence

Keep code local.

### Second real reuse

Evaluate whether it should be promoted.

### Multiple independent consumers

Promote to a shared scope.

Do not abstract purely because two lines happen to look similar.

Abstract when the duplicated code represents the same responsibility or concept.

---

# 22. Naming Conventions

Follow the existing project naming style consistently.

## Files and folders

Use `lowercase/kebab-case` for files and folders.

Components:

```text
project-card.tsx
contact-form.tsx
experience-timeline.tsx
```

Hooks:

```text
use-media-query.ts
use-contact-form.ts
use-project-filters.ts
```

Utilities:

```text
project.utils.ts
date.utils.ts
url.utils.ts
```

Constants:

```text
project.constants.ts
navigation.constants.ts
```

Types:

```text
project.types.ts
navigation.types.ts
```

Styles:

```text
project-card.styles.ts
```

## Symbols

Use standard TypeScript/React symbol naming inside files:

- React components: `PascalCase`
- hooks: `camelCase` starting with `use`
- constants: `UPPER_SNAKE_CASE` only for true constants
- helpers, variables, functions: `camelCase`

Avoid vague names:

```text
helpers.ts
common.ts
shared.ts
stuff.ts
data.ts
temp.ts
```

unless the file genuinely represents that concept.

---

# 23. Example: Correct `contact` Architecture

```text
app/contact/
├── page.tsx
│
├── _components/
│   ├── contact-hero/
│   │   ├── contact-hero.tsx
│   │   └── index.ts
│   │
│   └── contact-form/
│       ├── contact-form.tsx
│       ├── contact-form.types.ts
│       ├── contact-form.constants.ts
│       ├── contact-form.styles.ts
│       ├── use-contact-form.ts
│       └── index.ts
│
├── _constants/
│   └── contact.constants.ts
│
├── _utils/
│   └── contact.utils.ts
│
└── _types/
    └── contact.types.ts
```

Important distinction:

`contact-form.constants.ts`

→ constants that exist only because of `ContactForm`.

`app/contact/_constants/contact.constants.ts`

→ constants shared by multiple pieces of the `/contact` route.

`constants/contact.constants.ts`

→ only valid if those constants are reused outside `/contact`.

---

# 24. Example: Correct Global Architecture

```text
components/
├── ui/
│   ├── avatar/
│   │   ├── avatar.tsx
│   │   ├── avatar.types.ts
│   │   └── index.ts
│   │
│   ├── badge.tsx
│   ├── icon.tsx
│   └── index.ts
│
├── features/
│   ├── project-card/
│   │   ├── project-card.tsx
│   │   ├── project-card.types.ts
│   │   ├── project-card.constants.ts
│   │   ├── project-card.styles.ts
│   │   └── index.ts
│   │
│   └── index.ts
│
└── index.ts

hooks/
├── use-media-query.ts
└── index.ts

utils/
├── cn.ts
├── format-date.ts
└── index.ts

constants/
├── navigation.constants.ts
└── index.ts

types/
├── project.types.ts
└── index.ts
```

---

# 25. Architecture Decision Table

| Code             | One component    | One route                 | Multiple routes                                          |
| ---------------- | ---------------- | ------------------------- | -------------------------------------------------------- |
| UI component     | component-local  | `app/<route>/_components` | `components/ui`                                          |
| Domain component | component-local  | `app/<route>/_components` | `components/features` or `features/<feature>/components` |
| Hook             | component folder | `app/<route>/_hooks`      | `hooks`                                                  |
| Utility          | component folder | `app/<route>/_utils`      | `utils`                                                  |
| Constant         | component folder | `app/<route>/_constants`  | `constants`                                              |
| Type             | component folder | `app/<route>/_types`      | `types`                                                  |
| Styles/variants  | component folder | closest owning component  | shared only if genuinely reusable                        |

This table should be used as the default decision mechanism.

---

# 26. What the Agent Must NOT Do

The agent must NOT:

- put all code into `page.tsx`;
- create duplicated components instead of reusing existing ones;
- create giant `utils.ts`, `types.ts`, or `constants.ts` dumping grounds;
- move one-off code to global shared folders prematurely;
- put route-specific code into global `components/features` without reuse;
- put domain-specific components into `components/ui`;
- create unnecessary folders for trivial one-file components;
- keep complex components as giant single files;
- use deep relative imports when an alias exists;
- add `'use client'` to a page or layout without a technical reason;
- create inline React styles when Tailwind can express the style;
- repeat long Tailwind class strings instead of extracting reusable patterns;
- introduce new libraries when the project already contains a suitable solution;
- create a `pages/` router accidentally in an App Router project;
- change route structure merely to organize implementation files;
- create a new abstraction without checking the existing codebase first.

---

# 27. Agent Workflow Before Every Implementation

Before writing code, perform this sequence:

1. Inspect the relevant route.
2. Inspect existing `components/ui`.
3. Inspect existing `components/features`.
4. Search existing hooks, utils, constants, and types.
5. Identify whether the new code is:
   - component-local;
   - route-local;
   - globally shared UI;
   - globally shared feature module.
6. Choose the narrowest correct location.
7. Reuse existing code where possible.
8. Implement the smallest necessary change.
9. Extract complexity only when justified.
10. Verify imports and public exports.
11. Check for accidental duplication.
12. Check whether `'use client'` is truly required.
13. Check that Tailwind/styles follow existing project conventions.
14. Run the project's existing lint/typecheck/tests/build commands when appropriate.

---

# 28. Agent Workflow When Refactoring Existing Code

When refactoring:

1. Do not rewrite working code without a reason.
2. Preserve behavior unless a behavior change is explicitly requested.
3. Identify duplicated concepts before extracting them.
4. Move code in small logical units.
5. Update all imports after moving files.
6. Preserve server/client boundaries.
7. Do not turn route-local code into global code unnecessarily.
8. Remove obsolete files after migration.
9. Avoid leaving compatibility wrappers unless they are required.
10. Run validation after refactoring.

---

# 29. Preferred Architectural Mental Model

Think in ownership layers:

```text
GLOBAL
│
├── components/ui
│   └── generic reusable UI
│
├── components/features
│   └── reusable domain-specific UI
│
├── features/<feature>
│   └── shared feature modules with their own components/services/validation/types
│
├── hooks / utils / constants / types
│   └── reusable logic/data/contracts
│
└── app
    └── routing
        │
        └── route
            ├── page.tsx
            ├── _components
            ├── _hooks
            ├── _utils
            ├── _constants
            └── _types
                │
                └── component
                    ├── component.tsx
                    ├── component.types.ts
                    ├── component.constants.ts
                    ├── component.utils.ts
                    └── component.styles.ts
```

The closer code is to its only consumer, the better.

Promote it upward only when its reuse scope expands.

---

# 30. Final Rule

When there are several technically valid locations for new code, choose according to this priority:

```text
component-local
    ↓
route-local
    ↓
feature/shared
    ↓
global
```

**Do not start global.**

The architecture should grow from local ownership toward shared abstractions only when actual reuse requires it.

---

# Next.js Basis

This structure intentionally follows current App Router capabilities:

- `app` uses file-system routing.
- A route becomes publicly accessible through route files such as `page.tsx` / `route.ts`.
- Non-route files can safely be colocated inside route segments.
- `_folder` is a Next.js private-folder convention that opts the folder out of routing.
- `(group)` is a route-group convention for organizing routes without adding the group name to the URL.
- Next.js does not prescribe one universal project organization, so this document defines the project's stricter conventions on top of the framework.

Official reference:
https://nextjs.org/docs/app/getting-started/project-structure
