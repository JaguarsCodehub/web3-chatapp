import React, { useContext, useState } from 'react';
import { ChatAppContext } from '@/context/ChatAppContext';
import images from '../assets';
import Image from 'next/image';
import Link from 'next/link';
import Model from './model';
import Error from './error';

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
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const [account, createAccount, userName, connectWallet, error] =
    useContext(ChatAppContext);

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <Image src={images.logo} alt='logo' width={50} height={50} />
        </div>
        <div className=''>
          {/* Desktop */}
          <div className=''>
            {menuItems.map((el, i) => (
              <div onClick={() => setActive(i + 1)} key={1 + 1} className=''>
                {/* TODO: Add iternary strings for active on className 1:08:22*/}
                <Link className='' href={el.link}>
                  {el.menu}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile */}
          {!open && (
            <div className='mobile_menu'>
              {menuItems.map((el, i) => (
                <div
                  onClick={() => setActive(i + 1)}
                  key={1 + 1}
                  className='mobile_menu_items'
                >
                  {/* TODO: Add iternary strings for active on className 1:08:22*/}
                  <Link className='mobile_menu_items_link' href={el.link}>
                    {el.menu}
                  </Link>
                </div>
              ))}

              <p className='mobile_menu_btn'>
                <Image
                  src={images.close}
                  alt='close'
                  width={50}
                  height={50}
                  onClick={() => setOpen(false)}
                />
              </p>
            </div>
          )}

          {/* Connect Wallet */}
          <div className='navbar_box_right_container'>
            {account == '' ? (
              <button onClick={() => connectWallet()}>
                {''}
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                {''}
                <Image
                  src={userName ? images.accountName : images.create2}
                  alt='image'
                  width={20}
                  height={20}
                />
                {''}
                <small>{userName || 'Create Acccount'}</small>
              </button>
            )}
          </div>

          <div className='navbar_box_right_open' onClick={() => setOpen(true)}>
            <Image src={images.open} alt='open' width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Model COmponent */}
      {!openModel && (
        <div className='modelBox'>
          <Model
            openModel={setOpenModel}
            title='Welcome to'
            head='Chat Buddy'
            info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            smallInfo='Kindly select your name...'
            image={images.hero}
            functionName={createAccount}
          />
        </div>
      )}
      {error == '' ? '' : <Error error />}
    </div>
  );
};

export default Navbar;
