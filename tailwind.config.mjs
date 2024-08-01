/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  background: '#ffffff', // Color de fondo Blanco
		  backgroundLowContrast: '#e6e6e6', // Color de fondo bajo contraste Gris Claro
		  foreground: '#303030', // Color de primer plano (Negro)
		  foregroundLowContrast: '#494949', // Color de primer plano bajo contraste
		  foregroundHighContrast: '#161616', // Color de primer plano alto contraste
		  primary: '#876c9d', // Color primario
		  primaryHover: '#b39bcb', // Color primario en hover
		  primaryDark: '#6f5a83', // Color primario oscuro
		  secondary: '#ffb302', // Color secundario
		  secondaryHover: '#ffe033', // Color secundario en hover (brillante)
		  border: '#c5c5c5', // Color de borde
		  borderLowContrast: '#dedede', // Color de borde bajo contraste
		  borderHighContrast: '#acacac', // Color de borde alto contraste
		},
	  },
	},
	safelist: [
	  'grid-cols-1',
	  'grid-cols-2',
	  'grid-cols-3',
	  'grid-cols-4',
	  'grid-cols-5',
	  'grid-cols-6',
	  'grid-cols-7',
	  'grid-cols-8',
	  'grid-cols-9',
	  'grid-cols-10',
	  // Añadir más si es necesario
	],
	plugins: [],
  }
  