import express from 'express';
import { donorController } from '../controllers/donorController';

const router = express.Router();

// Donor routes
router.get('/', donorController.getAllDonors);
router.get('/:bloodGroup', donorController.getDonorsByBloodGroup);
router.post('/', donorController.createDonor);
router.patch('/:id/availability', donorController.updateDonorAvailability);
router.delete('/:id', donorController.deleteDonor);

export default router;
