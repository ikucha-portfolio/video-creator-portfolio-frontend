/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Figma再現トーン
        primary: "#7FB3D5",       // 優しい水色（アクセント）
        accent: "#A8D8EA",        // 薄めのブルー（サブトーン）
        background: "#FFFFFF",    // 背景ホワイト
        foreground: "#1A1A1A",    // テキスト（黒よりやや柔らかい）
        border: "#E5E5E5",        // 枠線（薄グレー）
        muted: "#F5F5F5",         // hover時や背景ぼかし用
      },
    },
  },
  plugins: [],
};
