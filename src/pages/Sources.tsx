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
    "src": "/pdfs/From Traits to Types.pdf",
    "link": "https://osf.io/zrq4v",
    "title": "From Traits to Types: Validating Jungian Concepts Through the Big Five",
    "description": "Analysis of TRPI-assigned type profiles (N = 722) demonstrates that aggregated Big Five means align with hypothesized function pairings. Ten-fold cross-validation reached 0.694 accuracy (p = 2.0 × 10⁻⁴, Cohen’s h = 1.51), and intra-type similarity was r = 0.844. Groupings (xxTP, xxTJ, xxFJ, xxFP) showed strong trait–prototype correlations (all r ≈ 0.8). A semi-unsupervised clustering procedure mapped one-to-one onto TRPI’s 4F modes (mean similarity S = 0.858). Large-scale validation (N = 1,013,558) achieved 0.824 accuracy. These findings provide quantitative evidence that Jungian type theory nests coherently within Big Five trait space, positioning TRPI as a replicable bridge between typological and dimensional models."
  },
  {
    "src": "/pdfs/Meta-States.pdf",
    "link": "https://osf.io/r2eux",
    "title": "Hypothesizing the 64 Meta–State System: A Generative Grammar",
    "description": "Introduces the 64 Meta-State System for TRPI, in which each meta-state is a unique pairing of Ego and Superego function clusters (e.g., SeFi–SiTe), following three compositional rules: (i) one introverted + one extraverted function; (ii) one perceiving + one judging function of opposite attitudes; (iii) pairings are localized to a single cerebral hemisphere. Crossing eight Ego and eight Superego pairings yields a neurocognitively plausible 8 × 8 = 64-state matrix, each corresponding to a distinct pattern of lateralized prefrontal activity. The framework maps context length to hemispheric lateralization—left (short-context, Sensing) and right (long-context, Intuition)—and outlines neuroscientific predictions and applications for personality neuroscience, bridging Jungian function theory with modern neurocognitive models."
  },
  {
    "src": "/pdfs/Meta-States-Empirical.pdf",
    "link": "https://osf.io/y6zn9",
    "title": "The 64 Meta-State System: Empirical MRI Validation of TRPI Function Pairings",
    "description": "Provides the first empirical validation of the 64 Meta-State System within TRPI using Human Connectome Project MRI data (N > 1,100). Participants were assigned to meta-states using blended similarity metrics over prefrontal cortex profiles. Five-fold cross-validation yielded a label-match accuracy of 0.69 (p = 5.21 × 10⁻²⁰², Cohen’s d = 1.91) and an adjusted Rand index of 0.59, demonstrating robust brain-based discrimination. Trait concordance between brain-derived and self-reported Big Five was 0.57 (median 0.65). Hierarchical clustering naturally recovered the four TRPI 4F modes, with strong neuroanatomical separation. This work establishes TRPI as an empirically validated and theoretically integrated framework, bridging Jungian typology, Big Five traits, and modern neuroscience."
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
