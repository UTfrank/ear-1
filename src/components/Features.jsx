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
    <section className="px-8 py-[56px] pb-[500px] lg:px-[120px] lg:pt-[130px] lg:pb-[508px] relative bg-white">
      <div className="w-full lg:w-4/12 mb-[7px]">
        <PrimaryHeading text="The ear1 assurance" color="text-primary" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full lg:w-9/12 mx-auto">
        <div className="w-full lg:w-1/2">
          <ul className="timeline font-dm-sans">
            <li>
              <h5 className="timeline-heading text-lg md:text-2xl text-black font-medium mb-3 md:mb-4">Ease of Use</h5>
              <p className="timeline-text text-xs md:text-base font-normal text-black opacity-60">With as simple of 3 steps, you can get started using ear1.</p>
              <span></span>
            </li>
            <li>
              <h5 className="timeline-heading text-lg md:text-2xl text-black font-medium mb-3 md:mb-4">Multi currency support</h5>
              <p className="timeline-text text-xs md:text-base font-normal text-black opacity-60">Ear1 allows you to pay with a wide range of currencies.</p>
              <span></span>
            </li>
            <li>
              <h5 className="timeline-heading text-lg md:text-2xl text-black font-medium mb-3 md:mb-4">Secure communication</h5>
              <p className="timeline-text text-xs md:text-base font-normal text-black opacity-60">State of the art end to end encryption of messages. No weird sort of tracking. Your privacy is our concern.</p>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-6/12 lg:w-1/2 flex justify-start mx-auto">
          <Image src={phoneImg} alt="image of a phone" />
        </div>
      </div>
      <div className="absolute top-[50%] left-[5%] md:top-[45%] lg:top-[55%] w-11/12 lg:w-10/12 bg-primary bg-noise rounded-[50px] md:rounded-[100px] px-[44px] py-[76px] lg:pt-[105px] lg:px-[103px] lg:pb-0 flex justify-between lg:mx-auto z-10">
        <div className="w-4/12 relative bottom-0 hidden lg:block">
          <Image src={handPhone} alt="picture of a hand holding a phone" />
          <Image src={screen} alt="picture of a phone screen" className="absolute top-[8%] left-[41.9%] w-[42.1%]" />
        </div>
        <div className="w-full lg:w-6/12 lg:pb-[76px]">
          <PrimaryHeading text="Get ahead of your game" color="text-white" />
          <Paragraph text="Save time and effort. Ear1 is your best choice." color="text-white" opacity="opacity-100" />
          <div className="w-10/12 lg:w-full block lg:flex justify-between mt-8 mx-auto">
            <div className="flex w-full md:w-5/12 mb-[40px] lg:mb-0">
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