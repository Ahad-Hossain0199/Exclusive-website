import React from 'react'
import { FaArrowRight } from "react-icons/fa6";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -top-25! right-8! ${className} `}
      onClick={onClick}
    >
      <div className='  w-11.5 h-11.5 rounded-full flex justify-center items-center bg-secondary/10'>
        <FaArrowRight
          className='text-black text-[24px]' />
      </div>
    </div>

  );
}
export default SampleNextArrow
