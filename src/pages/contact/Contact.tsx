import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactsProps } from "./types/Contact.type";
import { SectionLeft } from "./SectionLeft";
import dataContact from "../../data/dataContact";

interface ContactsType {
  contacts: ContactsProps[];
}
export const Contact: React.FC<ContactsType> = () => {
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
        <div className="container mx-auto px-4 lg:max-w-7xl flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl text-center grid gap-10">
            <div className="bg-gray-200 p-6 flex flex-col md:flex-row gap-10 border rounded-lg items-center">
              <SectionLeft contacts={dataContact} />
              <div className="w-full md:w-3/4">
                <div className="grid gap-5">
                  <h2 className="text-2xl font-bold">Contact</h2>
                  <div className="text-gray-700 dark:text-white text-left leading-7">
                    <ul
                      role="list"
                      className="list-disc mb-4 marker:text-sky-400 text-left md:text-left"
                    >
                      <li>
                        <span className="font-bold">Tokopedia :</span> Hafnan99
                      </li>
                      <li>
                        <span className="font-bold">Shopee :</span> Hafnanmart
                      </li>
                    </ul>
                    <p>
                      "Dapatkan harga terbaik dengan berkunjung langsung ke toko
                      offline kami! Klik{" "}
                      <span className="font-bold">Lihat Peta</span> untuk
                      menemukan lokasi kami. Jika ada pertanyaan tentang produk,
                      jangan ragu untuk klik{" "}
                      <span className="font-bold">Hubungi</span> dan tim kami
                      siap membantu!" 🚀
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
      </section>
    </>
  );
};
