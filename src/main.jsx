import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AppB from "./AppB";
import AboutB from "./components/AboutB";
import ContactForm from "./components/ContactForm"; // ← OK!!

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* トップページ */}
        <Route path="/" element={<AppB />} />

        {/* Aboutページ */}
        <Route
          path="/about"
          element={<AboutB onBack={() => window.history.back()} />}
        />

        {/* Contactページ */}
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
