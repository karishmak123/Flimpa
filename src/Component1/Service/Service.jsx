/* eslint-disable no-unused-vars */
// import serviceIcon from "/images/service-1.png";
import serviceIcon2 from "/images/service-2.png";
import serviceIcon from "/images/service-3.png";
import serviceIcon3 from "/images/mobile-icon-development.png";
import serviceIcon4 from "/images/service-4.png";
import serviceIcon5 from "/images/service-5.png";
import serviceIcon6 from "/images/service-6.png";
import ServiceCard from "./ServiceCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceNumber: "01",
    serviceTitle: "Website Design",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon,
    serviceNumber: "02",
    serviceTitle: "Website Development",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: "03",
    serviceTitle: "Mobile App Development",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
    serviceIconStyle: { width: "60px !important" }, // Add inline width style here
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceNumber: "04",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Monotonectally synergize grants to business visualize strategic infomediaries",
    serviceUrl: "/service_details",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
];

const Service = () => {
  return (
    <section className="relative pt-28 pb-[120px] bg-[url('/images/service-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
          SERVICES WE PROVIDE
          </h5>
          {/* <h1 className="font-Rajdhani font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1> */}
          <p className="font-Rajdhani font-bold text-[20px] text-white mt-[18px]">We are one of the best website and mobile app development companies with footprints across the globe, delivering website and mobile app development services on all the key platforms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] mt-[54px]">
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceNumber,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceButton,
              serviceBtnIcon,
            }) => {
              return (
                <>
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceNumber={serviceNumber}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceButton={serviceButton}
                      serviceBtnIcon={serviceBtnIcon}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
