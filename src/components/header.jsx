import React from 'react';

const Header = () => {
  return (
    <header style={{
    background: `transparent`,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
    //   borderBottom: '1px solid #ccc',
    }}>
      <h1 style={{ color: 'red' }}>⚡Poke</h1>
      <h1 style={{ color: 'white' }}> Explore⚡</h1>
  
    
    </header>
  );
};

export default Header;
