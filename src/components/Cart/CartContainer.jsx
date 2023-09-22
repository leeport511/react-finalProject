import React from "react";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "./CartItem";
import { Button } from "@nextui-org/react";
import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { cart, removeCartList, totalPrice } = useCart();

    console.log(cart);

    return (
        <>
            {cart.length !== 0 ? (
                <section className="flex flex-col backgroundSVG-home home-height scroll-smooth overflow-auto animate-fade">
                    <div className="flex justify-center items-center gap-x-3 xl:gap-x-6">
                        <h3 className="text-center uppercase tracking-widest text-2xl xl:text-4xl text-greenBlue font-bold my-7 xl:my-8">
                            Shopping Cart
                        </h3>
                        <div className="xl:w-16 w-12">
                            <img
                                src="../../assets/images/carritoCompra.png"
                                alt="Shopping Cart"
                                className=""
                            />
                        </div>
                    </div>
                    <div>
                        {cart.map((cartItem) => {
                            return <CartItem key={cartItem.id} {...cartItem} />;
                        })}
                    </div>
                    <div className="flex justify-center xl:justify-between mt-6 px-10 xl:px-0 gap-x-4 xl:mx-28 xl:mt-8">
                        <Button
                            variant="flat"
                            className="bg-ligthOrangeOpacity font-hindMadurai font-medium tracking-wider text-greenBlue xl:text-md"
                            onClick={removeCartList}
                        >
                            Clean Shopping Cart
                        </Button>
                        <p className="uppercase font-hindMadurai font-medium xl:text-2xl text-greenBlue tracking-wider">
                            to pay:{" "}
                            <span className="xl:text-3xl text-xl">
                                {
                                    totalPrice.toLocaleString("es-ar", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 2,
                                    })
                                }
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center mt-16">
                    <Button variant='bordered' className="font-hindMadurai uppercase text-lg border-orange text-greenBlue font-semibold tracking-wide hover:bg-ligthOrangeOpacity mb-8">
                        <Link to={'/checkout'} >Pre order</Link>
                    </Button>
                    </div>
                </section>
            ) : (
                <CartEmpty />
            )}
        </>
    );
};

export default CartContainer;
