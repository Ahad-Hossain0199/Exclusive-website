import React from 'react'
import SecHead from './SecHead'
import CategoriesCard from './CategoriesCard'
import { CiMobile4 } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";

import { IoWatchOutline } from "react-icons/io5";

import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Categories = () => {
   
    return (
        <>
            <section className='mt-20'>
                <div className="container">
                    <div>
                        <SecHead
                            subtitle="Categories"
                            title="Browse By Category"
                        />
                    </div>
                    <div className='relative mt-15 flex justify-between'>
                       
                            <div>
                                <CategoriesCard
                                    title="Phones"
                                    icon={<CiMobile4 />}
                                />

                            </div>
                            <div><CategoriesCard
                                title="Computers"
                                icon={<CiMonitor />

                                }
                            /></div>
                            <div>
                                <CategoriesCard
                                title="SmartWatch"
                                icon={<IoWatchOutline />

                                }
                            />
                            </div>
                            <div>
                                <CategoriesCard
                                title="Camera"
                                icon={<CiCamera />
                                }
                            />
                            </div>
                            <div><CategoriesCard
                                title="HeadPhones"
                                icon={<PiHeadphonesLight />
                                }
                            /></div>
                            <div><CategoriesCard
                                title="Gaming"
                                icon={<SiYoutubegaming />
                                }
                            /></div>
                            
                            
                            
                           
                   
                    </div>
                    <hr className='border border-secondary/20 mt-17' />
                </div>
            </section>

        </>
    )
}

export default Categories
