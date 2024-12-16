import BillingDetailsForm from "./components/BillingForm";
import Breadcrumb from "./components/BreadCrumb";
import CartSummary from "./components/CartSumary";

export default function CheckOut() {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex flex-col gap-14">
      <Breadcrumb current="Checkout" />

      <div className="flex flex-col gap-8 md:flex-row">
        <BillingDetailsForm />
        <CartSummary />
      </div>
    </div>
  );
}
