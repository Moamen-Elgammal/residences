import config from '../config/config';

const ApiService = {
  getLeads: async () => {
    const response = await fetch(`${config.apiUrl}/leads`);
    const data = await response.json();
    return data;
  },

  createLead: async (lead) => {
    const response = await fetch(`${config.apiUrl}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    });
    const data = await response.json();
    return data;
  },

  getLead: async (id) => {
    const response = await fetch(`${config.apiUrl}/leads/${id}`);
    const data = await response.json();
    return data;
  },

  updateLead: async (id, lead) => {
    const response = await fetch(`${config.apiUrl}/leads/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    });
    const data = await response.json();
    return data;
  },

  deleteLead: async (id) => {
    const response = await fetch(`${config.apiUrl}/leads/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default ApiService;
