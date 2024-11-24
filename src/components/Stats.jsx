import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`flex justify-between  flex-row flex-wrap sm:mb-0 mb-6 mt-5 md:mt-20`}
  >
    {stats.map((stat) => (
      <div key={stat.id} className={`justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[30.89px] text-[18.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[18.45px] text-[12.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
