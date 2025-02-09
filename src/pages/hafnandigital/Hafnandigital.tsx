import { useEffect } from "react";
import dataHafnanDigital from "../../data/dataHafnanDigital";
import { HafnanDigitalsProps } from "../home/types/HafnanDigital.type";
import { Cart } from "./Cart";

interface HafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const HafnanDigitals: React.FC<HafnanDigitalsType> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase">
                Products
              </span>
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                Hafnan Digital
              </span>
            </div>
            <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Cart hafnandigitals={dataHafnanDigital} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
