import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import hamburger from "../../assets/hamburger1.png";
import routes from "../../router/routes";
import { CartContext } from "../../contexts/Context";
import Button from "../Button/Button";

const Navbar = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  const prezzo = cart.map((post) => post.prezzo);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = [];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <div
        className={
          "navbar bg-cyan-900  text-zinc-100 w-full transition py-3 px-5 " +
          navbarClasses.join(" ")
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cyan-900  bg-primary text-zinc-100 rounded-box z-[1] mt-7 w-52 p-2 shadow"
            >
              <li>
                <Link to={routes.home}>HOME</Link>
              </li>
              <li>
                <Link to={routes.menu}>MENU</Link>
                {/* <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul> */}
              </li>
              {/* <li>
                <Link>CONTACT</Link>
              </li> */}
            </ul>
          </div>
          <div className="container w-32">
            <div className="grid gap-y-1 grid-cols-1 d-flex justify-items-center">
              <img src={hamburger} className="w-14 lg:block hidden" />
              <h4 className="lg:block hidden text-center">FLY FOOD</h4>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={routes.home}>HOME</Link>
            </li>
            {/* <li>
            <details>
              <summary><Link>MENU</Link></summary>
              <ul className="p-2">
                <li>
                  <a>BURGERS</a>
                </li>
                <li>
                  <a>PIZZA</a>
                </li>
              </ul>
            </details>
          </li> */}
            <li>
              <Link to={routes.menu}>MENU</Link>
            </li>
            {/* <li>
              <Link>CONTACT</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary p-3">
              {cart.length}
            </span>
            <Link
              className=" btn bg-primary rounded-full text-3xl text-white"
              onMouseOver={() => document.getElementById("myCart").showModal()}
            >
              <FaOpencart />
            </Link>
          </div>
        </div>
      </div>

      {/* CARRELLO  */}
      <dialog id="myCart" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-slate-800 absolute  right-3 top-3">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg p-3">CARRELLO</h3>
          {cart &&
            cart.map((post) => {
              return (
                <>
                  <div className="modal-box shadow-none" key={post.id}>
                    <div className=" p-2 flex justify-between">
                      <h3 className="card-title">{post.nome}</h3>
                      <h5 className="font-semibold mt-2 p-2 px-10">
                        Quantità:{" "}
                        <span className="font-normal ">
                          {post.quantita} x {post.prezzo}€{" "}
                        </span>{" "}
                      </h5>
                      <h5 className="font-semibold mt-2 p-2">
                        Totale:{" "}
                        <span className="font-normal">{post.totale}€</span>{" "}
                      </h5>
                      <div className="p-3"><Button text={"Rimuovi"} callback={() => removeFromCart(post)}/></div>
                    </div>
                  </div>
                </>
              );
            })}
          <h5 className=" mt-10 p-4 font-normal ">
            TOTALE:{" "}
            <span className="font-semibold text-2xl">
              {cart.reduce((acc, item) => acc + item.totale, 0)}€
            </span>{" "}
          </h5>

          <div className="modal-action">
            <Button text={"Conferma Ordine"} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
