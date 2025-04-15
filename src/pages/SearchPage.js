import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import SearchHeader from '../components/search/SearchHeader';
import FeatureCards from '../components/search/FeatureCards';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const mockResults = [
    {
      id: 1,
      title: 'Constitution of India - 1947',
      excerpt: 'The Constitution of India is the supreme law of India...',
      type: 'PDF',
      relevance: '98%',
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    },
    // ... other mock results
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      
      {!hasSearched ? (
        <FeatureCards />
      ) : (
        <SearchResults 
          searchQuery={searchQuery} 
          results={mockResults} 
        />
      )}
    </div>
  );
};

export default SearchPage;