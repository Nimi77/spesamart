'use client';

import AddToWishlist from '@/features/AddToWishlist';
import StarRating from '@/features/StarRating';
import AddToCart from '@/features/AddToCart';
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';

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
    <div className="item">
      <div className="group relative flex h-56 items-center rounded bg-secondary transition-all duration-300 ease-in-out">
        <Image
          src={product.imageSrc}
          alt={product.altText}
          width={120}
          height={120}
          className="m-auto h-28 w-28 object-contain"
        />

        {isNew ? (
          <div className="absolute left-3 right-3 top-3 flex justify-between">
            <div className="flex h-8 w-12 items-center justify-center rounded-md bg-accent">
              <span className="new-product text-xs uppercase text-white">
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
                className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-in hover:bg-gray-100"
              >
                <IoEyeOutline className="h-5 w-5" aria-label="View Product" />
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
              className="rounded-full bg-white p-1 shadow-md transition-all duration-300 ease-in hover:bg-gray-100"
            >
              <IoEyeOutline className="h-5 w-5" aria-label="View Product" />
            </button>
          </div>
        )}

        <AddToCart
          productName={product.productName}
          productImage={product.imageSrc}
          altText={product.altText}
          price={product.price}
          className="absolute bottom-0 left-0 right-0 h-8 w-full bg-black text-center text-white opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
        />
      </div>

      <div className="item-details flex flex-col pt-3">
        <h4 className="font-medium">{product.productName}</h4>
        <div className="flex items-center justify-items-center gap-2">
          <span className="price font-medium text-orange-red">
            ${product.price}
          </span>
          <StarRating rating={product.rating} />
          <span className="number text-dark-gray">
            ({product.reviewsCount})
          </span>
        </div>
        {product.colors && (
          <div className="color flex gap-2">
            {product.colors.map((color) => (
              <span
                key={color.id}
                className={`h-4 w-4 rounded-full ${color.className} transition-border hover:border hover:border-black focus:outline-none focus-visible:border focus-visible:border-black`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
