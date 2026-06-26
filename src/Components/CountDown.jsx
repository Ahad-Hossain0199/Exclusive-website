import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const CountDown = ({ className, classNameDay,showColon= true }) => {
    const conduct_date = '2026-08-30 12:00:00';
    const [count, setCount] = useState({})

    useEffect(() => {
        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)

        }, 1000)

    }, [])
    console.log(count)
    return (
        <>
            <div className='flex gap-10 items-center'>
                <div className={className}>
                    <p className='font-medium text-[12px] text-secondary font-poppins'>Days</p>
                    <h2 className={`font-bold text-[32px] font-inter ${classNameDay}`}>{count.days}</h2>
                </div>
                {
                    showColon &&
                    <span className='text-primary font-bold w-1 h-1 rounded-full'>:</span>
                }
                <div className={className}>
                    <p className='font-medium text-[12px] text-secondary font-poppins'>Hours</p>
                    <h2 className={`font-bold text-[32px] font-inter ${classNameDay}`}>{count.hours}</h2>
                </div>
                {
                    showColon &&
                    <span className='text-primary font-bold w-1 h-1 rounded-full'>:</span>
                }
                <div className={className}>
                    <p className='font-medium text-[12px] text-secondary font-poppins'>Minutes</p>
                    <h2 className={`font-bold text-[32px] font-inter ${classNameDay}`}>{count.minutes}</h2>
                </div>
                {
                    showColon &&
                    <span className='text-primary font-bold w-1 h-1 rounded-full'>:</span>
                }
                <div className={className}>
                    <p className='font-medium text-[12px] text-secondary font-poppins'>Seconds</p>
                    <h2 className={`font-bold text-[32px] font-inter ${classNameDay}`}>{count.seconds}</h2>
                </div>
            </div>

        </>
    )
}

export default CountDown
