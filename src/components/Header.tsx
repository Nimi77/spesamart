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
      <div role="region" aria-label="skip to main content">
        <a
          href="#main"
          tabIndex={0}
          className="sr-only z-50 rounded p-1 text-black outline-offset-1 focus:not-sr-only"
        >
          Skip to Main Content
        </a>
      </div>
      <div className="bg-black p-4 shadow-md">
        <div className="mx-auto flex max-w-4xl items-center justify-around">
          <div className="flex items-center justify-center gap-2 text-white">
            <span>
              Summer Sales For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link href="/" className="font-semibold underline">
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
    <header className="sticky top-0 z-20 w-full border-b border-custom bg-white/90 py-4 backdrop-blur-sm">
      <Navbar />
    </header>
  );
}
