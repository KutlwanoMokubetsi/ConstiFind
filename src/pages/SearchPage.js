import { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';
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
    {
      id: 4,
      title: 'Judicial Interpretations Vol. 12',
      excerpt: 'Landmark Supreme Court judgments interpreting constitutional provisions with case studies...',
      type: 'PDF',
      relevance: '90%',
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 5,
      title: 'Comparative Constitutional Law',
      excerpt: 'Analysis comparing Indian constitutional provisions with other Commonwealth nations...',
      type: 'Document',
      relevance: '88%',
      icon: <FileText className="h-5 w-5 text-green-500" />,
    },
    {
      id: 6,
      title: 'Fundamental Rights Handbook',
      excerpt: 'Practical guide to fundamental rights enforcement with procedural guidelines...',
      type: 'PDF',
      relevance: '85%',
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    }
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