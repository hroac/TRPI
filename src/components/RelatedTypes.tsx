
import React from 'react';
import { Link } from 'react-router-dom';
import { typesData } from './typesData';

interface RelatedTypesProps {
  type: string;
}

const RelatedTypes: React.FC<RelatedTypesProps> = ({ type }) => {
  const typeInfo = typesData.find(t => t.type === type);

  if (!typeInfo) {
    return <div>Related types not available.</div>;
  }

  const { bronze, silver, gold, copper } = typeInfo;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Related Types</h3>
      <ul>
        <li>Bronze Pairing: <Link to={`/about/${bronze}`}>{bronze}</Link></li>
        <li>Silver Pairing: <Link to={`/about/${silver}`}>{silver}</Link></li>
        <li>Gold Pairing: <Link to={`/about/${gold}`}>{gold}</Link></li>
        <li>Copper Pairing: <Link to={`/about/${copper}`}>{copper}</Link></li>
      </ul>
    </div>
  );
};

export default RelatedTypes;
