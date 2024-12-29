import BillingDetailsForm from './_components/BillingForm';
import CheckoutBreadcrumb from './_components/BreadCrumb';
import OrderSummary from './_components/OrderSummary';
import { Suspense } from 'react';

export default function Checkout() {
  return (
    <div className="m-auto max-w-[90%] py-14 xl:max-w-6xl">
      <CheckoutBreadcrumb current="Checkout" />

      <div className="mt-14 flex flex-col gap-8 md:flex-row">
        <Suspense fallback={<div>Loading billing form...</div>}>
          <BillingDetailsForm />
        </Suspense>
        <Suspense fallback={<div>Loading cart summary...</div>}>
          <OrderSummary />
        </Suspense>
      </div>
    </div>
  );
}
