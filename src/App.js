import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Create from './components/events/Create';
import Delete from './components/events/Delete';
import EventList from './components/events/EventList';
import Read from './components/events/Read';
import Update from './components/events/Update';
import NavBar from './components/NavBar';

const App = () => {
  const location = useLocation()
  return (
    <div>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<EventList />} />
        <Route path='/events/create' element={<Create />} />
        <Route path='/events/read' element={<Read />} />
        <Route path='/events/update' element={<Update />} />
        <Route path='/events/delete' element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
