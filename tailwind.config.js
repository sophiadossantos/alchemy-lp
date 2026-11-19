/** Tokens do Figma "Alchemy" · identidade "Só vinho" (preto frio, gelo e vinho). */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vinho: {
          100: '#F8E4E5', // derivado (só na ilustração da hero)
          200: '#F1C9CA',
          400: '#C88C8F', // derivado (só na ilustração da hero)
          500: '#B26D71',
          600: '#9E5158',
          800: '#7A1F2E',
          900: '#5E1724', // derivado (hover do botão)
        },
        neutro: {
          50: '#EEF0F3', // gelo
          100: '#D2D5D8',
          200: '#B8BBBF', // derivado
          300: '#9DA0A4',
          400: '#82858A', // derivado
          500: '#6B6E73', // derivado
          600: '#54575B',
          700: '#3E4045',
          800: '#26282D', // derivado
          900: '#15171C', // preto frio
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      // Tipografia: escala padrão do Tailwind (12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72).
      // Celular → desktop: display 36→60, h1 30→48, h2 24→36, h3 16→18, corpo 16, legenda 14/12.
      maxWidth: {
        page: '1280px',
      },
      boxShadow: {
        vidro: '0 12px 40px rgba(20, 23, 28, 0.05)',
      },
    },
  },
  plugins: [],
};
