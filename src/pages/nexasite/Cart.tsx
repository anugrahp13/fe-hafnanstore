// components/Cart.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoaderCircle, Video } from "lucide-react";
import { NexasitesProps } from "../../types/Nexasite.type";
import { Button } from "../../components/elements/Button";
import { useNexasiteStore } from "../../stores/useNexasiteStore";

interface CartProps {
  products: NexasitesProps[];
}

export const Cart = ({ products }: CartProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const resolveCreatorLink = useNexasiteStore(
    (state) => state.resolveCreatorLink
  );

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
          key={product.id}
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
        >
          <Link
            to={`/products/nexasite/${product.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
              <picture>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-xl object-cover brightness-90 dark:brightness-100 hover:scale-110 transition-transform"
                />
              </picture>
            </div>
          </Link>

          <div className="tracking-tight line-clamp-2 mt-1 mb-3 min-h-[3rem]">
            <h3 className="text-2xl font-bold truncate">
              {product.name}
            </h3>
            <p className="text-sm">
              by{" "}
              <Link
                to={resolveCreatorLink(product)}
                className="text-primary dark:text-white dark:hover:underline font-semibold"
              >
                {product.creator?.name || product.author}
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap justify-between items-center text-sm gap-4">
            <div className="tracking-tight line-clamp-2 min-h-[3rem]">
              <p className="text-lg font-bold">
                Rp. {""}
                {product.price.toLocaleString("id-ID")}
              </p>
              <p className="text-xs">{product.sale} Terjual</p>
            </div>
            <Button
              href={product.url}
              variant="primary"
              text="Lihat Demo"
              className="w-full lg:w-fit"
              icon={Video}
              iconClassName="w-4 h-4"
            />
          </div>
        </div>
      ))}
    </>
  );
};
