import React from 'react';
import ResidencesDashboard from '@/components/organisms/residences-dashboard/residences-dashboard';
import { residencesMocks } from '@/mocks/residences-mocks';

export default function Residences() {
  return <ResidencesDashboard residencesData={residencesMocks} />;
}
