"use client";

import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import StarRating from "@/features/StarRating";
import AddToCart from "@/features/AddToCart";
import Image from "next/image";

interface RecommendationCardProps {
  imageSrc: string;
  altText: string;
  discount?: string;
  label?: string;
  productName: string;
  salesPrice?: number;
  originalPrice?: number;
  price?: number;
  rating: number;
  reviewsCount: number;
}

const RecommendationCard = ({
  product,
}: {
  product: RecommendationCardProps;
}) => {
  return (
    <div className="product flex flex-col gap-4">
      <div className="bg-secondary relative flex justify-center lg:w-[260px] h-[220px] rounded transition-all duration-300 ease-in-out">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          width={120}
          height={120}
          className="object-center m-auto"
        />
        {product.label || product.discount ? (
          <div className="absolute flex justify-between top-3 right-3">
            {product.label ? (
              <span className="new-product uppercase text-white text-xs">
                {product.label}
              </span>
            ) : (
              <span className="flex items-center justify-center w-12 h-8 bg-secondary3 text-white text-xs rounded-md">
                -{product.discount}%
              </span>
            )}
            <button
              type="button"
              className="bg-white p-1 rounded-full shadow-md transition-colors duration-300"
            >
              <IoEyeOutline className="w-5 h-5" aria-label="View Product" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md transition-colors duration-300"
          >
            <IoEyeOutline className="w-5 h-5" aria-label="View Product" />
          </button>
        )}
      </div>

      {/* Add to Cart Button */}
      <div className="absolute w-full bottom-0 py-2 bg-black text-white">
        <AddToCart
          productName={product.productName}
          productImage={product.imageSrc}
          altText={product.altText}
          price={product.price}
          className="flex items-center justify-center gap-3 m-auto text-sm"
          icon={<IoCartOutline size={22} />}
        />
      </div>

      <div className="product-details flex flex-col items-start gap-4">
        <h4 className="text-custom font-semibold">{product.productName}</h4>
        {product.salesPrice && product.originalPrice ? (
          <div className="text-sm flex gap-3 items-start justify-center">
            <span className="sales-price text-orange-red font-medium">
              ${product.salesPrice}
            </span>
            <span className="original-price text-dark-gray line-through">
              ${product.originalPrice}
            </span>
          </div>
        ) : (
          <span className="price text-orange-red font-medium">
            ${product.price}
          </span>
        )}
        <div className="text-sm flex justify-items-center items-center">
          <StarRating rating={product.rating} />
          <span className="mr-4 text-sm text-dark-gray">
            ({product.reviewsCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
