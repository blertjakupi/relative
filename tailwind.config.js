// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Neutrals
        "surface": "#fafafa",
        "surface-container-low": "#f5f5f5",
        "surface-container": "#eeeeee",
        "surface-container-high": "#e5e5e5",
        "surface-container-lowest": "#ffffff",
        "background": "#f8f8f8",

        // Primary (dark navy)
        "primary": "#1a2a3a",
        "primary-fixed": "#e8edf2",
        "primary-fixed-dim": "#d0d9e3",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#0a1a2a",
        "on-primary-fixed-variant": "#2a3a4a",
        "primary-container": "#2a3a4a",
        "surface-tint": "#1a2a3a",

        // Secondary (green — fixed)
        "secondary": "#2e7d32",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#e8f5e9",
        "secondary-fixed-dim": "#c8e6c9",
        "on-secondary-fixed": "#1b5e20",
        "on-secondary-fixed-variant": "#1b5e20",

        // Success (same as secondary, explicit)
        "success": "#2e7d32",
        "on-success": "#ffffff",

        // Error (red)
        "error": "#b53b3b",
        "on-error": "#ffffff",
        "error-container": "#f5d0d0",
        "on-error-container": "#5a1a1a",

        // Text colors
        "on-background": "#1a1a1a",
        "on-surface": "#1a1a1a",
        "on-surface-variant": "#5a5a5a",
        "outline": "#b0b0b0",
        "outline-variant": "#d0d0d0",
        "inverse-surface": "#2a2a2a",
        "inverse-on-surface": "#f0f0f0",
        "inverse-primary": "#b0c0d0",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "16px",
        "touch-target-min": "48px",
        unit: "8px",
        "container-padding": "24px",
      },
      fontFamily: {
        "headline-md": ["Fira Sans", "sans-serif"],
        "headline-lg-mobile": ["Fira Sans", "sans-serif"],
        "headline-lg": ["Fira Sans", "sans-serif"],
        interactive: ["Fira Sans", "sans-serif"],
        "body-lg": ["Fira Sans", "sans-serif"],
        "label-caps": ["Fira Sans", "sans-serif"],
        "body-md": ["Fira Sans", "sans-serif"],
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", letterSpacing: "0.01em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "700" }],
        interactive: ["16px", { lineHeight: "1", letterSpacing: "0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "500" }],
        "label-caps": ["14px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "500" }],
      },
      boxShadow: {
        "ambient-level-1": "0px 20px 40px rgba(59,130,246,0.08)",
        "ambient-level-2": "0px 30px 50px rgba(59,130,246,0.12)",
      },
    },
  },
  plugins: [],
};