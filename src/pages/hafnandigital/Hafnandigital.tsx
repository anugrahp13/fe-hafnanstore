import { useEffect, useState } from "react";
import dataHafnanDigital from "../../data/dataHafnanDigital";
import { HafnanDigitalsProps } from "../../types/HafnanDigital.type";
import { Cart } from "./Cart";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface HafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const HafnanDigitals: React.FC<HafnanDigitalsType> = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian
  const [filteredProducts, setFilteredProducts] = useState(dataHafnanDigital); // State untuk hasil pencarian
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default to "full"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(dataHafnanDigital);
    } else {
      const results = dataHafnanDigital.filter((product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
    setCurrentPage(1);
  }, [searchTerm]);

  // Total produk tersedia
  const totalItems = filteredProducts.length;

  // Calculate indexes for pagination
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product – Hafnan Digital</title>
        </Helmet>
      </HelmetProvider>
      <section className="my-32 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase">
                Products
              </span>
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                Hafnan Digital
              </span>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Cari nama produk digital . . ."
                className="w-full px-4 py-3 border rounded-lg shadow-sm text-gray-700 dark:text-white dark:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Cart hafnandigitals={currentItems} />
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between items-center mt-4 gap-6">
              <div className="flex items-center gap-2">
                <label className="text-sm">Data per halaman:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setItemsPerPage(value === totalItems ? totalItems : value);
                    setCurrentPage(1);
                  }}
                  className="border px-2 py-1 rounded-lg dark:bg-dark dark:text-white"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={totalItems}>Full</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-semibold">
                  Halaman {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
