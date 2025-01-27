import React, { useEffect } from "react";
import processImg from "/images/process-icon-1.png";
import processImg2 from "/images/process-icon-2.png";
import processImg3 from "/images/process-icon-3.png";
import processImg4 from "/images/process-icon-4.png";
import boxShape from "/images/process3-shape.png";
import boxShape2 from "/images/process3-shape2.png";
import ProcessCard from "./ProcessCard";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const processData = [
  {
    id: 1,
    processImg: processImg,
    boxNumber1: "1",
    boxShape: boxShape,
    processTitle: "Select A Project",
    processDesc: "We collaborate with clients to understand their needs and select the right technologies for the project.",
  },
  {
    id: 2,
    processImg: processImg2,
    boxNumber1: "2",
    boxShape: boxShape2,
    processTitle: "Project Analysis",
    processDesc: "We analyze project requirements and market trends to craft a tailored solution.",
  },
  {
    id: 3,
    processImg: processImg3,
    boxNumber1: "3",
    boxShape: boxShape,
    processTitle: "Start a Project",
    processDesc: "We begin development with an agile approach, ensuring regular feedback and progress.",
  },
  {
    id: 4,
    processImg: processImg4,
    boxNumber1: "4",
    processTitle: "Deliver to Success",
    processDesc: "We deliver a fully tested product and provide ongoing support for long-term success.",
  },
];

const Process = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: true, // Animation happens only once when element enters the viewport
    });
  }, []);

  return (
    <section className="py-28 relative z-10">
      <div className="Container">
        {/* Section Header */}
        <div className="text-center" data-aos="fade-up">
          <h5 className="font-Rajdhani text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
            WORK PROCESS
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4" data-aos="fade-up">
            Working Process For{" "}
            <span className="text-PrimaryColor-0">Projects</span>
          </h1>
        </div>

        {/* Process Cards */}
        <div className="mt-[94px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16">
          {processData.map(
            ({
              id,
              processImg,
              boxNumber1,
              processTitle,
              boxShape,
              processDesc,
            }) => {
              return (
                <div key={id} data-aos="fade-up">
                  <ProcessCard
                    processImg={processImg}
                    boxNumber1={boxNumber1}
                    boxShape={boxShape}
                    processTitle={processTitle}
                    processDesc={processDesc}
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

export default Process;
