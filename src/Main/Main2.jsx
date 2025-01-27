import { Outlet } from "react-router-dom";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import WhatsApp from "../Shared/WhatsApp/WhatsAppIcon";

const Main2 = () => {
  return (
    <>
      <Navbar2 />
      <ScrollToTop />
      <WhatsApp/>
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main2;
