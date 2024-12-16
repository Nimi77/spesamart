import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productName: string;
  productImage: string;
  altText: string;
  price?: number;
  salesPrice?: number;
  originalPrice?: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productName: string) => void;
  incrementQuantity: (productName: string) => void;
  decrementQuantity: (productName: string) => void;
  calculateTotal: () => number;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartCount: 0,
      cartItems: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => cartItem.productName === item.productName
          );
          if (existingItem) {
            // if item exist the quantity is incremented
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.productName === item.productName
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          // new item is added
          return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
        }),
      removeFromCart: (productName) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.productName !== productName
          ),
        })),
      incrementQuantity: (productName) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.productName === productName
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decrementQuantity: (productName) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.productName === productName && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
      calculateTotal: () =>
        get().cartItems.reduce((total, item) => {
          if (!item) return total;
          const itemPrice = item.salesPrice ?? item.price ?? 0;
          return total + itemPrice * item.quantity;
        }, 0),
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
