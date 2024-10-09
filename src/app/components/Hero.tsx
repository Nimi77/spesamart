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
      <div className="xl:max-w-6xl max-w-[90%] mx-auto flex items-center justify-center">
        <div className="pt-6 pr-6 border-r border-customColor">
          <ul className="block space-y-3 text-sm">
            {listItems.map((item, index) => (
              <li key={index} className="whitespace-nowrap">
                <div
                  onClick={() =>
                    item.subItems ? toggleDropdown(item.title) : undefined
                  }
                  className="flex items-center justify-between gap-6 cursor-pointer"
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
                  <ul className="ml-2 mt-2 space-y-2 text-sm text-gray-600">
                    {item.subItems.map((subItem, idx) => (
                      <li key={idx}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full pl-10">
          <div className="flex items-center justify-between bg-black text-white px-12 py-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-start justify-center gap-2">
                <IoLogoApple size={21} />
                <p className="text-sm">iPhone 14 Series</p>
              </div>
              <h2 className="text-5xl max-w-72 font-semibold leading">
                Up to 10% off Voucher
              </h2>
              <div className="flex items-center gap-1">
                <Link
                  href="/shop"
                  className="text-custom font-medium underline"
                >
                  Shop Now
                </Link>
                <IoArrowForward size={18} />
              </div>
            </div>
            <div className="hero-image">
              <Image
                src={"/hero-img.png"}
                alt="hero image"
                loading="lazy"
                width={380}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;