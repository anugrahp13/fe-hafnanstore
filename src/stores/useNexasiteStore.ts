// stores/useNexasiteStore.ts
import { create } from "zustand";
import { NexasitesProps, CreatorProps } from "../types/Nexasite.type";
import dataNexasite from "../data/dataNexasite";
import dataCreator from "../data/dataCreator";

interface NexasiteStore {
  products: NexasitesProps[];
  filteredProducts: NexasitesProps[];
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  creators: CreatorProps[];

  // Actions
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  filterProducts: () => void;

  // Creator-related methods
  getCreatorByUsername: (username: string) => CreatorProps | undefined;
  getCreatorById: (id: number) => CreatorProps | undefined;
  getCreatorByAuthorName: (name: string) => CreatorProps | undefined;
  getProductsByCreator: (creatorId: number) => NexasitesProps[];
  getProductBySlug: (slug: string) => NexasitesProps | undefined;
  resolveCreatorLink: (product: NexasitesProps) => string;
}

export const useNexasiteStore = create<NexasiteStore>((set, get) => ({
  products: dataNexasite,
  filteredProducts: dataNexasite,
  creators: dataCreator,
  searchTerm: "",
  currentPage: 1,
  itemsPerPage: 8,

  // Basic product filtering and pagination
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
    set({
      filteredProducts: searchTerm.trim()
        ? products.filter(
            (p) =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              p.author.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : products,
    });
  },

  // Enhanced creator methods
  getCreatorByUsername: (username) => {
    return get().creators.find(
      (c) => c.username.toLowerCase() === username.toLowerCase()
    );
  },

  getCreatorById: (id) => {
    return get().creators.find((c) => c.id === id);
  },

  getCreatorByAuthorName: (name) => {
    return get().creators.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
  },

  getProductsByCreator: (creatorId) => {
    return get().products.filter(
      (product) =>
        product.creator?.id === creatorId ||
        product.author.toLowerCase() ===
          get().getCreatorById(creatorId)?.name.toLowerCase()
    );
  },

  getProductBySlug: (slug) => {
    return get().products.find(
      (product) => product.name.toLowerCase().replace(/\s+/g, "-") === slug
    );
  },

  // New method to resolve creator link
  resolveCreatorLink: (product) => {
    // Case 1: Product has direct creator reference
    if (product.creator?.username) {
      return `/creator/${product.creator.username}`;
    }

    // Case 2: Find creator by author name
    const creatorByAuthor = get().getCreatorByAuthorName(product.author);
    if (creatorByAuthor) {
      return `/creator/${creatorByAuthor.username}`;
    }

    // Case 3: Fallback to author name as slug
    return `/creator/${product.author.toLowerCase().replace(/\s+/g, "-")}`;
  },
}));
