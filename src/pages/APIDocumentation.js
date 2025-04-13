import React from 'react';
import { Code, ChevronRight, ExternalLink } from 'lucide-react';

const APIDocumentation = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Constitutional Archive API Documentation
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
          Build applications using our comprehensive REST API
        </p>
      </header>

      <section className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
          <p className="mt-2 text-gray-600">
            Our API provides programmatic access to constitutional documents and metadata.
          </p>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Base URL</h3>
          <code className="mt-2 inline-block px-3 py-2 bg-gray-100 rounded text-sm font-mono">
            https://api.constitutionalarchive.com/v1
          </code>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Authentication</h3>
          <p className="mt-2 text-gray-600">
            All API requests require an API key sent in the Authorization header.
          </p>
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
              {`Authorization: Bearer YOUR_API_KEY`}
            </pre>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Endpoints</h3>
          
          <div className="mt-6 space-y-8">
            <article>
              <h4 className="font-medium text-gray-900 flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                Search Documents
              </h4>
              <div className="mt-2 ml-7">
                <div className="flex items-baseline">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-mono rounded mr-2">GET</span>
                  <code className="text-sm font-mono">/documents/search?q={'{query}'}</code>
                </div>
                <p className="mt-2 text-gray-600">Search constitutional documents by keyword or phrase.</p>
                
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Example Request</h5>
                  <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
                    {`fetch('https://api.constitutionalarchive.com/v1/documents/search?q=freedom', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})`}
                  </pre>
                </div>
              </div>
            </article>

            <article>
              <h4 className="font-medium text-gray-900 flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                Get Document by ID
              </h4>
              <div className="mt-2 ml-7">
                <div className="flex items-baseline">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-mono rounded mr-2">GET</span>
                  <code className="text-sm font-mono">/documents/{'{id}'}</code>
                </div>
                <p className="mt-2 text-gray-600">Retrieve a specific constitutional document with metadata.</p>
              </div>
            </article>

            <article>
              <h4 className="font-medium text-gray-900 flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                List Documents
              </h4>
              <div className="mt-2 ml-7">
                <div className="flex items-baseline">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-mono rounded mr-2">GET</span>
                  <code className="text-sm font-mono">/documents</code>
                </div>
                <p className="mt-2 text-gray-600">List all documents with pagination support.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Response Format</h3>
          <p className="mt-2 text-gray-600">
            All responses are in JSON format with the following structure:
          </p>
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <pre className="text-sm font-mono text-gray-800 overflow-x-auto">
              {`{
  "success": true,
  "data": {
    // endpoint-specific data
  },
  "pagination": {
    // if applicable
  },
  "error": null
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-blue-50 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Code className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-blue-800">Developer Resources</h3>
            <p className="mt-1 text-blue-700">
              Check out our Postman collection and client libraries to get started quickly.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Postman Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default APIDocumentation;