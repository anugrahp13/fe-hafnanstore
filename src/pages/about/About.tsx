// About.tsx
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataAbout } from "../../data/dataAbout";
// Pastikan path import benar

export const About = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof dataAbout.contents>("store");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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

  const currentContent = dataAbout.contents[activeTab];

  // Type guard untuk StoreContent
  const isStoreContent = (
    content: typeof currentContent
  ): content is typeof dataAbout.contents.store => {
    return (content as typeof dataAbout.contents.store).type === "store";
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{dataAbout.meta.title}</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <picture>
              <img
                src={dataAbout.banner.src}
                alt={dataAbout.banner.alt}
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
                  {dataAbout.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`p-3 text-center rounded-lg font-semibold ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() =>
                        setActiveTab(tab.id as keyof typeof dataAbout.contents)
                      }
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4">
                <div className="grid gap-8">
                  <h2 className="text-2xl font-bold">{currentContent.title}</h2>
                  <p className="text-gray-700 dark:text-white text-left leading-7">
                    {currentContent.type === "store" ? (
                      <>
                        <span className="font-bold">Hafnan Store</span>
                        {currentContent.description.replace("Hafnan Store", "")}
                      </>
                    ) : currentContent.type === "mart" ? (
                      <>
                        <span className="font-bold">Hafnan Mart</span>
                        {currentContent.description.replace("Hafnan Mart", "")}
                      </>
                    ) : currentContent.type === "digital" ? (
                      <>
                        <span className="font-bold">Hafnan Digital</span>
                        {currentContent.description.replace(
                          "Hafnan Digital",
                          ""
                        )}
                      </>
                    ) : (
                      <>
                        <span className="font-bold">Nexasite</span>
                        {currentContent.description.replace("Nexasite", "")}
                      </>
                    )}
                  </p>

                  {isStoreContent(currentContent) && (
                    <>
                      <h2 className="text-xl font-bold">Jasa Pengiriman</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {currentContent.shippingLogos.map(
                          (logo, index: number) => (
                            <div
                              key={index}
                              className={`${logo.className} grid items-center justify-center`}
                            >
                              <picture>
                                <img
                                  src={logo.src}
                                  data-size="auto"
                                  alt=""
                                  className="lazyload rounded-xl object-cover max-w-full h-12 lazyloaded"
                                />
                              </picture>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
