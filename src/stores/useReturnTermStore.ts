// stores/useReturnTermsStore.ts
import { create } from 'zustand';
import { ReturnTermsProps } from '../types/ReturnTerms.type';
import dataReturnTerms from '../data/dataReturnTerms';

interface ReturnTermsStore {
  returnTerms: ReturnTermsProps[];
}

export const useReturnTermsStore = create<ReturnTermsStore>(() => ({
  returnTerms: dataReturnTerms,
}));