'use client';

import { FiSearch } from 'react-icons/fi';

export function SearchSkeleton() {
  return (
    <div className="h-[2.38rem] w-60 animate-pulse rounded-md bg-secondary pl-5 pr-3">
      <label htmlFor="search" className="relative w-full">
        <input
          placeholder="What are you looking for?"
          className="w-full border-none bg-transparent text-[#7D8184]"
        />
        <div className="absolute right-0 top-0.5">
          <FiSearch className="h-5 w-5" aria-hidden="true" />
        </div>
      </label>
    </div>
  );
}
