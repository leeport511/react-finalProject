import React from "react";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <>
            <section className="flex flex-row justify-between items-center px-10 py-1">
                <h1 className="uppercase font-montserrat text-6xl font-bold tracking-[3px] text-greenBlue">
                    fake e store
                </h1>
                <CartWidget />
            </section>
            <div className="flex justify-center">
                <div className="border border-greenBlue w-[97%]"/>
            </div>
        </>
    );
};

export default Header;
