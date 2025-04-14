import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

const AdminHeader = () => {
  const { logout } = useAuth0(); // Access the logout function from Auth0

  const handleSignOut = () => {
    logout({ returnTo: window.location.origin }); // Logs out and redirects back to the origin
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
      <button
        onClick={handleSignOut} // Call the handleSignOut function
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </button>
    </header>
  );
};

export default AdminHeader;
