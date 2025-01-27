import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const Banner = () => {
  // Slick Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Set animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  // Helper function for rendering slide content
  const renderSlide = (heading, subheading, description, button1Text, button2Text, imageSrc, button1Link, button2Link) => (
    <div>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-16 lg:gap-0 h-full px-6">
        {/* Left Column: Text */}
        <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-up">
          <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
            {heading}
          </h5>
          <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68px] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[69px] 2xl:leading-[79px]" data-aos="fade-up">
            {subheading}
          </h1>
          <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1" data-aos="fade-up">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link to={button1Link}>
              <button className="primary-btn" data-aos="fade-up" data-aos-delay="300">
                {button1Text}
                <BiRightTopArrowCircle size="20" />
              </button>
            </Link>
            <Link to={button2Link}>
              <button className="primary-btn" data-aos="fade-up" data-aos-delay="500">
                {button2Text}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative flex justify-center items-center" data-aos="fade-left">
          <img
            src={imageSrc}
            alt={heading}
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[url('/images/banner-image-bg.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[1200px] lg:h-[660px] xl:h-[800px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <Slider {...settings}>
          {/* Slide 1 */}
          {renderSlide(
            'WEBSITE DEVELOPMENT',
            'TURN YOUR IDEAS INTO POWERFUL WEBSITES',
            'Get a website that’s not just beautiful but also built to grow your business and impress your audience.',
            'Start Now',
            'Learn More',
            '/images/development-4536630_1280.png',
            '/contact',
            '/about2'
          )}

          {/* Slide 2 */}
          {renderSlide(
            'DIGITAL MARKETING',
            'GROW YOUR BRAND AND EXPAND YOUR REACH',
            'We help your business shine online and connect with the right audience at the right time.',
            'Let’s Begin',
            'Explore Services',
            '/images/digital-marketing-banner.png',
            '/contact',
            '/services'
          )}

          {/* Slide 3 */}
          {renderSlide(
            'MOBILE APP DEVELOPMENT',
            'CREATE APPS THAT YOUR USERS WILL LOVE TO USE',
            'Build user-friendly, innovative apps designed to take your business to the next level.',
            'Get Started',
            'Discover More',
            '/images/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration-b.png',
            '/contact',
            '/services'
          )}

          {/* Slide 4 */}
          {renderSlide(
            'WEBSITE DESIGNING',
            'DESIGNS THAT IMPRESS AND DELIVER RESULTS',
            'Get stunning, responsive designs that make your business stand out and attract customers.',
            'Learn More',
            'See Our Work',
            '/images/web-banner.png',
            '/contact',
            '/services',
          )}

        </Slider>
      </div>
    </section>
  );
};

export default Banner;
