import { BookOpen, FileText, Download, ChevronRight } from 'lucide-react';

const SearchResultItem = ({ result }) => {
  const iconMap = {
    PDF: <BookOpen className="h-5 w-5 text-blue-500" />,
    Document: <FileText className="h-5 w-5 text-green-500" />,
  };

  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <section className="flex items-start space-x-4">
        <figure className="flex-shrink-0 mt-1">
          {iconMap[result.type] || <BookOpen className="h-5 w-5 text-blue-500" />}
        </figure>
        <section className="flex-1">
          <header className="flex justify-between items-start">
            <section>
              <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
              <p className="mt-2 text-gray-600">{result.excerpt}</p>
            </section>
            <mark className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {result.relevance}
            </mark>
          </header>
          <footer className="mt-4 flex items-center space-x-6">
            <span className="inline-flex items-center text-sm text-gray-500">
              {result.type}
            </span>
            <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
              View Document <ChevronRight className="h-4 w-4 ml-1" />
            </button>
            <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
              Download <Download className="h-4 w-4 ml-1" />
            </button>
          </footer>
        </section>
      </section>
    </article>
  );
};

export default SearchResultItem;