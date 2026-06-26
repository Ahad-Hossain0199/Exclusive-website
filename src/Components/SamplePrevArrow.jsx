import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -top-25! left-264! ${className}`}
      onClick={onClick}
    >
      <div className=' w-11.5 h-11.5 rounded-full flex justify-center items-center bg-secondary/10'>

        <FaArrowLeft className='text-black text-[24px]' />
      </div>
    </div>
  );
}

export default SamplePrevArrow
