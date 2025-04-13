import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, handleKeyDown }) => {
  return (
    <section className="max-w-2xl mx-auto relative">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input" className="sr-only">Search constitutional documents</label>
        <input
          id="search-input"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about constitutional documents..."
          className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-lg"
        />
        <button 
          type="button"
          onClick={handleSearch}
          className="absolute right-3 top-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          aria-label="Search"
        >
          <Search className="h-6 w-6" />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;