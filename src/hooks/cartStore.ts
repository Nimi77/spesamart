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
  companyName: string | null;
  streetAddress: string;
  apartment: string | null;
  city: string;
  phoneNumber: string;
  email: string;
  saveInfo: boolean;
}

interface CartState {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  addMultipleToCart: (items: CartItem[]) => void;
  removeFromCart: (productName: string) => void;
  incrementQuantity: (productName: string) => void;
  decrementQuantity: (productName: string) => void;
  calculateSubtotal: () => number;
  calculateTotal: () => number;
  calculateDiscountAmount: () => number;
  discountApplied: boolean;
  discountPercentage: number;
  applyDiscount: (percentage: number) => void;
  resetDiscount: () => void;
  setFormData: (data: BillingFormData | null) => void;
  formData: BillingFormData | null;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  discountApplied: false,
  discountPercentage: 0.25,
  formData: null,

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

  calculateSubtotal: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => {
      const itemPrice = item.salesPrice ?? item.price ?? 0;
      return total + itemPrice * item.quantity;
    }, 0);
  },

  applyDiscount: (percentage) => {
    const currentState = get();
    if (!currentState.discountApplied) {
      set({ discountApplied: true, discountPercentage: percentage });
    }
  },

  calculateDiscountAmount: () => {
    const { calculateSubtotal, discountPercentage, discountApplied } = get();
    return discountApplied ? calculateSubtotal() * discountPercentage : 0;
  },

  calculateTotal: () => {
    const { calculateSubtotal, calculateDiscountAmount, discountApplied } =
      get();
    const subtotal = calculateSubtotal();
    const discountAmount = calculateDiscountAmount();

    return discountApplied ? subtotal - discountAmount : subtotal;
  },

  resetDiscount: () => set({ discountApplied: false, discountPercentage: 0 }),

  setFormData: (data) => set({ formData: data }),
  setCartItems: (items) => set({ cartItems: items }),
}));

export default useCartStore;
