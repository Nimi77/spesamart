'use client';

import { bestProducts } from './BSProducts';
import { useState } from 'react';
import BSCard from './BSCard';

const BestSelling = () => {
  const [viewAll, setViewAll] = useState(false);

  const firstProductSet = bestProducts.slice(0, 4);
  const secondProductSet = bestProducts.slice(4);

  return (
    <section className="my-24" aria-labelledby="best-selling-heading">
      <div className="mx-auto flex max-w-[90%] flex-col gap-10 border-customColor xl:max-w-6xl">
        <div className="bs-heading">
          <div className="heading flex items-center justify-start">
            <span className="h-10 w-5 rounded-md bg-secondary3" />
            <h3 className="pl-5 text-sm font-semibold text-orange-red">
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
              aria-label={viewAll ? 'Show fewer products' : 'View all products'}
              className="rounded-md bg-secondary3 px-6 py-2 text-custom font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-active focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {viewAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        </div>
        <div
          className="bs-products flex flex-col items-center justify-center pb-14"
          role="region"
          aria-live="polite"
        >
          {/* first set of products */}
          <div className="items-list grid grid-cols-2 justify-items-start gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {firstProductSet.map((product) => (
              <BSCard key={product.productName} {...product} />
            ))}
          </div>
          {/* second set of products */}
          {viewAll && (
            <div className="items-list mt-10 grid grid-cols-1 justify-items-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {secondProductSet.map((product) => (
                <BSCard key={product.productName} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
