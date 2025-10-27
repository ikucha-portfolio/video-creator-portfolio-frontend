/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7FB3D5",     // メインの水色
        accent: "#A8D8EA",      // アクセントの薄い水色
        background: "#FFFFFF",  // 背景
        text: "#333333",        // テキストカラー
      },
    },
  },
  plugins: [],
}
