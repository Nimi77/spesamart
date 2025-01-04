'use client';

import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Suspense, useEffect, useRef, useState } from 'react';
import useWishlistStore from '@/hooks/wishlistStore';
import { SearchSkeleton } from './Search';
import useCartStore from '@/hooks/cartStore';
import MobileMenu from './MobileMenu';
import { FiSearch } from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation';
import { navItems } from './MenuItems';
import UserMenu from './UserMenu';
import Link from 'next/link';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const wishlistCount = useWishlistStore((state) => state.items.length);
  const cartCount = useCartStore((state) => state.cartItems.length);

  const handleSearchToggle = () => {
    setSearchActive(true);
    // this focuses the input after rendering
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target as Node)
    ) {
      setSearchActive(false);
    }
  };

  useEffect(() => {
    if (searchActive) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [searchActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // updating URL dynamically without page reload
    const encodedQuery = encodeURIComponent(value.trim());
    if (encodedQuery) {
      router.replace(`/search?q=${encodedQuery}`);
    } else {
      router.replace('/search');
    }
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="mx-auto max-w-[90%] xl:max-w-6xl"
    >
      {/* mobile header */}
      <div className="flex w-full items-center justify-between mdl:hidden">
        {!searchActive ? (
          <>
            <MobileMenu />
            <div>
              <h1 className="text-xl font-bold">SpesaMart</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="flex items-center rounded bg-transparent px-1 py-1.5 transition-colors duration-300 ease-in hover:bg-secondary"
                onClick={handleSearchToggle}
                aria-label="Search"
              >
                <FiSearch size={21} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="relative flex items-center rounded bg-transparent p-1 transition-colors duration-300 ease-in hover:bg-secondary"
                onClick={() => router.push('/cart')}
                aria-label={`Cart (${cartCount} items)`}
              >
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-secondary3 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>
              <UserMenu />
            </div>
          </>
        ) : (
          <Suspense fallback={<SearchSkeleton />}>
            <div className="flex w-full">
              <input
                ref={searchInputRef}
                type="text"
                id="search"
                name="search"
                placeholder="Search for products"
                className="w-full rounded bg-neutral-100 p-2 text-black placeholder-[#7D8184] focus:outline-none"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button type="button" className="sr-only">
                Search
              </button>
            </div>
          </Suspense>
        )}
      </div>

      <div className="hidden items-center justify-between mdl:flex">
        {/* desktop header */}
        <div className="text-lg font-semibold">
          <h1>SpesaMart</h1>
        </div>

        {/* nav links */}
        <ul className="flex items-center justify-center space-x-12">
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.path}
                className={`relative cursor-pointer pb-2 font-medium transition-colors hover:text-gray-600 ${
                  pathname === nav.path ? 'text-gray-800' : ''
                }`}
              >
                {nav.title}
                {pathname === nav.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          {/* search */}
          <div className="w-60 rounded-md bg-secondary py-2 pl-5 pr-3">
            <Suspense fallback={<SearchSkeleton />}>
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  id="search"
                  name="search"
                  placeholder="What are you looking for?"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="w-full border-none bg-transparent text-[#7D8184] outline-none"
                />
                <button
                  type="button"
                  aria-label="search products"
                  className="absolute right-0 top-0.5"
                >
                  <FiSearch className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </Suspense>
          </div>

          <div className="flex items-center space-x-3">
            {/* wishlist */}
            <button
              type="button"
              className="relative flex items-center rounded bg-transparent p-1 transition-colors duration-300 ease-in hover:bg-secondary"
              onClick={() => router.push('/wishlist')}
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <HeartIcon className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-secondary3 text-xs text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* cart */}
            <button
              type="button"
              className="relative flex items-center rounded bg-transparent p-1 transition-colors duration-300 ease-in hover:bg-secondary"
              onClick={() => router.push('/cart')}
              aria-label={`Cart (${cartCount} items)`}
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-secondary3 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* user menu */}
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
