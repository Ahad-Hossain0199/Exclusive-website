import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
    return (
        <>
            <header className='bg-secondary py-3'>
                <div className="container">
                    <div className='flex justify-between text-[#FAFAFA]'>
                        <div></div>
                        <div>
                            <p className='font-normal text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <NavLink to="/shopNow" className='font-semibold text-sm ml-2'>ShopNow</NavLink></p>
                        </div>
                        <select name="" id="" className='bg-black font-normal text-sm'>
                            <option value="">English</option>
                            <option value="">Bangla</option>
                        </select>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
