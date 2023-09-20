import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useForm } from "../../hooks/useForm";
import { db } from "../../services/firebase/firebaseConfig";
import {
    addDoc,
    collection,
    documentId,
    getDocs,
    query,
    serverTimestamp,
    where,
    writeBatch,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import Swal from "sweetalert2";
import { Button, Divider, Input } from "@nextui-org/react";

const buyerData = {
    name: "",
    phone: "",
    email: "",
};

export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { cart, totalPrice, removeCartList } = useCart();
    const { name, phone, email, onInputChange } = useForm(buyerData);

    

    const sendOrder = async () => {
        try {
            setLoading(true);

            //**create a new order with buyerData from Form, items from cart, etc...
            const newOrder = {
                buyer: { name: name, phone: phone, email: email },
                items: cart,
                totalPrice,
                date: serverTimestamp(),
            };

            //**Check stock and update if this change...
            const batch = writeBatch(db);
            const outOfStock = []; // if no stock, the item goes to this array

            const ids = cart.map((prod) => prod.id); // get all the ids of my cart into a new array
            console.log(ids);

            //Create a reference to database, only the ids i have in the cart
            const productsRef = query(
                collection(db, "products"),
                where(documentId(), "in", ids)
            );

            const { docs } = await getDocs(productsRef);

            docs.forEach((doc) => {
                const fields = doc.data();
                const stockDatabase = fields.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );
                console.log(productAddedToCart);

                const prodQuantity = productAddedToCart?.quantity;

                console.log(prodQuantity);

                if (stockDatabase >= prodQuantity) {
                    batch.update(doc.ref, {
                        stock: stockDatabase - prodQuantity,
                    });
                } else {
                    outOfStock.push({ id: doc.id, ...fields });
                }
            });

            if (outOfStock.length === 0) {
                const orderRef = collection(db, "orders"); //Create a new Ref for new Collection 'Orders'

                const { id: orderId } = await addDoc(orderRef, newOrder); //Create new Collection 'Orders'

                batch.commit();
                removeCartList();
                navigate("/products");
                Swal.fire({
                    icon: "success",
                    title: `Well Done`,
                    text: `Order ${orderId} has been generated successfully`,
                    showConfirmButton: false,
                    timer: 3500,
                    toast: true,
                    customClass: {
                        title: "swal2-title",
                        container: "swal2-container",
                        popup: "swal2-popup",
                        htmlContainer: "swal2-html-container",
                    },
                    footer: `<h5 className='text-center'>TOTAL TO PAY ${totalPrice}</h5>`,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: `Ups...`,
                    text: `The order cannot be generated because a problems in the stock...`,
                    showConfirmButton: false,
                    timer: 3500,
                    toast: true,
                    customClass: {
                        title: "swal2-title",
                        container: "swal2-container",
                        popup: "swal2-popup",
                        htmlContainer: "swal2-html-container",
                    },
                });
            }
        } catch (err) {
            alert("Error while data was processed");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <section className="flex flex-col home-height backgroundSVG-home font-hindMadurai justify-center animate-fade">

            <div className="flex justify-evenly">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col w-[350px] flex-wrap md:flex-nowrap gap-y-4 text-greenBlue font-medium justify-center"
                >
                    <h4 className="text-center font-montserrat uppercase font-bold text-lg tracking-wider">complete to order</h4>
                    <Input
                        type="text"
                        label="Name"
                        value={name}
                        onChange={onInputChange}
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        isRequired
                        variant="underlined"
                        size="lg"
                        classNames={{
                            label: 'text-greenBlue text-md tracking-wide font-semibold',
            
                        }}
                    />

                    <Input
                        type="text"
                        label="Phone"
                        value={phone}
                        onChange={onInputChange}
                        name="phone"
                        id="phone"
                        placeholder="Plese enter your phone number"
                        isRequired
                        variant="underlined"
                        size="lg"
                        classNames={{
                            label: 'text-greenBlue text-md tracking-wide font-semibold',

                        }}
                    />

                    <Input
                        type="email"
                        label="Email"
                        value={email}
                        onChange={onInputChange}
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        isRequired
                        variant="underlined"
                        size="lg"
                        classNames={{
                            label: 'text-greenBlue text-md tracking-wide font-semibold',
                        }}
                    />
                    <Button
                        type="submit"
                        onClick={sendOrder}
                        className="mt-12 uppercase tracking-widest text-greenBlue bg-ligthOrangeOpacity text-lg font-semibold"
                    >
                        let's Buy it!!!
                    </Button>
                </form>
                <Divider orientation="vertical"/>
                <article>
                    <h3 className="text-center font-bold uppercase font-montserrat mb-6 text-greenBlue tracking-wider text-xl">purchase order</h3>
                    <div>
                        {
                            cart.map(({id, name, price, quantity}) => {
                                return (
                                    <div key={id} className='my-2 text-greenBlue font-normal border-b-3 border-ligthOrangeOpacity px-4 py-2'>
                                        <h5 className='text-lg font-semibold'>{name}</h5>
                                        <p>Price: ${price}</p>
                                        <p>Quantity:{quantity}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="text-center text-greenBlue text-xl">
                        Total: <b>{totalPrice.toLocaleString("es-ar", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 2,
                                    })}</b>
                    </p>
                </article>

            </div>
        </section>
    );
};
