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
    <div className="w-full flex flex-col gap-4">
      {/* cart items */}
      <div className="w-[85%] mt-8">
        <div className="cart-items space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.productName}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.productImage}
                  alt={item.altText}
                  width="48"
                  height="40"
                  className="object-contain w-12 h-10"
                />
                <span>{item.productName}</span>
              </div>
              <span>${formatCurrency(calculateSubtotal(item))}</span>
            </div>
          ))}
        </div>
        {/* fee */}
        <div className="billing my-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="payment-method">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="radio" name="bank_payment" />
              <label htmlFor="bank_payment" className="text-gray-800">
                Bank
              </label>
            </div>
            {/* bank payment card */}
            <div className="flex items-center gap-2">
              <Image
                src="/bkash.png"
                alt="bKash card"
                width="30"
                height="30"
                className="object-contain w-8 h-8"
              />
              <Image
                src="/visa.png"
                alt="visa card"
                width="30"
                height="30"
                className="object-contain w-8 h-8"
              />
              <Image
                src="/mastercard.png"
                alt="mastercard"
                width="30"
                height="30"
                className="object-contain w-8 h-8"
              />
              <Image
                src="/safary.png"
                alt="safary card"
                width="30"
                height="30"
                className="object-contain w-8 h-8"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input type="radio" name="cash_payment" id="cash_payment" />
            <label htmlFor="cash_payment" className="text-gray-800">
              Cash on delivery
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-4 my-2">
        <div className="flex-1 px-4 border border-gray-800 rounded flex items-center">
          <input
            type="text"
            placeholder="Discount Code"
            className="bg-transparent placeholder:text-[#7D8184] text-sm border-none outline-none"
          />
        </div>
        <button
          type="button"
          className="bg-secondary3 text-white py-2 px-4 rounded hover:bg-active transition-colors duration-300 ease-in-out"
        >
          Apply Coupon
        </button>
      </div>
      <button className="bg-secondary3 w-2/5 text-white py-2 px-6 rounded hover:bg-active transition-colors duration-300 ease-in-out">
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
