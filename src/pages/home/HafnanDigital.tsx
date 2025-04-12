import { useEffect, useState } from "react";
import { Button } from "../../components/elements/Button";
import { HafnanDigitalsProps } from "../../types/HafnanDigital.type";
import { LoaderCircle, ShoppingBag } from "lucide-react";

interface HafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const HafnanDigitals: React.FC<HafnanDigitalsType> = ({
  hafnandigitals,
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
  if (!Array.isArray(hafnandigitals)) {
    console.error("Error: hafnandigitals bukan array!", hafnandigitals);
    return (
      <p className="text-red-500">Terjadi kesalahan dalam memuat produk.</p>
    );
  }
  return (
    <>
      {hafnandigitals.map((hafnandigital) => {
        return (
          <div
            className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
            key={hafnandigital.id}
          >
            <div className="mb-3 inline-block">
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
                <picture>
                  <img
                    src={hafnandigital.image || "/image/avatar/404.png"} // Jika kosong, gunakan default
                    alt={`Thumbnails - ${hafnandigital.name}`}
                    data-size="auto"
                    className="lazyload w-full rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
                    onError={(e) =>
                      (e.currentTarget.src = "/image/avatar/404.png")
                    }
                  />
                </picture>
              </div>
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
                icon={ShoppingBag}
                iconClassName="w-[1.10rem] h-[1.10rem]"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
