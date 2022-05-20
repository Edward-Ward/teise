import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-500 font-medium'>
      <h1 className='w-full text-3xl font-bold text-black'><Link href="/">Teise.</Link></h1>
      <ul className='hidden md:flex'>
        <li className='transition ease-in-out text-xl p-6 hover:text-black'><Link href="/">home</Link></li>
        <li className='transition ease-in-out text-xl p-6 hover:text-black'><Link href="/blog">blog</Link></li>
        <li className='transition ease-in-out text-xl p-6 hover:text-black'><Link href="/menu">menu</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-40'>
          {nav ? <AiOutlineClose size={30} color="white"/> : <AiOutlineMenu size={30} color="black"/>}
      </div> 
      <div className={nav ? 'fixed flex flex-col text-2xl justify-center gap-60 items-center inset-0 w-[100%] h-full bg-gray-700 ease-in-out duration-500 text-white z-10' : 'h-full w-[100%] ease-in-out duration-500 fixed top-[-100%]'}>
        <h1 className='text-3xl font-bold text-[#00df9a]'>Teise.</h1>
        <ul className="flex flex-col gap-10 tracking-wider">
          <li onClick={handleNav} className='font-semibold '><Link href="/">home.</Link></li>
          <li onClick={handleNav} className='font-semibold '><Link href="/blog">blog.</Link></li>
          <li onClick={handleNav} className='font-semibold '><Link href="/menu">menu.</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

