/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Figmaトーン再現（クリーンで柔らかい印象）
        primary: "#7FB3D5",        // メインの淡いブルー（アクセント）
        accent: "#A8D8EA",         // 優しいサブトーン（リンクやhover用）
        background: "#FAFAFA",     // Figma寄りの白（ほんのりクール）
        foreground: "#1A1A1A",     // メインテキスト
        border: "#E8E8E8",         // 線やカードの境界
        muted: "#F5F5F5",          // hover時や補助背景に
        card: "#FFFFFF",           // カード背景（純白でコントラスト）
        secondary: "#F9F8F6",      // ごく薄いアイボリー（必要に応じて）
      },
    },
  },
  plugins: [],
};
