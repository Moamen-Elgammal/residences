import { useState, useEffect } from 'react';
import { leadsService } from './api';
import { Lead } from './types';

export const useLeads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);

      try {
        const data = await leadsService.getLeads();
        setLeads(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return { leads, loading, error };
};

export const useLead = (id: string) => {
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLead = async () => {
      setLoading(true);

      try {
        const data = await leadsService.getLead(id);
        setLead(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLead();
  }, [id]);

  return { lead, loading, error };
};

export const useCreateLead = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createLead = async (
    lead: Pick<Lead, 'name' | 'email' | 'mobile_number' | 'status'>
  ) => {
    setLoading(true);

    try {
      const data = await leadsService.createLead(lead);

      return data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { createLead, loading, error };
};

export const useUpdateLead = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateLead = async (id: string, lead: Lead) => {
    setLoading(true);

    try {
      const data = await leadsService.updateLead(id, lead);

      return data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updateLead, loading, error };
};

export const useDeleteLead = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteLead = async (id: string) => {
    setLoading(true);

    try {
      const data = await leadsService.deleteLead(id);

      return data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteLead, loading, error };
};
