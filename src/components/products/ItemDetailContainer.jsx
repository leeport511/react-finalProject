import React, { useEffect, useState } from "react";
// import { getItem } from "../../data/dataMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { getProductsById } from "../../services/firebase/products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductsById(id)
            .then((product) => {
                setItem(product);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return (
        <div className="flex flex-col animate-fade">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex justify-center items-center  mt-6 animate-fade">
                    <ItemDetail {...item} />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
