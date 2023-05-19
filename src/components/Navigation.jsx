import { useState } from "react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import Image from "next/image"
import logo from "../../public/logo-black.svg"

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="w-11/12 lg:w-4/5 mx-auto flex justify-between">
      <Image src={logo} alt="brand logo" />
      <ul className="w-6/12 lg:w-1/2 lg:flex hidden lg:flex-row flex-col justify-between lg:bg-transparent bg-black lg:p-0 p-6 rounded-l-3xl lg:rounded-none translate-x-3.5 md:translate-x-20 lg:translate-x-0">
        <li className="mb-6 lg:mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">Home</a>
        </li>
        <li className="mb-6 lg:mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">For Fans</a>
        </li>
        <li className="mb-6 lg:mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">For Influencers</a>
        </li>
        <li className="mb-6 lg:mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">Features</a>
        </li>
        <li className="mb-6 lg:mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">FAQs</a>
        </li>
        <li className="mb-6 lg:mb-0">{darkMode ? (
            <WiDaySunny size="2rem" />
          ) : (
            <WiNightClear size="2rem" />
          )}</li>
      </ul>
    </nav>
  )
}

export default Navigation