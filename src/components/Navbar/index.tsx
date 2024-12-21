import { Suspense, useEffect, useRef, useState } from 'react';
import { accountMenuItems, navItems } from './MenuItems';
import useWishlistStore from '@/stores/wishlistStore';
import Search, { SearchSkeleton } from './Search';
import { IoCartOutline } from 'react-icons/io5';
import useCartStore from '@/stores/cartStore';
import MobileMenu from './MobileMenu';
import { BsHeart } from 'react-icons/bs';
import { LuUser } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const wishlistCount = useWishlistStore((state) => state.items.length);
  const cartCount = useCartStore((state) => state.cartItems.length);

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };

  const handleSearchToggle = () => {
    setSearchActive(true);
    setTimeout(() => searchInputRef.current?.focus(), 0); // Focus the input after rendering
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

  return (
    <nav
      aria-label="Primary navigation"
      className="mx-auto flex max-w-[90%] items-center justify-between xl:max-w-6xl"
    >
      {/* Mobile Header */}
      <div className="flex w-full items-center justify-between md:hidden">
        {!searchActive ? (
          <>
            <Suspense fallback={null}>
              <MobileMenu />
            </Suspense>
            <Link href="/" prefetch={true} className="text-lg font-semibold">
              Buyo
            </Link>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-1"
                onClick={handleSearchToggle}
                aria-label="Search"
              >
                <FiSearch size={20} />
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => router.push('/cart')}
                aria-label="Cart"
              >
                <IoCartOutline size={20} />
              </button>
              <button
                type="button"
                className="p-1"
                onClick={() => router.push('/profile')}
                aria-label="Profile"
              >
                <LuUser size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex w-full">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for products"
              className="w-full rounded-md bg-gray-100 px-2 py-4 text-black focus:outline-none"
              onChange={(e) => {
                const query = e.target.value;
                // Add your filtering logic here
                console.log('Filter products with:', query);
              }}
            />
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <Link
        href="/"
        prefetch={true}
        className="hidden items-center justify-center md:flex"
      >
        <div className="text-lg font-semibold">Buyo</div>
      </Link>

      <ul className="hidden space-x-12 md:flex">
        {/* Navigation Links */}
        {navItems.map((nav) => (
          <li key={nav.title}>
            <Link
              href={nav.path}
              onClick={() => handleNavClick(nav.title)}
              className={`relative cursor-pointer pb-2 text-sm font-medium transition-colors hover:text-gray-600 ${
                activeNav === nav.title ? 'text-black' : ''
              }`}
            >
              {nav.title}
              {activeNav === nav.title && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="h-[2.38rem] w-60 rounded-md bg-secondary pl-5 pr-3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          className="relative flex items-center rounded bg-transparent p-1 transition-colors duration-300 ease-in hover:bg-secondary"
          onClick={() => router.push('/wishlist')}
          aria-label={`Wishlist (${wishlistCount} items)`}
        >
          <BsHeart size={19} aria-hidden="true" />
          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-secondary3 text-xs text-white">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button
          type="button"
          className="relative flex items-center rounded bg-transparent p-1 transition-colors duration-300 ease-in hover:bg-secondary"
          onClick={() => router.push('/cart')}
          aria-label={`Cart (${cartCount} items)`}
        >
          <IoCartOutline size={24} aria-hidden="true" />
          {cartCount > 0 && (
            <span className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-secondary3 text-xs text-white">
              {cartCount}
            </span>
          )}
        </button>

        {/* User Menu */}
        <div className="dropdown relative p-1">
          <button
            type="button"
            onClick={() => setOpenUserDropdown(!openUserDropdown)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary3"
            aria-label="User menu"
            aria-expanded={openUserDropdown}
            aria-haspopup="true"
          >
            <LuUser size={18} color="white" aria-hidden="true" />
          </button>
          {openUserDropdown && (
            <div className="absolute right-1 z-50 mt-2 w-max rounded-md bg-[rgba(0,0,0,0.5)] backdrop-blur-md">
              <ul className="flex flex-col items-start justify-center space-y-4 p-4">
                {accountMenuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-start justify-center gap-4 text-white"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
