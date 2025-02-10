import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DonorRegistration from './components/DonorRegistration';
import SearchDonors from './components/SearchDonors';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Heart className="h-8 w-8 text-red-500" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Bloodline</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register as Donor
                </Link>
                <Link
                  to="/search"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find Donors
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<DonorRegistration />} />
          <Route path="/search" element={<SearchDonors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;