/* eslint-disable no-unused-vars */
import { FaRegCalendarCheck } from "react-icons/fa6";
import blogThumb from "/images/color-wheel-primary-colors-brilliance-pantone.jpg";
import blogThumb2 from "/images/representations-user-experience-interface-design.jpg";
import blogThumb3 from "/images/modern-office-desk-composition-with-technological-device_23-2147916744.jpg";
import BlogCard from "./BlogCard";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "01 jan, 2025",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "",
    blogTitle: "How to Choose the Right Colors for Your Website",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "15 oct, 2024",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "",
    blogTitle: "How to Optimize Your Website for User Experience",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "",
    blogTitle: "The Impact of Mobile Devices on Web Design",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className="py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Latest Blog
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px]">
            Latest Inshights From Our Blog
          </h1>
        </div>
        <div className="mt-[46px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogTagIcon,
                blogTag,
                blogUrl,
                blogTitle,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogTagIcon={blogTagIcon}
                      blogTag={blogTag}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtn={blogBtn}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
