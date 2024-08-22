import { createContext, useState} from "react";

export const LoggedContext = createContext();



const LoggedContextProvider = ({children}) => {
  
    const[logged, setLogged] = useState(false)

    const[password, setPassword] = useState("")

    const[email, setEmail] = useState("")

    const[userName, setuserName] = useState("")

    const [select, setSelect] = useState()

    const handleLogged = ()=> setLogged(!logged);

    let obj={ handleLogged, logged, userName, setuserName,  password, setPassword, email, setEmail, select, setSelect}
  
    return (
    
        <LoggedContext.Provider value={obj}>
            {children}
        </LoggedContext.Provider>
  )
}

export default LoggedContextProvider