import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Dialog } from '@mui/material';
import PdfViewer from '../components/PdfViewer';
import { Link } from 'react-router-dom';


const sources = [
  {
    src: '/pdfs/nol_a_00125.pdf',
    link: 'https://direct.mit.edu/nol/article/4/4/611/117823/Information-Restricted-Neural-Language-Models',
    title: 'Information-Restricted Neural Language Models',
    description: `
      Demonstrates hemispheric asymmetries in context integration through a large-scale fMRI meta-analysis.
      The left hemisphere favors short-context, localized processing, while the right hemisphere supports long-context, integrative reasoning.
      These findings form a neural basis for distinguishing Extraversion (left) and Introversion (right) as contextual modes.
    `,
  },
  {
    src: '/pdfs/From Traits to Types.pdf',
    link: 'https://osf.io/mcqf4',
    title: 'From Traits to Types: Validating Jungian Concepts Through the Big Five',
    description: `
      TRPI analyses demonstrate that temporal-context preferences serve as a functional bridge between Big Five traits and Jungian types, yielding a unified, multidimensional personality architecture. The hybrid clustering approach identified four distinct adaptive modes, each strongly associated with type, substantiating the empirical validity of the TRPI framework.
    `,
  },

]
;

const Sources: React.FC = () => {
  const [openViewer, setOpenViewer] = useState<{ open: boolean; src: string | null }>({
    open: false,
    src: null,
  });

  const handleOpenViewer = (src: string) => {
    setOpenViewer({ open: true, src });
  };

  const handleCloseViewer = () => {
    setOpenViewer({ open: false, src: null });
  };

  return (
    <Box sx={{ padding: '20px',marginTop: '64px' }}>
      <Typography variant="h4" gutterBottom>
        Research Sources
      </Typography>
      {sources.map((source, index) => (
        <Card key={index} sx={{ marginBottom: '20px' }}>
          <CardContent>
            <Link to={source.link}><Typography variant="h5">{source.title}</Typography></Link>
            <Typography variant="body1" paragraph>
              {source.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenViewer(source.src)}
              >
                View Inline
              </Button>
              <Button
               variant="contained"
                color="primary"
                href={source.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
      {/* PDF Viewer Modal */}
      {openViewer.open && openViewer.src && (
        <Dialog
          open={openViewer.open}
          onClose={handleCloseViewer}
          fullWidth
          maxWidth="md"
        >
          <Box sx={{ padding: '10px' }}>
            <PdfViewer
              file={{
                src: openViewer.src,
                title: '',
                description: '',
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCloseViewer}
              sx={{ marginTop: '10px' }}
            >
              Close Viewer
            </Button>
          </Box>
        </Dialog>
      )}
    </Box>
  );
};

export default Sources;
