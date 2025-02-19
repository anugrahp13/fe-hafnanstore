import { Button } from "../../components/elements/Button";
import { HafnanDigitalsProps } from "../home/types/HafnanDigital.type";
import { MdOutlineShoppingBag } from "react-icons/md";

interface CartHafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const Cart: React.FC<CartHafnanDigitalsType> = ({ hafnandigitals }) => {
  return (
    <>
      {hafnandigitals.map((hafnandigital) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
          key={hafnandigital.id}
        >
          <div className="mb-3 inline-block">
            <picture>
              <img
                src={hafnandigital.image}
                data-size="auto"
                alt={`Thumnails - ${hafnandigital.name}`}
                className="lazyload rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
              />
            </picture>
          </div>
          <h3 className="text-3xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
            <span>{hafnandigital.name}</span>
          </h3>
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
      ))}
    </>
  );
};
