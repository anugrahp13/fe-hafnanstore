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
  setBreadcrumbs: (items) => set({ items: [...items] }),
  resetBreadcrumbs: () => set({ items: [{ label: 'Home', path: '/' }] }),
}));

export default useBreadcrumbStore;