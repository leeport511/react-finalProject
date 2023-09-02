import React from "react";
import { useCounter } from "../../hooks/useCounter";

const ItemCount = () => {
    const { counter, buttonState, incrementCounter, decrementCounter } = useCounter(1);

    

    return (
        <div>
            <div className="flex justify-center items-center text-3xl mb-3 text-greenBlue">
                <button onClick={incrementCounter} className={`w-9 ${buttonState.plusClick && 'scale-75 duration-200'}`} >
                    <img src="../../assets/images/suma.svg" alt="suma"/>
                </button>
                <h5 className="text-4xl text-center  mx-16">{counter}</h5>
                <button onClick={decrementCounter} className={`w-9 ${buttonState.minusClick && 'scale-75 duration-200'}`}>
                    <img src="../../assets/images/menos.svg" alt="resta"/>
                </button>
            </div>
            <div>
                <button className="border border-orange rounded-[8px] w-[100%] uppercase text-greenBlue font-medium py-1 hover:bg-ligthOrangeOpacity">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
