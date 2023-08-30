import React, { useEffect, useState } from 'react'
import { getItem } from '../../data/dataMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    

    useEffect(() => {
      getItem(id).then(item => {
        setItem(item)
      })
      
    }, [])
    
    console.log(item);

  return (
    <div className="flex justify-center items-center  mt-6">
        <ItemDetail {...item}/>
    </div>
  )
}

export default ItemDetailContainer