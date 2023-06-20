import Image from "next/image";

const Socials = ({ pictures }) => {
  return (
    <ul className="m-0 p-0 flex items-center">
      {pictures.map((icon, index) => (
        <li
          key={index}
          className="w-12 h-12 bg-[#ECECEC] rounded-full flex justify-center items-center mr-6"
        >
          <Image src={icon} alt="social media icon" />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
