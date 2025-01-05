'use client';

import FilteredProductsCard from '@/components/FilteredProductCard';
import { products } from '@/utilis/products';
import { useRouter } from 'next/router';
import Recommendation from '../wishlist/_components/Recommendation';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(category?.toString().toLowerCase() || ''),
  );

  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <>
        {filteredProducts.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_2fr))] gap-6">
            {filteredProducts.map((product) => (
              <FilteredProductsCard
                key={product.productName}
                product={product}
              />
            ))}
          </div>
        )}
      </>
      <Recommendation />
    </div>
  );
}
