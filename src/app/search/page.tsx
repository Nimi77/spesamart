import SearchResults from './SearchResults';
import { Suspense } from 'react';

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[90%] py-12 text-lg xl:max-w-6xl">
          Loading search results...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
