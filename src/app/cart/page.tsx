import Breadcrumb from './_components/Breadcrumb';
import CartTable from './_components/CartTable';
import CheckoutSummary from './_components/CartCheckout';

export default function Cart() {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <Breadcrumb current="Cart" />

      <div className="flex flex-col justify-center">
        <CartTable />
        <CheckoutSummary />
      </div>
    </div>
  );
}
