import Image from "next/image";
import logo from "../../public/logo-white.svg";
import facebook from "../../public/icon-facebook.svg";
import instagram from "../../public/icon-instagram.svg";
import twitter from "../../public/icon-twitter.svg";
import SubscribeEmail from "./SubscribeEmail";
import Socials from "./Socials";
import FooterList from "./FooterList";

const pictures = [facebook, instagram, twitter];
const links = ["Home", "For Fans", "For Influencers", "FAQ's"];
const getHelp = ["Support", "FAQ's", "Patnership"];
const download = ["Android", "IOS"];
const resources = ["Terms of Service", "Privacy policy"];

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-white text-[#121212] font-dm-sans">
      <div className="w-11/12 md:w-10/12 border-[rgba(0, 0, 0, 0.2)] border-solid border-t py-[63px]">
        <div className="lg:w-9/12 ml-auto">
          <p className="text-xl md:text-3xl pb-6">
            <span className="font-bold">Be in the know. </span>
            Get access to amazing offers and discounts
          </p>
          <SubscribeEmail />
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-[87px]">
          <div className="lg:w-3/12 mb-[52px] lg:mb-0">
            <div className="w-full mb-10">
              <Image src={logo} alt="brand logo" />
            </div>
            <Socials pictures={pictures} />
          </div>
          <div className="lg:w-9/12 flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-[52px] lg:mb-0">
              <FooterList title="Links" list={links} />
            </div>
            <div className="md:w-1/4 mb-[52px] lg:mb-0">
              <FooterList title="Get Help" list={getHelp} />
            </div>
            <div className="md:w-1/4 mb-[52px] lg:mb-0">
              <FooterList title="Download" list={download} />
            </div>
            <div className="md:w-1/4 mb-[52px] lg:mb-0">
              <FooterList title="Resources" list={resources} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
