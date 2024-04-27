import { ReactNode } from 'react';

export interface AppProviderProps {
  children: ReactNode;
}

export interface AppContextType {
  name: string;
  mobileNumber: string;
  email: string;
  setName: (name: string) => void;
  setMobileNumber: (mobileNumber: string) => void;
  setEmail: (email: string) => void;
}
