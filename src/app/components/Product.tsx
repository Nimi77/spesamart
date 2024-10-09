"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductCard from "./Product/ProductCard";
import { useState } from "react";
import { products } from "./Product/Products";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardPerSlide = 8;
 
  const displayedProducts = products.slice(
    currentSlide,
    currentSlide + cardPerSlide
  );

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleNextSlide = () => {
    if (currentSlide + cardPerSlide < products.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <section className="products my-24">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10">
        <div className="product-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold pl-5">
              Our Products
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Explore Our Products</h4>
            <div className="pagination-controls flex items-center justify-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="bg-secondary p-1 rounded-full items-center disabled:opacity-40"
              >
                <IoArrowBack className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={currentSlide + cardPerSlide >= products.length}
                className="bg-secondary p-1 rounded-full items-center disabled:opacity-40"
              >
                <IoArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="product flex flex-col items-center justify-center gap-16">
          <div className="items-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <button className="bg-secondary3 text-white font-semibold text-custom px-6 py-3 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
