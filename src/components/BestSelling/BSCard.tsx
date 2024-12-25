'use client';

import AddToWishlist from '@/features/AddToWishlist';
import AddToCart from '@/features/AddToCart';
import StarRating from '@/features/StarRating';
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';

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
      <div className="group relative flex h-56 items-center rounded bg-secondary">
        <Image
          src={imageSrc}
          alt={altText}
          width={120}
          height={120}
          className="m-auto h-28 w-28 object-contain"
        />

        <div className="absolute right-3 top-3">
          <div className="flex flex-col gap-2">
            <AddToWishlist
              productName={productName}
              productImage={imageSrc}
              altText={altText}
              salesPrice={salesPrice}
              originalPrice={originalPrice}
            />

            <button
              className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-in hover:bg-gray-100"
              aria-label="View product details"
            >
              <IoEyeOutline className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <AddToCart
          productName={productName}
          productImage={imageSrc}
          altText={altText}
          price={salesPrice}
          className="absolute bottom-0 left-0 right-0 h-8 w-full bg-black text-center text-white opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
        />
      </div>

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

export default BSCard;
