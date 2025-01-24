import React from 'react';
import { Clock, FlaskRound as Flask, Home, Users, FileImage, Brain, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './components/Countdown';
import Header from './components/Header';
import About from './components/About';
import PreviousGlimpses from './components/PreviousGlimpses';
import Timeline from './components/Timeline';
import Sessions from './components/Sessions';
import People from './components/People';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            RISE 2025
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Research, Innovation, Society, and Entrepreneurship
          </p>
          <p className="text-xl mb-12 text-gray-400">
            February 22nd, 2025 | IIIT Bangalore
          </p>
          <Countdown targetDate="2025-02-22" />
          
          {/* Register Now Button */}
          <div className="mt-12">
            <a
              href="https://forms.google.com/your-form-url-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Register Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <About />
      <PreviousGlimpses />
      <Timeline />
      <Sessions />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<People />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-indigo-950 py-8 text-center text-gray-400">
          <p>Supported by F1 Foundation, the CSR arm of Mphasis</p>
          <p className="mt-2">© 2024 IIIT Bangalore. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;