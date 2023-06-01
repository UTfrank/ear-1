import HeaderPill from "./HeaderPill"
import Image from "next/image"
import img from "../../public/influencer-2.png"
import filter from "../../public/Icon-filter-white.svg"
import PrimaryHeading from "./PrimaryHeading"
import Paragraph from "./Paragraph"

const Influencer2 = () => {
  return (
    <section className="flex drop-shadow-[0_-15px_40px_rgba(0,0,0,0.2)] bg-noise relative">
      <div className="w-1/2 hidden lg:flex">
        <Image src={img} alt="random phone image" className="w-full" />
      </div>
      <div className="w-full lg:w-1/2 bg-[#202020] bg-noise flex items-center justify-center py-[120px] px-8 lg:py-[134px] lg:px-[119px]">
        <div className="w-full">
          <div className="flex items-center justify-between mb-[39px]">
            <HeaderPill text="Influencer" influencer={true} />
            <Image src={filter} alt="filter icon" className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]" />
          </div>
          <PrimaryHeading text="Filter the noise in the dm’s" color="text-white" />
          <Paragraph text="Ear1 helps you get rid of all the noise in your dm’s across other social media apps. This way, you are sure to connect with serious people and make genuine business and personal connections." color="text-white" />
        </div>
      </div>
    </section>
  )
}

export default Influencer2