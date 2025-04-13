import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const About = () => {
  const [activeTab, setActiveTab] = useState("store");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <HelmetProvider>
        <Helmet>
          <title>About - Hafnan Store</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <picture>
              <img
                src="/image/banner/banner hafnan store.png"
                alt="Banner Hafnan Store"
                className="w-full max-h-[41rem] object-contain rounded-3xl"
              />
            </picture>
            <div className="flex flex-col md:flex-row gap-10">
              {/* Sidebar */}
              <div className="w-full md:w-1/4">
                <h2 className="font-bold text-lg uppercase">
                  Tentang Hafnan Store
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    className={`p-3 text-center rounded-lg font-semibold ${
                      activeTab === "store"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => setActiveTab("store")}
                  >
                    Hafnan Store
                  </button>
                  <button
                    className={`p-3 text-center rounded-lg font-semibold ${
                      activeTab === "mart"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => setActiveTab("mart")}
                  >
                    Hafnan Mart
                  </button>
                  <button
                    className={`p-3 text-center rounded-lg font-semibold ${
                      activeTab === "digital"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => setActiveTab("digital")}
                  >
                    Hafnan Digital
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4">
                {activeTab === "store" ? (
                  <div className="grid gap-8">
                    <h2 className="text-2xl font-bold">Tentang Hafnan Store</h2>
                    <p className="text-gray-700 dark:text-white text-left leading-7">
                      <span className="font-bold">Hafnan Store</span> adalah
                      aplikasi berbasis website yang menghadirkan berbagai
                      keunggulan dalam satu platform, dengan mengintegrasikan
                      layanan seperti Hafnan Mart dan Hafnan Digital. Hafnan
                      Store siap menjadi pilihan utama untuk memenuhi segala
                      kebutuhan Anda.
                    </p>
                    <h2 className="text-xl font-bold">Jasa Pengiriman</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                      <div className="scale-105 grid items-center justify-center">
                        <picture>
                          <img
                            src="image/shipping/gojek.png"
                            data-size="auto"
                            alt=""
                            className="lazyload rounded-xl object-cover max-w-full h-12 lazyloaded"
                          />
                        </picture>
                      </div>
                      <div className="scale-75 grid items-center justify-center">
                        <picture>
                          <img
                            src="image/shipping/grab.png"
                            data-size="auto"
                            alt=""
                            className="lazyload rounded-xl object-cover max-w-full h-12 lazyloaded"
                          />
                        </picture>
                      </div>
                      <div className="scale-90 grid items-center justify-center">
                        <picture>
                          <img
                            src="image/shipping/jnt.png"
                            data-size="auto"
                            alt=""
                            className="lazyload rounded-xl object-cover max-w-full h-12 lazyloaded"
                          />
                        </picture>
                      </div>
                      <div className="scale-75 grid items-center justify-center">
                        <picture>
                          <img
                            src="image/shipping/jne.png"
                            data-size="auto"
                            alt=""
                            className="lazyload rounded-xl object-cover max-w-full h-12 lazyloaded"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                ) : activeTab === "mart" ? (
                  <div>
                    <h2 className="text-2xl font-bold">Tentang Hafnan Mart</h2>
                    <p className="mt-4 text-gray-700 dark:text-white text-left leading-7">
                      <span className="font-bold">Hafnan Mart</span> adalah
                      solusi belanja kebutuhan pokok yang praktis dan
                      terpercaya, hadir dalam layanan online dan offline. Kami
                      menyediakan berbagai produk berkualitas, mulai dari
                      <span className="font-semibold">
                        {" "}
                        tepung, minyak goreng, bahan kue, susu kental manis,
                        penyedap rasa, kopi, gula pasir, kecap santan, parfum,
                        balsem, mie kering, mie instan, teh, bihun
                      </span>{" "}
                      hingga berbagai kebutuhan rumah tangga lainnya. Dengan
                      komitmen untuk memberikan harga terjangkau dan produk
                      berkualitas, Hafnan Mart memastikan setiap pelanggan
                      mendapatkan pengalaman belanja yang nyaman dan memuaskan.
                      Belanja di toko kami secara langsung atau manfaatkan
                      layanan online untuk kemudahan berbelanja dari rumah
                      dengan sistem pengiriman cepat dan aman. Nikmati
                      kemudahan, kepastian kualitas, dan pelayanan terbaik hanya
                      di{" "}
                      <span className="font-bold">
                        Hafnan Mart – Solusi Praktis Untuk Kebutuhan Harian Anda
                      </span>
                      .
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold">
                      Tentang Hafnan Digital
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-white text-left leading-7">
                      <span className="font-bold">Hafnan Digital</span> adalah
                      solusi lengkap bagi Anda yang mencari berbagai kebutuhan
                      digital dengan kualitas terbaik. Kami menghadirkan beragam
                      produk dan layanan inovatif, mulai dari undangan digital
                      yang elegan, tema website profesional, hingga kursus
                      digital marketing yang dirancang untuk meningkatkan
                      keterampilan dan kesuksesan bisnis Anda di era digital.
                      Dengan komitmen untuk memberikan kemudahan dan kepuasan
                      pelanggan, Hafnan Digital selalu menghadirkan produk
                      berkualitas, harga terjangkau, dan layanan yang responsif.
                      Bergabunglah dengan kami untuk menjelajahi dunia digital
                      yang lebih luas dan berkembang bersama Hafnan Digital!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
