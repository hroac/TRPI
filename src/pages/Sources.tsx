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
    src: '/pdfs/Replicating and Extending the Link Between Jung and the Big Five.pdf',
    link: 'https://osf.io/2rm5j', // You may update with the correct OSF link if needed
    title: 'Replicating and Extending the Link Between Jung and the Big Five',
    description: `
      Establishes a robust, cross-validated mapping between Jungian types and Big Five trait profiles using TRPI data (n=2,916).
      Replicates classic MBTI–Big Five relationships, validates 16-type classification (mean r = 0.833), and introduces four cognitive clusters beyond classical dichotomies.
    `,
  },
  {
    src: '/pdfs/From Traits to Types Validating Jungian and Freudian Concepts with the Big Five.pdf',
    link: 'https://osf.io/827yk', // You may update with the correct OSF link if needed
    title: 'From Traits to Types: Validating Jungian and Freudian Concepts with the Big Five',
    description: `
      Integrates trait, type, and neurocognitive models in TRPI. 
      Demonstrates that Big Five traits form two meta-traits—Ego (short-context, N-E axis) and Superego (long-context, A-C axis)—grounded in hemispheric context processing.
      K-means clustering empirically recovers TRPI’s four survival modes (Freeze, Fight, Fawn, Flight), each mapping to specific function pairings and Big Five profiles.
    `,
  },
  {
    src: '/pdfs/Behavorial Clustering Of Jungian Types.pdf',
    link: '', // Add your OSF or other link if available
    title: 'Behavioral Clustering of Jungian Types: Linking the 4F Trauma Modes, Big‑Five Traits, and Cognitive Functions',
    description: `
      Applies k-means clustering to TRPI trait vectors (C, E, A, N) from 2,916 participants, empirically recovering the four 4F modes.
      Each mode is defined by a dominant trait: Freeze (C), Fight (E), Fawn (A), Flight (N).
      Shows high non-random correspondence between behavioral clusters, Big Five dominance, and Jungian type, supporting the TRPI’s dynamic function–trait linkage.
    `,
  },
  {
    src: '/pdfs/Hemispheric Lateralization of Context Length and the Organization of the Big Five Traits.pdf',
    link: 'https://osf.io/cg2b5', // You may update with the correct OSF link if needed
    title: 'Hemispheric Lateralization of Context Length and the Organization of the Big Five Traits',
    description: `
      Demonstrates, via factor analysis on a weighted Big Five dataset (n=2,916), that personality traits organize into two meta-traits:
      1) Neuroticism–Extraversion (short-context/Ego, left hemisphere), and 2) Agreeableness–Conscientiousness (long-context/Superego, right hemisphere).
      Provides neurocognitive grounding for the TRPI’s distinction between context processing preferences as the foundation of personality structure.
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
