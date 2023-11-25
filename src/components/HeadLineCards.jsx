import React from 'react'
import { Cards } from '../images'
function HeadLineCards() {
    return (
        <>
            <div className='max-w-[1340px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
                {/* Cards */}
                {Cards.map((card, index) => (
                    < div key={index} className='rounded-xl relative' >
                        {/* Overlays */}
                        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
                            <p className='px-2 font-bold text-2xl pt-4'>{card.name}</p>
                            <p className='px-2'>{card.paragraph}</p>
                            <button className='absolute bottom-3 hover:bg-orange-500 bg-white text-black mx-2 border-white font-medium duration-300 hover:text-white'>{card.order}</button>
                        </div>
                        <img src={card.img} alt={card.name} className='max-h-[200px] md:max-h-[200px] rounded-xl w-full object-cover ' loading='lazy' />
                    </div >
                ))
                }
            </div>
        </>
    )
}

export default HeadLineCards