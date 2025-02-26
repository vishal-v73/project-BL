import { donorApi } from '../lib/api';
import type { Donor, DonorInput, BloodGroup, ApiResponse } from '../types';

export const addDonor = async (donor: DonorInput): Promise<Donor> => {
  try {
    return await donorApi.createDonor(donor);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error adding donor:', error);
      throw new Error(`Failed to add donor: ${error.message}`);
    } else {
      console.error('Unknown error adding donor:', error);
      throw new Error('Failed to add donor: Unknown error');
    }
  }
};

export const getDonorsByBloodGroup = async (bloodGroup: BloodGroup): Promise<Donor[]> => {
  try {
    const response = await donorApi.getDonorsByBloodGroup(bloodGroup);
    return response; // Directly return the response if it’s already an array of donors
  } catch (error) {
    throw new Error('Failed to fetch donors');
  }
};

export const getAllDonors = async (): Promise<Donor[]> => {
  try {
    return await donorApi.getAllDonors();
  } catch (error) {
    throw new Error('Failed to fetch donors');
  }
};