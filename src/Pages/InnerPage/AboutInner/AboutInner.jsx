import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import About from "./About/About";
import TeamMember from "../../../Component1/TeamMember/TeamMember";
import Counter from "../../../Component1/Counter/Counter";
import Testimonial from "../../../Component1/Testimonial/Testimonial";
import Brand from "../../../Component1/Brand/Brand";
// import MissionInner from '../MissionInner/MissionInner';


const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us 01"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us 01"}
      />
      <Feature />
      <About />
      {/* <MissionInner/> */}
      <TeamMember />
      <Counter />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
