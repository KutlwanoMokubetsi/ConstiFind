import React, { useState } from 'react';
import { Upload, FolderTree, Edit, AlertCircle, X } from 'lucide-react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Paper,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  Grid,
} from '@mui/material';

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
    <Box mb={4}>
      <Paper
        variant="outlined"
        sx={{ p: 4, textAlign: 'center', bgcolor: '#f8fafc' }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <FolderTree size={48} color="#6366f1" style={{ marginBottom: 16 }} />
          <input
            type="file"
            id="file-upload"
            hidden
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<Upload />}
              sx={{ mb: 2 }}
            >
              Select Files
            </Button>
          </label>
          <Typography variant="body2" color="text.secondary">
            Drag and drop files here, or click to browse
          </Typography>
        </Box>
      </Paper>

      {selectedFiles.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Files to Upload
          </Typography>

          {!allFilesValid && (
            <Alert severity="warning" icon={<AlertCircle size={20} />} sx={{ mb: 2 }}>
              Please complete all metadata fields before uploading
            </Alert>
          )}

          {selectedFiles.map((item, index) => (
            <Paper
              key={index}
              sx={{ p: 2, mb: 2, bgcolor: !item.isValid ? '#fff7ed' : '#ffffff', borderColor: !item.isValid ? '#fde68a' : '#e2e8f0', borderWidth: 1, borderStyle: 'solid', position: 'relative' }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="start">
                <Box>
                  <Typography variant="subtitle1" noWrap>{item.file.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {(item.file.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                  {!item.isValid && editingFileIndex !== index && (
                    <Typography variant="body2" color="warning.main" mt={1}>
                      <AlertCircle size={16} style={{ marginRight: 4 }} /> Metadata incomplete
                    </Typography>
                  )}
                </Box>
                <IconButton onClick={() => setEditingFileIndex(editingFileIndex === index ? null : index)}>
                  {editingFileIndex === index ? <X size={20} /> : <Edit size={20} />}
                </IconButton>
              </Box>

              {editingFileIndex === index && (
                <Box mt={2} p={2} bgcolor="#f1f5f9" borderRadius={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Display Name"
                        value={item.metadata.name}
                        onChange={(e) => handleMetadataChange(index, 'name', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel required>Category</InputLabel>
                        <Select
                          value={item.metadata.category}
                          onChange={(e) => handleMetadataChange(index, 'category', e.target.value)}
                          required
                        >
                          <MenuItem value="">Select category</MenuItem>
                          <MenuItem value="constitution">Constitution</MenuItem>
                          <MenuItem value="amendment">Amendment</MenuItem>
                          <MenuItem value="legal">Legal Document</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Description"
                        multiline
                        minRows={3}
                        value={item.metadata.description}
                        onChange={(e) => handleMetadataChange(index, 'description', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Tags (comma separated)"
                        value={item.metadata.tags.join(', ')}
                        onChange={(e) => handleMetadataChange(index, 'tags', e.target.value.split(',').map(t => t.trim()))}
                        required
                      />
                    </Grid>
                  </Grid>

                  <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
                    <Button onClick={() => setEditingFileIndex(null)} variant="outlined">
                      Cancel
                    </Button>
                    <Button onClick={() => setEditingFileIndex(null)} variant="contained">
                      Save Changes
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          ))}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<Upload />}
            onClick={handleUpload}
            disabled={!allFilesValid}
          >
            {allFilesValid ? 'Upload All Files' : 'Complete all metadata to enable upload'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;