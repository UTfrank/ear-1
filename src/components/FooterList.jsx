const FooterList = ({ title, list }) => {
  return (
    <div className="w-full font-dm-sans text-[#121212]">
      <h6 className="text-2xl font-medium mb-8">{ title }</h6>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-lg font-normal mb-6">
            <a href="#">{ item }</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList