import React, { memo } from 'react';
import { BookOpen, FileText, Download, ChevronRight } from 'lucide-react';

// Mock icon mapping - can be expanded later
const iconMap = {
  PDF: <BookOpen className="h-5 w-5 text-blue-500" />,
  Document: <FileText className="h-5 w-5 text-green-500" />,
};

const SearchResultItem = ({ result }) => {
  // Mock download handler - will be replaced with real implementation later
  const handleDownload = () => {
    alert(`Mock download for: ${result.title}\n(In real app, this would download the document)`);
  };

  // Mock view handler - will be replaced with real implementation later
  const handleView = () => {
    alert(`Mock view for: ${result.title}\n(In real app, this would open the document viewer)`);
  };

  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <section className="flex items-start space-x-4">
        <figure className="flex-shrink-0 mt-1">
          {iconMap[result.type] || <BookOpen className="h-5 w-5 text-blue-500" />}
        </figure>
        <section className="flex-1 min-w-0">
          <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <section className="min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{result.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-2">{result.excerpt}</p>
            </section>
            <mark className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 h-fit">
              {result.relevance}
            </mark>
          </header>
          <footer className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center text-sm text-gray-500">
              {result.type}
            </span>
            <button 
              onClick={handleView}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              View Document <ChevronRight className="h-4 w-4 ml-1" />
            </button>
            <button 
              onClick={handleDownload}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
            >
              Download <Download className="h-4 w-4 ml-1" />
            </button>
          </footer>
        </section>
      </section>
    </article>
  );
};

export default memo(SearchResultItem);