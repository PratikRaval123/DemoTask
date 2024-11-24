import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import styles from "../style";

const Navbar = ({ authTokens, handleLogout }) => {
  console.log(authTokens, "authTokens");
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-transparent w-full overflow-hidden  ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6  justify-between items-center navbar container m-auto">
            <Link to="/">
              <h1 className="font-poppins font-semibold text-[30px] leading-[34px] text-black">
                HoneyBook.
              </h1>
            </Link>

            <ul className="list sm:flex  md:flex justify-end hidden items-center flex-1">
              {navLinks?.map((nav, index) => {
                if (nav.id === "login" && authTokens) return null;
                if (nav.id === "signOut" && !authTokens) return null;
                return (
                  <Link
                    to={`/${nav.id}`}
                    key={nav.id}
                    className={`font-poppins font-normal  cursor-pointer text-[17px] ${
                      active === nav.title ? "text-gray" : "text-black"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  >
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  </Link>
                );
              })}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center ">
              <div
                className={`w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black cursor-pointer`}
                onClick={() => setToggle(!toggle)}
              >
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[20px] h-[20px] object-contain"
                />
              </div>

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6  absolute top-20 bg-black  right-0 z-10 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => {
                    if (nav.id === "login" && authTokens) return null;
                    if (nav.id === "signOut" && !authTokens) return null;
                    return (
                      <Link
                        to={`/${nav.id}`}
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                          active === nav.title ? "text-gray" : "text-white"
                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
