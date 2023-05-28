import Image from "next/image"
import HeaderPill from "./HeaderPill"
import Paragraph from "./Paragraph"
import img from "../../public/Black-Matte-2.png"
import arrowUp from "../../public/arrow-up.svg"

const Influencer1 = () => {
  return (
    <section className="flex drop-shadow-[0_-15px_40px_rgba(0,0,0,0.2)] bg-white relative">
      <div className="w-full lg:w-1/2 px-5 py-20 md:px-36 md:py-40 order-first md:order-last">
        <div className="w-full mb-10">
          <HeaderPill text="Influencer" influencer={true} />
        </div>
        <h2 className={`font-dm-sans font-medium text-4xl lg:text-7xl tracking-tighter leading-9 mb-6 text-black`}>Earn <span className="text-primary">MONEY</span> while you chat</h2>
        <Paragraph text="As an influencer, you get paid by your audience to connect with them. That way to maximize time while earning." color="text-black" />
      </div>
      <div className="hidden lg:flex justify-center items-end w-1/2">
        <Image src={img} alt="image of a phone cut in half" />
      </div>
      <a href="#" className="hidden lg:flex absolute top-16 right-20">
        <Image src={arrowUp} alt="arrow-up icon" />
      </a>
    </section>
  )
}

export default Influencer1