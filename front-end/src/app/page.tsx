'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/residences');
  }, []);

  return null;
}
