'use client';

import useCartStore from '@/hooks/cartStore';
import BillingDetailsForm from './_components/BillingForm';
import CheckoutBreadcrumb from './_components/BreadCrumb';
import OrderSummary from './_components/OrderSummary';
import { useState } from 'react';

export default function Checkout() {
  const [isFormValid, setIsFormValid] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const handleValidationChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  return (
    <div className="m-auto max-w-[90%] py-14 xl:max-w-6xl">
      <CheckoutBreadcrumb current="Checkout" />

      {cartItems.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-700">
          Your cart is empty. Add items to proceed to checkout.
        </div>
      ) : (
        <div className="mt-14 flex flex-col justify-between gap-8 md:flex-row md:gap-20">
          <BillingDetailsForm onValidationChange={handleValidationChange} />
          <OrderSummary isFormValid={isFormValid} />
        </div>
      )}
    </div>
  );
}
