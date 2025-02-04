import React, { useEffect } from "react";
import serviceIcon2 from "/images/service-2.png";
import serviceIcon from "/images/service-3.png";
import serviceIcon3 from "/images/mobile-icon-development.png";
import serviceIcon4 from "/images/service-4.png";
import serviceIcon5 from "/images/service-5.png";
import serviceIcon6 from "/images/service-6.png";
import ServiceCard from "./ServiceCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceNumber: "01",
    serviceTitle: "Website Design",
    serviceDesc:
      "We create custom website designs that elevate your online presence, engage visitors, and drive conversions.",
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
      "We craft custom websites that reflect your brand and engage users. Our responsive, SEO-friendly solutions ",
    serviceUrl: "/service_details2",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: "03",
    serviceTitle: "Mobile App Development",
    serviceDesc:
      "Our app development focuses on delivering innovative, user-friendly, and scalable solutions.",
    serviceUrl: "/service_details4",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
    serviceIconStyle: { width: "60px !important" },
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceNumber: "04",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "We combine innovative strategies and cutting-edge technologies to elevate your online presence. ",
    serviceUrl: "/service_details5",
    serviceButton: "Read More",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
];

const Service = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: true, // Animation happens only once when element enters the viewport
    });
  }, []);

  return (
    <section className="relative pt-28 pb-[120px] bg-[url('/images/service-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        {/* Section Header */}
        <div className="text-center" data-aos="fade-up">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            SERVICES WE PROVIDE
          </h5>
          <p className="font-Rajdhani font-bold text-[20px] text-white mt-[18px]" data-aos="fade-up">
            We are one of the best website and mobile app development companies with footprints across the globe, delivering website and mobile app development services on all the key platforms.
          </p>
        </div>

        {/* Service Cards */}
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
                <div key={id} data-aos="fade-up">
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
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
