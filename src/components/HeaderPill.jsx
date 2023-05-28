const HeaderPill = ({text, fans, influencer}) => {
  return (
    <div className={`inline font-dm-sans font-medium text-sm md:text-base tracking-tight text-black py-1.5 px-6 md:py-2 md:px-8 rounded-full ${fans && "bg-fans"} ${influencer && "bg-influencer"}`}>{text}</div>
  )
}

export default HeaderPill