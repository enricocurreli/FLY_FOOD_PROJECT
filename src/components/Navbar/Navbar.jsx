import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Navbar.css";
import hamburger from "../../assets/hamburger1.png";
import routes from "../../router/routes";
import { CartContext } from "../../contexts/Context";
import { LoggedContext } from "../../contexts/ContextLog";
import Button from "../Button/Button";
import useScroll from "../../hooks/useScroll";
import DropLog from "../DropLog/DropLog";
import Img from "../Img/Img";
import Title from "../Title/Title";
import Cart from "../Cart/Cart";
import { BsCart3 } from "react-icons/bs";
import AvatarF from "../../assets/avatar/avatar-96-F.png";
import AvatarM from "../../assets/avatar/avatar-96-M.png";
import AvatarNT from "../../assets/avatar/avatar-96-NT.png";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { logged, userName, select } = useContext(LoggedContext);
  const [openModal, setOpenModal] = useState(true)



  const openModalCart = () => {
    
   const cartModal = document.getElementById("myCart");
    
  
   if(openModal){

    cartModal.showModal();

   }if(!openModal){

    cartModal.closeModal();
    setOpenModal(true)

   }
    
  }
  

  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 80) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // let navbarClasses = [];
  // if (scrolled) {
  //   navbarClasses.push("scrolled");
  // }
  const [scrolled, scrollY] = useScroll();

  const quantitaTot = cart.map((el) => el.quantita).reduce((a, b) => a + b, 0);

  //! scrolledY è il nome di una mia classe

  return (
    <>
      <div
        ref={scrolled}
        className={
          (scrollY > 30 ? "scrolledY " : " ") +
          " navbar bg-cyan-900  text-zinc-100 w-full transition py-3 px-5"
        }
        // + navbarClasses.join(" ")
      >
        <div className="navbar-start">
          <div className="dropdown dropdown-hover ">
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
              className="menu menu-sm dropdown-content  bg-orange-400 text-zinc-100 rounded-box z-[1] mt-7 w-52 p-2 shadow"
            >
              <li>
                <Link to={routes.home} className="linkNav">
                  HOME
                </Link>
              </li>
              <li>
                <Link to={routes.menu} className="linkNav">
                  MENU
                </Link>
                {/* <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul> */}
              </li>
              <li className="hover:bg-transparent focus:bg-transparent active:bg-transparent mt-3 grid grid-cols-2 items-center">
                {/* NAME LOG */}

                {logged ? (
                  <Title
                    tag={"h4"}
                    classes={" text-center pointer-events-none p-0 px-2"}
                  >
                    Hi, {userName}{" "}
                  </Title>
                ) : (
                  <Title
                    tag={"h4"}
                    classes={" text-center p-0 px-2  pointer-events-none"}
                  >
                    Hi, sign in
                  </Title>
                )}

                {/* AVATAR  */}

                {!logged ? (
                  <Avatar
                    src={AvatarNT}
                    classesCnt={
                      "w-12 rounded-full grid gap-y-1 grid-cols-1 d-flex justify-items-center"
                    }
                    classesImg={"bg-transparent h-11 w-full"}
                  />
                ) : null}

                {logged && select == "Maschio" ? (
                  <Avatar
                    src={AvatarM}
                    classesCnt={
                      "w-12  rounded-full grid gap-y-1 grid-cols-1 d-flex justify-items-center"
                    }
                  />
                ) : null}
                {logged && select == "Femmina" ? (
                  <Avatar
                    src={AvatarF}
                    classesCnt={
                      "w-12  rounded-full grid gap-y-1 grid-cols-1 d-flex justify-items-center"
                    }
                  />
                ) : null}
              </li>
              <li>
                <Link className="p-0">
                  {" "}
                  <DropLog />{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="container w-32">
            <div className="grid gap-y-1 grid-cols-1 d-flex justify-items-center">
              <Img
                classes={"w-14 lg:block hidden"}
                src={hamburger}
                alt={"logo"}
              />
              <Title tag={"h4"} classes={"lg:block hidden text-center"}>
                FLY FOOD
              </Title>
            </div>
          </div>
        </div>

        {/* DESKTOP */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <Link to={routes.home} className="linkNav">
                HOME
              </Link>
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
              <Link to={routes.menu} className="linkNav">
                MENU
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end pe-7">
          <div
            className={
              (scrollY > 30 ? " hidden" : " lg:block hidden") +
              " hover:bg-transparent focus:bg-transparent active:bg-transparent "
            }
          >
            {logged ? (
              <Title
                tag={"h4"}
                classes={
                  "lg:block hidden text-center pointer-events-none p-0 px-2"
                }
              >
                Hi, {userName}{" "}
              </Title>
            ) : (
              <Title
                tag={"h4"}
                classes={
                  "lg:block hidden text-center p-0 px-2  pointer-events-none"
                }
              >
                Hi, sign in
              </Title>
            )}
          </div>
          <Link className="lg:block hidden p-0 flex justify-center hover:bg-transparent focus:bg-transparent active:bg-transparent">
            {" "}
            <DropLog />{" "}
          </Link>

          <div className="indicator">
            <span className="indicator-item indicator-bottom badge bg-orange-400 border-none p-2 mb-1">
              {quantitaTot}
            </span>
            <Button
              text={<BsCart3 />}
              callback={() => openModalCart()}
              classes={
                "btn bg-transparent  rounded-full text-3xl text-white border-none shadow-none hover:shadow focus:border-none active:border-none hover:border-none"
              }
            ></Button>
          </div>
        </div>
      </div>

      {/* CARRELLO  */}

      <Cart logged={logged} openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Navbar;
