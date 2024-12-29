'use client';

import { bestProducts } from '@/utilis/products';
import { useState } from 'react';
import BSCard from './BSCard';

const BestSelling = () => {
  const [viewAll, setViewAll] = useState(false);
  const displayedProducts = viewAll ? bestProducts : bestProducts.slice(0, 4);

  return (
    <section aria-labelledby="best-selling-heading">
      <div className="flex flex-col gap-10 border-customColor">
        <div className="bs-heading">
          <div className="heading flex items-center justify-start">
            <span className="h-10 w-5 rounded-md bg-secondary3" />
            <h2 className="pl-5 font-semibold text-orange-red">This Month</h2>
          </div>
          <div className="flex items-center justify-between">
            <h3
              id="best-selling-heading"
              className="pt-5 text-base font-semibold"
            >
              Best Selling Products
            </h3>
            <button
              onClick={() => setViewAll(!viewAll)}
              aria-expanded={viewAll}
              aria-label={viewAll ? 'Show fewer products' : 'View all products'}
              className="rounded-md bg-secondary3 px-6 py-2 text-custom font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-active"
            >
              {viewAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        </div>
        {/* bestselling products */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-8">
          {displayedProducts.map((product) => (
            <BSCard key={product.productName} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
