import React from 'react'
import HomeImage from '../assets/pc_home.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return <div name ="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row'>
              <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white pt-11 '>
                  I'm Matías Navarro
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                  I have 2 year of experience building and designing diferents webs.
                  Currently, I love to work web application using technologies like Html, Css, Javascript, React, Tailwind, Vite and designing webs using tools like Figma and AdobeXD.
                </p>

                <div>
                  <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                    <span className='hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                  </button>
                </div>
              </div>
              <div >
                <img src={HomeImage} alt="pc image" className='mx-auto w-2/3 transform -scale-x-100 md:w-2/2' />
              </div>
            </div>
        </div>;
}

export default Home