import React from 'react';
import { Search, Upload, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook

const HomePage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0(); // Get the login function from Auth0

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Constitutional Archive
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Access, search, and explore historical constitutional documents with ease.
        </p>
        <nav className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/search"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
          >
            <Search className="h-5 w-5 mr-2" />
            Start Searching
          </Link>
        </nav>
      </header>

      <section className="mt-24">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <li className="pt-6">
            <article className="flow-root bg-white rounded-lg px-6 pb-8">
              <header className="-mt-6">
                <figure className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                  <Search className="h-6 w-6 text-white" />
                </figure>
                <h2 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Powerful Search</h2>
                <p className="mt-5 text-base text-gray-500">
                  Natural language search capabilities to find relevant constitutional documents quickly.
                </p>
              </header>
            </article>
          </li>

          <li className="pt-6">
            <article className="flow-root bg-white rounded-lg px-6 pb-8">
              <header className="-mt-6">
                <figure className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                  <Upload className="h-6 w-6 text-white" />
                </figure>
                <h2 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Upload</h2>
                <p className="mt-5 text-base text-gray-500">
                  Administrators can easily upload and organize constitutional documents.
                </p>
                <nav className="mt-4">
                  {isAuthenticated ? (
                    <Link
                      to="/admin"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Go to Admin Panel
                    </Link>
                  ) : (
                    <button
                      onClick={() => loginWithRedirect()} // Trigger the login redirection
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600"
                    >
                      Login to Access Admin Portal
                    </button>
                  )}
                </nav>
              </header>
            </article>
          </li>

          <li className="pt-6">
            <article className="flow-root bg-white rounded-lg px-6 pb-8">
              <header className="-mt-6">
                <figure className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </figure>
                <h2 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">API Access</h2>
                <p className="mt-5 text-base text-gray-500">
                  RESTful API integration for developers to build upon our platform.
                </p>
                <nav className="mt-4">
                  <Link
                    to="/api-docs"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View API Documentation
                  </Link>
                </nav>
              </header>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
