import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import images from '../assets';
import { ChatAppContext } from '@/context/ChatAppContext';
import Loader from './loader';

const Model = ({
  openBox,
  title,
  head,
  info,
  smallInfo,
  image,
  functionName,
  address
}) => {
  // useState
  const [name, setName] = useState('');
  const [accountAddress, setAccountAddress] = useState('');

  const { loading } = useContext(ChatAppContext);

  return (
    <div className='model'>
      <div className='model_box'>
        <div className='model_box_left'>
          <Image src={image} alt='image' width={700} height={700} />
        </div>
        <div className='model_box_right'>
          <h1>
            {title} <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>

          {
            loading == true ? (
              <Loader />
            ) : (
              <div className='model_box_right_name'>
                <div className='model_box_right_name_info'>
                  <Image src={images.username} alt="user" width={30} height={30} />
                  <input type='text' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='model_box_right_name_info'>
                  <Image src={images.account} alt="user" width={30} height={30} />
                  <input type='text' placeholder={address || "Account Address"} onChange={(e) => setAccountAddress(e.target.value)} />
                </div>

                <div className='model_box-right_name_btn'>
                  <button onClick={() => functionName({ name, accountAddress })}>
                    {""}
                    <Image src={images.send} alt="send" width={30} height={30} />
                    {""}
                    Submit
                  </button>
                  <button onClick={() => openBox(false)}>
                    {""}
                    <Image src={images.close} alt="send" width={30} height={30} />
                    {""}
                    Cancel
                  </button>
                </div>
              </div>
            )
          }




        </div>
      </div>
    </div>
  );
};

export default Model;
