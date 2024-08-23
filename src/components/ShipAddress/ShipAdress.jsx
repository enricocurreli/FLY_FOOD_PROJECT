import { useContext, useState } from "react";
import Button from "../Button/Button";
import { LoggedContext } from "../../contexts/ContextLog";
import { CartContext } from "../../contexts/Context";
import Title from "../Title/Title";
import { Link} from "react-router-dom";
import routes from "../../router/routes";

const ShipAdress = () => {
  const { cart } = useContext(CartContext);
  const {
    userName,
    setuserName,
    email,
    setEmail,
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
    setNumber
  } = useContext(LoggedContext);

  const [user, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = {

        name,
        surname,
        userName,
        phone,
        country,
        city,
        cap,
        address,
        number

    }

    setUser(account);
    

  };

 
  
  

  return (
    <>
      <form className="container w-[70%]" onSubmit={handleSubmit}>
        <label
          className="input input-bordered flex items-center gap-2 my-2 mb-4"
          htmlFor="email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </label>
        {/* USERNAME */}
        <label
          className="input input-bordered flex items-center gap-2 my-2 mb-4"
          htmlFor="userName"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="userName"
            type="text"
            className="grow"
            placeholder="Username"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            disabled
          />
        </label>
        {/* NAME */}
        <label
          className="input input-bordered flex items-center gap-2 my-2 mb-4"
          htmlFor="name"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="name"
            type="text"
            className="grow"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* SURNAME */}
        <label
          className="input input-bordered flex items-center gap-2 my-2 mb-4"
          htmlFor="surname"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="surname"
            type="text"
            className="grow"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>

        <div className="flex flex-col lg:justify-between gap-3 lg:flex-row mt-2 mb-4">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            <option disabled selected>
              Country
            </option>
            <option>Italy</option>
            <option>England</option>
            <option>Germany</option>
            <option>France</option>
            <option>Spain</option>
            <option>Belgium</option>
            <option>Portugal</option>
          </select>
          <label
            className="input input-bordered flex items-center gap-2 "
            htmlFor="CAP"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 h-4 w-4 opacity-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <input
              id="CAP"
              type="number"
              className="grow"
              placeholder="CAP"
              onChange={(e) => setCap(e.target.value)}
              value={cap}
            />
          </label>
        </div>
        <div className="flex flex-col lg:justify-between gap-2 lg:flex-row mt-2">
          <label
            className="input input-bordered flex items-center gap-2 "
            htmlFor="City"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 h-4 w-4 opacity-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <input
              id="City"
              type="text"
              className="grow"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </label>

          <label
            className="input input-bordered flex items-center gap-2 "
            htmlFor="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              id="Phone"
              type="number"
              className="grow"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </label>
        </div>
        <div className="flex flex-col lg:justify-between gap-2 lg:flex-row mt-2">
          <label
            className="input input-bordered flex items-center gap-2 "
            htmlFor="Address"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 h-4 w-4 opacity-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <input
              id="Address"
              type="text"
              className="grow"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </label>

          <label
            className="input input-bordered flex items-center gap-2 "
            htmlFor="Number"
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 h-4 w-4 opacity-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>

            <input
              id="Number"
              type="number"
              className="grow"
              placeholder="Nº"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </label>
        </div>
        <div className="mt-10">
          <Title tag={"h5"} classes={"mt-10 p-4 font-normal "}>
            {" "}
            TOTALE:{" "}
            <span className="font-semibold text-2xl">
              {cart.reduce((acc, item) => acc + item.totale, 0)}€
            </span>{" "}
          </Title>
        </div>
        <div className="flex justify-end mt-10">
          <Link to={routes.OrderSend} user={user}>
            <Button
                text={"Invia Ordine"}
                classes={"bg-orange-400 w-full"}
            />
          </Link>
        </div>
      </form>
    </>
  );
};

export default ShipAdress;
