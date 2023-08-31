import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../../data/dataMock";  
import { useParams } from "react-router-dom";


const ItemListContainer = ({ grettings }) => {
  
  const [products, setProducts] = useState([]); 
  
  const { category } = useParams();
  
  
  useEffect(() => {
    

    const asyncProducts = category ? getProductsByCategory : getProducts;

    asyncProducts(category).then((products) =>{
      setProducts(products);
    })
    
  }, [category])
  
 

    return (
        <div className="scroll-smooth overflow-auto h-[89vh]">
            <h1 className="text-center my-8 font-hindMadurai font-bold tracking-widest text-greenBlue text-3xl uppercase">{
              category ? category : grettings
            }</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
