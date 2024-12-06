"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import TimerDisplay from "@/features/TimerDisplay";
import { salesProducts } from "./SalesProducts";
import SProductCard from "./SalesCard";
import { useState } from "react";

const SalesTimeUnit = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col" aria-label={`Time unit {label}`}>
    <span className="text-sm font-medium" aria-live="polite">
      {value}
    </span>
    <span className="font-semibold">{label}</span>
  </div>
);

const SemiColon = () => (
  <div className="flex flex-col gap-2">
    <span className="bg-active w-1 h-1 rounded-full"></span>
    <span className="bg-active w-1 h-1 rounded-full"></span>
  </div>
);

const Sales = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const cardPerSlide = 4;

  const displayedProducts = viewAll
    ? salesProducts
    : salesProducts.slice(currentSlide, currentSlide + cardPerSlide);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide + cardPerSlide < salesProducts.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="my-24" aria-labelledby="flash-sales-heading">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-12 border-b border-customColor">
        <div className="sales-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold pl-5">
              Today&apos;s
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-between pt-6">
            <h4 id="flash-sales-heading" className="font-semibold">
              Flash Sales
            </h4>
            <div
              className="timer hidden md:flex items-center justify-center gap-4"
              aria-live="polite"
            >
              <TimerDisplay TimeUnit={SalesTimeUnit} separator={SemiColon} />
            </div>
            <div className="pagination flex items-center justify-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={viewAll || currentSlide === 0}
                className="bg-secondary p-1 rounded-full disabled:opacity-40  hover:bg-gray-200 transition-all duration-300 ease-out"
                aria-label="Previous slide"
                tabIndex={0}
              >
                <IoArrowBack className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={
                  viewAll || currentSlide + cardPerSlide >= salesProducts.length
                }
                className="bg-secondary p-1 rounded-full disabled:opacity-40  hover:bg-gray-200 transition-all duration-300 ease-out"
                aria-label="Next slide"
                tabIndex={0}
              >
                <IoArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="main-sales flex flex-col items-center justify-center gap-16 pb-16">
          <div className="sales-items">
            {displayedProducts.length > 0 && (
              <div className="items flex justify-start flex-wrap gap-8">
                {displayedProducts.map((product, index) => (
                  <SProductCard key={index} {...product} />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setViewAll(!viewAll)}
            tabIndex={0}
            aria-label="View all products"
            className="bg-secondary3 text-white font-semibold text-custom px-6 py-2.5 rounded-md hover:bg-active focus:bg-active transition-all ease-in-out duration-500 outline-none border-none"
          >
            {viewAll ? "Show Less Products" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;
