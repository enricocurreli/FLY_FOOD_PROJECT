

const Input = ({id, type, classes, placeholder,value, change, disabled} ) => {
  return (
    
    <input
        id={id}
        type={type}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={change}
        required
        disabled={disabled}
    />
  )
}

export default Input