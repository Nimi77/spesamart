import SearchResults from './SearchResults';
import { Suspense } from 'react';

export default function SearchPage() {
  return (
    <Suspense
      fallback={<div className="py-14 text-lg">Loading search results...</div>}
    >
      <SearchResults />
    </Suspense>
  );
}
