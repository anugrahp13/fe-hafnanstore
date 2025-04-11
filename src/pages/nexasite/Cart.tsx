import { useEffect, useState } from "react";
import { Button } from "../../components/elements/Button";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { NexasitesProps } from "../home/types/Nexasite.type";
import dataNexasite from "../../data/dataNexasite";

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
        <AiOutlineLoading3Quarters className="text-6xl animate-spin text-blue-500" />
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
            <div className="mb-3 inline-block">
              <picture>
                <img
                  src={nexasites.image || "/image/avatar/404.png"} // Jika kosong, gunakan default
                  alt={`Thumbnails - ${nexasites.name}`}
                  className="rounded-xl object-cover w-full brightness-90 dark:brightness-100 transition-transform hover:scale-110"
                  onError={(e) =>
                    (e.currentTarget.src = "/image/avatar/404.png")
                  }
                />
              </picture>
            </div>
            <h3 className="text-xl lg:text-lg font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
              <span>{nexasites.name}</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center text-sm gap-4">
              <Button
                href={nexasites.url}
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
