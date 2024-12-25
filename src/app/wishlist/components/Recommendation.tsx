'use client';

import { bestProducts } from '@/components/BestSelling/BSProducts';
import { salesProducts } from '@/components/Sales/SalesProducts';
import { products } from '@/components/Product/Products';
import { shuffleProducts } from '@/utilis/shuffleProducts';
import RecommendationCard from './RecommendationCard';
import { useEffect, useState } from 'react';

// all products into one array
const allProducts = [...products, ...bestProducts, ...salesProducts];

const Recommendation: React.FC = () => {
  const [shuffledProducts, setShuffledProducts] = useState(() =>
    shuffleProducts(allProducts),
  );
  const [showAll, setShowAll] = useState(false);

  // shuffling products every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledProducts(shuffleProducts(allProducts));
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  // toggle display of products
  const handleAllRecommendation = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div
      aria-labelledby="recommendation-heading"
      className="flex flex-col gap-12"
    >
      <div className="flex items-center justify-between">
        <div className="heading flex items-center justify-start">
          <span className="h-10 w-5 rounded-md bg-secondary3" />
          <h3 id="recommendation-heading" className="pl-5 font-medium">
            Just For You
          </h3>
        </div>
        <button
          type="button"
          onClick={handleAllRecommendation}
          className="rounded-md border bg-transparent px-6 py-2 text-custom font-medium transition-colors duration-300 ease-in-out hover:bg-secondary3 hover:text-white focus:outline-none focus:ring-2 active:shadow-inner"
        >
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>
      <div className="product-list grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-6">
        {shuffledProducts.slice(0, showAll ? 8 : 4).map((product, index) => (
          <div key={`${product.productName}-${index}`}>
            <RecommendationCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
