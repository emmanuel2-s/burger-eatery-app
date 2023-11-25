import React from 'react'
import { categories } from '../images'

const HotMenuItems = () => {
    return (
        <div className='max-w-[1340px] mx-auto py-12 px-4'>
            <h1 className='text-orange-600 text-4xl text-center font-bold'>Hot Rated Menu Items</h1>
            {/* categories */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((category, index) => (
                    <div key={index} className='flex justify-between items-center p-4 rounded-lg bg-gray-100'>
                        <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                        <img src={category.icon} alt={category.name} className='w-20' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotMenuItems