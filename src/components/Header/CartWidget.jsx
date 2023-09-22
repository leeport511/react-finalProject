import React from "react";
import { Badge } from "@nextui-org/badge";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";


const CartWidget = () => {

    const navigate = useNavigate();
    const {totalQuantity} = useCart();    


    return (
        <button className='relative mb-3 xl:mb-4 -translate-y-2 xl:-translate-y-0' onClick={() => navigate('/cart')}>
            <Badge content={totalQuantity} size='md' className=" absolute translate-y-9 -translate-x-3 xl:translate-y-11 xl:-translate-x-3 bg-orange border border-greenBlue text-whiteOrange font-medium" />
                <img
                    src="../../assets/images/carritoCompra.png"
                    alt="Green Shooping Cart"
                    className="w-[50px] xl:w-[60px]"
                />
        </button>
    );
};

export default CartWidget;
