import React from 'react'

const ItemList = ({products}) => {
  return (
    <div>
      {
        products.map((product) =>{
          return (
            <div key={product.id}>
              <div>
               <img src={`../../assets/images/products-images/${product.image}`} alt={product.name} />
              </div>
              <div>
                <h3>{product.name}</h3>
                  <p>Brand: {product.brand}</p>
                  <p>Model: {product.model}</p>
                  <p>Version: {product.version}</p>
              </div>
              <div>
                <h4>{product.price}</h4>
              </div>
              <button>Add to Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList