import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import wedgetIcon from "/images/widget-icon.png";
import serviceDetailsIcon from "/images/services-details-icon-1.png";
import serviceDetailsIcon2 from "/images/services-details-icon-2.png";
import serviceDetailsThumb from "/images/service-details.jpg";
import projectDetialsBoxImg from "/images/services-details-benifis-thumb-1.png";
import projectDetialsBoxImg2 from "/images/services-details-benifis-thumb-2.png";
import { RiCheckFill } from "react-icons/ri";
import { SiDrupal, SiWordpress, SiPhp, SiYii, SiCodeigniter, SiLaravel } from "react-icons/si";
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

const ServiceDetails2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Website Development"}
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
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center">
    <div className="relative z-10">
      <img src="/images/web-devlopment.jpg" draggable="false" />
    </div>
    <div className="relative">
      <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
        Why Choose Our Website Development Services?
      </h1>
      <p className="font-Nunito text-TextColor2-0 pb-8">
        At TopTech, we craft custom websites that reflect your brand and engage users. Our responsive, SEO-friendly solutions deliver results, ensuring your site is fast, mobile-optimized, and easy to maintain.
      </p>
      <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
        <ul>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            Custom, responsive designs
          </li>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            SEO best practices
          </li>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            24/7 support & maintenance
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </section>

{/* Features Section */}
<section className="py-16" style={{ background: "rgb(2 21 51)" , marginBottom:"50px"}}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white">Core Features of Our Web Development Services</h2>
    <p className="mt-4 text-lg text-white">We offer a comprehensive set of features that ensure your web development project stands out:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiLaravel className="text-red-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">LARAVEL DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Build robust, scalable, and feature-rich web applications using Laravel’s powerful framework and cutting-edge capabilities.</p>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiCodeigniter className="text-orange-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">CODEIGNITER DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Leverage the simplicity and flexibility of CodeIgniter to deliver high-performing web applications tailored to your business needs.</p>
      </div>
      
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiYii className="text-purple-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">YII DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Develop high-speed, secure, and efficient web solutions using Yii for modern, scalable applications.</p>
      </div>
      
      <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiPhp className="text-blue-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">CAKE PHP DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Simplify your web application development process with CakePHP’s robust features and rapid development capabilities.</p>
      </div>
      
      <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiWordpress className="text-blue-700 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">WORDPRESS DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Empower your online presence with custom WordPress solutions that are easy to manage and optimized for performance.</p>
      </div>
      
      <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <SiDrupal className="text-teal-700 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">DRUPAL DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">Deliver enterprise-grade websites with Drupal’s powerful content management system and unmatched scalability.</p>
      </div>
    
    </div>
  </div>
</section>


{/* Technologies We Use Section */}
{/* <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies We Use for Web Development</h2>
    <p className="text-lg text-gray-600 mb-8">Our team uses cutting-edge technologies to bring your web development project to life with high performance, scalability, and security.</p>
    <div className="flex justify-center gap-8">
     
      <div className="bg-gradient-to-r from-red-400 via-red-600 to-red-800 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <FaHtml5 className="text-white text-6xl" />
      </div>

      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <FaCss3Alt className="text-white text-6xl" />
      </div>

      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <FaReact className="text-white text-6xl" />
      </div>

      <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <FaNodeJs className="text-white text-6xl" />
      </div>

      
      <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <img src="/images/bootstrap-icon.svg" alt="Bootstrap" className="w-12 h-12" />
      </div>

      <div className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <img src="/images/wordpress-icon.png" alt="WordPress" className="w-12 h-12" />
      </div>

      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
        <img src="/images/figma-icon.svg" alt="Figma" className="w-12 h-12" />
      </div>
    </div>
  </div>
</section> */}




     





    </>
  );
};

export default ServiceDetails2;
