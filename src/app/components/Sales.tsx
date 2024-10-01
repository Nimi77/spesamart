"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import SalesProductCard from "./Product/SalesCard";
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

  return (
    <section className="mt-32">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col border-b border-customColor">
        <div className="sales-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary2 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold pl-5">
              Today&apos;s
            </h5>
          </div>
          <div className="flex items-center justify-between pt-6">
            <h3 className="text-xl font-bold">Flash Sales</h3>
            <div className="timing flex items-center justify-center gap-4">
              <div className="days flex flex-col">
                <span className="text-xs font-medium">Days</span>
                <span className="text-lg font-semibold">03</span>
              </div>
              <SemiColon />

              <div className="hours flex flex-col">
                <span className="text-xs font-medium">Hours</span>
                <span className="text-lg font-semibold">03</span>
              </div>
              <SemiColon />

              <div className="mins flex flex-col">
                <span className="text-xs font-medium">Minutes</span>
                <span className="text-lg font-semibold">16</span>
              </div>
              <SemiColon />

              <div className="secs flex flex-col">
                <span className="text-xs font-medium">Seconds</span>
                <span className="text-lg font-semibold">56</span>
              </div>
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
        <div className="main-sales mt-10 mb-14 flex flex-col items-center justify-center gap-16">
          <div className="items-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product, index) => (
              <SalesProductCard key={index} {...product} />
            ))}
          </div>
          <button className="bg-secondary2 text-white font-semibold text-custom px-12 py-2 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;
