import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

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
  
});
