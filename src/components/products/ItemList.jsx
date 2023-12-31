import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

  
  return (
    <div className="flex flex-wrap gap-4 xl:gap-7 justify-center animate-fade">
      {
        products.map((product) =>{
          return (
           <Item key={product.id} {...product}/>
          )
        })
      }
    </div>
  )
}

export default ItemList