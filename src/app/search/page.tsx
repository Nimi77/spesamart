import SearchResults from './SearchResults';
import { Suspense } from 'react';

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
