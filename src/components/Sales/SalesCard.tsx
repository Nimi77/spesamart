'use client';

import AddToWishlist from '@/features/AddToWishlist';
import StarRating from '@/features/StarRating';
import AddToCart from '@/features/AddToCart';
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';

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
      <div className="group relative flex h-[220px] w-[170px] items-center bg-secondary transition-all duration-300 ease-in-out md:w-60">
        <Image
          src={imageSrc}
          alt={altText}
          width={120}
          height={120}
          className="m-auto h-auto w-auto object-center"
        />

        <div className="absolute left-3 right-3 top-3 flex justify-between">
          <div className="flex h-8 w-12 items-center justify-center rounded-md bg-secondary3 text-xs text-white">
            <span>-{discount}%</span>
          </div>
          <div className="flex flex-col gap-2">
            <AddToWishlist
              productName={productName}
              productImage={imageSrc}
              altText={altText}
              salesPrice={salesPrice}
              originalPrice={originalPrice}
              discount={discount}
            />
            <button
              type="button"
              className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-out hover:bg-gray-100 focus:outline-none focus:ring-2"
              aria-label="View Product"
              tabIndex={0}
            >
              <IoEyeOutline className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AddToCart
          productName={productName}
          productImage={imageSrc}
          altText={altText}
          price={salesPrice}
          className="absolute bottom-0 left-0 right-0 h-8 w-full bg-black text-center text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
      </div>

      {/* Product Details */}
      <div className="item-details">
        <h4 className="text-custom font-semibold">{productName}</h4>
        <div className="my-1 flex items-center justify-start gap-3 text-sm">
          <span className="sales-price font-medium text-orange-red">
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
