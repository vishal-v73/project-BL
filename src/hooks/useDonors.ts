import { useState, useEffect } from 'react';
import { donorApi } from '../lib/api';
import { Donor } from '../types';

export const useDonors = (bloodGroup?: string) => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true);
        const response = bloodGroup
          ? await donorApi.getDonorsByBloodGroup(bloodGroup)
          : await donorApi.getAllDonors();
        setDonors(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch donors');
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, [bloodGroup]);

  return { donors, loading, error };
};
