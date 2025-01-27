import { FaPhoneAlt } from "react-icons/fa";
import ContactBoxCard from "./ContactBoxCard";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHome, FaBuilding } from "react-icons/fa";

const processData = [
  {
    id: 1,
    contactBoxIcon: <FaPhoneAlt />,
    contactBoxSubTitle: "Call Us Anytime",
    contactBoxTitle: "+91 942 478 1796",
  },
  {
    id: 2,
    contactBoxIcon: <FaHome  />,
    contactBoxSubTitle: "Head Office",
    contactBoxTitle: "Gali No. 10, Ward No. 26, Rajendra Nagar Satna, Madhya Pradesh, India - 485001",
  },
  {
    id: 3,
    contactBoxIcon: <FaBuilding  />,
    contactBoxSubTitle: "Branch Office",
    contactBoxTitle: "99th, 1st floor, 18th Main road, BTM layout 1st stage, Bangalore 560068",
  },
];

const ContactBox = () => {
  return (
    <section className="py-28 relative bg-[url(/images/about-bg.jpg)] z-10 ">
      <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {processData.map(
              ({
                id,
                contactBoxIcon,
                contactBoxSubTitle,
                contactBoxTitle,
              }) => {
                return (
                  <div key={id}>
                    <ContactBoxCard
                      contactBoxIcon={contactBoxIcon}
                      contactBoxSubTitle={contactBoxSubTitle}
                      contactBoxTitle={contactBoxTitle}
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

export default ContactBox;
