import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Brand from "../../Component1/Brand/Brand";
import Contact from "../../Component1/Contact/Contact";
import Counter from "../../Component1/Counter/Counter";
import Feature from "../../Component1/Feature/Feature";
import Portfolio from "../../Component1/Portfolio/Portfolio";
import Pricing from "../../Component1/Pricing/Pricing";
import Process from "../../Component3/Process/Process";
import Service from "../../Component1/Service/Service";
import TeamMember from "../../Component1/TeamMember/TeamMember";
import Testimonial from "../../Component1/Testimonial/Testimonial";
import Video from "../../Component1/Video/Video";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      {/* <TeamMember /> */}
      <Process />
      <Counter />
      {/* <Portfolio /> */}
    
      {/* <Testimonial /> */}
      {/* <Video /> */}
      <Contact />
      {/* <Pricing /> */}
      <Blog />
      <Brand />
    </>
  );
};

export default Home1;
