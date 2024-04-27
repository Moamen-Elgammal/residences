'use client';

import React, { createContext, useContext, useState } from 'react';
import { AppContextType, AppProviderProps } from '@/types/app-context-types';

interface AppContextValues {
  name: string;
  mobileNumber: string;
  email: string;
  setName: (name: string) => void;
  setMobileNumber: (mobileNumber: string) => void;
  setEmail: (email: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext Not initialized');
  }

  return context;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const contextValue: AppContextValues = {
    name,
    mobileNumber,
    email,

    setName,
    setMobileNumber,
    setEmail,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
