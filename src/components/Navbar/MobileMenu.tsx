'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ProductCategory from '../ProductCategory';
import { navItems } from './MenuItems';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  const panelVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  };

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-9 w-9 items-center justify-center rounded border border-neutral-200 text-black transition-colors mdl:hidden"
      >
        <FiMenu aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* sidebar panel */}
            <motion.div
              className="fixed left-0 top-0 z-50 flex h-screen w-80 flex-col bg-white px-6 py-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={panelVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="sidebar-heading flex justify-between">
                <div className="text-lg font-semibold">
                  <h1>SpesaMart</h1>
                </div>
                <button
                  className="transition-color mb-4 flex h-9 w-9 items-center justify-center rounded border border-neutral-200 text-black hover:shadow-inner"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <FiX className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="scrollbar my-4 max-h-screen space-y-4 overflow-y-scroll">
                <nav className="navbar">
                  <span className="font-medium">Main Menu</span>
                  <ul className="flex flex-col space-y-3 pt-3">
                    {navItems.map((nav) => (
                      <li key={nav.title}>
                        <Link
                          href={nav.path}
                          prefetch={true}
                          onClick={closeMobileMenu}
                          className="hover:text-gray-600"
                        >
                          {nav.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-y border-custom py-4">
                  <span className="font-medium">Categories</span>
                  <div className="product-category pt-3">
                    <ProductCategory />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium">Wishlist</span>
                  <Link href="/wishlist" className="hover:text-gray-600">
                    My Wishlist
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
