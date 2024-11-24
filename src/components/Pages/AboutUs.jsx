import React from "react";
import styles from "../../style";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AboutUs() {
  const leadershipTeam = [
    {
      name: "Ania Smith",
      title: "Chief Executive Officer",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/6YbXJeAXtZeveT9TP5qKBr/6fcde63847eba978a5b008b6caf00bfc/ania-smith_3x.png?w=256&q=75&fm=webp", // Replace with actual image
    },
    {
      name: "Ben Edelhart",
      title: "Chief Administrative Officer and General Counsel",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/OL2nTFrrXCGAV76jfgCpb/3fe1afa7868c5ea81cfe191b870f3c0b/ben-edelhart_3x.png?w=256&q=75&fm=webp",
    },
    {
      name: "Amy Ming Zhang",
      title: "Chief Financial Officer",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/5xhxJgmM5MUr2goLdkmufO/839e56ce57757aa43b6efee07269ec81/amy-ming-zhang_3x.png?w=256&q=75&fm=webp",
    },
    {
      name: "Christopher Ager",
      title: "Chief Commercial Officer",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/3wUrNDQIQ782wRQFFKuFSL/f3009001e5c8fea3758866503c4a72c6/christopher-ager_3x.png?w=256&q=75&fm=webp",
    },
    {
      name: "Michael Howell",
      title: "Executive",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/Y6xI9KACDnnwhzUEUp6We/7033fc9804480973d47ba5edaa7b6baf/Mike_720x720.jpg?w=256&q=75&fm=webp",
    },
    {
      name: "Jenna Costa",
      title: "Manager",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/74uVfgIAMzwyBq1kI1u9YQ/e7c91ba2ee9c117a804769b7534cce73/jenna-costa_3x.jpg?w=256&q=75&fm=webp",
    },
    {
      name: "Drew Wrangels",
      title: "Director",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/yrlwi50iO7ngAetayfOFx/5aa8cbe9c6a780959e43ce2353eb3145/drew_wrangles.jpeg?w=256&q=75&fm=webp",
    },
    {
      name: "Tamara Rosenthal",
      title: "Head of Marketing",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/4uq3Q9Xit6AaOQnQ9TfVvx/f07de2a990eed649af0a1c7e3dd820d6/tamara-rosenthal_3x.jpg?w=256&q=75&fm=webp",
    },
    {
      name: "Jessica Davila",
      title: "VP, People Experience",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/3P9PU9lKk2WzBlmfXeCTcb/6d153217e037e7ba1471931a9eeeeae7/jessica-davila_3x.png?w=256&q=75&fm=webp",
    },
    {
      name: "Eric Haymond",
      title: "VP, Business Development",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/37y73oMzM70hL988pzkz04/3fc9d411fe72c737c13e6ebfb78c83bd/eric-haymond_3x.png?w=256&q=75&fm=webp",
    },
    {
      name: "Scott Porad",
      title: "VP, Engineering",
      image:
        "https://images.ctfassets.net/vwt5n1ljn95x/2veYYff7lcKET1ygdtURh4/a08b6ec4e3d6ad3d6efe3f98484eb1ad/Scott_720x720.jpg?w=256&q=75&fm=webp",
    },
  ];
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="">
        {/* Banner Section */}
        <div
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.ctfassets.net/vwt5n1ljn95x/7HPDZ9q1T97pc2y3MalyoZ/522918fb3e0163ac7b8c9344cfe48577/03_TaskRabbit-HomeRepair_022_1.png?w=2048&q=75&fm=webp')",
          }}
        >
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>

        {/* Description Section */}
        <section className="text-center py-12 px-6 ">
          <h2 className="text-3xl font-semibold text-white">Transforming lives, one task at a time</h2>
          <p className="text-white mt-4 max-w-3xl mx-auto">
            We bring people together. It’s at the heart of everything we do. We know that for every person who needs
            their radiator fixed before winter, the nursery set up for their newborn, or a TV mounted in time for game
            day, there’s someone nearby who is ready, willing, and able to help, without delay.
          </p>
        </section>

        {/* Leadership Team Section */}
        <section className={`${styles.boxWidth}`}>
          <h3 className="text-2xl font-bold text-center text-white mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 ">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-gradient shadow-md rounded-lg p-4 text-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-medium text-white">{member.name}</h4>
                <p className="text-sm text-white">{member.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
