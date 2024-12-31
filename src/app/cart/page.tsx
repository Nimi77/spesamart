import Breadcrumb from './_components/Breadcrumb';
import CartTable from './_components/CartTable';
import useCartStore from '@/hooks/cartStore';
import CheckoutSummary from './_components/CartCheckout';

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <Breadcrumb current="Cart" />

      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-center">
          <CartTable />
          <CheckoutSummary />
        </div>
      ) : (
        <div className="text-center text-lg">
          Your cart is empty. Start shopping to add items!
        </div>
      )}
    </div>
  );
}
