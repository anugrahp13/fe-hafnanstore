import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Me - Portfolio Anugrah Prastyo</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase text-base">
                About
              </span>
              <span className="font-bold text-dark mb-10 text-4xl lg:text-5xl dark:text-white">
                More About Me
              </span>
            </div>
            <div className="grid gap-12 mt-8">
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">📞 Connect with Me</div>
                <div className="text-left grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                  <Link
                    to="mailto:anugrahprastyo13@gmail.com"
                    className="gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <IoMail className="w-[1.10rem] h-[1.10rem]" />
                      <h3 className="text-xl font-bold">Email</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      anugrahprastyo13@gmail.com
                    </p>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/anugrah-prastyo/"
                    className="gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <FaLinkedin className="w-5 h-5" />
                      <h3 className="text-xl font-bold">Linkedin</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      Anugrah Prastyo
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/anugrahp13"
                    className="gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-800 rounded-xl cursor-pointer active:scale-95 active:shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="text-center flex justify-center items-center gap-3 mb-3">
                      <FaGithub className="w-5 h-5" />
                      <h3 className="text-xl font-bold">GitHub</h3>
                    </div>
                    <p className="font-medium text-sm text-center line-clamp-2 text-slate-700 dark:text-slate-300">
                      @anugrahp13
                    </p>
                  </Link>
                </div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">⚡ Tech Stack</div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">💼 Work Experiences</div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">🎓 Educations</div>
              </div>
              <div className="text-left grid gap-4 mb-5">
                <div className="text-2xl font-bold">🏆 Award</div>
              </div>
              <div className="text-left grid gap-4">
                <div className="text-2xl font-bold">
                  📜 Certifications, Courses or Bootcamp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
