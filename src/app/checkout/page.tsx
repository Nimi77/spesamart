'use client';

import BillingDetailsForm from './_components/BillingForm';
import CheckoutBreadcrumb from './_components/BreadCrumb';
import OrderSummary from './_components/OrderSummary';
import { useState } from 'react';

export default function Checkout() {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleValidationChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  return (
    <div className="m-auto max-w-[90%] py-14 xl:max-w-6xl">
      <CheckoutBreadcrumb current="Checkout" />

      <div className="mt-14 flex flex-col justify-between gap-8 md:flex-row">
        <BillingDetailsForm onValidationChange={handleValidationChange} />
        <OrderSummary isFormValid={isFormValid} />
      </div>
    </div>
  );
}
