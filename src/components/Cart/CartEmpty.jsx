import React from 'react'

const CartEmpty = () => {
  return (
    <section className="flex justify-center items-center home-height gap-x-6 backgroundSVG-home">
        <img src="../../assets/images/carritoCompra.png" alt="Shopping Cart" className="w-24" />
        <h3 className="tracking-widest uppercase font-hindMadurai font-semibold text-4xl text-greenBlue">Sorry, the shopping cart is empty</h3>
    </section>
  )
}

export default CartEmpty