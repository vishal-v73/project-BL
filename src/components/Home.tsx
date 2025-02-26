import React from 'react';
import { Heart, Users, Clock, MapPin, Droplet, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with animated background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-500 to-red-600 py-32 sm:py-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/blood-cells.png')] opacity-10 animate-float"></div>
          {/* Animated circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl tracking-tight">
              Save Lives Through
              <span className="block mt-2 animate-gradient bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent bg-300% font-black">
                Blood Donation
              </span>
            </h1>
            <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Join our community of life-savers. Every donation can save up to three lives.
              Find blood donors near you or register to become a donor today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="group"
                onClick={() => window.location.href = '/register'}
              >
                Become a Donor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() => window.location.href = '/search'}
              >
                <Search className="mr-2 h-5 w-5" />
                Find Donors
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with hover effects */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose{' '}
              <span className="text-red-600">Bloodline</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We make blood donation and finding donors simple and efficient
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Location-Based</h3>
              <p className="text-gray-600">
                Find donors within 40km of your location for quick access to life-saving help
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Clock className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Instant matching with available donors in your area when time matters most
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Donors</h3>
              <p className="text-gray-600">
                All donors are verified and their information is kept secure and confidential
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section with animations */}
      <div className="py-24 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Droplet className="h-10 w-10 text-red-500 animate-bounce" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 animate-count" data-target="1000">
                1000+
              </div>
              <div className="text-lg text-gray-600">Registered Donors</div>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Heart className="h-10 w-10 text-red-500 animate-beat" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 animate-count" data-target="500">
                500+
              </div>
              <div className="text-lg text-gray-600">Lives Saved</div>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                <Users className="h-10 w-10 text-red-500 animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 animate-count" data-target="50">
                50+
              </div>
              <div className="text-lg text-gray-600">Cities Covered</div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Make a Difference?
            </h2>
            <Button
              variant="secondary"
              size="lg"
              className="group"
              onClick={() => window.location.href = '/register'}
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;