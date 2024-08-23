import { createContext, useState } from "react";

export const LoggedContext = createContext();

const LoggedContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [userName, setuserName] = useState("");

  const [name, setName] = useState("");

  const [surname, setSurname] = useState("");

  const [country, setCountry] = useState("");

  const [city, setCity] = useState("");

  const [phone, setPhone] = useState();

  const [cap, setCap] = useState();

  const [address, setAddress] = useState("");

  const [number, setNumber] = useState("");

  const [select, setSelect] = useState();

  const handleLogged = () => setLogged(!logged);

  let obj = {
    handleLogged,
    logged,
    userName,
    setuserName,
    password,
    setPassword,
    email,
    setEmail,
    select,
    setSelect,
    name,
    setName,
    surname,
    setSurname,
    country,
    setCountry,
    city,
    setCity,
    phone,
    setPhone,
    cap,
    setCap,
    address,
    setAddress,
    number,
    setNumber,
  };

  return (
    <LoggedContext.Provider value={obj}>{children}</LoggedContext.Provider>
  );
};

export default LoggedContextProvider;
