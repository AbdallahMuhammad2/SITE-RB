import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfPaula from './pages/ProfPaula';
import ProfYan from './pages/ProfYan';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prof-paula" element={<ProfPaula />} />
            <Route path="/prof-yan" element={<ProfYan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;