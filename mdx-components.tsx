import type { MDXComponents } from 'mdx/types';
import Header from './components/mdx/header';
import Subheading from './components/mdx/subheading';
import Blockquote from './components/mdx/blockquote';
import DropdownImage from './components/mdx/dropdownImage';
import Pre from './components/mdx/pre';

// Custom renderers used by every blog post.
const components: MDXComponents = {
  h1: (props) => <Header {...props} />,
  h2: (props) => <Subheading {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  img: (props) => <DropdownImage {...props} />,
  pre: (props) => <Pre {...props} />,
};

export function useMDXComponents(overrides: MDXComponents = {}): MDXComponents {
  return { ...components, ...overrides };
}
