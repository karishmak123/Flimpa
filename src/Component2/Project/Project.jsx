import { FaPlus } from "react-icons/fa6";
import projectThumb from "/images/project1.png";
import projectThumb2 from "/images/project2.png";
import projectThumb3 from "/images/portfolio2-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import TeamMember from '../../Component1/TeamMember/TeamMember';



const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTilte: "Design",
    projectTitle: "Mobile UI/UX Design",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTilte: "Technology",
    projectTitle: "Cyber Security & Protect",
    projectUrl: "/project_details",
    projectBtn: <FaPlus />,
  },
  // {
  //   id: 3,
  //   projectThumb: projectThumb3,
  //   projectSubTilte: "IT Solution",
  //   projectTitle: "Website Development",
  //   projectUrl: "/project_details",
  //   projectBtn: <FaPlus />,
  // },
  // {
  //   id: 4,
  //   projectThumb: projectThumb2,
  //   projectSubTilte: "Technology",
  //   projectTitle: "Cyber Security & Protect",
  //   projectUrl: "/project_details",
  //   projectBtn: <FaPlus />,
  // },
];

const Project = () => {
  return (
    <>
       <section className="project relative z-10 py-28 bg-white before:absolute before:top-0 before:left-0 before:h-[72%] before:w-full before:bg-SecondaryColor-0 before:-z-10 before:bg-center before:bg-cover before:bg-no-repeat -mb-[1px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            IT Support For Business
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-3">
            Ensuring Your Success Trusted <br />
            IT Services Source
          </h1>
        </div>
        <div className="mt-[60px] flex justify-center items-center gap-10 flex-wrap">
          {ProjectData.slice(0, 2).map(
            ({
              id,
              projectThumb,
              projectSubTilte,
              projectTitle,
              projectUrl,
              projectBtn,
            }) => (
              <div
                key={id}
                className="max-w-[400px] w-full bg-white shadow-lg rounded-lg"
              >
                <ProjectCard
                  projectThumb={projectThumb}
                  projectSubTilte={projectSubTilte}
                  projectUrl={projectUrl}
                  projectTitle={projectTitle}
                  projectBtn={projectBtn}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
    <TeamMember/>
    </>
 
  );
};

export default Project;



