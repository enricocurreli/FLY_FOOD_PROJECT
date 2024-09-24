import { useState} from "react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import useFetch from "../hooks/useFetch";


const Menu = () => {
  
  const posts = useFetch("/data.json");
  const [filteredPosts, setFilteredPosts] = useState();
  
  
  // TUTTE
  const AllCategory = () => {
  
    setFilteredPosts(posts);
  };

  // PANINI
  
  const handlePanini = () => {
  
    let filtered = posts.filter((post)=> post.categoria === "Panini")
    setFilteredPosts(filtered);
  };

  // BURGER
  
  const handleBurger = () => {
  
      let filtered = posts.filter((post)=> post.categoria === "Burger")
      setFilteredPosts(filtered);
  };


  // PIZZE

  const handlePizze = () => {

    let filtered = posts.filter((post)=> post.categoria === "Pizze")
    setFilteredPosts(filtered);
  };

  // SUSHI

  const handleSushi = () => {
  
    let filtered = posts.filter((post)=> post.categoria === "Sushi")
    setFilteredPosts(filtered);
    
  };

  // PATATINE

  const handlePatatine = () => {
  
    let filtered = posts.filter((post)=> post.categoria === "Patatine")
    setFilteredPosts(filtered);
    
  };



  // GELATI 

  const handleGelati = () => {
  
    let filtered = posts.filter((post)=> post.categoria === "Gelati")
    setFilteredPosts(filtered);
    
  };



  const text1 = "Tutte";
  const text2 = "Pizze";
  const text3 = "Sushi";
  const text4 = "Patatine";
  const text5 = "Gelati";
  const text6 = "Panini";
  const text7 = "Burger";
  const btnText = <IoArrowForwardOutline />

  return (
    <>
      <div className="flex justify-center mt-32 lg:mt-56">
        <div className="container justify-center lg:justify-start flex flex-wrap">
          <h1 className="text-4xl text-center font-bold lg:px-10 xl:px-0 ">
            Popular <span className="text-4xl font-extralight">Category</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div className="md:grid md:grid-cols-7 md:gap-3 flex flex-wrap justify-center gap-2 px-5 ">
          {/* ALL */}
          <Button text={text1} classes={"bg-orange-400"} callback={AllCategory} />
          {/* PANINI */}
          <Button text={text6} classes={"bg-orange-400"} callback={handlePanini} />
          {/* BURGER */}
          <Button text={text7} classes={"bg-orange-400"} callback={handleBurger} />
          {/* PIZZE */}
          <Button text={text2} classes={"bg-orange-400"} callback={handlePizze} />
          {/* SUSHI */}
          <Button text={text3} classes={"bg-orange-400"} callback={handleSushi} />
          {/* PATATINE */}
          <Button text={text4} classes={"bg-orange-400"} callback={handlePatatine} />
          {/* GELATI */}
          <Button text={text5} classes={"bg-orange-400"} callback={handleGelati} />
        </div>
      </div>
      <div className="flex justify-center my-16 ">
        <div className="container flex justify-center flex-wrap rounded-3xl bg-orange-200 shadow-lg">

          {
            filteredPosts &&
              filteredPosts.sort((item, element) => item.prezzo - element.prezzo).map((post) => {
              return <Card post={post} key={post.id} btnText={btnText}/>
              
            })
            ||
            posts && posts.sort((item, element) => item.prezzo - element.prezzo).map((post) => {
              return <Card post={post} key={post.id} btnText={btnText}/>
            
            })
          }
        </div>
      </div>
    </>
  );
};

export default Menu;
