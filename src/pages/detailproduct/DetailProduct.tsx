import { Helmet, HelmetProvider } from "react-helmet-async";
import { NexasitesProps } from "../../types/Nexasite.type";
import useBreadcrumbStore from "../../stores/useBreadcrumbStore";
import { useEffect } from "react";
import Breadcrumb from "../../components/elements/Breadcrumb";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { FeatureProduct } from "./FeatureProduct";
import { CompotibleProduct } from "./CompotibleProduct";
import { ChooseProduct } from "./ChooseProduct";
import { InstructionProduct } from "./InstructionProduct";
import { ToolProduct } from "./ToolProduct";
import { AboutProduct } from "./AboutProduct";
import { LanguageProduct } from "./LanguageProduct";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const DetailProduct = ({ nexasites }: DetailProductProps) => {
  const { setBreadcrumbs } = useBreadcrumbStore();
  useEffect(() => {
    window.scrollTo(0, 0);
    setBreadcrumbs([
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Nexasite", path: "/products/nexasite" },
      { label: nexasites.role, path: "" },
      { label: nexasites.name, path: "" },
    ]);

    return () => {
      // Reset breadcrumbs when component unmounts if needed
      // Or you can manage this in the parent component
    };
  }, [nexasites, setBreadcrumbs]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio Anugrah Prastyo</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto p-4 lg:max-w-7xl">
          {/* Product Content */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4 shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
              {/* Breadcrumb */}
              <Breadcrumb className="hidden lg:flex" />
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-bold">{nexasites.name}</div>
                <div className="flex justify-between items-center text-base text-gray-600 gap-2">
                  <div className="flex justify-center items-center dark:text-white gap-4">
                    <p>
                      by{" "}
                      <Link
                        to="#"
                        className="text-primary dark:text-white dark:hover:underline font-semibold"
                      >
                        {nexasites.author}
                      </Link>
                    </p>
                    <div className="flex items-center gap-1">
                      <Star
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                      />
                      <span className="mx-1 font-bold">4.8</span>
                      <span className="text-sm">(2 Ulasan)</span>
                    </div>
                  </div>
                  <p className="flex items-center text-dark dark:text-white gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-bold">{nexasites.sale} Sales</span>
                  </p>
                </div>
                {/* <p className="text-2xl font-bold">
                  Rp. {""}
                  {nexasites.price.toLocaleString("id-ID")}
                </p> */}
                <div className="grid gap-4 mt-4">
                  <picture>
                    <img
                      src={nexasites.image}
                      alt={nexasites.name}
                      data-size="auto"
                      className="rounded-xl w-full lazyload object-cover brightness-90 dark:brightness-100 lazyloaded"
                    />
                  </picture>
                  <div className="grid text-left leading-relaxed gap-2">
                    {/* Bagian About */}
                    <AboutProduct nexasites={nexasites} />
                    {/* Bagian Feature */}
                    <FeatureProduct nexasites={nexasites} />
                    {/* Bagian Compotible */}
                    <CompotibleProduct nexasites={nexasites} />
                    {/* Bagian Review */}
                    <ChooseProduct nexasites={nexasites} />
                    {/* Bagian Instructions */}
                    <InstructionProduct nexasites={nexasites} />

                    <div>
                      Semoga dengan adanya template{" "}
                      <span className="font-bold">
                        Landing Page Simple Portfolio
                      </span>{" "}
                      bisa membuat kamu mendapatkan klien atau kerjaan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="grid gap-8">
                {/* Bagian Bahasa Pemrograman */}
                <LanguageProduct nexasites={nexasites} />

                {/* Bagian Alat */}
                <ToolProduct nexasites={nexasites} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
