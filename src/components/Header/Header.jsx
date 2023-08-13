import React from "react";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <>
            <section className="flex flex-row justify-between px-10 py-5">
                <h1 className="uppercase text-5xl font-extrabold tracking-[6px] text-greenBlue">
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
