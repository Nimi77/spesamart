import BestSelling from "./components/BestSelling";
import SalesCategory from "./components/SalesCategory";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import Product from "./components/Product";
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