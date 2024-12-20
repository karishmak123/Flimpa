import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Contact from "../../../Component2/Contact/Contact";
import WhyChoose from "../WhyChoose/WhyChooseUs";
import About from "./About";
import  Technology  from "../Technology/Technology.jsx";
import Projects from "../Projects/Projects.jsx";
import Counter from "../../../Component2/Counter/Counter";

// import MissionInner from '../MissionInner/MissionInner';

const AboutInner2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Technology/>
      {/* <MissionInner/> */}
      {/* <Contact />
      <Counter /> */}
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
