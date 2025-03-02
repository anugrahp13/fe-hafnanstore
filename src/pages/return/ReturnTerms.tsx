import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReturnTermsProps } from "./types/ReturnTerms.type";
import dataReturnTerms from "../../data/dataReturnTerms";
import { Cart } from "./Cart";

interface ReturnTermsType {
  returnterms: ReturnTermsProps[];
}
export const ReturnTerms: React.FC<ReturnTermsType> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Return Terms - Hafnan Store</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex flex-col items-center justify-center">
          <div className="max-w-7xl text-center grid gap-10">
            <div className="bg-gray-200 dark:bg-slate-800 p-6 flex flex-col md:flex-row gap-10 border rounded-lg items-center">
              <div className="w-full">
                <div className="grid gap-5">
                  <h2 className="text-2xl font-bold">Syarat dan Ketentuan</h2>
                  <div className="text-gray-700 dark:text-white text-left leading-7 space-y-4">
                    <Cart returnterms={dataReturnTerms} />
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
