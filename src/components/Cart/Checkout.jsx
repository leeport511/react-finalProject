import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import { Button, Divider} from "@nextui-org/react";
import { InputField } from "../../reusable/InputField";
import { sendOrder } from "../../services/firebase/sendOrder";

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


    const sendOrderHandler = () => {
        sendOrder(
            setLoading,
            cart,
            name,
            phone,
            email,
            totalPrice,
            navigate,
            removeCartList
        )
    }
    

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
                    <InputField 
                        type="text"
                        label="Name"
                        value={name}
                        onChange={onInputChange}
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        isRequired
                    />
                    <InputField 
                        type="text"
                        label="Phone"
                        value={phone}
                        onChange={onInputChange}
                        name="phone"
                        id="phone"
                        placeholder="Plese enter your phone number"
                        isRequired
                    />

                    <InputField 
                        type="email"
                        label="Email"
                        value={email}
                        onChange={onInputChange}
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        isRequired
                    />

                    
                    <Button
                        type="submit"
                        onClick={sendOrderHandler}
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
