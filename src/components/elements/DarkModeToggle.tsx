import { Moon, SunMedium } from "lucide-react";
import { useState, useEffect } from "react";

export const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Periksa apakah mode gelap aktif di localStorage atau mengikuti preferensi sistem
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="text-lg items-center order-1">
      {darkMode ? (
        <Moon className="h-8 w-8 lg:h-6 lg:w-6 scale-[.60] lg:scale-90" />
      ) : (
        <SunMedium className="h-8 w-8 lg:h-6 lg:w-6 scale-[.80] lg:scale-110" />
      )}
    </button>
  );
};
