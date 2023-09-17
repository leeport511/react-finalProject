import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../../data/dataMock";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import IconByCategory from "./IconByCategory";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = ({ grettings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);

        const productsRef = !category ? collection(db, "products") : query(collection(db, "products"), where('category', '==', category))
        
        getDocs(productsRef).then(( querySnapshot ) =>  {

            setProducts(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        
        }).catch(( error ) => {
            console.error(error)
        }).finally(() => {
                    setLoading(false);
                });

       

        // const asyncProducts = category ? getProductsByCategory : getProducts;

        // asyncProducts(category)
        //     .then((products) => {
        //         setProducts(products);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [category]);

    return (
        <div className="scroll-smooth overflow-auto h-[89vh] flex flex-col items-center">
            {loading && <Loader />}
            {loading ? null : (
                <div>
                    <div className="flex justify-center items-center gap-x-6 my-2">
                       {category && <IconByCategory category={category} />} 
                        <h1 className="text-center my-12 font-montserrat font-bold tracking-wider text-greenBlue text-3xl uppercase">
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
