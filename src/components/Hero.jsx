import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center`}>
        <div className="flex flex-row justify-center  md:w-[60%] w-full items-center">
          <h1 className="flex-1 font-poppins font-semibold md:text-[66px] text-[38px] text-white md:leading-[100.8px] leading-[60px] text-center">
            Book trusted help for home tasks
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <div className="flex items-center justify-center md:w-[50%] h-[60%] w-[100%] py-10">
          <div className="relative w-full max-w-2xl">
            {/* Input Field */}
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full py-4 pl-6 pr-16 text-sm md:text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500"
            />
            {/* Search Icon */}
            <button className="absolute md:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:ring-4 focus:ring-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
