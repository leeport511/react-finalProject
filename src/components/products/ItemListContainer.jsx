import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../data/dataMock";  



const ItemListContainer = ({ grettings }) => {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    getProducts().then((products) =>{
      setProducts(products);
    })
   
  }, [])
  

    return (
        <div className="sc">
            <h1>{grettings}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
