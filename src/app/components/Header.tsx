"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import useWishlistStore from "@/stores/wishlistStore";
import useCartStore from "@/stores/cartStore";
import LogoutIcon from "@/assets/logout.svg";
import MallBagIcon from "@/assets/mallbag.svg";
import CancelIcon from "@/assets/cancel.svg";
import StarIcon from "@/assets/star.svg";
import { useRouter } from "next/navigation";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [activeNav, setActiveNav] = useState("Home");
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const wishlistCount = useWishlistStore((state) => state.items.length);
  const cartCount = useCartStore((state) => state.cartCount);

  // dropdown closed on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown") && openUserDropdown) {
        setOpenUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openUserDropdown]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
    setIsMobileMenuOpen(false);
  };

  const NavItems = [
    { name: "Home", route: "/" },
    { name: "Contact", route: "/contact" },
    { name: "About", route: "/about" },
    { name: "Sign Up", route: "/signup" },
  ];

  const AccountDropdownItem = [
    {
      icon: <LuUser size={18} color="white" aria-hidden="true" />,
      name: "Manage My Account",
      route: "",
    },
    { icon: <MallBagIcon />, name: "My Order", route: "" },
    { icon: <CancelIcon />, name: "My Cancellations", route: "" },
    { icon: <StarIcon />, name: "My Reviews", route: "" },
    { icon: <LogoutIcon />, name: "Logout", route: "" },
  ];
  return (
    <header className="w-full">
      <a
        href="#main"
        tabIndex={0}
        className="sr-only focus:not-sr-only outline-offset-1 rounded text-black p-1 z-50"
      >
        Skip to Main Content
      </a>
      <div className="top-header bg-black shadow-md p-4">
        <div className="text-sm flex items-center justify-around max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white text-center sm:text-left">
            <span>
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
            className="py-1 hidden text-white bg-black border-none outline-none focus:ring-0 focus:outline-none sm:block"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
      <div className="border-b border-customColor">
        <nav
          aria-label="Main Navigation"
          className="max-w-[90%] xl:max-w-6xl mx-auto py-4 flex justify-between items-center"
        >
          <div className="logo">
            <span className="text-xl font-semibold">Buyo</span>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden lg:flex space-x-12">
            {NavItems.map((nav) => (
              <li key={nav.route}>
                <Link
                  href={nav.route}
                  onClick={() => handleNavClick(nav.name)}
                  onKeyUp={(e) => e.key === "Enter" && handleNavClick(nav.name)}
                >
                  <span className="relative pb-2 text-sm font-medium cursor-pointer hover:text-gray-600 transition-colors">
                    {nav.name}
                    {activeNav === nav.name && (
                      <span className="absolute left-0 right-0 h-[2px] bg-black rounded-full bottom-0" />
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Search and Icons */}
          <div className="hidden lg:flex space-x-6 h-[38px]">
            <div className="relative w-60 bg-secondary rounded-md pl-5 pr-3 flex items-center justify-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent text-[#7D8184] text-sm border-none outline-none w-full"
              />
              <FiSearch className="w-5 h-5" />
            </div>
            <div className="flex space-x-4 justify-center">
              <button
                type="button"
                className="wish relative flex items-center"
                onClick={() => router.push("/wishlist")}
                aria-label="Wishlist"
              >
                <BsHeart size={19} aria-hidden="true" />
                {wishlistCount > 0 && (
                  <span className="text-xs text-white bg-secondary3 w-4 h-4 flex items-center justify-center absolute top-0 -right-2 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="cart relative flex items-center"
                aria-label="Cart"
              >
                <IoCartOutline size={24} aria-hidden="true" />
                {cartCount > 0 && (
                  <div className="bg-secondary3 w-4 h-4 flex items-center justify-center absolute top-0 -right-2 rounded-full">
                    <span className="text-xs text-white">{cartCount}</span>
                  </div>
                )}
              </button>
              <div className="dropdown relative">
                <button
                  type="button"
                  onClick={() => setOpenUserDropdown(!openUserDropdown)}
                  className="user-profile relative flex items-center justify-center bg-secondary3 w-6 h-6 rounded-full m-auto"
                  aria-label="User dropdown"
                >
                  <LuUser size={18} color="white" aria-hidden="true" />
                </button>
                {openUserDropdown && (
                  <div className="bg-[rgba(0,0,0,0.04)] absolute left-0 top-2 backdrop-blur-md p-4 rounded-md z-50">
                    <ul className="flex flex-col items-start justify-center space-y-4">
                      {AccountDropdownItem.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.route}
                            className="flex items-start justify-center gap-4 text-white"
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-xl"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul
              id="mobile-menu"
              className="lg:hidden absolute top-28 left-0 w-full bg-white flex flex-col space-y-6 items-center py-6 z-50"
            >
              {NavItems.map((nav) => (
                <li key={nav.route}>
                  <Link
                    href={nav.route}
                    onClick={() => handleNavClick(nav.name)}
                  >
                    <span className="font-medium cursor-pointer hover:text-gray-600 transition-colors">
                      {nav.name}
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
// Enforce to have the onClick mouse event with the onKeyUp, the onKeyDown, or the onKeyPress keyboard event
// Avoid using he index of an arrray as key property in an element
// JSX element without children should be marked as self-cloing. In jsx it is valid for any element to be self closing
