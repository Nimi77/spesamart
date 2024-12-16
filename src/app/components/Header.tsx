"use client";

import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useWishlistStore from "@/stores/wishlistStore";
import useCartStore from "@/stores/cartStore";
import LogoutIcon from "@/assets/logout.svg";
import MallBagIcon from "@/assets/mallbag.svg";
import CancelIcon from "@/assets/cancel.svg";
import StarIcon from "@/assets/star.svg";
import Link from "next/link";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [activeNav, setActiveNav] = useState("Home");
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const wishlistCount = useWishlistStore((state) => state.items.length);
  const cartCount = useCartStore((state) => state.cartItems.length);

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
          <fieldset>
            <legend className="sr-only">Select your language</legend>
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
          </fieldset>
        </div>
      </div>
      <div className="border-b border-customColor">
        <nav
          aria-label="Main navigation"
          className="max-w-[90%] xl:max-w-6xl mx-auto py-4 flex justify-between items-center"
        >
          <div className="logo" role="heading" aria-level={1}>
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
          <div className="hidden md:flex space-x-6 h-[38px]">
            <div className="relative w-60 bg-secondary rounded-md pl-5 pr-3 flex items-center justify-center">
              <form role="search" aria-label="Site search">
                <label htmlFor="search" className="sr-only">
                  Search the site
                </label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="What are you looking for?"
                  className="bg-transparent text-[#7D8184] text-sm border-none outline-none w-full"
                />
                <FiSearch className="w-5 h-5" aria-hidden="true" />
              </form>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                className="wish relative flex items-center p-1 bg-transparent rounded hover:bg-secondary transition-colors duration-300 ease-in"
                onClick={() => router.push("/wishlist")}
                aria-label="Wishlist"
              >
                <BsHeart size={19} aria-hidden="true" />
                {wishlistCount > 0 && (
                  <span className="text-xs text-white bg-secondary3 w-4 h-4 absolute -top-1 -right-1 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="cart relative flex items-center p-1 bg-transparent rounded hover:bg-secondary transition-colors duration-300 ease-in"
                onClick={() => router.push("/cart")}
                aria-label="Cart"
              >
                <IoCartOutline size={24} aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="text-xs text-white bg-secondary3 w-4 h-4 absolute top-0 -right-1 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <div className="dropdown relative p-1">
                <button
                  type="button"
                  onClick={() => setOpenUserDropdown(!openUserDropdown)}
                  className="user-profile flex items-center justify-center bg-secondary3 w-6 h-6 rounded-full"
                  aria-label="User dropdown"
                >
                  <LuUser size={18} color="white" aria-hidden="true" />
                </button>
                {openUserDropdown && (
                  <div className="bg-[rgba(0,0,0,0.5)] absolute right-1 top-10 backdrop-blur-md p-4 w-max rounded-md z-50">
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
          <div className="md:hidden">
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
              className="md:hidden absolute top-28 left-0 w-full bg-white flex flex-col space-y-6 items-center py-6 z-50"
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
