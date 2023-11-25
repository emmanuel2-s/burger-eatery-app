import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { sideBarNav } from '../jsondata/data'
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (

        <>
            <div className='max-w-[1340px] mx-auto flex justify-between items-center p-4'>
                {/* Left side */}
                <div className='flex items-center'>
                    <div className='cursor-pointer'>
                        <AiOutlineMenu size={25} onClick={() => setNav(true)} />
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold'>Zamco<span className='font-bold text-orange-500 pl-1'>Eatery</span></h1>
                    <div className='hidden lg:flex items-center p-1 bg-gray-200 rounded-full text-[14px]'>
                        <p className='bg-black rounded-full text-white p-2'>Delivery</p>
                        <p className='p-2 font-semibold'>Pickup</p>
                    </div>
                </div>

                {/* Search input */}
                <div className=' hidden md:flex items-center bg-gray-200 px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size={25} />
                    <input type='text' placeholder='search foods' className='bg-transparent focus:outline-none p-2 w-full' />
                </div>

                {/* Cart button */}
                <div>
                    <button className='flex items-center bg-black rounded-full text-white py-2'>
                        <BsFillCartFill size={20} />
                        <span className='ml-2'>Cart</span></button>
                </div>
                {/* Mobile menu */}
            </div>
            <div className={nav ? 'bg-black/80 w-full h-screen fixed top-0 left-0 z-10' : ''}>
            </div>
            {/* Side drawer */}
            <div className={nav ? 'fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300' : 'fixed left-[-100%]'}>
                <AiOutlineClose size={25} className='absolute right-4 top-5 cursor-pointer hover:bg-gray-400 hover:rounded-full' onClick={handleNav} />
                <h1 className='text-2xl p-4 font-bold'>Zamco<span className='font-bold text-orange-500 pl-1'>Eatery</span></h1>

                {sideBarNav.map((item, index) => (
                    <div key={index}>
                        <ul className="flex flex-col p-4 text-gray-800">
                            <li className='text-xl py-2 flex items-center hover:bg-orange-500 hover:rounded-full px-2 hover:text-white cursor-pointer'>{item.icon}<span className='ml-4'>{item.name}</span></li>
                        </ul>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Navbar