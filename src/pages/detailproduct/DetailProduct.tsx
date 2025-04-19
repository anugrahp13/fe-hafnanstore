import { Helmet, HelmetProvider } from "react-helmet-async";
import useBreadcrumbStore from "../../stores/useBreadcrumbStore";
import { useEffect } from "react";
import Breadcrumb from "../../components/elements/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { FeatureProduct } from "./FeatureProduct";
import { CompotibleProduct } from "./CompotibleProduct";
import { ChooseProduct } from "./ChooseProduct";
import { InstructionProduct } from "./InstructionProduct";
import { ToolProduct } from "./ToolProduct";
import { AboutProduct } from "./AboutProduct";
import { LanguageProduct } from "./LanguageProduct";
import { PriceProduct } from "./PriceProduct";
import { CreatorProduct } from "./CreatorProduct";
import { useNexasiteStore } from "../../stores/useDetailProductStore";
import { ReviewProduct } from "./ReviewProduct";
import { InformationProduct } from "./InformationProduct";

export const DetailProduct = () => {
  const { productSlug } = useParams();
  const { getProductBySlug } = useNexasiteStore();
  const { setBreadcrumbs } = useBreadcrumbStore();

  // Dapatkan produk berdasarkan slug
  const product = getProductBySlug(productSlug || "");
  useEffect(() => {
    if (!product) return;

    window.scrollTo(0, 0);
    const newBreadcrumbs = [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Nexasite", path: "/products/nexasite" },
      { label: product.name, path: "" },
    ];

    setBreadcrumbs(newBreadcrumbs);
  }, [product, setBreadcrumbs]); // Pastikan product stabil

  if (!product) return <div>Product not found</div>;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{product.name} | Portfolio Anugrah Prastyo</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto p-4 lg:max-w-7xl space-y-6">
          {/* Product Content */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4 shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
              {/* Breadcrumb */}
              <Breadcrumb className="hidden lg:flex" />
              <div className="flex flex-col gap-2">
                <div className="text-4xl font-bold">{product.name}</div>
                <div className="flex justify-between items-center text-base text-gray-600 gap-2">
                  <div className="flex justify-center items-center dark:text-white gap-4">
                    <p>
                      by{" "}
                      <Link
                        to={
                          product.creator
                            ? `/creator/${product.creator.username}`
                            : "#"
                        }
                        className="text-primary dark:text-white dark:hover:underline font-semibold"
                      >
                        {product.creator
                          ? product.creator.name
                          : product.author}
                      </Link>
                    </p>
                    <div className="flex items-center gap-1">
                      <Star
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                      />
                      <span className="mx-1 font-bold">4.8</span>
                      <span className="text-sm">({product.sale} Ulasan)</span>
                    </div>
                  </div>
                  <p className="flex items-center text-dark dark:text-white gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-bold">{product.sale} Sales</span>
                  </p>
                </div>
                <div className="grid gap-4 mt-4">
                  <picture>
                    <img
                      src={product.image}
                      alt={product.name}
                      data-size="auto"
                      className="rounded-xl w-full lazyload object-cover brightness-90 dark:brightness-100 lazyloaded"
                    />
                  </picture>
                  <div className="grid text-left leading-relaxed gap-2">
                    {/* Bagian About */}
                    <AboutProduct nexasites={product} />
                    {/* Bagian Feature */}
                    <FeatureProduct nexasites={product} />
                    {/* Bagian Compotible */}
                    <CompotibleProduct nexasites={product} />
                    {/* Bagian Review */}
                    <ChooseProduct nexasites={product} />
                    {/* Bagian Instructions */}
                    <InstructionProduct nexasites={product} />

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
                {/* Bagian Harga */}
                <PriceProduct nexasites={product} />

                {/* Bagian Creator */}
                <CreatorProduct nexasites={product} />

                {/* Bagian Language Programming */}
                <LanguageProduct nexasites={product} />

                {/* Bagian Tool */}
                <ToolProduct nexasites={product} />

                {/* Bagian Information Product */}
                <InformationProduct nexasites={product} />
              </div>
            </div>
          </div>
          <div className="grid justify-center items-center gap-2">
            <ReviewProduct nexasites={product} />
          </div>
        </div>
      </section>
    </>
  );
};
