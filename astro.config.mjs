// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // Utilise le rendu côté serveur (SSR) pour toutes les pages par défaut, générant toujours un site rendu par le serveur.
  // https://docs.astro.build/fr/reference/configuration-reference/#output
  output: "server",
  // Ajout du plugin pour tailwind
  vite: {
    plugins: [tailwindcss()],
  },
  // Utilisation de l'adaptateur Netlify pour le déploiement
  // https://docs.astro.build/fr/guides/integrations-guide/netlify/
  adapter: netlify(),
  // Pour que les images de Pocketbase s'affichent bien une fois le site hébergé sur Netlify
  // https://docs.astro.build/fr/guides/integrations-guide/netlify/#support-du-cdn-dimages-netlify
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pockethost.io",
      },
    ],
  },
});
