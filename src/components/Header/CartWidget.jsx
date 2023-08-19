import React from "react";
import { Badge } from "@nextui-org/badge";

const CartWidget = () => {
    return (
        <button className='relative'>
            <Badge content='5' className=" absolute translate-y-10 -translate-x-1 bg-orange rounded-full w-6 flex justify-center border border-greenBlue text-whiteOrange font-medium" />
                <img
                    src="../../assets/images/carritoCompra.png"
                    alt="Green Shooping Cart"
                    className="w-[60px]"
                />
        </button>
    );
};

export default CartWidget;
