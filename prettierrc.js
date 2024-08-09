/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // Desactiva los puntos y comas automáticos
  trailingComma: 'all', // Añade comas al final de objetos, arrays, etc.
  singleQuote: true, // Usa comillas simples en lugar de comillas dobles
  arrowParens: 'always', // Siempre coloca paréntesis en las funciones flecha
  jsxSingleQuote: false, // Usa comillas dobles en JSX
  printWidth: 120, // Longitud máxima de línea
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
  ],
}
