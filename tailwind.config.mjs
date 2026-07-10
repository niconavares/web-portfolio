/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta blanco y negro (editorial) + un único acento frío muy discreto.
        ink: '#0A0A0C',        // Fondo principal (negro)
        'ink-b': '#121317',    // Fondo inferior (degradado sutil)
        line: '#26282E',       // Estructura: líneas, bordes
        wordmark: '#1C1E24',   // Nombre gigante detrás del retrato (gris muy oscuro)
        paper: '#EDEEF2',      // Texto principal (blanco roto)
        muted: '#878B95',      // Texto secundario, metadatos
        steel: '#93A0B5',      // Acento frío mínimo: enlaces, hover, foco
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Geist"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1080px',
      },
    },
  },
  plugins: [],
};
