'use client';

import useCartStore from '@/hooks/cartStore';
import { useRouter } from 'next/navigation';

const CartCheckout = () => {
  const total = useCartStore((state) => state.calculateTotal());
  const router = useRouter();

  const handleCheckoutNavigation = () => {
    router.push('/checkout');
  };

  return (
    <div className="mt-14 flex flex-col justify-between gap-5 md:flex-row">
      <div className="flex h-fit w-full gap-4 md:w-3/5">
        <div className="flex flex-1 items-center rounded border border-gray-800 px-4">
          <input
            type="text"
            placeholder="Discount Code"
            className="w-full border-none bg-transparent py-2 outline-none placeholder:text-[#7D8184]"
            aria-label="Discount Code"
          />
        </div>
        <button className="rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none">
          Apply Coupon
        </button>
      </div>
      <div className="w-full rounded border border-gray-800 p-4 md:w-1/3">
        <h3 className="font-medium">Cart Total</h3>
        <div className="py-4">
          <div className="flex items-center justify-between border-b py-2">
            <span>Subtotal: </span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Total: </span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCheckoutNavigation}
          className="m-auto flex items-center rounded bg-secondary3 px-4 py-2 text-center text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
