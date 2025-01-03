import aboutThumb from "/images/skyscrapers-from-low-angle-view_1359-159.jpg";
import aboutIcon from "/images/about-icon1.png";
import aboutIcon2 from "/images/about-icon2.png";
import aboutIcon3 from "/images/about-icon3.png";
import aboutIcon4 from "/images/about-icon4.png";
import aboutShape from "/images/about-shape.png";
import aboutShape2 from "/images/about-shape2.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <section className="py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative">
    <div className="Container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
        <div className="relative z-10">
          <img src={aboutThumb} draggable="false" />
          <div className="absolute top-0 left-0">
            {/* <div className="bg-PrimaryColor-0 pb-6 pt-5 flex flex-col justify-between overflow-hidden rounded-lg h-[117px] sm:h-[208px] lg:h-[180px] xl:h-[208px] w-[92px] sm:w-[170px] lg:w-[140px] xl:w-[170px] items-center text-center relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-0 sm:before:w-8 before:h-[2px] before:bg-white after:absolute after:-top-14 after:-left-[2px] after:w-0 sm:after:w-[174px] after:h-[170px] after:bg-[#1164ED] after:-z-10 after:rounded-full">
              <CountUp
                start={-9}
                end={22}
                suffix=" Years"
                className="text-3xl sm:text-[56px] font-Rajdhani font-bold text-white"
              />
              <h6 className="font-Rajdhani text-sm leading-4 sm:text-lg sm:leading-5 font-semibold text-white">
                Years Of <br /> Excellence
              </h6>
            </div> */}
          </div>
          <img
            src={aboutShape}
            draggable="false"
            className="absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block"
          />
        </div>
        <div className="relative">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Empowering Digital Growth
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
            Tailored IT Solutions <br />
            For Business Success
          </h1>
          <p className="font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-[1px] before:w-[50px] before:h-[1px] before:bg-PrimaryColor-0 before:animate-dance4">
            We are your trusted partner in digital transformation. Our team
            specializes in creating cutting-edge web and mobile applications
            designed to boost efficiency, enhance user experiences, and drive
            business growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] my-10">
            <div className="flex gap-5 items-center">
              <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                <img src={aboutIcon} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                  High-Quality Development
                </h5>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                <img src={aboutIcon2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                  Skilled & Passionate Team
                </h5>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                <img src={aboutIcon3} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                  Round-the-Clock Support
                </h5>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                <img src={aboutIcon4} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                  Customer-Driven Results
                </h5>
              </div>
            </div>
          </div>
          <Link to={"/about"}>
            <button className="primary-btn">
              {`Discover More`}
              <GoArrowRight size={"22"} />
            </button>
          </Link>
          <img
            src={aboutShape2}
            draggable="false"
            className="absolute -bottom-0 left-1/2 animate-swing hidden sm:block"
          />
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;
