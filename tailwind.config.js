/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Override default container
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      // === Colors (match our CSS variables) ===
      colors: {
        primary: "#ff335f",
        "primary-hover": "#d02046",
        "bg-dark": "#0f172a",
        "bg-card": "#1e293b",
        "text-main": "#f8fafc",
        "text-muted": "#94a3b8",
        accent: "#38bdf8",
      },

      // === Typography ===
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },

      // === Shadows ===
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        primary: "0 0 15px rgba(255, 51, 95, 0.5)",
        "primary-lg": "0 0 25px rgba(255, 51, 95, 0.7)",
      },

      // === Border Radius ===
      borderRadius: {
        card: "12px",
      },

      // === Keyframes ===
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },

      // === Spacing ===
      maxWidth: {
        container: '1200px',
      },

      // === Transition ===
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};
