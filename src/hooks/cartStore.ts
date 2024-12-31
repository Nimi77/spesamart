import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  company_name: string;
  street_address: string;
  apartment: string;
  city: string;
  phone_number: string;
  email: string;
  save_info: boolean;
}

interface CartState {
  cartItems: CartItem[];
  formData: BillingFormData | null;
  discountPercentage: number;
  addToCart: (item: CartItem) => void;
  addMultipleToCart: (items: CartItem[]) => void;
  removeFromCart: (productName: string) => void;
  incrementQuantity: (productName: string) => void;
  decrementQuantity: (productName: string) => void;
  calculateTotal: () => number;
  setFormData: (data: BillingFormData) => void;
  applyDiscount: (percentage: number) => void;
  saveBillingDetails: (data: BillingFormData) => void;
  getSavedBillingDetails: () => BillingFormData | null;
}

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],
      formData: null,
      discountPercentage: 0,
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => cartItem.productName === item.productName,
          );
          if (existingItem) {
            // if item exist the quantity is incremented
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.productName === item.productName
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem,
              ),
            };
          }
          // Add new item to cart
          return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
        }),
      addMultipleToCart: (items) =>
        set((state) => {
          // created a copy of the current cart items
          const updatedCart = [...state.cartItems];

          items.forEach((item) => {
            // checking if the item exists in the cart
            const existingItem = updatedCart.find(
              (cartItem) => cartItem.productName === item.productName,
            );

            if (existingItem) {
              // increment quantity if the item already exists
              existingItem.quantity += item.quantity || 1;
            } else {
              // new item to cart with default quantity of 1
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
      setFormData: (data) => set({ formData: data }),
      applyDiscount: (percentage) => set({ discountPercentage: percentage }),
      saveBillingDetails: (data) => {
        localStorage.setItem('savedBillingDetails', JSON.stringify(data));
      },
      getSavedBillingDetails: () => {
        const savedData = localStorage.getItem('savedBillingDetails');
        return savedData ? JSON.parse(savedData) : null;
      },
    }),
    {
      name: 'cart',
    },
  ),
);

export default useCartStore;
