import { Link } from "react-router-dom";
import { HafnanMartsProps } from "./types/HafnanMart.type";
import { createSlug } from "../../components/elements/CreateSlug";

interface HafnanMartsType {
  hafnanmarts: HafnanMartsProps[];
}

export const HafnanMarts: React.FC<HafnanMartsType> = ({ hafnanmarts }) => {
  return (
    <>
      {hafnanmarts.map((hafnanmart) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
          key={hafnanmart.id}
        >
          <div className="mb-3 inline-block">
            <picture>
              <img
                src={hafnanmart.image}
                data-size="auto"
                alt={`Thumnails - ${hafnanmart.name}`}
                className="lazyload rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
              />
            </picture>
          </div>
          <Link
            to={`/products/${createSlug(hafnanmart.name)}`}
            className="text-base lg:text-sm font-semibold text-primary dark:text-slate-200 hover:dark:text-white flex justify-between items-center"
          >
            <span>{hafnanmart.category}</span>
          </Link>
          <h3 className="text-3xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
            <span>{hafnanmart.name}</span>
          </h3>
          {/* <h3 className="text-lg lg:text-base text-primary font-bold tracking-tight line-clamp-2 mb-3">
            <span>{hafnanmart.price}</span>
          </h3> */}
          <div className="flex flex-wrap justify-center items-center text-sm gap-4">
            {hafnanmart.marketplaces.map((marketplace) => (
              <a href={marketplace.url} key={marketplace.name} target="_blank">
                <picture>
                  <img
                    src={marketplace.logo}
                    data-size="auto"
                    alt={marketplace.name}
                    className="lazyload rounded-xl object-cover max-w-full w-12 h-12 lg:w-7 lg:h-7 lazyloaded"
                  />
                </picture>
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
