/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Ajuste os caminhos conforme necessário
    ],
    theme: {
      extend: {
        screens: {
          xs: "340px", // Define o breakpoint "xs" para telas com largura mínima de 340px
        },
      },
    },
    plugins: [],
  };