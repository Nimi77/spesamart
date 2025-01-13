'use client';

import useCartStore, { CartItem } from '@/hooks/cartStore';
import { showNotification } from '@/utilis/showNotification';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const OrderSummary = ({ isFormValid }: { isFormValid: boolean }) => {
  const {
    cartItems,
    setCartItems,
    calculateTotal,
    applyDiscount,
    formData,
    setFormData,
  } = useCartStore();

  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const router = useRouter();

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);

  const calculateSubtotal = (item: CartItem): number => {
    const price = item.salesPrice ?? item.price ?? 0;
    return price * item.quantity;
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
        title: 'Invalid Discount Code!',
        position: 'top-end',
      });
    }
  };

  const handlePlaceOrder = () => {
    // trigger notification only if the form is invalid
    // an extra - the form is disabled until the user fills all the required details

    if (!isFormValid) {
      showNotification({
        icon: 'error',
        title:
          'Please complete the billing details form before placing your order.',
        position: 'top-end',
      });
      return;
    }

    try {
      const orderData = {
        formData,
        cartItems,
        total: calculateTotal(),
        discountApplied,
      };
      localStorage.setItem('orderData', JSON.stringify(orderData));

      // clear the cart items and form data
      setCartItems([]);
      setFormData(null);

      showNotification({
        icon: 'success',
        title: 'Order placed successfully!',
        position: 'top-end',
      });
      router.push('/');
    } catch (error) {
      console.error('Error placing order:', error);
      showNotification({
        icon: 'error',
        title: 'Failed to place order. Try again later.',
        position: 'top-end',
      });
    }
  };

  return (
    <div className="md:w-11/20 flex w-full flex-col gap-4">
      <div className="md:mt-[3.4rem]">
        <h2 className="mb-4 text-lg font-medium md:hidden">Order Summary</h2>

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
                  width={48}
                  height={40}
                  className="h-10 w-12 object-contain"
                />
                <span>{item.productName}</span>
              </div>
              <span>{formatCurrency(calculateSubtotal(item))}</span>
            </div>
          ))}
        </div>

        <div className="my-4">
          <div className="flex justify-between border-b py-2">
            <span>Subtotal:</span>
            <span>{formatCurrency(calculateTotal())}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          {discountApplied && (
            <div className="flex justify-between border-b py-2">
              <span>Discount (25%):</span>
              <span>-{formatCurrency(calculateTotal() * 0.25)}</span>
            </div>
          )}
          <div className="flex justify-between py-2">
            <span>Total:</span>
            <span>{formatCurrency(calculateTotal())}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1 rounded border px-4 py-2"
          />
          <button
            type="button"
            onClick={handleApplyDiscount}
            disabled={discountApplied}
            className="rounded bg-secondary3 px-4 py-2 text-white hover:bg-active disabled:opacity-50"
          >
            Apply Coupon
          </button>
        </div>

        <button
          onClick={handlePlaceOrder}
          className={`w-full rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none ${
            !isFormValid ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={!isFormValid}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
