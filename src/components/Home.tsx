import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Clock, MapPin, Droplet } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Save Lives Through
              <span className="text-red-600"> Blood Donation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of life-savers. Every donation can save up to three lives.
              Find blood donors near you or register to become a donor today.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/register"
                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Become a Donor
              </Link>
              <Link
                to="/search"
                className="px-8 py-3 bg-white text-red-600 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Find Donors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Bloodline?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We make blood donation and finding donors simple and efficient
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <MapPin className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Location-Based</h3>
              <p className="mt-2 text-gray-600">
                Find donors within 40km of your location for quick access
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Quick Response</h3>
              <p className="mt-2 text-gray-600">
                Instant matching with available donors in your area
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Verified Donors</h3>
              <p className="mt-2 text-gray-600">
                All donors are verified and their information is kept secure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Droplet className="h-12 w-12 text-red-500 mx-auto" />
              <div className="mt-4 text-4xl font-bold text-gray-900">1000+</div>
              <div className="mt-2 text-gray-600">Registered Donors</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto" />
              <div className="mt-4 text-4xl font-bold text-gray-900">500+</div>
              <div className="mt-2 text-gray-600">Lives Saved</div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto" />
              <div className="mt-4 text-4xl font-bold text-gray-900">50+</div>
              <div className="mt-2 text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;