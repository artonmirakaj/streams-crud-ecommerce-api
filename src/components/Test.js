import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <div>
      This is the test page!
      <div>
        <Link to='/'>
          <h2>Go back</h2>
        </Link>
      </div>
    </div>
  );
};

export default Test;
