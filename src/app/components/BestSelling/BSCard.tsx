"use client";

import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import StarRating from "../StarRating";
import AddToCart from "../AddToCart";
import Image from "next/image";

interface BSCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  salesPrice: string | number;
  originalPrice: string | number;
  rating: number;
  reviewsCount: number;
}

const BSCard: React.FC<BSCardProps> = ({
  imageSrc,
  altText,
  productName,
  salesPrice,
  originalPrice,
  rating,
  reviewsCount,
}) => {
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

        <div className="absolute top-3 right-3">
          <div className="flex flex-col gap-2">
            <button
              className="bg-white p-1 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-active hover:bg-active transition-colors duration-300 ease-in-out"
              aria-label="Add to Wishlist"
            >
              <CiHeart className="w-5 h-5" />
            </button>
            <button
              className="bg-white p-1 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-active transition-colors duration-300 ease-in-out"
              aria-label="View Details"
            >
              <IoEyeOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
        <AddToCart
          productName={productName}
          productImage={imageSrc}
          price={salesPrice}
        />
      </div>

      <div className="item-details">
        <h4 className="text-custom font-semibold">{productName}</h4>
        <div className="text-sm flex gap-3 items-center justify-start my-2">
          <span className="sales-price text-orange-red font-medium">
            {salesPrice}
          </span>
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

export default BSCard;