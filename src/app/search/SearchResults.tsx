'use client';

import { products, bestProducts, salesProducts } from '@/utilis/products';
import { useSearchParams } from 'next/navigation';
import ProductSearchCard from './ProductSearchCard';
import { useEffect, useState } from 'react';

const allProducts = [...products, ...bestProducts, ...salesProducts];

export default function SearchResults() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query && query.trim()) {
      setFilteredProducts(() =>
        allProducts.filter((product) =>
          product.productName.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } else {
      setFilteredProducts(allProducts);
    }
  }, [query]);

  return (
    <div className="mx-auto max-w-[90%] py-8 xl:max-w-6xl">
      <h2 className="mb-6 text-lg font-medium">
        {query ? `Search Results for: ${query}` : 'Start typing to search...'}
      </h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-6">
          {filteredProducts.map((product) => (
            <ProductSearchCard key={product.productName} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
