import React, { useState } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface SearchBarProps {
  onSearch: (bloodGroup: string, location: string) => void;
}

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = () => {
    onSearch(bloodGroup, location);
    setIsDropdownOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Blood Group Input */}
        <div className="relative flex-1">
          <Input
            placeholder="Select Blood Group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value.toUpperCase())}
            onFocus={() => setIsDropdownOpen(true)}
            icon={<Droplet className="h-5 w-5 text-gray-400" />}
          />
          
          {/* Blood Group Dropdown */}
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
              {BLOOD_GROUPS.filter(group => 
                group.toLowerCase().includes(bloodGroup.toLowerCase())
              ).map((group) => (
                <button
                  key={group}
                  className="w-full px-4 py-2 text-left hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => {
                    setBloodGroup(group);
                    setIsDropdownOpen(false);
                  }}
                >
                  {group}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location Input */}
        <div className="flex-1">
          <Input
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            icon={<MapPin className="h-5 w-5 text-gray-400" />}
          />
        </div>

        {/* Search Button */}
        <Button
          variant="primary"
          onClick={handleSearch}
          className="md:w-auto"
          icon={<Search className="h-5 w-5" />}
        >
          Search Donors
        </Button>
      </div>

      {/* Active Filters */}
      {(bloodGroup || location) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {bloodGroup && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
              Blood Group: {bloodGroup}
              <button
                onClick={() => setBloodGroup('')}
                className="ml-2 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
          {location && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
              Location: {location}
              <button
                onClick={() => setLocation('')}
                className="ml-2 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
