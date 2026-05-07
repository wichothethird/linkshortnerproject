# Authentication — Clerk

## Rules

- **Clerk is the only auth provider.** Never implement custom auth, NextAuth, or any other auth method.
- Package: `@clerk/nextjs` — already configured in `app/layout.tsx`.

## Route Protection

- `/dashboard` is a protected route. Users **must** be signed in to access it.
- Use Clerk's `middleware.ts` to enforce this via `clerkMiddleware` + `createRouteMatcher`.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Redirects

- Authenticated users visiting `/` must be redirected to `/dashboard`.
- Check auth state server-side (e.g. `auth()` in a Server Component) and use `redirect('/dashboard')`.

## Sign In / Sign Out UI

- Sign-in and sign-out must **always open as a modal** — never navigate to a dedicated sign-in page.
- Use Clerk's `<SignInButton mode="modal">` and `<SignOutButton>` components.
- Do **not** use `<SignIn />` or `<SignUp />` as full-page components.

```tsx
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';

<SignedOut>
  <SignInButton mode="modal">
    <button>Sign in</button>
  </SignInButton>
</SignedOut>

<SignedIn>
  <SignOutButton>
    <button>Sign out</button>
  </SignOutButton>
</SignedIn>
```
