// stores/useContactStore.ts
import { create } from 'zustand';
import { ContactsProps } from '../types/Contact.type';
import dataContact from '../data/dataContact';

interface ContactStore {
  contacts: ContactsProps[];
}

export const useContactStore = create<ContactStore>(() => ({
  contacts: dataContact,
}));