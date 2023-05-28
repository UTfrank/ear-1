import { useContext } from "react";
import { ToggleNav } from "@/context/toggleNar";
import { AiOutlineClose } from "react-icons/ai"

const MobileNav = () => {
  const { navOpen, closeModal } = useContext(ToggleNav);
  if(!navOpen) return null;
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-950/60 z-40">
        <button className="absolute top-6 right-3" onClick={closeModal}>
          <AiOutlineClose size="1rem" />
        </button>
        <div className="absolute top-11 right-0 w-2/3 md:w-1/3 bg-black p-6 rounded-l-3xl">
        <div className="mb-6">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">Home</a>
        </div>
        <div className="mb-6">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">For Fans</a>
        </div>
        <div className="mb-6">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">For Influencers</a>
        </div>
        <div className="mb-6">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">Features</a>
        </div>
        <div className="mb-0">
          <a href="#" className="font-dm-sans font-normal text-xs md:text-lg lg:text-xl not-italic">FAQs</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
