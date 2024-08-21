import { useEffect, useRef, useState } from "react";



const useScroll = () => {
  
    const [scrollY, setScrollY] = useState(false);
    const ref = useRef()

    const handleScroll = () => {
        setScrollY(window.scrollY)
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
    }, []);
  

    return [ref,scrollY];
}

export default useScroll