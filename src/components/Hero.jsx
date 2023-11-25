import React from 'react'
import heroBg from '../assets/imgs/burger_bg.jpg'
function Hero() {
    return (
        <div className='max-w-[1340px] mx-auto p-4'>
            <div className='max-h-[600px] relative'>
                {/* Overlay */}
                <div className='absolute h-full w-full text-gray-200 max-h-[600px] flex flex-col justify-center bg-black/50'>
                    <h1 className='p-2 md:p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The<span className='text-orange-500 pl-2'>Best</span></h1>
                    <h1 className='p-2 md:p-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500 pr-2'>Foods</span>Delivered</h1>
                </div>
                <img src={heroBg} alt='burger image background' className='max-h-[600px] object-cover w-full' />
            </div>
        </div>
    )
}

export default Hero