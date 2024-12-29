import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaRegFolderOpen,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
  FaArrowRight,
} from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiCheckFill } from "react-icons/ri";
import { FaPaintBrush, FaCodeBranch ,FaTools } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"App Development"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />
  
  <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative mt-5">
  <div className="Container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center">
      <div className="relative z-10">
        <img src="/images/mobile-development.jpg" draggable="false" />
      </div>
      <div className="relative">
        <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
          Why Choose Our App Development?
        </h1>
        <p className="font-Nunito text-TextColor2-0 pb-8">
          Our app development focuses on delivering innovative, user-friendly, and scalable solutions. We tailor our services to meet your unique business needs, ensuring that your app not only works but also supports your growth and success.
        </p>
        <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
          <ul>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              End-to-End Solutions
            </li>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              Scalable & Flexible
            </li>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              24/7 Support
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  </div>
</section>



      {/* Features Section */}
<section className="py-16" style={{background:"rgb(2 21 51)", marginBottom:"50px"}}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white">Key Features of Our Mobile App Development Services</h2>
    <p className="mt-4 text-lg text-white">
      Our mobile app development services are built to create seamless, high-quality experiences on mobile devices. Check out the key features we offer:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      
      {/* Android App Development */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaAndroid className="text-green-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">ANDROID APP DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">
          Our Android app development services ensure smooth performance and scalability on all Android devices. We create native apps that deliver top-tier functionality, speed, and user engagement.
        </p>
      </div>

      {/* iOS App Development */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaApple className="text-blue-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">IOS APP DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">
          We provide optimized iOS app development, ensuring compatibility across all Apple devices. Our apps offer excellent responsiveness and premium user experiences on iPhone and iPad.
        </p>
      </div>

      {/* Mobile App UI/UX Design */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaPaintBrush className="text-yellow-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">MOBILE APP UI/UX DESIGN</h3>
        <p className="mt-2 text-gray-600">
          We specialize in designing user-friendly interfaces that offer seamless and intuitive interactions, ensuring a smooth journey for your app users from start to finish.
        </p>
      </div>

      {/* Mobile App Maintenance */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaTools className="text-purple-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">MOBILE APP MAINTENANCE</h3>
        <p className="mt-2 text-gray-600">
          We provide comprehensive maintenance and updates for your apps, ensuring they stay functional, secure, and competitive with regular updates and optimizations.
        </p>
      </div>

      {/* Hybrid App Development */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaCodeBranch className="text-orange-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">HYBRID APP DEVELOPMENT</h3>
        <p className="mt-2 text-gray-600">
          Our hybrid apps offer a perfect balance between performance and flexibility, providing cost-effective solutions for businesses looking to target both iOS and Android platforms with a single codebase.
        </p>
      </div>

      {/* Custom App Solutions */}
      <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <AiOutlineSolution className="text-teal-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold">CUSTOM APP SOLUTIONS</h3>
        <p className="mt-2 text-gray-600">
          We offer tailored app solutions that meet your business needs, from third-party integrations and payment gateways to APIs and custom features, ensuring your app stands out.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Technologies We Use Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies We Use for Mobile App Development</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team uses the latest mobile development technologies to build apps that are feature-rich, fast, and scalable. Whether you're building for iOS, Android, or both, we have you covered.
          </p>
          <div className="flex justify-center gap-8">
          
            <div className="bg-gradient-to-r from-red-400 via-red-600 to-red-800 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaReact className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaAndroid className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaApple className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <img src="/images/flutter-icon.svg" alt="Flutter" className="w-12 h-12" />
            </div>

            <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <img src="/images/react-native-icon.svg" alt="React Native" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section> */}

   
    </>
  );
};

export default ServiceDetails;
