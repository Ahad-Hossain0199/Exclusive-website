import React from 'react'
import SecHead from './SecHead'
import Button from './Button';
import music_img from '../assets/music_img.png';
import CountDown from './CountDown';


const Music = () => {
    return (
        <div>
            <section className='mt-30'>
                <div className="container">
                    <div className='relative'>
                        <img src={music_img} alt="" />
                        <div className='absolute top-17.5 left-14'>
                            <SecHead
                                showBox={false}
                                subtitle="Categories"
                                subtitleClassName="text-[#00FF66]! "
                                title="Enhance Your Music Experience"
                                className="text-[#FAFAFA] text-[48px] w-100 leading-15 my-8"
                            />
                            <CountDown 
                            className='w-15.5 h-15.5 rounded-full bg-white flex flex-col justify-center items-center ' 
                            classNameDay="text-[16px]! font-semibold!"
                            showColon={false}
                            />
                            <div>
                                <Button className="bg-[#00FF66]! mt-10">Buy Now!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Music
