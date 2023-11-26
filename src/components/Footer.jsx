import React from 'react'
import moogle from '../assets/play.png'
import appstore from '../imgs/App_Store.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import insta from '../imgs/insta.png'
import facebook from '../imgs/facebook.png'

const Footer = () => {
    return (
        <div className='max-w-[1340px] mx-auto p-4 bg-gray-500'>
            <div className='w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6'>
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl px-2 font-bold'>Zamco<span className='font-bold text-orange-500 pl-1'>Eatery</span></h1>

                    <div className='flex items-center pt-8 '>
                        <a href=''><img src={moogle} alt='Download from Google playstore' className='' /></a>
                        <a href=''><img src={appstore} alt='Download from Google playstore' /></a>
                    </div>
                    <p className='text-xl font-bold pt-2 text-white'><strong>Email:</strong> zamcobesteatery@gmail.com</p>
                </div>
                <div className='md:flex flex-col justify-center items-center'>
                    <ul className="font-bold text-white p-4">
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Orders</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Favorites</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Wallet</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Help</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Promotions</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Affiliate</a></li>
                        <li><a href='' className='text hover:underline hover:text-orange-600'>Invite Friends</a></li>

                    </ul>
                </div>
                {/* newsletter */}
                <div className='p-4'>
                    <h3 className='font-bold uppercase text-white'>Newsletter</h3>
                    <div className='block sm:flex items-center'>
                        <input type="text" name="" id="" className='rounded mr-2 focus:outline-none pl-1' />
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold mt-3 md:mt-0' type='submit'>Submit</button>
                    </div>
                    <h3 className='font-bold uppercase text-white pt-3'>Follow Us On :</h3>
                    <div className='flex items-center py-2'>
                        <a href='#' className='mr-2'> <img src={facebook} /></a>
                        <a href='#' className='bg-sky-600 rounded-full p-1'><FaTwitter className='text-white' size={30} /></a>
                        <a href='#' className=' ml-2'><img src={insta} />
                        </a>
                        <a href='#' className='rounded-full p-1 bg-black ml-2'><FaTiktok className='text-white' size={30} /></a>
                    </div>
                </div>
            </div>
            <p className='font-bold text-center text-white text-base'>Copyright &copy; Zamco Eatery Limited</p>
        </div>
    )
}

export default Footer