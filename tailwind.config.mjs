/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sancreek: ["var(--font-sancreek)"],
        baskerville: ["var(--font-baskerville)"],
      },
    },
  },
};
