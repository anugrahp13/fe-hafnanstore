import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Cart } from "./Cart";
import dataFaq from "../../data/dataFaq";
import { FaqsProps } from "../../types/Faq.type";

interface FaqsType {
  faqs: FaqsProps[];
}

export const Faq: React.FC<FaqsType> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>FAQ - Hafnan Store</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex flex-col items-center justify-center">
          <div className="lg:w-2/3 max-w-4xl text-center grid gap-10">
            <div className="flex flex-col md:flex-row gap-10 items-center shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
              <div className="w-full">
                <div className="grid gap-5">
                  <h2 className="text-2xl font-bold">
                    Frequently Asked Question (FAQ)
                  </h2>
                  <div className="text-gray-700 dark:text-white text-left leading-7 space-y-4">
                    <Cart faqs={dataFaq} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
