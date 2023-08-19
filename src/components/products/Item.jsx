import React from "react";

const Item = ({name, image, brand, model, version, price}) => {
    return (
        <div >
            <div>
                <img
                    src={`../../assets/images/products-images/${image}`}
                    alt={name}
                />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Version: {version}</p>
            </div>
            <div>
                <h4>{price}</h4>
            </div>
            <button>Add to Cart</button>
        </div>
    )
};

export default Item;
