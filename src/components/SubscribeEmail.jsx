const SubscribeEmail = () => {
  return (
    <div className="w-full flex p-0 font-dm-sans">
      <input
        type="email"
        placeholder="Enter your email address"
        className="py-[13px] px-4 w-9/12 rounded-none rounded-tl-[10px] rounded-bl-[10px] border border-[rgba(18, 18, 18, 0.3)] text-lg md:text-xl text-[rgba(0, 0, 0, 0.75)]"
      />
      <button className="bg-[#121212] text-white w-3/12 rounded-none rounded-tr-[10px] rounded-br-[10px] border border-[#121212] flex justify-center items-center uppercase font-semibold text-sm md:text-base">
        submit
      </button>
    </div>
  );
};

export default SubscribeEmail;
