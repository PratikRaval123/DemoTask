import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <h1 className="font-poppins font-semibold text-[30px] leading-[34px] text-black">
              HoneyBook.
            </h1>
            <p
              className={`${styles.paragraph} mt-4 max-w-[312px] md:text-[18px] text-[15px] text-black`}
            >
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
              >
                <h4 className="font-poppins font-medium md:text-[18px] text-[15px] leading-[27px] text-black">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.link}
                      className={`font-poppins font-normal md:text-[16px] text-[14px] leading-[24px] text-black hover:text-gray cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      } block`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center md:text-[18px] text-[15px] leading-[27px] text-black">
            Copyright Ⓒ 2023 Taskrabbit. All Rights Reserved.
          </p>

          {/* i */}
        </div>
      </section>
    </div>
  </div>
);

export default Footer;
