import Breadcrumb from "./components/BreadCrumb";
import CartTable from "./components/CartTable";
import CheckoutSummary from "./components/CartCheckout";

export default function Cart() {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex flex-col gap-14">
      <Breadcrumb current="Cart" />

      <div className="flex flex-col justify-center">
        <CartTable />
        <CheckoutSummary />
      </div>
    </div>
  );
}
