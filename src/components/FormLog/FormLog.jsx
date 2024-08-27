// import { useContext } from "react";
// import Button from "../Button/Button";
// import { LoggedContext } from "../../contexts/ContextLog";
// import { Navigate } from "react-router-dom";
// import { MdEmail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { IoKeySharp } from "react-icons/io5";
// import Form from "../Form/Form";
// import Label from "../Form/Label";
// import Input from "../Form/Input";
// import Select from "../Form/Select";
// import Option from "../Form/Option";

// const FormLog = () => {
  
//   const required = true;
//   const disabled = true;

//   const {
//     handleLogged,
//     logged,
//     userName,
//     setuserName,
//     password,
//     setPassword,
//     email,
//     setEmail,
//     setSelect,
//     select
//   } = useContext(LoggedContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogged(true);
//   };



//   return (
//     <>
//     <Form classes={"container md:w-1/3 w-[80%]"} submit={handleSubmit}>
//       {logged && <Navigate to={"/"} />}

//     <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"email"}> 
//       <MdEmail />
//         <Input 
//           id={"email"}
//           type={"email"}
//           classes={"grow"}
//           placeholder={"Email"}
//           value={email}
//           change={(e) => setEmail(e.target.value)}
//         />
//     </Label>
    
//     <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"userName"}> 
//       <FaUser />
//         <Input 
//           id={"userName"}
//           type={"text"}
//           classes={"grow"}
//           placeholder={"Username"}
//           value={userName}
//           change={(e) =>  setuserName(e.target.value)}
//         />
//     </Label>

//     <Label classes={"input input-bordered flex items-center gap-2 my-2"} htmlFor={"password"}> 
//       <IoKeySharp />
//         <Input 
//           id={"password"}
//           type={"password"}
//           classes={"grow"}
//           placeholder={"Password"}
//           change={(e) => setPassword(e.target.value)}
//         />
//     </Label>

//     <div className="flex flex-col lg:justify-between gap-3 lg:flex-row mt-2">
//       <Select classes={"select select-bordered w-full max-w-xs"} change={(e) => setSelect(e.target.value)}>
//         <Option disabled={disabled} required={required} selected={true}>Sesso</Option>
//         <Option>Maschio</Option>
//         <Option>Femmina</Option>
//         <Option>Preferisco non dirlo</Option>

//       </Select>
//       <Button text={"Invia"} classes={"bg-orange-400"}></Button>
//       </div>


//     </Form>
//     </>
//   );
// };

// export default FormLog;
