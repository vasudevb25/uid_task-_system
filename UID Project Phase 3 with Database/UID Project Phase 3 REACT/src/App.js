import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import SignUpPage from './SignUpPage.jsx';
import Dashboard from './dashboard.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
