import React from 'react';
import { Heart, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bloodline</h1>
          <p className="text-xl text-gray-600">Connecting Lives Through Blood Donation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Bloodline aims to bridge the gap between blood donors and recipients, creating
              a seamless platform for life-saving connections. We believe that every drop
              counts and everyone deserves access to safe blood when needed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where no one has to struggle to find blood donors in
              times of need. Through technology and community engagement, we're making
              this vision a reality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-gray-600">Building a strong network of dedicated blood donors</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
            <p className="text-gray-600">Rapid donor matching within 40km radius</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location Based</h3>
            <p className="text-gray-600">Find nearby donors using precise location tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;