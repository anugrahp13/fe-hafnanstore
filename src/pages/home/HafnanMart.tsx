import { useEffect, useState } from "react";
import { HafnanMartsProps } from "../../types/HafnanMart.type";
import { LoaderCircle } from "lucide-react";
import { ButtonMarket } from "../../components/elements/ButtonMarket";

interface HafnanMartsType {
  hafnanmarts: HafnanMartsProps[];
}

export const HafnanMarts: React.FC<HafnanMartsType> = ({ hafnanmarts }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulasikan delay loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center min-h-[400px] text-gray-500 text-center">
        <LoaderCircle className="text-6xl animate-spin text-blue-500" />
        <p className="mt-4">Produk sedang dimuat...</p>
      </div>
    );
  }
  // Jika hafnanmarts bukan array, tampilkan pesan error
  if (!Array.isArray(hafnanmarts)) {
    console.error("Error: hafnanmarts bukan array!", hafnanmarts);
    return (
      <p className="text-red-500">Terjadi kesalahan dalam memuat produk.</p>
    );
  }
  return (
    <>
      {hafnanmarts.map((hafnanmart) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
          key={hafnanmart.id}
        >
          <div className="mb-3 inline-block">
            <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
              <picture>
                <img
                  src={hafnanmart.image || "/image/avatar/404.png"}
                  alt={`Thumbnails - ${hafnanmart.name}`}
                  className="lazyload w-full rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 transition-transform hover:scale-110"
                  onError={(e) =>
                    (e.currentTarget.src = "/image/avatar/404.png")
                  }
                />
              </picture>
            </div>
          </div>
          <div className="text-base lg:text-sm font-semibold text-primary dark:text-slate-200 hover:dark:text-white flex justify-between items-center">
            <span>{hafnanmart.category}</span>
          </div>
          <div className="text-xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
            <span>{hafnanmart.name}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center text-sm gap-2">
            {hafnanmart.marketplaces.map((marketplace) => (
              <ButtonMarket
                key={marketplace.name}
                href={marketplace.url}
                icon={marketplace.icon}
                variant={marketplace.name === "Shopee" ? "shopee" : "whatsApp"}
                text={marketplace.name}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
