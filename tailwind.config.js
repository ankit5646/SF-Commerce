/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*html'
  ],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },

        "slider" : {
          form:{transform: "translateX(0)"},
          to:{transform: "translateX(-100%)"}
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        "slider": "slider 20s linear infinite",
      },
      borderRadius: {
        'custom-1': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'custom-2': '30% 60% 70% 40% / 50% 60% 30% 60%',
      },
    },
  },
  plugins: [],
}

