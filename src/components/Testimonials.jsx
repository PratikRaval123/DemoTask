import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="mx-auto flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-[1] lg:gap-20">
      <h2 className="font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[76.8px] leading-[40.8px] w-full">
        See what happy customers are saying about Taskrabbit{" "}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 mx-auto feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
