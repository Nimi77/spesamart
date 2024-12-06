"use client";

import AddToWishlist from "@/features/AddToWishlist";
import StarRating from "@/features/StarRating";
import AddToCart from "@/features/AddToCart";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

interface SProductProps {
  imageSrc: string;
  altText: string;
  discount: number;
  productName: string;
  salesPrice: number;
  originalPrice: number;
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
  return (
    <div className="item flex flex-col gap-4">
      <div className="bg-secondary relative flex items-center w-[170px] md:w-60 h-[220px] rounded group">
        <Image
          src={imageSrc}
          alt={altText}
          width={120}
          height={120}
          className="w-auto h-auto object-center m-auto"
        />
        <div className="absolute flex justify-between top-3 left-3 right-3">
          <div className="flex items-center justify-center w-12 h-8 bg-secondary3 text-white text-xs rounded-md">
            <span>-{discount}%</span>
          </div>
          <div className="flex flex-col gap-2">
            <AddToWishlist
              productName={productName}
              imageSrc={imageSrc}
              altText={altText}
            />
            <button
              type="button"
              className="bg-white p-1 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-active 
              transition-colors duration-300 ease-in-out"
              aria-label="View Product"
              tabIndex={0}
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

      {/* Product Details */}
      <div className="item-details">
        <h4 className="text-custom font-semibold">{productName}</h4>
        <div className="text-sm flex gap-3 items-center justify-start my-2">
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

export default SProductCard;
