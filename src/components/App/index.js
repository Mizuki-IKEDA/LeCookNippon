import { Routes, Route } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../Menu';
import Home from '../Home';
import Recipe from '../Recipe';
import Error from '../Error';

import './style.scss';
import useScrollTop from '../../hooks/useScrollTop';

function App() {
  useScrollTop();
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
