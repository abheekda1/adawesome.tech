# abheek.dev

Personal portfolio and blog for Abheek Dhawan, built with Next.js, MDX, and Tailwind CSS.

## Development

```bash
yarn install
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Experience:** `util/getExperience.ts`
- **Projects:** `util/getProject.ts`
- **Blog posts:** add an `.mdx` file to `pages/blog/` with an exported `meta` object (title, description, author, tags, timestamp)
- **Resume:** replace `public/docs/resume.pdf`
- **Homepage intro and links:** `pages/index.tsx`
