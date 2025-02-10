import React, { useState } from 'react';
import { findNearbyDonors } from '../services/donorService';
import { Donor } from '../types/donor';
import { Search, Droplet, Phone, Mail, MapPin } from 'lucide-react';

const SearchDonors = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!bloodGroup) return;

    setLoading(true);
    try {
      const position = await getCurrentPosition();
      const nearbyDonors = await findNearbyDonors(
        bloodGroup,
        position.coords.latitude,
        position.coords.longitude
      );
      setDonors(nearbyDonors);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to find donors. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
      }
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <Search className="mx-auto h-12 w-12 text-red-500" />
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Find Blood Donors</h2>
            <p className="mt-2 text-gray-600 text-lg">
              Search for nearby donors based on your blood group. Every second counts!
            </p>
          </div>

          <div className="flex gap-4">
            <select
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 text-lg"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">Select blood group</option>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              disabled={loading || !bloodGroup}
              className="px-6 py-2 bg-red-600 text-white rounded-md text-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {/* Message after Search */}
        {bloodGroup && !loading && donors.length === 0 && (
          <div className="text-center text-gray-700 text-lg mb-8">
            We hope you'll find a donor soon. <strong>May God bless you!</strong>
          </div>
        )}

        {/* Donor Cards */}
        {donors.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {donors.map((donor) => (
              <div key={donor.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Droplet className="h-8 w-8 text-red-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{donor.name}</h3>
                    <p className="text-gray-600">Blood Group: {donor.bloodGroup}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{donor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{donor.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{donor.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Donors Found */}
        {donors.length === 0 && bloodGroup && !loading && (
          <div className="text-center text-gray-600 text-lg">
            No donors found in your area for the selected blood group.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDonors;
