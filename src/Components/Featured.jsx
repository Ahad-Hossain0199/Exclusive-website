import React from 'react'
import SecHead from './SecHead'

import feature_1 from '../assets/feature_1.png';
import feature_2 from '../assets/feature_2.png';
import feature_3 from '../assets/feature_3.png';
import feature_4 from '../assets/feature_4.png';

import Service from '../assets/Services.png';
import Service_1 from '../assets/Services_1.png';
import Service_2 from '../assets/Services_2.png';


const Featured = () => {
    return (
        <>
            <section className='py-35'>
                <div className="container">
                    <div>
                        <SecHead
                            subtitle="Featured"
                            title="New Arrival"
                        />
                    </div>
                    <div className='flex justify-between mt-15'>
                        <div className='relative'>
                            <img src={feature_1} alt="" />
                            <div className=' text-[#FAFAFA] absolute bottom-8 left-8 '>
                                <h2 className='font-semibold text-[24px]'>PlayStation 5</h2>
                                <p className='text-[14px] font-normal w-55 my-4'>Black and White version of the PS5 coming out on sale.</p>
                                <a href="" className='font-normal text-[16px]'>Shop Now</a>
                            </div>
                        </div>
                        <div className='space-y-8 '>
                            <div className='relative'>
                                <img src={feature_2} alt="" />
                                <div className=' text-[#FAFAFA] absolute bottom-6 left-6 '>
                                    <h2 className='font-semibold text-[24px]'>Women’s Collections</h2>
                                    <p className='text-[14px] font-normal w-55 my-4'>Featured woman collections that give you another vibe.</p>
                                    <a href="" className='font-normal text-[16px]'>Shop Now</a>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='relative'>
                                    <img src={feature_3} alt="" />
                                    <div className=' text-[#FAFAFA] absolute bottom-6 left-6 '>
                                        <h2 className='font-semibold text-[24px]'>Speakers</h2>
                                        <p className='text-[14px] font-normal my-2'>Amazon wireless speakers</p>
                                        <a href="" className='font-normal text-[16px]'>Shop Now</a>
                                    </div>
                                </div>
                                <div className='relative'>
                                <img src={feature_4} alt="" />
                                 <div className=' text-[#FAFAFA] absolute bottom-6 left-6 '>
                                <h2 className='font-semibold text-[24px]'>Perfume</h2>
                                <p className='text-[14px] font-normal w-55 my-2'>GUCCI INTENSE OUD EDP</p>
                                <a href="" className='font-normal text-[16px]'>Shop Now</a>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-35'>
                        <div>
                            <div className='flex justify-center'>
                                <img src={Service} alt="" />
                            </div>
                            <h4 className='font-semibold text-[20px] text-secondary mt-6 mb-2'>FREE AND FAST DELIVERY</h4>
                            <p className='text-[14px] font-normal text-secondary text-center'>Free delivery for all orders over $140</p>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <img src={Service_1} alt="" />
                            </div>
                            <h4 className='font-semibold text-[20px] text-secondary mt-6 mb-2'>24/7 CUSTOMER SERVICE</h4>
                            <p className='text-[14px] font-normal text-secondary text-center'>Friendly 24/7 customer support</p>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <img src={Service_2} alt="" />
                            </div>
                            <h4 className='font-semibold text-[20px] text-secondary mt-6 mb-2'>MONEY BACK GUARANTEE</h4>
                            <p className='text-[14px] font-normal text-secondary text-center'>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Featured
