import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className="flex flex-wrap gap-7 justify-center">
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