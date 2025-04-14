import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Download, ChevronRight } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Mock search results (only data used - no database/API)
  const mockResults = [
    {
      id: 1,
      title: 'Constitution of India - 1947',
      excerpt: 'The Constitution of India is the supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties...',
      type: 'PDF',
      relevance: '98%',
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 2,
      title: 'Constitutional Amendments 2020',
      excerpt: 'Recent amendments to the constitution including changes to citizenship laws and administrative reforms...',
      type: 'Document',
      relevance: '95%',
      icon: <FileText className="h-5 w-5 text-green-500" />,
    },
    {
      id: 3,
      title: 'Historical Constitutional Notes',
      excerpt: 'Comprehensive analysis of the constitutional development including historical context and implementation challenges...',
      type: 'PDF',
      relevance: '92%',
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    },
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
      {/* Search Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">What do you want to search?</h1>
        
        {/* Search Input - Ensured typing works */}
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about constitutional documents..."
            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-lg"
            autoFocus // Automatically focuses the input
          />
          <button 
            onClick={handleSearch}
            className="absolute right-3 top-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Features (shown before search) */}
      {!hasSearched ? (
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Understand Your Query</h3>
            <p className="text-gray-600">We parse and analyze your input intelligently to deliver precise answers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Get Reliable Results</h3>
    <p className="text-gray-600">Our engine uses curated sources to provide trustworthy, referenced answers.</p>
  </div>
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Interact Naturally</h3>
    <p className="text-gray-600">Chat in natural language—no tech jargon needed.</p>
  </div>

          {/* Other feature cards... */}
        </div>
      ) : (
        /* Results (shown after search) */
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Search Results for "{searchQuery}"
            </h2>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-gray-600">
                <Filter className="h-4 w-4 mr-1" />
                Filters:
              </span>
              <select className="border rounded-lg px-3 py-1.5 text-gray-600 bg-white shadow-sm">
                <option>All Types</option>
                <option>PDF</option>
                <option>Document</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {mockResults.map((result) => (
              <div key={result.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                        <p className="mt-2 text-gray-600">{result.excerpt}</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {result.relevance}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center space-x-6">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        {result.type}
                      </span>
                      <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                        View <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                      <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                        Download <Download className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;