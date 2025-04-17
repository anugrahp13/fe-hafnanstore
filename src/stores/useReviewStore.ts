import { create } from 'zustand';
import dataReview from '../data/dataReview';
import { ReviewProps } from '../types/Nexasite.type';

// 1. Definisikan interface untuk state
interface ReviewStoreState {
  reviews: ReviewProps[];
  loading: boolean;
  error: string | null;
}

// 2. Definisikan interface untuk actions
interface ReviewStoreActions {
  addReview: (review: Omit<ReviewProps, 'id'>) => Promise<void>;
  updateReview: (id: number, updatedReview: Partial<ReviewProps>) => Promise<void>;
  deleteReview: (id: number) => Promise<void>;
  getReviewsByProduct: (productId: number) => ReviewProps[];
  fetchReviews: () => Promise<void>;
}

// 3. Gabungkan state dan actions
type ReviewStore = ReviewStoreState & ReviewStoreActions;

// 4. Implementasi store lengkap
export const useReviewStore = create<ReviewStore>((set, get) => ({
  // Initial state
  reviews: [],
  loading: false,
  error: null,

  // Fungsi untuk mengambil data review
  fetchReviews: async () => {
    set({ loading: true, error: null });
    try {
      // Simulasi fetch data
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi delay
      set({ reviews: dataReview });
    } catch (err) {
      set({ error: 'Failed to fetch reviews' });
    } finally {
      set({ loading: false });
    }
  },

  // Fungsi untuk menambahkan review baru
  addReview: async (review: Omit<ReviewProps, 'id'>) => {
    set({ loading: true });
    try {
      const newId = Math.max(0, ...get().reviews.map(r => r.id)) + 1;
      const newReview: ReviewProps = {
        ...review,
        id: newId,
      };
      
      set(state => ({
        reviews: [...state.reviews, newReview],
        error: null
      }));
    } catch (err) {
      set({ error: 'Failed to add review' });
    } finally {
      set({ loading: false });
    }
  },

  // Fungsi untuk mengupdate review
  updateReview: async (id: number, updatedReview: Partial<ReviewProps>) => {
    set({ loading: true });
    try {
      set(state => ({
        reviews: state.reviews.map(review => 
          review.id === id ? { ...review, ...updatedReview } : review
        ),
        error: null
      }));
    } catch (err) {
      set({ error: 'Failed to update review' });
    } finally {
      set({ loading: false });
    }
  },

  // Fungsi untuk menghapus review
  deleteReview: async (id: number) => {
    set({ loading: true });
    try {
      set(state => ({
        reviews: state.reviews.filter(review => review.id !== id),
        error: null
      }));
    } catch (err) {
      set({ error: 'Failed to delete review' });
    } finally {
      set({ loading: false });
    }
  },

  // Fungsi untuk mendapatkan review berdasarkan productId
  getReviewsByProduct: (productId: number): ReviewProps[] => {
    return get().reviews.filter(review => review.productId === productId);
  },
}));