/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../../components/elements/Button";
import { createSlug } from "../../components/elements/CreateSlug";
import { ProductsProps } from "./types/Products.type";
import dataHafnanMart from "../../data/dataHafnanMart";
import dataHafnanDigital from "../../data/dataHafnanDigital";
import { useEffect, useState } from "react";
import dataNexasite from "../../data/dataNexasite";
import { Eye, LoaderCircle, Package } from "lucide-react";

interface ProductsType {
  products: ProductsProps[];
}
export const Cart: React.FC<ProductsType> = ({ products }) => {
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
  return (
    <>
      {products.map((product) => {
        const productCount =
          product.name === "Hafnan Mart"
            ? dataHafnanMart.length
            : product.name === "Hafnan Digital"
            ? dataHafnanDigital.length
            : product.name === "Nexasite"
            ? dataNexasite.length
            : 0;
        return (
          <div
            className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1"
            key={product.id}
          >
            <Link
              to={`/products/${createSlug(product.name)}`}
              className="mb-3 inline-block"
            >
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
                <picture>
                  <img
                    src={product.image}
                    data-size="auto"
                    alt={product.name}
                    className="lazyload w-full rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
                  />
                </picture>
              </div>
            </Link>
            <div className="flex justify-between items-center tracking-tight mb-3">
              <div className="text-xl dark:text-white font-bold">
                {product.name}
              </div>
              <div className="flex justify-center items-center text-base dark:text-white font-semibold gap-1">
                <span>
                  <Package className="w-5 h-5" />
                </span>
                <span>{productCount}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center text-sm gap-4">
              <Button
                to={`/products/${createSlug(product.name)}`}
                variant="secondary"
                text="Lihat Sekarang"
                className="w-full lg:w-fit"
                icon={Eye}
                iconClassName="w-4 h-4"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
