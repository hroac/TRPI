
import React from 'react';
import { useParams } from 'react-router-dom';
import { typesData } from './typesData';
import RelatedTypes from './RelatedTypes';
import RelatedTypesBox from './RelatedTypesBox';

const AboutPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const typeInfo = typesData.find(t => t.type === type);

  if (!typeInfo) {
    return <div>Type information not available.</div>;
  }

  return (
    <div style={{ paddingTop: '60px' }}>
      <h1>{type} Profile</h1>
      <p>{typeInfo.description}</p>
      <h2>Strengths</h2>
      <ul>
        {typeInfo.strengths.map((strength: string, index: number) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>
      <h2>Weaknesses</h2>
      <ul>
        {typeInfo.weaknesses.map((weakness: string, index: number) => (
          <li key={index}>{weakness}</li>
        ))}
      </ul>
      {/* Including Related Types section */}
      <RelatedTypesBox type={(type as unknown as any).toString()} />
    </div>
  );
};

export default AboutPage;
