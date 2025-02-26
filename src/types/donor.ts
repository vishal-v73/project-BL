export interface Donor {
  id?: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  latitude: number;
  longitude: number;
  lastDonation?: Date;
  isAvailable?: boolean;
}