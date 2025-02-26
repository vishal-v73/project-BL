import axios from 'axios';
import type { Donor, DonorInput, BloodGroup } from '../types';

// API Response Types
interface ServerResponse<T> {
  data: T;
  message?: string;
}

// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error?.response?.data?.message || error?.message || 'An error occurred';
    throw new Error(errorMessage);
  }
);

// API methods
export const donorApi = {
  // Get all donors
  getAllDonors: async (): Promise<Donor[]> => {
    try {
      const response = await api.get<ServerResponse<Donor[]>>('/donors');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // Get donors by blood group
  getDonorsByBloodGroup: async (bloodGroup: BloodGroup): Promise<Donor[]> => {
    try {
      const response = await api.get<ServerResponse<Donor[]>>(`/donors/${bloodGroup}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new donor
  createDonor: async (donor: DonorInput): Promise<Donor> => {
    try {
      const response = await api.post<ServerResponse<Donor>>('/donors', donor);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // Update donor availability
  updateDonorAvailability: async (
    id: string,
    updateData: { isAvailable: boolean; lastDonation?: string }
  ): Promise<Donor> => {
    try {
      const response = await api.patch<ServerResponse<Donor>>(
        `/donors/${id}/availability`,
        updateData
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete donor
  deleteDonor: async (id: string): Promise<void> => {
    try {
      await api.delete(`/donors/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default api;
