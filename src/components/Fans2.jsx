import Image from "next/image"
import HeaderPill from "./HeaderPill";
import chat from "../../public/Icon-chat.svg"
import PrimaryHeading from "./PrimaryHeading";
import Paragraph from "./Paragraph";

const Fans2 = () => {
  return (
    <section className="w-full flex">
      <div className="w-full lg:w-1/2 px-8 py-28 md:p-28 bg-noise bg-primary">
        <div className="w-full flex justify-between mb-9">
          <div className="flex items-center justify-center">
            <HeaderPill text="Fans" fans={true} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={chat} alt="chat icon" className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]" />
          </div>
        </div>
        <PrimaryHeading text="Be assured of replies" color="text-white" />
        <Paragraph text="With ear1, we assure you of getting a response to your messages. Don’t be part of the noise in the dms. Get ahead of the game by paying a small fee." color="text-white" opacity="opacity-90" />
      </div>
      <div className="w-1/2 hidden lg:flex bg-noise bg-secondary"></div>
    </section>
  )
}

export default Fans2