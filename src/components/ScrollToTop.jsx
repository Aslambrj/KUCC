// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const resetScroll = () => {
      // Instantly jump to top for all browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    // Reset immediately
    resetScroll();

    // Also reset after all resources are loaded (images, fonts)
    window.addEventListener("load", resetScroll);

    return () => window.removeEventListener("load", resetScroll);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
