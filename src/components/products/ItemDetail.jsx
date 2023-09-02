import React from "react";
import ItemCount from "./ItemCount";
import {Divider} from "@nextui-org/react";

const ItemDetail = ({ name, brand, model, version, price, image }) => {
    return (
        <div className="flex flex-col w-[450px] px-4 py-6 rounded-2xl justify-center items-center border-2 border-ligthOrange">
            <div className="px-4">
                <div className="w-[400px] h-[320px] m-auto">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="rounded-3xl w-[100%] h-[100%] object-contain p-2"
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
                </div>
                <div className="mt-6">
                    <h4 className="text-4xl text-greenBlue font-semibold mb-5">
                        ${price}
                    </h4>
                </div>
                <ItemCount />
            </div>
        </div>
    );
};

export default ItemDetail;
