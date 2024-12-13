"use client";

import useCartStore, { CartItem } from "@/stores/cartStore";
import Image from "next/image";

const CartSummary = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.calculateTotal());

  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2);
  };

  const calculateSubtotal = (item: CartItem): number => {
    const price = item.salesPrice ?? item.price ?? 1;
    return (price || 1) * item.quantity;
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.productName} className="space-y-4">
            <div className="flex justify-center gap-2">
              <div className="w-12 h-10">{item.productImage}</div>
              <span>{item.productName}</span>
            </div>
            <div>${formatCurrency(calculateSubtotal(item))}</div>
          </div>
        ))}
      </div>
      <div className="space-x-2">
        <div className="flex justify-between items-center py-2 border-b">
          <span>SubTotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between items-center border-b">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="payment" className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Bank
          </label>
          {/* bank payment method */}
          <div className="flex items-center gap-2">
            <Image
              src="bkash.png"
              alt="bKash card"
              fill
              className="object-contain"
            />
            <Image
              src="visa.png"
              alt="visa card"
              fill
              className="object-contain"
            />
            <Image
              src="mastercard.png"
              alt="mastercard"
              fill
              className="object-contain"
            />
            <Image
              src="safary.png"
              alt="safary card"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <label htmlFor="payment" className="flex items-center">
          <input type="radio" name="payment" className="mr-2" />
          Cash on delivery
        </label>
      </div>
      <div className="flex justify-center gap-2">
        <div className="max-w-80 bg-secondary rounded-md pl-5 pr-3">
          <label htmlFor="discount">
            <input
              type="text"
              name="discount"
              placeholder="Discount Code"
              className="bg-transparent text-[#7D8184] text-sm border-none outline-none w-full"
            />
          </label>
        </div>
        <button className="bg-secondary3 px-2 py-6 hover:bg-active transition-colors duration-300 ease-in">
          Apply Coupon
        </button>
      </div>
      <button className="bg-secondary3 px-2 py-6 hover:bg-active transition-colors duration-300 ease-in">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
