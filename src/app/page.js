"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <main
      className={`flex min-h-screen flex-col ${
        darkMode ? "dark:bg-red-300" : "bg-green-400"
      }`}
    >
      <Header />
    </main>
  );
}
