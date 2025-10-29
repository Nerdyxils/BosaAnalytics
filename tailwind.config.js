/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './styles/**/*.{css}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#095786',
        accent: '#863809',
        body: '#222222'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};


