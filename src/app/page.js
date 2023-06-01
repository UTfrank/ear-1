"use client";
import { useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Fans1 from "@/components/Fans1";
import Fans2 from "@/components/Fans2";
import Influencer1 from "@/components/Influencer1";
import Influencer2 from "@/components/Influencer2";
import Features from "@/components/Features";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <main
      className={`flex min-h-screen flex-col ${
        darkMode ? "dark:bg-red-300" : "bg-green-400"
      }`}
    >
      <Header />
      <About />
      <Fans1 />
      <Fans2 />
      <Influencer1 />
      <Influencer2 />
      <Features />
    </main>
  );
}
