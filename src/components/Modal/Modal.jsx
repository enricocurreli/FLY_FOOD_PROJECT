import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/Context";


const Modal = ({post, ingredienti, textClose}) => {

    const {handleCart} = useContext(CartContext);

  return (

    <dialog
    id={post.id}
    className="modal  text-black"
  >
    <div className="modal-box ">
      <div className="card-body p-2">
        <h3 className="card-title">{post.descrizione}</h3>
        <h5 className="font-semibold mt-2">Ingredienti: </h5>
        <div className="flex justify-between items-center ">
        <ul>
          {ingredienti.map((el, i) => {
            return <li key={i}>{i +1}. {el}</li>;
          })}
        </ul>
        <figure className="d-flex justify-end">
          <img src={post.img} alt="imgCard" className="w-60 rounded-lg" />           
        </figure>
        </div>
        <h5 className="font-semibold mt-2">Prezzo: <span className="font-normal">{post.prezzo}€</span> </h5>
      </div>
      <div className="modal-action d-flex justify-between">
      <Button text={"Aggiungi"} callback={() => handleCart(post)}/>
        <form method="dialog" >
          {/* if there is a button in form, it will close the modal */}
          <Button text={textClose} classes={"bg-orange-400"}/>
        </form>
      </div>
    </div>
  </dialog>
  )
}

export default Modal