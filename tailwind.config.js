module.exports = {
  content: [
    "./src/views/**/*.ejs", // Adjust the path if necessary
    "./public/**/*.html", // If you have HTML files in the public folder
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "skeleton-light": "#E0E0E0", // Light mode skeleton background
        "skeleton-dark": "#4A5568", // Dark mode skeleton background
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        status: {
          pending: {
            DEFAULT: "hsl(40, 90%, 50%)", // Amber
            foreground: "black",
          },
          processing: {
            DEFAULT: "hsl(220, 90%, 50%)", // Blue
            foreground: "white",
          },
          shipped: {
            DEFAULT: "hsl(190, 90%, 50%)", // Cyan
            foreground: "black",
          },
          delivered: {
            DEFAULT: "hsl(120, 70%, 40%)", // Green
            foreground: "white",
          },
          cancelled: {
            DEFAULT: "hsl(0, 80%, 50%)", // Red
            foreground: "white",
          },
          completed: {
            DEFAULT: "hsl(120, 70%, 40%)", // Green
            foreground: "white",
          },
          failed: {
            DEFAULT: "hsl(0, 80%, 50%)", // Red
            foreground: "white",
          },
          refunded: {
            DEFAULT: "hsl(300, 70%, 50%)", // Purple
            foreground: "white",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "skeleton-shimmer": "shimmer 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};