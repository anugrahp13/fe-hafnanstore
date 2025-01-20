/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../../components/elements/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AiOutlineProduct } from "react-icons/ai";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Anugrah Prastyo - Frontend Web Developer</title>
        </Helmet>
      </HelmetProvider>
      {/* Hero Section */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-48 lg:max-w-7xl flex items-center justify-center">
          <div className="w-full text-center relative grid gap-4">
            <h1 className="text-lg font-semibold text-slate-400 dark:text-slate-200">
              Hi 👋, Selamat Datang di Hafnan Store
              <span className="block font-bold text-dark mt-2 text-4xl lg:text-5xl dark:text-white">
                Belanja Puas dengan Harga Pass
              </span>
            </h1>
            <h2 className="font-semibold text-primary text-base lg:text-lg dark:text-sky-300">
              Kunjungi semua produk kami dan dapatkan dengan harga yang murah
              hanya di Hafnan Store
            </h2>
            <div className="flex justify-center items-center text-sm gap-4">
              <Button
                to="/contact"
                variant="secondary"
                text="Lihat Produk"
                icon={AiOutlineProduct}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-24 lg:max-w-7xl text-center md:text-left">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 text-center md:text-left">
              <div className="text-sm text-primary dark:text-primary grid gap-3">
                <span className="font-bold tracking-[.30em] uppercase">
                  About
                </span>
                <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                  Get to Know <br />
                  About Me
                </span>
              </div>
              <div className="font-medium text-slate-800 text-sm my-2 lg:text-base dark:text-slate-200">
                Don't know, then dislike.
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="font-bold text-dark text-3xl mb-5 mb-w-md dark:text-white mt-5 md:mt-0">
                Hi 👋, Welcome to {""}
                <span className="text-primary">Hafnan Store</span>
              </h2>
              <p className="font-medium text-base text-slate-800 dark:text-white max-w-xl lg:text-base">
                We are a platform that offers a range of services, however at
                the moment we focus on web development and digital marketing.
              </p>
              <br />
              <p className="font-medium text-base text-slate-800 dark:text-white max-w-xl lg:text-base">
                Please get in touch with the number provided if you would like
                to use our services.
              </p>
              <div className="flex justify-center items-center md:justify-start md:items-start text-left mt-9">
                <div className="pr-6">
                  <h2 className="font-semibold text-slate-800 dark:text-white text-4xl text-center md:text-left">
                    01
                    <span className="text-primary font-semibold text-3xl">
                      +
                    </span>
                  </h2>
                  <p className="font-medium text-sm text-slate-800 dark:text-white">
                    Years Experience
                  </p>
                </div>
                <div className="pl-6">
                  <h2 className="font-semibold text-slate-800 dark:text-white text-4xl text-center md:text-left">
                    2
                    <span className="text-primary font-semibold text-3xl">
                      +
                    </span>
                  </h2>
                  <p className="font-medium text-sm text-slate-800 dark:text-white">
                    Client Completed
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center md:justify-start md:items-start text-sm mt-4 gap-4">
                <Button
                  to="/contact"
                  variant="secondary"
                  className="w-full lg:w-fit"
                  text="Contact me"
                  icon={IoMail}
                  iconClassName="w-[1.10rem] h-[1.10rem]"
                />
                <Button
                  to="/about"
                  variant="primary"
                  className="w-full lg:w-fit"
                  text="About me"
                  icon={FaArrowRight}
                  iconClassName="w-4 h-4 -rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-24 lg:max-w-7xl flex items-center justify-center">
          <div className="w-full text-center">
            <div className="grid gap-3 mb-8">
              <div className="text-sm text-primary dark:text-primary grid gap-3">
                <span className="font-bold tracking-[.30em] uppercase">
                  Contact
                </span>
                <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                  Contact Me
                </span>
                <span className="font-semibold text-slate-800 text-sm lg:text-base dark:text-slate-200 my-2">
                  Want to collaborate or working with me? Get in touch by
                  clicking button below
                </span>
                <div className="flex justify-center items-center text-sm">
                  <Link
                    to="mailto:anugrahprastyo13@gmail.com"
                    className="font-semibold rounded-lg flex justify-center items-center px-6 py-2 border bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80  gap-2"
                  >
                    Contact via Email
                    <IoMail className="w-[1.10rem] h-[1.10rem]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
