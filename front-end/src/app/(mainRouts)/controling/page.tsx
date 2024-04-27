'use client';

import React from 'react';
import { ChipProps } from '@nextui-org/react';
import ControllerDashboard from '@/components/organisms/controler-dashboard/controler-dashboard';
import { useLeads, useUpdateLead, useDeleteLead } from '@/services/leads/hooks';
import { Lead } from '@/services/leads/types';

export default function Controling() {
  const { leads: usersList, loading } = useLeads();
  const { updateLead } = useUpdateLead();
  const { deleteLead } = useDeleteLead();

  const statusColorMap: Record<string, ChipProps['color']> = {
    New: 'success',
    Onhold: 'secondary',
    Canceled: 'danger',
    Pending: 'warning',
  };
  const statuses = ['New', 'Onhold', 'Canceled', 'Pending'];

  const handleUpdateStatus = (user: Lead, newStatus: string) => {
    updateLead(user.id, { ...user, status: newStatus });
  };

  const handleDeleteUser = (user: Lead) => {
    if (window.confirm(`Are you sure you want to remove ${user.name}?`)) {
      deleteLead(user.id);
    }
  };

  return (
    <ControllerDashboard
      usersList={usersList}
      isLoading={loading}
      handleUpdateStatus={handleUpdateStatus}
      handleDeleteUser={handleDeleteUser}
      statusColorMap={statusColorMap}
      statuses={statuses}
    />
  );
}
