import React from "react";
import Navbar from "../Navbar";
import styles from "../../style";
import Footer from "../Footer";

export default function BecomeATester() {
  const steps = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
      title: "Sign up",
      description:
        "Create your account. Then download the Tasker app to continue registration.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12.75L12 5.25 4.5 12.75"
          />
        </svg>
      ),
      title: "Build your profile",
      description: "Select what services you want to offer and where.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 12.75l6-6 6 6m-6 6v-12"
          />
        </svg>
      ),
      title: "Verify your eligibility to task",
      description:
        "Confirm your identity and submit business verifications, as required.",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 9h15M4.5 15h15"
          />
        </svg>
      ),
      title: "Pay registration fee",
      description:
        "In applicable cities, we charge a $25 registration fee that helps us provide the best service to you.",
    },
    {
      id: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 7.5h15m-15 4.5h15m-15 4.5h15"
          />
        </svg>
      ),
      title: "Set your schedule and work area",
      description:
        "Set your weekly availability and opt in to receive same-day jobs.",
    },
    {
      id: 6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 6v.01"
          />
        </svg>
      ),
      title: "Start getting jobs",
      description: "Grow your business on your own terms.",
    },
  ];
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.boxWidth} container mx-auto p-5 md:p-0`}>
          {/* Grid Section */}
          <div className="flex flex-col md:flex-row items-center  ">
            {/* Left Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://www.taskrabbit.com/v3/assets/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.jpg"
                alt="TaskRabbit Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full md:w-1/2 p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Earn money your way
              </h1>
              <p className="text-white mb-6">
                See how much you can make tasking on TaskRabbit
              </p>

              {/* Select Inputs */}
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Select your area
                </label>
                <select className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Albany</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2">
                  Choose a Category
                </label>
                <select className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Help Moving</option>
                  <option>Cleaning</option>
                  <option>Delivery</option>
                </select>
              </div>

              {/* Pricing */}
              <div className="md:text-2xl text-xl font-bold mb-4 text-white">
                $45 per hour
              </div>

              {/* Buttons */}
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Get started
              </button>
              <p className="mt-4 text-center text-white">
                Already have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
          <section className=" py-16  pt-10 md:pt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Content */}
              <div className="space-y-10">
                {/* Be Your Own Boss */}
                <div className="flex items-center space-x-4">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNTYuMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI2LjExLjg3YzMuMy4wOCA0LjE3IDcuODEgNC4xNyA3LjgxaC0zMC4wM3MuMjMtNiAyLjA5LTcgMTguMTgtLjkzIDIzLjc3LS44MXoiIGZpbGw9IiNmN2I1MTkiLz48cGF0aCBkPSJtMS41NCA1NGMxLjkyIDEuOTEgMy4zOCAxLjkxIDkuMDggMS42NnMxOC4wNi0uMjQgMTguMDYtLjI0YTkuODEgOS44MSAwIDAgMSAtNi0zLjVjLTEuNjItMi4xOS0yLjEyLTQuNjYtMS44Ny00LjQyaC0yMC41NnMtLjEzIDUuMDYgMS4yOSA2LjV6IiBmaWxsPSIjZjdiNTE5Ii8+PGcgZmlsbD0iIzQwNDg1MiI+PHBhdGggZD0ibTI1LjU5IDU0Ljg5aC0xOS4zNmE1IDUgMCAwIDEgLTIuNjMtLjU4IDQuMzUgNC4zNSAwIDAgMSAtMi4xMi0zLjcxYzAtMi44OCAwLTUuNzYgMC04LjY1di0zNS44NmE1LjE3IDUuMTcgMCAwIDEgLjIzLTEuNyA0LjMgNC4zIDAgMCAxIDQtMi45YzQuMTItLjA2IDguMjQgMCAxMi4zNiAwaDEwLjU3YTYuNzUgNi43NSAwIDAgMSAxLjg1LjE1IDQuMzIgNC4zMiAwIDAgMSAzLjE0IDQuMTF2MjMuOTRhLjc0Ljc0IDAgMCAwIDEuNDggMHYtMjAuNjlhMjIuNDkgMjIuNDkgMCAwIDAgLS4xMS00LjQ1IDUuODQgNS44NCAwIDAgMCAtNC00LjMyIDcuODggNy44OCAwIDAgMCAtMi4yNC0uMjNoLTIyYy0uNCAwLS44IDAtMS4yIDBhNS43OSA1Ljc5IDAgMCAwIC01IDMuMiA4LjU4IDguNTggMCAwIDAgLS42IDR2NDMuNDNhNS44MyA1LjgzIDAgMCAwIDIuNzUgNC44N2MxLjczIDEuMSAzLjguODcgNS43NS44N2gxNy4xM2EuNzQuNzQgMCAwIDAgMC0xLjQ4eiIvPjxwYXRoIGQ9Im0yOCA1NC44OWgtMi40MWEuNzQuNzQgMCAxIDAgMCAxLjQ4aDIuNDFhLjc0Ljc0IDAgMSAwIDAtMS40OHoiLz48cGF0aCBkPSJtMjkuMzYgNTQuODloLTEuMzZhLjczLjczIDAgMCAwIC0uNTIuMjIuNzQuNzQgMCAwIDAgLS4yMi41Mi43My43MyAwIDAgMCAuNzQuNzRoMS4zNGEuOC44IDAgMCAwIC41My0uMjEuNzkuNzkgMCAwIDAgLjIyLS41My43Ny43NyAwIDAgMCAtLjIyLS41Mi43NS43NSAwIDAgMCAtLjUzLS4yMnoiLz48cGF0aCBkPSJtLjc0IDkuODloMzMuNjNhLjc0Ljc0IDAgMCAwIDAtMS40OGgtMzMuNjNhLjc0Ljc0IDAgMCAwIDAgMS40OHoiLz48cGF0aCBkPSJtLjc0IDQ4aDIwLjc1YS43NS43NSAwIDAgMCAwLTEuNDloLTIwLjc1YS43NS43NSAwIDAgMCAwIDEuNDl6Ii8+PHBhdGggZD0ibTM5IDUwLjY4cS0uMzYuMjEtLjc1LjM5YS42MS42MSAwIDAgMCAtLjIuMTkuNjYuNjYgMCAwIDAgLS4xNC4yNi41Ny41NyAwIDAgMCAwIC4yOS40OS40OSAwIDAgMCAuMDkuMjhsLjExLjE1YS45Mi45MiAwIDAgMCAuMzMuMTloLjJhLjY5LjY5IDAgMCAwIC4zNy0uMXEuMzktLjE4Ljc1LS4zOWEuNTUuNTUgMCAwIDAgLjIxLS4xOS41OC41OCAwIDAgMCAuMTMtLjI2LjQ4LjQ4IDAgMCAwIDAtLjI5LjU3LjU3IDAgMCAwIC0uMDgtLjI4bC0uMTItLjE1YS43OC43OCAwIDAgMCAtLjMzLS4xOWgtLjE5YS43Mi43MiAwIDAgMCAtLjM4LjF6Ii8+PHBhdGggZD0ibTQyLjgxIDQ2LjMydi4wOGMwLS4xIDAtLjEyIDAgMHMwIC4xMS0uMDcuMTZsLS4xNS4zM2MtLjExLjIxLS4yMy40Mi0uMzUuNjNzLS4yNS40MS0uMzkuNmwtLjIxLjMtLjA2LjA3LS4xMS4xNGEuNzkuNzkgMCAwIDAgLS4yMi41Mi43NS43NSAwIDAgMCAxLjI3LjUzIDExLjMgMTEuMyAwIDAgMCAxLjcxLTIuODcuNzUuNzUgMCAwIDAgLS41Mi0uOTIuNzUuNzUgMCAwIDAgLS41Ny4wOC44NS44NSAwIDAgMCAtLjM1LjQ0eiIvPjxwYXRoIGQ9Im00NSA0My41NWExMC42MiAxMC42MiAwIDEgMCAtOC4zMyA5LjYyYy45My0uMTkuNTMtMS42Mi0uNC0xLjQzYTkuMTYgOS4xNiAwIDEgMSA3LjI0LTguMTljLS4wNiAxIDEuNDIgMSAxLjQ5IDB6Ii8+PHBhdGggZD0ibTI4Ljg2IDQzLjcxIDMuNDYgMy45NWEuNzQuNzQgMCAwIDAgMSAwbDYuMDYtNi45My44Ni0xYy42My0uNzEtLjQyLTEuNzctMS0xbC02LjA2IDYuOTMtLjg2IDFoMWwtMy40Ni00Yy0uNjMtLjcyLTEuNjguMzMtMS4wNSAxLjA1eiIvPjwvZz48Y2lyY2xlIGN4PSIxNy45OCIgY3k9IjI1LjE4IiBmaWxsPSIjZjdiNTE5IiByPSI5LjIyIi8+PHBhdGggZD0ibTIyLjg2IDM0LjZhMTAuNjEgMTAuNjEgMCAxIDEgMy43Mi0xNS42Yy41Mi43MSAxLjcyIDAgMS4xOS0uN2ExMiAxMiAwIDAgMCAtMTguNzctMS4wMSAxMiAxMiAwIDAgMCAxNC42IDE4LjVjLjgtLjQuMS0xLjYtLjY5LTEuMTl6IiBmaWxsPSIjNDA0ODUyIi8+PHBhdGggZD0ibTI2LjgyIDMxYy0uMTUuMjMtLjMyLjQ2LS40OS42OGwuMTEtLjE0YTEyLjQ1IDEyLjQ1IDAgMCAxIC0xLjE0IDEuMjcuNjkuNjkgMCAwIDAgMCAxIC43LjcgMCAwIDAgMSAwIDExLjg3IDExLjg3IDAgMCAwIDEuNy0yLjA3LjY5LjY5IDAgMSAwIC0xLjE5LS43eiIgZmlsbD0iIzQwNDg1MiIvPjxwYXRoIGQ9Im0yOC41OCAyNS4xOHYuODkuMzdzMCAuMjkgMCAuMTJ2LjE5YTExLjM2IDExLjM2IDAgMCAxIC0uMzcgMS42MS42OS42OSAwIDAgMCAuNDguODUuNzEuNzEgMCAwIDAgLjg1LS40OSAxMi4xIDEyLjEgMCAwIDAgLjQ2LTMuNTQuNjkuNjkgMCAwIDAgLS42OS0uNjkuNy43IDAgMCAwIC0uNjkuNjl6IiBmaWxsPSIjNDA0ODUyIi8+PHBhdGggZD0ibTE3LjA2IDE3LjM0djguM2EuNy43IDAgMCAwIDEgLjZsNi40NS0yLjc3YS42OS42OSAwIDAgMCAuMjUtLjk0LjcxLjcxIDAgMCAwIC0uOTUtLjI1bC02LjQxIDIuNzcgMSAuNTl2LTguM2EuNjkuNjkgMCAwIDAgLTEuMzggMHoiIGZpbGw9IiM0MDQ4NTIiLz48cGF0aCBkPSJtOS40NSAyNi4xaDIuNzZhLjcuNyAwIDAgMCAuNy0uNjkuNzEuNzEgMCAwIDAgLS43LS42OWgtMi43NmEuNjkuNjkgMCAxIDAgMCAxLjM4eiIgZmlsbD0iIzQwNDg1MiIvPjxwYXRoIGQ9Im0xNy41MiAzMS42NHYyLjc2YS42OS42OSAwIDEgMCAxLjM4IDB2LTIuNzZhLjY5LjY5IDAgMSAwIC0xLjM4IDB6IiBmaWxsPSIjNDA0ODUyIi8+PC9zdmc+"
                    alt="Icon"
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="md:text-xl text-lg font-bold text-white">
                      Be your own boss
                    </h3>
                    <p className="text-white md:text-lg text-sm">
                      Work how, when, and where you want. Offer services in 50+
                      categories and set a flexible schedule and work area.
                    </p>
                  </div>
                </div>
                {/* Set Your Own Rates */}
                <div className="flex items-center space-x-4">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDggMzUuOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgZmlsbD0iI2Y3YjUxOSIgaGVpZ2h0PSIyMC43MyIgcng9IjEuMTEiIHdpZHRoPSIzOC4yIiB4PSI0Ljk2IiB5PSI5LjU3Ii8+PHJlY3QgZmlsbD0iI2ZmZiIgaGVpZ2h0PSIyMC43MyIgcng9IjEuMTEiIHdpZHRoPSIzOC4yIiB4PSI0LjgzIiB5PSI3LjQ2Ii8+PHBhdGggZD0ibTQxLjkyIDI3LjU4aC0zNS4wN2MtLjc2IDAtMS4zNi4xLTEuNDEtLjg0LS4xLTEuNzkgMC0zLjYxIDAtNS40di03LjgyYTI4LjczIDI4LjczIDAgMCAxIDAtNC44MmMuMTUtLjg3IDEuMTItLjYzIDEuODMtLjYzaDMzYy42MyAwIDEuOTQtLjI3IDIuMTUuNWE0LjkgNC45IDAgMCAxIDAgMS4yMXYxNi42MWMwIC41OC4xMiAxLjExLS42NiAxLjIxcy0uNDQgMS4yOC4zMyAxLjE4YzEuOTEtLjI2IDEuNTUtMi40MSAxLjU1LTMuOHYtMTQuODVjMC0xLjM5LjE2LTMuMTItMS43My0zLjI4LTMtLjI0LTYuMSAwLTkuMDkgMGgtMTYuNTRjLTMuMzggMC02LjgxLS4xNi0xMC4yIDAtMS41OS4wOC0xLjg2IDEuMjctMS44NiAyLjU3djE0LjU4YzAgMS4xNC0uMzggMy4yLjQxIDQuMTdzMiAuNjMgMi45MS42M2gzNC4zOGEuNjEuNjEgMCAwIDAgMC0xLjIyeiIgZmlsbD0iIzQwNDg1MiIvPjxjaXJjbGUgY3g9IjIzLjY4IiBjeT0iMTguMDYiIGZpbGw9IiNmN2I1MTkiIHI9IjUuNzQiLz48ZyBmaWxsPSIjNDA0ODUyIj48cGF0aCBkPSJtMjIuNzQgMjIuODFhNS4wOCA1LjA4IDAgMSAxIDQuMzYtOC44MWMuNTkuNTEgMS40Ni0uMzUuODctLjg2YTYuMyA2LjMgMCAwIDAgLTkuNTYgOCA2LjQxIDYuNDEgMCAwIDAgNCAyLjc4Yy43Ni4xNiAxLjA5LTEgLjMyLTEuMTh6Ii8+PHBhdGggZD0ibTI2LjIzIDIyLjI1Yy0uMi4xMS0uNC4yMS0uNjEuM2wuMTQtLjA2YTUuOSA1LjkgMCAwIDEgLTEuNDQuMzkuNjEuNjEgMCAwIDAgLS40Mi43NS42My42MyAwIDAgMCAuMjguMzYuNjkuNjkgMCAwIDAgLjQ3LjA2IDYuMDYgNi4wNiAwIDAgMCAyLjE5LS43NS42MS42MSAwIDAgMCAuMjItLjgzLjYyLjYyIDAgMCAwIC0uODMtLjIyeiIvPjxwYXRoIGQ9Im0yOC44MSAxNy44MnYuNDRhMS41IDEuNSAwIDAgMSAwIC4yMnYuMDVhNS41OCA1LjU4IDAgMCAxIC0uMTguODFjMCAuMTItLjA4LjI1LS4xMy4zN2ExIDEgMCAwIDAgMCAuMWwtLjA3LjE2YTcgNyAwIDAgMSAtLjQuNy42MS42MSAwIDAgMCAuMjIuODMuNjIuNjIgMCAwIDAgLjgzLS4yMiA2LjMzIDYuMzMgMCAwIDAgMS0zLjQ2LjYxLjYxIDAgMCAwIC0xLjIyIDB6Ii8+PHBhdGggZD0ibTIxLjUxIDI1LjU1aC05LjU3bC42MS42MWE1IDUgMCAwIDAgLTQuODgtNC44OGwuNjEuNjF2LTcuNzJsLS42MS42MWE1IDUgMCAwIDAgNC44OC00Ljg4bC0uNjEuNjFoNC42NGEuNjEuNjEgMCAwIDAgMC0xLjIyaC00LjY0YS42My42MyAwIDAgMCAtLjYxLjYxIDMuNzEgMy43MSAwIDAgMSAtMy42NiAzLjY2LjYyLjYyIDAgMCAwIC0uNi42MXY3LjcyYS42MS42MSAwIDAgMCAuNi42MSAzLjcgMy43IDAgMCAxIDMuNjYgMy42Ni42Mi42MiAwIDAgMCAuNjEuNjFoOS41N2EuNjEuNjEgMCAwIDAgMC0xLjIyeiIvPjxwYXRoIGQ9Im0yOC4yNiAyNS41NWgtMy40NWEuNjEuNjEgMCAwIDAgLS42MS42MS42Mi42MiAwIDAgMCAuNjEuNjFoMy40NWEuNjEuNjEgMCAwIDAgLjYxLS42MS42Mi42MiAwIDAgMCAtLjYxLS42MXoiLz48cGF0aCBkPSJtMjcgMTAuNTFoOWwtLjYxLS42MWE1IDUgMCAwIDAgNC44OCA0Ljg4bC0uNjEtLjYxdjcuNzJsLjYxLS42MWE1IDUgMCAwIDAgLTQuODggNC44OGwuNjEtLjYxaC00LjgxYS42MS42MSAwIDAgMCAwIDEuMjJoNC44MWEuNjIuNjIgMCAwIDAgLjYxLS42MSAzLjcxIDMuNzEgMCAwIDEgMy42Ni0zLjY2LjYyLjYyIDAgMCAwIC42MS0uNjF2LTcuNzJhLjYyLjYyIDAgMCAwIC0uNjEtLjYxIDMuNzIgMy43MiAwIDAgMSAtMy42Ni0zLjY2LjYyLjYyIDAgMCAwIC0uNjEtLjYxaC05YS42MS42MSAwIDAgMCAwIDEuMjJ6Ii8+PHBhdGggZD0ibTE5LjQgMTAuNTFoNC4yM2EuNjEuNjEgMCAwIDAgMC0xLjIyaC00LjIzYS42My42MyAwIDAgMCAtLjYxLjYxLjYyLjYyIDAgMCAwIC42MS42MXoiLz48L2c+PHBhdGggZD0ibTMuNDEgMS45MmMtLjU0LS41NC0uMzItMS45Mi0uOS0xLjkycy0uMzUgMS4zOC0uODkgMS45MmMtLjgxLjgxLTEuNjIuODctMS42MiAxLjJzLjY5LjI3IDEuNDggMS4wNmMuNDEuNDEuNjMgMi4xIDEgMi4xcy42My0xLjY5IDEtMi4xYy44Ni0uNzkgMS41Mi0uNzQgMS41Mi0xLjA2cy0uNzgtLjM5LTEuNTktMS4yeiIgZmlsbD0iI2Y3YjUxOSIvPjxwYXRoIGQ9Im00Ni4zOCAzMS42MWMtLjU0LS41NC0uMzItMS45Mi0uODktMS45MnMtLjM2IDEuMzgtLjkgMS45MmMtLjgxLjgxLTEuNjIuODgtMS42MiAxLjJzLjY5LjI3IDEuNDggMS4wNmMuNDEuNDIuNjQgMi4xIDEgMi4xcy42Mi0xLjY4IDEtMi4xYy43OS0uNzkgMS40OC0uNzMgMS40OC0xLjA2cy0uNzQtLjM5LTEuNTUtMS4yeiIgZmlsbD0iI2Y3YjUxOSIvPjwvc3ZnPg=="
                    alt="Icon"
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="md:text-xl text-lg font-bold text-white">
                      Set your own rates
                    </h3>
                    <p className="text-white md:text-lg text-sm">
                      You keep 100% of what you charge, plus tips! Invoice and
                      get paid directly through our secure payment system.
                    </p>
                  </div>
                </div>
                {/* Grow Your Business */}
                <div className="flex items-center space-x-4">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDguODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQzLjU2IDE3aC0xNS4yNmE3LjgyIDcuODIgMCAwIDAgLTIuMTYuMTUgNCA0IDAgMCAwIC0yLjg3IDMuODVjLS4wNSAyLjA2IDAgNC4xMyAwIDYuMTl2NS45NWgtMTMuMWE1LjYgNS42IDAgMCAwIC0yLjE3LjI1IDQgNCAwIDAgMCAtMi41IDMuNjl2Mi4wNSA4LjQ5YS44Ny44NyAwIDAgMCAxLjczIDB2LTEwLjFhMi41IDIuNSAwIDAgMSAxLTIuMzQgMy4yMiAzLjIyIDAgMCAxIDEuODMtLjM0aDE0YS44OC44OCAwIDAgMCAuOTQtLjg0di0xMi41MWEyLjU3IDIuNTcgMCAwIDEgMS4wNS0yLjQ5IDMuNjQgMy42NCAwIDAgMSAyLjA2LS4zNGgxNS40NWEuODcuODcgMCAwIDAgMC0xLjY2eiIgZmlsbD0iIzQwNDg1MiIvPjxwYXRoIGQ9Im00MS43NCA2LjljLS4zNC0yLjA5LS42OS00LjE4LTEtNi4yN2EuODkuODkgMCAwIDAgLTEuMS0uNjNsLTUuOSAxLjQ5LS44NS4yMWEuODcuODcgMCAwIDAgLjQ2IDEuNjhsNC4zOC0xLjExLTUuODUgOC45MmgtMTIuNjQtMS44N2EuODguODggMCAwIDAgLS44Ny44N3EwIDYuNzEtLjA1IDEzLjQydjEuMDdoLTE1LjYxYS44Ny44NyAwIDAgMCAwIDEuNzNoMTYuNDdhLjg4Ljg4IDAgMCAwIC44Ny0uODdxMC02LjcuMDUtMTMuNDJ2LTEuMDhoMTEuMTUgMi40OWExLjMxIDEuMzEgMCAwIDAgMS4yOS0uNTNjMS4xMi0xLjYzIDIuMTctMy4zIDMuMjUtNC45NWwyLjk0LTQuNDMuNzIgNC4zN2EuODcuODcgMCAxIDAgMS42Ny0uNDZ6IiBmaWxsPSIjNDA0ODUyIi8+PHBhdGggZD0ibTkuNzkgNDguODF2LTguNTZhMy4xIDMuMSAwIDAgMSAzLjA5LTMuMDloMTQuNjl2LTEzYTMuMDkgMy4wOSAwIDAgMSAzLjA5LTMuMTZoMTQuMzR2MjcuNzh6IiBmaWxsPSIjZjdiNTE5Ii8+PC9zdmc+"
                    alt="Icon"
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="md:text-xl text-lg font-bold text-white">
                      Grow your business
                    </h3>
                    <p className="text-white md:text-lg text-sm">
                      We connect you with clients in your area, and ways to
                      market yourself — so you can focus on what you do best.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <img
                  src="https://www.taskrabbit.com/v3/assets/group-61-f9c4ed29423ef98b38ccc784ddff3996.jpg"
                  alt="Tasker"
                  className="rounded-lg w-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    What is TaskRabbit?
                  </h3>
                  <p className="text-white mt-2 md:text-lg text-sm md:leading-0 leading-6">
                    TaskRabbit connects busy people in need of help with trusted
                    local Taskers who can lend a hand with everything from home
                    repairs to errands. As a Tasker, you can get paid to do what
                    you love, when and where you want — all while saving the day
                    for someone in your city.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className=" pb-16 ">
            <h2 className="text-center md:text-3xl text-2xl font-bold mb-12 text-white">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {steps.map((step) => (
                <div key={step.id} className="text-start space-y-4">
                  {step.icon}
                  <h3 className="text-xl font-bold text-white">{`${step.id}. ${step.title}`}</h3>
                  <p className="text-white ">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="py-10 ">
            <div className=" mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <p className="text-xl leading-8 font-poppins md:text-3xl text-white font-semibold mb-4">
                    &#8220;I love TaskRabbit! I was able to get out of debt,
                    tackle bills, provide for my family, and still have enough
                    room to save for future goals.&#8221;
                  </p>
                  <p className="text-white font-medium">
                    Karsheem W., New York, NY
                  </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                  <img
                    src="https://www.taskrabbit.com/v3/assets/testimonial-779c1bf4e9d375692264bddc09568995.jpg"
                    alt="Testimonial"
                    className="rounded-lg shadow-lg w-full md:w-auto max-w-md"
                  />
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                  Your questions, answered
                </h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      What&#39;s required to become a Tasker?
                    </p>
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      How do I get jobs?
                    </p>
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      Where does TaskRabbit operate?
                    </p>
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      How long does it take for my registration to be processed?
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      Do I need experience to task?
                    </p>
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      How do I get paid?
                    </p>
                    <p className="border-b border-gray-300 pb-2 font-medium text-white">
                      What categories can I task in on TaskRabbit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
