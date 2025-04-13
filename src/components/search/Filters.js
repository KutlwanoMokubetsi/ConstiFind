import React, { memo } from 'react';
import { Filter } from 'lucide-react';

// Mock filter component - will be connected to real data later
const Filters = () => {
  // Mock filter handlers
  const handleTypeFilter = (e) => {
    console.log('Type filter changed (mock):', e.target.value);
    // In real app, this would trigger a new filtered search
  };

  const handleDateFilter = (e) => {
    console.log('Date filter changed (mock):', e.target.value);
    // In real app, this would trigger a new filtered search
  };

  return (
    <nav className="flex items-center space-x-4 text-sm">
      <span className="flex items-center text-gray-600">
        <Filter className="h-4 w-4 mr-1" />
        Filters:
      </span>
      <select 
        onChange={handleTypeFilter}
        className="border rounded-lg px-3 py-1.5 text-gray-600 bg-white shadow-sm"
      >
        <option>All Types</option>
        <option>PDF</option>
        <option>Document</option>
      </select>
      <select 
        onChange={handleDateFilter}
        className="border rounded-lg px-3 py-1.5 text-gray-600 bg-white shadow-sm"
      >
        <option>All Dates</option>
        <option>Last Week</option>
        <option>Last Month</option>
        <option>Last Year</option>
      </select>
    </nav>
  );
};

export default memo(Filters);