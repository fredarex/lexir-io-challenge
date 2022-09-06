import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { blackLogo, carticon, usericon, whiteLogo } from 'src/constant/images';
function Header() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed bg-white z-50 w-full border-b-2 shadow'>
        <div className='max-w-[1280px] flex items-center justify-between m-auto p-8'>
            {/* logo */}
            <div className="">
                <Image src={blackLogo} alt='' width={103} height={24} />
            </div>

            {/* Nav link  */}
            <div className="hidden md:flex">
                <ul className='flex font-medium'>
                    <li className='mr-10'>
                        {/* name */}
                        <Link href={'/'}>PRODUCTS</Link>
                    </li>
                    <li className='mr-10'>
                        {/* name */}
                        <Link href={'/'}>BRANDS</Link>
                    </li>
                    <li className='flex mr-10'>
                        {/* icon */}
                        <Image src={usericon} className='mr-1' />
                        <span className='ml-[10px]'>
                            <Link  href={'/'}>SIGN IN</Link>
                        </span>
                        {/* name */}
                    </li>
                    <li className='flex'>
                        {/* icon */}
                        <Image src={carticon}/>
                        {/* name */}
                        <span className='ml-[10px]'>
                            <Link  href={'/'}>CART</Link>
                        </span>
                    </li>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose className='cursor-pointer' size={20} /> : <AiOutlineMenu className='cursor-pointer' size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full  bg-primary ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className="mt-10 ml-4">
                    <Image src={whiteLogo} alt='' width={103} height={24} />
                </div>
                <ul className=' text-white'>
                    <li className='p-4'>
                        {/* name */}
                        <Link href={'/'}>PRODUCTS</Link>
                    </li>
                    <li className='p-4'>
                        {/* name */}
                        <Link href={'/'}>BRANDS</Link>
                    </li>
                    <li className='flex items-center p-4'>
                        {/* icon */}
                        <FaUserCircle />
                        <span className='ml-[10px]'>
                            <Link  href={'/'}>SIGN IN</Link>
                        </span>
                        {/* name */}
                    </li>
                    <li className='flex items-center p-4'>
                        {/* icon */}
                        <FaShoppingCart />
                        {/* name */}
                        <span className='ml-[10px]'>
                            <Link  href={'/'}>CART</Link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header