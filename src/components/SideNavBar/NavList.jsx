import React from "react";
import { productsItems } from "../../constants/index";

const NavList = ({ name }) => {
    return (
        <div>
            <button className="font-hindMadurai font-semibold text-xl tracking-widest">
                {name}
            </button>
        </div>
    );
};

export default NavList;
