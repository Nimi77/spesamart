import { create } from "zustand";

interface CartItem {
  productName: string;
  productImage: string;
  price: number | string;
}

interface CartState {
  cartCount: number;
  cartItems: CartItem[];
  incrementCartCount: () => void;
  addToCart: (
    productName: string,
    productImage: string,
    price: number | string
  ) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartCount: 0,
  cartItems: [],
  incrementCartCount: () =>
    set((state) => ({ cartCount: state.cartCount + 1 })),
  addToCart: (productName, productImage, price) =>
    set((state) => ({
      cartItems: [...state.cartItems, { productName, productImage, price }],
    })),
}));

export default useCartStore;