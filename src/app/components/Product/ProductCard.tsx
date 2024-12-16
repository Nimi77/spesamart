"use client";

import AddToWishlist from "@/features/AddToWishlist";
import StarRating from "@/features/StarRating";
import AddToCart from "@/features/AddToCart";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

interface Product {
  imageSrc: string;
  altText: string;
  label?: string;
  productName: string;
  price: number;
  rating: number;
  reviewsCount: number;
  colors?: { id: string; className: string }[];
}

const ProductCard = ({
  product,
  isNew = true,
}: {
  product: Product;
  isNew?: boolean;
}) => {
  return (
    <div className="item flex flex-col gap-4">
      <div className="bg-secondary relative flex items-center lg:w-[260px] h-[220px] rounded group transition-all duration-300 ease-in-out">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          width={120}
          height={120}
          className="object-center w-auto h-auto m-auto"
        />

        {isNew ? (
          <div className="absolute flex justify-between top-3 left-3 right-3">
            <div className="w-12 h-8 bg-[#01E25B] rounded-md flex items-center justify-center">
              <span className="new-product uppercase text-white text-xs">
                {product.label}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <AddToWishlist
                productName={product.productName}
                productImage={product.imageSrc}
                altText={product.altText}
                price={product.price}
              />
              <button
                type="button"
                className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ease-in"
              >
                <IoEyeOutline className="w-5 h-5" aria-label="View Product" />
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute flex flex-col justify-end top-3 right-3 gap-2">
            <AddToWishlist
              productName={product.productName}
              productImage={product.imageSrc}
              altText={product.altText}
              price={product.price}
            />
            <button
              type="button"
              className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 ease-in"
            >
              <IoEyeOutline className="w-5 h-5" aria-label="View Product" />
            </button>
          </div>
        )}

        <AddToCart
          productName={product.productName}
          productImage={product.imageSrc}
          altText={product.altText}
          price={product.price}
          className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
        />
      </div>

      <div className="item-details flex flex-col items-start gap-2">
        <h4 className="text-custom font-semibold">{product.productName}</h4>
        <div className="text-sm flex gap-2 justify-items-center items-center">
          <span className="price text-orange-red font-medium">
            ${product.price}
          </span>
          <StarRating rating={product.rating} />
          <span className="number text-sm text-dark-gray">
            ({product.reviewsCount})
          </span>
        </div>
        {product.colors && (
          <div className="color flex gap-2">
            {product.colors.map((color) => (
              <span
                key={color.id}
                className={`w-4 h-4 rounded-full ${color.className} 
                focus:outline-none focus-visible:border focus-visible:border-black 
                hover:border hover:border-black transition-border`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
