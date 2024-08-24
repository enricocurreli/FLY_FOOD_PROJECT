import { useContext } from "react";
import routes from "../../router/routes";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/Context";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
// import logo from "../../assets/react.svg"

const Cart = ({logged, setOpenModal, openModal}) => {

  const { cart, removeFromCart, handleCart } = useContext(CartContext);

  setOpenModal(true)
  
  if(!openModal){

    return null
    
  } else{


    return (


      <dialog id="myCart" className="modal  ">
          <div className="modal-box w-11/12 max-w-4xl p-0">
            <div className="sticky top-0 z-10 bg-[#ebe3ca] p-5 grid grid-cols-2 ">
                  
                  <Title tag={"h3"} classes={"font-bold text-lg mt-5 p-3 "}>CARRELLO</Title>

                  <Title tag={"h5"} classes={"p-3 font-normal mt-5 flex justify-end"}>  TOTALE:{" "}
                    <Title tag={"h5"} classes="font-semibold text-2xl px-3 ">
                        {cart.reduce((acc, item) => acc + item.totale, 0)}€
                    </Title>
                  </Title>

              <form method="dialog " >
                <Button classes={" btn btn-sm border-none shadow text-[#0a446bc7] absolute  right-3 top-3 bg-trasparent "} text={"x"} />
              </form>
            </div>
          
             
            {cart &&
              cart.map((post) => {
                return (
                  <>
                      <div className=" p-3 w-full grid md:grid-cols-5 mt-5" key={post.id}>
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
                  </>
                );
              })}
            
                 
              <div className="modal-action mt-10 mb-16 grid grid-col-3 justify-center">
  
              {
                cart.length !=0 && logged ? 
                <Link to={routes.checkOut}>
                  <Button text={"Conferma Ordine"} classes={"bg-orange-400"} callback={()=>setOpenModal(!openModal)} />
                </Link> : null
              }
            
              
            </div>
          </div>
        </dialog>
    )


  }


 
}

export default Cart