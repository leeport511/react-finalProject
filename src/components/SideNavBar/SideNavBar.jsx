import React, { useState } from "react";
// import {menuItems} from '../../constants/index'
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";
import CategoryNavList from "./CategoryNavList";
import { MenuFloatButton } from "./MenuFloatButton";

const SideNavBar = () => {

    const [displayCategories, setDisplayCategories] = useState(false)
    const [toogleMenuDisplay, setToogleMenuDisplay] = useState(false)
    const navigate = useNavigate();


    const toogleDisplay = () => {
        setDisplayCategories(!displayCategories)
    }

    const handleMenuDisplay = () => {
        setToogleMenuDisplay(!toogleMenuDisplay)
    }

   

    return (
        <>
                <MenuFloatButton toogleMenuDisplay={toogleMenuDisplay} handleMenuDisplay={handleMenuDisplay}/>
            <section className={`bg-greenBlue text-ligthOrange py-4 px-6 xl:py-8 xl:px-10 flex flex-col items-center justify-between h-screen xl:static absolute ${toogleMenuDisplay && "z-40 animate-fade"} `}>
                <div className="flex flex-col items-center">
                    <img
                        className="w-[120px] xl:w-[180px]  cursor-pointer"
                        src="../../assets/images/computadora-de-escritorio.png"
                        alt="Logo"
                        onClick={() => navigate("/")}
                    />
                    <h2 className="text-center uppercase font-montserrat font-bold tracking-[1.5px] xl:tracking-[2px] 2xl:tracking-[2.3px] mt-2">
                        fake e store
                    </h2>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-6 px-2 ">
                        <div className="flex hover:bg-ligthOrangeOpacity hover:rounded-xl ">
                            <NavLink
                                to={`/products`}
                                className={`font-hindMadurai font-semibold text-md xl:text-xl tracking-widest p-2`}
                                style={({isActive}) => { 
                                    return {
                                        color: isActive ? '#F8F1F1' : '',
                                        fontStyle: isActive ? 'italic' : '',
                                    }
                                }}
                            >
                                Products
                            </NavLink>

                            {/* //TODO: change direction of the arrow. */}
                            {
                                displayCategories 
                                ?
                                <img className="w-4 xl:w-6  cursor-pointer transition-all unset duration-250 ease-in-out" onClick={toogleDisplay} src="../../assets/images/Arrow-up.svg" alt="Arrow Up" />
                                :
                                <img className="w-4 xl:w-6 cursor-pointer rotate-180 duration-250 transition-all unset ease-in-out" onClick={toogleDisplay} src="../../assets/images/Arrow-up.svg" alt="Arrow Up" />
                            }
                        </div>
                            {
                                displayCategories && <CategoryNavList />
                            }
                            
                        <NavLink
                            to={`/About Us`}
                            className="font-hindMadurai font-semibold text-md xl:text-xl tracking-widest hover:bg-ligthOrangeOpacity p-2 hover:rounded-xl"
                            style={({isActive}) => { 
                                return {
                                    color: isActive ? '#F8F1F1' : '',
                                    fontStyle: isActive ? 'italic' : '',
                                }
                            }}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to={`/Contact Us`}
                            className="font-hindMadurai font-semibold text-md xl:text-xl tracking-widest hover:bg-ligthOrangeOpacity p-2 hover:rounded-xl"
                            style={({isActive}) => { 
                                return {
                                    color: isActive ? '#F8F1F1' : '',
                                    fontStyle: isActive ? 'italic' : '',
                                }
                            }}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        
        </>

    );
};

export default SideNavBar;
