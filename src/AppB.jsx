// src/AppB.jsx
import HeaderB from "./components/HeaderB";
import HeroB from "./components/HeroB"; // ← 🟢 これを追加！

export default function AppB() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] antialiased">
      <HeaderB />

      <main className="pt-24 px-6">
        {/* Heroセクション */}
        <HeroB />  {/* ← 🟢 ここで呼び出す！ */}

        {/* 下の説明テキストは仮置きなので消してOK */}
        {/* <h2 className="text-xl text-gray-700 font-normal">
          ここにHeroBなどを追加していきます。
        </h2> */}
      </main>
    </div>
  );
}
