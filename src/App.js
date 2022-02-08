import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Test from './components/Test';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
