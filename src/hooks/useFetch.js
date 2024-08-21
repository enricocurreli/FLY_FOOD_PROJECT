import { useEffect, useState } from "react";



const useFetch = (url) => {
  
    const [posts, setPosts] = useState();
  
    const getPosts = async () => {
      const promise = await fetch(url);
      const json = await promise.json();
      setPosts(json);
     
    };
  
    useEffect(() => {
      getPosts();
    }, []);

    return posts;
}

export default useFetch