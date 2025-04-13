import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../admin/AdminHeader';
import FileUpload from '../admin/FileUpload';
import FileTable from '../admin/FileTable';
import EditMetadataModal from '../admin/EditMetadataModal';
import { useFileManagement } from '../../hooks/useFileManagement';
import { Container, Box, Paper, Typography } from '@mui/material';

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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <AdminHeader onSignOut={handleSignOut} />

        {/* File Upload Section */}
        <Box my={4}>
          <FileUpload onFileSelect={handleFileUpload} />
        </Box>

        {/* File Management Section */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Uploaded Files
          </Typography>
          <FileTable
            files={files}
            onEdit={handleFileEdit}
            onDelete={handleFileDelete}
          />
        </Box>

        {/* Edit Metadata Modal */}
        {selectedFile && (
          <EditMetadataModal
            file={selectedFile}
            onClose={() => setSelectedFile(null)}
            onSave={handleMetadataUpdate}
          />
        )}
      </Paper>
    </Container>
  );
};

export default AdminPage;
