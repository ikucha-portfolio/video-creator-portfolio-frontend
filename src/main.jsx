import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";

import AppB from "./AppB";
import AboutB from "./components/AboutB";
import ContactForm from "./components/ContactForm";

/* ---------------------------------------------
   ページ遷移時に必ずトップへスクロール
--------------------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* ---------------------------------------------
   ルーティング本体
--------------------------------------------- */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/video-creator-portfolio-frontend">

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<AppB />} />

        <Route
          path="/about"
          element={<AboutB onBack={() => window.history.back()} />}
        />

        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
