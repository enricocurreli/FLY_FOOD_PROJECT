import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import routes from "../../router/routes";
import { LoggedContext } from "../../contexts/ContextLog";
import { useContext } from "react";
import Button from "../Button/Button";

const DropLog = () => {
  const {
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
  } = useContext(LoggedContext);

  const handleSignOut = () => {
    handleLogged(false);
    setEmail("");
    setuserName("");
    setPassword("");
    setSelect(null);
  };

  return (
    <div className="dropdown dropdown-hover  ">
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent border-none p-0 hover:bg-transparent hover:scale-110"
      >
        <Avatar />{" "}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu  bg-orange-400 rounded-box z-[1] w-52 p-2 shadow"
      >
        {!logged ? (
          <li>
            <Link to={routes.login}>
              <Button classes={"hover:scale-105 scale-90"} text={"Login"} />
            </Link>
          </li>
        ) : (
          <li>
            {" "}
            <Button
              classes={"hover:scale-90 scale-75"}
              text={"SignOut"}
              callback={() => handleSignOut()}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default DropLog;
