'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import useWishlistStore from '@/hooks/wishlistStore';
import useCartStore from '@/hooks/cartStore';
import { IoCartOutline } from 'react-icons/io5';
import AddToCart from '@/features/AddToCart';
import Image from 'next/image';
import { useMemo } from 'react';
import { showNotification } from '@/utilis/showNotification';

const Wishlist = () => {
  const wishlistItems = useWishlistStore((state) => state.items);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);

  const addMultipleToCart = useCartStore((state) => state.addMultipleToCart);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );
  const isEmpty = useMemo(() => wishlistItems.length === 0, [wishlistItems]);

  const moveAllToBag = () => {
    // mapped wishlist items to include quantity
    const itemsToMove = wishlistItems.map((item) => ({
      ...item,
      quantity: 1,
    }));

    // add items to the cart
    addMultipleToCart(itemsToMove);
    showNotification({
      icon: 'success',
      title: 'All items have been successfully added to your cart!',
      position: 'top-end',
    });

    clearWishlist();
  };

  return (
    <div className="wishlist flex flex-col justify-center">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-lg font-medium">
          Wishlist ({wishlistItems.length})
        </h2>
        <button
          type="button"
          onClick={moveAllToBag}
          className="rounded-md border bg-transparent px-6 py-2 font-medium transition-colors duration-300 ease-in-out hover:bg-secondary3 hover:text-white focus:outline-none active:shadow-inner"
        >
          Move All To Bag
        </button>
      </div>

      {isEmpty ? (
        <p className="mt-6 text-gray-500" role="status">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(220px,_230px))]">
          {wishlistItems.map((item) => (
            <div key={item.productName}>
              <div className="relative flex h-56 flex-col items-center rounded bg-secondary">
                <Image
                  src={item.productImage}
                  alt={item.altText}
                  width={120}
                  height={120}
                  className="m-auto h-28 w-28 object-contain"
                />

                {item.discount && (
                  <div className="absolute left-3 right-3 top-3 flex justify-between">
                    <span
                      className="flex h-8 w-12 items-center justify-center rounded-md bg-secondary3 text-sm text-white"
                      aria-label={`${item.discount}% discount`}
                    >
                      -{item.discount}%
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromWishlist(item.productName)}
                      className="absolute right-3 rounded-full bg-white p-1.5 shadow transition-colors ease-in hover:bg-red-600 focus:outline-none"
                      aria-label={`Remove ${item.productName} from wishlist`}
                    >
                      <TrashIcon
                        className="h-5 w-5 hover:text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                )}

                {/* if no discount then show only delete btn */}
                {!item.discount && (
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item.productName)}
                    className="absolute right-3 top-3 rounded-full bg-white p-1.5 shadow transition-colors ease-in hover:bg-red-600 focus:outline-none"
                    aria-label={`Remove ${item.productName} from wishlist`}
                  >
                    <TrashIcon
                      className="h-5 w-5 hover:text-white"
                      aria-hidden="true"
                    />
                  </button>
                )}

                <div className="absolute bottom-0 w-full bg-black py-2 text-white">
                  <AddToCart
                    productName={item.productName}
                    productImage={item.productImage}
                    altText={item.altText}
                    price={item.price}
                    className="m-auto flex items-center justify-center gap-3"
                    icon={<IoCartOutline size={22} aria-hidden="true" />}
                  />
                </div>
              </div>

              <div className="item-details flex flex-col pt-3">
                <h4 className="font-medium">{item.productName}</h4>

                {item.salesPrice && item.originalPrice ? (
                  <div className="flex items-start gap-3">
                    <span className="sales-price font-medium text-orange-red">
                      ${item.salesPrice}
                    </span>
                    <span className="original-price text-dark-gray line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                ) : (
                  <span className="price font-medium text-orange-red">
                    ${item.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
