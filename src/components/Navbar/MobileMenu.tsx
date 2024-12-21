import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
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
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden"
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
            <DialogPanel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-2/5 flex-col bg-white pb-6">
              <div className="p-4">
                <button
                  className="transition-color mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <FiX aria-hidden="true" />
                </button>
                <ul className="flex flex-col space-y-6">
                  {navItems.map((nav) => (
                    <li
                      key={nav.title}
                      className="py-2 text-black transition-colors hover:text-neutral-500"
                    >
                      <Link
                        href={nav.path}
                        prefetch={true}
                        onClick={closeMobileMenu}
                      >
                        <span className="cursor-pointer font-medium transition-colors hover:text-gray-600">
                          {nav.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
