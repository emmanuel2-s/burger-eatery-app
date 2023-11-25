import React, { useState } from 'react'
import Button from '../utils/Button'
import { data } from '../images'

function TopRatedFoods() {

    const [foodContent, setFoodContent] = useState(data)

    // filter by type function//
    const filterType = (category) => {
        setFoodContent(
            data.filter((item) => {
                return item.category === category
            })
        )
    };

    // filter by price function//
    const filterPrice = (price) => {
        setFoodContent(
            data.filter((item) => {
                return item.price === price
            })
        )
    }


    return (
        <>
            <div className='max-w-[1340px] mx-auto py-12 px-4'>
                <h1 className='font-bold text-orange-600 text-4xl text-center'>Top Rated Menu Items</h1>
                {/* Filtered Row */}
                <div className='flex flex-col lg:flex-row justify-between py-4'>
                    {/* Filtered by Type */}
                    <div className=''>
                        <p className='font-bold text-gray-700'>Filter by Type</p>
                        <div className='flex flex-wrap'>
                            <Button name={'All'} onClick={() => setFoodContent(data)} />
                            <Button name={'Burgers'} onClick={() => filterType("burger")} />
                            <Button name={'Pizza'} onClick={() => filterType('pizza')} />
                            <Button name={'Salads'} onClick={() => filterType('salad')} />
                            <Button name={'Chicken'} onClick={() => filterType('chicken')} />
                        </div>
                    </div>
                    {/* Filter by Price */}
                    <div>
                        <p className='font-bold text-gray-700'>Filter by Price</p>
                        <div>
                            <Button name={'$'} onClick={() => filterPrice('$')} />
                            <Button name={'$$'} onClick={() => filterPrice('$$')} />
                            <Button name={'$$$'} onClick={() => filterPrice('$$$')} />
                            <Button name={'$$$$'} onClick={() => filterPrice('$$$$')} />
                        </div>
                    </div>
                </div>

                {/* Displaying foods content */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foodContent.map((item) => (
                        <div key={item.id} className='shadow-lg hover:scale-105 duration-300 rounded-lg'>
                            <img src={item.img} alt={item.name} className='h-[200px] object-cover w-full rounded-t-lg' loading='lazy' />
                            <div className='flex justify-between items-center px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-600 text-white p-1 rounded-full'><span>{item.price}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default TopRatedFoods