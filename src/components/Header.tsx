
import React from 'react';

interface HeaderProps {
  mbtiType: string | null; // MBTI type will be passed as a prop to display it in the header
}

const Header: React.FC<HeaderProps> = ({ mbtiType }) => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', textAlign: 'center', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <h1>TRPI Personality Test</h1>
      {mbtiType && <h2>Your Type: {mbtiType}</h2>}
    </header>
  );
};

export default Header;
