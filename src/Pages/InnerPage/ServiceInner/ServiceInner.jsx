/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceIcon from "/images/service-icon1.png";
import serviceIcon2 from "/images/service-icon2.png";
import serviceIcon3 from "/images/service-icon3.png";
import serviceIcon4 from "/images/service-icon4.png";
import serviceIcon5 from "/images/service-icon5.png";
import serviceIcon6 from "/images/service-icon6.png";
import ServiceCard from "./ServiceCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Newsletter from "./Newsletter/Newsletter";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "WEBSITE DESIGN",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/service_details",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "WEBSITE DEVELOPMENT",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/service_details2",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon4,
    serviceTitle: "ECOMMERCE DEVELOPMENT",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/service_details3",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon3,
    serviceTitle: "MOBILE APP DEVELOPMENT",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/service_details4",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceTitle: "Digital Marketing",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
    serviceUrl: "/service_details2",
    serviceButton2: "Read More",
    serviceButton: <HiOutlineArrowNarrowRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceTitle: "WEBSITE APPLICATION",
    serviceDesc:
    "Monotonectal grants to business visualize provid solution services business provid done",
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
            {/* <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              IT Support For Business
            </h5> */}
            <h1 className="font-Rajdhani font-bold text-[20px] text-HeadingColor-0 leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] mt-[18px]">
            We Deploy Creativity With<br />
             Every Project
            </h1>
            <p className="mt-5">WebSpread is one of the leading website and mobile app development company specialized in customized work. If you want to thrive in your online business, it is vital to understand the significance of the present digital shift. We can offer the best web and mobile app development services that will satisfy all of your business objectives.</p>
          </div>
          <div className="mt-[88px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-[68px]">
              {serviceData.map(
                ({
                  id,
                  serviceImg,
                  serviceIcon,
                  serviceUrl,
                  serviceButton,
                  serviceButton2,
                  serviceTitle,
                  serviceDesc,
                  serviceShape,
                }) => {
                  return (
                    <>
                      <div key={id}>
                        <ServiceCard
                          serviceImg={serviceImg}
                          serviceIcon={serviceIcon}
                          serviceUrl={serviceUrl}
                          serviceButton={serviceButton}
                          serviceButton2={serviceButton2}
                          serviceTitle={serviceTitle}
                          serviceDesc={serviceDesc}
                          serviceShape={serviceShape}
                        />
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <Newsletter /> */}
    </>
  );
};

export default ServiceInner;
