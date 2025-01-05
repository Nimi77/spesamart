import SalesCategory from '@/components/SalesCategory';
import BestSelling from '@/components/BestSelling';
import Category from '@/components/Category';
import Hero from '@/components/Hero';
import NewArrival from '@/components/New';
import Services from '@/components/Services';
import Sales from '@/components/Sales';
import Product from '@/components/Product';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[90%] flex-col gap-20 xl:max-w-6xl">
      <Hero />
      <Sales />
      <Category />
      <BestSelling />
      <SalesCategory />
      <Product />
      <NewArrival />
      <Services />
    </div>
  );
}
