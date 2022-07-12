import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['localhost'],
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, rehypePrism, rehypeImgSize],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig);

