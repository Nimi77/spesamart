"use client";

import { bestProducts } from "@/app/components/BestSelling/BSProducts";
import { salesProducts } from "@/app/components/Sales/SalesProducts";
import { products } from "@/app/components/Product/Products";
import { shuffleProducts } from "@/utilis/shuffleProducts";
import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";

// all products into one array
const allProducts = [...products, ...bestProducts, ...salesProducts];

const Recommendation: React.FC = () => {
  const [shuffledProducts, setShuffledProducts] = useState(() =>
    shuffleProducts(allProducts)
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
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <div className="heading flex items-center justify-start">
          <span className="w-5 h-10 bg-secondary3 rounded-md" />
          <h3 className="pl-5">Just For You</h3>
        </div>
        <button
          type="button"
          onClick={handleAllRecommendation}
          className="bg-transparent font-semibold text-custom px-6 py-2 rounded-md border hover:bg-secondary3 hover:text-white focus:outline-none transition-colors ease-in-out duration-300"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>
      <div className="product-list flex gap-6 flex-wrap">
        {shuffledProducts.slice(0, showAll ? 8 : 4).map((product, index) => (
          <RecommendationCard
            key={`${product.productName}-${index}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
