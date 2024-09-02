import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless"; // Adaptador para despliegue en Vercel

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://www.iratxeconde.es',
  build: {
    inlineStylesheets: "always", // Incluye estilos CSS en línea
  },
  compressHTML: true, // Comprime HTML para mejor rendimiento
  devToolbar: {
    enabled: false, // Desactiva la barra de herramientas de desarrollo
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true, // Habilita la analítica web para Vercel
    },
  }),
  vite: {
    build: {
      cssMinify: "lightningcss", // Usar lightningcss para minificación de CSS
    },
    ssr: {
      noExternal: ["path-to-regexp"], // Evita la externalización de módulos específicos
    },
  },
});
