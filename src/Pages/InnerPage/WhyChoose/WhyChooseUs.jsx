import { FaCircle } from "react-icons/fa6";
import whyChooseImg from "/images/choose-us-thumb.png"
import ServiceCard from "./ServiceCard";
import serviceIcon from "/images/customer-review.png";
import serviceIcon2 from "/images/like.png";
import serviceIcon3 from "/images/website-optimization.png";
import serviceIcon4 from "/images/premium-badge.png";


const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: "Customer Satisfaction First",
    serviceDesc:
      "We prioritize your needs by delivering customized solutions, ensuring exceptional satisfaction at every step of the journey.",
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: "Results-Driven Approach",
    serviceDesc:
      "Our focus is on delivering measurable results with strategies designed to boost your business growth and success.",
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: "Speed & Precision",
    serviceDesc:
      "We combine cutting-edge technology and efficient processes to provide fast and accurate solutions that meet your deadlines.",
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: "Commitment to Quality",
    serviceDesc:
      "Our commitment to excellence ensures that every project is delivered with the highest quality standards, making your success our priority.",
  },
];


const WhyChooseUs = () => {
  return (
    <section className="pt-28 pb-[120px] p relative z-10 bg-[url(/images/choose-us-bg.jpg)]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-[100px]">
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

export default WhyChooseUs;