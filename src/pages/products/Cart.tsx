/* eslint-disable react/prop-types */
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../../components/elements/Button";
import { createSlug } from "../../components/elements/CreateSlug";
import { ProductsProps } from "./types/Products.type";
import { AiFillProduct } from "react-icons/ai";
import dataHafnanMart from "../../data/dataHafnanMart";
import dataHafnanDigital from "../../data/dataHafnanDigital";

interface ProductsType {
  products: ProductsProps[];
}
export const Cart: React.FC<ProductsType> = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        const productCount =
          product.name === "Hafnan Mart"
            ? dataHafnanMart.length
            : product.name === "Hafnan Digital"
            ? dataHafnanDigital.length
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
              <picture>
                <img
                  src={product.image}
                  data-size="auto"
                  alt={product.name}
                  className="lazyload rounded-xl object-cover max-w-full brightness-90 dark:brightness-100 lazyloaded transition-transform hover:scale-110"
                />
              </picture>
            </Link>
            <div className="flex justify-between items-center tracking-tight mb-3">
              <div className="text-xl dark:text-white font-bold">
                {product.name}
              </div>
              <div className="flex justify-center items-center text-base dark:text-white font-semibold gap-1">
                <span>
                  <AiFillProduct />
                </span>
                <span>{productCount}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center text-sm gap-4">
              <Button
                to={`/products/${createSlug(product.name)}`}
                variant="secondary"
                text="Lihat Sekarang"
                className="w-full lg:w-fit px-6 py-2"
                icon={FaBook}
                iconClassName="w-3.5 h-3.5"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
