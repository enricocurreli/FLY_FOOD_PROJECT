import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    
   
    const [cart, setCart] = useState([]);
    const posts = useFetch("/src/data.json");

    const handleCart = (posts)=>{
        
            setCart((prevCart) => {
                const existingProduct = prevCart.find(item => item.id === posts.id);
                
                // Se il prodotto è già nel carrello, aumenta la quantità
                if (existingProduct) {
                    return prevCart.map(item => {

                        return item.id === posts.id ? { ...item, quantita: item.quantita + 1, totale: (item.quantita + 1) * item.prezzo } : item
                    }
                        
                    );
                    
                // Se il prodotto non è nel carrello, aggiungilo
                } else {
                    return [...prevCart, { ...posts, quantita: 1, totale: posts.prezzo }];
                }
            });
        
    }

    const removeFromCart = (posts) => {

        setCart(prevCart =>{

            const existingProduct = prevCart.find(item => item.id === posts.id);

            if (existingProduct && existingProduct.quantita > 1){

                return prevCart.map(item => {
                    
                   return item.id === posts.id ? {...item, quantita: item.quantita - 1, totale: (item.quantita - 1) * item.prezzo} : item
                })

            } else {

                return prevCart.filter(item => item.id != posts.id)
            }
        })
    }


    let obj = {
        cart,
        setCart,
        handleCart,
        removeFromCart
    }

    return (

    <CartContext.Provider value={obj}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;



