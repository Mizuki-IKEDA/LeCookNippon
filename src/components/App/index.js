import { Routes, Route } from 'react-router-dom'; 
import Menu from '../Menu';

import './style.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
