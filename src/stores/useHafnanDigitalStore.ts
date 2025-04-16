// stores/useHafnanDigitalStore.ts
import { create } from 'zustand';
import { HafnanDigitalsProps } from '../types/HafnanDigital.type';
import dataHafnanDigital from '../data/dataHafnanDigital';

interface HafnanDigitalStore {
  products: HafnanDigitalsProps[];
  filteredProducts: HafnanDigitalsProps[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  filterProducts: () => void;
}

export const useHafnanDigitalStore = create<HafnanDigitalStore>((set, get) => ({
  products: dataHafnanDigital,
  filteredProducts: dataHafnanDigital,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 8,

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterProducts();
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  setItemsPerPage: (count) => {
    set({ itemsPerPage: count, currentPage: 1 });
    get().filterProducts();
  },

  filterProducts: () => {
    const { products, searchTerm } = get();
    if (!searchTerm.trim()) {
      set({ filteredProducts: products });
    } else {
      const results = products.filter((product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      set({ filteredProducts: results, currentPage: 1 });
    }
  },
}));