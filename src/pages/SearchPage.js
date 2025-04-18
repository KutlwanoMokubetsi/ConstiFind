import { useState } from 'react';
import SearchHeader from '../components/search/SearchHeader';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchQuery.trim() && selectedTags.length === 0) return;

    setLoading(true);
    setHasSearched(true);
    setError(null);

    try {
      const query = new URLSearchParams();
      if (searchQuery.trim()) query.append('q', searchQuery.trim());
      if (selectedTags.length > 0) query.append('tags', selectedTags.join(','));

      const response = await fetch(`http://localhost:5000/api/search?${query.toString()}`);
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Something went wrong while searching.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SearchHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />

      {loading && <p className="text-center text-gray-500 mt-4">Searching...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {hasSearched && !loading && !error && (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default SearchPage;
