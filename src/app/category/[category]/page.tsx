'use client';

import Recommendation from '@/app/wishlist/_components/Recommendation';
import FilteredProductsCard from '@/components/FilteredProductCard';
import { products } from '@/utilis/products';
import { usePathname } from 'next/navigation';

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname?.split('/').pop()?.toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.category?.toLowerCase() === category,
  );

  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {filteredProducts.map((product) => (
            <FilteredProductsCard key={product.productName} product={product} />
          ))}
        </div>
      )}
      <Recommendation />
    </div>
  );
}
