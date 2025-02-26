import mongoose from 'mongoose';
import { IDonor } from '../types/donor';

const donorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  bloodGroup: { 
    type: String, 
    required: true,
    uppercase: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  phoneNumber: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true
  },
  address: { 
    type: String, 
    required: true 
  },
  age: { 
    type: Number, 
    required: true,
    min: 18,
    max: 65
  },
  gender: { 
    type: String, 
    required: true,
    enum: ['male', 'female', 'other']
  },
  isAvailable: { 
    type: Boolean, 
    default: true 
  },
  lastDonation: { 
    type: Date, 
    default: null 
  }
}, {
  timestamps: true
});

// Add indexes for frequently queried fields
donorSchema.index({ bloodGroup: 1, isAvailable: 1 });
donorSchema.index({ createdAt: -1 });

export const Donor = mongoose.model<IDonor>('Donor', donorSchema);
