/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/elements/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AiOutlineProduct } from "react-icons/ai";
import { Services } from "./Services";
import dataService from "../../data/dataService";
import dataHafnanMart from "../../data/dataHafnanMart";
import dataHafnanDigital from "../../data/dataHafnanDigital";
import { HafnanMarts } from "./HafnanMart";
import { HafnanDigitals } from "./HafnanDigital";
import { HafnanMartsProps } from "./types/HafnanMart.type";

export const Home = () => {
  const [sortedHafnanMarts, setSortedHafnanMarts] = useState<
    HafnanMartsProps[]
  >([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    // ID hafnanmart yang ingin di tampilkan
    const selectedHafnanmartIds = [1, 2, 4, 5, 6, 7];

    //Filter hafnanmart berdasarkan ID yang dipilih
    const filteredHafnanMarts = dataHafnanMart.filter((hafnanmart) =>
      selectedHafnanmartIds.includes(hafnanmart.id)
    );
    // Set hasil filter ke dalam state
    setSortedHafnanMarts(filteredHafnanMarts);
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Hafnan Store – Solusi Praktis untuk Kebutuhan Harian Anda
          </title>
        </Helmet>
      </HelmetProvider>
      {/* Hero Section */}
      <section className="dark:bg-dark">
        <div className="relative">
          <img
            src="/image/banner/banner.png"
            alt="Banner Hafnan Store"
            className="w-full pt-[3.8rem] h-[41rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-25"></div>
          <div className="container mx-auto px-4 py-48 lg:max-w-7xl flex items-center justify-center absolute inset-0">
            <div className="w-full md:text-left text-center relative grid gap-4">
              <h1 className="text-xl font-semibold text-white dark:text-slate-200 leading-[4rem]">
                Hi 👋, Selamat Datang di Hafnan Store
                <span className="block font-bold text-white mt-2 text-4xl lg:text-5xl dark:text-white">
                  Solusi Praktis Untuk <br />
                  Kebutuhan Harian Anda
                </span>
              </h1>
              <h2 className="text-white text-base lg:text-lg">
                Kunjungi semua produk kami dan dapatkan apa yang anda inginkan
              </h2>
              <div className="flex md:justify-start justify-center items-center text-sm gap-4">
                <Button
                  to="/products"
                  variant="secondary"
                  text="Lihat Produk"
                  icon={AiOutlineProduct}
                  iconClassName="w-[1.10rem] h-[1.10rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <Services services={dataService} />

      {/* Section HafnanMart */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-14 lg:max-w-7xl flex items-center justify-center">
          <div className="text-left grid gap-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <picture>
                  <img
                    src="/image/avatar/hafnanmart.png"
                    data-size="auto"
                    alt="Logo - HafnanMart"
                    className="lazyload rounded-full object-cover max-w-full w-10 h-10 dark:brightness-75 lazyloaded"
                  />
                </picture>
                <span className="font-bold text-lg">Hafnan Mart</span>
              </div>

              <Link
                to="/products/hafnan-mart"
                className="text-primary dark:text-white hover:underline font-semibold"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <HafnanMarts hafnanmarts={sortedHafnanMarts} />
            </div>
          </div>
        </div>
      </section>

      {/* Section Hafnan Digital */}
      <section className="dark:bg-dark">
        <div className="container mx-auto px-4 py-14 lg:max-w-7xl flex items-center justify-center">
          <div className="text-left grid gap-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <picture>
                  <img
                    src="/image/avatar/hafnanmart.png"
                    data-size="auto"
                    alt="Logo - HafnanMart"
                    className="lazyload rounded-full object-cover max-w-full w-10 h-10 dark:brightness-75 lazyloaded"
                  />
                </picture>
                <span className="font-bold text-lg">Hafnan Digital</span>
              </div>

              <Link
                to="/products/hafnan-digital"
                className="text-primary dark:text-white hover:underline font-semibold"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <HafnanDigitals hafnandigitals={dataHafnanDigital} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
