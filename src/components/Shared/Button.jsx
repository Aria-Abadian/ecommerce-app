import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({text, bgColor, textColor, handler=() =>{}}) => {
  return (
    <button 
        onClick={handler}
        className={
            `${bgColor}
             ${textColor}
             cursor-pointer
             hover:scale-105
             duration-300
             py-2
             px-8
             rounded-full
             relative
             z-10
             
             `}>
              <NavLink to="/products">{text}</NavLink>
        
    </button>
  )
}

export default Button