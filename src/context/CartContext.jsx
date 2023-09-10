import {  createContext, useState } from "react";



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


    const setTotalPrice = () => {
        let totalPrice = 0;

        cart.forEach(prod => totalPrice += prod.price);

        return totalPrice;
    }

    const totalPrice = setTotalPrice();

    const deleteFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const removeCartList = () => {
        setCart([])
    }


  return (
    <CartContext.Provider value={{cart, addToCart, totalQuantity, deleteFromCart, removeCartList, totalPrice}}>
        {children}
    </CartContext.Provider>
  )
}



export default CartContextProvider