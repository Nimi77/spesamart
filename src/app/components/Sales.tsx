"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductCard from "./Product/ProductCard";
import { products } from "./Product/Products";
import { useState } from "react";

const SemiColon = () => (
  <div className="flex flex-col gap-2">
    <span className="bg-active w-1 h-1 rounded-full"></span>
    <span className="bg-active w-1 h-1 rounded-full"></span>
  </div>
);

const Sales = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardPerSlide = 4;

  //paginating product to shift 1 at a time
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

  const TimeUnit = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col">
      <span className="text-xs font-medium">{value}</span>
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );

  return (
    <section className="mt-32">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10 border-b border-customColor">
        <div className="sales-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold pl-5">
              Today&apos;s
            </h5>
          </div>
          <div className="flex items-center justify-between pt-6">
            <h3 className="text-xl font-bold">Flash Sales</h3>
            <div className="timer flex items-center justify-center gap-4">
              <TimeUnit label="Days" value="05" />
              <SemiColon />

              <TimeUnit label="Hours" value="12" />
              <SemiColon />

              <TimeUnit label="Minutes" value="18" />
              <SemiColon />

              <TimeUnit label="Seconds" value="56" />
            </div>
            <div className="pagination flex items-center justify-center gap-2">
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
        <div className="main-sales flex flex-col items-center justify-center gap-16 pb-14">
          <div className="items-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <button className="bg-secondary3 text-white font-semibold text-custom px-12 py-2 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;