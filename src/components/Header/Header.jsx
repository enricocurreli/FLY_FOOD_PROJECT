import './Header.css'
import Title from "../Title/Title";
const Header = () => {
  return (
    
    <header className='mt-30 grid grid-rows-2 grid-flow-col'>

       <section className='mt-64'>
          <Title classes={"text-6xl md:text-9xl text-center text-orange-400 font-bold "} tag={"h1"}>FLY FOOD</Title>
          <Title classes={"text-3xl  md:text-5xl md:ps-96  text-center text-orange-200 font-light"} tag={"h1"}>DELIVERY</Title>
       </section>

    </header>

    
  )
}

export default Header