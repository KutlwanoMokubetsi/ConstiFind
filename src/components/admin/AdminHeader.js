import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

const AdminHeader = ({ onSignOut }) => {
  const { user } = useAuth0();

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>

      <section className="flex items-center gap-4">
        {user && (
          <section className="flex items-center gap-2">
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover border border-gray-300"
            />
            <span className="text-gray-800 font-medium">{user.name}</span>
          </section>
        )}

        <button
          onClick={onSignOut}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </button>
      </section>
    </header>
  );
};

export default AdminHeader;
