export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Donor {
  _id: string;
  name: string;
  bloodGroup: BloodGroup;
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

export type DonorInput = Omit<Donor, '_id' | 'createdAt' | 'updatedAt' | 'isAvailable' | 'lastDonation'> & {
  password: string;
};

export interface ApiResponse<T> {
  data: T;
}