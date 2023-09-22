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
    const { addToCart } = useCart();

    const onAdd = (quantity) => {
        setNewStock(newStock - quantity);
        setItemAdded(!itemAdded);

        const itemToAdd = { id, name, price, quantity, image };

        addToCart(itemToAdd);
    };

    return (
        <div className="backgroundSVG flex flex-col w-[320px] px-2 py-3 my-6 xl:mt-0 xl:w-[450px] xl:px-4 xl:py-6 rounded-2xl justify-center items-center border-2 border-ligthOrange bg-[url(../../assets/images/backgroud.svg)]">
            <div className="px-2 xl:px-4">
                <div className="w-[220px] h-[290px] xl:w-[400px] xl:h-[320px] m-auto">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="rounded-3xl w-[100%] h-[100%] object-contain p-2 mix-blend-multiply"
                    />
                    <Divider className="my-2" />
                </div>
                <div className="mt-4 text-greenBlue font-hindMadurai">
                    <h3 className="font-medium text-2xl xl:text-4xl mb-2 xl:mb-5 text-center">
                        {name}
                    </h3>
                    <p className="mb-1 text-base xl:text-lg">
                        <strong>Brand: </strong>
                        {brand}
                    </p>
                    <p className="mb-1 text-base xl:text-lg">
                        <strong>Model: </strong>
                        {model}
                    </p>
                    <p className="mb-1 text-base xl:text-lg">
                        <strong>Version: </strong>
                        {version}
                    </p>
                    <p className="mb-1 text-base xl:text-lg">
                        <strong>Stock: </strong>
                        {newStock}
                    </p>
                </div>

                <div className="xl:mt-6 mt-3">
                    <h4 className="xl:text-4xl text-3xl text-greenBlue font-semibold mb-5">
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
                    position="top-right"
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
