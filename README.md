# 📔 Turborepo + Shadcn UI + TailwindCSS v4 + Next.js Boilerplate

A latest, fully configured boilerplate for building applications with Turborepo, Shadcn UI, TailwindCSS v4, and Next.js.

## Overview

I created this setup to share after completing the migration process from TailwindCSS v3 to v4 in a monorepo structure, as I found it difficult to find documentation on this. It offers a ready-to-use configuration with Turborepo, TailwindCSS v4, Shadcn UI, and Next.js.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/bytaesu/turborepo-shadcn-tailwind-v4.git

# Install dependencies
pnpm install

# Run the development server
turbo dev --filter nextjs
```

OR

Use this button:

[<img width="170" alt="img" src="https://github.com/user-attachments/assets/41c60816-2cd9-4f1f-946d-e29bb6fb15e9" />](https://github.com/new?template_name=turborepo-shadcn-tailwind-v4&template_owner=bytaesu)

## Boilerplate Structure

```
.
├── apps
│   └── nextjs                # Next.js application
│       ├── src
│       │   ├── app
│       │   │   └── globals.css # Critical configuration here
│       │   └── ...
│       └── ...
├── packages
│   ├── eslint-config         # ESLint configuration
│   ├── typescript-config     # TypeScript configuration
│   ├── ui                    # Internal UI package (including shadcn)
│       ├── src
│           ├── components    # components
│           ├── hooks         # hooks
│           ├── lib           # lib
│           ├── styles        # CSS and styling files
│           └── components.json  # Shadcn cli configuration
│       └── ...
│   └── ...
└── ...
```

## Critical Configuration

[> Tailwind CSS docs](https://tailwindcss.com/docs/detecting-classes-in-source-files)

The most important part of this setup is the `/src/app/globals.css` file in the Next.js application. Proper configuration of the `@source` directive is essential for the UI package to work correctly:

```css
@import 'tailwindcss';
@import '@neuva-health/ui/styles/default.css';

@source '../../../../packages/ui';
```

## License

MIT
