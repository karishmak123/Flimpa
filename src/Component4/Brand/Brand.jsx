/* eslint-disable no-unused-vars */
import brandThumb from "/images/brand1.png";
import brandThumb2 from "/images/brand2.png";
import brandThumb3 from "/images/brand3.png";
import brandThumb4 from "/images/brand4.png";
import brandThumb5 from "/images/brand5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="bg-SecondaryColor-0 pt-[38px] pb-[76px]">
      <div className="Container">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={brandThumb3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
