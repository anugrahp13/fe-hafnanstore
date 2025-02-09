import { Cart } from "./Cart";
import dataHafnanMart from "../../data/dataHafnanMart";
import { HafnanMartsProps } from "../home/types/HafnanMart.type";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface HafnanMartsType {
  hafnanmarts: HafnanMartsProps[];
}

export const HafnanMarts: React.FC<HafnanMartsType> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(dataHafnanMart.length); // Default to "full"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, itemsPerPage]);

  // Total produk tersedia
  const totalItems = dataHafnanMart.length;

  // Calculate indexes for pagination
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems = dataHafnanMart.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <>
      <section className="my-52 dark:bg-dark">
        <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
          <div className="text-center grid gap-10">
            <div className="text-sm text-primary dark:text-primary grid gap-3">
              <span className="font-bold tracking-[.30em] uppercase">
                Products
              </span>
              <span className="font-bold text-dark text-4xl lg:text-5xl dark:text-white">
                Hafnan Mart
              </span>
            </div>
            <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
              <Cart hafnanmarts={currentItems} />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <label className="text-sm">Data per halaman:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setItemsPerPage(value === totalItems ? totalItems : value);
                    setCurrentPage(1);
                  }}
                  className="border p-2 rounded"
                >
                  <option value={10}>10</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                  <option value={totalItems}>Full</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <MdKeyboardDoubleArrowLeft />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <MdKeyboardArrowLeft />
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
                  <MdKeyboardArrowRight />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
                >
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
