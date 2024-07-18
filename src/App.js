import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import SignUpPage from './SignUp';
import MainPage from './Mains';

import { GroupProvider } from './GroupContext';

function App() {
  return (
    <GroupProvider>
    <Router>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mains/*" element={<MainPage />} />
       
      </Routes>  
      
    </Router>
    </GroupProvider>
  );
}

export default App;
