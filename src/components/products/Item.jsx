import React from "react";

const Item = ({ name, image, brand, model, version, price }) => {
    return (
        <div className="border-2 border-orange rounded-3xl py-4 px-6 flex flex-col w-[350px] justify-between">
            <div>
                <div className="rounded-2xl border border-greenBlue w-[290px] h-80 m-auto">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="rounded-2xl w-[100%] h-[100%] object-contain"
                    />
                </div>
                <div className="mt-4 text-greenBlue font-hindMadurai">
                    <h3 className="font-medium text-2xl mb-5">{name}</h3>
                    <p className="mb-1">
                        <strong>Brand:</strong> {brand}
                    </p>
                    <p className="mb-1">
                        <strong>Model: </strong>
                        {model}
                    </p>
                    <p className="mb-1">
                        <strong>Version: </strong>
                        {version}
                    </p>
                </div>
                <div className="mt-6">
                    <h4 className="text-3xl text-greenBlue font-semibold mb-3">
                        ${price}
                    </h4>
                </div>
            </div>
            <button className="border border-orange rounded-[8px] uppercase text-greenBlue font-medium py-1 hover:bg-ligthOrangeOpacity">Add to Cart</button>
        </div>
    );
};

export default Item;
