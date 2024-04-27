import { AxiosInstance } from 'axios';
import { createAxiosInstance } from '../request/axios';
import { Lead } from './types';

const { API_URL } = require('@/config/config');

class LeadsApi {
  private leadsServiceInstance: AxiosInstance;

  constructor() {
    this.leadsServiceInstance = createAxiosInstance({
      baseURL: API_URL,
    });
  }

  getLeads = async () => {
    const { data } = await this.leadsServiceInstance.get('/leads');

    return data;
  };

  createLead = async (
    lead: Pick<Lead, 'name' | 'email' | 'mobile_number' | 'status'>
  ) => {
    const { data } = await this.leadsServiceInstance.post('/leads', lead);

    return data;
  };

  getLead = async (id: string) => {
    const { data } = await this.leadsServiceInstance.get(`/leads/${id}`);

    return data;
  };

  updateLead = async (id: string, lead: any) => {
    const { data } = await this.leadsServiceInstance.put(`/leads/${id}`, lead);

    return data;
  };

  deleteLead = async (id: string) => {
    const { data } = await this.leadsServiceInstance.delete(`/leads/${id}`);

    return data;
  };
}

export const leadsService = new LeadsApi();
