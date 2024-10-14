"use client";

import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import StarRating from "../StarRating";
import Image from "next/image";

interface SProductProps {
  imageSrc: string;
  altText: string;
  discount: number;
  productName: string;
  salesPrice: string | number;
  originalPrice: string | number;
  rating: number;
  reviewsCount: number;
}

const SProductCard: React.FC<SProductProps> = ({
  imageSrc,
  altText,
  discount,
  productName,
  salesPrice,
  originalPrice,
  rating,
  reviewsCount,
}) => {
  // Function to handle adding product to the cart
  const handleAddToCart = () => {
    alert("Added to Cart!");
  };

  return (
    <div className="item flex flex-col gap-4">
      <div className="bg-secondary relative flex items-center lg:w-[260px] h-[220px] rounded group">
        <Image
          src={imageSrc}
          alt={altText}
          loading="lazy"
          width={120}
          height={120}
          className="object-center m-auto"
        />
        <div className="absolute flex justify-between top-3 left-3 right-3">
          <div className="flex items-center justify-center w-12 h-8 bg-secondary3 text-white text-xs rounded-md">
            <span>-{discount}%</span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="bg-white p-1 rounded-full shadow-md hover:bg-active focus:outline-none focus:ring-2 focus:ring-active 
              transition-colors duration-300 ease-in-out"
              aria-label="Add to Wishlist"
              tabIndex={0}
            >
              <CiHeart className="w-5 h-5" />
            </button>
            <button
              className="bg-white p-1 rounded-full shadow-md hover:bg-active focus:outline-none focus:ring-2 focus:ring-active 
              transition-colors duration-300 ease-in-out"
              aria-label="View Product"
              tabIndex={0}
            >
              <IoEyeOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
        <button
          className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-active"
          onClick={handleAddToCart}
          tabIndex={0}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Details */}
      <div className="item-details">
        <h4 className="text-custom font-semibold">{productName}</h4>
        <div className="text-sm flex gap-3 items-center justify-start my-2">
          <span className="sales-price text-orange-red">{salesPrice}</span>
          <span className="original-price text-dark-gray line-through">
            {originalPrice}
          </span>
        </div>
        <div className="rating flex items-center justify-start gap-2">
          <StarRating rating={rating} />
          <div className="number text-sm">
            <span className="text-dark-gray">({reviewsCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SProductCard;
