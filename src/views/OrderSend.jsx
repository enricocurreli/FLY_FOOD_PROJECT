import { useContext } from "react";
import { CartContext } from "../contexts/Context";
import { LoggedContext } from "../contexts/ContextLog";
import Section from "../components/Section/Section";
import Paragraph from "../components/Paragraph/Paragraph";
import Img from "../components/Img/Img";
import deliveryLogo from "../assets/deliveryLogo.svg";
import Article from "../components/Section/Article";
import Title from "../components/Title/Title";

const OrderSend = () => {
  const { cart } = useContext(CartContext);
  const { email, name, surname, country, city, phone, cap, address, number } =
    useContext(LoggedContext);

    function order() {

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      let result = '';
      for (let i = 3; i > 0; i--) {
  
          result += characters[(Math.floor(Math.random() * characters.length))] + numbers[(Math.floor(Math.random() * numbers.length))] ;
      }
      return result;
    }

    const numOrder = order();

  return (
    <div className="my-36 md:mt-52 md:mb-[173px] lg:mt-48 lg:mb-[280px]">

      <Section classes={"flex justify-center mt-28"} >
          <Article classes={"text-center text-xl  px-12 py-3  overflow-hidden"}>

            <Title tag={"h1"} classes={"md:text-6xl text-3xl text-center font-medium"}> Ordine 
              <span className={"md:text-6xl text-3xl font-extralight px-6"}>Completato</span> 
            </Title>

           </Article>

        <Section
          classes={"flex justify-center mt-5 "}>

          <Article classes={"grid grid-col-1 justify-center"}>
             <Img src={deliveryLogo} classes={"scale-[85%]"} />

          </Article>
          <Paragraph
            classes={"text-center text-2xl px-10 font-light lg:px-12 py-3 mb-5"}
          >
        N. ordine: #{numOrder}
          </Paragraph>

          <Paragraph
            classes={"text-center text-2xl px-10 font-light lg:px-12 py-3"}
          >
            Grazie mille {name}, per aver ordinato dal nostro sito! <br /> Siamo
            felici di informarti che il tuo ordine è in arrivo e presto sarà
            consegnato a casa tua.{" "}
          </Paragraph>
          <Paragraph
            classes={"text-center text-2xl px-10 font-light lg:px-12 py-3 "}
          >
          Il riepilogo dell'ordine è stato inviato all'indirizzo email:<span className="font-normal px-3  ">{email}</span>
          </Paragraph>
        </Section>
        
      </Section>
    </div>
  );
};

export default OrderSend;
