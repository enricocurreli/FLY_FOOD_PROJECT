import { useContext } from "react";
import Button from "../Button/Button";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "../Modal/Modal";
import './Card.css'
import Paragraph from "../Paragraph/Paragraph"
import Title from "../Title/Title";
import Img from "../Img/Img";
import { CartContext } from "../../contexts/Context";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const Card = ({ post, btnText, classes }) => {
  


  const handleModal  = ()=> document.getElementById(`${post.id}`).showModal()

  const {handleCart} = useContext(CartContext);

  const { ingredienti } = post;
 
  let textClose = <IoCloseOutline />;


  
  return (
    <div className="w-full md:w-1/5 m-14 md:m-20 flex justify-center md:justify-between myShadow">
      <div key={post.id} className={"card bg-base-100 image-full w-full  hover:scale-110 transition-all "}>
        <figure>
          <Img src={post.img} alt={"Immagine prodotto"} />           
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{post.categoria}</div>
          <Title classes={"card-title"} tag={"h2"}>{post.nome}</Title>
          <Paragraph>{post.anteprima}</Paragraph>

          <div className="card-actions justify-between">

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <Button callback={ handleModal} text={btnText} classes={"bg-orange-400"}></Button>
            <Button text={<MdOutlineAddShoppingCart />} classes={"btn bg-transparent  rounded-full text-3xl text-white border-none shadow-none hover:shadow focus:border-none active:border-none hover:border-none"} callback={() => handleCart(post)}/>
            
            <Modal post={post} ingredienti={ingredienti} textClose={textClose} />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
