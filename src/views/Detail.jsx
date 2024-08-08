import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams()
    
    const [post, setPost] = useState();
  
    const getPost = async () => {
      const promise = await fetch("/public/data.json");
      console.log(promise);
      
      const json = await promise.json();
      setPost(json);
  
    };
  
    useEffect(() => {
      getPost();
    }, []);


    
  
  return (
    <div>

      

    </div>
  )
}

export default Detail