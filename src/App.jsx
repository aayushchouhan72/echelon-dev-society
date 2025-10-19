import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events.jsx";
import Gallery from "./components/Gallery";
import Team from "./components/Team.jsx";
import About from "./components/About";
import SupportChat from "./components/SupportChat";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const appClasses =
    theme === "light" ? "bg-white text-gray-800" : "bg-gray-500 text-gray-200";

  return (
    <div className={`${appClasses} font-sans transition-colors duration-300`}>
      <Navbar
        onMenuToggle={toggleMenu}
        isMenuOpen={isMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <Events theme={theme} />
        <Gallery theme={theme} />
        <Team theme={theme} />
        <About theme={theme} />
      </main>
      <SupportChat theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
