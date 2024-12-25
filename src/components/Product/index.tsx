'use client';

import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { products } from './Products';
import ProductCard from './ProductCard';
import { useState } from 'react';

const Product = () => {
  const [viewAll, setViewAll] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const productsPerPage = 4;

  const displayedProducts = viewAll
    ? products
    : products.slice(pageIndex, pageIndex + 8);

  const handleNext = () => {
    if (pageIndex + productsPerPage < products.length) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <section className="products my-24">
      <div className="mx-auto flex max-w-[90%] flex-col gap-10 xl:max-w-6xl">
        <div className="product-heading">
          <div className="heading flex items-center justify-start">
            <span className="h-10 w-5 rounded-md bg-secondary3" />
            <h3 className="pl-5 text-sm font-semibold text-orange-red">
              Our Products
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Explore Our Products</h4>
            <div className="pagination-controls flex items-center justify-center gap-2">
              <button
                type="button"
                className="rounded-full bg-secondary p-1 transition-all duration-300 ease-out hover:bg-gray-200 disabled:opacity-40"
                onClick={handlePrev}
                disabled={viewAll || pageIndex === 0}
                aria-disabled={viewAll || pageIndex === 0}
                aria-label="Previous product"
              >
                <IoArrowBack className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-full bg-secondary p-1 transition-all duration-300 ease-out hover:bg-gray-200 disabled:opacity-40"
                onClick={handleNext}
                disabled={
                  viewAll || pageIndex + productsPerPage >= products.length
                }
                aria-disabled={
                  viewAll || pageIndex + productsPerPage >= products.length
                }
                aria-label="Next product"
              >
                <IoArrowForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="product-list grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isNew={!!product.label}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setViewAll(!viewAll);
              setPageIndex(0);
            }}
            aria-label={viewAll ? 'Show Less Products' : 'View All Products'}
            className="mx-auto w-max rounded border-none bg-secondary3 px-6 py-2.5 text-custom font-semibold text-white outline-none transition-all duration-300 ease-in-out hover:bg-active"
          >
            {viewAll ? 'Show Less Products' : 'View All Products'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
