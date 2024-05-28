import React, { useCallback, useState } from 'react';
import {
  FaBars,
} from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }

  return (
    <nav className="fixed bg-gray-400 z-50 backdrop-filter backdrop-blur-md bg-opacity-10 w-full">
        <div className="max-w-5xl mx-auto px-4 ">
            <div className="flex items-center justify-between h-16 md:flex">
            <Link to='/'>
            <span className="text-2xl text-white font-semibold" onClick={handleScroll}>T-Minus Talent</span>
            </Link>
                <div className="flex space-x-4 text-white">
                    <Link to="/Tminus">Why T-Minus</Link>
                    <Link to="/Employers">Employers</Link>
                    <Link to="/Seekers">Job Seekers</Link>
                    <Link to="/Contact">Contact Us</Link>
                </div>
            </div>
        </div>
        <div onClick={handleNav} className="md:hidden z-10">
            <FaBars size={30} className="mr-4 cursor-ponter pl-2" />
        </div>
        {/* Mobile Menu */}
        <div 
            className={
                nav 
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" 
                : "absolute top-0 h-screen left-[-100%] ease-in"
            }
        >
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <IoIosClose className="text-4xl md:hidden" />
            </div>
            <ul className="h-full w-full text-center pt-12">
                <li className='text-2xl py-8'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-2xl py-8'>
                    <Link to='/Tminus'>Why T-Minus</Link>
                </li>
                <li className='text-2xl py-8'>
                    <Link to='/Employers'>Employers</Link>
                </li>
                <li className='text-2xl py-8'>
                    <Link to='/Seekers'>Job Seekers</Link>
                </li>
                <li className='text-2xl py-8'>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
                
        </div>
    </nav>
  );
};

export default Navbar;