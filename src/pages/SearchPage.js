import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock search results for demonstration
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex shadow-sm rounded-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search constitutional documents..."
            className="flex-1 px-4 py-3 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 flex items-center">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center text-gray-600">
            <Filter className="h-4 w-4 mr-1" />
            Filters:
          </span>
          <select className="border rounded-md px-2 py-1 text-gray-600">
            <option>All Types</option>
            <option>PDF</option>
            <option>Document</option>
            <option>Image</option>
          </select>
          <select className="border rounded-md px-2 py-1 text-gray-600">
            <option>All Dates</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {mockResults.map((result) => (
            <div key={result.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                  <p className="mt-2 text-gray-600">{result.excerpt}</p>
                </div>
                <span className="text-sm text-green-600 font-medium">{result.relevance}</span>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-sm text-gray-500">{result.type}</span>
                <button className="text-sm text-blue-600 hover:text-blue-800">View Document</button>
                <button className="text-sm text-blue-600 hover:text-blue-800">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;