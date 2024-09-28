"use client"

import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import StarRating from "./StarRating";
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  discount: string;
  productName: string;
  salesPrice: string | number;
  originalPrice: string | number;
  rating: number;
  reviewsCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
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
    <div className="item item1 flex flex-col gap-4">
      <div className="bg-secondary relative w-[250px] h-[270px] group">
        <Image
          src={imageSrc}
          alt={altText}
          layout="responsive"
          className="mx-auto"
        />

        <div className="absolute flex justify-between top-3 left-3 right-3">
          <div className="px-3 py-1 bg-secondary2 text-white text-xs rounded-md">
            <span>{discount}</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-white rounded-full outline-0 border-0">
              <CiHeart className="w-8 h-8" />
            </button>
            <button className="bg-white rounded-full">
              <IoEyeOutline />
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
          <span className="original-price text-dark-gray text">
            {originalPrice}
          </span>
        </div>
        <div className="rating flex gap-2">
          <StarRating rating={rating} />
          <div className="number text-sm">
            <span className="text-dark-gray">({reviewsCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;