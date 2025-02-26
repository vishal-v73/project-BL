import { Schema, model, Document } from 'mongoose';

// Donor interface
export interface IDonor extends Document {
  name: string;
  bloodGroup: string;
  phoneNumber: string;
  email: string;
  address: string;
  lastDonation?: Date;
  isAvailable: boolean;
  age: number;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
}

// Donor schema
const donorSchema = new Schema<IDonor>({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  bloodGroup: { 
    type: String, 
    required: true,
    uppercase: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  phoneNumber: { 
    type: String, 
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    lowercase: true
  },
  address: { 
    type: String, 
    required: true 
  },
  age: {
    type: Number,
    required: true,
    min: [18, 'Donor must be at least 18 years old'],
    max: [65, 'Donor must be at most 65 years old']
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  lastDonation: { 
    type: Date,
    default: null
  },
  isAvailable: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true,
  versionKey: false
});

// Indexes
donorSchema.index({ bloodGroup: 1, isAvailable: 1 });
donorSchema.index({ email: 1 }, { unique: true });
donorSchema.index({ phoneNumber: 1 }, { unique: true });

// Export model
export const Donor = model<IDonor>('Donor', donorSchema);
