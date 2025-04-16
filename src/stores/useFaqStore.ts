// stores/useFaqStore.ts
import { create } from 'zustand';
import { FaqsProps } from '../types/Faq.type';
import dataFaq from '../data/dataFaq';

interface FaqStore {
  faqs: FaqsProps[];
}

export const useFaqStore = create<FaqStore>(() => ({
  faqs: dataFaq,
}));