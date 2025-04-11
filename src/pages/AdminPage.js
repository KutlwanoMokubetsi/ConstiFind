import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import FileUpload from '../components/admin/FileUpload';
import FileTable from '../components/admin/FileTable';
import EditMetadataModal from '../components/admin/EditMetadataModal';
import { useFileManagement } from '../hooks/useFileManagement';

const AdminPage = () => {
  const navigate = useNavigate();
  const {
    files,
    selectedFile,
    handleFileUpload,
    handleFileEdit,
    handleFileDelete,
    handleMetadataUpdate,
    setSelectedFile,
  } = useFileManagement();

  const handleSignOut = () => {
    // Mock implementation - in real app, this would call an auth service
    console.log('Signing out...');
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <AdminHeader onSignOut={handleSignOut} />
        
        {/* File Upload Section */}
        <FileUpload onFileSelect={handleFileUpload} />

        {/* File Management Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files</h2>
          <FileTable
            files={files}
            onEdit={handleFileEdit}
            onDelete={handleFileDelete}
          />
        </div>

        {/* Edit Metadata Modal */}
        {selectedFile && (
          <EditMetadataModal
            file={selectedFile}
            onClose={() => setSelectedFile(null)}
            onSave={handleMetadataUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;