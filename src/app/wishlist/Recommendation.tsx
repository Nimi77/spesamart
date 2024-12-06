"use client";

import RecommendationCard from "../components/RecommendationCard";
import { salesProducts } from "../components/Sales/SalesProducts";
import { bestProducts } from "../components/BestSelling/BSProducts";
import { shuffleProducts } from "@/utilis/shuffleProducts";
import { products } from "../components/Product/Products";
import { useEffect, useState } from "react";

const allProducts = [...products, ...bestProducts, ...salesProducts];

const Recommendation: React.FC = () => {
  const [shuffledProducts, setShuffledProduct] = useState(() =>
    shuffleProducts(allProducts)
  );
  const [showAll, setShowAll] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledProduct(shuffleProducts(allProducts));
    }, 60000);

    return () => clearInterval(interval);
  });

  const handleAllRecommendation = () => {
    setShowAll(8);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="heading flex items-center justify-start">
          <span className="w-5 h-10 bg-secondary3 rounded-md" />
          <h3 className="text-sm font-semibold pl-5">Just For You</h3>
        </div>
        <button
          onClick={handleAllRecommendation}
          className="bg-transparent font-semibold text-custom px-6 py-2 rounded-md border hover:bg-active focus:outline-none transition-colors ease-in-out duration-500 
              focus:ring-2 focus:ring-offset-2"
        >
          See All
        </button>
      </div>
      <div className="product-list flex items-start justify-center gap-6 flex-wrap">
        {shuffledProducts.slice(0, showAll).map((product) => (
          <RecommendationCard key={product.productName} product={product} />
        ))}
      </div>
    </>
  );
};

export default Recommendation;
