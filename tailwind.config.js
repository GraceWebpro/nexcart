/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F8FAFC",
          secondary: "#F1F5F9",
          card: "#FFFFFF",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
        },
        primary: {
          DEFAULT: "#060917",
          hover: "#1E40AF",
          light: "#DBEAFE",
        },
        border: {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        card: "0 8px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem"
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lgx: '992px',   // 👈 NEW BREAKPOINT
      lg: '1024px',
      xl: '1280px',
    },
    keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-12px)" },
    },
  },
  animation: {
    float: "float 6s ease-in-out infinite",
  },
   
  },
  plugins: [],
};

