"use client";
import { useState } from "react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`flex min-h-screen flex-col ${
        darkMode ? "dark:bg-red-300" : "bg-green-400"
      }`}
    >
      <Header />
      <div className="w-full">
        <button type="button" onClick={handleToggleDarkMode}>
          {darkMode ? (
            <WiDaySunny size="2rem" />
          ) : (
            <WiNightClear size="2rem" />
          )}
        </button>
      </div>
    </main>
  );
}
