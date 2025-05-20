/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primaryColor: "#dbb42c",         // Warm golden - for buttons, highlights, primary CTAs

        secondaryColor: "#2c3e50",       // Deep charcoal - for headers, strong text contrast
        backgroundColor: "#f9f9f9",      // Light neutral background - to keep layout airy and clean
        cardColor: "#ffffff",            // Pure white for cards and sections
        borderColor: "#e5e7eb",          // Light gray for borders and subtle dividers

        textPrimary: "#1f2937",          // Dark gray (almost black) for main text
        textSecondary: "#6b7280",        // Medium gray for secondary or muted text
        accentColor: "#9b59b6",          // Optional: Purple tone for badges or highlights
        successColor: "#10b981",         // Green - for success messages or status
        dangerColor: "#ef4444",          // Red - for delete, error states
        warningColor: "#f59e0b",         // Orange - for warnings or alerts
      }
    },

  },
  plugins: [],
};
