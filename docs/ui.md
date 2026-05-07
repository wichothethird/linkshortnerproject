# UI Standards

## Rule: shadcn/ui Only

All UI elements **must** use [shadcn/ui](https://ui.shadcn.com/) components. **Do not create custom components.**

- Use components from `components/ui/` (e.g. `Button`, `Input`, `Card`, `Dialog`, `Badge`).
- If a needed component is not yet installed, add it with:
  ```bash
  npx shadcn@latest add <component-name>
  ```
- Use `lucide-react` for all icons.
- Use `cn()` from `lib/utils.ts` for conditional class merging.

## What NOT to Do

- Do **not** build custom button, input, modal, or form components from scratch.
- Do **not** write raw HTML elements styled with Tailwind as a substitute for existing shadcn/ui components.

## Example

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MyForm() {
  return (
    <form>
      <Input placeholder="Enter URL" />
      <Button type="submit">Shorten</Button>
    </form>
  );
}
```
