/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/elements/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Services } from "./Services";
import dataService from "../../data/dataService";
import dataHafnanMart from "../../data/dataHafnanMart";
import dataHafnanDigital from "../../data/dataHafnanDigital";
import { HafnanMarts } from "./HafnanMart";
import { HafnanDigitals } from "./HafnanDigital";
import { HafnanMartsProps } from "../../types/HafnanMart.type";
import { HafnanDigitalsProps } from "../../types/HafnanDigital.type";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Package } from "lucide-react";

export const Home = () => {
  const [sortedHafnanMarts, setSortedHafnanMarts] = useState<
    HafnanMartsProps[]
  >([]);
  const [sortedHafnanDigitals, setSortedHafnanSigitals] = useState<
    HafnanDigitalsProps[]
  >([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    // ID hafnanmart yang ingin di tampilkan
    const selectedHafnanmartIds = [1, 2, 4, 5, 6, 7];

    // ID hafnandigital yang ingin di tampilkan
    const selectedHafnandigitalIds = [1, 2, 3, 4, 5, 6];

    //Filter hafnanmart berdasarkan ID yang dipilih
    const filteredHafnanMarts = dataHafnanMart
      .filter((hafnanmart) => selectedHafnanmartIds.includes(hafnanmart.id))
      .map((item) => ({
        ...item,
      }));

    //Filter hafnandigital berdasarkan ID yang dipilih
    const filteredHafnanDigital = dataHafnanDigital.filter((hafnandigital) =>
      selectedHafnandigitalIds.includes(hafnandigital.id)
    );
    // Set hasil filter ke dalam state
    setSortedHafnanMarts(filteredHafnanMarts);
    setSortedHafnanSigitals(filteredHafnanDigital);
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
            src="/image/banner/banner.webp"
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
                  icon={Package}
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
                    src="/image/avatar/hafnanmart.webp"
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
            <div className="overflow-hidden w-full">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={5}
                slidesToScroll={3}
                swipeToSlide={true} // Memastikan swipe lebih natural
                touchThreshold={20} // Mengurangi sensitivitas swipe
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 3 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ]}
              >
                {sortedHafnanMarts.map((product) => (
                  <div key={product.id} className="p-2">
                    <HafnanMarts hafnanmarts={[product]} />
                  </div>
                ))}
              </Slider>
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
                    src="/image/avatar/hafnandigital.webp"
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

            <div className="overflow-hidden w-full">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={4} // Menampilkan produk awal sekaligus
                slidesToScroll={3} // Menggeser produk setiap kali swipe
                swipeToSlide={true} // Memastikan swipe lebih natural
                touchThreshold={20} // Mengurangi sensitivitas swipe
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 3 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ]}
              >
                {sortedHafnanDigitals.map((product) => (
                  <div key={product.id} className="p-2">
                    <HafnanDigitals hafnandigitals={[product]} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
