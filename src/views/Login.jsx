import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import Title from "../components/Title/Title";
import Form from "../components/Form/Form";
import Label from "../components/Form/Label";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import Option from "../components/Form/Option";
import Button from "../components/Button/Button";
import { LoggedContext } from "../contexts/ContextLog";



  
  



const Login = () => {
  
  const required = true;
  const disabled = true;
  const {
    
    handleLogged,
    logged,
    userName,
    setuserName,
    password,
    setPassword,
    email,
    setEmail,
    setSelect,
    select

  } = useContext(LoggedContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogged(true);
  };


  return (

    <div className="my-36 md:mt-52 md:mb-[302px] lg:mt-52 lg:mb-[521px]    ">

      <div className="flex justify-center mb-16"> 
        <Title classes={"text-6xl text-center font-medium"} tag={"h1"}>{"Login"}{" "}</Title>
      </div>
      <div className="flex justify-center">

        <Form classes={"container md:w-1/3 w-[80%]"} submit={handleSubmit}>
          {logged && <Navigate to={"/"} />}

        <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"email"}> 
          <MdEmail />
            <Input 
              id={"email"}
              type={"email"}
              classes={"grow"}
              placeholder={"Email"}
              value={email}
              change={(e) => setEmail(e.target.value)}
            />
        </Label>
        
        <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"userName"}> 
          <FaUser />
            <Input 
              id={"userName"}
              type={"text"}
              classes={"grow"}
              placeholder={"Username"}
              value={userName}
              change={(e) =>  setuserName(e.target.value)}
            />
        </Label>

        <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"password"}> 
          <IoKeySharp />
            <Input 
              id={"password"}
              type={"password"}
              classes={"grow"}
              placeholder={"Password"}
              change={(e) => setPassword(e.target.value)}
            />
        </Label>

        <div className="flex flex-col lg:justify-between gap-3 lg:flex-row mt-2">
          <Select classes={"select select-bordered w-full max-w-xs"} change={(e) => setSelect(e.target.value)}>
            <Option disabled={disabled} required={required} selected={true}>Sesso</Option>
            <Option>Maschio</Option>
            <Option>Femmina</Option>
            <Option>Preferisco non dirlo</Option>
          </Select>
          <Button text={"Invia"} classes={"bg-orange-400"}></Button>
        </div>
      </Form>
    
      </div> 
    </div> 
  )
}

export default Login