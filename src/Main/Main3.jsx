import { Outlet } from "react-router-dom";
import Footer1 from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import WhatsApp from "../Shared/WhatsApp/WhatsAppIcon";

const Main3 = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp/>
      <div>
        <Outlet />
      </div>
      <Footer1 />
    </>
  );
};
export default Main3;
