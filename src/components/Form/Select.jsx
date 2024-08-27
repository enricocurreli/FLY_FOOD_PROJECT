import React from 'react'

const Select = ({children, classes, change, value}) => {
  return (
    <select className={classes} onChange={change} value={value}>
        {children}
  </select>
  )
}

export default Select