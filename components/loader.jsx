import React from 'react';
import images from '../assets/index'

const Loader = () => {
  return <div className='loader'>
    <div className='loader_box'>
      <Image src={images.loader} alt="loader" width={100} height={100} />
    </div>
  </div>;
};

export default Loader;
