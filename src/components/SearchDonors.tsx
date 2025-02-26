import React, { useState } from 'react';
import { getDonorsByBloodGroup } from '../services/donorService';
import type { Donor, BloodGroup } from '../types';
import { Search, Droplet, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const SearchDonors = () => {
  const [bloodGroup, setBloodGroup] = useState<BloodGroup>('A+');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!bloodGroup) return;

    setLoading(true);
    try {
      const foundDonors = await getDonorsByBloodGroup(bloodGroup);
      setDonors(foundDonors || []); // Ensure donors is always an array
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to find donors. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find Blood Donors
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Search for blood donors by blood group
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value as BloodGroup)}
              className="block w-full sm:w-auto px-4 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <Button
              onClick={handleSearch}
              disabled={loading}
              icon={<Search className="w-4 h-4" />}
            >
              {loading ? 'Searching...' : 'Search Donors'}
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donors.map((donor) => (
              <Card key={donor._id}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Droplet className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-lg font-semibold">{donor.bloodGroup}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    donor.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {donor.isAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-900">{donor.name}</h3>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{donor.phoneNumber}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{donor.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{donor.address}</span>
                  </div>
                </div>

                {donor.lastDonation && (
                  <div className="mt-4 text-sm text-gray-500">
                    Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {donors.length === 0 && !loading && (
            <div className="text-center mt-10">
              <p className="text-gray-500">No donors found. Try a different blood group.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDonors;