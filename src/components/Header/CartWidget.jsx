import React from "react";
import { Badge } from "@nextui-org/badge";
import { useCart } from "../../hooks/useCart";


const CartWidget = () => {

 const {totalQuantity} = useCart();    


    return (
        <button className='relative mb-4'>
            <Badge content={totalQuantity} size='lg' className=" absolute translate-y-11 -translate-x-3 bg-orange border border-greenBlue text-whiteOrange font-medium" />
                <img
                    src="../../assets/images/carritoCompra.png"
                    alt="Green Shooping Cart"
                    className="w-[60px]"
                />
        </button>
    );
};

export default CartWidget;
