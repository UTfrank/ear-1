"use client";
import { createContext, useState } from "react";

export const ToggleNav = createContext({
  navOpen: null,
});

export const ToggleNavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const openModal = () => setNavOpen(true);
  const closeModal = () => setNavOpen(false);
  const value = { navOpen, openModal, closeModal };

  return <ToggleNav.Provider value={value}>{ children }</ToggleNav.Provider>
}