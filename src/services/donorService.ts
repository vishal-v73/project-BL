import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Donor } from '../types/donor';

export const addDonor = async (donor: Donor) => {
  try {
    // Convert the donor object to a Firestore-compatible format
    const donorData = {
      ...donor,
      lastDonation: donor.lastDonation?.toISOString(),
      createdAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'donors'), donorData);
    return docRef.id;
  } catch (error) {
    console.error('Error adding donor:', error);
    throw error;
  }
};

export const findNearbyDonors = async (
  bloodGroup: string,
  userLat: number,
  userLng: number,
  radiusInKm: number = 40
) => {
  const donors: Donor[] = [];
  const donorsRef = collection(db, 'donors');
  
  // Query for blood group
  const q = query(donorsRef, where('bloodGroup', '==', bloodGroup));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const donor = doc.data() as Donor;
    const distance = calculateDistance(
      userLat,
      userLng,
      donor.latitude,
      donor.longitude
    );
    
    if (distance <= radiusInKm) {
      donors.push({ ...donor, id: doc.id });
    }
  });

  return donors;
};

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (value: number): number => {
  return (value * Math.PI) / 180;
};