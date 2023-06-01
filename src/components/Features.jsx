import Image from "next/image"
import PrimaryHeading from "./PrimaryHeading"
import phoneImg from "../../public/Black-Matte-4.png"
import handPhone from "../../public/hand-phone.png"
import screen from "../../public/phone-screen.png"
import apple from "../../public/app-store.svg"
import google from "../../public/play-store.svg"
import Paragraph from "./Paragraph"

const Features = () => {
  return (
    <section className="px-8 py-[56px] lg:px-[120px] lg:pt-[130px] lg:pb-[508px] relative bg-white">
      <div className="w-full lg:w-4/12 mb-[7px]">
        <PrimaryHeading text="The ear1 assurance" color="text-primary" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full lg:w-9/12 mx-auto">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full lg:w-1/2 flex justify-start">
          <Image src={phoneImg} alt="image of a phone" />
        </div>
      </div>
      <div className="absolute top-[55%] w-10/12 bg-primary bg-noise rounded-[100px] pt-[105px] px-[103px] flex justify-between mx-auto z-10">
        <div className="w-4/12 relative">
          <Image src={handPhone} alt="picture of a hand holding a phone" />
          <Image src={screen} alt="picture of a phone screen" className="absolute top-[8%] left-[41.9%] w-[42.1%]" />
        </div>
        <div className="w-6/12">
          <PrimaryHeading text="Get ahead of your game" color="text-white" />
          <Paragraph text="Save time and effort. Ear1 is your best choice." color="text-white" opacity="opacity-100" />
          <div className="w-full flex justify-between mt-8">
            <div className="flex w-full md:w-5/12">
              <button type="button" className="w-full">
                <Image src={apple} alt="apple app store" />
              </button>
            </div>
            <div className="flex w-full md:w-5/12">
              <button type="button" className="w-full">
                <Image src={google} alt="google play store" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features