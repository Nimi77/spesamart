"use client";

import useCartStore, { CartItem } from "@/stores/cartStore";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="flex flex-col justify-center gap-6">
      <table
        aria-label="Cart Table"
        className="w-full text-left border-collapse"
      >
        <thead className="bg-white font-medium shadow rounded">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="space-y-6 mt-4">
          {cartItems.map((item) => (
            <tr key={item.productName} className="rounded border-none">
              <td className="flex items-center gap-2">
                <div className="product-img relative">
                  <Image
                    src={item.productImage}
                    alt={item.altText}
                    width="48"
                    height="40"
                    className="w-auto h-auto object-contain"
                  />
                  <button
                    onClick={() => removeFromCart(item.productName)}
                    className="absolute flex items-center justify-center text-xs w-4 h-4 text-white top-0 bg-red-600 rounded-full"
                  >
                    x
                  </button>
                </div>
                <span>{item.productName}</span>
              </td>
              <td>${item.salesPrice ?? item.price ?? 1}</td>
              <td>
                <div className="flex items-center px-1 w-fit rounded border">
                  {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                  <div className="flex flex-col items-center pl-2">
                    <button
                      type="button"
                      onClick={() => decrementQuantity(item.productName)}
                      className="min-w-11 min-h-11"
                      aria-label="Increase quantity"
                    >
                      <IoIosArrowUp size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => incrementQuantity(item.productName)}
                      className="min-w-11 min-h-11"
                      aria-label="Decrease quantity"
                    >
                      <IoIosArrowDown size={14} />
                    </button>
                  </div>
                </div>
              </td>
              <td>${formatCurrency(calculateSubtotal(item))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="bg-transparent font-medium text-custom px-6 py-2 rounded border focus:outline-none transition-colors ease-out duration-300 hover:shadow-inner"
          onClick={returnButton}
        >
          Return To Shop
        </button>
        <button
          type="button"
          className="bg-transparent font-medium text-custom px-6 py-2 rounded border focus:outline-none transition-colors ease-out duration-300 hover:shadow-inner"
          onClick={returnButton}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartTable;
