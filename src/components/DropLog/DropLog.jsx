import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import routes from "../../router/routes";
import { LoggedContext } from "../../contexts/ContextLog";
import { useContext } from "react";
import Button from "../Button/Button";
import AvatarF from "../../assets/avatar/avatar-96-F.png";
import AvatarM from "../../assets/avatar/avatar-96-M.png";
import AvatarNT from "../../assets/avatar/avatar-96-NT.png";
import Img from "../Img/Img";

const DropLog = () => {
  const {
    handleLogged,
    logged,
    setuserName,
    setPassword,
    setEmail,
    select,
    setSelect,
    setName,
    setSurname,
    setCountry,
    setCity,
    setPhone,
    setCap,
    setAddress,
    setNumber,
  } = useContext(LoggedContext);

  const handleSignOut = () => {
    handleLogged(false);
    setEmail(" ");
    setuserName(" ");
    setPassword(" ");
    setSelect(null);
    setuserName(" ");
    setName(" ")
    setSurname(" ")
    setCountry(" ")
    setCity(" ")
    setAddress(" ")
    setCap(" ")
    setAddress(" ")
    setNumber(" ")
    setPhone(" ")
  };

  return (
    <>
      <div className="dropdown dropdown-end dropdown-hover lg:block hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-transparent border-none shadow-none hover:bg-transparent hover:scale-110"
        >
          {!logged || select == "Preferisco non dirlo" ? (
            <Avatar
              src={AvatarNT}
              classesCnt={
                "w-12  rounded-full grid gap-y-1 grid-cols-1  justify-items-center"
              }
              classesImg={"bg-transparent w-full h-11"}
            />
          ) : null}

          {logged && select == "Maschio" ? (
            <Avatar
              src={AvatarM}
              classesCnt={
                "w-12  rounded-full grid gap-y-1 grid-cols-1  justify-items-center"
              }
            />
          ) : null}
          {logged && select == "Femmina" ? (
            <Avatar
              src={AvatarF}
              classesCnt={
                "w-12  rounded-full grid gap-y-1 grid-cols-1  justify-items-center"
              }
            />
          ) : null}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu  bg-[#ECE3CA] rounded-box z-[1] w-52 p-2 shadow h-24"
        >
          {!logged ? (
            <li>
              <Link
                to={routes.login}
                className="flex justify-center hover:bg-transparent"
              >
                <Button
                  classes={
                    "hover:scale-[0.75] scale-[0.80] w-full bg-orange-400"
                  }
                  text={"Login"}
                />
              </Link>
            </li>
          ) : (
            <>
              <li>
                {" "}
                <Button
                  classes={"hover:scale-75 scale-[0.80] bg-orange-400"}
                  text={"SignOut"}
                  callback={() => handleSignOut()}
                />
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="lg:hidden block">
        <Avatar />{" "}
        {!logged ? (
          <li>
            <Link to={routes.login}>
              <Button
                classes={"hover:scale-105 scale-90 bg-orange-400"}
                text={"Login"}
              />
            </Link>
          </li>
        ) : (
          <li>
            {" "}
            <Button
              classes={"hover:scale-90 scale-75 bg-orange-400"}
              text={"SignOut"}
              callback={() => handleSignOut()}
            />
          </li>
        )}
      </div>
    </>
  );
};

export default DropLog;
