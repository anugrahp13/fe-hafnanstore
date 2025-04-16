// stores/useNexasiteStore.ts
import { create } from 'zustand';
import { NexasitesProps } from '../types/Nexasite.type';
import dataNexasite from '../data/dataNexasite';

interface NexasiteStore {
  products: NexasitesProps[];
  filteredProducts: NexasitesProps[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  filterProducts: () => void;
}

export const useNexasiteStore = create<NexasiteStore>((set, get) => ({
  products: dataNexasite,
  filteredProducts: dataNexasite,
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