import Image from "next/image";
import HeaderPill from "./HeaderPill";
import Paragraph from "./Paragraph";
import PrimaryHeading from "./PrimaryHeading";
import img from "../../public/sq-img.png";

const Fans1 = () => {
  return (
    <section className="py-14 px-8 md:px-16 lg:py-32 lg:px-44 bg-white flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 flex justify-center items-center order-first md:order-last mb-10 md:mb-0">
        <div className="sq-image relative flex justify-center items-center">
          <div className="sq-image-sm bg-primary top-0 left-0 mx-auto"></div>
          <div className="sq-image absolute top-0 left-0">
            <Image src={img} alt="a man's face" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full mb-10 md:flex hidden">
          <HeaderPill text="Fans" fans={true} />
        </div>
        <PrimaryHeading
          text="Connect with top influencers in your field"
          color="text-black"
        />
        <Paragraph
          text="From Tech to music to business, Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your best chance."
          color="text-black"
        />
      </div>
    </section>
  );
};

export default Fans1;
