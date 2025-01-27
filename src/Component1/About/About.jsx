import React, { useEffect } from "react";
import aboutThumb from "/images/skyscrapers-from-low-angle-view_1359-159.jpg";
import aboutIcon from "/images/about-icon1.png";
import aboutIcon2 from "/images/about-icon2.png";
import aboutIcon3 from "/images/about-icon3.png";
import aboutIcon4 from "/images/about-icon4.png";
import aboutShape from "/images/about-shape.png";
import aboutShape2 from "/images/about-shape2.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import AOS CSS

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: true, // Animation happens only once when element enters the viewport
    });
  }, []);

  return (
    <section className="py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          {/* Left Side: Image */}
          <div className="relative z-10" data-aos="fade-up">
            <img src={aboutThumb} draggable="false" />
            <div className="absolute top-0 left-0">
              <img
                src={aboutShape}
                draggable="false"
                className="absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block"
              />
            </div>
          </div>

          {/* Right Side: Text and Features */}
          <div className="relative">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0" data-aos="fade-up">
              Empowering Digital Growth
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3" data-aos="fade-up">
              Tailored IT Solutions <br />
              For Business Success
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-[1px] before:w-[50px] before:h-[1px] before:bg-PrimaryColor-0 before:animate-dance4" data-aos="fade-up">
              We are your trusted partner in digital transformation. Our team
              specializes in creating cutting-edge web and mobile applications
              designed to boost efficiency, enhance user experiences, and drive
              business growth.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] my-10">
              <div className="flex gap-5 items-center" data-aos="fade-left">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src={aboutIcon} draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    High-Quality Development
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center" data-aos="fade-right">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src={aboutIcon2} draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    Skilled & Passionate Team
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center" data-aos="fade-left">
                <div className="w-[70px] h-[70px] rounded bg-white flex justify-center items-center">
                  <img src={aboutIcon3} draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                    Round-the-Clock Support
                  </h5>
                </div>
              </div>
              <div className="flex gap-5 items-center" data-aos="fade-right">
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

            {/* Discover More Button */}
            <Link to={"/about2"}>
              <button className="primary-btn" data-aos="fade-up">
                {`Discover More`}
                <GoArrowRight size={"22"} />
              </button>
            </Link>

            {/* About Shape */}
            <img
              src={aboutShape2}
              draggable="false"
              className="absolute -bottom-0 left-1/2 animate-swing hidden sm:block"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
