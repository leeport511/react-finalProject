import React from "react";
import { NavLink } from "react-router-dom";

const CategoryNavList = () => {
    return (
        <div className="flex flex-col text-whiteOrange text-sm xl:text-lg tracking-wide mb-1 leading-9 font-normal text-center">
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Keyboards`}
                style={({isActive}) => { 
                    return {
                        color: isActive ? "#E8AA42" : '',
                        fontStyle: isActive ? 'italic' : '',
                    }
                }}
            >
                Keyboards
            </NavLink>
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Mouses`}
                style={({isActive}) => { 
                    return {
                        color: isActive ? "#E8AA42" : '',
                        fontStyle: isActive ? 'italic' : '',
                    }
                }}
            >
                Mouses
            </NavLink>
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Screens`}
                style={({isActive}) => { 
                    return {
                        color: isActive ? "#E8AA42" : '',
                        fontStyle: isActive ? 'italic' : '',
                    }
                }}
            >
                Led Monitors
            </NavLink>
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Micro`}
                style={({isActive}) => { 
                    return {
                        color: isActive ? "#E8AA42" : '',
                        fontStyle: isActive ? 'italic' : '',
                    }
                }}
            >
                Microprocessors
            </NavLink>
            <NavLink
                className=" hover:bg-ligthOrangeOpacity hover:rounded-lg p-1"
                to={`/products/Other`}
                style={({isActive}) => { 
                    return {
                        color: isActive ? "#E8AA42" : '',
                        fontStyle: isActive ? 'italic' : '',
                    }
                }}
            >
                Others
            </NavLink>
        </div>
    );
};

export default CategoryNavList;
