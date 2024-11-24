import React from "react";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../../components";
import Satisfactions from "../../components/Satisfactions";
import HowItWorks from "../../components/HowItWorks";
import SliderComponent from "../../components/SliderComponent";
import PopulerProject from "../../components/PopulerProject";
import styles from "../../style";

export default function LandingPage({ authTokens, handleLogout }) {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <SliderComponent />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <PopulerProject />
          <Stats />
          <Testimonials />
          <Satisfactions />
          <Clients />
          <HowItWorks />
        </div>
      </div>
    </div>
  );
}
