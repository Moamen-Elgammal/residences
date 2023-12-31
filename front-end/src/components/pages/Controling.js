import React, { useState, useEffect } from 'react';
import { Alert, Spinner, Button } from 'react-bootstrap';
import moment from 'moment';
import ApiService from '../../services/ApiService';
import DropdownMenu from '../atoms/DropdownMenu/DropdownMenu';
import './Controling.scss';

export default function Controling() {
  const [usersList, setUsersList] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setLoading(true);
    ApiService.getLeads().then((data) => {
      setUsersList(data);
      setLoading(false);
    });
  }, []);

  const handleUpdateStatus = async (user, newStatus) => {
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

  const handleDeleteUser = async (user) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && event.target.closest('.dropdown') === null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  const noData = usersList.length === 0;

  return (
    <div style={{ padding: '40px' }}>
      <h1 className='page-header'>Settings</h1>
      {loading ? (
        <Spinner animation='border' />
      ) : noData ? (
        <Alert variant='warning'>No data to display.</Alert>
      ) : (
        <>
          <table className='table table-striped w-100 rounded-table'>
            <caption>
              <div className='table-caption-content'>
                <div className='table-header'>Users Table</div>

                <div className='controls'>
                  <Button
                    className='remove-selected-button'
                    variant={selectedRows.length > 0 ? 'danger' : 'dark'}
                    disabled={selectedRows.length <= 0}
                    onClick={() => {
                      const selectedUsers = usersList.filter((user) =>
                        selectedRows.includes(user.id)
                      );
                      Promise.all(
                        selectedUsers.map((user) => handleDeleteUser(user))
                      );
                      setSelectedRows([]);
                    }}
                  >
                    Remove Selected
                  </Button>
                </div>
              </div>
            </caption>
            <colgroup>
              <col width='5%' />
              <col width='20%' />
              <col width='20%' />
              <col width='20%' />
              <col width='20%' />
              <col width='15%' />
            </colgroup>
            <thead className='border-top-0'>
              <tr>
                <th className='border-0 font-weight-normal'>
                  <input
                    type='checkbox'
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(usersList.map((user) => user.id));
                      } else {
                        setSelectedRows([]);
                      }
                    }}
                  />
                </th>
                <th className='border-0 font-weight-normal'>Name</th>
                <th className='border-0 font-weight-normal'>Mobile Number</th>
                <th className='border-0 font-weight-normal'>Email address</th>
                <th className='border-0 font-weight-normal'>Creation date</th>
                <th className='border-0 font-weight-normal'>Status</th>
              </tr>
            </thead>
            <tbody>
              {usersList
                .sort((a, b) =>
                  moment(b.created_at).isAfter(moment(a.created_at)) ? 1 : -1
                )
                .map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input
                        type='checkbox'
                        checked={selectedRows.includes(user.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedRows([...selectedRows, user.id]);
                          } else {
                            setSelectedRows(
                              selectedRows.filter((id) => id !== user.id)
                            );
                          }
                        }}
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.mobile_number}</td>
                    <td>{user.email}</td>
                    <td>{moment(user.created_at).format('D MMM YYYY')}</td>
                    <td>
                      <DropdownMenu
                        id={user.id}
                        value={user.status}
                        onChange={(newStatus) =>
                          handleUpdateStatus(user, newStatus)
                        }
                        options={['New', 'Onhold', 'Canceled', 'Pending']}
                        openDropdown={openDropdown}
                        setOpenDropdown={setOpenDropdown}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
