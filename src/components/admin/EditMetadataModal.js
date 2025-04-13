import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EditMetadataModal = ({ file, onClose, onSave }) => {
  const [metadata, setMetadata] = useState({
    name: '',
    category: '',
    description: '',
    tags: '',
    path: '/'
  });

  useEffect(() => {
    if (file) {
      setMetadata({
        name: file.name || '',
        category: file.category || '',
        description: file.description || '',
        tags: file.tags?.join(', ') || '',
        path: file.path || '/'
      });
    }
  }, [file]);

  if (!file) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...file,
      name: metadata.name,
      category: metadata.category,
      description: metadata.description,
      tags: metadata.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      path: metadata.path
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit File Metadata</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">File Name*</label>
              <input
                type="text"
                value={metadata.name}
                onChange={(e) => setMetadata({...metadata, name: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category*</label>
              <select
                value={metadata.category}
                onChange={(e) => setMetadata({...metadata, category: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="constitution">Constitution</option>
                <option value="amendment">Amendment</option>
                <option value="historical">Historical Document</option>
                <option value="legal">Legal Analysis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Directory Path</label>
              <input
                type="text"
                value={metadata.path}
                onChange={(e) => setMetadata({...metadata, path: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="/constitutional/amendments"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={metadata.description}
                onChange={(e) => setMetadata({...metadata, description: e.target.value})}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
              <input
                type="text"
                value={metadata.tags}
                onChange={(e) => setMetadata({...metadata, tags: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="constitution, amendment, historical"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMetadataModal;