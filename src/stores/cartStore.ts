import { create } from "zustand";

interface CartItem {
  productName: string;
  productImage: string;
  altText: string;
  price?: number;
  salesPrice?: number;
  originalPrice?: number;
}

interface CartState {
  cartCount: number;
  cartItems: CartItem[];
  incrementCartCount: () => void;
  addToCart: (item: CartItem) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  cartItems: [],
  incrementCartCount: () =>
    set((state) => ({ cartCount: state.cartCount + 1 })),
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
      cartCount: state.cartCount + 1, 
    })),
}));

export default useCartStore;
