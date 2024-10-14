"use client";

import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import StarRating from "@/app/components/StarRating";
import Image from "next/image";

interface Product {
  imageSrc: string;
  altText: string;
  discount?: number;
  productName: string;
  price: string;
  rating: number;
  reviewsCount: number;
  colors?: string[];
}

const ProductCard = ({
  product,
  showDiscount = true,
}: {
  product: Product;
  showDiscount?: boolean;
}) => {
  return (
    <div className="item flex flex-col gap-4">
      <div className="bg-secondary relative flex items-center lg:w-[260px] h-[220px] rounded group">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          loading="lazy"
          width={120}
          height={120}
          className="object-center m-auto"
        />

        {showDiscount && product.discount && (
          <div className="absolute top-3 left-3 w-12 h-8 bg-[#01E25B] text-white text-xs rounded-md flex items-center justify-center">
            <span className="discount">-{product.discount}%</span>
          </div>
        )}
        <div className="absolute flex justify-end top-3 right-3 gap-2">
          <button className="bg-white p-1 rounded-full shadow-md hover:bg-active transition-colors duration-300">
            <CiHeart className="w-5 h-5" aria-label="Add to Wishlist" />
          </button>
          <button className="bg-white p-1 rounded-full shadow-md transition-colors duration-300">
            <IoEyeOutline className="w-5 h-5" aria-label="View Product" />
          </button>
        </div>
        {/* Add to Cart */}
        <button
          className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => alert("Added to Cart!")}
        >
          Add to Cart
        </button>
      </div>

      <div className="item-details flex flex-col items-start gap-4">
        <h4 className="text-custom font-semibold">{product.productName}</h4>
        <div className="text-sm flex gap-4 justify-items-center">
          <span className="price text-orange-red">{product.price}</span>
          <StarRating rating={product.rating} />
          <span className="number text-sm text-dark-gray">
            ({product.reviewsCount})
          </span>
        </div>
        {product.colors && (
          <div className="color flex gap-2">
            {product.colors.map((color: string, idx: number) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full 
                  ${color} 
                  ${idx === 0 ? "border border-black" : "border-none"} 
                  focus:outline-none focus-visible:border focus-visible:border-black 
                  hover:border hover:border-black transition-border`}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;