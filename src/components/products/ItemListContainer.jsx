import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import { getProducts, getProductsByCategory } from "../../data/dataMock";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import IconByCategory from "./IconByCategory";
import { getProducts } from "../../services/firebase/products";



const ItemListContainer = ({ grettings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts(category)
        .then(products =>{
            setProducts(products);
        })
        .catch(( error ) => {
            console.error(error)
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
                    <div className="flex justify-center items-center gap-x-3 xl:gap-x-6 my-2 animate-fade">
                       {category && <IconByCategory category={category} />} 
                        <h1 className="text-center my-8 xl:my-12 font-montserrat font-bold tracking-wider text-greenBlue text-2xl uppercase xl:text-3xl ">
                            {category ? category : grettings}
                        </h1>
                        {category && <IconByCategory category={category} />} 
                    </div>
                    <ItemList products={products} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
