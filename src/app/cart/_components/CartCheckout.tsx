'use client';

import { showNotification } from '@/utilis/showNotification';
import useCartStore from '@/hooks/cartStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CartCheckout = () => {
  const [discountCode, setDiscountCode] = useState('');
  const router = useRouter();

  const {
    calculateSubtotal,
    calculateTotal,
    calculateDiscountAmount,
    applyDiscount,
    discountApplied,
  } = useCartStore();

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);

  const handleCheckoutNavigation = () => {
    router.push('/checkout');
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'discount25' && !discountApplied) {
      applyDiscount(0.25);

      showNotification({
        icon: 'success',
        title: '25% discount has been applied to your order!',
        position: 'top-end',
      });
    } else {
      showNotification({
        icon: 'error',
        title: 'Invalid Discount Code!',
        position: 'top-end',
      });
    }
  };

  return (
    <div className="mt-14 grid gap-8 md:grid-cols-[1fr_0.6fr] md:gap-28">
      <div className="flex h-fit w-full gap-4">
        <div className="flex w-full flex-1 items-center rounded border border-gray-800 px-4">
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
          aria-disabled={discountApplied}
          className="rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          Apply Coupon
        </button>
      </div>
      <div className="w-full rounded border border-gray-800 p-4">
        <h3 className="font-medium">Cart Total</h3>
        <div className="py-4">
          <div className="flex items-center justify-between border-b py-2">
            <span>Subtotal: </span>
            <span>{formatCurrency(calculateSubtotal())}</span>
          </div>
          <div className="flex items-center justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          {discountApplied && (
            <div className="flex justify-between border-b py-2">
              <span>Discount (25%):</span>
              <span>-${calculateDiscountAmount()}</span>
            </div>
          )}
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
