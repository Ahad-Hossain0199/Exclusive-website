import React from 'react'
import logo from '../assets/Logo.png';
import search from '../assets/search.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';

import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <>
            <nav className='py-8.75'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <div>
                         <NavLink to="/"> <img src={logo} alt="" /></NavLink>
                        </div>
                        <ul className='flex gap-12 text-secondary text-[16px] font-normal'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <NavLink to="Contact"> <li>Contact</li> </NavLink>
                            <li>About</li>
                            <li>Sign Up</li>
                        </ul>
                        <div className='flex items-center gap-6'>
                            <div className=' pl-5 py-2.5 pr-17.5 relative bg-[#F5F5F5]'>
                                <input type="text" placeholder='What are you looking for?' />
                                <div>
                                    <img src={search} alt="" className='absolute right-3 top-3' />
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div>
                                    <img src={heart} alt="" />
                                </div>
                                <div>
                                    <img src={cart} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border border-secondary/20 mt-4' />
            </nav>
        </>
    )
}

export default Navbar
