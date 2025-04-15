const React = require('react');
const { ChevronRight, Download } = require('lucide-react');

const ResultCard = ({ result }) => {
  return React.createElement('div', { className: 'bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow' },
    React.createElement('div', { className: 'flex items-start space-x-4' },
      React.createElement('div', { className: 'flex-shrink-0 mt-1' }, result.icon),
      React.createElement('div', { className: 'flex-1' },
        React.createElement('div', { className: 'flex justify-between items-start' },
          React.createElement('div', null,
            React.createElement('h3', { className: 'text-lg font-semibold text-gray-900' }, result.title),
            React.createElement('p', { className: 'mt-2 text-gray-600' }, result.excerpt)
          ),
          React.createElement('span', { className: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800' }, result.relevance)
        ),
        React.createElement('div', { className: 'mt-4 flex items-center space-x-6' },
          React.createElement('span', { className: 'inline-flex items-center text-sm text-gray-500' }, result.type),
          React.createElement('button', { className: 'inline-flex items-center text-sm text-blue-600 hover:text-blue-800' },
            'View ',
            React.createElement(ChevronRight, { className: 'h-4 w-4 ml-1' })
          ),
          React.createElement('button', { className: 'inline-flex items-center text-sm text-blue-600 hover:text-blue-800' },
            'Download ',
            React.createElement(Download, { className: 'h-4 w-4 ml-1' })
          )
        )
      )
    )
  );
};

module.exports = ResultCard;