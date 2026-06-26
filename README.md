# Vladimir Hlobchastyi Portfolio

Portfolio site built with Next.js, TypeScript and Tailwind CSS.

## Overview

This repository contains a personal portfolio focused on commercial web and mobile case studies.
Client and product names are intentionally anonymized in the content layer, while screenshots are
stored locally in `public/images`.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Prettier
- ESLint

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run format
npm run format:check
npm run generate:covers
```

## Project Structure

- `src/app` — App Router pages, metadata and route-level JSON-LD
- `src/features/home` — homepage sections and local constants
- `src/features/project` — project data, project page helpers and case-study components
- `src/features/work` — work archive grid
- `src/components/ui` — reusable UI primitives
- `src/layout` — header, footer and shared shell pieces
- `src/config` — site-level config and contact data
- `src/lib` — small shared utilities
- `public/images` — local project visuals and profile photo
- `scripts` — asset generation and migration helpers

## Content Notes

- Project titles are category-based replacements for confidential client names.
- Project screenshots are anonymized before being published.
- Case-study ordering is defined in `src/features/project/projects.data.ts`.

## Environment

Set `NEXT_PUBLIC_SITE_URL` in production to the real deployed domain. If it is not set, the
project falls back to `https://vladimirh.dev`.

For analytics and verification, copy `.env.example` and set:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
