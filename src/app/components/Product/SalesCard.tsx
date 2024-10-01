"use client"

import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import StarRating from "./StarRating";
import Image from "next/image";

interface SalesProductCardProps {
  imageSrc: string;
  altText: string;
  discount: string;
  productName: string;
  salesPrice: string | number;
  originalPrice: string | number;
  rating: number;
  reviewsCount: number;
}

const SalesProductCard: React.FC<SalesProductCardProps> = ({
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
      <div className="bg-secondary relative lg:w-[250px] h-[270px] group">
        <Image
          src={imageSrc}
          alt={altText} 
          loading="lazy"
          fill                   
          className="mx-auto"
        />

        <div className="absolute flex justify-between top-3 left-3 right-3">
          <div className="flex items-center justify-center w-12 h-8 bg-secondary2 text-white text-xs rounded-md">
            <span>{discount}</span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-white p-1 rounded-full hover:bg-active">
              <CiHeart className="w-5 h-5" />
            </button>
            <button className="bg-white rounded-full p-1">
              <IoEyeOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Add to Cart */}
        <button
          className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => alert("Added to Cart!")}
        >
          Add to Cart
        </button>
      </div>

      <div className="item-details">
        <h4 className="font-semibold">{productName}</h4>
        <div className="text-custom flex gap-3 items-center justify-start my-2">
          <span className="sales-price text-orange-red">{salesPrice}</span>
          <span className="original-price text-dark-gray">
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
export default SalesProductCard;