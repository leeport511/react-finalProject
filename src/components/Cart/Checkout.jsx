import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useForm } from "../../hooks/useForm";
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, collection, documentId, getDocs, query, serverTimestamp, where, writeBatch } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import Swal from "sweetalert2";

const buyerData = {
    name: "",
    phone: "",
    email: "",
}

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { cart, totalPrice, removeCartList } = useCart();
    const {name, phone, email, onInputChange} = useForm(buyerData);


    const sendOrder = async () => {

        try{
            setLoading(true);

            //**create a new order with buyerData from Form, items from cart, etc...
            const newOrder = {
                buyer: {name: name, phone: phone, email: email},
                items: cart,
                totalPrice,
                date: serverTimestamp(),
            }
    
    
            //**Check stock and update if this change...
            const batch = writeBatch(db);
            const outOfStock = []; // if no stock, the item goes to this array
    
            const ids = cart.map(prod => prod.id) // get all the ids of my cart into a new array 
            console.log(ids);
    
            //Create a reference to database, only the ids i have in the cart
            const productsRef = query(collection( db, 'products' ), where( documentId(), 'in', ids ));
    
            const {docs} = await getDocs(productsRef);
    
            docs.forEach(doc => {
                const fields = doc.data();
                const stockDatabase = fields.stock;
    
                const productAddedToCart = cart.find( prod => prod.id === doc.id );
                console.log(productAddedToCart);
    
                const prodQuantity = productAddedToCart?.quantity;
    
                console.log(prodQuantity);
    
                if(stockDatabase >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDatabase - prodQuantity });
                } else {
                    outOfStock.push({ id:doc.id, ...fields })
                }
            })
    
    
    
            if (outOfStock.length === 0) {
                const orderRef = collection(db, 'orders'); //Create a new Ref for new Collection 'Orders'
    
                const { id: orderId } = await addDoc(orderRef, newOrder); //Create new Collection 'Orders'
    
                batch.commit();
                removeCartList();
                navigate('/products');
                Swal.fire({
                    
                    icon: 'success',
                    title: `Well Done`,
                    text:`Order ${orderId} has been generated successfully`,
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true,
                    customClass : {
                        title: 'swal2-title',
                        container: 'swal2-container',
                        popup: 'swal2-popup',
                        htmlContainer: 'swal2-html-container',
                    },
                    footer: `<h5 className='text-center'>TOTAL TO PAY ${totalPrice}</h5>`
                  })
            } else {
                Swal.fire({
                    
                    icon: 'error',
                    title: `Ups...`,
                    text:`The order cannot be generated because a problems in the stock...`,
                    showConfirmButton: false,
                    timer: 3000,
                    toast: true,
                    customClass : {
                        title: 'swal2-title',
                        container: 'swal2-container',
                        popup: 'swal2-popup',
                        htmlContainer: 'swal2-html-container',
                    }

                  })
                
            }

        }
            catch(err) {
                alert('Error while data was processed')
        } finally {
            setLoading(false);
        }

    }

    if (loading) {
        return <div className="flex justify-center"><Loader /></div>
    }


    

    return (
        <section>
            <div>
                <h3>Pre Order</h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="[&>label>input]:w-98">
                <label htmlFor="name">
                    name:
                    <input type="text" value={name} onChange={onInputChange} name='name' id='name'/>
                </label>
                <label htmlFor="phone">
                    phone:
                    <input type="text" value={phone} onChange={onInputChange} name='phone' id='phone'/>
                </label>
                <label htmlFor="email">
                    email:
                    <input type="email" value={email} onChange={onInputChange} name='email' id='email'/>
                </label>
                <button type="submit" onClick={sendOrder}>Buy!!!</button>
            </form>
        </section>
    );
};
