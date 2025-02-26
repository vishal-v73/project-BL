import { Request, Response } from 'express';
import { Donor } from '../models/donor.model';

export const donorController = {
  // Get all donors
  getAllDonors: async (_req: Request, res: Response) => {
    try {
      const donors = await Donor.find().sort({ createdAt: -1 });
      res.json({ data: donors });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get donors by blood group
  getDonorsByBloodGroup: async (req: Request, res: Response) => {
    try {
      const { bloodGroup } = req.params;
      
      if (!bloodGroup) {
        return res.status(400).json({ error: 'Blood group is required' });
      }

      const donors = await Donor.find({ 
        bloodGroup: bloodGroup.toUpperCase(),
        isAvailable: true 
      }).sort({ createdAt: -1 });

      res.json({ data: donors });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create new donor
  createDonor: async (req: Request, res: Response) => {
    try {
      const { name, bloodGroup, phoneNumber, email, address, age, gender } = req.body;

      if (!name || !bloodGroup || !phoneNumber || !email || !address || !age || !gender) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const donor = new Donor({
        name,
        bloodGroup: bloodGroup.toUpperCase(),
        phoneNumber,
        email,
        address,
        age,
        gender
      });

      const savedDonor = await donor.save();
      res.status(201).json({ data: savedDonor });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update donor availability
  updateDonorAvailability: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { isAvailable, lastDonation } = req.body;

      const donor = await Donor.findByIdAndUpdate(
        id,
        { 
          isAvailable,
          lastDonation: lastDonation ? new Date(lastDonation) : undefined,
          updatedAt: new Date()
        },
        { new: true }
      );

      if (!donor) {
        return res.status(404).json({ error: 'Donor not found' });
      }

      res.json({ data: donor });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete donor
  deleteDonor: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const donor = await Donor.findByIdAndDelete(id);

      if (!donor) {
        return res.status(404).json({ error: 'Donor not found' });
      }

      res.json({ message: 'Donor deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
