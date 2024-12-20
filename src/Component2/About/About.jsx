import aboutThumb from "/images/about-thumb2.png";
import aboutAward from "/images/about-award-icon.png";
import aboutShape from "/images/about-shape1.png";
import aboutShape2 from "/images/about-shape-2.png";
import phoneIcon from "/images/about-call-icon.png";
import { Link } from "react-router-dom";
import { RiCheckFill } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { BiRightTopArrowCircle } from "react-icons/bi";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="pt-3 pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="md:w-full lg:w 2xl:-ml-[38px] 2xl:max-w-[inherit]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:-ml-[38px]">
              <button className="h-14 w-14 sm:h-[100px] sm:w-[100px] border-2 border-white rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                <IoMdPlay
                  size={"30"}
                  className="text-white"
                  onClick={() => setToggler(!toggler)}
                />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
            <div className="absolute top-0 right-0 sm:flex gap-5 items-center animate-dance3 hidden">
              <div>
                <img src={aboutAward} draggable={false} />
              </div>
              <div>
                <h5 className="font-Rajdhani font-semibold text-xl leading-8 text-HeadingColor-0">
                  Award Wining
                </h5>
                <h5 className="font-Rajdhani font-semibold text-xl leading-8 text-HeadingColor-0 border-t border-HeadingColor-0">
                  Best Services
                </h5>
              </div>
            </div>
            <img
              src={aboutShape}
              draggable="false"
              className="absolute bottom-10 left-10 -z-10 animate-movebtn hidden sm:block"
            />
          </div>
          <div className="relative">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              IT Support For Business
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-4">
              Ensuring Your Success Trusted <br />
              IT Services Source
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-7">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>
            <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
              <ul>
                <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                  <span className="text-PrimaryColor-0">
                    <RiCheckFill size={"24"} />
                  </span>
                  Holisticly matrix highly modelling
                </li>
                <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                  <span className="text-PrimaryColor-0">
                    <RiCheckFill size={"24"} />
                  </span>
                  Growing audience for Business
                </li>
                <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                  <span className="text-PrimaryColor-0">
                    <RiCheckFill size={"24"} />
                  </span>
                  24/7 Technical Supports
                </li>
              </ul>
              <div className="bg-[#eff6fe] rounded-lg inline-block px-7 py-8 w-[300px]">
                <Link to={"/"} className="inline-block">
                  <button className="text-2xl font-Rajdhani font-semibold text-HeadingColor-0 flex items-center gap-3">
                    <img src={phoneIcon} draggable={false} />
                    +980 123 (456) 780
                  </button>
                </Link>
              </div>
            </div>
            <Link to={"/about"} className="mt-7 inline-block">
              <button className="primary-btn3">
                {`More About`}
                <BiRightTopArrowCircle size={"20"} />
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
