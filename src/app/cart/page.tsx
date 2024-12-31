import Breadcrumb from './_components/Breadcrumb';
import CartContent from './_components/CartContent';

export default function Cart() {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <Breadcrumb current="Cart" />
      <CartContent />
    </div>
  );
}
