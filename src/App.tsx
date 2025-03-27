import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import {Footer} from './components/navigation/Footer';
import Home from './pages/Home';
import ProfPaula from './pages/ProfPaula';
import ProfYan from './pages/ProfYan';
import Blog from './pages/Blog';
import ArticlePage from './pages/ArticlePage';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/prof-paula" element={<ProfPaula />} />
            <Route path="/prof-yan" element={<ProfYan />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;