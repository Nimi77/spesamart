"use client";

import useWishlistStore from "@/stores/wishlistStore";
import { IoCartOutline } from "react-icons/io5";
import AddToCart from "@/features/AddToCart";
import DeleteIcon from "@/assets/delete.svg";
import Image from "next/image";
import { useMemo } from "react";

const Wishlist = () => {
  const wishlistItems = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);

  const isEmpty = useMemo(() => wishlistItems.length === 0, [wishlistItems]);

  return (
    <div className="wishlist flex flex-col items-start justify-center gap-12">
      <div className="flex items-center justify-between w-full">
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button
          type="button"
          onClick={clearWishlist}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Move All To Bag
        </button>
      </div>

      {/* wishlist items */}
      {isEmpty ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="item-list flex items-start justify-center gap-6 flex-wrap">
          {wishlistItems.map((item) => (
            <div
              key={item.productName}
              className="item bg-secondary relative flex flex-col items-center w-[170px] md:w-60 h-[280px] rounded group"
            >
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={120}
                height={120}
                className="w-auto h-auto object-center m-auto"
              />

              {/* discount and delete */}
              <div className="absolute flex justify-between top-3 left-3 right-3">
                {item.discount && (
                  <span className="flex items-center justify-center w-12 h-8 bg-secondary3 text-white text-xs rounded-md">
                    -{item.discount}%
                  </span>
                )}
                <button
                  className="bg-white p-1.5 rounded-full shadow hover:bg-none focus:outline-none focus:ring-2 focus:ring-active 
                  transition-colors duration-300 ease-in-out"
                  onClick={() => removeFromWishlist(item.productName)}
                  aria-label="Delete Product"
                  tabIndex={0}
                >
                  <DeleteIcon />
                </button>
              </div>

              <div className="absolute w-full bottom-0 py-2 bg-black text-white">
                <AddToCart
                  productName={item.productName}
                  productImage={item.imageSrc}
                  altText={item.altText}
                  price={item.price}
                  className="flex items-center justify-center gap-3 m-auto text-sm"
                  icon={<IoCartOutline size={22} />}
                />
              </div>

              {/* product details */}
              <div className="item-details flex flex-col items-start gap-4 mt-2">
                <h4 className="text-custom font-semibold">
                  {item.productName}
                </h4>

                {item.salesPrice && item.originalPrice ? (
                  <div className="text-sm flex gap-3 items-start justify-center">
                    <span className="sales-price text-orange-red font-medium">
                      ${item.salesPrice}
                    </span>
                    <span className="original-price text-dark-gray line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                ) : (
                  <span className="price text-orange-red font-medium">
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
