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
        <div className="scroll-smooth overflow-auto h-[89vh]">
            <h1 className="text-center my-8 font-hindMadurai font-medium tracking-widest text-greenBlue text-3xl capitalize">{grettings}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
