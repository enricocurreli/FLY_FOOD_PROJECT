import { useState, useEffect } from 'react';
import Card from '../components/Card/Card'
import Button from '../components/Button/Button';
import { json } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const Menu = () => {

  const [posts, setPosts] = useState();

  const [postFilter, setPostFilter] = useState();
  
  const getPosts = async () => {

    const promise =  await fetch("/public/data.json");
    const json = await promise.json();
    setPosts(json)
    

  }

  useEffect(

    ()=>{

      getPosts()
    },[]
  )

  const AllCategory = () => {



    return(

      posts.map((post)=> {

        return <Card key={post.id} post={post} />
      }
      )
      
      
      
      
    ) 
  }

  const text1 = "Panini";
  const text2 = "Pizze";
  const text3 = "Sushi";
  const text4 = "Patatine";
  const text5 = "Gelati";
  const text6 = "Tutte";
  
  return (

    <>
    <div className='flex justify-center mt-72'>
      
      <div className='container flex flex-wrap'>

        <h1 className='text-4xl font-bold'>Popular <span className='text-4xl font-extralight'>Caterory</span></h1>


      </div>
        
    
    </div>
    <div className='flex justify-center mt-14'>
      
      <div className='container flex flex-wrap  justify-evenly'>

        <Button text={text6} AllCategory = {AllCategory}  />
        <Button text={text1} />
        <Button text={text2} />
        <Button text={text3} />
        <Button text={text4} />
        <Button text={text5} />

      </div>
        
    
    
    </div>
    <div className='flex justify-center my-16 '>
      
      <div className='container flex justify-center flex-wrap rounded-3xl bg-orange-300'>

      {/* {posts && posts.map((post) => {

        return <Card key={post.id} post={post} />

      })} */} {  AllCategory() }
      
      

      </div>
    

    </div>

  </>
  )
}

export default Menu;
