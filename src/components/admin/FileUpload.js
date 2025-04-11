import React, { useState } from 'react';
import { Upload, FolderTree, Edit, AlertCircle, X } from 'lucide-react';

const FileUpload = ({ onFileSelect }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editingFileIndex, setEditingFileIndex] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map(file => ({
        file,
        metadata: {
          name: file.name,
          category: '',
          description: '',
          tags: []
        },
        isValid: false
      }));
      setSelectedFiles(filesArray);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const filesArray = Array.from(event.dataTransfer.files).map(file => ({
        file,
        metadata: {
          name: file.name,
          category: '',
          description: '',
          tags: []
        },
        isValid: false
      }));
      setSelectedFiles(filesArray);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const validateFile = (fileData) => {
    return (
      fileData.metadata.name.trim() !== '' &&
      fileData.metadata.category.trim() !== '' &&
      fileData.metadata.description.trim() !== '' &&
      fileData.metadata.tags.length > 0
    );
  };

  const handleMetadataChange = (index, field, value) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles[index].metadata[field] = value;
    updatedFiles[index].isValid = validateFile(updatedFiles[index]);
    setSelectedFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (selectedFiles.some(file => !file.isValid)) return;
    
    const filesToUpload = selectedFiles.map(item => ({
      ...item.file,
      metadata: item.metadata
    }));
    onFileSelect(filesToUpload);
    setSelectedFiles([]);
  };

  const allFilesValid = selectedFiles.length > 0 && selectedFiles.every(file => file.isValid);

  return (
    <div className="mb-8">
      <div
        className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center">
          <FolderTree className="h-12 w-12 text-indigo-500 mb-4" />
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 mb-4 transition-colors duration-200"
          >
            <Upload className="h-5 w-5 mr-2" />
            Select Files
          </label>
          <p className="text-sm text-slate-500 mb-2">
            Drag and drop files here, or click to browse
          </p>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-800">Files to Upload</h3>
          
          {!allFilesValid && (
            <div className="flex items-center p-3 bg-amber-50 rounded-lg text-amber-800 border border-amber-100">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Please complete all metadata fields before uploading</span>
            </div>
          )}

          <div className="space-y-4">
            {selectedFiles.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-xl p-4 transition-all duration-200 ${
                  !item.isValid ? 'border-amber-200 bg-amber-50' : 'border-slate-200 bg-white'
                } ${editingFileIndex === index ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 truncate">{item.file.name}</p>
                    <p className="text-sm text-slate-500 mt-1">
                      {(item.file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                    {!item.isValid && editingFileIndex !== index && (
                      <p className="text-sm text-amber-600 mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>Metadata incomplete</span>
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setEditingFileIndex(index === editingFileIndex ? null : index)}
                    className={`p-2 rounded-full ${
                      !item.isValid 
                        ? 'text-amber-600 hover:bg-amber-100' 
                        : 'text-indigo-600 hover:bg-indigo-50'
                    } transition-colors duration-200`}
                  >
                    {editingFileIndex === index ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Edit className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {editingFileIndex === index && (
                  <div className="mt-4 space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Display Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.metadata.name}
                          onChange={(e) => handleMetadataChange(index, 'name', e.target.value)}
                          className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2.5"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Category <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={item.metadata.category}
                          onChange={(e) => handleMetadataChange(index, 'category', e.target.value)}
                          className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2.5"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="constitution">Constitution</option>
                          <option value="amendment">Amendment</option>
                          <option value="legal">Legal Document</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Description <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={item.metadata.description}
                        onChange={(e) => handleMetadataChange(index, 'description', e.target.value)}
                        rows={3}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2.5"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Tags <span className="text-rose-500">*</span> 
                        <span className="text-slate-400 text-xs ml-2">(comma separated)</span>
                      </label>
                      <input
                        type="text"
                        value={item.metadata.tags.join(', ')}
                        onChange={(e) => handleMetadataChange(index, 'tags', e.target.value.split(',').map(t => t.trim()))}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2.5"
                        required
                      />
                    </div>

                    <div className="flex justify-end space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditingFileIndex(null)}
                        className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingFileIndex(null)}
                        className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleUpload}
            disabled={!allFilesValid}
            className={`mt-6 w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
              allFilesValid 
                ? 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                : 'bg-slate-300 cursor-not-allowed'
            } transition-colors duration-200`}
          >
            {allFilesValid ? (
              <span className="flex items-center justify-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload All Files
              </span>
            ) : (
              'Complete all metadata to enable upload'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;