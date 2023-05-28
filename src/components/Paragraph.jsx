const Paragraph = ({ text, color, opacity = "opacity-60" }) => {
  return <p className={`font-dm-sans font-normal text-base lg:text-xl ${opacity} ${color}`}>{ text }</p>
}

export default Paragraph