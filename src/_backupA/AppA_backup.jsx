import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Service", href: "#service" },
    { label: "Flow", href: "#flow" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      <Header
        menuItems={menuItems}
        scrollToSection={scrollToSection}
      />
      <Hero />
      <Works />
    </div>
  );
}

export default App;
