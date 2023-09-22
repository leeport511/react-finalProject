import React from "react";
import { useCounter } from "../../hooks/useCounter";

const ItemCount = ({ stock, onAdd }) => {
    const { counter:quantity, buttonState, incrementCounter, decrementCounter } =
        useCounter(1);



    return (
        <div>
            <div className="flex justify-center items-center text-3xl mb-3 text-greenBlue">
                <button
                    onClick={decrementCounter}
                    className={`w-7 xl:w-9 ${
                        buttonState.minusClick && "scale-75 duration-200"
                    }`}
                >
                    <img src="../../assets/images/menos.svg" alt="resta" />
                </button>
                <h5 className="text-2xl xl:text-4xl text-center  mx-16">{quantity}</h5>
                <button
                    onClick={() => incrementCounter(stock)}
                    className={`w-7 xl:w-9 ${
                        buttonState.plusClick && "scale-75 duration-200"
                    }`}
                >
                    <img src="../../assets/images/suma.svg" alt="suma" />
                </button>
            </div>
            <div>
                <button
                    disabled={stock === 0}
                    onClick={() => onAdd(quantity)}
                    className={`border border-orange rounded-[8px] w-[100%] uppercase text-greenBlue font-medium py-1 ${
                        stock === 0
                            ? "cursor-not-allowed bg-gray-300"
                            : "hover:bg-ligthOrangeOpacity"
                    }`}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
