# Wayfinder — Travel Destination Explorer

A responsive travel explorer built with Next.js App Router, TypeScript, and local dummy data.

## Features
- Destination catalog and region filters
- Dynamic destination details at `/destinations/[slug]`
- Geographic region directory at `/regions`
- Optional catch-all nested route `/regions/[[...slug]]`
- Trip planner at `/planner/overview`
- Custom 404, loading, and error states
- Responsive reusable components

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Validate
```bash
npm run lint
npm run build
```

## Routes
- `/destinations`
- `/destinations/[slug]`
- `/regions`
- `/regions/[[...slug]]`
- `/planner/overview`
- `/about`

Data is in `data/catalog.ts`. Destination images load from Unsplash URLs and require an internet connection.
