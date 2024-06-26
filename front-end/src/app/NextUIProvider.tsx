import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface NextUIProviderProps {
  children: React.ReactNode;
}

export default function NextUIWrapper({ children }: NextUIProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
