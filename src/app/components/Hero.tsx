import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="py-6 pr-5 border-r border-customColor">
          <ul className="block space-y-3 text-sm">
            <li>Women&apos;s Fashion</li>
            <li>Men&apos;s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="pt-8 pl-10">
          <div className="flex items-center justify-between gap-9 bg-black text-white w-full px-12 py-6">
            <div className="flex flex-col items-start">
              <div className="flex items-start justify-center gap-6">
                <Image src="./apple-gray.png" alt="apple logo" />
                <p className="text-sm">iPhone 14 Series</p>
              </div>
              <h2 className="text-5xl max-w-72 font-semibold">
                Up to 10% off Voucher
              </h2>
              <div className="flex items-center gap-4">
                <Link href="/shop" className="font-medium underline">
                  Shop Now
                </Link>
                <IoArrowForward />
              </div>
            </div>
            <div>
              <Image
                src="./hero_endframe-large.png"
                alt="hero-image"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
