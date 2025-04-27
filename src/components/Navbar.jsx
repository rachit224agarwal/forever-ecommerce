import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <img src={assets.logo} className='w-36' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1 ' >
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/Collection' className='flex flex-col items-center gap-1 ' >
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/About' className='flex flex-col items-center gap-1 ' >
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/Contact' className='flex flex-col items-center gap-1 ' >
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <img src={assets.profile_icon} className='w-4 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                    <div className='flex flex-col gap-2 w-36 py-3 px-3 bg-gray-100 transition-all duration-200 ease-in-out'>
                        <p className='cursor-pointer text-gray-500 hover:text-black'>My Profile</p>
                        <p className='cursor-pointer text-gray-500 hover:text-black'>Orders</p>
                        <p className='cursor-pointer text-gray-500 hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/Cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='cursor-pointer w-5 sm:hidden' alt="" />

        </div>
        {/* This div is for smaller screens menu bar */}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border cursor-pointer' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border cursor-pointer' to='/Collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border cursor-pointer' to='/About'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border cursor-pointer' to='/Contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
