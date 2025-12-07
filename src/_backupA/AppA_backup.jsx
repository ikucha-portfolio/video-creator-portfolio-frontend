import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import { AboutPage as About } from "./components/About";

function App() {
  const [page, setPage] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "About", href: "#about" }, // ← あえてそのままにしてOK
    { label: "Works", href: "#works" },
    { label: "Service", href: "#service" },
    { label: "Flow", href: "#flow" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Aboutページを開くとき
  if (page === "about") {
    return <About onBack={() => setPage("home")} />;
  }

  // ✅ Home画面
  return (
    <div className="bg-background min-h-screen">
      <Header
        menuItems={menuItems}
        scrollToSection={scrollToSection}
        onAboutClick={() => setPage("about")} // ← 追加！
      />
      <Hero onMoreClick={() => setPage("about")} /> {/* ← MOREから遷移 */}
      <Works />
    </div>
  );
}

export default App;
