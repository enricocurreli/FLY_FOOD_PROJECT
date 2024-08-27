import React from 'react'

const Option = ({children, disabled, required, selected }) => {
  return (
    <option disabled={disabled} required={required} selected={selected}> {children} </option>
  )
}

export default Option