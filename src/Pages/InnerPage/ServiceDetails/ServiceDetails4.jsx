import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import {
  FaArrowRightLong,
  FaReact,
  FaAndroid,
  FaApple,
} from "react-icons/fa6";
import { RiCheckFill } from "react-icons/ri";
import { FaPaintBrush, FaCodeBranch, FaTools } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"App Development"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service Details"}
      />

      <section className="pb-[120px] bg-white bg-no-repeat bg-center bg-cover relative mt-5">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-14 2xl:gap-[150px] items-center" style={{ marginTop: "8%" }}>
            <div className="relative z-10">
              <img src="/images/mobile-development.jpg" draggable="false" />
            </div>
            <div className="relative">
              <h1 className="font-Rajdhani font-bold text-2xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-HeadingColor-0 mt-3 mb-4">
                Why Choose Our App Development?
              </h1>
              <p className="font-Nunito text-TextColor2-0 pb-8">
                Our app development focuses on delivering innovative, user-friendly, and scalable solutions. We tailor our services to meet your unique business needs, ensuring that your app not only works but also supports your growth and success.
              </p>
              <div className="flex flex-col gap-y-7 2xl:flex-row 2xl:justify-between 2xl:items-center">
                <ul>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    End-to-End Solutions
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    Scalable & Flexible
                  </li>
                  <li className="font-Nunito font-medium text-HeadingColor-0 flex items-center gap-2 mb-3">
                    <span className="text-PrimaryColor-0">
                      <RiCheckFill size={"24"} />
                    </span>
                    24/7 Support
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16" style={{ background: "rgb(2 21 51)", marginBottom: "50px" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Key Features of Our Mobile App Development Services</h2>
          <p className="mt-4 text-lg text-white">
            Our mobile app development services are built to create seamless, high-quality experiences on mobile devices. Check out the key features we offer:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {/* Android App Development */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaAndroid className="text-green-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">ANDROID APP DEVELOPMENT</h3>
              <p className="mt-2 text-gray-600">
                Our Android app development services ensure smooth performance and scalability on all Android devices. We create native apps that deliver top-tier functionality, speed, and user engagement.
              </p>
            </div>

            {/* iOS App Development */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaApple className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">IOS APP DEVELOPMENT</h3>
              <p className="mt-2 text-gray-600">
                We provide optimized iOS app development, ensuring compatibility across all Apple devices. Our apps offer excellent responsiveness and premium user experiences on iPhone and iPad.
              </p>
            </div>

            {/* Mobile App UI/UX Design */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaPaintBrush className="text-yellow-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">MOBILE APP UI/UX DESIGN</h3>
              <p className="mt-2 text-gray-600">
                We specialize in designing user-friendly interfaces that offer seamless and intuitive interactions, ensuring a smooth journey for your app users from start to finish.
              </p>
            </div>

            {/* Mobile App Maintenance */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaTools className="text-purple-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">MOBILE APP MAINTENANCE</h3>
              <p className="mt-2 text-gray-600">
                We provide comprehensive maintenance and updates for your apps, ensuring they stay functional, secure, and competitive with regular updates and optimizations.
              </p>
            </div>

            {/* Hybrid App Development */}
            <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaCodeBranch className="text-orange-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">HYBRID APP DEVELOPMENT</h3>
              <p className="mt-2 text-gray-600">
                Our hybrid apps offer a perfect balance between performance and flexibility, providing cost-effective solutions for businesses looking to target both iOS and Android platforms with a single codebase.
              </p>
            </div>

            {/* Custom App Solutions */}
            {/* React Native Development */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <FaReact className="text-indigo-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">REACT NATIVE DEVELOPMENT</h3>
              <p className="mt-2 text-gray-600">
                We build high-performance, cross-platform mobile apps using React Native, ensuring fast development cycles, native-like performance, and consistent user experiences across iOS and Android.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
