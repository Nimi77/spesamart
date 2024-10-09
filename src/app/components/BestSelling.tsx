"use client";

import { products } from "./Product/Products";
import ProductCard from "./Product/ProductCard";

const BestSelling = () => {
  return (
    <section className="best-selling my-24">
      <div className="max-w-[90%] xl:max-w-6xl mx-auto flex flex-col gap-10 border-customColor">
        <div className="bs-heading">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md"></span>
            <h3 className="text-orange-red text-sm font-semibold pl-5">
              This Month
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="pt-5 font-semibold">Best Selling Product</h4>
            <button className="bg-secondary3 text-white font-semibold text-custom px-4 py-2 rounded-md">
              View All
            </button>
          </div>
        </div>
        <div className="bs-products mb-14 flex flex-col items-center justify-center gap-16">
          <div className="items-listing grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;