import useCartStore from "@/stores/cartStore";

const CartCheckout = () => {
  const total = useCartStore((state) => state.calculateTotal());

  return (
    <div className="flex items-start justify-between mt-14">
      <div className="flex justify-center gap-2">
        <div className="max-w-72 bg-secondary rounded-md pl-5 pr-3">
          <input
            type="text"
            placeholder="Discount Code"
            className="bg-transparent text-[#7D8184] text-sm border-none outline-none w-full"
          />
        </div>
        <button className="bg-secondary3 px-2 py-6 hover:bg-active transition-colors duration-300 ease-out">
          Apply Coupon
        </button>
      </div>
      <div className="border-gray-800 rounded px-2 py-4">
        <h3 className="semibold">Cart Total</h3>
        <div className="space-x-2 pt-4 pb-2">
          <div className="flex justify-between items-center py-2 border-b">
            <span>SubTotal: </span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center border-b">
            <span>Total: </span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          type="button"
          className="bg-secondary3  text-center px-4 py-2 rounded hover:bg-active transition-colors duration-300 ease-in-out"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
