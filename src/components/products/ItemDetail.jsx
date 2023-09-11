import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({
    id,
    name,
    brand,
    model,
    version,
    price,
    image,
    stock,
}) => {
    const [newStock, setNewStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    const { cart, addToCart } = useCart();

    const onAdd = (quantity) => {
        setNewStock(newStock - quantity);
        setItemAdded(!itemAdded);

        const itemToAdd = { id, name, price, quantity, image };

        addToCart(itemToAdd);
    };

    console.log(cart);

    // TODO : hay que mantener el stock actualizado (uso localStorage? o mejor espero a FireBase? :) )

    return (
        <div className="backgroundSVG flex flex-col w-[450px] px-4 py-6 rounded-2xl justify-center items-center border-2 border-ligthOrange bg-[url(../../assets/images/backgroud.svg)]">
            <div className="px-4">
                <div className="w-[400px] h-[320px] m-auto">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="rounded-3xl w-[100%] h-[100%] object-contain p-2 mix-blend-multiply"
                    />
                    <Divider className="my-2" />
                </div>
                <div className="mt-4 text-greenBlue font-hindMadurai">
                    <h3 className="font-medium text-4xl mb-5 text-center">
                        {name}
                    </h3>
                    <p className="mb-1 text-lg">
                        <strong>Brand: </strong>
                        {brand}
                    </p>
                    <p className="mb-1 text-lg">
                        <strong>Model: </strong>
                        {model}
                    </p>
                    <p className="mb-1 text-lg">
                        <strong>Version: </strong>
                        {version}
                    </p>
                    <p className="mb-1 text-lg">
                        <strong>Stock: </strong>
                        {newStock}
                    </p>
                </div>

                <div className="mt-6">
                    <h4 className="text-4xl text-greenBlue font-semibold mb-5">
                        ${price}
                    </h4>
                </div>
                {!itemAdded ? (
                    <ItemCount stock={newStock} onAdd={onAdd} />
                ) : (
                    <div className="flex">
                        <Link
                            to={`/cart`}
                            className="border border-orange rounded-[8px] w-full uppercase text-greenBlue text-center font-medium py-1 hover:bg-ligthOrangeOpacity"
                        >
                            Finalizar Compra
                        </Link>
                    </div>
                )}
                <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </div>
    );
};

export default ItemDetail;
