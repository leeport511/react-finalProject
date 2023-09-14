import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (itemToAdd) => {
        if (!isInCart(itemToAdd.id)) {
            setCart((prev) => [...prev, itemToAdd]);

            toast.success("Product in Shopping Cart!", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            Swal.fire({
                title: 'Item Duplicated!',
                text: "Item already in shopping Cart!!!",
                icon: 'error',
                confirmButtonText: 'OK',
                toast: true,
                customClass : {
                    title: 'swal2-title',
                    container: 'swal2-container',
                    popup: 'swal2-popup',
                    htmlContainer: 'swal2-html-container',
                }
              })
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const setQuantity = () => {
        let totalQuantity = 0;

        cart.forEach((prod) => (totalQuantity += prod.quantity));

        return totalQuantity;
    };

    const totalQuantity = setQuantity();

    const setTotalPrice = () => {
        let totalPrice = 0;

        cart.forEach((prod) => (totalPrice += prod.price * prod.quantity));

        return totalPrice;
    };

    const totalPrice = setTotalPrice();

    const deleteFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const removeCartList = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                totalQuantity,
                deleteFromCart,
                removeCartList,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
