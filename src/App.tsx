import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Menu, X, AlertCircle } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DonorRegistration from './components/DonorRegistration';
import SearchDonors from './components/SearchDonors';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
        <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center group">
                  <Heart className="h-8 w-8 text-red-500 group-hover:animate-beat" />
                  <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">Bloodline</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-red-500 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Register as Donor
                </Link>
                <Link
                  to="/search"
                  className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Find Donors
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Register as Donor
              </Link>
              <Link
                to="/search"
                className="block px-3 py-2 rounded-md text-base font-medium bg-red-500 text-white hover:bg-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Donors
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<DonorRegistration />} />
            <Route path="/search" element={<SearchDonors />} />
          </Routes>
        </div>

        {/* Emergency Request Floating Button */}
        <Link
          to="/search"
          className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center space-x-2 group"
        >
          <AlertCircle className="h-6 w-6" />
          <span className="hidden group-hover:inline">Emergency Request</span>
        </Link>
      </div>
    </Router>
  );
}

export default App;