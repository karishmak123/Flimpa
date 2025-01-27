import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import WhatsApp from "../Shared/WhatsApp/WhatsAppIcon";

const Main = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
