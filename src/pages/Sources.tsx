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
      Demonstrates hemispheric asymmetries in context integration through a large-scale fMRI meta-analysis.
      The left hemisphere favors short-context, localized processing, while the right hemisphere supports long-context, integrative reasoning.
      These findings form a neural basis for distinguishing Extraversion (left) and Introversion (right) as contextual modes.
    `,
  },
  {
    src: '/pdfs/2305.13863v1.pdf',
    link: 'https://arxiv.org/abs/2305.13863',
    title: 'Probing Brain Context-Sensitivity with Masked-Attention Generation',
    description: `
      Uses GPT-2 and masked-attention generation to model the brain's variable context window during language processing.
      Confirms that the right hemisphere processes broader semantic context over time, aligning with long-context preferences like Intuition and Superego constructs in TRPI.
    `,
  },
  {
    src: '/pdfs/The Trait Response Personality Indicator.pdf',
    link: 'https://osf.io/827yk',
    title: 'The Trait Response Personality Indicator (TRPI)',
    description: `
      Validates the TRPI framework through MBTI-Big Five correlations and introduces four cognitive clusters:
      Concrete Observers, Concrete Evaluators, Abstract Observers, and Abstract Evaluators.
      Extends traditional personality typing by integrating stress response modes and dynamic cluster analysis.
    `,
  },
  {
    src: '/pdfs/Validating the Briggs-Myers Types.pdf',
    link: 'https://osf.io/2rm5j',
    title: 'Validating the Briggs-Myers Types',
    description: `
      Replicates classic MBTI–Big Five relationships with a sample of 1900 participants.
      Shows strong trait correlations (r = 0.5–0.9) and introduces cluster validation via cognitive styles and cross-validated typological matching.
    `,
  },
  {
    src: '/pdfs/Predicting Stress Responses Through the Big Five.pdf',
    link: 'https://osf.io/v462q',
    title: 'Predicting Stress Responses Through the Big Five',
    description: `
      Maps Big Five traits to TRPI's 4F model:
      Extraversion → Fight, Neuroticism → Flight, Conscientiousness → Freeze, Agreeableness → Fawn.
      Provides empirical support linking personality traits to specific stress response strategies.
    `,
  },
  {
    src: '/pdfs/Hemispheric Lateralization of Context Length and the Organization of the Big Five Traits.pdf',
    link: 'https://osf.io/cg2b5',
    title: 'Hemispheric Lateralization of Context Length and the Organization of the Big Five Traits',
    description: `
      Demonstrates that the Big Five traits organize into two meta-traits based on hemispheric context length:
      Neuroticism–Extraversion (Ego/short-context) and Agreeableness–Conscientiousness (Superego/long-context).
      Provides neurocognitive grounding for TRPI’s distinction between short- and long-context processing as the basis for personality.
    `,
  }
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
