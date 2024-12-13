"use client";

import useCartStore, { CartItem } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

const CartTable = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const router = useRouter();
  const returnButton = () => {
    router.push("/");
  };

  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2);
  };

  const calculateSubtotal = (item: CartItem): number => {
    const price = item.salesPrice ?? item.price ?? 1;
    return (price || 1) * item.quantity;
  };

  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <table className="w-full text-left">
        <thead className="px-4 py-2 bg-white shadow rounded">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <div className="space-x-10">
          {cartItems.map((item) => (
            <tr
              key={item.productName}
              className="bg-white px-4 py-2 shadow rounded"
            >
              <td className="flex justify-center gap-2">
                <div className="relative w-12 h-10">
                  {item.productImage}
                  <button
                    onClick={() => removeFromCart(item.productName)}
                    className="absolute -top-1 -left-1 bg-red-600 rounded-full text-xs"
                  >
                    x
                  </button>
                </div>
                {item.productName}
              </td>
              <td>${item.salesPrice ?? item.price ?? 1}</td>
              <td className="p-0.5 rounded border">
                <button
                  type="button"
                  onClick={() => decrementQuantity(item.productName)}
                ></button>
                {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                <button
                  type="button"
                  onClick={() => incrementQuantity(item.productName)}
                ></button>
              </td>
              <td>${formatCurrency(calculateSubtotal(item))}</td>
            </tr>
          ))}
        </div>
      </table>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="bg-transparent font-semibold text-custom px-6 py-2 rounded-md border focus:outline-none transition-colors linear duration-300 hover:shadow-inner"
          onClick={returnButton}
        >
          Return To Shop
        </button>
        <button
          type="button"
          className="bg-transparent font-semibold text-custom px-6 py-2 rounded-md border focus:outline-none transition-colors linear duration-300 hover:shadow-inner"
          onClick={returnButton}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;
