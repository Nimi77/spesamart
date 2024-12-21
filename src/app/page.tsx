import SalesCategory from '@/components/SalesCategory';
import BestSelling from '@/components/BestSelling';
import Category from '@/components/Category';
import Hero from '@/components/Hero';
import NewArrival from '@/components/New';
import Services from '@/components/Services';
import Sales from '@/components/Sales';
import Product from '@/components/Product';

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Category />
      <BestSelling />
      <SalesCategory />
      <Product />
      <NewArrival />
      <Services />
    </>
  );
}
