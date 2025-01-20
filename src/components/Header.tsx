import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { DarkModeToggle } from "./elements/DarkModeToggle";
import { Sosmed } from "./elements/Sosmed";
import { IoIosArrowUp } from "react-icons/io";
import { TimeDisplay } from "./elements/TimeDisplay";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setShowScrollButton(true);
      } else {
        setIsScrolled(false);
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !(sidebarRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setIsSidebarMenuOpen(false);
      }
    };

    if (isSidebarMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarMenuOpen]);

  const handleMenuClick = () => {
    setIsSidebarMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActiveLink = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-lg dark:bg-gray-900 dark:bg-opacity-50"
            : "bg-white"
        }`}
      >
        <div className="container flex justify-between mx-auto px-4 lg:max-w-7xl">
          <div className="flex items-center order-2 md:order-1">
            <Link
              to="/"
              className="p-1 font-bold text-lg text-slate-900 py-3 dark:text-white"
            >
              <img
                src="/image/avatar/logo-hafnanstore.jpeg"
                className="border border-slate-700 rounded-full w-9 h-9"
                data-size="w-10 h-10"
              />
            </Link>
          </div>
          <nav className="flex flex-row gap-4 items-center order-1">
            <HiOutlineMenuAlt2
              onClick={() => setIsSidebarMenuOpen(true)}
              className="order2 text-slate-800 dark:text-white text-lg block items-center md:hidden h-8 w-8 lg:w-6 scale-90 cursor-pointer"
            />
            <div className="hidden md:inline-flex gap-4">
              <Link
                to="/"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-slate-300 underline-animation ${
                  isActiveLink("/") ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-slate-300 underline-animation ${
                  isActiveLink("/products") ? "active" : ""
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-slate-300 underline-animation ${
                  isActiveLink("/about") ? "active" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hidden md:block lg:inline-flex items-center gap-1 px-3 py-2 text-sm font-bold  text-slate-500 active:text-slate-800 hover:text-slate-800 dark:text-white hover:dark:text-slate-300 underline-animation ${
                  isActiveLink("/contact") ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex gap-2 items-center order-2">
            <TimeDisplay />
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <div
        className={`fixed left-0 top-0 bg-black bg-opacity-50 w-screen justify-center items-center lg:hidden z-50 transition-transform duration-300 ${
          isSidebarMenuOpen ? "sidebar sidebar-open" : "sidebar"
        }`}
      >
        <div
          ref={sidebarRef}
          className="p-4 bg-white text-gray-100 text-xl text-center w-96 h-screen overflow-y-auto font-semibold rounded-tr-xl rounded-br-lg top-0 bottom-0 lg:left-0 dark:bg-dark"
        >
          <div className="px-3 mt-1 flex items-center justify-between">
            <Link
              to="/"
              onClick={handleMenuClick}
              className="font-bold text-lg text-primary py-3 dark:text-white"
            >
              <img
                src="/image/avatar/logo-hafnanstore.jpeg"
                className="border border-slate-700 rounded-full w-9 h-9"
                data-size="w-10 h-10"
              />
            </Link>
            <button>
              <IoClose
                onClick={() => setIsSidebarMenuOpen(false)}
                className="h-8 w-8 scale-75 text-slate-800 dark:text-white"
              />
            </button>
          </div>
          <hr className="my-2 text-gray-600" />
          <nav className="my-4">
            <Link
              to="/"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Produk
            </Link>
            <Link
              to="/about"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleMenuClick}
              className="p-2.5 flex items-center text-[15px] rounded-lg px-4 font-bold hover:bg-slate-400/25 text-slate-800 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <hr className="my-2 text-gray-600" />
          <div className="p-2.5 px-4 mt-auto">
            <div className="flex flex-wrap items-center gap-4 py-3">
              <Sosmed to="/" icon={FaInstagram} iconClassName="w-5 h-5" />
              <Sosmed to="/" icon={FaFacebookF} iconClassName="w-5 h-5" />
              <Sosmed to="/" icon={FaTiktok} iconClassName="w-5 h-5" />
            </div>
            <p className="text-left font-semibold text-sm text-slate-800 dark:text-white">
              © 2024 - Developed by {""}
              <Link
                to="https://anugrahprastyo.my.id/"
                className="hover:text-primary font-bold"
              >
                Anugrah Prastyo
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-primary rounded-full text-white z-10"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Header;
