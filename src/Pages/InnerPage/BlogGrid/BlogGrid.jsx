/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogGridImg from "/images/color-wheel-primary-colors-brilliance-pantone.jpg";
import blogGridImg2 from "/images/representations-user-experience-interface-design.jpg";
import blogGridImg3 from "/images/modern-office-desk-composition-with-technological-device_23-2147916744.jpg";
import blogGridImg4 from "/images/blog-4.png";
import blogGridImg5 from "/images/blog-5.png";
import blogGridImg6 from "/images/blog-6.png";
import BlogGridCard from "./BlogGridCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { LuArrowUpRight } from "react-icons/lu";

const blogData = [
  {
    id: 1,
    blogGridImg: blogGridImg,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "",
    blogGridTitle: "How to Choose the Right Colors for Your Website",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "How to Choose the Right Colors for Your Website",
  },
  {
    id: 2,
    blogGridImg: blogGridImg2,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "",
    blogGridTitle: "How to Optimize Your Website for User Experience",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "How to Optimize Your Website for User Experience",
  },
  {
    id: 3,
    blogGridImg: blogGridImg3,
    thumbContent: "IT Solution",
    thumbBtn: <LuArrowUpRight />,
    blogGridUrl: "",
    blogGridTitle: "The Impact of Mobile Devices on Web Design",
    postBy: "Admin : Mera",
    comments: "Comments (04)",
    blogGridDesc:
      "The Impact of Mobile Devices on Web Design",
  },
  
];

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogGridImg,
                thumbContent,
                thumbBtn,
                blogGridTitle,
                postBy,
                comments,
                blogGridDesc,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridImg={blogGridImg}
                      thumbContent={thumbContent}
                      thumbBtn={thumbBtn}
                      blogGridTitle={blogGridTitle}
                      postBy={postBy}
                      comments={comments}
                      blogGridDesc={blogGridDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
