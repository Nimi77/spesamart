"use client";

import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";

const CartCheckout = () => {
  const total = useCartStore((state) => state.calculateTotal());
  const router = useRouter();

  const handleCheckoutNavigation = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex items-start justify-between mt-14">
      <div className="flex justify-center gap-4">
        <div className="w-72 bg-secondary pl-5 pr-3 flex items-center">
          <input
            type="text"
            placeholder="Discount Code"
            className="bg-transparent placeholder:text-[#7D8184] text-sm border-none outline-none w-full"
          />
        </div>
        <button className="bg-secondary3 text-white py-2 px-6 hover:bg-active transition-colors duration-300 ease-in-out">
          Apply Coupon
        </button>
      </div>
      <div className="border border-gray-800 rounded w-1/3 p-4">
        <h3 className="font-medium">Cart Total</h3>
        <div className="py-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span>Subtotal: </span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Total: </span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCheckoutNavigation}
          className="bg-secondary3 text-white text-center m-auto px-4 py-2 rounded hover:bg-active transition-colors duration-300 ease-in-out"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
