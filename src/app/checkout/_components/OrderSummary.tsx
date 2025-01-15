import useCartStore from '@/hooks/cartStore';
import { showNotification } from '@/utilis/showNotification';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const OrderSummary = ({ isFormValid }: { isFormValid: boolean }) => {
  const {
    cartItems,
    setCartItems,
    calculateSubtotal,
    calculateTotal,
    calculateDiscountAmount,
    applyDiscount,
    discountApplied,
    formData,
    setFormData,
  } = useCartStore();

  const [discountCode, setDiscountCode] = useState('');
  const [addDiscount, setAddDiscount] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);
  const router = useRouter();

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'discount25') {
      applyDiscount(0.25);
      setAddDiscount(true);

      showNotification({
        icon: 'success',
        title: '25% discount has been applied to your order!',
        position: 'top-end',
      });
    } else {
      showNotification({
        icon: 'error',
        title: 'Invalid Discount Code!',
        position: 'top-end',
      });
    }
  };

  const handlePlaceOrder = () => {
    if (!isFormValid) {
      showNotification({
        icon: 'error',
        title:
          'Please complete the billing details form before placing your order.',
        position: 'top-end',
      });
      return;
    }

    try {
      setPlacingOrder(true);

      const orderData = {
        formData,
        cartItems,
        total: calculateTotal(),
        discountApplied,
      };

      // Simulate order placement and notification
      setPlacingOrder(false);
      showNotification({
        icon: 'success',
        title: 'Order placed successfully!',
        position: 'top-end',
      });
      router.push('/');

      setTimeout(() => {
        localStorage.setItem('orderData', JSON.stringify(orderData));
        setFormData(null);
        setCartItems([]);
      }, 3000);
    } catch (error) {
      console.error('Error placing order:', error);
      showNotification({
        icon: 'error',
        title: 'Failed to place order. Try again later.',
        position: 'top-end',
      });
      setPlacingOrder(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="md:mt-[3.4rem]">
        <h2 className="mb-4 text-lg font-medium md:hidden">Order Summary</h2>

        <div className="cart-items space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.productName}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.productImage}
                  alt={item.altText}
                  width={48}
                  height={40}
                  className="h-10 w-12 object-contain"
                />
                <span>{item.productName}</span>
              </div>
              <span>{formatCurrency(calculateSubtotal())}</span>
            </div>
          ))}
        </div>

        <div className="my-4">
          <div className="flex justify-between border-b py-2">
            <span>Subtotal:</span>
            <span>{formatCurrency(calculateSubtotal())}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          {discountApplied && (
            <div className="flex justify-between border-b py-2">
              <span>Discount (25%):</span>
              <span>-${calculateDiscountAmount()}</span>
            </div>
          )}
          <div className="flex justify-between py-2">
            <span>Total:</span>
            <span>{formatCurrency(calculateTotal())}</span>
          </div>
        </div>

        <div className="space-y-5">
          {!discountApplied && (
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1 rounded border px-4 py-2 outline-none"
              />
              <button
                type="button"
                onClick={handleApplyDiscount}
                disabled={discountApplied || addDiscount}
                aria-disabled={discountApplied || addDiscount}
                className="rounded bg-secondary3 px-4 py-2 text-white hover:bg-active disabled:opacity-50"
              >
                Apply Coupon
              </button>
            </div>
          )}

          <button
            onClick={handlePlaceOrder}
            className={`w-full rounded bg-secondary3 px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-active focus:outline-none ${
              !isFormValid || placingOrder
                ? 'cursor-not-allowed opacity-50'
                : ''
            }`}
            disabled={!isFormValid || placingOrder}
          >
            {placingOrder ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
