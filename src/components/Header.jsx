import Image from "next/image"
import Navigation from "./Navigation"
import apple from '../../public/app-store.svg'
import google from '../../public/play-store.svg'
import phoneLeft from '../../public/left-phone.png'
import phoneRight from '../../public/right-phone.png'
import phoneCenter from '../../public/center-phone.png'

const Header = () => {
  return (
    <header className="font-dm-sans header bg-noise header-bg pt-12">
      <Navigation />
      <div className="text-center">
        <h2 className="font-dm-sans font-bold not-italic lg:text-9xl md:text-7xl text-5xl mt-20 lg:mb-16 mb-4">Build direct,<br /> meaningful<br /> connections.</h2>
        <p className="md:w-4/5 lg:w-2/5 mx-auto">Ear1 helps you connect directly with your favourite influencers for a small fee. What’s more? We assure you of getting a reply.</p>
        <div className="lg:w-5/12 md:w-6/12 w-9/12 flex md:flex-row flex-col md:justify-between justify-center mx-auto my-20 md:my-14">
          <button className="md:w-5/12 flex justify-center lg:mb-0 mb-7">
            <Image src={google} alt="google play store button" />
          </button>
          <button className="md:w-5/12 flex justify-center lg:mb-0 mb-7">
            <Image src={apple} alt="apple store button" />
          </button>
        </div>
      </div>
      <div className="flex w-10/12 mx-auto mt-40 relative">
        <div className="w-6/12 relative top-full left-14 hidden lg:flex">
          <Image src={phoneLeft} alt="google play store button" className="mt-4" />
        </div>
        <div className="w-6/12 relative bottom-0 right-0 hidden lg:flex">
          <Image src={phoneRight} alt="google play store button" className="mt-1" />
        </div>
        <div className="w-10/12 md:w-6/12 absolute bottom-0 right-2/4 translate-x-1/2">
          <Image src={phoneCenter} alt="google play store button" />
        </div>
      </div>
    </header>
  )
}

export default Header