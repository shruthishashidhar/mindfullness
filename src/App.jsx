// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Dance from './components/Dance';
import Yoga from './components/Yoga';
import Meditation from './components/Meditation';
import Sessions from './components/sessions';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path='/login' element={<LoginPage />}  />
          <Route path='/dashboard' element={<Dashboard />}  />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
