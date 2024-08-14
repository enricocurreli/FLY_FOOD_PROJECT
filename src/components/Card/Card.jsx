import React from "react";
import imgHeader from "../../assets/imgHeader.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IoCloseOutline } from "react-icons/io5";


const Card = ({ post, btnText }) => {
  
  const handleModal  = ()=> document.getElementById(`${post.id}`).showModal()
  const { ingredienti } = post;
 
  let textClose = <IoCloseOutline />;

  return (
    <div className="w-full md:w-1/5 m-14 md:m-20 flex justify-center md:justify-between">
      <div className="card bg-base-100 image-full w-full shadow-xl">
        <figure>
          <img src={imgHeader} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{post.categoria}</div>
          <h2 className="card-title">{post.nome}</h2>
          <p>{post.anteprima}</p>
          <div className="card-actions justify-start">

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <Button callback={ handleModal} text={btnText}></Button>
            <dialog
              id={post.id}
              className="modal  text-black"
            >
              <div className="modal-box ">
                <div className="card-body p-2">
                  <h3 className="card-title">{post.descrizione}</h3>
                  <h5 className="font-semibold mt-2">Ingredienti: </h5>
                  <ul>
                    {ingredienti.map((el, i) => {
                      return <li key={el.id}>{i +1}. {el}</li>;
                    })}
                  </ul>
                  <h5 className="font-semibold mt-2">Prezzo: <span className="font-normal">{post.prezzo}€</span> </h5>
                </div>
                <div className="modal-action d-flex justify-between">
                <Button text={"Aggiungi"}/>
                  <form method="dialog" >
                    {/* if there is a button in form, it will close the modal */}
                    <Button text={textClose}/>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
