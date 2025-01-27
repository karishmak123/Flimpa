import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { RiCheckFill, RiShoppingCartFill } from "react-icons/ri";;
import { FaTags } from "react-icons/fa";
import { FaOpencart, FaMagento, FaShopify } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import {
  FaArrowRightLong,
} from "react-icons/fa6";

const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Ecommerce Development"}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center" style={{ marginTop: "8%" }}>
            <div className="relative z-10">
              <img src="/images/ecommerce-development.jpg" alt="Ecommerce Development" draggable="false" />
            </div>
            <div className="relative">
              <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
                Why Choose Our Ecommerce Development?
              </h1>
              <p className="font-Nunito text-TextColor2-0 pb-4">
                We create customized, secure, and scalable eCommerce solutions to help your business grow. Our user-focused designs ensure an exceptional shopping experience, driving conversions and customer loyalty.
              </p>
              <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
                <ul>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    Custom-built for your business needs
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    Responsive design for improved user experience
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    24/7 support for seamless operation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16" style={{ background: "rgb(2 21 51)", marginBottom: "50px" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Key Features of Our Ecommerce Development Services</h2>
          <p className="mt-4 text-lg text-white">Our ecommerce solutions come packed with powerful features to enhance your online store and boost sales:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <RiShoppingCartFill className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">WOOCOMMERCE</h3>
              <p className="mt-2 text-gray-600">Easily customizable WordPress-based ecommerce solutions that provide flexibility and scalability for your online store.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaMagento className="text-orange-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">MAGENTO</h3>
              <p className="mt-2 text-gray-600">Robust ecommerce solutions designed for large-scale businesses, offering advanced features and multi-store capabilities.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaShopify className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">SHOPIFY</h3>
              <p className="mt-2 text-gray-600">An all-in-one hosted ecommerce platform with easy setup, customizable themes, and reliable security for your online store.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaOpencart className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">OPENCART</h3>
              <p className="mt-2 text-gray-600">Open-source ecommerce solutions offering user-friendly admin interfaces and extensive plugin support to meet your business needs.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaTags className="text-yellow-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">PRESTASHOP</h3>
              <p className="mt-2 text-gray-600">A feature-rich platform focusing on product management, multi-language support, and a streamlined checkout experience.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <BiCustomize className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">ZENCART</h3>
              <p className="mt-2 text-gray-600">Flexible ecommerce software offering deep customization options to fit unique business requirements and promotional strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
