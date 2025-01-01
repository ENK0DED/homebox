/* eslint-disable perfectionist/sort-objects */
import type { Preflight } from 'unocss';

import extractorMdc from '@unocss/extractor-mdc';
import { defineConfig, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss';
import presetAnimations from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

import { allColors } from './lib/colors.js';

const preflights: Preflight[] = [
  {
    getCSS: () => `
      .hide {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 0.25rem;
        margin: -0.25rem;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 0.5rem;
        white-space: nowrap;
      }

      * {
        border-color: var(--border);
      }

      body {
        background: var(--background);
        color: var(--foreground);
      }
    `,
  },
];

export default defineConfig({
  content: {
    filesystem: ['content/**/*.md'],
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '**/*.{js,ts}',
      ],
    },
  },
  extractors: [extractorMdc()],
  preflights: [
    ...preflights,
    {
      getCSS: ({ theme }) => `
        :root {
          /* --background: ${theme.colors.white};
          --foreground: ${theme.colors.slate[950]};
          --card: ${theme.colors.white};
          --card-foreground: ${theme.colors.slate[950]};
          --popover: ${theme.colors.white};
          --popover-foreground: ${theme.colors.slate[950]};
          --primary: ${theme.colors.primary[600]};
          --primary-foreground: ${theme.colors.primary[50]};
          --secondary: ${theme.colors.slate[100]};
          --secondary-foreground: ${theme.colors.slate[900]};
          --muted: ${theme.colors.slate[100]};
          --muted-foreground: ${theme.colors.slate[500]};
          --accent: ${theme.colors.slate[100]};
          --accent-foreground: ${theme.colors.slate[900]};
          --constructive: ${theme.colors.green[500]};
          --constructive-foreground: ${theme.colors.slate[50]};
          --destructive: ${theme.colors.red[500]};
          --destructive-foreground: ${theme.colors.slate[50]};
          --border: ${theme.colors.slate[200]};
          --input: ${theme.colors.slate[200]};
          --ring: ${theme.colors.slate[950]};

          --radius: 0.5rem; */

          font-family: Inter, sans-serif;
          font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
        }

        @supports (font-variation-settings: normal) {
          :root {
            font-family: InterVariable, sans-serif;
          }
        }

        /* .dark {
          --background: ${theme.colors.slate[950]};
          --foreground: ${theme.colors.slate[50]};
          --card: ${theme.colors.slate[950]};
          --card-foreground: ${theme.colors.slate[50]};
          --popover: ${theme.colors.slate[950]};
          --popover-foreground: ${theme.colors.slate[50]};
          --primary: ${theme.colors.primary[600]};
          --primary-foreground: ${theme.colors.primary[900]};
          --secondary: ${theme.colors.slate[800]};
          --secondary-foreground: ${theme.colors.slate[50]};
          --muted: ${theme.colors.slate[800]};
          --muted-foreground: ${theme.colors.slate[400]};
          --accent: ${theme.colors.slate[800]};
          --accent-foreground: ${theme.colors.slate[50]};
          --constructive: ${theme.colors.green[900]};
          --constructive-foreground: ${theme.colors.slate[50]};
          --destructive: ${theme.colors.red[900]};
          --destructive-foreground: ${theme.colors.slate[50]};
          --border: ${theme.colors.slate[800]};
          --input: ${theme.colors.slate[800]};
          --ring: ${theme.colors.slate[300]};
        } */
      `,
    },
  ],
  presets: [
    presetTypography(),
    presetWebFonts({ fonts: { serif: { name: 'DM Serif Display', weights: [400] } }, provider: 'bunny' }),
    presetUno(),
    presetAnimations(),
    presetShadcn({
      color: 'red',
      // With default setting for SolidUI, you need to set the darkSelector option.
      darkSelector: '[data-kb-theme="dark"]',
    }),
  ],
  theme: {
    colors: {
      ...allColors,
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: {
        ...allColors.primary,
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        ...allColors.secondary,
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      constructive: {
        DEFAULT: 'var(--constructive)',
        foreground: 'var(--constructive-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  transformers: [transformerDirectives({ enforce: 'pre' })],
});
