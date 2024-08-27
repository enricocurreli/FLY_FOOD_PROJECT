

const Form = ( {children, classes, submit}) => {
  return (
    
    <form className={classes} onSubmit={submit}>

        {children}

    </form>
  )
}

export default Form