import Image from "next/image"
import logo from "../../public/logo-black.svg"

const Navigation = () => {
  return (
    <nav className="w-4/5 mx-auto flex justify-between">
      <Image src={logo} alt="brand logo" />
      <ul className="w-1/2 flex justify-between">
        <li><a href="#" className="font-dm-sans font-normal text-xl not-italic">Home</a></li>
        <li><a href="#" className="font-dm-sans font-normal text-xl not-italic">For Fans</a></li>
        <li><a href="#" className="font-dm-sans font-normal text-xl not-italic">For Influencers</a></li>
        <li><a href="#" className="font-dm-sans font-normal text-xl not-italic">Features</a></li>
        <li><a href="#" className="font-dm-sans font-normal text-xl not-italic">FAQs</a></li>
      </ul>
    </nav>
  )
}

export default Navigation