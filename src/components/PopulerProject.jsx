import React from "react";

export default function PopulerProject() {
  const popularProjects = [
    {
      title: "Furniture Assembly",
      price: "Projects starting at $47",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/15JB3WRwRtvEsf5rcVKmnK/e74bf3bbce7c9cff3016cb5c103a0295/Furniture_Assembly.jpeg?w=384&q=75&fm=webp",
    },
    {
      title: "Mount a TV, Art or Shelves",
      price: "Projects starting at $56",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/1br11luEpZud3x1nr3ScUA/27fcb74e4e93ee19524cd6342e34a849/Mount_TV_art_shelves.jpg?w=384&q=75&fm=webp",
    },
    {
      title: "Help Moving",
      price: "Projects starting at $56",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/5RdOpgNLV7GFgjHegMSn4S/2dd4f5262668c9a089ca877b0e32c973/Help_Moving.jpg?w=384&q=75&fm=webp",
    },
    {
      title: "Home & Apartment Cleaning",
      price: "Projects starting at $40",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/51s0CVltl03F7bOfy31VXB/b72343b746d91978dc8d8f3d4840327d/Home_Apartment_Cleaning.jpg?w=384&q=75&fm=webp",
    },
    {
      title: "Minor Plumbing Repairs",
      price: "Projects starting at $67",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/2vw8Ct7BWBT12032WBzVyf/5901ed2b5664e827594fb52998dd8d92/Plumbing_Help.jpeg?w=384&q=75&fm=webp",
    },
    {
      title: "Electrical Help",
      price: "Projects starting at $67",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/BUqnE9Sgc6YHLGISWe04H/86adf15a0aade405cd574ce1aabe917e/Electrical_Help.jpg?w=384&q=75&fm=webp",
    },
    {
      title: "Heavy Lifting",
      price: "Projects starting at $54",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/7KPnZ2S2uRjZlNplopaKJP/40fbba53486b01d7c08f802b20223192/Furniture_Removal__1_.jpg?w=384&q=75&fm=webp",
    },
    {
      title: "Yard Work & Gardening",
      price: "Projects starting at $44",
      img: "https://images.ctfassets.net/vwt5n1ljn95x/31cWVEOgdtYOdihAiGwjG8/c88412838f11113fc42b7855e7765448/Yardwork.jpeg?w=384&q=75&fm=webp",
    },
  ];
  return (
    <div className="py-10 px-0 md:px-20 md:mt-20 mt-5 rounded-2xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left text-white">
        Popular Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient rounded-lg shadow-md hover:shadow-lg overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="md:text-lg text-sm font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white md:text-lg text-sm">{project.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
