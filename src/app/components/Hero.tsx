"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IoArrowForward,
  IoChevronDown,
  IoChevronForward,
  IoLogoApple,
} from "react-icons/io5";
import { useState } from "react";

const listItems = [
  { title: "Women's Fashion", subItems: ["Clothes", "Accessories", "Shoes"] },
  { title: "Men's Fashion", subItems: ["Clothes", "Accessories", "Shoes"] },
  { title: "Electronics" },
  { title: "Home & Lifestyle" },
  { title: "Medicine" },
  { title: "Sports & Outdoor" },
  { title: "Baby & Toys" },
  { title: "Groceries & Pets" },
  { title: "Health & Beauty" },
];

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    if (activeDropdown === category) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(category);
    }
  };

  return (
    <section id="main" className="hero">
      <div className="xl:max-w-6xl max-w-[90%] mx-auto flex lg:flex-row items-center justify-center">
        <div className="pt-6 pr-6 border-r border-customColor hidden lg:block">
          <ul className="block space-y-3 text-sm">
            {listItems.map((item, index) => (
              <li key={index} className="whitespace-nowrap">
                <div
                  onClick={() =>
                    item.subItems ? toggleDropdown(item.title) : undefined
                  }
                  className="flex items-center justify-between gap-6 cursor-pointer"
                  role="button"
                  aria-expanded={activeDropdown === item.title}
                  aria-controls={`${item.title}-submenu`}
                >
                  <span>{item.title}</span>
                  {item.subItems && (
                    <span>
                      {activeDropdown === item.title ? (
                        <IoChevronDown />
                      ) : (
                        <IoChevronForward />
                      )}
                    </span>
                  )}
                </div>
                {item.subItems && activeDropdown === item.title && (
                  <ul
                    id={`${item.title}-submenu`}
                    className="ml-2 mt-2 space-y-2 text-sm text-gray-600"
                  >
                    {item.subItems.map((subItem, idx) => (
                      <li key={idx}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:pl-10 mt-10 lg:mt-0">
          <div className="flex items-center justify-between bg-black text-white px-6 md:px-12 py-7 lg:py-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-start justify-center gap-2">
                <IoLogoApple size={22} />
                <p className="text-custom">iPhone 14 Series</p>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl max-w-72 font-semibold leading">
                Up to 10% off Voucher
              </h2>
              <div className="flex items-center gap-1">
                <Link
                  href="/shop"
                  className="text-custom font-medium underline focus:outline focus:outline-2 focus:outline-orange-400"
                >
                  Shop Now
                </Link>
                <IoArrowForward size={18} />
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/hero-img.png"
                alt="iPhone 14 Series"
                loading="lazy"
                width={360}
                height={280}
                className="lg:w-[360px] w-[300px] object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;