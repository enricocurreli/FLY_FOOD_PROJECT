import { useContext } from "react";
import Title from "../components/Title/Title";
import { LoggedContext } from "../contexts/ContextLog";
import { CartContext } from "../contexts/Context";
import Button from "../components/Button/Button";
import { FaTrashAlt } from "react-icons/fa";
import Paragraph from "../components/Paragraph/Paragraph";
import Img from "../components/Img/Img";
import Avatar from "../components/Avatar/Avatar";
import ShipAdress from "../components/ShipAddress/ShipAdress";


const CheckOut = () => {
  
  const {
    handleLogged,
    logged,
    userName,
    setuserName,
    password,
    setPassword,
    email,
    setEmail,
  } = useContext(LoggedContext);


  const { cart} = useContext(CartContext);

  


  return (
    <div className="md:my-52 my-40  grid md:grid-cols-2 ">
    
      <div className="md:w-50%">
      <Title tag={"h3"} classes={"text-4xl text-center font-medium mb-20"}> Rivedi <span className="text-4xl font-extralight">Ordine</span></Title>

      {cart &&
        cart.map((post) => {
          return (
            <>
              <div className="shadow-none max-w-5xl" key={post.id}>
                <div className=" p-3 mb-6 w-full grid lg:grid-cols-4 px-3 justify-center">
                    <Avatar classesCnt={"rounded-2xl"} src={post.img} avtClasses={"avatar lg:w-full lg:ps-2 lg:pe-3 w-60"} />
                  <div className=" grid lg:grid-cols-1 justify-center ">
                    
                    <Title tag={"h5"} classes={"font-semibold p-3 text-center lg:mt-4"}>
                    Nome:{" "}
                      <div className="font-normal px-3 ">
                      {post.nome}
                      </div>{" "}
                      
                    </Title>
                  </div>
                  <div className="grid lg:grid-cols-1">
                    <Title
                      tag={"h5"}
                      classes={"font-semibold p-3 text-center lg:mt-4"}
                    >
                      Quantità:{" "}
                      <div className="font-normal px-3 ">
                        {post.quantita} x {post.prezzo}€{" "}
                      </div>{" "}
                    </Title>
                  </div>
                  <div className="grid lg:grid-cols-1 justify-center">
                    <Title tag={"h5"} classes={"font-semibold  p-3 lg:mt-4"}>
                      {" "}
                      Totale:{" "}
                      <div className="font-normal px-3">{post.totale}€</div>{" "}
                    </Title>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="md:w-50% ">

      <Title tag={"h3"} classes={"text-4xl text-center font-medium mb-10"}> Spedizione <span className="text-4xl font-extralight">Ordine</span></Title>
      <Paragraph classes={"text-center text-xl font-light lg:px-12 py-3 mb-5"}>Inserisci i dati per la spedizione</Paragraph>
      
        <div className="flex justify-center sticky top-40 ">
          <ShipAdress />
        </div>
      </div>
        
    </div>
  );
};

export default CheckOut;
