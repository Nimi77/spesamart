"use client";

import Link from "next/link";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [activeNav, setActiveNav] = useState("home");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <header className="w-full">
      <div className="bg-black text-sm shadow-md p-4 flex items-center justify-center gap-16">
        <span className="text-white">
          Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%! {" "}
          <Link href="/shop" className="font-semibold underline">
            ShopNow
          </Link>
        </span>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="py-1 text-white bg-black border-none outline-none focus:ring-0 focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div className="border-b border-gray-300">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Exclusive</h1>
          </div>
          <ul className="flex space-x-8">
            {["home", "contact", "about", "sign Up"].map((nav) => (
              <li key={nav}>
                <Link href={`#${nav}`}>
                  <span
                    onClick={() => handleNavClick(nav)}
                    className={`relative pb-2 text-sm cursor-pointer hover:text-gray-800 transition-colors ${
                      activeNav === nav ? "font-semibold" : "font-medium"
                    } `}
                  >
                    {nav.charAt(0).toUpperCase() + nav.slice(1)}
                    {activeNav === nav && (
                      <span className="absolute left-0 right-0 h-1 bg-gray-800 rounded-full bottom-0"></span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-8">
            <div className="relative bg-gray-100 px-3 py-2 flex items-center justify-center gap-8">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent text-gray-100 text-sm outline-none w-full"
              />
              <FiSearch size={20} />
            </div>
            <div className="flex space-x-4">
              <button className="bg-none border-none">
                <CiHeart size={25} />
              </button>
              <button>
                <IoCartOutline size={25} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
