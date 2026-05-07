# Coding Standards — Link Shortener Project

> These are mandatory standards for every code change in this project.
> Follow all rules without exception unless the user explicitly overrides one.
> **Before making ANY code change, Copilot MUST read and follow every relevant instruction file in the `/docs` directory.**
> For detailed guidelines on specific topics, refer to the modular documentation in the `/docs` directory.

## Stack at a Glance

- **Framework**: Next.js 16, App Router only — no Pages Router
- **Language**: TypeScript (strict mode, no `any`)
- **Styling**: Tailwind CSS v4 utility classes + `cn()` for conditionals
- **UI**: shadcn/ui components from `components/ui/` + `lucide-react` icons
- **Auth**: Clerk (`@clerk/nextjs`) — already configured in `app/layout.tsx`
- **Database**: Drizzle ORM → Neon (serverless PostgreSQL)
- **Env secrets**: `.env.local` only, never committed

---

## Modular Documentation

For detailed guidelines on specific topics, refer to the `/docs` directory:
ALWAYS refer to the relevant .md file BEFORE generating any code:

| Topic | File |
|-------|------|
| Authentication | [`/docs/auth.md`](/docs/auth.md) |
| UI Standards | [`/docs/ui.md`](/docs/ui.md) |

---



## Development Commands

```bash
npm run dev                  # Start dev server — http://localhost:3000
npm run build                # Production build
npm run lint                 # ESLint
npx drizzle-kit generate     # Generate SQL migrations from schema
npx drizzle-kit migrate      # Apply migrations to Neon DB
npx drizzle-kit studio       # Open Drizzle Studio GUI
```
