import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { ChatAppContext } from '@/context/ChatAppContext';

import Filter from '@/components/filter';
import Friend from '@/components/friend';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { title } = useContext(ChatAppContext);
  console.log(title);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Filter />
      <Friend />
    </main>
  );
}
