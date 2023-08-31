import React from "react";
import { NavLink } from "react-router-dom";

const CategoryNavList = () => {
    return (
        <div className="flex flex-col text-whiteOrange text-lg tracking-wide mb-1 leading-9 font-normal text-center">
            <NavLink className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1" to={`/products/Keyboards`}>
                Keyboards
            </NavLink>
            <NavLink className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1" to={`/products/Mouses`}>
                Mouses
            </NavLink>
            <NavLink className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1" to={`/products/Screens`}>
                Led Monitors
            </NavLink>
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Micro`}
            >
                Microprocessors
            </NavLink>
            <NavLink className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1" to={`/products/Other`}>
                Others
            </NavLink>
        </div>
    );
};

export default CategoryNavList;
