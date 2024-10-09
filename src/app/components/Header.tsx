"use client";

import Link from "next/link";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [activeNav, setActiveNav] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    // Close the menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 left-0 border rounded text-black px-1 py-2 z-50"
      >
        Skip to Main Content
      </a>
      <div className="top-header bg-black shadow-md p-4">
        <div className="text-sm flex items-center justify-around max-w-4xl mx-auto">
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
            aria-label="Language selector"
            className="py-1 text-white bg-black border-none outline-none focus:ring-0 focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
      <div className="border-b border-customColor">
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="max-w-[90%] xl:max-w-6xl mx-auto py-4 flex justify-between items-center"
        >
          <div className="logo">
            <span className="text-xl font-semibold">Buyo</span>
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-xl"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden lg:flex space-x-12" role="menu">
            {["home", "contact", "about", "sign Up"].map((nav) => (
              <li key={nav}>
                <Link href={`#${nav}`}>
                  <span
                    onClick={() => handleNavClick(nav)}
                    role="menuitem"
                    tabIndex={0}
                    className="relative pb-2 text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors"
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

          {/* Search and Icons */}
          <div className="hidden lg:flex space-x-6">
            <div className="relative w-60 bg-[#F5F5F5] rounded-md pl-5 pr-3 py-2 flex items-center justify-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent text-[#7B7B7B] text-sm outline-none w-full"
              />
              <FiSearch className="w-6 h-6" />
            </div>
            <div className="flex space-x-4 items-center">
              <button className="wish-list" aria-label="Wishlist">
                <CiHeart className="w-7 h-7" />
              </button>
              <button className="cart" aria-label="Cart">
                <IoCartOutline className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul
              id="mobile-menu"
              className="lg:hidden absolute top-[80px] left-0 w-full bg-white flex flex-col space-y-6 items-center py-6"
              role="menu"
            >
              {["home", "contact", "about", "sign Up"].map((nav) => (
                <li key={nav} role="none">
                  <Link href={`#${nav}`}>
                    <span
                      onClick={() => handleNavClick(nav)}
                      className="font-medium cursor-pointer hover:text-gray-600 transition-colors"
                      role="menuitem"
                      tabIndex={0}
                    >
                      {nav.charAt(0).toUpperCase() + nav.slice(1)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;