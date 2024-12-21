'use client';

import { FiSearch } from 'react-icons/fi';

export default function Search() {
  return (
    <div className="h-[2.38rem] w-60 rounded-md bg-secondary pl-5 pr-3">
      <form role="search" className="relative">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="What are you looking for?"
          aria-label="Search for products"
          autoComplete="off"
          className="w-full border-none bg-transparent text-sm text-[#7D8184]"
        />
        <div className="absolute right-0 top-0 flex items-center">
          <FiSearch className="h-5 w-5" aria-hidden="true" />
        </div>
      </form>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="h-[2.38rem] w-60 animate-pulse rounded-md bg-secondary pl-5 pr-3">
      <form className="relative w-full">
        <input
          placeholder="What are you looking for?"
          className="w-full border-none bg-transparent text-sm text-[#7D8184]"
        />
        <div className="absolute right-0 top-0 flex items-center p-2">
          <FiSearch className="h-5 w-5" aria-hidden="true" />
        </div>
      </form>
    </div>
  );
}
