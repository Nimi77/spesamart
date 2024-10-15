"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { SProducts } from "./SalesProducts";
import { useTimer } from "react-timer-hook";
import { useState } from "react";
import SProductCard from "./SalesCard";

const TimeUnit = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col" aria-label={`Time unit ${label}`}>
    <span className="text-sm font-medium" aria-live="polite">
      {value}
    </span>
    <span className="font-semibold">{label}</span>
  </div>
);

const SemiColon = () => (
  <div className="flex flex-col gap-2" role="presentation">
    <span className="bg-active w-1 h-1 rounded-full"></span>
    <span className="bg-active w-1 h-1 rounded-full"></span>
  </div>
);

const Sales = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const cardPerSlide = 4;

  const displayedProducts = viewAll
    ? SProducts
    : SProducts.slice(currentSlide, currentSlide + cardPerSlide);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleNextSlide = () => {
    if (currentSlide + cardPerSlide < SProducts.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Timer setup
  const expiryTimestamp = new Date();
  // 7 days countdown
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 604800);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log("restarting..."),
  });

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
              className="timer flex items-center justify-center gap-4"
              aria-live="polite"
            >
              <TimeUnit label="Days" value={String(days).padStart(2, "0")} />
              <SemiColon />
              <TimeUnit label="Hours" value={String(hours).padStart(2, "0")} />
              <SemiColon />
              <TimeUnit
                label="Minutes"
                value={String(minutes).padStart(2, "0")}
              />
              <SemiColon />
              <TimeUnit
                label="Seconds"
                value={String(seconds).padStart(2, "0")}
              />
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
                  viewAll || currentSlide + cardPerSlide >= SProducts.length
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
              <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            className="bg-secondary3 text-white font-semibold text-custom px-8 py-2 rounded-md hover:bg-active focus:bg-active transition-all ease-in-out duration-500 outline-none border-none"
          >
            {viewAll ? "Show Less Products" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;
