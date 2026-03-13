import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop"; // import here

const MainLayout = () => {
  return (
    <>
      <ScrollToTop /> {/* run scroll-to-top globally */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
