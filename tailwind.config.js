module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#f472b6",
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'glow-primary': '0 0 16px 4px rgba(59,130,246,0.5)', // Adjust color as needed
      },
    },
  },
};
