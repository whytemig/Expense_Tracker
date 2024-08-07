/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/images/pennies-bg.jpg')",
        login: "url(/images/counting.jpg)",
      },
    },
  },
  plugins: [],
};
