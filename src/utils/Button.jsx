import React from 'react'

const Button = (prop) => {
    return (
        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-300' onClick={prop.onClick}>{prop.name}</button>
    )
}

export default Button