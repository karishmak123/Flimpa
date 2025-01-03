/* eslint-disable no-unused-vars */
import {
  FaArrowRightLong,
  FaDesktop,
  FaCode,
  // FaShoppingCart,
  // FaMobileAlt,
  FaChartLine,
  // FaProjectDiagram,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaMobileScreen } from "react-icons/fa6";
// import serviceIcon from "/images/service-icon1.png";
// import serviceIcon2 from "/images/service-icon2.png";
// import serviceIcon3 from "/images/service-icon3.png";
// import serviceIcon4 from "/images/service-icon4.png";
// import serviceIcon5 from "/images/service-icon5.png";
// import serviceIcon6 from "/images/service-icon6.png";
import ServiceCard from "./ServiceCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const serviceData = [
  {
    id: 1,
    serviceIcon: <FaDesktop />,
    serviceTitle: "WEBSITE DESIGN",
    serviceDesc:
      "Your website is the digital storefront of your business. Our innovative and tailored web design services",
    serviceUrl: "/service_details",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 2,
    serviceIcon: <FaCode />,
    serviceTitle: "WEBSITE DEVELOPMENT",
    serviceDesc:
      " We craft custom websites that reflect your brand and engage users. Our responsive, SEO-friendly...",
    serviceUrl: "/service_details2",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 3,
   serviceIcon: <TiShoppingCart/>,
    serviceTitle: "ECOMMERCE DEVELOPMENT",
    serviceDesc:
      "We create customized, secure, and scalable eCommerce solutions to help your business grow.",
    serviceUrl: "/service_details3",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 4,
    serviceIcon : <FaMobileScreen/>,
    serviceTitle: "MOBILE APP DEVELOPMENT",
    serviceDesc:
      " Our app development focuses on delivering innovative, user-friendly, and scalable solutions. We tailor our services..",
    serviceUrl: "/service_details4",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 5,
    serviceIcon: <FaChartLine />,
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "We combine innovative strategies and cutting-edge technologies to elevate your online presence. ",
    serviceUrl: "/service_details5",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 6,
    serviceIcon: <FaCode/>,
    serviceTitle: "WEBSITE APPLICATION",
    serviceDesc:
      " We build custom, scalable, and secure web applications designed to grow with your business.",
    serviceUrl: "/service_details6",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
];

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Services"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Services"}
      />
      <section className="pt-20 pb-[120px] p relative z-10 bg-BodyBg-0">
        <div className="Container">
          <div className="text-center">
          <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
  Empowering Your Business with Tailored Digital Solutions
</h1>
<p className="mt-5">
  As a leading web and mobile app development company, we specialize in creating innovative, custom solutions that are designed to meet your business goals. In today’s digital landscape, having a strong online presence is crucial for success. Whether you're looking to enhance your website, build a mobile app, or leverage eCommerce, our expert team is here to deliver high-quality, user-centric solutions that drive growth and success.
</p>

          </div>
          <div className="mt-[88px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-[68px]">
              {serviceData.map(
                ({
                  id,
                  serviceIcon,
                  serviceUrl,
                  serviceButton,
                  serviceButton2,
                  serviceTitle,
                  serviceDesc,
                }) => {
                  return (
                    <div key={id}>
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceUrl={serviceUrl}
                        serviceButton={serviceButton}
                        serviceButton2={serviceButton2}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceInner;
