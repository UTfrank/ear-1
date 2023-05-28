const PrimaryHeading = ({ text, color }) => {
  return <h2 className={`font-dm-sans font-medium text-4xl lg:text-7xl tracking-tighter leading-9 mb-6 ${color}`}>{ text }</h2>
}

export default PrimaryHeading