'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

export const TopHeader = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="w-full">
      <a
        href="#main"
        tabIndex={0}
        className="sr-only z-50 rounded p-1 text-black outline-offset-1 focus:not-sr-only"
      >
        Skip to Main Content
      </a>
      <div className="bg-black p-4 shadow-md">
        <div className="mx-auto flex max-w-4xl items-center justify-around">
          <div className="flex flex-col items-center gap-0 text-center text-white sm:flex-row sm:gap-2">
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
              aria-label="Select language"
              className="hidden border-none bg-black py-1 text-white outline-none focus:outline-none focus:ring-0 sm:block"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-customColor bg-white/90 py-4 backdrop-blur-sm">
      <Navbar />
    </header>
  );
}
