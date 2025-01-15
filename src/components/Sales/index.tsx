'use client';

import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import TimerDisplay from '@/features/TimerDisplay';

import SProductCard from './SalesCard';
import { useState } from 'react';
import { salesProducts } from '@/utilis/products';

const SalesTimeUnit = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col" aria-label={`Time unit {label}`}>
    <span className="font-medium" aria-live="polite">
      {value}
    </span>
    <span className="font-semibold">{label}</span>
  </div>
);

const SemiColon = () => (
  <div className="flex flex-col gap-2">
    <span className="h-1 w-1 rounded-full bg-active"></span>
    <span className="h-1 w-1 rounded-full bg-active"></span>
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
    <section>
      <div className="flex flex-col gap-12 border-b border-custom">
        <div className="sales-heading">
          <div className="heading flex items-center justify-start">
            <span className="h-10 w-5 rounded-md bg-secondary3"></span>
            <h2 className="pl-5 font-medium text-orangeRed">Today&apos;s</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between pt-5">
            <h3 className="text-lg font-semibold">Flash Sales</h3>
            <div
              className="timer hidden items-center justify-center gap-4 md:flex"
              aria-live="polite"
            >
              <TimerDisplay TimeUnit={SalesTimeUnit} separator={SemiColon} />
            </div>
            <div className="pagination flex items-center justify-center gap-3">
              <button
                onClick={handlePrevSlide}
                disabled={viewAll || currentSlide === 0}
                className="rounded-full bg-secondary p-1 transition-all duration-300 ease-out hover:bg-gray-200 disabled:opacity-40"
                aria-label="Previous slide"
                tabIndex={0}
              >
                <IoArrowBack className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={
                  viewAll || currentSlide + cardPerSlide >= salesProducts.length
                }
                className="rounded-full bg-secondary p-1 transition-all duration-300 ease-out hover:bg-gray-200 disabled:opacity-40"
                aria-label="Next slide"
                tabIndex={0}
              >
                <IoArrowForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-16 pb-16">
          <div className="sales-items">
            <div className="items grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-6">
              {displayedProducts.map((product, index) => (
                <SProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setViewAll(!viewAll)}
            className="mx-auto rounded border-none bg-secondary3 px-6 py-2.5 font-semibold text-white outline-none transition-all duration-300 ease-in-out hover:bg-active"
          >
            {viewAll ? 'Show Less Products' : 'View All Products'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;
