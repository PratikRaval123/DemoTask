import { navLinks } from "../constants";

const HowItWorks = () => {
  console.log(navLinks);
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient p-6 md:p-12 rounded-2xl mt-20">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          How it works
        </h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-200 text-purple-700 font-bold rounded-full mr-4">
              1
            </div>
            <p className="text-white">
              Choose a Tasker by price, skills, and reviews.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-yellow-200 text-yellow-700 font-bold rounded-full mr-4">
              2
            </div>
            <p className="text-white">
              Schedule a Tasker as early as today.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 bg-green-200 text-green-700 font-bold rounded-full mr-4">
              3
            </div>
            <p className="text-white">
              Chat, pay, tip, and review all in one place.
            </p>
          </li>
        </ol>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://images.ctfassets.net/vwt5n1ljn95x/68OY5vAHQdG6blVvXM1WT7/5f45c9eda06d29820a9836a11232ef16/how_it_works_pic_updated.jpg?w=1920&q=75&fm=webp"
          alt="How It Works"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
