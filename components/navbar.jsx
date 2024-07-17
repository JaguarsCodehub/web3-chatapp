import React, { useState } from 'react';
import { ChatAppContext } from '@/context/ChatAppContext';
import images from '../assets';

const Navbar = () => {
  const menuItems = [
    {
      menu: 'All Users',
      link: 'alluser',
    },
    {
      menu: 'Chat',
      link: '/',
    },
    {
      menu: 'Contact',
      link: '/',
    },
    {
      menu: 'Setting',
      link: '/',
    },
    {
      menu: 'FAQ',
      link: '/',
    },
    {
      menu: 'Terms of Service',
      link: '/',
    },
  ];

  const [active, setActive] = useState(2);

  return (
    <div className=''>
      <div className=''>Navbar</div>
    </div>
  );
};

export default Navbar;
