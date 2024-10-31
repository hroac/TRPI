import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { typesData } from './typesData';

interface RelatedTypesProps {
  type: string;
}

const RelatedTypesBox: React.FC<RelatedTypesProps> = ({ type }) => {
  const typeInfo = typesData.find(t => t.type === type);

  if (!typeInfo) {
    return <div>Related types not available.</div>;
  }

  const { bronze, silver, gold, copper } = typeInfo;

  const relatedTypes = [
    { label: 'Bronze Pairing', typeCode: bronze },
    { label: 'Silver Pairing', typeCode: silver },
    { label: 'Gold Pairing', typeCode: gold },
    { label: 'Copper Pairing', typeCode: copper },
  ].map(({ label, typeCode }) => {
    const fullType = typesData.find(t => t.type === typeCode);
    return { label, typeInfo: fullType };
  });

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Related Types</Typography>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        {relatedTypes.map(({ label, typeInfo }) => (
          typeInfo && (
            <Box
              key={typeInfo.type}
              component={Link}
              to={`/about/${typeInfo.type}`}
              bgcolor={typeInfo.bgColor}
              color="white"
              p={2}
              textAlign="center"
              borderRadius={2}
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="subtitle1">{label}</Typography>
              <Typography variant="h6">{typeInfo.type}</Typography>
            </Box>
          )
        ))}
      </Box>
    </Box>
  );
};

export default RelatedTypesBox;
