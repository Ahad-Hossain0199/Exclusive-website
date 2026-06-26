import React from 'react'

import bannar from '../assets/bannar.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";

const Bannar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='relative'>
                <ul className='absolute bottom-8 left-[50%] translate-x-[-50%]' style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='bg-[#808080] w-3 h-3 rounded-full' >
            </div>
        )
    };
    return (
        <>
            <section>
                <div className="container">
                    <div className='flex justify-between'>
                         <div className='w-[20%] border-r'>
                           
                            <ul className='text-[#000000] font-poppins text-[16px] space-y-4 mr-4'>
                                <li className='flex justify-between'>Woman’s Fashion <MdKeyboardArrowRight/></li>
                                <li className='flex justify-between'>Men’s Fashion <MdKeyboardArrowRight/> </li>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Sports & Outdoor</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                        </div>
                        <div className='w-[80%] ml-13'>
                            <Slider {...settings} className='w-full' >
                                <div>
                                    <img src={bannar} alt="" className='w-full' />
                                </div>
                                <div>
                                    <img src={bannar} alt="" className='w-full' />
                                </div>
                                <div>
                                    <img src={bannar} alt="" className='w-full' />
                                </div>
                                <div>
                                    <img src={bannar} alt="" className='w-full' />
                                </div>
                                <div>
                                    <img src={bannar} alt="" className='w-full' />
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bannar