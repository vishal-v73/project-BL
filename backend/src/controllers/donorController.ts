import { Request, Response } from 'express';
import { Donor } from '../models/donor';
import bcrypt from 'bcrypt';
import { validate } from 'email-validator';
import { isMobilePhone } from 'validator';

export const donorController = {
  // Get all donors
  getAllDonors: async (_req: Request, res: Response) => {
    try {
      const donors = await Donor.find().sort({ createdAt: -1 });
      res.json(donors);
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

      res.json(donors);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create new donor
  createDonor: async (req: Request, res: Response) => {
    console.log('Incoming request body:', req.body);
    try {
      const { name, bloodGroup, phoneNumber, email, address, age, gender, isAvailable } = req.body;

      if (!name || !bloodGroup || !phoneNumber || !email || !address || !age || !gender) {
        console.error('Validation error: All fields are required');
        return res.status(400).json({ error: 'All fields are required' });
      }

      if (!validate(email)) {
        console.error('Validation error: Invalid email address');
        return res.status(400).json({ error: 'Invalid email address' });
      }

      if (!isMobilePhone(phoneNumber)) {
        console.error('Validation error: Invalid phone number');
        return res.status(400).json({ error: 'Invalid phone number' });
      }

      if (age < 18 || age > 65) {
        console.error('Validation error: Age must be between 18 and 65');
        return res.status(400).json({ error: 'Age must be between 18 and 65' });
      }

      const donor = new Donor({
        name,
        bloodGroup,
        phoneNumber,
        email,
        address,
        age,
        gender,
        isAvailable
      });

      await donor.save();
      res.status(201).json(donor);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error creating donor:', error);
        res.status(500).json({ error: error.message });
      } else {
        console.error('Unknown error creating donor:', error);
        res.status(500).json({ error: 'Unknown error occurred' });
      }
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
          lastDonation: lastDonation ? new Date(lastDonation) : null,
          updatedAt: new Date()
        },
        { new: true }
      );

      if (!donor) {
        return res.status(404).json({ error: 'Donor not found' });
      }

      res.json(donor);
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
