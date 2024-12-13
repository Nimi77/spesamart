import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
  productName: string;
  imageSrc: string;
  altText: string;
  salesPrice?: number;
  originalPrice?: number;
  price?: number;
  quantity: number;
  discount?: number;
}

interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (productName: string) => void;
  isInWishlist: (productName: string) => boolean;
  clearWishlist: () => void;
}

const useWishlistStore = create(
  persist<WishlistState>(
    (set, get) => ({
      items: [],
      addToWishlist: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeFromWishlist: (productName) =>
        set((state) => ({
          items: state.items.filter((item) => item.productName !== productName),
        })),
      isInWishlist: (productName) =>
        get().items.some((item) => item.productName === productName),
      clearWishlist: () =>
        set((state) => {
          if (state.items.length === 0) {
            // No changes
            return state;
          }
          return { items: [] };
        }),
    }),
    {
      name: "wishlist",
    }
  )
);

export default useWishlistStore;
