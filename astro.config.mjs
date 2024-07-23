import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Saras',
		
			sidebar: [
				{
					label: 'Laravel',
					autogenerate: { directory: 'laravel' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind(),
		mdx(),
		sitemap(),
	  ],
	  output: "server",
	  adapter: vercel()
	
});

