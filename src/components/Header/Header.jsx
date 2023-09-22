import React from "react";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <>
            <section className="flex flex-row justify-between items-center px-5 py-0 xl:px-10 xl:py-1">
                <h1 className="uppercase font-montserrat text-3xl xl:text-6xl font-bold xl:tracking-[3px] tracking-[2.2px] text-greenBlue">
                    fake e store
                </h1>

                <CartWidget />
            </section>
            <div className="flex justify-center">
                <div className="border border-greenBlue w-[97%]" />
            </div>
        </>
    );
};

export default Header;
