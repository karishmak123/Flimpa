import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Project from "../../../Component2/Project/Project";

const ProjectInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Projects"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Proejcts"}
      />
      <Project />
    </>
  );
};

export default ProjectInner;
