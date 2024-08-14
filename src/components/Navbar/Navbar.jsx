import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./Navbar.css";
import hamburger from "../../assets/hamburger1.png";
import routes from "../../router/routes";

const Navbar = () => {
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
              <li>
                <Link>CONTACT</Link>
              </li>
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
            <li>
              <Link>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="indicator">
        <span className="indicator-item badge badge-secondary p-3">0</span>
          <Link className=" btn bg-primary rounded-full text-3xl text-white" onMouseOver={() => document.getElementById("myCart").showModal()}>
            <FaOpencart />
          </Link>
        </div>
        </div>
      </div>


      <dialog id="myCart" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">CART</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
