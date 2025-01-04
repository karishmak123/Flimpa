import { Link } from "react-router-dom";
import footerLogo from "/images/logo-2.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FiArrowRightCircle } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-Nunito text-white opacity-80 mt-6 mb-8 w-10/12">
  At BlueTech Digital, we specialize in web and app development, delivering tailored solutions that empower businesses to thrive. 
  From strategy to execution, our digital agency creates cutting-edge infrastructures and innovative experiences to drive success.
</p>


            <div>
              <Link to={"/about2"}>
                <button className="primary-btn">
                  {`Discover More`}
                  <GoArrowRight size={"22"} />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/about2"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/projec"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                   Our Project
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Latest Blog
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[33px]">
              Our Services
            </h4>
            <ul>
              <li>
                <Link to={"/service_details"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Website Design
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/service_details2"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                   Website Developemnt
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/service_details5"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                    Digital Marketing
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/service_details4"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-5">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                   App Development
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/service_details6"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FiArrowRightCircle className="text-base text-PrimaryColor-0" />
                   Website Application
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[30px]">
            Get in Touch!
            </h4>
            <p className="font-Nunito text-white opacity-80 font-medium mb-[26px]">
            Your Feedback Drives Us
            </p>
            <a href="/contact" className="relative">
  <button
    type="submit"
    className="h-[50px] rounded border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-[30px] py-2 text-white font-Nunito flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:bg-SecondaryColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
  >
    Contact
  </button>
</a>

          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-6 mt-[108px] border-t border-BorderColor-0">
          <div>
          <p className="font-Nunito text-white">
  © 2025 BlueTech Digital. Designed and Developed by BlueTech Digital.
</p>

          </div>
          <div>
            <ul className="flex gap-3">
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="size-9 rounded-full text-sm bg-[#ffffff2f] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
