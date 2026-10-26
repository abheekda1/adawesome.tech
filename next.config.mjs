import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Plugins are referenced by name so they work with Turbopack.
    remarkPlugins: [],
    rehypePlugins: [['rehype-slug'], ['@mapbox/rehype-prism']],
  },
});

export default withMDX(nextConfig);
