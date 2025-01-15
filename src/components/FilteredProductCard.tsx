'use client';

import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';
import AddToWishlist from '@/features/AddToWishlist';
import StarRating from '@/features/StarRating';
import AddToCart from '@/features/AddToCart';
import Image from 'next/image';

interface ProductCardProps {
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

const FilteredProductsCard = ({ product }: { product: ProductCardProps }) => {
  return (
    <div className="product">
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
              <div className="flex h-8 w-12 items-center justify-center rounded-md bg-accent">
                <span className="new-product text-xs uppercase text-white">
                  {product.label}
                </span>
              </div>
            ) : (
              <div className="flex h-8 w-12 items-center justify-center rounded-md bg-secondary3">
                <span className="text-sm text-white">-{product.discount}%</span>
              </div>
            )}

            <div className="absolute right-3 flex flex-col justify-end gap-2">
              <AddToWishlist
                productName={product.productName}
                productImage={product.imageSrc}
                altText={product.altText}
                price={product.price}
              />
              <button
                type="button"
                className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-in hover:bg-gray-100 focus:outline-none"
                aria-label="View Product"
              >
                <IoEyeOutline className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute right-3 top-3 flex flex-col justify-end gap-2">
            <AddToWishlist
              productName={product.productName}
              productImage={product.imageSrc}
              altText={product.altText}
              price={product.price}
            />
            <button
              type="button"
              className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-in hover:bg-gray-100 focus:outline-none"
            >
              <IoEyeOutline className="h-5 w-5" aria-label="View Product" />
            </button>
          </div>
        )}

        <div className="absolute bottom-0 w-full bg-black py-2 text-white">
          <AddToCart
            productName={product.productName}
            productImage={product.imageSrc}
            altText={product.altText}
            price={product.price}
            className="m-auto flex items-center justify-center gap-2"
            icon={<IoCartOutline size={22} aria-hidden="true" />}
          />
        </div>
      </div>

      <div className="product-details flex flex-col pt-3">
        <span className="font-medium">{product.productName}</span>
        {product.salesPrice && product.originalPrice ? (
          <div className="flex gap-3">
            <span className="sales-price font-medium text-orangeRed">
              ${product.salesPrice}
            </span>
            <span className="original-price text-darkGray line-through">
              ${product.originalPrice}
            </span>
          </div>
        ) : (
          <span className="price font-medium text-orangeRed">
            ${product.price}
          </span>
        )}
        <div className="flex items-center justify-items-center gap-1">
          <StarRating rating={product.rating} />
          <span className="text-darkGray">({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default FilteredProductsCard;
