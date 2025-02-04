import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import wedgetIcon from "/images/widget-icon.png";
import serviceDetailsIcon from "/images/services-details-icon-1.png";
import serviceDetailsIcon2 from "/images/services-details-icon-2.png";
import serviceDetailsThumb from "/images/service-details.jpg";
import projectDetialsBoxImg from "/images/services-details-benifis-thumb-1.png";
import projectDetialsBoxImg2 from "/images/services-details-benifis-thumb-2.png";
import { AiOutlineMobile } from 'react-icons/ai';
import { HiOutlineCode, HiOutlineSparkles, HiOutlineDocument } from "react-icons/hi";
import { BsBrush } from "react-icons/bs";

import {
  FaArrowRight,
  FaArrowRightLong,
  FaRegFolderOpen,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineSolution } from "react-icons/ai";
import aboutThumb from "/images/about3-thumb.png";
import aboutShape from "/images/about-shape.jpg";
import aboutIcon from "/images/about3-icon1.png";
import aboutIcon2 from "/images/about3-icon2.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import aboutAuthor from "/images/about-author.jpg";
import aboutAward from "/images/about-award-icon.png";

import aboutShape2 from "/images/about-shape-2.png";
import phoneIcon from "/images/about-call-icon.png";
import { RiCheckFill } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { BiRightTopArrowCircle } from "react-icons/bi";


const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Website Design"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />
      <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative mt-5">
        {/* <img
        src={aboutShape}
        draggable={false}
        className="absolute top-0 right-0"
      /> */}
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center" style={{marginTop:"8%"}}>
            <div className="relative z-10">
              <img src="/images/web-design-image.jpg" draggable="false" alt="Web Design Concepts" />
            </div>
            <div className="relative">
              <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
                Why Choose Our Website Design?
              </h1>
              <p className="font-Nunito text-TextColor2-0 pb-8">
                We create custom website designs that elevate your online presence, engage visitors, and drive conversions. Our focus is on seamless navigation and impactful visuals.
              </p>
              <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
                <ul>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    Designs that reflect your brand and attract your audience.
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    User-friendly and optimized for higher engagement.
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    Ongoing support to keep your site running smoothly.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 " style={{ background: "rgb(2 21 51)" , marginBottom:"50px"}}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <p className="mt-4 text-lg text-white">
            Our web design services come with a wide range of features that ensure a smooth and powerful user experience:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <AiOutlineMobile className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Responsive Design</h3>
              <p className="mt-2 text-gray-600">
                Your website will seamlessly adapt to any device, ensuring a perfect user experience on smartphones, tablets, and desktops.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <HiOutlineCode className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">PSD to HTML</h3>
              <p className="mt-2 text-gray-600">
                Transforming your PSD designs into pixel-perfect, fully functional, and responsive HTML/CSS templates.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <HiOutlineSparkles className="text-yellow-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Logo Design</h3>
              <p className="mt-2 text-gray-600">
                Crafting memorable logos that embody your brand's identity and make a lasting impression on your audience.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <BsBrush className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">UI Design</h3>
              <p className="mt-2 text-gray-600">
                Designing intuitive and visually appealing user interfaces to enhance user engagement and satisfaction.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <HiOutlineDocument className="text-orange-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Brochure Design</h3>
              <p className="mt-2 text-gray-600">
                Creating professionally designed brochures that effectively communicate your brand message and offerings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
