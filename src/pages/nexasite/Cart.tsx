import { useEffect, useState } from "react";
import { Button } from "../../components/elements/Button";
import { NexasitesProps } from "../../types/Nexasite.type";
import dataNexasite from "../../data/dataNexasite";
import { Link } from "react-router-dom";
import { LoaderCircle, Video } from "lucide-react";
import { createSlug } from "../../components/elements/CreateSlug";

interface CartNexasitesType {
  nexasites: NexasitesProps[];
  searchQuery?: string; // Query pencarian (opsional)
}

export const Cart: React.FC<CartNexasitesType> = ({
  nexasites = [],
  searchQuery = "",
}) => {
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
  if (!Array.isArray(nexasites)) {
    console.error("Error: nexasites bukan array!", nexasites);
    return (
      <p className="text-red-500">Terjadi kesalahan dalam memuat produk.</p>
    );
  }

  // Filter produk berdasarkan pencarian
  const filteredProducts = dataNexasite.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Jika tidak ada hasil pencarian, tampilkan gambar "Produk Tidak Ditemukan"
  if (filteredProducts.length === 0) {
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
      {filteredProducts.map((nexasites) => {
        return (
          <div
            className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
            key={nexasites.id}
          >
            <Link
              to={`/products/nexasite/${createSlug(nexasites.name)}`}
              className="mb-3 inline-block"
            >
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
                <picture>
                  <img
                    src={nexasites.image}
                    data-size="auto"
                    alt={nexasites.name}
                    className="lazyload w-full rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
                  />
                </picture>
              </div>
            </Link>
            <div className="tracking-tight line-clamp-2 mb-3 min-h-[3rem] overflow-hidden">
              <p className="text-base font-bold truncate">{nexasites.name}</p>
              <p className="text-xs truncate">
                by{" "}
                <Link to="#" className="font-semibold">
                  {nexasites.author}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-center text-sm gap-4">
              <div className="tracking-tight line-clamp-2 min-h-[3rem]">
                <p className="text-lg font-bold">
                  Rp.{nexasites.price.toLocaleString("id-ID")}
                </p>
                <p className="text-xs">{nexasites.sale} Terjual</p>
              </div>
              <Button
                href={nexasites.url}
                variant="primary"
                text="Lihat Demo"
                className="w-full lg:w-fit"
                icon={Video}
                iconClassName="w-4 h-4"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
