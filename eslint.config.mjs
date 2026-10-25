import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import unusedImports from 'eslint-plugin-unused-imports';

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: { 'unused-imports': unusedImports },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default config;
