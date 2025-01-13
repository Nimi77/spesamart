'use client';

import { showNotification } from '@/utilis/showNotification';
import useCartStore from '@/hooks/cartStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CartCheckout = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const router = useRouter();

  const { calculateTotal, applyDiscount } = useCartStore();

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);

  const handleCheckoutNavigation = () => {
    router.push('/checkout');
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'discount25') {
      applyDiscount(0.25);
      setDiscountApplied(true);

      showNotification({
        icon: 'success',
        title: '25% discount has been applied to your order!',
        position: 'top-end',
      });
    } else {
      showNotification({
        icon: 'error',
        title: 'Invalid Discount Code! Please enter a valid discount code',
        position: 'top-end',
      });
    }
  };

  return (
    <div className="mt-14 grid gap-8 md:grid-cols-[1fr_0.6fr]">
      <div className="flex h-fit w-full gap-4">
        <div className="flex flex-1 items-center rounded border border-gray-800 px-4">
          <input
            type="text"
            placeholder="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full border-none bg-transparent py-2 outline-none placeholder:text-[#7D8184]"
            aria-label="Discount Code"
          />
        </div>
        <button
          onClick={handleApplyDiscount}
          disabled={discountApplied}
          className="rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none"
        >
          Apply Coupon
        </button>
      </div>
      <div className="w-full rounded border border-gray-800 p-4">
        <h3 className="font-medium">Cart Total</h3>
        <div className="py-4">
          <div className="flex items-center justify-between border-b py-2">
            <span>Subtotal: </span>
            <span>{formatCurrency(calculateTotal())}</span>
          </div>
          <div className="flex items-center justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Total: </span>
            <span>{formatCurrency(calculateTotal())}</span>
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
