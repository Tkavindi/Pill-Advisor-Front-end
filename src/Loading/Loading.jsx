import React from 'react';
import './Loading.css';
import HeartImg from '../assets/heartimg.gif';

const Loading = () => {
  return (
    <div className='out d-flex justify-content-center align-items-center'>
      <div className="loading-container text-center">
        <img src={HeartImg} alt="Loading" width={400} /> {/* Reduced size */}
        <h4 className='text-light title mt-3'>Your Results are On the Way</h4> {/* Smaller text */}
      </div>
    </div>
  );
}

export default Loading;
