import { useState } from 'react';

export const useFileManagement = () => {
  // Mock data for demonstration
  const initialFiles = [
    {
      id: 1,
      name: 'Constitution_1947.pdf',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-03-15',
      category: 'constitution',
      description: 'Original Constitution document from 1947',
      tags: ['constitution', 'original', 'historical'],
      path: '/constitution/original'
    },
    {
      id: 2,
      name: 'Amendments_2020.docx',
      type: 'Document',
      size: '1.1 MB',
      date: '2024-03-14',
      category: 'amendment',
      description: 'Recent constitutional amendments from 2020',
      tags: ['amendment', 'recent'],
      path: '/constitution/amendments'
    },
    {
      id: 3,
      name: 'Historical_Notes.pdf',
      type: 'PDF',
      size: '3.7 MB',
      date: '2024-03-13',
      category: 'historical',
      description: 'Historical notes and analysis',
      tags: ['historical', 'analysis'],
      path: '/historical/notes'
    },
  ];

  const [files, setFiles] = useState(initialFiles);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (newFiles) => {
    const newFileData = newFiles.map((file, index) => ({
      id: files.length + index + 1,
      name: file.name,
      type: file.type.split('/')[1]?.toUpperCase() || 'UNKNOWN',
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      date: new Date().toISOString().split('T')[0],
      category: '',
      description: '',
      tags: [],
      path: '/'
    }));
    setFiles([...newFileData, ...files]);
  };

  const handleFileEdit = (id) => {
    const fileToEdit = files.find(file => file.id === id);
    if (fileToEdit) {
      setSelectedFile(fileToEdit);
    }
  };

  const handleFileDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleMetadataUpdate = (id, metadata) => {
    setFiles(files.map(file => 
      file.id === id ? { ...file, ...metadata } : file
    ));
    setSelectedFile(null);
  };

  return {
    files,
    selectedFile,
    handleFileUpload,
    handleFileEdit,
    handleFileDelete,
    handleMetadataUpdate,
    setSelectedFile,
  };
};
