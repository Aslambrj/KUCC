import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/updates", label: "Updates" },
    { path: "/events", label: "Events" },
    { path: "/members", label: "Executive Panel" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Insights" },
    { path: "/partners", label: "Partners" },
    { path: "/qna", label: "FAQs" },
  ];

  const getButtonClasses = (path) =>
    `px-3 py-2 rounded-lg transition-all duration-300 font-medium block w-full text-center text-sm sm:text-base ${
      location.pathname === path
        ? "bg-blue-600 text-white shadow-md"
        : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
    }`;

  const navbarHeight = 48; // px

  return (
    <>
      {/* Navbar */}
      <nav
        className="bg-white shadow-md fixed w-full z-30 top-0 left-0"
        style={{ height: `${navbarHeight}px` }}
      >
        <div className="flex items-center justify-between h-full px-4 sm:px-6">
          {/* Logo */}
          <img
            src="/assets/images/ss.png"
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Mobile Toggle */}
          <button
            className="text-gray-700 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-4">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className={getButtonClasses(path)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar Wrapper */}
      <div
        className={`fixed inset-0 z-20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 👉 TRANSPARENT CLICK AREA (Right Side Only) */}
        <div
          className="absolute top-0 right-0 h-full w-[calc(100%-16rem)] bg-transparent"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className="relative w-64 h-full bg-white shadow-xl p-6 flex flex-col space-y-4"
          style={{ marginTop: `${navbarHeight}px` }}
        >
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={getButtonClasses(path)}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div style={{ height: `${navbarHeight}px` }} />
    </>
  );
};

export default Navbar;
