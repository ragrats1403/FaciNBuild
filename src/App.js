import React from 'react';
import LoginPage from './Components/LoginPage';
import UserDashboard from './Components/User/UserDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>   
        <Route path='/' element={<LoginPage />} />
        </Routes>
    </Router>
    
    </>
  );
  }


export default App;
