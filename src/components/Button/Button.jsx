import React from 'react'

const Button = ({text, callback, mouseOver, classes}) => {

  
  
  return (
    
    <button className={"btn bg-orange-400 rounded-full  border-[#0a446bc7] hover:scale-110 hover:bg-[#0a446bc7] hover:text-white font-['Montserrat'] " + classes}  onClick={callback} onMouseOver={mouseOver}> {text}</button>

  )
}

export default Button;

