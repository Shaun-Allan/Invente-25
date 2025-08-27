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
        sancreek: ["var(--font-sancreek)"],
        baskerville: ["var(--font-baskerville)"],
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
        "dm-sans": ["var(--font-dm-sans)"],
        "instrument-serif": ["var(--font-instrument-serif)"],
        "playfair-display": ["var(--font-playfair-display)"],
        poppins: ["var(--font-poppins)"],
        orbitron: ["var(--font-orbitron)"],
        michroma: ["var(--font-michroma)"],
        exo2: ["var(--font-exo2)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
        "rubik-glitch": ["var(--font-rubik-glitch)"],
        parisienne: ["var(--font-parisienne)"], // ✅ Added
      },
    },

  },
  plugins: [],
};
