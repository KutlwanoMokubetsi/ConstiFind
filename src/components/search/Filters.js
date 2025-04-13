import { Filter } from 'lucide-react';

const Filters = () => {
  return (
    <nav className="flex items-center space-x-4 text-sm">
      <span className="flex items-center text-gray-600">
        <Filter className="h-4 w-4 mr-1" />
        Filters:
      </span>
      <select className="border rounded-lg px-3 py-1.5 text-gray-600 bg-white shadow-sm">
        <option>All Types</option>
        <option>PDF</option>
        <option>Document</option>
        <option>Image</option>
      </select>
      <select className="border rounded-lg px-3 py-1.5 text-gray-600 bg-white shadow-sm">
        <option>All Dates</option>
        <option>Last Week</option>
        <option>Last Month</option>
        <option>Last Year</option>
      </select>
    </nav>
  );
};

export default Filters;