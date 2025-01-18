import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

// Import default layout styles (optional but recommended for built-in toolbar)
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewerProps {
  file: {
    src: string;
    title: string;
    description: string;
  };
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  return (
    <Card sx={{ margin: '20px auto', maxWidth: '800px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {file.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {file.description}
        </Typography>
        <Box sx={{ height: '600px', border: '1px solid #ccc', overflow: 'hidden' }}>
          {/* PDF Viewer */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer fileUrl={file.src} />
          </Worker>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PdfViewer;
