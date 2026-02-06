"use client";

import { useEffect, useState } from 'react';

export default function Template({ children }:{children: any}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return children;
} 