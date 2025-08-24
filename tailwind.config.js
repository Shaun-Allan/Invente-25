/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Existing custom fonts
        sancreek: ["var(--font-sancreek)"],
        baskerville: ["var(--font-baskerville)"],
        
        // Fonts from RootLayout
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
        "dm-sans": ["var(--font-dm-sans)"],
        "instrument-serif": ["var(--font-instrument-serif)"],
        "playfair-display": ["var(--font-playfair-display)"],
        "poppins": ["var(--font-poppins)"], // ✅ Added
      },
    },
  },
  plugins: [],
};
