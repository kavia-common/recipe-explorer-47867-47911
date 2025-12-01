# Recipe Explorer (Next.js)

A modern, responsive recipe browser with search, filters, and detail views. Uses Next.js App Router and mock API routes under `/api`.

## Getting Started

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Features
- Ocean Professional theme (primary: #2563EB, secondary/success: #F59E0B, error: #EF4444, background: #f9fafb, surface: #ffffff, text: #111827)
- Home page with search, cuisine and max cook time filters
- Responsive grid (1/2/3/4 columns across breakpoints)
- Recipe details page `/recipes/[id]` with ingredients and steps
- Mock API:
  - `GET /api/recipes?q=&cuisine=&time=`
  - `GET /api/recipes/:id`

## Environment Variables
- NEXT_PUBLIC_API_BASE (optional): If set, API calls will use this as base. If empty/undefined, falls back to relative `/api`.
- NEXT_PUBLIC_FRONTEND_URL (optional): For future use in links/sharing.

No new env vars are required.

## Code Structure
- `src/app/layout.tsx` – Shared layout with Navbar and Footer
- `src/app/page.tsx` – Home page (search and grid)
- `src/app/about/page.tsx` – About page
- `src/app/recipes/[id]/page.tsx` – Recipe details route
- `src/app/api/recipes` – API routes for list and details
- `src/components` – UI components (Navbar, Footer, SearchBar, RecipeCard, RecipeGrid, RecipeDetails)
- `src/hooks/useRecipes.ts` – Data fetching hook with loading/error states
- `src/lib/mockData.ts` – Local mock recipe data and filters
- `src/styles/theme.ts` – Theme tokens and API base helper

## Notes
- Works fully offline with mock data.
- Styling uses Tailwind CSS v4 via `@tailwindcss/postcss`. No extra setup required.
