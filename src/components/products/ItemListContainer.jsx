import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../../data/dataMock";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const ItemListContainer = ({ grettings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        const asyncProducts = category ? getProductsByCategory : getProducts;

        asyncProducts(category)
            .then((products) => {
                setProducts(products);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    return (
        <div className="scroll-smooth overflow-auto h-[89vh] flex flex-col items-center">
            {loading && <Loader />}
            {loading ? null : (
                <div>
                    <h1 className="text-center my-8 font-hindMadurai font-bold tracking-widest text-greenBlue text-3xl uppercase">
                        {category ? category : grettings}
                    </h1>
                    <ItemList products={products} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
