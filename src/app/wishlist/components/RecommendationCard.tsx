'use client';

import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';
import StarRating from '@/features/StarRating';
import AddToCart from '@/features/AddToCart';
import Image from 'next/image';

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
      <div className="relative flex h-56 flex-col items-center rounded bg-secondary">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          width={120}
          height={120}
          className="m-auto h-28 w-28 object-center"
        />

        {product.label || product.discount ? (
          <div className="absolute left-3 right-3 top-3 flex justify-between">
            {product.label ? (
              <div className="flex h-8 w-12 items-center justify-center rounded-md bg-[#01E25B]">
                <span className="new-product text-xs uppercase text-white">
                  {product.label}
                </span>
              </div>
            ) : (
              <span
                className="flex h-8 w-12 items-center justify-center rounded-md bg-secondary3 text-xs text-white"
                aria-label={`${product.discount}% off`}
              >
                -{product.discount}%
              </span>
            )}

            <button
              type="button"
              className="focus:ring-secondary3 rounded-full bg-white p-1 shadow-md transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2"
              aria-label={`View ${product.productName}`}
            >
              <IoEyeOutline className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="focus:ring-secondary3 absolute right-3 top-3 rounded-full bg-white p-1 shadow-md transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2"
            aria-label={`View ${product.productName}`}
          >
            <IoEyeOutline className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <div className="absolute bottom-0 w-full bg-black py-2 text-white">
          <AddToCart
            productName={product.productName}
            productImage={product.imageSrc}
            altText={product.altText}
            price={product.price}
            className="m-auto flex items-center justify-center gap-2 text-sm"
            icon={<IoCartOutline size={22} aria-hidden="true" />}
          />
        </div>
      </div>

      <div className="product-details flex flex-col items-start gap-1">
        <span className="text-custom font-medium">{product.productName}</span>
        {product.salesPrice && product.originalPrice ? (
          <div className="flex items-start justify-center gap-3 text-sm">
            <span className="sales-price font-medium text-orange-red">
              ${product.salesPrice}
            </span>
            <span className="original-price text-dark-gray line-through">
              ${product.originalPrice}
            </span>
          </div>
        ) : (
          <span className="price text-sm font-medium text-orange-red">
            ${product.price}
          </span>
        )}
        <div className="flex items-center justify-items-center gap-1 text-sm">
          <StarRating rating={product.rating} />
          <span className="text-sm text-dark-gray">
            ({product.reviewsCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
