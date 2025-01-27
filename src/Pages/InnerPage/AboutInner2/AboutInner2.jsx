import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import WhyChoose from "../WhyChoose/WhyChooseUs";
import About from "./About";
import  Technology  from "../Technology/Technology.jsx";
const AboutInner2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      {/* <Technology/> */}
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
