import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  markdown: {
    render: ['@astrojs/markdown-remark', {
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'nord',
        langs: ['js', 'html', 'css', 'astro'],
        wrap: false
      }
    }]
  },
  integrations: [tailwind(), image(), solidJs()]
});