import React from 'react';
import { LogOut } from 'lucide-react';

const AdminHeader = ({ onSignOut }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
      <button
        onClick={onSignOut}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </button>
    </div>
  );
};

export default AdminHeader;
