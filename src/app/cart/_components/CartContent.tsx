'use client';

import useCartStore from '@/hooks/cartStore';
import CartCheckout from './CartCheckout';
import CartTable from './CartTable';

const CartContent = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-center">
          <CartTable />
          <CartCheckout />
        </div>
      ) : (
        <div className="text-center text-lg">
          Your cart is empty. Start shopping to add items!
        </div>
      )}
    </>
  );
};

export default CartContent;
