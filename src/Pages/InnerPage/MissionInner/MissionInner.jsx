import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import missionImg from "/images/business-concept-with-team-close-up.jpg";
import missionImg2 from "/images/goals-target-aspiration-perforated-paper-bullseye.jpg";
import missionImg3 from "/images/3d-rendering-arrow-hitting-target.jpg";
import { Link } from "react-router-dom";
import Feature from "../../../Component2/Feature/Feature";
import Brand from "../../../Component1/Brand/Brand";

const MissionInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Mission, Vision & Goals"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Mission, Vision & Goals"}
      />
      <section className="relative pt-28 pb-[120px] bg-[#f5f8ed] z-10 mt-5">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0">
            <div>
              <img src={missionImg} draggable="false" />
            </div>
            <div className="ml-10 2xl:ml-20 mr-10">
              <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                Our Mission
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  We aim to provide innovative web and mobile solutions that drive business growth, ensuring scalability, security, and seamless user experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  Our mission is to bridge the gap between technology and business, offering custom web and app development services tailored to our clients' needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  We are committed to helping businesses succeed in the digital world by delivering high-performance websites and applications.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md mb-8 lg:mb-0">
            <div className="ml-10 mr-10 2xl:mr-20">
              <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                Our Vision
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  Our vision is to be the leading provider of high-quality, innovative, and reliable web and app development solutions that help businesses thrive.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  We envision a world where businesses of all sizes have access to cutting-edge technology solutions that drive their digital transformation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  Our goal is to make technology accessible, user-friendly, and efficient, empowering businesses to achieve their objectives through tailored solutions.
                </p>
              </div>
            </div>
            <div>
              <img src={missionImg2} draggable="false" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-0 bg-BodyBg-0 rounded-md">
            <div>
              <img src={missionImg3} draggable="false" />
            </div>
            <div className="ml-10 2xl:ml-20 mr-10">
              <h2 className="font-Rajdhani font-bold text-HeadingColor-0 text-[42px] mb-8">
                Our Goal
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  Our goal is to provide high-quality IT services, including web and mobile app development, that foster innovation, scalability, and seamless user experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  We aim to offer customized, user-friendly solutions in software and mobile app development, meeting the latest technological standards and ensuring customer satisfaction.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-10 mb-16">
                <div className="size-11 rounded-full bg-white text-xl flex items-center justify-center">
                  <FiCheck />
                </div>
                <p className="font-Nunito text-TextColor2-0 flex-1">
                  We are focused on delivering comprehensive web solutions that drive online growth and enhance operational efficiency for businesses across various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Feature /> */}
      {/* <Brand /> */}
    </>
  );
};

export default MissionInner;
