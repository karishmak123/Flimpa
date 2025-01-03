import { Link } from "react-router-dom";
import bannerImg from "/images/hero-thumb.png";
import bannerShape from "/images/hero-shape.png";
import { BiRightTopArrowCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="bg-[url('/images/glossy-online-tutoring-session-concept-as-glossy-image-online-tutoring-session-with-tuto_980716-636114.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[1200px] lg:h-[660px] xl:h-[700px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
          <div className="relative">
            <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
            PROFESSIONAL WEB & APP DEVELOPMENT
            </h5>
            <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[69px] 2xl:leading-[79px]">
            INNOVATING YOUR BUSINESS
          <br />
          THROUGH TECHNOLOGY
            </h1>
            <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1">
            Crafting cutting-edge websites and mobile applications tailored to 
            drive growth and deliver results.
            {/* <br className="hidden 2xl:block" /> best practices.
              Progressively fabricate done */}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={"/contact"}>
                <button className="primary-btn">
                  {`Let's Talk`}
                  <BiRightTopArrowCircle size={"20"} />
                </button>
              </Link>
              <Link to={"/about2"}>
                <button className="primary-btn">{`Read More`}</button>
              </Link>
            </div>
          </div>
          {/* <div className="sm:flex justify-center lg:justify-end -mb-[132px] lg:-mb-12 relative hidden">
            <img src={bannerImg} draggable="false" className=":w-[inherit]" />
            <img
              src={bannerShape}
              draggable={false}
              className="absolute top-40 left-0 md:left-20 lg:left-0 xl:left-10 2xl:left-[7rem] animate-rotational hidden sm:block"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
