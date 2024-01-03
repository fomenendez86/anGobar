
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue_gb': '#14ade5',
        'orange_gb': '#f28f3b',
        'green_gb': '#aec743',
        'purple_gb': '#7f61a7',
        'red_gb': '#e63b8d',
      },
      fontFamily: {
          'good-mood': ['Mood'],
          'roundy-rainbows': ['Roundy Rainbows'],
          'roundy-rainbows-italic': ['Roundy Italic'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
