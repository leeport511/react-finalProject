import React from "react";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "./CartItem";
import { Button } from "@nextui-org/react";
import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { cart, removeCartList, totalPrice } = useCart();

    return (
        <>
            {cart.length !== 0 ? (
                <section className="flex flex-col backgroundSVG-home home-height scroll-smooth overflow-auto">
                    <div className="flex justify-center items-center gap-x-6">
                        <h3 className="text-center uppercase tracking-widest text-4xl text-greenBlue font-bold my-8">
                            Shopping Cart
                        </h3>
                        <div className="w-16">
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
                    <div className="flex justify-between mx-28 mt-8">
                        <Button
                            variant="flat"
                            className="bg-ligthOrangeOpacity font-hindMadurai font-medium tracking-wider text-greenBlue text-md"
                            onClick={removeCartList}
                        >
                            Clean Shopping Cart
                        </Button>
                        <p className="uppercase font-hindMadurai font-medium text-2xl text-greenBlue tracking-wider">
                            to pay:{" "}
                            <span className="text-3xl">
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
                    <div className="flex justify-center mt-20">
                    <Button className="">
                        <Link to={'/checkout'}>Pre-order</Link>
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
