"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IoArrowForward,
  IoChevronDown,
  IoChevronForward,
  IoLogoApple,
} from "react-icons/io5";
import { useEffect, useState } from "react";

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

const heroImages = [
  { src: "/hero-img.png", alt: "Image 1" },
  { src: "/hero-img.png", alt: "Image 2" },
  { src: "/hero-img.png", alt: "Image 3" },
  { src: "/hero-img.png", alt: "Image 4" },
  { src: "/hero-img.png", alt: "Image 5" },
];

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<number>(2);
  const totalImages = heroImages.length;

  const toggleDropdown = (category: string) => {
    if (activeDropdown === category) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(category);
    }
  };

  const changeImage = (index: number) => {
    setActiveImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section id="main" className="hero">
      <div className="xl:max-w-6xl max-w-[90%] mx-auto flex lg:flex-row items-start justify-center">
        <div className="pt-6 pr-6 border-r border-customColor hidden lg:block">
          <ul className="block space-y-3 text-sm">
            {listItems.map((item) => (
              <li key={item.title} className="whitespace-nowrap">
                <div
                  onClick={() =>
                    item.subItems ? toggleDropdown(item.title) : undefined
                  }
                  onKeyUp={(e) =>
                    e.key === "Enter" &&
                    item.subItems &&
                    toggleDropdown(item.title)
                  }
                  onKeyDown={(e) =>
                    e.key === " " && item.subItems && toggleDropdown(item.title)
                  }
                  className="flex items-center justify-between gap-6 cursor-pointer"
                  role="button"
                  tabIndex={0}
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
                    {item.subItems.map((subItem) => (
                      <li key={`${item.title}-${subItem}`}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mt-10 lg:max-h-10 lg:pl-10">
          <div className="flex items-center justify-between relative bg-black text-white px-6 md:px-12 py-7 lg:py-2">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-start justify-center gap-2">
                <IoLogoApple size={22} aria-hidden="true" />
                <p className="text-custom">iPhone 14 Series</p>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl max-w-72 font-semibold leading">
                Up to 10% off Voucher
              </h2>
              <div className="flex items-center gap-1 relative">
                <Link
                  href="/shop"
                  className="text-custom font-medium focus:outline focus:outline-2 focus:outline-orange-400"
                >
                  Shop Now
                </Link>
                <span className="absolute w-3/4 border rounded-md bg-white-gray left-0 top-6" />
                <IoArrowForward size={18} />
              </div>
            </div>
            <div className="hero-image">
              <Image
                src={heroImages[activeImage].src}
                alt={heroImages[activeImage].alt}
                priority={true}
                width={360}
                height={280}
                className="lg:w-[360px] w-[300px] object-cover"
              />
            </div>
            <div className="ellipse absolute left-0 right-0 bottom-4 flex items-center justify-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  type="button"
                  key="index"
                  onClick={() => changeImage(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === activeImage
                      ? "bg-red-600 border-2 border-white"
                      : "bg-primary opacity-50"
                  }`}
                  aria-label={`Select ${image.alt}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
