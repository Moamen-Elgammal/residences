'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ChipProps,
  Chip,
  Spinner,
} from '@nextui-org/react';
import dayjs from 'dayjs';
import { DeleteIcon } from '@/app/assets/icons/DeleteIcon';
import { Lead } from '@/services/leads/types';

interface ControllerDashboardProps {
  usersList: Lead[];
  isLoading: boolean;
  handleUpdateStatus: (user: Lead, newStatus: string) => void;
  handleDeleteUser: (user: Lead) => void;
  statusColorMap: Record<string, ChipProps['color']>;
  statuses: string[];
}

const ControllerDashboard: React.FC<ControllerDashboardProps> = ({
  usersList,
  isLoading,
  handleUpdateStatus,
  handleDeleteUser,
  statusColorMap,
  statuses,
}) => (
  <div className='flex flex-col gap-[10px] p-[20px]'>
    <p className='text-center text-2xl font-semibold pb-[20px]'>Settings</p>

    <Table aria-label='Users Table'>
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Mobile Number</TableColumn>
        <TableColumn>Email address</TableColumn>
        <TableColumn>Creation date</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>

      <TableBody
        emptyContent={
          usersList.length === 0 && !isLoading ? (
            'No data to display'
          ) : (
            <Spinner color='primary' />
          )
        }
      >
        {usersList.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>

            <TableCell>{user.mobile_number}</TableCell>

            <TableCell>{user.email}</TableCell>

            <TableCell>{dayjs(user.created_at).format('D MMM YYYY')}</TableCell>

            <TableCell>
              <Dropdown>
                <DropdownTrigger>
                  <Chip
                    className='capitalize'
                    color={statusColorMap[user.status]}
                    size='sm'
                    variant='flat'
                  >
                    {user.status}
                  </Chip>
                </DropdownTrigger>
                <DropdownMenu>
                  {statuses.map((status) => (
                    <DropdownItem
                      key={status}
                      onClick={() => handleUpdateStatus(user, status)}
                    >
                      {status}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </TableCell>

            <TableCell>
              <Tooltip color='danger' content='Delete user'>
                <span
                  className='text-lg text-danger cursor-pointer active:opacity-50'
                  onClick={() => handleDeleteUser(user)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default ControllerDashboard;
