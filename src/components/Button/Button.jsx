import React from 'react'

const Button = ({text, callback}) => {

  
  
  return (
    
    <button className="btn btn-primary rounded-full" onClick={callback} > {text}</button>

  )
}

export default Button;