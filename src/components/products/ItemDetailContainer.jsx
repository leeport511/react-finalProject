import React, { useEffect, useState } from "react";
import { getItem } from "../../data/dataMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        getItem(id)
            .then((item) => {
                setItem(item);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

 

    return (
        <div className="flex flex-col">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex justify-center items-center  mt-6">
                    <ItemDetail {...item} />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
