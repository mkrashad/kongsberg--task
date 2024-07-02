import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<NotFound />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
