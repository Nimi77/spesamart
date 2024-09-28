"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ProductCard from "./Product/ProductCard";
import { useState } from "react";

const products = [
  {
    imageSrc: "./gamepad.png",
    altText: "Game Pad",
    discount: "-40%",
    productName: "HAVIT HV-G92 Gamepad",
    salesPrice: "$120",
    originalPrice: "$160",
    rating: 5,
    reviewsCount: 88,
  },
  {
    imageSrc: "./wired-keyboard.png",
    altText: "Keyboard",
    discount: "-35%",
    productName: "AK-900 Wired KeyBoard",
    salesPrice: "$960",
    originalPrice: "$1160",
    rating: 4.5,
    reviewsCount: 75,
  },
  {
    imageSrc: "./gaming-monitor.png",
    altText: "Monitor",
    discount: "-30%",
    productName: "IPS LCD Gaming Monitor",
    salesPrice: "$370",
    originalPrice: "$400",
    rating: 5,
    reviewsCount: 99,
  },
  {
    imageSrc: "./luxury-chair.png",
    altText: "Chair",
    discount: "-25%",
    productName: "IPS LCD Gaming Monitor",
    salesPrice: "$375",
    originalPrice: "$400",
    rating: 5,
    reviewsCount: 99,
  },
  {
    imageSrc: "./wired-keyboard.png",
    altText: "Keyboard",
    discount: "-35%",
    productName: "AK-900 Wired KeyBoard",
    salesPrice: "$960",
    originalPrice: "$1160",
    rating: 4.5,
    reviewsCount: 75,
  },
  {
    imageSrc: "./gamepad.png",
    altText: "Game Pad",
    discount: "-40%",
    productName: "HAVIT HV-G92 Gamepad",
    salesPrice: "$120",
    originalPrice: "$160",
    rating: 5,
    reviewsCount: 88,
  },
  {
    imageSrc: "./gaming-monitor.png",
    altText: "Monitor",
    discount: "-30%",
    productName: "IPS LCD Gaming Monitor",
    salesPrice: "$370",
    originalPrice: "$400",
    rating: 5,
    reviewsCount: 99,
  },
];

const SemiColon = () => (
  <div className="flex flex-col gap-2">
    <span className="bg-active w-1 h-1"></span>
    <span className="bg-active w-1 h-1"></span>
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
      <div className="max-w-6xl mx-auto flex flex-col border-b border-customColor">
        <div className="sales-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary2 rounded-md"></span>
            <h5 className="text-orange-red text-sm font-semibold pl-5">
              Today&apos;s
            </h5>
          </div>
          <div className="flex items-center justify-between pt-6">
            <h3 className="text-xl font-bold">Flash Sales</h3>
            <div className="timing flex items-center justify-center gap-5">
              <div className="days flex flex-col gap-1">
                <span className="text-xs font-medium">Days</span>
                <span className="text-lg font-semibold">03</span>
              </div>
              <SemiColon />

              <div className="hours flex flex-col gap-1">
                <span className="text-xs font-medium">Hours</span>
                <span className="text-lg font-semibold">03</span>
              </div>
              <SemiColon />

              <div className="mins flex flex-col gap-1">
                <span className="text-xs font-medium">Minutes</span>
                <span className="text-lg font-semibold">16</span>
              </div>
              <SemiColon />

              <div className="secs flex flex-col gap-1">
                <span className="text-xs font-medium">Seconds</span>
                <span className="text-lg font-semibold">56</span>
              </div>
              <SemiColon />
            </div>
            <div className="arrow flex items-center justify-center gap-2">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="w-12 h-12 bg-secondary rounded-full disabled:opacity-50"
              >
                <IoArrowBack className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={currentSlide + cardPerSlide >= products.length}
                className="w-12 h-12 bg-secondary rounded-full disabled:opacity-50"
              >
                <IoArrowForward className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="main-sales mt-8 mb-14 flex flex-col items-center justify-center gap-8">
          <div className="items-listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <button className="bg-secondary2 px-12 rounded-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sales;
