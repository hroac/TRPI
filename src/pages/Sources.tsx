import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Dialog } from '@mui/material';
import PdfViewer from '../components/PdfViewer';
import { Link } from 'react-router-dom';


const sources = [
  {
    src: '/pdfs/2302.14389v1.pdf',
    link: 'https://arxiv.org/abs/2302.14389',
    title: 'Information-Restricted Neural Language Models',
    description: `
      Explores how different brain regions process semantics, syntax, and context using information-restricted language models.
      It highlights the left and right hemispheres' varying sensitivity to short and long contexts.
    `,
  },
  {
    src: '/pdfs/2305.13863v1.pdf',
    link: 'https://arxiv.org/abs/2305.13863',
    title: 'Probing Brain Context-Sensitivity with Masked-Attention Generation',
    description: `
      Discusses how brain regions integrate varying levels of contextual information using an innovative approach called masked-attention generation.
      This research leverages GPT-2 to quantify the brain's window size for context integration.
    `,
  },
  {
    src: '/pdfs/The Trauma Response Personality Indicator.pdf',
    link: 'https://osf.io/r2eux',
    title: 'The Trauma Response Personality Indicator (TRPI)',
    description: `
      Introduces TRPI, a dynamic framework for understanding personality through trauma responses, cognitive functions,
      and the Big Five traits. It emphasizes adaptability and nuanced alternatives to traditional models like MBTI.
    `,
  },
  {
    src: '/pdfs/Validating the Myers-Briggs-Archetypes.pdf',
    link: 'https://osf.io/zrq4v',
    title: 'Validating the Myers-Briggs-Archetypes',
    description: `
      Examines correlations between MBTI archetypes, Big Five traits, and trauma responses, supporting the alignment
      of MBTI types with specific profiles under stress and personality dynamics.
    `,
  },
  {
    src: '/pdfs/Validating_Myers-Briggs_Archetypes_Through_Big_Five_Profiles.pdf',
    link: 'https://osf.io/dsp9q',
    title: 'Validating Myers-Briggs Archetypes Through Big Five Profiles',
    description: `
      Validates MBTI archetypes through Big Five profiles, introducing cognitive layers, hemispheric function pairing, and dynamic shifts
      under stress. Provides an enhanced framework for understanding personality patterns.
    `,
  },
  {
    src: '/pdfs/Predicting Stress Responses Through the Big Five.pdf',
    link: 'https://osf.io/v462q',
    title: 'Predicting Stress Responses Through the Big Five',
    description: `
    This study validates the TRPI framework by demonstrating that dominant Big Five traits predict stress responses, 
    with strong correlations linking Extraversion to Fight, Neuroticism to Flight, Conscientiousness to Freeze, and Agreeableness to Fawn.
    `
  }
];

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
    <Box sx={{ padding: '20px' }}>
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
                variant="outlined"
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
