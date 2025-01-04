import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaRegFolderOpen,
  FaChartLine,
  FaBullhorn,
  // FaSearch,
  // FaMobileAlt,
  FaUsers,
} from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { RiCheckFill } from "react-icons/ri";
import { FaSearch,  FaSearchDollar, FaMapMarkerAlt, FaGoogle } from 'react-icons/fa';


const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Digital Marketing"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />

      {/* Overview Section */}
      <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative mt-5">
  <div className="Container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center" style={{marginTop:"8%"}}>
      <div className="relative z-10">
        <img src="/images/digital-marketing.jpg" draggable="false" />
      </div>
      <div className="relative">
        <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
          Why Choose Our Digital Marketing?
        </h1>
        <p className="font-Nunito text-TextColor2-0 pb-8">
        We combine innovative strategies and cutting-edge technologies to elevate your online presence. Our digital marketing services are tailored to meet the unique needs of your business, whether you’re looking to increase your reach, engage more customers, or boost your revenue.
        </p>
        <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
          <ul>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              Customized strategies that align with your business goals
            </li>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              Targeted campaigns to engage your ideal audience
            </li>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              Transparent reporting to track progress and ROI
            </li>
            <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
              <span className="text-PrimaryColor-0">
                <RiCheckFill size={"24"} />
              </span>
              Dedicated support team to assist you every step of the way
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className="py-16" style={{background:"rgb(2 21 51)", marginBottom:"50px"}}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white">Key Features of Our Digital Marketing Services</h2>
    <p className="mt-4 text-lg text-white">
      Unlock the full potential of your brand with our feature-rich digital marketing offerings. Here's what makes us stand out:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaSearch className="text-yellow-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">SEO Optimization</h3>
        <p className="mt-2 text-gray-600">
          Drive organic traffic and boost your website’s ranking with proven SEO strategies that ensure long-term results.
        </p>
      </div>
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaBullhorn className="text-red-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Social Media Optimization (SMO)</h3>
        <p className="mt-2 text-gray-600">
          Engage your audience, enhance brand awareness, and foster loyalty across major social platforms with our SMO services.
        </p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaSearchDollar className="text-blue-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Search Engine Marketing (SEM)</h3>
        <p className="mt-2 text-gray-600">
          Drive high-quality traffic through paid search campaigns, ensuring your brand appears on the top search results.
        </p>
      </div>
      <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaMapMarkerAlt className="text-green-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Local SEO</h3>
        <p className="mt-2 text-gray-600">
          Improve your visibility in local search results and connect with nearby customers with our expert Local SEO services.
        </p>
      </div>
      <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <FaGoogle className="text-yellow-600 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900">Google AdWords</h3>
        <p className="mt-2 text-gray-600">
          Reach your target audience effectively and drive conversions with Google AdWords campaigns that focus on results.
        </p>
      </div>
    </div>
  </div>
</section>


   

   
    </>
  );
};

export default ServiceDetails;