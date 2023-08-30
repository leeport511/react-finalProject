import React from "react";

const ItemDetail = ({ name, brand, model, version, price, image }) => {
    return (
        <div className="flex flex-col w-[520px] px-4 py-6 rounded-2xl justify-center items-center border border-ligthOrange">
            <div className="px-4">
                <div className="rounded-2xl border border-greenBlue w-[450px] h-[390px] m-auto">
                    <img
                        src={`../../assets/images/products-images/${image}`}
                        alt={name}
                        className="rounded-3xl w-[100%] h-[100%] object-contain p-2"
                    />
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
                    <h4 className="text-4xl text-greenBlue font-semibold mb-12">
                        ${price}
                    </h4>
                </div>
            </div>
            <button className="border border-orange rounded-[8px] w-[100%] uppercase text-greenBlue font-medium py-1 hover:bg-ligthOrangeOpacity">
                Add to cart
            </button>
        </div>
    );
};

export default ItemDetail;
