import React, { memo } from 'react';
import SearchResultItem from './SearchResultItem';
import Filters from './Filters';

const SearchResults = ({ searchQuery, results }) => {
  return (
    <section className="max-w-4xl mx-auto">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Search Results for "{searchQuery}"
        </h2>
        {/* Filters are mock-only - will connect to real data later */}
        <Filters />
      </header>

      <section className="space-y-4">
        {results.length > 0 ? (
          results.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))
        ) : (
          <section className="text-center py-12">
            <p className="text-gray-500">No results found for your search. Try different keywords.</p>
          </section>
        )}
      </section>
    </section>
  );
};

export default memo(SearchResults);