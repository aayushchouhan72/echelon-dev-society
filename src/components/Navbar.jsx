import React from "react";
import { clubInfo } from "../data/mockData";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "./Icons";

const Navbar = ({ onMenuToggle, isMenuOpen, theme, toggleTheme }) => {
  const navLinks = ["Home", "Events", "Gallery", "Team", "About", "Support"];

  const headerClasses =
    theme === "light"
      ? "bg-gray-100/80 border-gray-200"
      : "bg-gray-900/80 border-gray-800";
  const linkClasses =
    theme === "light"
      ? "text-gray-600 hover:text-violet-500"
      : "text-gray-300 hover:text-violet-400";
  const logoAndIconClasses = theme === "light" ? "text-gray-800" : "text-white";
  const mobileMenuBg = theme === "light" ? "bg-gray-100" : "bg-gray-900";

  return (
    <header
      className={`${headerClasses} backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="#home"
          className={`text-2xl font-bold flex items-center gap-2 ${logoAndIconClasses}`}
        >
          <img
            src={clubInfo.logoUrl}
            alt="Echelon Dev Society Logo"
            className="h-12 w-12 rounded-full transform transition duration-300 ease-in-out hover:scale-90"
          />
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`${linkClasses} transition-colors duration-300`}
            >
              {link}
            </a>
          ))}
          <button onClick={toggleTheme} className={linkClasses}>
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <button
          onClick={onMenuToggle}
          className={`md:hidden z-50 ${logoAndIconClasses}`}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>
      <div
        className={`md:hidden absolute top-full left-0 w-full ${mobileMenuBg} transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={onMenuToggle}
              className={`${linkClasses} py-2 transition-colors duration-300`}
            >
              {link}
            </a>
          ))}
          <button onClick={toggleTheme} className={`${linkClasses} mt-2`}>
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
