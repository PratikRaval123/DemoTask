import React, { useEffect, useRef, useState } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function ServAppice() {
  const features = [
    {
      id: 1,
      title: "Send invoices",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Invoice_2x.png",
    },
    {
      id: 2,
      title: "Send contracts",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Contract_2x.png",
    },
    {
      id: 3,
      title: "Book & schedule",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Calendar_2x.png",
    },
    {
      id: 4,
      title: "Automate workflows",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Automation_2x.png",
    },
    {
      id: 5,
      title: "Track inquiries",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Inquiries_2x.png",
    },
    {
      id: 6,
      title: "Manage projects",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Briefcase_2x.png",
    },
    {
      id: 7,
      title: "Send forms & questionnaires",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Document_2x.png",
    },
    {
      id: 8,
      title: "Accept online payments",
      icon: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/icons/checkboxes/intentHero/Credit_Card_2x.png",
    },
    { id: 9, title: "Not sure", icon: "" },
  ];

  const sections = [
    {
      id: "invoices",
      title: "Invoices",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Invoice.svg",
      description: "More cha-chings for you",
      details: [
        "Secure and easy digital payments",
        "Payment schedules and reminders",
        "Auto-saved item bank",
      ],
      image:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_405/v1/marketing_site/features_page/light-brows.png",
      quote:
        "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
      author: "Mark Dickinson",
      authorTitle: "Mark Dickinson Photography",
    },
    {
      id: "proposals",
      title: "Proposals",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/proposal.svg",
      description: "Professional and flexible",
      details: [
        "Invoice, contract, payment all in one",
        "1-2-3 client booking process",
        "Professional branding",
      ],
      image:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_370/v1/marketing_site/features-hub/Proposal_2x.png",
      quote:
        "I think this is the greatest thing ever invented. I love the professional proposals and streamlined processes.",
      author: "JKelly Hillis",
      authorTitle: "The Perfect Posey",
    },
    {
      id: "scheduling",
      title: "Scheduling",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/calendar-24.svg",
      description: "",
      details: [
        "Share your meeting link and get booked",
        "Fully customized to your brand",
        "Confirmations and reminders",
      ],
      image:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_490/v1/marketing_site/features-hub/desktop/full_images/scheduling_calendar.png",
    },
    {
      id: "contracts",
      title: "Contracts",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/contract.svg",
      description: "Legit and ready-to-go",
      details: [
        "Legit online signatures",
        "Smart bar highlights where to sign",
        "Instant notifications when a client signs",
      ],
      image:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_450/v1/marketing_site/features-hub/contract-brows.png",
      quote:
        "I eliminated paper contracts 🙌 and now my clients can easily sign online!",
      author: "JErin Girouard",
      authorTitle: "Erin Girouard Photography",
    },
    {
      id: "automation",
      title: "Automation",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Automation.svg",
      description: "Productivity on overdrive",
      details: [
        "Custom step-by-step sequences",
        "Automate emails, tasks, and more",
        "Save time and brainpower",
      ],
      image:
        "https://res.cloudinary.com/honeybook/video/upload/c_scale,w_500/v1/marketing_site/features-hub/workflows_animation__cropped_.webm",
      quote:
        "t has cut my workflow time in half! I'm so impressed with the elevated look I get to provide to my clients.",
      author: "Allyn Childers",
      authorTitle: "Sweet Pear Photography",
    },
    {
      id: "integration",
      title: "Integration",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/Integrations.svg",
      description: "Efficient and easy to use",
      details: [
        "HoneyBook seamlessly integrates with all the tools you already use, so that you can work more efficiently than ever.",
      ],
      image:
        "https://res.cloudinary.com/honeybook/video/upload/c_scale,w_500/v1/marketing_site/features-hub/workflows_animation__cropped_.webm",
      quote: "It’s the overall package that makes my life easier.",
      author: "Mandy Ogaz",
      authorTitle: "The Potted Pansy",
    },
    // Add more sections as needed
    {
      id: "allinone",
      title: "All-in-one",
      icon: "https://res.cloudinary.com/honeybook/image/upload/v1535380932/marketing_site/features-hub/desktop/sticky_menu_icons/package.svg",
      description: "Simpler, smarter business",
      details: [
        "End-to-end client management",
        "State of the art mobile app",
        "Booking, payments, reports and more",
      ],
      image:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_360/v1/marketing_site/features_page/all-in-one-rebrand.png",
      quote:
        "t is a breath of fresh air to be able to handle everything (client communication, contracts, invoices, questionnaires) in one platform.",
      author: "Hacker Medias",
      authorTitle: "Hacker Medias",
    },
  ];

  const integrations = [
    {
      name: "Zoom",
      icon: "https://upload.wikimedia.org/zoom-icon-url", // Replace with actual icon URL
      link: "#",
    },
    {
      name: "QuickBooks",
      icon: "https://upload.wikimedia.org/quickbooks-icon-url", // Replace with actual icon URL
      link: "#",
    },
    {
      name: "Zapier",
      icon: "https://upload.wikimedia.org/zapier-icon-url", // Replace with actual icon URL
      link: "#",
    },
    {
      name: "Gmail",
      icon: "https://upload.wikimedia.org/gmail-icon-url", // Replace with actual icon URL
      link: "#",
    },
    {
      name: "Google Calendar",
      icon: "https://upload.wikimedia.org/google-calendar-icon-url", // Replace with actual icon URL
      link: "#",
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const [selectedFeatures, setSelectedFeatures] = useState(
    features.map((feature) => feature.id)
  );

  // Function to toggle feature selection
  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id)
        ? prev.filter((featureId) => featureId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <div className={`${styles.boxWidth}`}>
        <div className="bg-gray-50 py-8 px-4 ">
          <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
            Powerful features built for small businesses
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            What do you want to do with HoneyBook?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => toggleFeature(feature.id)}
                className={`flex flex-col items-center border ${
                  selectedFeatures.includes(feature.id)
                    ? "border-gray-300 "
                    : "border-purple-500 bg-purple-100"
                } rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer`}
              >
                {feature.icon ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-18 h-16 mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">...</span>
                  </div>
                )}
                <p className="text-center text-xs md:text-sm font-medium">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-purple-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Start free trial
            </button>
            <p className="text-gray-500 mt-2 text-xs md:text-sm">
              No credit card required
            </p>
          </div>
        </div>
        <div className="min-h-screen bg-gray-50 block md:flex">
          <aside className="w-1/6 sticky h-[500px] top-20 p-4 hidden md:block">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={`cursor-pointer flex ${
                    activeSection === section.id
                      ? "text-black font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {activeSection === section.id && (
                    <img
                      src={section.icon}
                      alt={section.title}
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  <a
                    href={`#${section.id}`}
                    className="hover:text-blue-500 transition-colors font-poppins text-xs md:text-sm"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <main className="md:w-3/4 w-full overflow-y-auto px-6 py-8">
            {sections.map((section, index) => (
              <>
                <div
                  id={section.id}
                  key={section.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="md:py-16 py-10 border-b flex md:w-[90%] w-full md:flex-row flex-col items-start justify-between"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mt-2 font-poppins">
                      {section.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {section.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-blue-500 mr-2 font-poppins">
                            ✔
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="justify-center flex">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full max-w-lg mx-auto"
                    />
                  </div>
                </div>
                {(section?.quote ||
                  section?.author ||
                  section?.authorTitle) && (
                  <>
                    <blockquote className="md:mt-6 mt-0 text-gray-500 italic font-poppins text-xs md:text-base">
                      “{section.quote}”
                    </blockquote>
                    <div className="mt-4 flex items-center space-x-4">
                      <img
                        src="https://via.placeholder.com/40"
                        alt={section.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium font-poppins text-xs md:text-sm">
                          {section.author}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 font-poppins">
                          {section.authorTitle}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </main>
        </div>
      </div>
      <div className="bg-[#FFF5EE] ">
        <div className="xl:max-w-[1280px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 ">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              It's free to try. <br /> We hope you do.
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-700">
              93% of members would recommend <br /> HoneyBook to a friend.
            </p>
            <button className="mt-6 px-4 md:px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
              Start free trial
            </button>
            <p className="mt-2 text-xs md:text-sm text-gray-500">
              No credit card required
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/moneystack.png"
              alt="Money Stack"
              className=" w-[200px] h-[303px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
