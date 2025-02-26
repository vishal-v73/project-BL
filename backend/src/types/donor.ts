import { Document } from 'mongoose';

export interface IDonor extends Document {
  name: string;
  bloodGroup: string;
  phoneNumber: string;
  email: string;
  address: string;
  age: number;
  gender: string;
  isAvailable: boolean;
  lastDonation?: Date;
  createdAt: Date;
  updatedAt: Date;
}
