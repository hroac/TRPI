
import React, { useState } from 'react';
import { matchMBTIType as calculateMbtiType, determinePrimary4FType } from '../utils/mbtiMapping'; // Adjusted import

const BigFiveInputPage: React.FC = () => {
  const [openness, setOpenness] = useState<number>(50);
  const [conscientiousness, setConscientiousness] = useState<number>(50);
  const [extraversion, setExtraversion] = useState<number>(50);
  const [agreeableness, setAgreeableness] = useState<number>(50);
  const [neuroticism, setNeuroticism] = useState<number>(50);

  const [mbtiType, setMbtiType] = useState<string | null>(null);

  const calculateType = () => {
    const bigFiveData = { openness: openness / 100, conscientiousness: conscientiousness / 100, extraversion: extraversion /100, agreeableness: agreeableness / 100, neuroticism: neuroticism / 100} 
    const fourF = determinePrimary4FType(bigFiveData)
    const type = calculateMbtiType(bigFiveData, fourF);
    setMbtiType(type);
  };

  return (
    <div style={{ paddingTop: '60px', textAlign: 'center' }}>
      <h1>Enter Your Big Five Data</h1>
      <div>
        <label>Openness: </label>
        <input type="number" value={openness} onChange={(e) => setOpenness(Number(e.target.value))} min="0" max="100" />
      </div>
      <div>
        <label>Conscientiousness: </label>
        <input type="number" value={conscientiousness} onChange={(e) => setConscientiousness(Number(e.target.value))} min="0" max="100" />
      </div>
      <div>
        <label>Extraversion: </label>
        <input type="number" value={extraversion} onChange={(e) => setExtraversion(Number(e.target.value))} min="0" max="100" />
      </div>
      <div>
        <label>Agreeableness: </label>
        <input type="number" value={agreeableness} onChange={(e) => setAgreeableness(Number(e.target.value))} min="0" max="100" />
      </div>
      <div>
        <label>Neuroticism: </label>
        <input type="number" value={neuroticism} onChange={(e) => setNeuroticism(Number(e.target.value))} min="0" max="100" />
      </div>
      <button onClick={calculateType} style={{ marginTop: '20px' }}>Calculate MBTI Type</button>
      {mbtiType && <h2>Your MBTI Type: {mbtiType}</h2>}
    </div>
  );
};

export default BigFiveInputPage;
