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
      <div className="top-header bg-black shadow-md p-4">
        <div className="text-sm flex items-center justify-around max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-white">
              Summer Sales For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link href="/shop" className="font-semibold underline">
              ShopNow
            </Link>
          </div>
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
      </div>
      <div className="border-b border-customColor">
        <nav className="max-w-6xl mx-auto py-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Buyo</h1>
          </div>
          <ul className="flex space-x-12">
            {["home", "contact", "about", "sign Up"].map((nav) => (
              <li key={nav}>
                <Link href={`#${nav}`}>
                  <span
                    onClick={() => handleNavClick(nav)}
                    className="relative pb-2 text-sm cursor-pointer hover:text-gray-800 transition-colors"
                  >
                    {nav.charAt(0).toUpperCase() + nav.slice(1)}
                    {activeNav === nav && (
                      <span className="absolute left-0 right-0 h-[2px] bg-black rounded-full bottom-0"></span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <div className="relative bg-[#F5F5F5] rounded-md pl-5 pr-3 py-2 flex items-center justify-center gap-8">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent text-[#7B7B7B] text-sm outline-none w-full"
              />
              <FiSearch className="w-6 h-6" />
            </div>
            <div className="flex space-x-4 items-center">
              <button className="wish-list">
                <CiHeart className="w-8 h-8" />
              </button>
              <button className="cart">
                <IoCartOutline className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
