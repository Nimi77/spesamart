"use client";

import { product } from "./BSProducts";
import { useState } from "react";
import BSCard from "./BSCard";

const BestSelling = () => {
  const [viewAll, setViewAll] = useState(false);

  const firstProductSet = product.slice(0, 4);
  const secondProductSet = product.slice(4);

  return (
    <section
      className="best-selling my-24"
      aria-labelledby="best-selling-heading"
    >
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10 border-customColor">
        <div className="bs-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold pl-5">
              This Month
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4
              id="best-selling-heading"
              className="pt-5 text-base font-semibold"
            >
              Best Selling Products
            </h4>
            <button
              onClick={() => setViewAll(!viewAll)}
              aria-expanded={viewAll}
              aria-label={viewAll ? "Show fewer products" : "View all products"}
              className="bg-secondary3 text-white font-semibold text-custom px-4 py-2 rounded-md hover:bg-active focus:outline-none transition-colors ease-in-out duration-500 
              focus:ring-2 focus:ring-offset-2"
            >
              {viewAll ? "Show Less" : "View All"}
            </button>
          </div>
        </div>
        <div
          className="bs-products pb-14 flex flex-col items-center justify-center gap-16"
          role="region"
          aria-live="polite"
        >
          {/* First set */}
          <div className="items-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {firstProductSet.map((product, index) => (
              <BSCard key={index} {...product} />
            ))}
          </div>
          {/* Second set */}
          {viewAll && (
            <div className="items-list mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {secondProductSet.map((product, index) => (
                <BSCard key={index} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
