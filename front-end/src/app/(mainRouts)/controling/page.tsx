'use client';

import React, { useState, useEffect } from 'react';
import { ChipProps } from '@nextui-org/react';
import ApiService from '@/services/ApiService';
import ControllerDashboard from '@/components/organisms/controler-dashboard/controler-dashboard';

interface User {
  id: string;
  name: string;
  mobile_number: string;
  email: string;
  created_at: string;
  status: string;
}

export default function Controling() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const statusColorMap: Record<string, ChipProps['color']> = {
    New: 'success',
    Onhold: 'secondary',
    Canceled: 'danger',
    Pending: 'warning',
  };
  const statuses = ['New', 'Onhold', 'Canceled', 'Pending'];

  useEffect(() => {
    setLoading(true);

    ApiService.getLeads().then((data) => {
      setUsersList(data);
      setLoading(false);
    });
  }, []);

  const handleUpdateStatus = async (user: User, newStatus: string) => {
    try {
      await ApiService.updateLead(user.id, { status: newStatus });
      setUsersList((prevUsersList) =>
        prevUsersList.map((u) =>
          u.id === user.id ? { ...u, status: newStatus } : u
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (user: User) => {
    if (
      window.confirm('Are you sure you want to remove this user?' + user.name)
    ) {
      try {
        await ApiService.deleteLead(user.id);
        setUsersList((prevUsersList) =>
          prevUsersList.filter((u) => u.id !== user.id)
        );
      } catch (err) {
        console.error(err);
      }
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
