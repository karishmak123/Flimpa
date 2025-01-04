import { FaPlus } from "react-icons/fa6";
import projectThumb from "/images/project1.png";
import projectThumb2 from "/images/project2.png";
import projectThumb3 from "/images/portfolio2-3.png";
import ProjectCard from "./ProjectCard";
import TeamMember from '../../Component1/TeamMember/TeamMember';

const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTilte: "Design",
    projectTitle: "MATRIMONIAL APPLICATION",
    projectUrl: "",
    projectBtn: <FaPlus />,
    projectDescription: "Indianmilan Is Most Trusted Matrimonial Services. They Helps To People In In All Community To Find Their True Life Partner. There Purpose Is To Help People To Find Their Life Partner In All Communities. They Understands The Challenges And Concerns Of People. They Provide, Satisfying, And Matchmaking Experience To There Customers.",
    technologies: ["PHP", "Laravel", "React Native", "MySql", "Css"],
    projectLink: "https://indianmilan.com/", // Link to the project website
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTilte: "Technology",
    projectTitle: "DATING APPLICATION",
    projectUrl: "",
    projectBtn: <FaPlus />,
    projectDescription: "Livingpe Offer The Community With Millions Of People To Find Dates, Meet People & Make New Friends. Livingpe Is A Free Dating App And Social Network For Singles; The Perfect Place To Meet New People, In An Instant.",
    technologies: ["PHP", "Laravel", "React Native", "MySql", "Css",],
    projectLink: "https://www.livingpe.com/", // Link to the project website
  },
];

const Project = () => {
  return (
    <>
      <section className="project-details py-32 bg-pink-50">
        <div className="container mx-auto">
          {ProjectData.map(
            ({
              id,
              projectTitle,
              projectDescription,
              technologies,
              projectLink,
              projectThumb,
            }, index) => (
              <div
                key={id}
                className={`project-detail-card bg-white p-8 rounded-lg shadow-lg mb-12 flex flex-wrap items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  }`}
              >
                {/* Project Image */}
                <div className="w-full sm:w-1/2 p-4">
                  <img
                    src={projectThumb}
                    alt={projectTitle}
                    className="rounded-lg shadow-lg w-full transition-all duration-300 transform hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="w-full sm:w-1/2 sm:pl-8 p-4">
                  <h2 className="text-3xl font-semibold text-700 mb-4" style={{ color: "rgb(12 89 219)" }}>
                    {projectTitle}
                  </h2>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">{projectDescription}</p>

                  <h3 className="text-xl font-medium text-600 mb-4" style={{ color: "rgb(12 89 219)" }}>
                    Technologies Used:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-base mb-6">
                    {technologies.map((tech, index) => (
                      <li key={index} className="mb-2">{tech}</li>
                    ))}
                  </ul>

                  {projectLink && (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding: '12px 30px', backgroundColor: 'rgb(2 21 51 / var(--tw-bg-opacity))', color: '#fff', borderRadius: '4px' }}
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* <TeamMember /> */}

    </>

  );

};



export default Project;
