/* eslint-disable no-unused-vars */
import featureIcon from "/images/feature-icon1.png";
import featureIcon2 from "/images/feature-icon2.png";
import featureIcon3 from "/images/feature-icon3.png";
import featureshape from "/images/feature-shape-1.png";
import featureshape2 from "/images/feature-shape-2.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "Cutting-Edge Solutions",
    featureDesc:
      "We leverage the latest technologies to craft innovative web and app solutions that elevate your business.",
    featureUrl: "/service",
    featureBtn: "Explore More",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "Expert Team",
    featureDesc:
      "Our skilled developers and designers work passionately to deliver projects tailored to your vision.",
    featureUrl: "/team",
    featureBtn: "Meet the Team",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "Unmatched Support",
    featureDesc:
      "From concept to deployment, we provide ongoing support to ensure your success in the digital world.",
    featureUrl: "/support",
    featureBtn: "Contact Us",
  },
];


const Feature = () => {
  return (
    <section className="bg-BodyBg-0">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-10 sm:-mt-[50px]">
          {processData.map(
            ({
              id,
              featureIcon,
              featureshape,
              featureshape2,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtn,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureshape={featureshape}
                    featureshape2={featureshape2}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtn={featureBtn}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
