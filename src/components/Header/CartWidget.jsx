import React from "react";
import { Badge } from "@nextui-org/badge";

const CartWidget = () => {
    return (
        <button className='relative mb-4'>
            <Badge content='5' size='lg' className=" absolute translate-y-11 -translate-x-3 bg-orange border border-greenBlue text-whiteOrange font-medium" />
                <img
                    src="../../assets/images/carritoCompra.png"
                    alt="Green Shooping Cart"
                    className="w-[60px]"
                />
        </button>
    );
};

export default CartWidget;
