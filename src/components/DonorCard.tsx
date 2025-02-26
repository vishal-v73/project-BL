import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface DonorCardProps {
  donor: {
    name: string;
    bloodGroup: string;
    phoneNumber: string;
    email: string;
    address: string;
    age: number;
    isAvailable: boolean;
    lastDonation?: Date;
  };
  onContact?: () => void;
}

export const DonorCard: React.FC<DonorCardProps> = ({ donor, onContact }) => {
  const daysSinceLastDonation = donor.lastDonation
    ? Math.floor((new Date().getTime() - new Date(donor.lastDonation).getTime()) / (1000 * 3600 * 24))
    : null;

  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        {/* Blood Group Badge */}
        <div className="absolute -right-8 -top-8 bg-red-500 w-24 h-24 rotate-45 flex items-end justify-center pb-2">
          <span className="text-white font-bold text-xl -rotate-45">{donor.bloodGroup}</span>
        </div>
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                {donor.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">Age: {donor.age} years</p>
            </div>
            <Badge
              variant={donor.isAvailable ? 'success' : 'error'}
              className="animate-pulse"
            >
              {donor.isAvailable ? 'Available' : 'Unavailable'}
            </Badge>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>{donor.phoneNumber}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              <span>{donor.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{donor.address}</span>
            </div>
            {daysSinceLastDonation && (
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last donation: {daysSinceLastDonation} days ago</span>
              </div>
            )}
          </div>

          {/* Actions */}
          {onContact && donor.isAvailable && (
            <div className="mt-4">
              <Button
                variant="primary"
                className="w-full"
                onClick={onContact}
                icon={<Phone className="h-4 w-4" />}
              >
                Contact Donor
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
