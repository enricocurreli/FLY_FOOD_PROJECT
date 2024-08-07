import { useState, useEffect } from 'react';
import CardHome from '../components/CardHome/CardHome'
import { useLoaderData } from 'react-router-dom';


const Menu = () => {

  const [posts, setPosts] = useState();
  
  const getPosts = async () => {

    const promise =  await fetch("../data.json");
    const json = await promise.json();
    setPosts(json);
    
    

  }

  useEffect(

    ()=>{

      getPosts()
    },[]
  )

  

  return (

    <>
    <div className='flex justify-center mt-72'>
      
      <div className='container flex flex-wrap'>

        <h1 className='text-4xl font-bold'>Popular <span className='text-4xl font-extralight'>Caterory</span></h1>


      </div>
        
    
    </div>
    <div className='flex justify-center my-16 '>
      
      <div className='container flex justify-center flex-wrap rounded-3xl bg-orange-300'>

      {posts && posts.map((post) => {

        return <CardHome key={post.id} post={post} />

      })}
      
      

      </div>
    

    </div>

</>
  )
}

export default Menu;
