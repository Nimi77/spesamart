'use client';

import useCartStore, { CartItem } from '@/hooks/cartStore';
import Image from 'next/image';
import { useState } from 'react';
import Swal from 'sweetalert2';

const OrderSummary = () => {
  const {
    cartItems,
    calculateTotal,
    applyDiscount,
    formData,
    saveBillingDetails,
  } = useCartStore();
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2);
  };

  const calculateSubtotal = (item: CartItem): number => {
    const price = item.salesPrice ?? item.price ?? 0;
    return price * item.quantity;
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'discount25') {
      applyDiscount(0.25);
      setDiscountApplied(true);
      Swal.fire({
        title: 'Discount Applied',
        text: '25% discount has been applied to your order!',
        icon: 'success',
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: 'Invalid Discount Code',
        text: 'Please enter a valid discount code.',
        icon: 'error',
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  const handlePlaceOrder = async () => {
    if (!formData) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill out the billing details form before placing your order.',
        icon: 'error',
        position: 'top-end',
      });
      return;
    }

    try {
      //saving billing details
      saveBillingDetails(formData);

      // sending data to API
      console.log('Submitting order with form data: ', formData);
      console.log('Cart items: ', cartItems);

      await Swal.fire({
        title: 'Order Submitted',
        text: 'Your order has been placed successfully!',
        icon: 'success',
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error('Error submitting order: ', error);

      await Swal.fire({
        title: 'Error',
        text: 'There was an issue submitting your order.',
        icon: 'error',
        position: 'top-end',
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      <div className="mt-12 w-[85%]">
        <h2 className="mb-4 block text-lg font-medium md:hidden">
          Order Summary
        </h2>
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
              <span>${formatCurrency(calculateSubtotal(item))}</span>
            </div>
          ))}
        </div>

        {/* billing fee */}
        <div className="my-4">
          <div className="flex items-center justify-between border-b py-2">
            <span>Subtotal:</span>
            <span>${formatCurrency(calculateTotal())}</span>
          </div>
          <div className="flex items-center justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          {discountApplied && (
            <div className="flex items-center justify-between border-b py-2">
              <span>Discount (25%):</span>
              <span>-${formatCurrency(calculateTotal() * 0.25)}</span>
            </div>
          )}
          <div className="flex items-center justify-between py-2">
            <span>Total:</span>
            <span>${formatCurrency(calculateTotal())}</span>
          </div>
        </div>

        {/* payment-method */}
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="bank_payment"
                name="payment_method"
                value="bank"
              />
              <label htmlFor="bank_payment" className="text-gray-800">
                Bank
              </label>
            </div>
            {/* bank payment cards */}
            <div className="flex items-center gap-2">
              {['bkash', 'visa', 'mastercard', 'safary'].map((card) => (
                <Image
                  key={card}
                  src={`/${card}.png`}
                  alt={`${card} card`}
                  width={30}
                  height={30}
                  className="h-8 w-8 object-contain"
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="radio"
              id="cash_payment"
              name="payment_method"
              value="cash"
            />
            <label htmlFor="cash_payment" className="text-gray-800">
              Cash on delivery
            </label>
          </div>
        </div>
      </div>

      <div className="my-2 flex justify-start gap-4">
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
          type="button"
          onClick={handleApplyDiscount}
          disabled={discountApplied}
          className="rounded bg-secondary3 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          Apply Coupon
        </button>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="w-full rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none sm:w-2/5"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
