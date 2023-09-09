import {  createContext, useContext, useState } from "react";



export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (itemToAdd) => {
        if (!isInCart(itemToAdd.id)) {
            setCart(prev => [...prev, itemToAdd]);
            
        }else {
            console.error('Item already in shopping Cart')
        }

    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const setQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => totalQuantity += prod.quantity)

        return totalQuantity
    }

    const totalQuantity = setQuantity();

    const deleteFromCart = (id) => {

    }

    const removeCartList = () => {

    }


  return (
    <CartContext.Provider value={{cart, addToCart, totalQuantity, deleteFromCart, removeCartList}}>
        {children}
    </CartContext.Provider>
  )
}



export default CartContextProvider