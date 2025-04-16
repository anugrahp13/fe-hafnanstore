// stores/useHafnanMartStore.ts
import { create } from "zustand";
import { HafnanMartsProps } from "../types/HafnanMart.type";
import dataHafnanMart from "../data/dataHafnanMart";

interface HafnanMartStore {
  products: HafnanMartsProps[];
  filteredProducts: HafnanMartsProps[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  setItemsPerPage: (count: number) => void;
  filterProducts: () => void;
}

export const useHafnanMartStore = create<HafnanMartStore>((set, get) => ({
  products: dataHafnanMart,
  filteredProducts: dataHafnanMart,
  searchTerm: "",
  currentPage: 1,
  itemsPerPage: 8,

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterProducts();
  },

  setCurrentPage: (page) => {
    if (typeof page === "function") {
      set((state) => ({ currentPage: page(state.currentPage) }));
    } else {
      set({ currentPage: page });
    }
  },

  setItemsPerPage: (count) => {
    set({ itemsPerPage: count, currentPage: 1 });
    get().filterProducts();
  },

  filterProducts: () => {
    const { products, searchTerm } = get();
    if (!searchTerm.trim()) {
      set({ filteredProducts: products });
    } else {
      const results = products.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      set({ filteredProducts: results, currentPage: 1 });
    }
  },
}));
