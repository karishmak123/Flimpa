import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import wedgetIcon from "/images/widget-icon.png";
import serviceDetailsIcon from "/images/services-details-icon-1.png";
import serviceDetailsIcon2 from "/images/services-details-icon-2.png";
import serviceDetailsThumb from "/images/service-details.jpg";
import projectDetialsBoxImg from "/images/services-details-benifis-thumb-1.png";
import projectDetialsBoxImg2 from "/images/services-details-benifis-thumb-2.png";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineSolution } from "react-icons/ai";

const ServiceDetails2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Digital Marketing"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />
      <section className="py-[120px] bg-white">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[50px]">
            <div className="col-span-3 lg:col-span-2">
              <img
                src={serviceDetailsThumb}
                draggable="false"
                className="w-full"
              />
              <h2 className="font-Rajdhani font-bold text-2xl sm:text-4xl text-HeadingColor-0 mt-8">
                Digital Marketing Services
              </h2>
              <p className="font-Nunito text-TextColor2-0 mt-6 mb-11">
              Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market situation for each industry domain, WebSpread Technologies Pvt Ltd has prepared itself for operational and ensured SEO services for any domain.
              </p>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                    SEO
                    </h6>
                    <p className="font-Nunito text-TextColor2-0 mt-3">
                    Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon2} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                    SMO
                    </h6>
                    <p className="font-Nunito text-TextColor2-0 mt-3">
                    Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                    SEARCH ENGINE MARKETING
                    </h6>
                    <p className="font-Nunito text-TextColor2-0 mt-3">
                    Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon2} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                    LOCAL SEO
                    </h6>
                    <p className="font-Nunito text-TextColor2-0 mt-3">
                    Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-7 mt-5">
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={serviceDetailsIcon} draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Rajdhani font-semibold text-[22px] text-HeadingColor-0">
                    GOOGLE ADDWORDS
                    </h6>
                    <p className="font-Nunito text-TextColor2-0 mt-3">
Our services guarantee optimized searches and stable ranking of your web pages Evaluating present competitive market   
</p>               </div>
                </div>
              
              </div>
             
            
         
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Rajdhani font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Web Development
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/digital-marketing"}>
                      <button className="w-full font-Nunito text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-PrimaryColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-white transition-all duration-500 group-hover:text-white" />
                          Digital Marketing
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          IT Solution
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          App Development
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Web Design
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          UI/UX Design
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
          
              <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/sidber-contact.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                <img src={wedgetIcon} draggable="false" />
                <h6 className="font-Nunito font-medium text-lg text-white mt-5 mb-2">
                  Call Us Anytime
                </h6>
                <Link to={"/"}>
                  <button className="font-Nunito font-semibold text-2xl text-white">
                    +123 (4567) 890
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Nunito text-white flex gap-2 items-center mt-4 mb-[52px]">
                    <MdEmail className="text-xl text-PrimaryColor-0" />
                    example@gmail.com
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Nunito text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails2;
