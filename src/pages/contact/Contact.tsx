// pages/contact/Contact.tsx
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SectionLeft } from "./SectionLeft";
import { useContactStore } from "../../stores/useContactStore";


export const Contact = () => {
  useContactStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact - Hafnan Store</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex flex-col items-center justify-center">
          <div className="max-w-4xl text-center grid gap-10">
            <div className="flex flex-col md:flex-row gap-10 items-center shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
              <SectionLeft />
              <div className="w-full md:w-3/4 order-1 md:order-2">
                <div className="grid gap-5">
                  <h2 className="text-2xl font-bold">Contact</h2>
                  <div className="text-gray-700 dark:text-white text-left leading-7 space-y-4">
                    <div className="grid gap-2">
                      <p>
                        <span className="font-bold">Tokopedia :</span> Hafnan99
                      </p>
                      <p>
                        <span className="font-bold">Shopee :</span> Hafnanmart
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p>
                        "Dapatkan harga terbaik dengan berkunjung langsung ke
                        toko offline kami! Klik{" "}
                        <span className="font-bold">Lihat Peta</span> untuk
                        menemukan lokasi kami, bila ada pertanyaan tentang
                        produk, jangan ragu untuk klik{" "}
                        <span className="font-bold">Hubungi</span>, jika anda
                        ingin berbisnis dengan kami jangan ragu untuk klik Email
                        dan tim kami siap membantu!" 🚀
                      </p>
                      <p className="text-red-500">
                        NB: Barang yang di jual di marketplace belum semua di
                        upload dan Harga di Marketplace sudah plus biaya Admin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};