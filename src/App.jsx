import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import JobPortal from './components/JobPortal';
import Home from './components/Home';
import Contact from './components/Contact'
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" />} />
        <Route path="/job-portal" element={<JobPortal />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
