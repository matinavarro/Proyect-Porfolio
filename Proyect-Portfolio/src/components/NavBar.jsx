import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
        //click state mobile false
        const [nav, setNav] = useState(false);
        //links 
        const links = [
            {
                id: 1,
                link: 'home'
            },
            {
                id: 2,
                link: 'about'
            },
            {
                id: 3,
                link: 'portfolio'
            },
            {
                id: 4,
                link: 'experience'
            },
            {
                id: 5,
                link: 'contact'
            }

        ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <img className='h-12 ml-2' src="src\assets\logoMN.png" alt="" />
        </div>

            <ul className='hidden md:flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
                ))}         
            </ul>
            {/* click state mobile true */}
            <div onClick = {() =>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden '>
                {nav ? <FaTimes size={20}/> : <FaBars size={20}/> }
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>{link}</li>
                ))}
            </ul>
            )}
    </div>
  )
}

export default NavBar;;