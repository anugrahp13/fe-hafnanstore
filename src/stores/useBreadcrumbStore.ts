// stores/useBreadcrumbStore.ts
import { create } from 'zustand';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbState {
  items: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
  resetBreadcrumbs: () => void;
}

const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  items: [
    { label: 'Home', path: '/' }
  ],
  setBreadcrumbs: (items) => {
    // Tambahkan deep equality check
    set((state) => {
      if (JSON.stringify(state.items) === JSON.stringify(items)) {
        return state; // Tidak update jika sama
      }
      return { items };
    });
  },
  resetBreadcrumbs: () => set({ items: [{ label: 'Home', path: '/' }] }),
}));

export default useBreadcrumbStore;