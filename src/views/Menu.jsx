import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import { json } from "react-router-dom";

// import { useLoaderData } from 'react-router-dom';

const Menu = () => {
  
  const [posts, setPosts] = useState();
  const [filteredPosts, setFilteredPosts] = useState();

  const getPosts = async () => {
    const promise = await fetch("/public/data.json");
    const json = await promise.json();
    setPosts(json);
    setFilteredPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);


  // TUTTE
  const AllCategory = () => {
  
    setFilteredPosts(posts);
  };

  // PANINI
  
  const handlePanini = () => {
  
    let filtered = posts.filter((post)=> post.categoria === "Panini")
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

  return (
    <>
      <div className="flex justify-center mt-32 lg:mt-72">
        <div className="container justify-center lg:justify-start flex flex-wrap">
          <h1 className="text-4xl text-center font-bold lg:px-10 xl:px-0 ">
            Popular <span className="text-4xl font-extralight">Caterory</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div className="container flex flex-wrap gap-9 lg:gap-1  justify-evenly">
          {/* ALL */}
          <Button text={text1} callback={AllCategory} />
          {/* PANINI */}
          <Button text={text6} callback={handlePanini} />
          {/* PIZZE */}
          <Button text={text2} callback={handlePizze} />
          {/* SUSHI */}
          <Button text={text3} callback={handleSushi} />
          {/* PATATINE */}
          <Button text={text4} callback={handlePatatine} />
          {/* GELATI */}
          <Button text={text5} callback={handleGelati} />
        </div>
      </div>
      <div className="flex justify-center my-16 ">
        <div className="container flex justify-center flex-wrap rounded-3xl bg-orange-300">
            {/* {!sushi && !pizze && !panini &&
            posts &&
            posts.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
          
            {panini &&
            posts.filter((post) => post.categoria === "Panini").map((post) => {
              return <Card key={post.id} post={post} />;
            })}
          
            {
              pizze && 
              posts.filter((post) => post.categoria === "Pizze").map((post) => {
                return <Card post={post} key={post.id}/>
              
            })}
             {
              sushi && 
              posts.filter((post) => post.categoria === "Sushi").map((post) => {
                return <Card post={post} key={post.id}/>
              
            })} */}
            {
              filteredPosts && filteredPosts.map((post) => {
                return <Card post={post} key={post.id}/>
              
            }) 
            }
        </div>
      </div>
    </>
  );
};

export default Menu;
