import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import images from '../assets';
import { ChatAppContext } from '@/context/ChatAppContext';
import Loader from './loader';

const Model = ({
  openModel,
  title,
  head,
  info,
  smallInfo,
  image,
  functionName,
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Model;
