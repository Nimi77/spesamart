"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { products } from "./Products";
import ProductCard from "./ProductCard";
import { useState } from "react";

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
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10">
        <div className="product-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md" />
            <h3 className="text-orange-red text-sm font-semibold pl-5">
              Our Products
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Explore Our Products</h4>
            <div className="pagination-controls flex items-center justify-center gap-2">
              <button
                type="button"
                className="bg-secondary p-1 rounded-full disabled:opacity-40 hover:bg-gray-200 transition-all duration-300 ease-out"
                onClick={handlePrev}
                disabled={viewAll || pageIndex === 0}
                aria-disabled={viewAll || pageIndex === 0}
                aria-label="Previous product"
              >
                <IoArrowBack className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="bg-secondary p-1 rounded-full disabled:opacity-40  hover:bg-gray-200 transition-all duration-300 ease-out"
                onClick={handleNext}
                disabled={
                  viewAll || pageIndex + productsPerPage >= products.length
                }
                aria-disabled={
                  viewAll || pageIndex + productsPerPage >= products.length
                }
                aria-label="Next product"
              >
                <IoArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="product flex flex-col items-center justify-center gap-16">
          <div className="product-items">
            <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isNew={!!product.label}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setViewAll(!viewAll);
              setPageIndex(0);
            }}
            aria-label={viewAll ? "Show Less Products" : "View All Products"}
            tabIndex={0}
            className="bg-secondary3 text-white font-semibold text-custom px-8 py-2 rounded-md focus:bg-active transition-colors ease-in-out duration-500"
          >
            {viewAll ? "Show Less Products" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
