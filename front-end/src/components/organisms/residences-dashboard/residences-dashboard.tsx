'use client';

import React, { useState } from 'react';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { ResidencesData, ResidentialUnit } from '@/types/residences-types';
import { useAppContext } from '@/context/app-context';
import ApiService from '@/services/ApiService';
import DownloadBrochureModal from '@/components/molecules/download-prochure-modal';

interface Props {
  residencesData: ResidencesData[];
}

export default function ResidencesDashboard({ residencesData }: Props) {
  const { name, mobileNumber, email } = useAppContext();
  const [showDownloadBrochureModal, setShowDownloadBrochureModal] =
    useState(false);

  const handleConfirm = async () => {
    // TODO: Handle admin login

    await ApiService.createLead({
      name: name,
      mobile_number: mobileNumber,
      email: email,
      status: 'New',
    });

    setShowDownloadBrochureModal(false);
  };

  return (
    <div className='flex flex-col gap-[10px] p-[20px]'>
      <p className='text-center text-2xl font-semibold'>Apartments</p>

      {showDownloadBrochureModal && (
        <DownloadBrochureModal
          onCancel={() => setShowDownloadBrochureModal(false)}
          onConfirm={handleConfirm}
        />
      )}

      {residencesData.map((residence, index) => (
        <div key={index} className='mb-10'>
          <div className='flex justify-between items-center py-5'>
            <h1>{residence.name}</h1>

            <Button
              className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
              onClick={() => setShowDownloadBrochureModal(true)}
            >
              Download Brochure
            </Button>
          </div>

          <Table aria-label='Residences Table'>
            <TableHeader>
              <TableColumn>TYPE</TableColumn>
              <TableColumn>AREA</TableColumn>
              <TableColumn>PRICE</TableColumn>
              <TableColumn>RESERVATION PERCENTAGE</TableColumn>
            </TableHeader>

            <TableBody>
              {residence.residential_units.map(
                (unit: ResidentialUnit, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{unit.type}</TableCell>

                    <TableCell>{`${unit.area.from} - ${
                      unit.area.to || unit.area
                    }`}</TableCell>

                    <TableCell>{`${unit.price.from} - ${
                      unit.price.to || unit.price
                    }`}</TableCell>

                    <TableCell>{`${unit.payment_plan.reservation_percentage}%`}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
