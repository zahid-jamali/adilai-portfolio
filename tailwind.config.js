/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f0f4f9",
        accent: "#72d2bb",
        action: "#4b7fcd",
        secondary: "#405782",
        ink: "#2d2d38",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(45, 45, 56, 0.08)",
        card: "0 18px 45px rgba(75, 127, 205, 0.14)",
        glow: "0 30px 90px rgba(114, 210, 187, 0.22)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(114,210,187,0.36), transparent 32%), radial-gradient(circle at right, rgba(75,127,205,0.26), transparent 28%), linear-gradient(135deg, #f0f4f9 0%, #e6f4f0 52%, #eef3ff 100%)",
        "mesh-gradient":
          "linear-gradient(135deg, rgba(75,127,205,0.08) 0%, rgba(114,210,187,0.12) 50%, rgba(255,255,255,0.92) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
