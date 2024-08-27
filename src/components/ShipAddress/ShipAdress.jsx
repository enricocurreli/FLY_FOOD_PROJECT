import { useContext, useState } from "react";
import Button from "../Button/Button";
import { LoggedContext } from "../../contexts/ContextLog";
import { CartContext } from "../../contexts/Context";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import Form from "../Form/Form";
import Label from "../Form/Label";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Option from "../Form/Option";
import Article from "../Section/Article";

const ShipAdress = () => {
  const { cart, setCart } = useContext(CartContext);
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
    setNumber,
  } = useContext(LoggedContext);

  const required = true;
  const disabled = true;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form classes={"container w-[70%]"} submit={handleSubmit}>
        {/* EMAIL */}
        <Label
          classes={"input input-bordered flex items-center gap-2 my-2 mb-4"}
          htmlFor={"email"}
        >
          <MdEmail />
          <Input
            id={"email"}
            type={"email"}
            classes={"grow"}
            placeholder={"Email"}
            value={email}
            change={(e) => setEmail(e.target.value)}
            disabled={disabled}
          />
        </Label>
        {/* USERNAME */}
        <Label
          classes={"input input-bordered flex items-center gap-2 my-2 mb-4"}
          htmlFor={"userName"}
        >
          <FaUser />
          <Input
            id={"userName"}
            type={"text"}
            classes={"grow"}
            placeholder={"Username"}
            value={userName}
            change={(e) => setuserName(e.target.value)}
            disabled={disabled}
          />
        </Label>

        {/* NAME */}

        <Label
          classes={"input input-bordered flex items-center gap-2 my-2"}
          htmlFor={"name"}
        >
          <FaUser />
          <Input
            id={"name"}
            type={"text"}
            classes={"grow"}
            placeholder={"Name"}
            value={name}
            change={(e) => setName(e.target.value)}
          />
        </Label>

        {/* SURNAME */}
        <Label
          classes={"input input-bordered flex items-center gap-2 my-2"}
          htmlFor={"surname"}
        >
          <FaUser />
          <Input
            id={"surname"}
            type={"text"}
            classes={"grow"}
            placeholder={"Surname"}
            value={surname}
            change={(e) => setSurname(e.target.value)}
          />
        </Label>

        {/* COUNTRY */}

        <Article
          classes={
            "flex flex-col lg:justify-between gap-3 lg:flex-row mt-2 mb-4"
          }
        >
          <Select
            classes={"select select-bordered w-full max-w-xs"}
            change={(e) => setCountry(e.target.value)}
            value={country}
          >
            <Option disabled={disabled} required={required} selected={true}>
              Country
            </Option>
            <Option>Italy</Option>
            <Option>England</Option>
            <Option>Germany</Option>
            <Option>France</Option>
            <Option>Spain</Option>
            <Option>Belgium</Option>
            <Option>Portugal</Option>
          </Select>

          <Label
            classes={"input input-bordered flex items-center gap-2"}
            htmlFor={"CAP"}
          >
            <FaHouseUser />
            <Input
              id={"CAP"}
              type={"number"}
              classes={"grow"}
              placeholder={"CAP"}
              change={(e) => setCap(e.target.value)}
              value={cap}
            />
          </Label>
        </Article>

        <Article
          classes={"flex flex-col lg:justify-between gap-3 lg:flex-row mt-2"}
        >
          <Label
            classes={"input input-bordered flex items-center gap-2"}
            htmlFor={"City"}
          >
            <FaHouseUser />
            <Input
              id={"City"}
              type={"text"}
              classes={"grow"}
              placeholder={"City"}
              change={(e) => setCity(e.target.value)}
              value={city}
            />
          </Label>

          <Label
            classes={"input input-bordered flex items-center gap-2"}
            htmlFor={"phone"}
          >
            <FaPhoneAlt />
            <Input
              id={"phone"}
              type={"number"}
              classes={"grow"}
              placeholder={"Phone"}
              change={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Label>
        </Article>

        <Article
          classes={"flex flex-col lg:justify-between gap-3 lg:flex-row mt-2"}
        >
          <Label
            classes={"input input-bordered flex items-center gap-2"}
            htmlFor={"City"}
          >
            <FaHouseUser />
            <Input
              id={"address"}
              type={"text"}
              classes={"grow"}
              placeholder={"Address"}
              change={(e) => setAddress(e.target.value)}
              value={address}
            />
          </Label>

          <Label
            classes={"input input-bordered flex items-center gap-2"}
            htmlFor={"phone"}
          >
            <FaHouseUser />
            <Input
              id={"Number"}
              type={"number"}
              classes={"grow"}
              placeholder={"Nº"}
              change={(e) => setNumber(e.target.value)}
              value={phone}
            />
          </Label>
        </Article>
        <div className="mt-10 grid grid-cols-2">
          <Title tag={"h5"} classes={"p-4 font-normal "}>
            {" "}
            TOTALE:{" "}
            <span className="font-semibold text-2xl">
              {cart.reduce((acc, item) => acc + item.totale, 0)}€
            </span>{" "}
          </Title>
          <Link to={routes.OrderSend}>
            <Button
              text={"Invia Ordine"}
              classes={"bg-orange-400 w-full"}
              callback={() => setCart([])}
            />
          </Link>
        </div>
      </Form>

      
    </>
  );
};

export default ShipAdress;
