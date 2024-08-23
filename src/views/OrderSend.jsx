import { useContext } from "react"
import { CartContext } from "../contexts/Context"
import { LoggedContext } from "../contexts/ContextLog"
import Section from "../components/Section/Section"
import Paragraph from "../components/Paragraph/Paragraph"
import Img from "../components/Img/Img"


const OrderSend = ({user}) => {

    const { cart } = useContext(CartContext);
    // const {
    //     userName,
    //     setuserName,
    //     email,
    //     setEmail,
    //     name,
    //     setName,
    //     surname,
    //     setSurname,
    //     country,
    //     setCountry,
    //     city,
    //     setCity,
    //     phone,
    //     setPhone,
    //     cap,
    //     setCap,
    //     address,
    //     setAddress,
    //     number,
    //     setNumber
    //   } = useContext(LoggedContext);
  
  return (

    <div className="my-36 md:mt-52 md:mb-[302px] lg:mt-52 lg:mb-[521px]" >

      <Section textFirst={"Ordine"} textSecond={"Completato"} classes={"flex justify-center mt-28"} articleProps={"text-center text-2xl  px-12 py-3 mt-10  overflow-hidden"} tFstClasses={"text-6xl text-center font-medium"} tSndClasses={"text-6xl font-extralight px-6"}>

        <Paragraph classes={"text-center text-2xl font-light lg:px-12 py-3 mb-5"}>Grazie mille per aver ordinato dal nostro sito! <br /> Siamo felici di informarti che il tuo ordine è in arrivo e presto sarà consegnato a casa tua. </Paragraph>
      
      </Section>


      <Section classes={"flex justify-center"} articleProps={"text-center text-2xl  px-12 py-3 mt-10  overflow-hidden"} tFstClasses={"text-6xl text-center font-medium"} tSndClasses={"text-6xl font-extralight px-6"}>

      
        
      </Section>

    </div>
  )
}

export default OrderSend

