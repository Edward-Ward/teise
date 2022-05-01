import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-medium'>
      <h1 className='w-full text-3xl font-bold text-black'><Link href="/">Teise.</Link></h1>
      <ul className='hidden md:flex'>
        <li className='transition ease-in-out text-xl p-6 hover:text-gray-500'><Link href="/">home</Link></li>
        <li className='transition ease-in-out text-xl p-6 hover:text-gray-500'><Link href="/about">about</Link></li>
        <li className='transition ease-in-out text-xl p-6 hover:text-gray-500'><Link href="/menu">menu</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} color="black"/> : <AiOutlineMenu size={30} color="black"/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-700 bg-gray-700 ease-in-out duration-500 text-white' : 'ease-in-out duration-500 fixed top-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Teise.</h1>
        <li onClick={handleNav} className='p-4'><Link href="/">home</Link></li>
        <li onClick={handleNav} className='p-4'><Link href="/about">about</Link></li>
        <li onClick={handleNav} className='p-4'><Link href="/menu">menu</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
