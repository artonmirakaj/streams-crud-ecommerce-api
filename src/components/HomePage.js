import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      This is the Home Page
      <h2><Link to='/test'>Test Page</Link></h2>
    </div>
  )
};

export default HomePage;
