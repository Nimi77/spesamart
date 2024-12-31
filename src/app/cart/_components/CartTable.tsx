'use client';

import useCartStore, { CartItem } from '@/hooks/cartStore';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CartTable = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const router = useRouter();
  const returnButton = () => {
    router.push('/');
  };

  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2);
  };

  const calculateSubtotal = (item: CartItem): number => {
    const price = item.salesPrice ?? item.price ?? 1;
    return (price || 1) * item.quantity;
  };

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="overflow-x-auto">
        <table
          aria-label="Shopping Cart"
          className="cart-table w-full border-collapse text-left"
        >
          <thead className="rounded bg-white shadow">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody className="mt-4 space-y-6">
            {cartItems.map((item) => (
              <tr key={item.productName} className="rounded border-none">
                <td className="flex items-center gap-2">
                  <div className="product-img relative">
                    <Image
                      src={item.productImage}
                      alt={item.altText}
                      width={48}
                      height={40}
                      className="h-auto w-auto object-contain"
                    />
                    <button
                      onClick={() => removeFromCart(item.productName)}
                      className="absolute top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white focus:outline-none"
                      aria-label={`Remove ${item.productName} from cart`}
                    >
                      <span aria-hidden="true">x</span>
                    </button>
                  </div>
                  <span>{item.productName}</span>
                </td>
                <td>${item.salesPrice ?? item.price ?? 1}</td>
                <td>
                  <div className="flex w-fit items-center rounded border p-1">
                    <span aria-live="polite" className="sr-only">
                      Quantity: {item.quantity}
                    </span>
                    {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                    <div className="flex flex-col items-center pl-2">
                      <button
                        type="button"
                        onClick={() => incrementQuantity(item.productName)}
                        aria-label={`Increase quantity of ${item.productName}`}
                      >
                        <IoIosArrowUp size={14} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => decrementQuantity(item.productName)}
                        aria-label={`Decrease quantity of ${item.productName}`}
                      >
                        <IoIosArrowDown size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </td>
                <td>${formatCurrency(calculateSubtotal(item))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="rounded border bg-transparent px-6 py-2 font-medium transition-colors duration-300 ease-in-out hover:shadow-inner"
          onClick={returnButton}
        >
          Return To Shop
        </button>
        <button
          type="button"
          className="rounded border bg-transparent px-6 py-2 font-medium transition-colors duration-300 ease-in-out hover:shadow-inner"
          onClick={returnButton}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;
