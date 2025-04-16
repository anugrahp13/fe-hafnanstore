// stores/nexasiteStore.ts
import { create } from "zustand";
import dataNexasite from "../data/dataNexasite";
import dataCreator from "../data/dataCreator";
import { createSlug } from "../components/elements/CreateSlug";
import { NexasitesProps, CreatorProps } from "../types/Nexasite.type";

interface NexasiteStoreState {
  products: NexasitesProps[];
  creators: CreatorProps[];
}

interface NexasiteStoreActions {
  getProductBySlug: (
    slug: string
  ) => (NexasitesProps & { creator?: CreatorProps }) | undefined;
}

type NexasiteStore = NexasiteStoreState & NexasiteStoreActions;

// stores/nexasiteStore.ts
export const useNexasiteStore = create<NexasiteStore>((_set, get) => ({
  products: dataNexasite,
  creators: dataCreator,

  getProductBySlug: (slug) => {
    const { products, creators } = get();
    const product = products.find(
      (p: NexasitesProps) => createSlug(p.name) === slug
    );

    if (!product) return undefined;

    const creator = creators.find(
      (c: CreatorProps) => c.name === product.author
    );

    // Pastikan return type sesuai
    return creator
      ? { ...product, creator }
      : { ...product, creator: undefined };
  },
}));
