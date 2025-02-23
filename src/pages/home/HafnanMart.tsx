import { useState } from "react";
import { HafnanMartsProps } from "./types/HafnanMart.type";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillProduct } from "react-icons/ai";

interface HafnanMartsType {
  hafnanmarts: HafnanMartsProps[];
}

export const HafnanMarts: React.FC<HafnanMartsType> = ({ hafnanmarts }) => {
  return (
    <>
      {hafnanmarts.map((hafnanmart) => {
        const [isLoading, setIsLoading] = useState(true);
        return (
          <div
            className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
            key={hafnanmart.id}
          >
            <div className="mb-3 inline-block relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl">
                  <AiFillProduct className="text-gray-500 text-5xl" />
                </div>
              )}
              <LazyLoadImage
                src={hafnanmart.image}
                alt={`Thumbnails - ${hafnanmart.name}`}
                effect="blur" // Efek blur saat loading
                className={`rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 transition-transform hover:scale-110 ${
                  isLoading ? "hidden" : "block"
                }`}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)} // Pastikan ikon tetap muncul jika gagal load
              />
            </div>
            <div className="text-base lg:text-sm font-semibold text-primary dark:text-slate-200 hover:dark:text-white flex justify-between items-center">
              <span>{hafnanmart.category}</span>
            </div>
            <h3 className="text-xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
              <span>{hafnanmart.name}</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center text-sm gap-4">
              {hafnanmart.marketplaces.map((marketplace) => (
                <a
                  href={marketplace.url}
                  key={marketplace.name}
                  target="_blank"
                >
                  <picture>
                    <img
                      src={marketplace.logo}
                      data-size="auto"
                      alt={marketplace.name}
                      className="lazyload rounded-xl object-cover max-w-full w-10 h-10 lg:w-7 lg:h-7 lazyloaded"
                    />
                  </picture>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
