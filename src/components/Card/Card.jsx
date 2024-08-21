import { useContext } from "react";
import Button from "../Button/Button";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "../Modal/Modal";
import './Card.css'


const Card = ({ post, btnText, classes }) => {
  
   

  const handleModal  = ()=> document.getElementById(`${post.id}`).showModal()

  const { ingredienti } = post;
 
  let textClose = <IoCloseOutline />;


  
  return (
    <div className="w-full md:w-1/5 m-14 md:m-20 flex justify-center md:justify-between myShadow">
      <div className={"card bg-base-100 image-full w-full  hover:scale-110 transition-all "}>
        <figure>
          <img src={post.img} alt="imgCard" />           
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{post.categoria}</div>
          <h2 className="card-title">{post.nome}</h2>
          <p>{post.anteprima}</p>
          <div className="card-actions justify-start">

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <Button callback={ handleModal} text={btnText}></Button>

            <Modal post={post} ingredienti={ingredienti} textClose={textClose} />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
