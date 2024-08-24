import { useContext } from "react";
import routes from "../../router/routes";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/Context";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
// import logo from "../../assets/react.svg"

const Cart = ({logged}) => {

  const { cart, removeFromCart, handleCart } = useContext(CartContext);

  

  return (


    <dialog id="myCart" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <form method="dialog" >
            {/* if there is a button in form, it will close the modal */}
            <Button classes={" btn btn-sm btn-circle btn-ghost text-slate-800 absolute  right-3 top-3 bg-trasparent "} text={"x"} />
          </form>
          <Title tag={"h3"} classes={"font-bold text-lg p-3"}>CARRELLO</Title>
          {cart &&
            cart.map((post) => {
              return (
                <>
                  <div className="modal-box shadow-none max-w-5xl" key={post.id}>
                    <div className=" p-3 w-full grid md:grid-cols-5 justify-center">
                      <div className=" grid md:grid-cols-1 justify-center ">  
                        <Title tag={"h3"} classes={"card-title text-center"}>{post.nome}</Title>
                      </div>
                        <div className="grid md:grid-cols-1">
                          <Title tag={"h5"} classes={"font-semibold mt-2 p-3 text-center"}>Quantità:{" "}
                              <div className="font-normal p-3 ">
                              {post.quantita} x {post.prezzo}€{" "}
                              </div>{" "}
                          </Title>
                        </div>
                        <div className="grid md:grid-cols-1 justify-center">
                          <Title tag={"h5"} classes={"font-semibold mt-2 p-3"}> Totale:{" "}
                            <div className="font-normal p-3">{post.totale}€</div>{" "}
                          </Title>
                        </div>
                        <div className="p-3 grid md:grid-cols-1 content-center">
                        <Button text={"-"} callback={() => removeFromCart(post)} classes={" text-[#0a446bc7] text-xl border-2 md:w-2/4"}/>
                        </div>
                        <div className="p-3 grid md:grid-cols-1 content-center">
                        <Button text={"+"} classes={" text-[#0a446bc7] text-xl border-2 md:w-2/4"} callback={() => handleCart(post)}/>
                        </div>
                    </div>
                  </div>
                </>
              );
            })}
                <Title tag={"h5"} classes={"mt-10 p-4 font-normal "}>  TOTALE:{" "}
                    <span className="font-semibold text-2xl">
                    {cart.reduce((acc, item) => acc + item.totale, 0)}€
                    </span>{" "}
                </Title>
            <div className="modal-action">

            {
              cart.length !=0 && logged ? 
              <Link to={routes.checkOut}>
                <Button text={"Conferma Ordine"} classes={"bg-orange-400"} />
              </Link> : null
            }
          
            
          </div>
        </div>
      </dialog>
  )
}

export default Cart