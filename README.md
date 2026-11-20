# AISR Frontend

Marketing site for AISR. The contact form opens the visitor's email client with `mailto:`. It does not send the message itself.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Layout

```text
src/
  main.tsx                 Vite entry
  app/                     routing and route layouts
  features/marketing/      marketing pages, sections, and images
  shared/                  reusable components, hooks, and branding
    assets/logo/           AISR mark
```

`src/app` composes features. Features may use `shared`. Shared code does not import `app` or feature code.
