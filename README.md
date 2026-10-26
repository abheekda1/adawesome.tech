# abheek.dev

Personal portfolio and blog for Abheek Dhawan, built with Next.js, MDX, and Tailwind CSS.

## Development

```bash
bun install
bun dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Experience:** `util/getExperience.ts`
- **Research:** `util/getResearch.ts` (images in `public/img/research/`)
- **Projects:** `util/getProject.ts` (images in `public/img/projects/`)
- **Blog posts:** add an `.mdx` file to `pages/blog/` with an exported `meta` object (title, description, author, tags, timestamp)
- **Resume:** replace `public/docs/resume.pdf`
- **Homepage intro, links, leadership and awards:** `pages/index.tsx`
