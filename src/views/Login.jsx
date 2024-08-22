import { useContext } from "react"
import FormLog from "../components/FormLog/FormLog"
import Title from "../components/Title/Title"
import { LoggedContext } from "../contexts/ContextLog"



const Login = () => {
  
  const {handleLogged, logged, userName, setuserName,  password, setPassword, email, setEmail} = useContext(LoggedContext)

  return (

      <div className="my-36 md:mt-52 md:mb-[302px] lg:mt-52 lg:mb-[521px]    ">
          <div className="flex justify-center mb-16"> 
          <Title classes={"text-6xl text-center font-medium"} tag={"h1"}>{"Login"}{" "}</Title>
        </div>
        <div className="flex justify-center">
          <FormLog></FormLog>
        </div>
    
      </div>
  )
}

export default Login