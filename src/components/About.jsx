import Paragraph from "./Paragraph";
import PrimaryHeading from "./PrimaryHeading";

const About = () => {
  return (
    <>
      <section className="px-8 py-14 md:px-24 lg:px-32 md:py-28 lg:py-36 bg-zinc-50 bg-noise bg" id="about">
        <div className="w-full md:w-8/12 lg:w-1/2 p-0 m-0">
          <PrimaryHeading
            text="What can Ear1 help you do?"
            color="text-primary"
          />
          <Paragraph
            text="Are you an individual looking to connect with an influencer without the hassle of waiting for the reply over a long time, or an influencer looking to filter your dm’s and connect with your audience, Ear1 has got you covered."
            color="text-black"
          />
        </div>
      </section>
    </>
  );
};

export default About;
