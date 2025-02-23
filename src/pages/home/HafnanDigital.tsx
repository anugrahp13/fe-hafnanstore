import { useState } from "react";
import { Button } from "../../components/elements/Button";
import { HafnanDigitalsProps } from "./types/HafnanDigital.type";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillProduct } from "react-icons/ai";

interface HafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const HafnanDigitals: React.FC<HafnanDigitalsType> = ({
  hafnandigitals,
}) => {
  return (
    <>
      {hafnandigitals.map((hafnandigital) => {
        const [isLoading, setIsLoading] = useState(true);
        return (
          <div
            className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
            key={hafnandigital.id}
          >
            <div className="mb-3 inline-block relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl">
                  <AiFillProduct className="text-gray-500 text-5xl" />
                </div>
              )}
              <LazyLoadImage
                src={hafnandigital.image}
                alt={`Thumbnails - ${hafnandigital.name}`}
                effect="blur" // Efek blur saat loading
                className={`rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 transition-transform hover:scale-110 ${
                  isLoading ? "hidden" : "block"
                }`}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)} // Pastikan ikon tetap muncul jika gagal load
              />
            </div>
            <div className="text-lg lg:text-base font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
              <span>{hafnandigital.name}</span>
            </div>
            <div className="flex flex-wrap justify-center items-center text-sm gap-4">
              <Button
                href={hafnandigital.url}
                variant="tertiary"
                text="Beli Sekarang"
                className="w-full lg:w-fit px-6 py-2"
                icon={MdOutlineShoppingBag}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
