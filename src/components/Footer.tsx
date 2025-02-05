import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-6 dark:bg-slate-800">
        <div className="container">
          <div className="w-full pt-4">
            {/* <div className="flex items-center justify-center gap-4 mb-5">
              <Link
                to="/"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary"
              >
                <FaTiktok className="w-5 h-5" />
              </Link>
            </div> */}
            <p className="font-medium text-sm text-slate-300 text-center">
              © 2025{" "}
              <span className="font-bold text-primary dark:text-white">
                Hafnan Store
              </span>
              . All rights reserved.
              {/* <Link
                to="https://anugrahprastyo.my.id/"
                className="font-bold hover:text-primary"
              >
                {" "}
                Anugrah Prastyo
              </Link> */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
