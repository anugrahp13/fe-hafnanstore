import { create } from "zustand";
import dataCreator from "../data/dataCreator";
import dataNexasite from "../data/dataNexasite";
import { NexasitesProps } from "../types/Nexasite.type";

interface CreatorState {
  // Pagination state only
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (perPage: number) => void;
  
  // Products data
  products: NexasitesProps[];
  
  // Creator methods
  getCreatorByUsername: (username: string) => any | undefined;
  getProductsByCreator: (creatorId: number) => NexasitesProps[];
}

export const useCreatorStore = create<CreatorState>((set) => ({
  // Initial state
  currentPage: 1,
  itemsPerPage: 8,
  products: dataNexasite, // All products data

  // Actions
  setCurrentPage: (page) => set({ currentPage: page }),
  setItemsPerPage: (perPage) => set({ itemsPerPage: perPage, currentPage: 1 }),

  // Creator methods
  getCreatorByUsername: (username) => {
    return dataCreator.find(
      (creator) => creator.username.toLowerCase() === username.toLowerCase()
    );
  },

  getProductsByCreator: (creatorId) => {
    const creator = dataCreator.find((c) => c.id === creatorId);
    return dataNexasite.filter((product) => product.author === creator?.name);
  },
}));