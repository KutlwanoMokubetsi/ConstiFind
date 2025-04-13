import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchFeatures from '../components/search/SearchFeatures';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);

  const mockResults = [
    {
      id: 1,
      title: 'Constitution of India - 1947',
      excerpt: 'The Constitution of India is the supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties...',
      type: 'PDF',
      relevance: '98%',
    },
    {
      id: 2,
      title: 'Constitutional Amendments 2020',
      excerpt: 'Recent amendments to the constitution including changes to citizenship laws and administrative reforms...',
      type: 'Document',
      relevance: '95%',
    },
    {
      id: 3,
      title: 'Historical Constitutional Notes',
      excerpt: 'Comprehensive analysis of the constitutional development including historical context and implementation challenges...',
      type: 'PDF',
      relevance: '92%',
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
      // For now, use mock data
      setResults(mockResults);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">What do you want to search?</h1>
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          handleKeyDown={handleKeyDown}
        />
      </header>

      {!hasSearched ? (
        <SearchFeatures />
      ) : (
        <SearchResults searchQuery={searchQuery} results={results} />
      )}
    </main>
  );
};

export default SearchPage;