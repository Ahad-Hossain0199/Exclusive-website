import React from 'react'
import footerLogo from '../assets/footerLogo.png';
import GooglePlay from '../assets/GooglePlay.png';
import Qr from '../assets/Qr.svg';
import AppStore from '../assets/AppStore.png';
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuSendHorizontal } from "react-icons/lu";











const Footer = () => {
  return (
    <>
    <footer className='text-[#FAFAFA] pt-20 pb-31 bg-secondary'>
        <div className="container">
            <div className='flex justify-between'>
                <div>
                    <img src={footerLogo} alt=""/>
                    <h3 className='font-medium text-[20px] mt-6 '>Subscribe</h3>
                    <p className='text-[16px] font-normal mt-6'>Get 10% off your first order</p>
                    <div className='flex items-center py-3 pl-4 pr-3 rounded-sm mt-4 border border-b-gray-50'>
                    <input type="text" placeholder='Enter your email' />
                    <LuSendHorizontal className='text-[24px]' />

                    </div>
                </div>
                <div >
                    <h3  className='font-medium text-[20px] '>Support</h3>
                   <p className='font-normal mt-6 leading-6'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
                   <h5 className='font-normal my-4'>exclusive@gmail.com</h5>
                   <h5 className='font-normal'>+88015-88888-9999</h5>
                </div>
                <div>
                    <h3 className='font-medium text-[20px] '>Account</h3>
                    <ul className='space-y-4 text-[16px] font-normal mt-6 '>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-medium text-[20px] '>Quick Link</h3>
                    <ul className='space-y-4 text-[16px] font-normal mt-6'>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-medium text-[20px] '>Download App</h3>
                    <p className='text-[16px] font-normal text-[#fafafaa4] mt-6'>Save $3 with App New User Only</p>
                    <div className='flex gap-2 mt-2'>
                        <img src={Qr} alt="" />
                        <div className=''>
                            <img src={GooglePlay} alt="" />
                            <img src={AppStore} alt="" />
                        </div>
                    </div>
                    <div className='flex gap-6 mt-6 text-[24px]'>
                        <RiFacebookLine />
                       <FiTwitter />
                       <FaInstagram />
                      <TiSocialLinkedin />






                    </div>
                </div>

            </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
