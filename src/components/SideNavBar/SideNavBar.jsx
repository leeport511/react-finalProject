import React, { useState } from "react";
// import {menuItems} from '../../constants/index'
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";
import CategoryNavList from "./CategoryNavList";

const SideNavBar = () => {

    const [displayCategories, setDisplayCategories] = useState(true)
    const navigate = useNavigate();


    const toogleDisplay = () => {
        setDisplayCategories(!displayCategories)
    }

   

    return (
        <section className="bg-greenBlue text-ligthOrange py-8 px-10 flex flex-col items-center justify-between h-screen">
            <div>
                <img
                    className="w-[180px] cursor-pointer"
                    src="../../assets/images/computadora-de-escritorio.png"
                    alt="Logo"
                    onClick={() => navigate("/")}
                />
                <h2 className="text-center uppercase font-montserrat font-bold tracking-[3px] mt-2">
                    fake e store
                </h2>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-6 px-2">
                    <div className="flex hover:bg-ligthOrangeOpacity hover:rounded-xl">
                        <NavLink
                            to={`/products`}
                            className="font-hindMadurai font-semibold text-xl tracking-widest p-2 "
                        >
                            Products
                        </NavLink>
                        {
                            displayCategories 
                            ?
                            <img className="w-6 rotate-180 cursor-pointer" onClick={toogleDisplay} src="../../assets/images/Arrow-up.svg" alt="Arrow Up" />
                            :
                            <img className="w-6 cursor-pointer" onClick={toogleDisplay} src="../../assets/images/Arrow-up.svg" alt="Arrow Up" />
                        }
                    </div>
                        {
                            displayCategories && <CategoryNavList />
                        }
                        
                    <NavLink
                        to={`/About Us`}
                        className="font-hindMadurai font-semibold text-xl tracking-widest hover:bg-ligthOrangeOpacity p-2 hover:rounded-xl"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to={`/Contact Us`}
                        className="font-hindMadurai font-semibold text-xl tracking-widest hover:bg-ligthOrangeOpacity p-2 hover:rounded-xl"
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default SideNavBar;
