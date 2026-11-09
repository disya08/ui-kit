import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { IframePage } from '../pages/IframePage/IframePage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
        <Link to="/">Голосование</Link>
        <Link to="/iframe">Iframe</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iframe" element={<IframePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
