import BestSelling from "./components/BestSelling/BestSelling";
import SalesCategory from "./components/SalesCategory";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Sales from "./components/Sales/Sales";
import Product from "./components/Product/Product";
import NewArrival from "./components/New";
import Services from "./components/Services";

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