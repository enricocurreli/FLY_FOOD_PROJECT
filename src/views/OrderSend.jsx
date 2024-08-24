import { useContext } from "react";
import { CartContext } from "../contexts/Context";
import { LoggedContext } from "../contexts/ContextLog";
import Section from "../components/Section/Section";
import Paragraph from "../components/Paragraph/Paragraph";
import Img from "../components/Img/Img";
import deliveryLogo from "../assets/deliveryLogo.svg";

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
      <Section
        textFirst={"Ordine"}
        textSecond={"Completato"}
        classes={"flex justify-center mt-28"}
        articleProps={"text-center text-2xl  px-12 py-3  overflow-hidden"}
        tFstClasses={"md:text-6xl text-4xl text-center font-medium"}
        tSndClasses={"md:text-6xl text-4xl font-extralight px-6"}
      >
        <Section
          classes={"flex justify-center mt-5 "}
          articleProps={"grid grid-col-1 justify-center"}
        >
          <Img src={deliveryLogo} classes={"scale-[85%]"} />
        </Section>
        
        <Paragraph
          classes={"text-center text-2xl font-light lg:px-12 py-3 mb-5"}
        >
       N. ordine: #{numOrder}
        </Paragraph>

        <Paragraph
          classes={"text-center text-2xl font-light lg:px-12 py-3"}
        >
          Grazie mille {name}, per aver ordinato dal nostro sito! <br /> Siamo
          felici di informarti che il tuo ordine è in arrivo e presto sarà
          consegnato a casa tua.{" "}
        </Paragraph>
        <Paragraph
          classes={"text-center text-2xl font-light lg:px-12 py-3 "}
        >
        Il riepilogo dell'ordine è stato inviato all'indirizzo email:<span className="font-normal px-3  ">{email}</span>
        </Paragraph>
      </Section>
    </div>
  );
};

export default OrderSend;
