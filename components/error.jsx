import React from 'react';
import images from '../assets/index'

const Error = ({ error }) => {
  return <div className='error'>
    <div className='error_box'>
      <h1 className='error-h1'>
        Please fix this error and reload Browser
        {error}
      </h1>
    </div>
  </div>;
};

export default Error;
