import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Me - Portfolio Anugrah Prastyo</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="max-w-4xl text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase text-base">
                Contact
              </span>
              <span className="font-bold text-dark text-4xl mt-3 lg:text-5xl dark:text-white">
                Let's Work <span className="text-primary">Together</span>
              </span>
            </div>
            <div className="text-3xl font-medium text-dark lg:text-5xl grid gap-4 dark:text-white">
              <p>Do you have a project to work on?</p>
              <p>Want to cooperate or</p>
              <p>
                Need{" "}
                <span className="text-primary font-semibold">
                  Web Development
                </span>{" "}
                services?
              </p>
            </div>
            <div
              className="flex justify-center items-center text-sm aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Link
                to="mailto:anugrahprastyo13@gmail.com"
                className="font-semibold rounded-lg flex justify-center items-center px-6 py-2 border bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out gap-2"
              >
                Contact via Email
                <IoMail className="w-[1.10rem] h-[1.10rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
