"use client";

import useWishlistStore from "@/stores/wishlistStore";
import { BsHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

interface AddToWishlistProps {
  productName: string;
  productImage: string;
  altText: string;
  salesPrice?: number;
  originalPrice?: number;
  price?: number;
  discount?: number;
}

const AddToWishlist: React.FC<AddToWishlistProps> = ({
  productName,
  productImage,
  altText,
  salesPrice,
  originalPrice,
  price,
  discount,
}) => {
  const [loveProduct, setLoveProduct] = useState(false);

  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const handleToggleWishlist = () => {
    if (isInWishlist(productName)) {
      removeFromWishlist(productName);
      setLoveProduct(false);
    } else {
      addToWishlist({
        productName,
        productImage,
        altText,
        salesPrice,
        originalPrice,
        price,
        discount,
      });
      setLoveProduct(true);
    }
  };

  return (
    <button
      type="button"
      className={`p-1 rounded-full focus:outline-none focus:ring-2 transition-colors duration-300 ease-in ${
        loveProduct
          ? "text-red-600 hover:text-red-500"
          : "bg-white text-black shadow-md hover:text-red-600"
      }`}
      aria-label={loveProduct ? "Remove from Wishlist" : "Add to Wishlist"}
      tabIndex={0}
      onClick={handleToggleWishlist}
    >
      {loveProduct ? (
        <BsHeartFill className="w-5 h-5" />
      ) : (
        <CiHeart className="w-5 h-5" />
      )}
    </button>
  );
};

export default AddToWishlist;
