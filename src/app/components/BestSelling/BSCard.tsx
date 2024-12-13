"use client";

import AddToWishlist from "@/features/AddToWishlist";
import AddToCart from "@/features/AddToCart";
import StarRating from "@/features/StarRating";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

interface BSCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  salesPrice: number;
  originalPrice: number;
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
          width={120}
          height={120}
          className="object-cover m-auto"
        />

        <div className="absolute top-3 right-3">
          <div className="flex flex-col gap-2">
            <AddToWishlist
              productName={productName}
              imageSrc={imageSrc}
              altText={altText}
              salesPrice={salesPrice}
              originalPrice={originalPrice}
            />

            <button
              className="bg-white p-1 rounded-full hover:bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all duration-300 ease-in"
              aria-label="View Details"
            >
              <IoEyeOutline className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AddToCart
          productName={productName}
          productImage={imageSrc}
          altText={altText}
          price={salesPrice}
          className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
        />
      </div>

      <div className="item-details">
        <h4 className="text-custom font-semibold">{productName}</h4>
        <div className="text-sm flex gap-3 items-center justify-start my-1">
          <span className="sales-price text-orange-red font-medium">
            ${salesPrice}
          </span>
          <span className="original-price text-dark-gray line-through">
            ${originalPrice}
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
