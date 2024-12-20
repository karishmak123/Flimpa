import aboutThumb from "/images/about-inner-thumb.png";
import aboutIcon from "/images/about-icon.png";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-[120px] bg-[url(/images/about-bg.jpg)] bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" alt="About Image" />
          </div>
          <div className="relative">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Trusted IT Solutions for Your Business
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
              Delivering Innovative IT Services to Boost Your Business Growth
            </h1>
            <p className="font-Nunito text-TextColor2-0">
              We specialize in providing high-quality IT services to businesses across various industries. From web development and software solutions to mobile apps and eCommerce platforms, we create customized solutions that help our clients succeed in the digital world. Our team is dedicated to offering cutting-edge technology and exceptional customer service.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] mt-10 mb-7 border-b-2 border-PrimaryColor-0 relative before:absolute before:bottom-0 before:left-0 before:bg-[#d5d5d5] before:w-full before:h-1 pb-12">
              {/* <div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={aboutIcon} draggable="false" alt="IT Management Icon" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                      Expert IT Management
                    </h5>
                  </div>
                </div>
                <p className="font-Nunito text-TextColor2-0 pt-3">
                  Our IT management solutions ensure that your technology infrastructure is always running at its best, driving business efficiency and success.
                </p>
              </div> */}
              {/* <div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={aboutIcon} draggable="false" alt="Proven Success Icon" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0">
                      Proven Success
                    </h5>
                  </div>
                </div>
                <p className="font-Nunito text-TextColor2-0 pt-3">
                  We have helped numerous companies improve their digital presence and business performance with our reliable IT services.
                </p>
              </div> */}
            </div>
            <div className="flex items-center gap-5">
              <Link to={"/mission_inner"}>
                <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-Nunito">
                  Our Mission
                </button>
              </Link>
              <Link to={"/vision_inner"}>
                <button className="px-8 py-[6px] rounded-full bg-PrimaryColor-0 text-white font-Nunito">
                  Our Vision
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
