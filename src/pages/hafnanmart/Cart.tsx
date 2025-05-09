// components/Cart.tsx
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { HafnanMartsProps } from "../../types/HafnanMart.type";
import { ButtonMarket } from "../../components/elements/ButtonMarket";

interface CartProps {
  products: HafnanMartsProps[];
}

export const Cart = ({ products }: CartProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  if (!Array.isArray(products)) {
    console.error("Error: products bukan array!", products);
    return (
      <p className="text-red-500">Terjadi kesalahan dalam memuat produk.</p>
    );
  }

  if (products.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center min-h-[400px] text-gray-500 text-center">
        <img
          src="/image/avatar/404.png"
          alt="Produk Tidak Ditemukan"
          className="w-64 h-64 object-contain"
        />
        <p className="mt-4">Produk yang Anda cari tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
          key={product.id}
        >
          <div className="mb-3 inline-block">
            <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
              <picture>
                <img
                  src={product.image || "/image/avatar/404.png"}
                  alt={`Thumbnails - ${product.name}`}
                  className="lazyload w-full rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 transition-transform hover:scale-110"
                  onError={(e) =>
                    (e.currentTarget.src = "/image/avatar/404.png")
                  }
                />
              </picture>
            </div>
          </div>
          <div className="text-base lg:text-sm font-semibold text-primary dark:text-slate-200 hover:dark:text-white flex justify-between items-center">
            <span>{product.category}</span>
          </div>
          <div className="text-xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
            <span>{product.name}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center text-sm gap-2">
            {product.marketplaces.map((marketplace) => (
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
