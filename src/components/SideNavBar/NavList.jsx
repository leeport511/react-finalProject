import React from "react";
import { productsItems } from "../../constants/index";

const NavList = ({ name }) => {
    return (
        <div>
            <button className="font-hindMadurai font-semibold text-xl tracking-widest hover:bg-ligthOrangeOpacity p-2 hover:rounded-xl">
                {name}
            </button>
        </div>
    );
};

export default NavList;
