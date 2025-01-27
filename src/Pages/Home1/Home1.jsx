import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Counter from "../../Component1/Counter/Counter";
import Feature from "../../Component1/Feature/Feature";
import Card from "../../Component1/Cards/Card";
import Process from "../../Component3/Process/Process";
import Service from "../../Component1/Service/Service";
import DemoProject from "../../Component2/DemoProject";
import Testimonial from "../../Component1/Testimonial/Testimonial"

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <Process />
      <Counter />
      <Card />
      <DemoProject/>
      <Testimonial/>
      <Blog />
    </>
  );
};

export default Home1;
