/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff335f",
        "primary-hover": "#d02046",
        "bg-dark": "#0f172a",
        "bg-card": "#1e293b",
        "text-main": "#f8fafc",
        "text-muted": "#94a3b8",
        accent: "#38bdf8",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.5)",
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '960px',
          xl: '1024px',
          '2xl': '1024px',
        },
      },
    },
  },
  plugins: [],
};
