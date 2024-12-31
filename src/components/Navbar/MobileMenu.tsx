'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ProductCategory from '../ProductCategory';
import { navItems } from './MenuItems';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-9 w-9 items-center justify-center rounded border border-neutral-200 text-black transition-colors mdl:hidden"
      >
        <FiMenu aria-hidden="true" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <DialogPanel className="sidebar fixed bottom-0 left-0 right-0 top-0 flex w-80 flex-col bg-white">
              <div className="px-6 py-8">
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
                <div className="scrollbar my-4 max-h-screen overflow-y-scroll">
                  <nav aria-label="Main navigation">
                    <span className="font-mediu m">Main Menu</span>
                    <ul className="flex flex-col space-y-3 pt-2">
                      {navItems.map((nav) => (
                        <li key={nav.title}>
                          <Link
                            href={nav.path}
                            prefetch={true}
                            onClick={closeMobileMenu}
                          >
                            <span className="cursor-pointer transition-colors hover:text-gray-600">
                              {nav.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <span className="font-medium">Categories</span>
                    <div className="product-category pt-2">
                      <ProductCategory />
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
