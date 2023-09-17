import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Badge } from "@nextui-org/badge";
import CheckIcon from "./CheckIcon";

const Item = ({ id, name, price, image }) => {
    // const navigate = useNavigate()

    const { cart } = useCart();

    const isInCart = cart.some((prop) => prop.id === id);

    return (
        <>
            {isInCart ? (
                <Badge
                    isOneChar
                    size="xl"
                    content={<CheckIcon />}
                    placement="top-right"
                    className='absolute top-2 right-1 bg-orange'
                >
                    <div className="border-2 border-orange rounded-3xl py-4 px-6 flex flex-col w-[350px] justify-between backgroundSVG">
                        <div>
                            <div className="rounded-2xl border border-greenBlue w-[290px] h-80 m-auto">
                                <img
                                    src={`../../assets/images/products-images/${image}`}
                                    alt={name}
                                    className="rounded-2xl w-[100%] h-[100%] object-contain mix-blend-multiply"
                                />
                            </div>
                            <div className="mt-4 text-greenBlue font-hindMadurai">
                                <h3 className="font-medium text-2xl mb-5 text-center">
                                    {name}
                                </h3>
                                <p className="font-medium text-3xl tracking-wider mb-5 text-center">
                                    ${price}
                                </p>
                            </div>
                        </div>
                        <Link
                            to={`/item/${id}`}
                            className="border border-orange rounded-[8px] uppercase text-greenBlue text-center font-medium py-1 hover:bg-ligthOrangeOpacity"
                        >
                            Get More details
                        </Link>
                        {/* <button onClick={() => navigate('/detail')}></button> */}
                    </div>
                </Badge>
            ) : (
                <div className="border-2 border-orange rounded-3xl py-4 px-6 flex flex-col w-[350px] justify-between backgroundSVG">
                    <div>
                        <div className="rounded-2xl border border-greenBlue w-[290px] h-80 m-auto">
                            <img
                                src={`../../assets/images/products-images/${image}`}
                                alt={name}
                                className="rounded-2xl w-[100%] h-[100%] object-contain mix-blend-multiply"
                            />
                        </div>
                        <div className="mt-4 text-greenBlue font-hindMadurai">
                            <h3 className="font-medium text-2xl mb-5 text-center">
                                {name}
                            </h3>
                            <p className="font-medium text-3xl tracking-wider mb-5 text-center">
                                ${price}
                            </p>
                        </div>
                    </div>
                    <Link
                        to={`/item/${id}`}
                        className="border border-orange rounded-[8px] uppercase text-greenBlue text-center font-medium py-1 hover:bg-ligthOrangeOpacity"
                    >
                        Get More details
                    </Link>
                    {/* <button onClick={() => navigate('/detail')}></button> */}
                </div>
            )}
        </>
    );
};

export default Item;
