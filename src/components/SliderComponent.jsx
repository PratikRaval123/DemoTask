import React, { useState } from "react";

export default function SliderComponent() {
  const [activeTab, setActiveTab] = useState("Assembly");

  // List of Tabs
  const tabs = [
    { id: "Assembly", label: "Assembly", icon: "🔧" },
    { id: "Mounting", label: "Mounting", icon: "🔨" },
    { id: "Moving", label: "Moving", icon: "📦" },
    { id: "Cleaning", label: "Cleaning", icon: "🧹" },
    { id: "OutdoorHelp", label: "Outdoor Help", icon: "🌿" },
    { id: "HomeRepairs", label: "Home Repairs", icon: "🛠" },
    { id: "Painting", label: "Painting", icon: "🎨" },
  ];
  return (
    <div className="container m-auto ">
      {/* Tabs Section */}
      <div className="bg-gradient shadow-sm md:rounded-xl sm:rounded-xl rounded-none w-full m-auto px-0 md:px-0 md:w-[80%]">
        <div className="flex justify-between gap-4 py-4 px-4 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-2 px-4 py-2 border-b-2 font-medium ${
                activeTab === tab.id
                  ? "border-[#16A34A] text-[#FAFAFA]"
                  : "border-transparent text-gray-500"
              } hover:text-[#16A34A] snap-center md:snap-none`}
            >
              <span className="text-2xl md:text-3xl">{tab.icon}</span>
              <span className="text-xs md:text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="px-3">
        {/* Assembly */}
        {activeTab === "Assembly" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "General Furniture Assembly",
              "IKEA Assembly",
              "Crib Assembly",
              "PAX Assembly",
              "Bookshelf Assembly",
              "Desk Assembly",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 text-sm"
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "Assembly" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Assembly
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Assemble or disassemble furniture items by unboxing,
                      building, and any cleanup.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Curved sofas, computer desks, and
                      sustainable materials.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1080&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Mounting  */}
        {activeTab === "Mounting" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "General Mounting",
              "TV Mounting",
              "Mount Shelves",
              "Install Curtains & Blinds",
              "Hang Art",
              "Mount Home Decor",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "Mounting" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Mounting
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Securely mount your TV, shelves, art, mirrors, dressers,
                      and more.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Gallery walls, art TVs, and wraparound
                      bookcases.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/4nhTqbg73bmmQtEZ5N5iFW/2804e6b9058041d67724fd977fb35644/Homepage_Mounting.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Moving  */}
        {activeTab === "Moving" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "Help Moving",
              "Trash & Furniture Removal",
              "Heavy Lifting & Loading",
              "Rearrange Furniture",
              "Junk Haul Away",
              "Apartment Move in & out",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "Moving" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Moving
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Moving help such as packing/unpacking, loading, and
                      lifting heavy items.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Single-item moves, apartment moves, and junk
                      removal.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/1yzzyx2EqAdFjES7LImaEa/6cd7ab5c66936b3451a106e77cbd0f2c/Homepage_Moving.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Cleaning  */}
        {activeTab === "Cleaning" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "Cleaning",
              "AirBnB Cleaning",
              "Deep Cleaning",
              "Garage Cleaning",
              "Move Out Clean",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "Cleaning" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Cleaning
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Clean your home or office; deep clean appliances and other
                      spaces.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Eco-friendly products, spring cleaning
                      checklists, and cleaning hacks.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/3jKP7rZEeOMh285VMG9zVJ/3905d9a7ae1c989acb08c7ff239c1f60/Homepage_Cleaning.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Outdoor Help  */}
        {activeTab === "OutdoorHelp" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "Yard Work",
              "Lawn Care",
              "Snow Removal",
              "Garage Landscaping Help",
              "Branch & Hedge Trimming",
              "Gardening & Weeding",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "OutdoorHelp" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Outdoor Help
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Outdoor help like gardening, weeding, gutter cleaning, and
                      snow removal.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Native plants, enhanced walkways, and
                      outdoor lighting installation.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/2ru8T5M6EoTz6aZ9Nzqh6G/a7947e6273f7fb1d933e609a99cbbdcf/Homepage_YardWork.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Home Repairs  */}
        {activeTab === "HomeRepairs" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "Electrical Repairs",
              "Plumbing Help",
              "Minor Home Repairs",
              "Light Carpentry",
              "Door, Cabinets, & Furniture Repairs",
              "Sealing & Caulking",
              "Appliance Installation & Repair",
              "Window & Blinds Repairs",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "HomeRepairs" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Home Repairs
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Home improvements like plumbing, electrical, and appliance
                      installation.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Chandeliers, brass faucets, and smart
                      toilets.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/8L8MtLm9f5ekgXZDFka2x/57f59d69d07096448f605ace9604f0a4/Homepage_HomeRepairs.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}

        {/* Painting  */}
        {activeTab === "Painting" && (
          <div className="flex justify-center gap-4 flex-wrap py-10 px-6 ">
            {[
              "Indoor Painting",
              "Furniture Painting",
              "Wallpapering",
              "Accent Wall Painting",
              "Wallpaper Removal",
            ].map((subTab) => (
              <button
                key={subTab}
                className=" bg-gradient px-4 py-2 rounded-full border border-gray-300 text-white hover:bg-gray-100 "
              >
                {subTab}
              </button>
            ))}
          </div>
        )}
        {activeTab === "Painting" && (
          <div className=" bg-gradient flex flex-col md:flex-row items-center md:items-start  p-6 md:p-10 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:p-6 ">
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="md:text-2xl text-xl font-semibold mb-4 text-white">
                  Painting
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Paint walls, ceilings, molding, and doors; includes prep
                      and cleanup.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <p className="text-white md:text-lg text-sm">
                      Now Trending: Color blocking, stripe details, and
                      statement colors. .
                    </p>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 p-4">
                <img
                  src="https://images.ctfassets.net/vwt5n1ljn95x/1ffizWelPGVCWiCGWSivD7/bf3f6bd74da6b36a52662bf4ca44effa/Homepage_Painting.png?w=1200&q=75&fm=webp"
                  alt="How It Works"
                  className="w-full rounded-lg shadow-md "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
