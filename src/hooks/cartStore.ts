import axios from 'axios';
import { create } from 'zustand';

export interface CartItem {
  productName: string;
  productImage: string;
  altText: string;
  price?: number;
  salesPrice?: number;
  originalPrice?: number;
  quantity: number;
}

export interface BillingFormData {
  name: string;
  company_name: string | null;
  street_address: string;
  apartment: string | null;
  city: string;
  phone_number: string;
  email: string;
  save_info: boolean;
}

interface CartState {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  formData: BillingFormData | null;
  discountPercentage: number;
  addToCart: (item: CartItem) => void;
  addMultipleToCart: (items: CartItem[]) => void;
  removeFromCart: (productName: string) => void;
  incrementQuantity: (productName: string) => void;
  decrementQuantity: (productName: string) => void;
  calculateTotal: () => number;
  setFormData: (data: BillingFormData | null) => void;
  applyDiscount: (percentage: number) => void;
  fetchCart: () => Promise<void>;
  saveCart: () => Promise<void>;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  formData: null,
  discountPercentage: 0,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.productName === item.productName,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.productName === item.productName
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),

  addMultipleToCart: (items) =>
    set((state) => {
      const updatedCart = [...state.cartItems];
      items.forEach((item) => {
        const existingItem = updatedCart.find(
          (cartItem) => cartItem.productName === item.productName,
        );
        if (existingItem) {
          existingItem.quantity += item.quantity || 1;
        } else {
          updatedCart.push({ ...item, quantity: item.quantity || 1 });
        }
      });
      return { cartItems: updatedCart };
    }),

  removeFromCart: (productName) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.productName !== productName,
      ),
    })),

  incrementQuantity: (productName) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.productName === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    })),

  decrementQuantity: (productName) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.productName === productName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    })),

  calculateTotal: () => {
    const { cartItems, discountPercentage } = get();
    const subtotal = cartItems.reduce((total, item) => {
      if (!item) return total;
      const itemPrice = item.salesPrice ?? item.price ?? 0;
      return total + itemPrice * item.quantity;
    }, 0);
    return subtotal * (1 - discountPercentage);
  },
  applyDiscount: (percentage) => set({ discountPercentage: percentage }),
  setFormData: (data) => set({ formData: data }),
  setCartItems: (items) => set({ cartItems: items }),

  fetchCart: async () => {
    try {
      const response = await axios.get('/api/cart', { withCredentials: true });
      if (response.status === 200) {
        const { cartItems } = response.data;
        set({ cartItems: cartItems || [] });
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  },

  saveCart: async () => {
    try {
      const { cartItems } = get();
      await axios.post(
        '/api/cart',
        { cartItems },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  },
}));

export default useCartStore;
