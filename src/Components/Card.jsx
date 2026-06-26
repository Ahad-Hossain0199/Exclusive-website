import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";



const Card = ({ image, discount, title, currentPrice, previousPrice, review }) => {
    return (
        <>
            <div>
                <div className='w-67.5 rounded-sm group '>
                    <div className='relative'>
                        <img src={image} alt="" />
                        <div className='w-full bg-secondary font-medium text-white text-center py-2 absolute left-0 bottom-0 rounded-b-sm opacity-0 group-hover:opacity-120 transition-all linear duration-300 cursor-pointer'>
                            Add To Cart
                        </div>
                        <div className='absolute top-3 right-3'>
                            <div className='bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                                <GoHeart />
                            </div>
                            <div className='bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center mt-2'>
                                <IoEyeOutline />
                            </div>
                        </div>
                        {discount && (
                            <div className='w-14 py-1 px-3 bg-primary rounded-sm text-[12px] font-normal text-[#FAFAFA] absolute top-3 left-3'>
                                -${discount}
                            </div>
                        )}
                    </div>
                </div>
                <h3 className='font-medium text-[16px] text-secondary mt-4'>{title}</h3>
                <div className='my-2 flex gap-3'>
                    <h5 className='font-medium text-[16px] text-primary'>${currentPrice}</h5>
                    <h5 className='font-medium text-[16px] text-[#695d5de3] line-through'>${previousPrice}</h5>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex'>
                        <TiStarFullOutline className='text-[#FFAD33] text-[20px]' />
                        <TiStarFullOutline className='text-[#FFAD33] text-[20px]' />
                        <TiStarFullOutline className='text-[#FFAD33] text-[20px]' />
                        <TiStarFullOutline className='text-[#FFAD33] text-[20px]' />
                        <TiStarFullOutline className='text-[#BFBFBF] text-[20px]' />
                    </div>
                    <span className='font-semibold text-[14px] text-[#909090]'>({review})</span>

                </div>
            </div>
        </>
    )
}

export default Card
