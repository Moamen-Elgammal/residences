import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import DataContext from './context/DataContext';
import OnePageLayout from './components/template/AppLayout/OnePageLayout';
import Residences from './components/pages/Residences';
import Controling from './components/pages/Controling';

function App() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(true);

  const resetForm = () => {
    setName('');
    setMobileNumber('');
    setEmail('');
  };

  const contextValue = useMemo(
    () => ({
      name,
      mobileNumber,
      email,
      isAdmin,
      setName,
      setMobileNumber,
      setEmail,
      resetForm,
      setIsAdmin,
    }),
    [name, mobileNumber, email, isAdmin]
  );

  return (
    <DataContext.Provider value={contextValue}>
      <Routes>
        <Route
          path='/'
          element={
            <OnePageLayout>
              <Residences />
            </OnePageLayout>
          }
        />
        <Route
          path='/Residences'
          element={
            <OnePageLayout>
              <Residences />
            </OnePageLayout>
          }
        />
        {isAdmin && (
          <Route
            path='/Controling'
            element={
              <OnePageLayout>
                <Controling />
              </OnePageLayout>
            }
          />
        )}
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
