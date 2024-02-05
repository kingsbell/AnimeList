"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const buttonLight = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "dark" ? setDarkMode(true) : null;
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="items-center mr-2 flex">
      <button className="p-0.5 relative dark:bg-helper bg-active rounded-full flex items-center w-14 h-6" onClick={buttonLight}>
        <Moon size={18} color="#F7F5F2"></Moon>
        <div className="absolute bg-textLight w-5 h-5 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? { transform: "translateX(2px)" } : { transform: "translateX(calc(172% - 2px))" }}></div>
        <Sun size={18} color="#FF9843" className="ml-auto"></Sun>
      </button>
    </div>
  );
};
export default DarkMode;
