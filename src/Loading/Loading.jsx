import React from 'react'
import './Loading.css'
import HeartImg from '../assets/heartimg.gif'

const Loading = () => {
  return (
    <>
    <div className='out d-flex justify-content-center align-items-center'>
        
        <div>
            <img src={HeartImg} alt="" width={400} />
            <h2 className='text-light text-center title'>Your Results are On the Way</h2>
        </div>
    </div>
    </>
  )
}

export default Loading