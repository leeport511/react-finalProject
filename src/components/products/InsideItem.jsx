import React from "react";
import { Link } from "react-router-dom";

const InsideItem = ({name, price, id, image}) => {

    const handleClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="border-2 border-orange rounded-3xl py-3 px-5 xl:py-4 xl:px-6 flex flex-col w-[300px] xl:w-[350px] justify-between backgroundSVG">
            <div>
                <div className="rounded-2xl border border-greenBlue w-[250px] xl:w-[290px] h-72 xl:h-80 m-auto">
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
                onClick={handleClick}
                to={`/item/${id}`}
                className="border border-orange rounded-[8px] uppercase text-greenBlue text-center font-medium py-1 hover:bg-ligthOrangeOpacity"
            >
                Get More details
            </Link>
            {/* <button onClick={() => navigate('/detail')}></button> */}
        </div>
    );
};

export default InsideItem;
