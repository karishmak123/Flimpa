import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaRegFolderOpen,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiCheckFill } from "react-icons/ri";
import { FaCogs,FaShieldAlt  } from "react-icons/fa";
const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Web Application Development"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />

      {/* Overview Section */}
      <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative mt-5">
      {/* <img
        src={aboutShape}
        draggable={false}
        className="absolute top-0 right-0"
      /> */}
  <div className="Container">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center">
    <div className="relative z-10">
      <img src="/images/web-application-development.jpg" draggable="false" />
    </div>
    <div className="relative">
      <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
        Why Choose Our Digital Marketing Services?
      </h1>
      <p className="font-Nunito text-TextColor2-0 pb-8">
        In today's fast-paced digital world, effective marketing is the key to unlocking the full potential of your business. Our digital marketing services are tailored to drive results, enhance brand visibility, and foster long-lasting relationships with your audience. Whether you’re looking to build your brand or reach new customers, we leverage cutting-edge technology and proven strategies to help you succeed.
      </p>
      <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
        <ul>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            Data-Driven Campaigns for Maximum Impact
          </li>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            Targeted Strategies to Grow Your Audience
          </li>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            Real-Time Analytics to Track Your Success
          </li>
          <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
            <span className="text-PrimaryColor-0">
              <RiCheckFill size={"24"} />
            </span>
            Dedicated 24/7 Support to Address Your Needs
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </section>

     {/* Features Section */}
<section className="py-16" style={{background: "rgb(2 21 51)", marginBottom:"50px"}}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white">Key Features of Our Web Application Development Services</h2>
    <p className="mt-4 text-lg text-white">
      Our web application development services are designed to deliver high-quality, scalable, and secure solutions. Explore the key features we provide:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Feature 1 */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaDatabase className="text-blue-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Scalable Database Solutions</h3>
        <p className="mt-2 text-gray-600">
          Our database management systems are designed for scalability, ensuring your application can handle growing amounts of data and user requests with ease.
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaReact className="text-blue-500 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Responsive Frontend Development</h3>
        <p className="mt-2 text-gray-600">
          We specialize in building dynamic and engaging user interfaces using React.js, Angular, and other modern frameworks, ensuring your web app is responsive across all devices.
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaNodeJs className="text-green-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Efficient Backend Architecture</h3>
        <p className="mt-2 text-gray-600">
          Using Node.js and other technologies, we build high-performance backend systems that provide quick data processing and seamless integrations.
        </p>
      </div>
      
      {/* Feature 4 */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaShieldAlt className="text-purple-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Advanced Security Measures</h3>
        <p className="mt-2 text-gray-600">
          We ensure the highest level of security by implementing encryption, secure authentication, and rigorous security protocols to protect your web app and user data.
        </p>
      </div>
      
      {/* Feature 5 */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaCloud className="text-yellow-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Cloud Integration</h3>
        <p className="mt-2 text-gray-600">
          Our cloud-based solutions guarantee scalability, high availability, and better performance, ensuring your application can handle fluctuations in user demand.
        </p>
      </div>
      
      {/* Feature 6 */}
      <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaCogs className="text-teal-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Seamless Integrations</h3>
        <p className="mt-2 text-gray-600">
          We offer smooth integration with third-party services, APIs, and payment gateways, making sure your web application works efficiently with other platforms.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Technologies We Use Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies We Use for Web Application Development</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team employs cutting-edge tools and frameworks to build modern web applications. From frontend to backend, we ensure every component works seamlessly.
          </p>
          <div className="flex justify-center gap-8">
         
            <div className="bg-gradient-to-r from-red-400 via-red-600 to-red-800 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaHtml5 className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaReact className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaNodeJs className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaDatabase className="text-white text-6xl" />
            </div>

            <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300">
              <FaCloud className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </section> */}

    
    </>
  );
};

export default ServiceDetails;
