import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExecutiveOpen, setIsExecutiveOpen] = useState(false);

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

  /*
   * ONLY THE THREE BOARD YEARS ARE SHOWN
   * IN THE EXECUTIVE PANEL DROPDOWN.
   *
   * Junior Executives 2026/27 are part of
   * the 2026/27 board section.
   */
  const boardItems = [
    {
      id: "board-2026",
      label: "Board 2026/27",
    },
    {
      id: "board-2025",
      label: "Board 2025/26",
    },
    {
      id: "board-2024",
      label: "Board 2024/25",
    },
  ];

  const getButtonClasses = (path) =>
    `px-3 py-2 rounded-lg transition-all duration-300 font-medium block w-full text-center text-sm sm:text-base ${
      location.pathname === path
        ? "bg-blue-600 text-white shadow-md"
        : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
    }`;

  const navbarHeight = 48;

  /*
   * Navigate to the Members page and specific
   * board section.
   */
  const handleBoardClick = (boardId) => {
    setIsOpen(false);
    setIsExecutiveOpen(false);

    if (location.pathname === "/members") {
      /*
       * If already on Members page, update the URL
       * and scroll directly to the selected board.
       */
      window.history.pushState(
        null,
        "",
        `/members#${boardId}`
      );

      const element = document.getElementById(boardId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      /*
       * If coming from another page, navigate to
       * Members with the board hash.
       */
      navigate(`/members#${boardId}`);
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav
        className="bg-white shadow-md fixed w-full z-30 top-0 left-0"
        style={{ height: `${navbarHeight}px` }}
      >
        <div className="flex items-center justify-between h-full px-4 sm:px-6">

          {/* =================================================
              LOGO
          ================================================== */}
          <img
            src="/assets/images/ss.png"
            alt="KUCC Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* =================================================
              MOBILE TOGGLE
          ================================================== */}
          <button
            className="text-gray-700 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>

          {/* =================================================
              DESKTOP MENU
          ================================================== */}
          <ul className="hidden xl:flex space-x-4 items-center">

            {navItems.map(({ path, label }) => {

              /* =============================================
                 EXECUTIVE PANEL DROPDOWN
              ============================================== */
              if (label === "Executive Panel") {
                return (
                  <li
                    key={path}
                    className="relative group"
                  >

                    {/* Executive Panel Button */}
                    <Link
                      to="/members"
                      className={`
                        px-3
                        py-2
                        rounded-lg
                        transition-all
                        duration-300
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        sm:text-base
                        ${
                          location.pathname === "/members"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
                        }
                      `}
                    >
                      Executive Panel

                      <FaChevronDown
                        size={10}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      />
                    </Link>

                    {/* =======================================
                        DESKTOP DROPDOWN
                    ======================================== */}
                    <div
                      className="
                        absolute
                        top-full
                        left-1/2
                        -translate-x-1/2
                        pt-3
                        w-64
                        opacity-0
                        invisible
                        translate-y-2
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        transition-all
                        duration-200
                        z-50
                      "
                    >
                      <div
                        className="
                          bg-white
                          rounded-xl
                          shadow-2xl
                          border
                          border-gray-200
                          overflow-hidden
                        "
                      >

                        {/* Dropdown Header */}
                        <div
                          className="
                            px-5
                            py-3
                            bg-blue-50
                            border-b
                            border-blue-100
                          "
                        >
                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-blue-600
                            "
                          >
                            Executive Boards
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            Select board year
                          </p>
                        </div>

                        {/* Board 2026/27 */}
                        <button
                          onClick={() =>
                            handleBoardClick("board-2026")
                          }
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            px-5
                            py-3.5
                            text-left
                            text-gray-700
                            font-medium
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition-all
                            duration-200
                            border-b
                            border-gray-100
                            group/board
                          "
                        >
                          <div className="flex flex-col">
                            <span>Board 2026/27</span>

                            <span
                              className="
                                text-xs
                                text-gray-400
                                font-normal
                                mt-0.5
                              "
                            >
                              Current Board
                            </span>
                          </div>

                          <span
                            className="
                              text-blue-500
                              opacity-0
                              -translate-x-2
                              group-hover/board:opacity-100
                              group-hover/board:translate-x-0
                              transition-all
                              duration-200
                            "
                          >
                            →
                          </span>
                        </button>

                        {/* Board 2025/26 */}
                        <button
                          onClick={() =>
                            handleBoardClick("board-2025")
                          }
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            px-5
                            py-3.5
                            text-left
                            text-gray-700
                            font-medium
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition-all
                            duration-200
                            border-b
                            border-gray-100
                            group/board
                          "
                        >
                          <span>Board 2025/26</span>

                          <span
                            className="
                              text-blue-500
                              opacity-0
                              -translate-x-2
                              group-hover/board:opacity-100
                              group-hover/board:translate-x-0
                              transition-all
                              duration-200
                            "
                          >
                            →
                          </span>
                        </button>

                        {/* Board 2024/25 */}
                        <button
                          onClick={() =>
                            handleBoardClick("board-2024")
                          }
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            px-5
                            py-3.5
                            text-left
                            text-gray-700
                            font-medium
                            hover:bg-blue-50
                            hover:text-blue-600
                            transition-all
                            duration-200
                            group/board
                          "
                        >
                          <span>Board 2024/25</span>

                          <span
                            className="
                              text-blue-500
                              opacity-0
                              -translate-x-2
                              group-hover/board:opacity-100
                              group-hover/board:translate-x-0
                              transition-all
                              duration-200
                            "
                          >
                            →
                          </span>
                        </button>

                      </div>
                    </div>
                  </li>
                );
              }

              /* =============================================
                 NORMAL NAVIGATION ITEMS
              ============================================== */
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={getButtonClasses(path)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-20
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Transparent Click Area */}
        <div
          className="
            absolute
            top-0
            right-0
            h-full
            w-[calc(100%-16rem)]
            bg-transparent
          "
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className="
            relative
            w-64
            h-full
            bg-white
            shadow-xl
            p-6
            flex
            flex-col
            space-y-4
          "
          style={{ marginTop: `${navbarHeight}px` }}
        >

          {navItems.map(({ path, label }) => {

            /* =============================================
               MOBILE EXECUTIVE PANEL
            ============================================== */
            if (label === "Executive Panel") {
              return (
                <div key={path}>

                  {/* Executive Panel Button */}
                  <button
                    onClick={() =>
                      setIsExecutiveOpen(
                        !isExecutiveOpen
                      )
                    }
                    className={`
                      ${getButtonClasses(path)}
                      flex
                      items-center
                      justify-center
                      gap-2
                    `}
                  >
                    Executive Panel

                    <FaChevronDown
                      size={10}
                      className={`
                        transition-transform
                        duration-300
                        ${
                          isExecutiveOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {/* Mobile Board List */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isExecutiveOpen
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        ml-2
                        border-l-2
                        border-blue-100
                      "
                    >

                      {/* Board 2026/27 */}
                      <button
                        onClick={() =>
                          handleBoardClick(
                            "board-2026"
                          )
                        }
                        className="
                          w-full
                          text-left
                          px-4
                          py-3
                          text-sm
                          text-gray-600
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                          rounded-r-lg
                        "
                      >
                        <span className="font-medium">
                          Board 2026/27
                        </span>

                        <span className="block text-xs text-gray-400 mt-0.5">
                          Current Board
                        </span>
                      </button>

                      {/* Board 2025/26 */}
                      <button
                        onClick={() =>
                          handleBoardClick(
                            "board-2025"
                          )
                        }
                        className="
                          w-full
                          text-left
                          px-4
                          py-3
                          text-sm
                          text-gray-600
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                          rounded-r-lg
                        "
                      >
                        Board 2025/26
                      </button>

                      {/* Board 2024/25 */}
                      <button
                        onClick={() =>
                          handleBoardClick(
                            "board-2024"
                          )
                        }
                        className="
                          w-full
                          text-left
                          px-4
                          py-3
                          text-sm
                          text-gray-600
                          hover:text-blue-600
                          hover:bg-blue-50
                          transition
                          rounded-r-lg
                        "
                      >
                        Board 2024/25
                      </button>

                    </div>
                  </div>
                </div>
              );
            }

            /* =============================================
               NORMAL MOBILE ITEMS
            ============================================== */
            return (
              <Link
                key={path}
                to={path}
                className={getButtonClasses(path)}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          SPACER FOR FIXED NAVBAR
      ====================================================== */}
      <div
        style={{
          height: `${navbarHeight}px`,
        }}
      />
    </>
  );
};

export default Navbar;